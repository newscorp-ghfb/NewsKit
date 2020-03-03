import baseStyled, {CreateStyled} from '@emotion/styled';
import {
  TypePresetKeys,
  ColorKeys,
  AnimationKeys,
  BorderKeys,
  Theme,
  FontPrimitivesKeys,
} from '../themes';
import {FontSizeKeys, LineHeightKeys} from '../themes/newskit-light/fonts';
import {getFontSizing} from './font-sizing';
import {GridKeys} from '../themes/newskit-light/grid';
import {ShadowKeys} from '../themes/newskit-light/shadow';
import {SizingKeys, IconSizeKeys} from '../themes/newskit-light/spacing';
import {MarginPresetKeys, PaddingPresetKeys} from '../themes/mappers/spacing';
import {BorderRadiusKeys} from '../themes/mappers/border-radius';

export {css, CSSObject} from '@emotion/core';

// Cast styled with the Theme so we don't have to specify theme at every usage.
export const styled = baseStyled as CreateStyled<Theme>;

export type Responsive<T> = T | T[];
export interface ThemeProp {
  theme: Theme;
}

export const getValueFromTheme = <ThemeToken extends string>(
  themeKey: keyof Theme,
) => <Props extends ThemeProp>(
  defaultToken?: ThemeToken,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const section = props.theme[themeKey] as any;
  const propKeys = (customProp && props[customProp]) || defaultToken;

  return propKeys ? section[propKeys] : '';
};

export const getTypePresetFromTheme = getValueFromTheme<TypePresetKeys>(
  'typePresets',
);

export const getAnimationFromTheme = getValueFromTheme<AnimationKeys>(
  'animation',
);

export const getFontsFromTheme = getValueFromTheme<FontPrimitivesKeys>('fonts');

export const getColorFromTheme = getValueFromTheme<ColorKeys>('colors');

export const getSizingFromTheme = getValueFromTheme<
  SizingKeys | MarginPresetKeys | PaddingPresetKeys | IconSizeKeys
>('sizing');

export const getBorderFromTheme = getValueFromTheme<BorderKeys>('borders');

export const getBorderRadiusFromTheme = getValueFromTheme<BorderRadiusKeys>(
  'borderRadius',
);

export const getGridSettingFromTheme = getValueFromTheme<GridKeys>('grid');

export const getShadowFromTheme = getValueFromTheme<ShadowKeys>('shadow');

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
