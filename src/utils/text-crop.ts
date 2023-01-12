import {createStyleObject} from '@capsizecss/core';

// legacyTextCrop to be removed once we will only support FontMetrics
/* istanbul ignore next */
export const legacyTextCrop = ({
  lineHeight = 1.2,
  topCrop = 0,
  bottomCrop = 0,
  topAdjustment = 0,
  bottomAdjustment = 0,
  cropFontSize = 32,
  cropLineHeight = 1.2,
}) => {
  const dynamicTopCrop =
    Math.max(topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize;

  const dynamicBottomCrop =
    Math.max(
      bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
      0,
    ) / cropFontSize;

  const common = {
    content: "''",
    display: 'block',
    height: 0,
    width: 0,
  };

  return {
    padding: '1px 0px',
    '::before': {
      ...common,
      marginBottom: topAdjustment
        ? `calc(-${dynamicTopCrop}em + ${topAdjustment}px)`
        : `-${dynamicTopCrop}em`,
    },
    '::after': {
      ...common,
      marginTop: bottomAdjustment
        ? `calc(-${dynamicBottomCrop}em + ${bottomAdjustment}px)`
        : `-${dynamicBottomCrop}em`,
    },
  };
};

export type TextCropProps = {
  fontSize: string;
  lineHeight: number;
  fontMetrics: {
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
  };
};

export const parseFontSize = (fontSize: string, remValue: number = 16) =>
  fontSize.endsWith('rem')
    ? parseFloat(fontSize) * remValue
    : parseInt(fontSize, 10);

export const textCrop = ({
  lineHeight,
  fontSize,
  fontMetrics,
}: TextCropProps) => {
  const fontSizeAsNumber = parseFloat(fontSize);
  const leading = lineHeight * fontSizeAsNumber;

  const capsizeStyles = createStyleObject({
    fontSize: fontSizeAsNumber,
    leading,
    fontMetrics,
  });

  // Changing cropping approach to block
  // capsizeStyles['::after'].display = 'table';
  // capsizeStyles['::before'].display = 'table';
  // @ts-ignore
  // capsizeStyles.padding = '0.5px 0px';
  capsizeStyles.fontSize = fontSize;
  capsizeStyles.lineHeight = lineHeight.toString();
  capsizeStyles['::after'].width = '100%';
  capsizeStyles['::before'].width = '100%';
  capsizeStyles['::after'].outline = '1px solid hotpink';
  capsizeStyles['::before'].outline = '1px solid hotpink';
  return capsizeStyles;
};
