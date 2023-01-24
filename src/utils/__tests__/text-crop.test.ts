import {textCrop, TextCropProps, TextCropResults} from '../text-crop';

const round = (value: number) => parseFloat(value.toFixed(4));

const remToPx = (value: string, baseFontSize: number) =>
  `${round(parseFloat(value) * baseFontSize)}px`;

const pxToRem = (fontSize: number, baseFontSize: number) =>
  fontSize / baseFontSize;

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
    const baseFontSizePx = 12;
    const rest = {
      lineHeight: 1.6,
      fontMetrics,
    };

    [12, 14, 16, 18, 20].forEach(fontSizePx => {
      const pxTextCrop = textCrop({
        fontSize: `${fontSizePx}px`,
        ...rest,
      });

      const remTextCrop = textCrop({
        fontSize: `${pxToRem(fontSizePx, baseFontSizePx)}rem`,
        ...rest,
      });

      expect(remToPx(remTextCrop.fontSize, baseFontSizePx)).toEqual(
        pxTextCrop.fontSize,
      );
      expect(remToPx(remTextCrop.lineHeight, baseFontSizePx)).toEqual(
        pxTextCrop.lineHeight,
      );
    });
  });
});
