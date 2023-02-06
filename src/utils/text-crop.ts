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

type FontUnit = 'px' | 'rem';

export type TextCropProps = {
  fontSize: `${number}${FontUnit}`;
  lineHeight: number;
  fontMetrics: {
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
  };
};

export type StyleObject = Omit<
  ReturnType<typeof createStyleObject>,
  'fontSize' | 'lineHeight'
> & {
  padding: string;
  fontSize: `${number}px`;
  lineHeight: `${number}px`;
};

export type TextCropResults = Omit<StyleObject, 'fontSize' | 'lineHeight'> & {
  padding: string;
  fontSize: `${number}${FontUnit}`;
  lineHeight: `${number}${FontUnit}`;
};

export const textCrop = ({
  lineHeight,
  fontSize,
  fontMetrics,
}: TextCropProps): TextCropResults => {
  if (typeof lineHeight !== 'number') {
    throw Error(`invalid lineHeight: ${lineHeight}`);
  }

  const match = fontSize.match(/(\d+(?:\.\d+)?)(px|rem)/);
  if (!match) {
    throw Error(`invalid fontSize: ${fontSize}`);
  }
  const fontSizeAsNumber = parseFloat(match[1]);
  const fontSizeUnits = match[2] as FontUnit;
  const leading = lineHeight * fontSizeAsNumber;

  const capsizeStyles = createStyleObject({
    fontSize: fontSizeAsNumber,
    leading,
    fontMetrics,
  }) as StyleObject;

  // Changing cropping approach to block
  capsizeStyles['::after'].display = 'block';
  capsizeStyles['::before'].display = 'block';

  const overrides: Partial<TextCropResults> = {};
  if (fontSizeUnits !== 'px') {
    overrides.fontSize = fontSize;
    overrides.lineHeight = `${leading}${fontSizeUnits}`;
  }

  return {
    ...capsizeStyles,
    ...overrides,
    padding: '0.5px 0px',
  };
};
