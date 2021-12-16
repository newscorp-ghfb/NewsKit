import {
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

export const getTransitionPresetFromTheme = <Props extends ThemeProp>(
  token: TransitionToken | TransitionToken[],
  componentClassName?: string,
) => (props: Props) => {
  if (Array.isArray(token)) {
    const mergedTransitionPresets = token
      .map(tkn => unifyTransition(props.theme, tkn))
      .filter(transition => transition)
      .reduce(
        (mergedTransitionPreset, transition) =>
          concatAndMergeInTransitionStringsForPreset(
            transition,
            mergedTransitionPreset,
          ),
        {} as TransitionPreset,
      );

    return Object.keys(mergedTransitionPresets).length
      ? getTransitionPresetValueFromTheme(
          mergedTransitionPresets,
          componentClassName,
        )
      : '';
  }

  const transitionPreset = unifyTransition(props.theme, token);

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

  const tokenAsSingleOrMultiply = isArrayLikeObject(token)
    ? Object.values(token)
    : token;

  return getPresetFromThemeUtil(
    tokenAsSingleOrMultiply,
    componentClassName,
  )(props);
};

export const getTransitionPreset = getDefaultedValue(
  getTransitionPresetFromTheme,
  'transitionPreset',
);
