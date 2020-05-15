import {textCrop} from './text-crop';
import {getFontSizing} from './font-sizing';
import {FontConfig, fontPrimitives} from '../themes/newskit-light/fonts';
import {isFontConfigObject} from './guards';

export const getFontProps = (
  fontSize: string,
  lineHeight: number,
  fontFamily: string,
  // eslint-disable-next-line consistent-return
) => {
  const [fontStackPeek] = fontFamily.split(',');

  const fontFamilyObject: FontConfig | undefined = Object.values(
    // TODO: PPDSC-1140 - This should not be imported, it needs to be taken from the consumers current theme.
    fontPrimitives,
  ).find(
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

    const cropData = {
      lineHeight: base.lineHeight,
      topCrop: fontCropConfig!.top,
      bottomCrop: fontCropConfig!.bottom,
      topAdjustment: adjustment ? adjustment.top : 0,
      bottomAdjustment: adjustment ? adjustment.bottom : 0,
      cropFontSize: fontCropConfig && fontCropConfig.fontSize,
      cropLineHeight: fontCropConfig && fontCropConfig.lineHeight,
    };

    const croppedTextProps = textCrop(cropData);

    return {
      ...base,
      ...croppedTextProps,
    };
  }
};
