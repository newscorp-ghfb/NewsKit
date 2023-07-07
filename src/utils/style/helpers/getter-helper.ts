import {FontConfig} from '../../../theme/foundations/fonts';
import {FontMetrics} from 'src/utils/text-crop';
import {isFontConfigObject, isFontMetricsObject} from '../../guards';

/**
 * FontMetrics for Capsize/TextCrop functionality
 * @param {any} typographyPreset Typography data in NewsKit format
 * @param {any} themeFonts Fonts data in NewsKit format
 * @return {FontMetrics | undefined} FontMetrics object or undefined
 *
 * @description Supports reading of fontMetrics defined in the typographyPreset.json file
 * for use in djds-themes-publisher and compatible with NewsKit v7.4.0 format that finds
 * the fontMetrics data defined in the fonts.json by reference using fontFamily/fontWeight
 * specified in typographyPreset.json file. FontMetrics is used to calculate the required
 * Capsize cropping.
 */
export const getFontMetrics = (
  typographyPreset: any,
  themeFonts: any,
): FontMetrics | undefined => {
  const {fontFamily, fontWeight, fontMetrics} = typographyPreset;

  // 1. If fontMetrics are embedded in typographyPreset, return fontMetrics
  if (fontMetrics) {
    return parseFontMetrics(fontMetrics);
  }

  // 2. Lookup the fontFamilyObject for the typographyPreset's fontFamily & themeFonts
  const fontFamilyObject = getFontFamilyObject(fontFamily, themeFonts);

  // 3. If fontFamilyObject is invalid, return undefined
  if (!fontFamilyObject) return undefined;

  // 4. Parse the referenced fontMetrics of the fontFamilyObject given the fontFamilyObject
  // and typographyPreset's fontWeight & themeFonts
  const result = parseRefFontMetrics(fontFamilyObject!, fontWeight, themeFonts);

  // 5. Return valid fontMetrics or undefined
  return isValidFontMetrics(result, fontFamily) ? result : undefined;
};

const getFontFamilyObject = (
  fontFamily: string,
  themeFonts: any,
): FontConfig | undefined => {
  const array = Object.values(themeFonts);
  const fontFamilyObject: FontConfig | undefined = array.find(
    (fontEl): fontEl is FontConfig =>
      isFontConfigObject(fontEl as FontConfig) &&
      getFontFamilyName((fontEl as FontConfig).fontFamily) ===
        getFontFamilyName(fontFamily),
  );
  const isValid = isValidFontConfig(fontFamilyObject as FontConfig);
  return isValid ? (fontFamilyObject as FontConfig) : undefined;
};

const getFontFamilyName = (fontFamily: string): string => {
  return fontFamily.split(',')[0];
};

const parseFontMetrics = (fontMetrics: any): FontMetrics => {
  return fontMetrics.fontWeight010 ? fontMetrics.fontWeight010 : fontMetrics;
};

const parseRefFontMetrics = (
  fontFamilyObject: FontConfig,
  fontWeight: string,
  themeFonts: any,
): FontMetrics => {
  const themeFontsProperties = Object.entries(themeFonts);
  const weightTokenArray = themeFontsProperties.find(element =>
    element.includes(fontWeight),
  );
  const weightToken = weightTokenArray && weightTokenArray[0];
  const result =
    (weightToken && fontFamilyObject.fontMetrics![weightToken!]) ||
    fontFamilyObject.fontMetrics!.fontWeight010;
  return result;
};

const isValidFontConfig = (
  fontFamilyObject: FontConfig | undefined,
): boolean => {
  return fontFamilyObject ? validateFontConfig() : false;
  function validateFontConfig() {
    const cropConfig = Object.getOwnPropertyDescriptor(
      fontFamilyObject,
      'cropConfig',
    );
    const cropAdjustments = Object.getOwnPropertyDescriptor(
      fontFamilyObject,
      'cropAdjustments',
    );
    if (cropConfig || cropAdjustments) {
      console.warn(
        'cropConfig and cropAdjustments are no longer supported; please use fontMetrics instead',
      );
      return false;
    }
    return true;
  }
};

const isValidFontMetrics = (
  fontMetrics: FontMetrics,
  fontFamily: string,
): boolean => {
  return fontMetrics ? validateFontMetrics() : invalidFontMetrics();

  function validateFontMetrics() {
    return isFontMetricsObject(fontMetrics) ? true : invalidFontMetrics();
  }

  function invalidFontMetrics() {
    console.warn(`No default fontMetrics found for '${fontFamily}'.`);
    return false;
  }
};
