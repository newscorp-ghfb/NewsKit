import {
  TransitionPreset,
  TransitionPresetStates,
  TransitionPresetStyleKeys,
  TransitionPresetStyles,
} from '../../theme/types';
import {deepMerge} from '../deep-merge';
import {getToken} from '../get-token';
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

function concatAndMergeInTransitionStringsForPreset<Props extends ThemeProp>(
  props: Props,
  token: string,
  mergedTransitionPreset: TransitionPreset,
): TransitionPreset {
  return Object.entries(props.theme.transitionPresets[token]).reduce(
    (mergedTransitionPresetAcc, entry) =>
      concatAndMergeInTransitionStringsForPseudoState(
        entry,
        mergedTransitionPresetAcc,
      ),
    mergedTransitionPreset,
  );
}

export const getTransitionPresetFromTheme = <Props extends ThemeProp>(
  token: string | string[],
  componentClassName?: string,
) => (props: Props) => {
  if (Array.isArray(token)) {
    const mergedTransitionPresets = token
      .filter(tkn => props.theme.transitionPresets[tkn])
      .reduce(
        (mergedTransitionPreset, tkn) =>
          concatAndMergeInTransitionStringsForPreset<Props>(
            props,
            tkn,
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

  const transitionPreset: TransitionPreset =
    props.theme.transitionPresets[token];

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

  const tokenAsStringOrArray =
    typeof token === 'object' ? Object.values(token) : token;

  return getPresetFromThemeUtil(
    tokenAsStringOrArray,
    componentClassName,
  )(props);
};

export const getTransitionPreset = getDefaultedValue(
  getTransitionPresetFromTheme,
  'transitionPreset',
);
