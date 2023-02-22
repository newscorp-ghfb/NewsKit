import {createStyleObject} from '@capsizecss/core';

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
