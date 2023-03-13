import {textCrop, TextCropProps, TextCropResults} from '../text-crop';

const round = (value: number) => parseFloat(value.toFixed(4));

const exampleFontMetrics = {
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
      fontMetrics: exampleFontMetrics,
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

  test(`handles lineHeight number as string to support legacy theme json`, () => {
    const cropData: TextCropProps = {
      fontSize: '12px',
      lineHeight: '1.6',
      fontMetrics: exampleFontMetrics,
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

  test(`throws an error if invalid fontSize units passed`, () => {
    const cropData: TextCropProps = {
      fontSize: '12metres' as TextCropProps['fontSize'],
      lineHeight: 1.6,
      fontMetrics: exampleFontMetrics,
    };

    expect(() => textCrop(cropData)).toThrow(Error);
  });

  test(`throws an error if invalid lineHeight passed`, () => {
    const cropData: TextCropProps = {
      fontSize: '12px',
      lineHeight: ('1.6rem' as unknown) as number,
      fontMetrics: exampleFontMetrics,
    };

    expect(() => textCrop(cropData)).toThrow(Error);
  });

  test(`fontSize matches input fontSize`, () => {
    [12, 14, 16, 18, 20].forEach(px => {
      const crop = textCrop({
        fontSize: `${px}px`,
        lineHeight: 1.6,
        fontMetrics: exampleFontMetrics,
      });
      expect(crop.fontSize).toEqual(`${px}px`);
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
      fontMetrics: exampleFontMetrics,
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
    type FontMetrics = TextCropProps['fontMetrics'];

    const adjustTrim = (lh: number, trim: number, fm: FontMetrics) => {
      const absoluteDescent = Math.abs(fm.descent);
      const contentArea = fm.ascent + fm.lineGap + absoluteDescent;
      const lineHeightScale = contentArea / fm.unitsPerEm;
      const adjustedTrim = trim - (lineHeightScale - lh) / 2;
      return `${round(adjustedTrim * -1)}em`;
    };

    const calculateCapHeightTrim = (lh: number, fm: FontMetrics) => {
      const ascentScale = fm.ascent / fm.unitsPerEm;
      const capHeightScale = fm.capHeight / fm.unitsPerEm;
      const lineGapScale = fm.lineGap / fm.unitsPerEm;
      const trim = ascentScale - capHeightScale + lineGapScale / 2;
      return adjustTrim(lh, trim, fm);
    };

    const calculateBaselineTrim = (lh: number, fm: FontMetrics) => {
      const absoluteDescent = Math.abs(fm.descent);
      const descentScale = absoluteDescent / fm.unitsPerEm;
      const lineGapScale = fm.lineGap / fm.unitsPerEm;
      const trim = descentScale + lineGapScale / 2;
      return adjustTrim(lh, trim, fm);
    };

    const lineHeight = 1.6;
    const marginTop = calculateBaselineTrim(lineHeight, exampleFontMetrics);
    const marginBottom = calculateCapHeightTrim(lineHeight, exampleFontMetrics);

    [12, 14, 16, 18, 20].forEach(fontSize => {
      const textCropCSS = textCrop({
        fontSize: `${fontSize}px`,
        lineHeight,
        fontMetrics: exampleFontMetrics,
      });
      expect(textCropCSS['::after'].marginTop).toEqual(marginTop);
      expect(textCropCSS['::before'].marginBottom).toEqual(marginBottom);
    });
  });
});
