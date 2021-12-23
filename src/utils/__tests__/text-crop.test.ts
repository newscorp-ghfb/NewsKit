import {textCrop} from '../text-crop';

describe('textCrop', () => {
  test(`returns the correct values`, () => {
    const cropData = {
      fontSize: '12px',
      lineHeight: 1.6,
      fontMetrics: {
        capHeight: 692,
        ascent: 935,
        descent: -265,
        lineGap: 0,
        unitsPerEm: 1000,
      },
    };

    const expectedResult = {
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
});
