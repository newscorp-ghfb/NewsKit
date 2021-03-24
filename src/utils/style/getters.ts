import {CSSObject} from '@emotion/styled';
import {getFontSizing} from '../font-sizing';
import {TypographyPreset} from '../../theme';
import {isFontConfigObject} from '../guards';
import {getFontProps} from '../get-font-props';
import {ThemeProp} from '../style-types';
import {MQ} from './types';
import {
  getResponsiveValueFromTheme,
  getValueFromTheme,
  getXFromTheme,
} from './base';

export const getTypographyPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
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

export const getFontsFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
  customProp?: Exclude<keyof Props, 'theme'>,
) => (props: Props) => {
  const section = props.theme.fonts;
  const propKeys = (customProp && props[customProp]) || defaultToken;
  const style = section[propKeys as string];

  if (style && isFontConfigObject(style)) {
    return style.fontFamily;
  }

  return propKeys ? style : '';
};

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export const getSpacingFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
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

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export const getSpacingInsetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
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

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSpacingCssFromTheme instead
 */
export const getMarginPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
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

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getBorderCssFromTheme instead
 */
export const getBorderFromTheme = getValueFromTheme<string>('borders');

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getShadowCssFromTheme instead
 */
export const getShadowFromTheme = getValueFromTheme<string>('shadows');

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getColorCssFromTheme instead
 */
export const getColorFromTheme = getValueFromTheme<string>('colors');

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getSizingCssFromTheme instead
 */
export const getSizingFromTheme = getValueFromTheme<string>('sizing');

/**
 * @deprecated This method has been deprecated and will be removed in a future release, use getMotionCssFromTheme instead
 */
export const getMotionFromTheme = getValueFromTheme<string>('motions');

export const getFontSizingFromTheme = (
  fontSizeKey: string,
  lineHeightKey: string,
) => ({theme}: ThemeProp) => {
  const typographyPresets = theme.typographyPresets[fontSizeKey];
  const fontSize = typographyPresets
    ? typographyPresets.fontSize
    : theme.fonts[fontSizeKey];
  return getFontSizing(fontSize, theme.fonts[lineHeightKey]);
};

export const getSpacingCssFromTheme = getXFromTheme('spacePresets');
export const getMotionCssFromTheme = getXFromTheme('motions');
export const getColorCssFromTheme = getXFromTheme('colors');
export const getSizingCssFromTheme = getXFromTheme('sizing');
export const getBorderCssFromTheme = getXFromTheme('borders');
export const getShadowCssFromTheme = getXFromTheme('shadows');
