import baseStyled, {CreateStyled, CSSObject} from '@emotion/styled';
import {css} from '@emotion/core';
import {getFontSizing} from './font-sizing';
import {
  SpacePresetKeys,
  PaddingPresetKeys,
  SizingKeys,
  BorderRadiusKeys,
  ShadowKeys,
  TypePreset,
  TypePresetKeys,
  ColorKeys,
  AnimationKeys,
  BorderKeys,
  Theme,
  BreakpointKeys,
  FontPrimitivesKeys,
  LineHeightKeys,
  FontSizeKeys,
} from '../theme';
import {getMediaQuery, isResponsive} from './responsive-helpers';
import {filterObject} from './filter-object';
import {isFontConfigObject} from './guards';
import {getFontProps} from './get-font-props';
import {getToken} from './get-token';
import {ThemeProp} from './style-types';

export {CSSObject, SerializedStyles} from '@emotion/core';

export {css};

// Cast styled with the Theme so we don't have to specify theme at every usage.
export const styled = baseStyled as CreateStyled<Theme>;

export type Responsive<T> = T | T[];
export type MQ<T> =
  | T
  | Partial<{
      xs: T;
      sm: T;
      md: T;
      lg: T;
    }>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValid = (value: any): boolean =>
  !(Number.isNaN(value) || Array.isArray(value) || typeof value === 'object');

export const getDefaultedValue = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  FromThemeUtil extends (...args: any) => any
>(
  getPresetFromThemeUtil: FromThemeUtil,
  presetType: string,
  cssProp?: string,
) => <Props extends ThemeProp>(
  defaultPath: string | undefined,
  overridePath: string | false = '',
  option?: Parameters<FromThemeUtil>[2],
) => (props: Props) =>
  getPresetFromThemeUtil(
    getToken(props, defaultPath, overridePath, presetType),
    undefined,
    cssProp || option,
  )(props);

export const getValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: MQ<ThemeToken>,
  customProp?: Exclude<keyof Props, 'theme'>,
  allowNonThemeValue?: boolean,
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const section = props.theme[themeKey] as any;
  const token = (customProp && props[customProp]) || defaultToken;

  return (
    (section && section[token]) ||
    (allowNonThemeValue && isValid(token) ? token : '')
  );
};

export const getResponsiveValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: MQ<ThemeToken>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => ({theme, ...props}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const section = theme[themeKey] as any;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const {breakpoints} = theme;
  if (
    propKeys &&
    typeof propKeys === 'object' &&
    isResponsive(propKeys, breakpoints)
  ) {
    const mq = (Object.keys(breakpoints) as BreakpointKeys[]).sort(
      (a, b) => breakpoints[a] - breakpoints[b],
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const presetKeys = Object.entries(filterObject(propKeys, mq as any)).sort(
      ([a], [b]) =>
        mq.indexOf(a as BreakpointKeys) - mq.indexOf(b as BreakpointKeys),
    );
    const cssObject = presetKeys.reduce(
      (acc, [key, presetKey]) => {
        const preset = section[presetKey as ThemeToken];
        if (preset) {
          const mediaQuery = getMediaQuery({
            'min-width': `${breakpoints[key as BreakpointKeys]}px`,
          });
          acc[mediaQuery] = preset;
        }
        return acc;
      },
      {} as CSSObject,
    );
    return Object.entries(cssObject);
  }

  return (propKeys && section[propKeys]) || '';
};

export const getTypePresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<TypePresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: {withCrop: boolean},
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyCrop = (typePreset: any) => {
    const {fontSize, lineHeight, fontFamily} = typePreset;
    const cropProps = getFontProps(
      fontSize,
      lineHeight,
      fontFamily,
      props.theme.fonts,
    );
    return {
      ...typePreset,
      ...cropProps,
    };
  };

  const {withCrop = false} = options || {};
  const typePreset = getResponsiveValueFromTheme('typePresets')(
    defaultToken,
    customProp,
  )(props) as Partial<TypePreset> | Array<[string, CSSObject]>;

  if (Array.isArray(typePreset)) {
    return typePreset.reduce(
      (acc, [mq, cssObject], index) => {
        let cssObjectFinal = cssObject;

        if (withCrop && !Array.isArray(cssObject)) {
          cssObjectFinal = applyCrop(cssObject);
        }

        if (index === 0) {
          return {...acc, ...cssObjectFinal};
        }
        acc[mq] = cssObjectFinal;
        return acc;
      },
      {} as CSSObject,
    );
  }

  if (typePreset && withCrop && !Array.isArray(typePreset)) {
    return applyCrop(typePreset);
  }
  return typePreset;
};

export const getTypePreset = getDefaultedValue(
  getTypePresetFromTheme,
  'typePreset',
);

export const getAnimationFromTheme = getValueFromTheme<AnimationKeys>(
  'animations',
);

export const getFontsFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<FontPrimitivesKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  const section = props.theme.fonts;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const style = section[propKeys as FontPrimitivesKeys];

  if (style && isFontConfigObject(style)) {
    return style.fontFamily;
  }

  return propKeys ? style : '';
};

export const getColorFromTheme = getValueFromTheme<ColorKeys>('colors');

export const getSizingFromTheme = getValueFromTheme<SizingKeys>('sizing');

export const getSpacingFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<SpacePresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
  cssProp?: string,
) => (props: Props) => {
  const value = getResponsiveValueFromTheme('spacePresets')(
    defaultToken,
    customProp,
  )(props) as string | Array<[string, string]>;
  if (Array.isArray(value)) {
    return value.reduce(
      (acc, [mq, preset], index) => {
        const style = cssProp && {[cssProp]: preset};
        if (index === 0 && style) {
          return style;
        }
        acc[mq] = style;
        return acc;
      },
      {} as CSSObject,
    );
  }

  return cssProp ? {[cssProp]: value} : value;
};

export const getSpacingInline = getDefaultedValue(
  getSpacingFromTheme,
  'spaceInline',
  'marginRight',
);
export const getSpacingStack = getDefaultedValue(
  getSpacingFromTheme,
  'spaceStack',
  'marginBottom',
);

export const getSizing = getDefaultedValue(getSizingFromTheme, 'sizing');
export const getMinHeight = getDefaultedValue(getSizingFromTheme, 'minHeight');

export const getSpace = getDefaultedValue(getSpacingFromTheme, 'space');

export const getPaddingPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<PaddingPresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  const padding = getResponsiveValueFromTheme('spacePresets')(
    defaultToken,
    customProp,
  )(props) as string | Array<[string, string]>;
  if (Array.isArray(padding)) {
    return padding.reduce(
      (acc, [mq, preset], index) => {
        const style = {padding: preset};
        if (index === 0) {
          return style;
        }
        acc[mq] = style;
        return acc;
      },
      {} as CSSObject,
    );
  }

  return {padding};
};

export const getPaddingPreset = getDefaultedValue(
  getPaddingPresetFromTheme,
  'paddingPreset',
);

export const getMarginPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<SpacePresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  const margin = getResponsiveValueFromTheme('spacePresets')(
    defaultToken,
    customProp,
  )(props) as string | Array<[string, string]>;
  if (Array.isArray(margin)) {
    return margin.reduce(
      (acc, [mq, preset], index) => {
        const style = {margin: preset};
        if (index === 0) {
          return style;
        }
        acc[mq] = style;
        return acc;
      },
      {} as CSSObject,
    );
  }

  return {margin};
};

export const getMarginPreset = getDefaultedValue(
  getMarginPresetFromTheme,
  'marginPreset',
);

export const getBorderFromTheme = getValueFromTheme<BorderKeys>('borders');

export const getBorderRadiusFromTheme = getValueFromTheme<BorderRadiusKeys>(
  'borders',
);

export const getShadowFromTheme = getValueFromTheme<ShadowKeys>('shadows');

export const getFontSizingFromTheme = (
  fontSizeKey: TypePresetKeys | FontSizeKeys,
  lineHeightKey: LineHeightKeys,
) => ({theme}: ThemeProp) => {
  const typePresets = theme.typePresets[fontSizeKey as TypePresetKeys];
  const fontSize = typePresets
    ? typePresets.fontSize
    : theme.fonts[fontSizeKey as FontSizeKeys];
  return getFontSizing(fontSize, theme.fonts[lineHeightKey]);
};
