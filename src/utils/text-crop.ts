import {createStyleObject} from '@capsizecss/core';

type FontUnit = 'px' | 'rem';

export type TextCropProps = {
  fontSize: `${number}${FontUnit}`;
  lineHeight: number | string;
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
  let parsedLineHeight: number;
  if (typeof lineHeight === 'string') {
    const match = lineHeight.match(/^\d+(\.\d+)*$/);
    if (!match) {
      throw Error(`invalid lineHeight: ${lineHeight}`);
    }
    parsedLineHeight = parseFloat(lineHeight);
  } else {
    parsedLineHeight = lineHeight;
  }

  const match = fontSize.match(/(\d+(?:\.\d+)?)(px|rem)/);
  if (!match) {
    throw Error(`invalid fontSize: ${fontSize}`);
  }
  const fontSizeAsNumber = parseFloat(match[1]);
  const fontSizeUnits = match[2] as FontUnit;
  const leading = parsedLineHeight * fontSizeAsNumber;

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
