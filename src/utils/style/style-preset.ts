import {
  Theme,
  StylePresetStates,
  StylePresetStyleKeys,
  StylePresetStyles,
  StylePreset,
} from '../../theme';
import {filterObject, rejectObject} from '../filter-object';
import {ThemeProp} from '../style-types';
import {getDefaultedValue, getResponsiveValueFromTheme} from './base';
import {CSSObject} from './emotion';
import {MQ} from './types';

export interface GetStylePresetFromThemeOptions {
  nestedCssSelector?: string;
  isLoading?: boolean;
  isSelected?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  isSvg?: boolean;
  omitStates?: StylePresetStates[];
  filterStates?: StylePresetStates[];
  omitStyles?: StylePresetStyleKeys[];
  filterStyles?: StylePresetStyleKeys[];
}

/* When we are not on directly on a svg we need to add an 
  additional css selector to increase the specificity, allowing
  us to overrule the default color. Icon button is an example 
  of this in action */
const getCssSvgFillObject = (iconColor: string, isSvg: boolean): object =>
  isSvg
    ? {fill: iconColor}
    : {
        svg: {
          fill: iconColor,
        },
      };

export const getPresetStyles = (
  presetStyles: StylePresetStyles,
  options?: GetStylePresetFromThemeOptions,
) => {
  const {filterStyles = null, omitStyles = [], isSvg: isSvg = false} =
    options || {};
  const {iconColor, placeholderColor, ...cssObject} = filterStyles
    ? filterObject(presetStyles, filterStyles)
    : rejectObject(presetStyles, omitStyles);
  if (iconColor) {
    return {
      ...cssObject,
      ...getCssSvgFillObject(iconColor, isSvg),
    } as CSSObject;
  }

  if (placeholderColor) {
    return {
      ...cssObject,
      '::placeholder': {
        color: placeholderColor,
      },
    } as CSSObject;
  }

  return cssObject as CSSObject;
};

const getPresetStates = (
  stylePreset: StylePreset,
  options?: GetStylePresetFromThemeOptions,
) => {
  const {
    omitStates = [],
    filterStates = [],
    isSelected = false,
    isLoading = false,
    isDisabled = false,
    isInvalid = false,
    isValid = false,
  } = options || {};
  const {selected, loading, invalid, valid, ...presetStates} =
    filterStates && filterStates.length
      ? filterObject(stylePreset, filterStates)
      : rejectObject(stylePreset, omitStates);
  const stateOverrides =
    (isDisabled && presetStates.disabled) ||
    (isLoading && loading) ||
    (isSelected && selected) ||
    (isInvalid && invalid) ||
    (isValid && valid) ||
    undefined;
  if (stateOverrides) {
    const {base = {}} = presetStates;
    return {base: {...base, ...stateOverrides}};
  }

  return presetStates;
};

const getStylePresetValueFromTheme = (
  stylePreset: StylePreset,
  options?: GetStylePresetFromThemeOptions,
) =>
  Object.entries(getPresetStates(stylePreset, options)).reduce(
    (acc, [stateKey, presetState]) => {
      if (presetState) {
        const nestedCssSelector = options && options.nestedCssSelector;
        const selector =
          stateKey === 'disabled'
            ? `:${stateKey} ${nestedCssSelector || ''}`
            : `:${stateKey}:not(:disabled) ${nestedCssSelector || ''}`;
        const styles = getPresetStyles(presetState, options);
        if (stateKey === 'base') {
          if (nestedCssSelector) {
            acc[nestedCssSelector] = styles;
            return acc;
          }
          return {...acc, ...styles};
        }
        acc[selector] = styles;
      }

      return acc;
    },
    {} as CSSObject,
  );

export const getStylePresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: GetStylePresetFromThemeOptions,
) => (props: Props) => {
  const stylePreset = getResponsiveValueFromTheme('stylePresets')(
    defaultToken,
    customProp,
  )(props) as Partial<StylePreset> | Array<[string, StylePreset]>;

  if (Array.isArray(stylePreset)) {
    return stylePreset.reduce((acc, [mq, preset]) => {
      acc[mq] = getStylePresetValueFromTheme(preset, options);
      return acc;
    }, {} as CSSObject);
  }
  return stylePreset ? getStylePresetValueFromTheme(stylePreset, options) : '';
};

export const getStylePreset = getDefaultedValue(
  getStylePresetFromTheme,
  'stylePreset',
);

export const getSingleStylePreset = (
  {stylePresets}: Theme,
  state: StylePresetStates,
  cssProp: Exclude<StylePresetStyleKeys, 'borderRadius'>,
  defaultToken: string,
  customToken?: string,
) => {
  const preset =
    (customToken && stylePresets[customToken]) || stylePresets[defaultToken];
  return (preset[state] || {})[cssProp] || '';
};
