import {ThemeProp, CSSObject, getPresetValueFromTheme, MQ} from './style';
import {
  StylePresetStyles,
  StylePresetStyleKeys,
  StylePresetStateKeys,
  StylePresetStates,
  StylePresetKeys,
} from '../themes/mappers/style-preset';
import {filterObject, rejectObject} from './filter-object';
import {Theme} from '../themes/creator';

export interface GetStylePresetFromThemeOptions {
  isLoading?: boolean;
  isCurrent?: boolean;
  isDisabled?: boolean;
  omitStates?: StylePresetStateKeys[];
  filterStates?: StylePresetStateKeys[];
  omitStyles?: StylePresetStyleKeys[];
  filterStyles?: StylePresetStyleKeys[];
}

export const getPresetStyles = (
  presetStyles: StylePresetStyles,
  options?: GetStylePresetFromThemeOptions,
) => {
  const {filterStyles = null, omitStyles = []} = options || {};
  const {iconColor, ...cssObject} = filterStyles
    ? filterObject(presetStyles, filterStyles)
    : rejectObject(presetStyles, omitStyles);
  if (iconColor) {
    return {
      ...cssObject,
      svg: {
        fill: iconColor,
        color: iconColor,
      },
    } as CSSObject;
  }

  return cssObject as CSSObject;
};

const getPresetStates = (
  stylePreset: StylePresetStates,
  options?: GetStylePresetFromThemeOptions,
) => {
  const {
    omitStates = [],
    filterStates = [],
    isCurrent = false,
    isLoading = false,
    isDisabled = false,
  } = options || {};
  const {current, loading, ...presetStates} =
    filterStates && filterStates.length
      ? filterObject(stylePreset, filterStates)
      : rejectObject(stylePreset, omitStates);
  const stateOverrides =
    (isDisabled && presetStates.disabled) ||
    (isLoading && loading) ||
    (isCurrent && current) ||
    undefined;
  if (stateOverrides) {
    const {base = {}} = presetStates;
    return {base: {...base, ...stateOverrides}};
  }

  return presetStates;
};

const getStylePresetValueFromTheme = (
  stylePreset: StylePresetStates,
  options?: GetStylePresetFromThemeOptions,
) =>
  Object.entries(getPresetStates(stylePreset, options)).reduce(
    (acc, [stateKey, presetState]) => {
      if (presetState) {
        const selector =
          stateKey === 'disabled'
            ? `:${stateKey}`
            : `:${stateKey}:not(:disabled)`;
        const styles = getPresetStyles(presetState, options);
        if (stateKey === 'base') {
          return {...acc, ...styles};
        }
        acc[selector] = styles;
      }

      return acc;
    },
    {} as CSSObject,
  );

export const getStylePresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<StylePresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: GetStylePresetFromThemeOptions,
) => (props: Props) => {
  const stylePreset = getPresetValueFromTheme('stylePresets')(
    defaultToken,
    customProp,
  )(props) as Partial<StylePresetStates> | Array<[string, StylePresetStates]>;
  if (Array.isArray(stylePreset)) {
    return stylePreset.reduce(
      (acc, [mq, preset], index) => {
        const style = getStylePresetValueFromTheme(preset, options);
        if (index === 0) {
          return style;
        }
        acc[mq] = style;
        return acc;
      },
      {} as CSSObject,
    );
  }

  return stylePreset ? getStylePresetValueFromTheme(stylePreset, options) : '';
};

export const getSingleStylePreset = (
  {stylePresets}: Theme,
  state: StylePresetStateKeys,
  cssProp: Exclude<StylePresetStyleKeys, 'borderRadius'>,
  defaultToken: string,
  customToken?: string,
) => {
  const preset =
    (customToken && stylePresets[customToken]) || stylePresets[defaultToken];
  return (preset[state] || {})[cssProp] || '';
};
