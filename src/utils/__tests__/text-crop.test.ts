import {textCrop, TextCropProps, TextCropResults} from '../text-crop';

const round = (value: number) => parseFloat(value.toFixed(4));

const fontMetrics = {
  capHeight: 692,
  ascent: 935,
  descent: -265,
  lineGap: 0,
  unitsPerEm: 1000,
};

describe('textCrop', () => {
  test(`returns the correct values`, () => {
    const cropData: TextCropProps = {
      fontSize: '12px',
      lineHeight: 1.6,
      fontMetrics,
    };

    const expectedResult: TextCropResults = {
      '::after': {content: "''", display: 'block', marginTop: '-0.465em'},
      '::before': {
        content: "''",
        display: 'block',
        marginBottom: '-0.443em',
      },
      fontSize: '12px',
      lineHeight: '19.2px',
      padding: '0.5px 0px',
    };

    expect(textCrop(cropData)).toEqual(expectedResult);
  });

  test(`throws an error if invalid units passed`, () => {
    const cropData: TextCropProps = {
      fontSize: '12metres' as TextCropProps['fontSize'],
      lineHeight: 1.6,
      fontMetrics,
    };

    expect(() => textCrop(cropData)).toThrow(Error);
  });

  test(`margins (em) DO NOT depend on fontSize`, () => {
    [12, 14, 16, 18, 20].forEach(px => {
      const crop = textCrop({
        fontSize: `${px}px`,
        lineHeight: 1.6,
        fontMetrics,
      });
      expect(crop['::before'].marginBottom).toEqual('-0.443em');
      expect(crop['::after'].marginTop).toEqual('-0.465em');
    });
  });

  test(`fontSize matches input fontSize`, () => {
    [12, 14, 16, 18, 20].forEach(px => {
      const crop = textCrop({
        fontSize: `${px}px`,
        lineHeight: 1.6,
        fontMetrics,
      });
      expect(crop.fontSize).toEqual(`${px}px`);
    });
  });

  test(`lineHeight is product of input lineHeight and fontSize`, () => {
    const fontSize = 12;
    [1.0, 1.25, 1.5, 1.75, 2.0].forEach(scale => {
      const crop = textCrop({
        fontSize: `${fontSize}px`,
        lineHeight: scale,
        fontMetrics,
      });
      expect(crop.lineHeight).toEqual(`${round(scale * fontSize)}px`);
    });
  });

  test(`margins (em) depend on input lineHeight`, () => {
    [
      [1.0, 0.165, 0.143],
      [1.25, 0.29, 0.268],
      [1.5, 0.415, 0.393],
      [1.75, 0.54, 0.518],
      [2.0, 0.665, 0.643],
    ].forEach(([lineHeight, marginTop, marginBottom]) => {
      const crop = textCrop({
        fontSize: `12px`,
        lineHeight,
        fontMetrics,
      });
      expect(crop['::before'].marginBottom).toEqual(`-${marginBottom}em`);
      expect(crop['::after'].marginTop).toEqual(`-${marginTop}em`);
    });
  });

  it('should output rem values consistent with px', () => {
    const testBaseFontSize = 12;

    const remToPx = (remValue: `${number}rem`): `${number}px` =>
      `${round(parseFloat(remValue) * testBaseFontSize)}px`;

    const pxToRem = (pxValue: `${number}px`): `${number}rem` =>
      `${parseFloat(pxValue) / testBaseFontSize}rem`;

    const rest = {
      lineHeight: 1.6,
      fontMetrics,
    };

    [12, 14, 16, 18, 20].forEach(px => {
      const fontSize: `${number}px` = `${px}px`;

      const pxTextCrop = textCrop({
        fontSize,
        ...rest,
      });

      const remTextCrop = textCrop({
        fontSize: pxToRem(fontSize),
        ...rest,
      });

      expect(remToPx(remTextCrop.fontSize as `${number}rem`)).toEqual(
        pxTextCrop.fontSize,
      );
      expect(remToPx(remTextCrop.lineHeight as `${number}rem`)).toEqual(
        pxTextCrop.lineHeight,
      );
    });
  });

  it('should calculate margins independent of fontSize', () => {
    const adjustTrim = (inputLineHeight: number, trim: number) => {
      const absoluteDescent = Math.abs(fontMetrics.descent);
      const contentArea =
        fontMetrics.ascent + fontMetrics.lineGap + absoluteDescent;
      const lineHeightScale = contentArea / fontMetrics.unitsPerEm;
      const adjustedTrim = trim - (lineHeightScale - inputLineHeight) / 2;
      return `${round(adjustedTrim * -1)}em`;
    };

    const calculateCapHeightTrim = (inputLineHeight: number) => {
      const ascentScale = fontMetrics.ascent / fontMetrics.unitsPerEm;
      const capHeightScale = fontMetrics.capHeight / fontMetrics.unitsPerEm;
      const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
      const trim = ascentScale - capHeightScale + lineGapScale / 2;
      return adjustTrim(inputLineHeight, trim);
    };

    const calculateBaselineTrim = (inputLineHeight: number) => {
      const absoluteDescent = Math.abs(fontMetrics.descent);
      const descentScale = absoluteDescent / fontMetrics.unitsPerEm;
      const lineGapScale = fontMetrics.lineGap / fontMetrics.unitsPerEm;
      const trim = descentScale + lineGapScale / 2;
      return adjustTrim(inputLineHeight, trim);
    };

    const lineHeight = 1.6;
    const marginTop = calculateBaselineTrim(lineHeight);
    const marginBottom = calculateCapHeightTrim(lineHeight);

    [12, 14, 16, 18, 20].forEach(fontSize => {
      const textCropCSS = textCrop({
        fontSize: `${fontSize}px`,
        lineHeight,
        fontMetrics,
      });
      expect(textCropCSS['::after'].marginTop).toEqual(marginTop);
      expect(textCropCSS['::before'].marginBottom).toEqual(marginBottom);
    });
  });
});
