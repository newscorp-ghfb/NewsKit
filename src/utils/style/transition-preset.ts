import {
  BreakpointKeys,
  Theme,
  TransitionPreset,
  TransitionPresetStates,
  TransitionPresetStyleKeys,
  TransitionPresetStyles,
  TransitionToken,
} from '../../theme/types';
import {deepMerge} from '../deep-merge';
import {getToken} from '../get-token';
import {isArrayLikeObject, unifyTransition} from './utils';
import {hasOwnProperty} from '../has-own-property';
import {ThemeProp} from '../style-types';
import {CSSObject} from './emotion';
import {MQ} from './types';
import {getMediaQueryFromTheme, isResponsive} from '../responsive-helpers';

const cssTransitionPropertiesList: [TransitionPresetStyleKeys, string][] = [
  ['transitionProperty', ', '],
  ['transitionDuration', ', '],
  ['transitionDelay', ', '],
  ['transitionTimingFunction', ', '],
  ['transform', ' '],
];

const getTransitionPresetValueFromTheme = (
  transitionPreset: TransitionPreset,
  componentClassName?: string,
) =>
  Object.entries(transitionPreset).reduce((acc, [stateKey, stateStyles]) => {
    if (stateStyles && Object.keys(stateStyles).length) {
      const state = stateKey
        .split(/(?=[A-Z])/)
        .map(x => x.toLowerCase())
        .join('-');
      const selector = `&.${componentClassName}-${state}`;

      if (stateKey === 'base') {
        return {...acc, ...stateStyles};
      }

      acc[selector] = stateStyles;
    }

    return acc;
  }, {} as CSSObject);

function concatAndMergeInTransitionStringsForPseudoState(
  entry: [string, TransitionPresetStyles],
  mergedTransitionPreset: TransitionPreset,
) {
  const stateKey = entry[0] as TransitionPresetStates;
  const stateStyles = entry[1];

  const shouldConcatTransitionStrings = (
    cssProperty: TransitionPresetStyleKeys,
  ) =>
    hasOwnProperty(stateStyles, cssProperty) &&
    mergedTransitionPreset[stateKey] &&
    hasOwnProperty(mergedTransitionPreset[stateKey]!, cssProperty);

  const combinedTransitionProperties = cssTransitionPropertiesList
    .filter(([cssProperty]) => shouldConcatTransitionStrings(cssProperty))
    .reduce((acc, [cssProperty, delimiter]) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      acc[cssProperty] = `${
        mergedTransitionPreset[stateKey]![
          cssProperty as keyof TransitionPresetStyles
        ]
      }${delimiter}${stateStyles[cssProperty]}`;
      return acc;
    }, {} as {[key: string]: string});

  const updatedStateStyles = {
    ...stateStyles,
    ...combinedTransitionProperties,
  };

  mergedTransitionPreset[stateKey] = deepMerge(
    mergedTransitionPreset[stateKey],
    updatedStateStyles,
  );

  return mergedTransitionPreset;
}

function concatAndMergeInTransitionStringsForPreset(
  transitionPreset: TransitionPreset,
  mergedTransitionPreset: TransitionPreset,
): TransitionPreset {
  return Object.entries(transitionPreset).reduce(
    (mergedTransitionPresetAcc, entry) =>
      concatAndMergeInTransitionStringsForPseudoState(
        entry,
        mergedTransitionPresetAcc,
      ),
    mergedTransitionPreset,
  );
}

const getMergedTransitionPresets = (token: TransitionToken[], theme: Theme) => {
  const mergedTransitionPresets = token
    .map(tkn => unifyTransition(theme, tkn))
    .filter(transition => transition)
    .reduce(
      (mergedTransitionPreset, transition) =>
        concatAndMergeInTransitionStringsForPreset(
          transition,
          mergedTransitionPreset,
        ),
      {} as TransitionPreset,
    );

  return mergedTransitionPresets;
};

export const getTransitionPresetFromTheme = <Props extends ThemeProp>(
  token: MQ<TransitionToken> | MQ<TransitionToken[]>,
  componentClassName?: string,
) => (props: Props) => {
  if (isResponsive(token, props.theme.breakpoints)) {
    return Object.entries(token).reduce(
      (acc, [key, transitionPresetToken], index, arr) => {
        const nextKey = arr[index + 1] ? arr[index + 1][0] : undefined;

        const mediaQuery = getMediaQueryFromTheme(
          key as BreakpointKeys,
          nextKey as BreakpointKeys,
        )({
          theme: props.theme,
        });

        if (Array.isArray(transitionPresetToken)) {
          const mergedTransitionPresets = getMergedTransitionPresets(
            transitionPresetToken as TransitionToken[],
            props.theme,
          );

          acc[mediaQuery] = getTransitionPresetValueFromTheme(
            mergedTransitionPresets,
            componentClassName,
          );
        } else {
          const transitionPreset = unifyTransition(
            props.theme,
            transitionPresetToken,
          );

          acc[mediaQuery] = getTransitionPresetValueFromTheme(
            transitionPreset,
            componentClassName,
          );
        }

        return acc;
      },
      {} as {[index: string]: CSSObject},
    );
  }

  if (Array.isArray(token)) {
    const mergedTransitionPresets = getMergedTransitionPresets(
      token,
      props.theme,
    );

    return Object.keys(mergedTransitionPresets).length
      ? getTransitionPresetValueFromTheme(
          mergedTransitionPresets,
          componentClassName,
        )
      : '';
  }

  const transitionPreset = unifyTransition(
    props.theme,
    token as TransitionToken,
  );

  return transitionPreset
    ? getTransitionPresetValueFromTheme(transitionPreset, componentClassName)
    : '';
};

const getDefaultedValue = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FromThemeUtil extends (...args: any) => any
>(
  getPresetFromThemeUtil: FromThemeUtil,
  presetType: string,
) => <Props extends ThemeProp>(
  defaultPath: string | undefined,
  overridePath: string | false = '',
  componentClassName?: string,
) => (props: Props) => {
  const token = getToken(props, defaultPath, overridePath, presetType);

  let tokenAsSingleOrMultiply;

  if (isResponsive(token, props.theme.breakpoints)) {
    tokenAsSingleOrMultiply = Object.entries(token).reduce((acc, currVal) => {
      const [bp, trValue] = currVal as [string, object];
      acc[bp] = (isArrayLikeObject(trValue)
        ? Object.values(trValue)
        : trValue) as TransitionToken | TransitionToken[];

      return acc;
    }, {} as {[index: string]: TransitionToken | TransitionToken[]});
  } else {
    tokenAsSingleOrMultiply = isArrayLikeObject(token)
      ? Object.values(token)
      : token;
  }

  return getPresetFromThemeUtil(
    tokenAsSingleOrMultiply,
    componentClassName,
  )(props);
};

export const getTransitionPreset = getDefaultedValue(
  getTransitionPresetFromTheme,
  'transitionPreset',
);
