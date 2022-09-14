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
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isValid?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isActive?: boolean;
  isSvg?: boolean;
  omitStates?: StylePresetStates[];
  filterStates?: StylePresetStates[];
  omitStyles?: StylePresetStyleKeys[];
  filterStyles?: StylePresetStyleKeys[];
  isFocusedVisible?: boolean;
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
  const {filterStyles = null, omitStyles = [], isSvg = false} = options || {};
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
    isChecked = false,
    isLoading = false,
    isDisabled = false,
    isInvalid = false,
    isValid = false,
    isFocused = false,
    isHovered = false,
    isActive = false,
    isFocusedVisible = false,
  } = options || {};
  const {selected, loading, invalid, valid, ...presetStates} =
    filterStates && filterStates.length
      ? filterObject(stylePreset, filterStates)
      : rejectObject(stylePreset, omitStates);
  const stateOverrides =
    (isDisabled && presetStates.disabled) ||
    (isLoading && loading) ||
    (isFocusedVisible && presetStates['focus-visible']) ||
    (isFocused && presetStates.focus) ||
    (isHovered && presetStates.hover) ||
    (isActive && presetStates.active) ||
    (isSelected && selected) ||
    (isChecked && presetStates.checked) ||
    (isInvalid && invalid) ||
    (isValid && valid) ||
    undefined;

  const forcedStates = [];
  if (isSelected) {
    forcedStates.push('selected');
  }
  if (isChecked) {
    forcedStates.push('checked');
  }
  if (isDisabled) {
    forcedStates.push('disabled');
  }
  if (isLoading) {
    forcedStates.push('loading');
  }
  if (isInvalid) {
    forcedStates.push('invalid');
  }
  if (isValid) {
    forcedStates.push('valid');
  }
  if (isFocusedVisible) {
    forcedStates.push('focus-visible');
  }
  if (isFocused) {
    forcedStates.push('focus');
  }
  if (isHovered) {
    forcedStates.push('hover');
  }
  if (isActive) {
    forcedStates.push('active');
  }

  if (stateOverrides) {
    const pseudoStates = [
      'hover',
      'focus',
      'focus-visible',
      'active',
      'invalid',
      'valid',
      'disabled',
    ];

    let pseudoOverrides = {};
    let currentSubState = '';

    /* istanbul ignore next */
    if (forcedStates.length > 0) {
      const path = forcedStates.join(':') as keyof typeof presetStates;
      pseudoOverrides = presetStates[path] || {};
      currentSubState = path;
    }

    const pseudoPresets = {} as {[key: string]: StylePresetStyles | undefined};
    /* istanbul ignore next */
    if (currentSubState !== '') {
      pseudoStates.forEach(pseudo => {
        const subStatePseudoClass = `${currentSubState}:${pseudo}` as keyof typeof presetStates;
        if (presetStates[subStatePseudoClass]) {
          pseudoPresets[pseudo] = presetStates[subStatePseudoClass];
        }
      });
    }

    const {base = {}} = presetStates;
    return {
      base: {...base, ...stateOverrides, ...pseudoOverrides},
      ...pseudoPresets,
    };
  }

  return presetStates;
};

const addSafariMediaTag = (
  cssObject: CSSObject,
  safariOutlineOffset: string,
  safariOutlineStyle: string,
) => {
  const outlineOffset = safariOutlineOffset
    ? {outlineOffset: safariOutlineOffset}
    : {};
  const outlineStyle = safariOutlineStyle
    ? {outlineStyle: safariOutlineStyle}
    : {};
  // eslint-disable-next-line no-param-reassign
  cssObject['@media not all and (min-resolution: 0.001dpcm)'] = {
    '@supports (-webkit-appearance: none) and (stroke-color: transparent)': {
      ...outlineOffset,
      ...outlineStyle,
    },
  };
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

        const {
          safariOutlineOffset,
          safariOutlineStyle,
          ...styles
        } = getPresetStyles(presetState, options);

        if (safariOutlineOffset || safariOutlineStyle) {
          addSafariMediaTag(
            styles,
            safariOutlineOffset as string,
            safariOutlineStyle as string,
          );
        }

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
  if (!preset) return '';
  return (preset[state] || {})[cssProp] || '';
};
