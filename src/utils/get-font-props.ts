import {FontConfig} from '../theme/foundations/fonts';
import {legacyTextCrop} from './text-crop';
import {isFontConfigObject} from './guards';
import {getFontSizing} from './font-sizing';

// TODO 'legacyGetFontProps' To be removed once we will adopt only the fontMetrics approach
/* istanbul ignore next */
export const legacyGetFontProps = (
  fontSize: string,
  lineHeight: number,
  fontFamily: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fonts: Record<string, any>,
  // eslint-disable-next-line consistent-return
) => {
  if (!fontFamily) {
    return undefined;
  }

  const [fontStackPeek] = fontFamily.split(',');

  const fontFamilyObject: FontConfig | undefined = Object.values(fonts).find(
    (fontEl): fontEl is FontConfig =>
      isFontConfigObject(fontEl) &&
      (fontEl as FontConfig).fontFamily.split(',')[0] === fontStackPeek,
  );

  if (fontFamilyObject && fontFamilyObject.cropConfig) {
    const base = getFontSizing(fontSize, lineHeight);

    const {
      cropConfig: fontCropConfig,
      cropAdjustments: fontCropAdjustments,
    } = fontFamilyObject!;
    const adjustment = fontCropAdjustments && fontCropAdjustments[fontSize];

    const legacyCropData = {
      lineHeight: base.lineHeight,
      topCrop: fontCropConfig!.top,
      bottomCrop: fontCropConfig!.bottom,
      topAdjustment: adjustment ? adjustment.top : 0,
      bottomAdjustment: adjustment ? adjustment.bottom : 0,
      cropFontSize: fontCropConfig && fontCropConfig.fontSize,
      cropLineHeight: fontCropConfig && fontCropConfig.lineHeight,
    };

    const croppedTextProps = legacyTextCrop(legacyCropData);

    return {
      ...base,
      ...croppedTextProps,
    };
  }
};
