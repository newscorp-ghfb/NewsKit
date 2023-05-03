import {CSSObject} from '@emotion/styled';
import {getFontSizing} from '../font-sizing';
import {BreakpointKeys, TypographyPreset} from '../../theme';
import {isFontConfigObject} from '../guards';
import {ThemeProp} from '../style-types';
import {MQ, MQPartial} from './types';
import {
  getResponsiveValueFromTheme,
  getValueFromTheme,
  getXFromTheme,
} from './base';
import {getMediaQueryFromTheme, isResponsive} from '../responsive-helpers';
import {hasOwnProperty} from '../has-own-property';
import {FontConfig} from '../../theme/foundations/fonts';
import {textCrop} from '../text-crop';

export const getTypographyPresetFromTheme = <Props extends ThemeProp>(
  defaultToken?: MQ<string>,
  customProp?: Exclude<keyof Props, 'theme'>,
  options?: {withCrop: boolean},
) => (props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyCrop = (typographyPreset: any) => {
    // This function finds the fontMetrics defined in the theme for the fontFamily/fontWeight
    // combination specified in the typographyPreset, and uses them to calculate
    // the required cropping CSS.

    // Steps:
    // 1. Lookup the fontFamilyObject in the theme for the typographyPreset's fontFamily.
    // 2. Lookup the token for the fontWeight specified in the typographyPreset.
    // 3. Lookup the fontMetrics in the fontFamilyObject for the fontWeight token.
    // 4. Use the fontMetrics to calculate the cropping CSS.

    const {fontSize, lineHeight, fontFamily, fontWeight} = typographyPreset;

    const [fontStackPeek] = fontFamily.split(',');
    const fontFamilyObject: FontConfig | undefined = Object.values(
      props.theme.fonts,
    ).find(
      (fontEl): fontEl is FontConfig =>
        isFontConfigObject(fontEl) &&
        (fontEl as FontConfig).fontFamily.split(',')[0] === fontStackPeek,
    );

    if (!fontFamilyObject) return typographyPreset;

    if (
      Object.getOwnPropertyDescriptor(fontFamilyObject, 'cropConfig') ||
      Object.getOwnPropertyDescriptor(fontFamilyObject, 'cropAdjustments')
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        'cropConfig and cropAdjustments are no longer supported; please use fontMetrics instead',
      );
      return typographyPreset;
    }

    const themeFontsProperties = Object.entries(props.theme.fonts);

    const weightTokenArray = themeFontsProperties.find(element =>
      element.includes(fontWeight),
    );
    const weightToken = weightTokenArray && weightTokenArray[0];

    const fontMetrics =
      (weightToken && fontFamilyObject.fontMetrics![weightToken!]) ||
      fontFamilyObject.fontMetrics!.fontWeight010;

    if (!fontMetrics) {
      // eslint-disable-next-line no-console
      console.warn(`No default fontMetrics found for '${fontFamily}'.`);
      return typographyPreset;
    }

    const cropData = {
      fontSize,
      lineHeight,
      fontMetrics,
    };

    const cropProps = textCrop(cropData);

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
    return typographyPreset.reduce((acc, [mq, cssObject]) => {
      let cssObjectFinal = cssObject;

      if (withCrop && !Array.isArray(cssObject)) {
        cssObjectFinal = applyCrop(cssObject);
      }

      acc[mq] = cssObjectFinal;
      return acc;
    }, {} as CSSObject);
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
    return value.reduce((acc, [mq, preset]) => {
      acc[mq] = cssProp && {[cssProp]: preset};
      return acc;
    }, {} as CSSObject);
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
    return padding.reduce((acc, [mq, preset]) => {
      acc[mq] = {padding: preset};
      return acc;
    }, {} as CSSObject);
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
    return margin.reduce((acc, [mq, preset]) => {
      acc[mq] = {margin: preset};
      return acc;
    }, {} as CSSObject);
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

export const getBorderCssFromTheme = getXFromTheme('borders');
export const getColorCssFromTheme = getXFromTheme('colors');
export const getMotionCssFromTheme = getXFromTheme('motions');
export const getOverlayCssFromTheme = getXFromTheme('overlays');
export const getShadowCssFromTheme = getXFromTheme('shadows');
export const getSizingCssFromTheme = getXFromTheme('sizing');
export const getSpacingCssFromTheme = getXFromTheme('spacePresets');
export const getOutlineCssFromTheme = getXFromTheme('outlines');

type BreakpointKeysUnsafe = BreakpointKeys | undefined;

export const handleResponsiveProp = <Props extends ThemeProp, T>(
  propObject: {[Key in keyof T]: T[Key]},
  propHandler: (
    values: {[Key in keyof T]: T[Key]}, // How to extract correct type form Props[propName]
    props: Props,
    mq: BreakpointKeysUnsafe,
  ) => string | CSSObject,
) => (props: Props): string | CSSObject => {
  const {breakpoints} = props.theme;
  const propNames = Object.keys(propObject);

  // get only props that we will use
  const usedProps = propNames.reduce((acc, propName: string) => {
    if (hasOwnProperty(props, propName)) {
      return {...acc, [propName]: props[propName]};
    }
    return acc;
  }, {}) as {[Key in keyof T]: MQ<T[Key]>};

  const propsValues = Object.values(usedProps) as MQ<T[keyof T]>[];

  // check if at least 1 prop is MQ object
  const hasResponsiveProp = propsValues.some(propValue =>
    isResponsive(propValue, breakpoints),
  );

  // handle No-responsive props
  if (!hasResponsiveProp) {
    return propHandler(
      usedProps as {[Key in keyof T]: T[Key]},
      props,
      undefined,
    );
  }

  // ------------------------
  // Handle responsive props

  // Get and sort breakpoints
  const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];
  const breakpointKeysSorted = breakpointKeys.sort(
    (a, b) => breakpoints[a] - breakpoints[b],
  );

  // Find common MQ keys form all responsive props
  const commonMQKeys: BreakpointKeys[] = propsValues
    .filter(propValue => typeof propValue === 'object')
    .flatMap(
      (propValue: MQ<T[keyof T]>) => Object.keys(propValue) as BreakpointKeys[],
    )
    .filter((item: BreakpointKeys | 'rules') => item !== 'rules')
    .filter(
      (item: BreakpointKeys, index: number, ar: BreakpointKeys[]) =>
        ar.indexOf(item) === index,
    )
    .sort(
      (a: BreakpointKeys, b: BreakpointKeys) =>
        breakpointKeysSorted.indexOf(a) - breakpointKeysSorted.indexOf(b),
    );

  const fillPropGaps = (
    bps: BreakpointKeys[],
    propValue: MQ<T[keyof T]>,
    defaultValue: T[keyof T],
  ): MQPartial<T[keyof T]> => {
    // when is not object, just pre-fill all breakpoint keys with the value
    if (typeof propValue !== 'object') {
      return bps.reduce(
        (obj, bp: BreakpointKeys) => ({
          ...obj,
          [bp]: propValue,
        }),
        {} as MQPartial<T[keyof T]>,
      );
    }

    const baseKey = bps.find(bp => (propValue as MQPartial<T>)[bp]);
    /* istanbul ignore if */
    if (!baseKey) {
      return {};
    }

    let baseValue =
      baseKey !== 'xs'
        ? defaultValue
        : (propValue as MQPartial<T[keyof T]>)[baseKey];

    return bps.reduce((result: MQPartial<T[keyof T]>, bp) => {
      if ((propValue as MQPartial<T[keyof T]>)[bp] === undefined) {
        return {...result, [bp]: baseValue};
      }
      baseValue = (propValue as MQPartial<T[keyof T]>)[bp];
      return result;
    }, propValue);
  };

  /*
    when use pass MQ like : {xs: 1, md:2}
    it fills gaps like: {xs:1, sm:1, md:2, lg:2, xl2}
    also set default when xs is not provided
    */
  const filledPropValues = Object.entries(usedProps).reduce((acc, curr) => {
    const [propName, propValue] = curr as [keyof T, MQ<T[keyof T]>];
    acc[propName] = fillPropGaps(
      breakpointKeysSorted,
      propValue,
      propObject[propName],
    );
    return acc;
  }, {} as {[Key in keyof T]: MQ<T[Key]>});

  // add XS to the breakpoints in case its not provided from the user
  const usedMQKeys: BreakpointKeys[] = commonMQKeys.includes('xs')
    ? commonMQKeys
    : ['xs', ...commonMQKeys];

  let cssMediaQueryObject = {};
  if (commonMQKeys.length > 0) {
    cssMediaQueryObject = usedMQKeys.reduce((acc, mqKey, index) => {
      const fromMqKey = mqKey;
      const toMqKey = usedMQKeys[index + 1] ? usedMQKeys[index + 1] : undefined;

      const mediaQuery = getMediaQueryFromTheme(fromMqKey, toMqKey)(props);
      const values = propNames.reduce((valAcc, propName) => {
        // TS needs checking if prop is part of the object otherwise throw error
        /* istanbul ignore else */
        if (hasOwnProperty(filledPropValues, propName)) {
          const mqValue = filledPropValues[propName as keyof T];
          /* istanbul ignore else */
          if (hasOwnProperty(mqValue, fromMqKey)) {
            return {
              ...valAcc,
              [propName]: mqValue[fromMqKey],
            };
          }
        }
        /* istanbul ignore next */
        return valAcc;
      }, {}) as {[Key in keyof T]: T[Key]};
      acc[mediaQuery] = propHandler(values, props, fromMqKey);
      return acc;
    }, {} as Record<string, unknown>) as CSSObject;
  }
  /*
  If they've defined container queries using the 'rules'
*/

  const cssContainerQueryObject = Object.values(usedProps).reduce(
    (acc, prop, index) => {
      const values: Record<string, string> = {};
      if (prop.rules) {
        prop.rules.forEach(rule => {
          values[`${Object.keys(usedProps)[index]}`] = rule.value;
          acc[rule.rule] = propHandler(values, props, undefined);
        });
      }
      return acc;
    },
    ({} as Record<string, unknown>) as CSSObject,
  );

  return {...cssMediaQueryObject, ...cssContainerQueryObject};
};
