import {CSSObject} from '@emotion/styled';
import {getFontSizing} from '../font-sizing';
import {
  SpacePresetKeys,
  PaddingPresetKeys,
  SizingKeys,
  BorderRadiusKeys,
  ShadowKeys,
  TypographyPreset,
  TypographyPresetKeys,
  ColorKeys,
  MotionKeys,
  BorderKeys,
  FontKeys,
  LineHeightKeys,
  FontSizeKeys,
} from '../../theme';
import {isFontConfigObject} from '../guards';
import {getFontProps} from '../get-font-props';
import {ThemeProp} from '../style-types';
import {MQ} from './types';
import {
  getResponsiveValueFromTheme,
  getDefaultedValue,
  getValueFromTheme,
} from './base';

export const getTypographyPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<TypographyPresetKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: {withCrop: boolean},
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyCrop = (typographyPreset: any) => {
    const {fontSize, lineHeight, fontFamily} = typographyPreset;
    const cropProps = getFontProps(
      fontSize,
      lineHeight,
      fontFamily,
      props.theme.fonts,
    );
    return {
      ...typographyPreset,
      ...cropProps,
    };
  };

  const {withCrop = false} = options || {};
  const typographyPreset = getResponsiveValueFromTheme('typographyPresets')(
    defaultToken,
    customProp,
  )(props) as Partial<TypographyPreset> | Array<[string, CSSObject]>;

  if (Array.isArray(typographyPreset)) {
    return typographyPreset.reduce(
      (acc, [mq, cssObject]) => {
        let cssObjectFinal = cssObject;

        if (withCrop && !Array.isArray(cssObject)) {
          cssObjectFinal = applyCrop(cssObject);
        }

        acc[mq] = cssObjectFinal;
        return acc;
      },
      {} as CSSObject,
    );
  }

  if (typographyPreset && withCrop && !Array.isArray(typographyPreset)) {
    return applyCrop(typographyPreset);
  }
  return typographyPreset;
};

export const getTypographyPreset = getDefaultedValue(
  getTypographyPresetFromTheme,
  'typographyPreset',
);

export const getMotionFromTheme = getValueFromTheme<MotionKeys>('motions');

export const getFontsFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<FontKeys>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  const section = props.theme.fonts;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const style = section[propKeys as FontKeys];

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
      (acc, [mq, preset]) => {
        acc[mq] = cssProp && {[cssProp]: preset};
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

export const getSize = getDefaultedValue(getSizingFromTheme, 'size');

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
      (acc, [mq, preset]) => {
        acc[mq] = {padding: preset};
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
      (acc, [mq, preset]) => {
        acc[mq] = {margin: preset};
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
  fontSizeKey: TypographyPresetKeys | FontSizeKeys,
  lineHeightKey: LineHeightKeys,
) => ({theme}: ThemeProp) => {
  const typographyPresets =
    theme.typographyPresets[fontSizeKey as TypographyPresetKeys];
  const fontSize = typographyPresets
    ? typographyPresets.fontSize
    : theme.fonts[fontSizeKey as FontSizeKeys];
  return getFontSizing(fontSize, theme.fonts[lineHeightKey]);
};
