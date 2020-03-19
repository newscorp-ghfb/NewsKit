import {textCrop} from '../text-crop';

type Test = [
  {
    lineHeight?: number;
    topCrop?: number;
    bottomCrop?: number;
    topAdjustment?: number;
    bottomAdjustment?: number;
    cropFontSize?: number;
    cropLineHeight?: number;
  },
  string,
  string,
];

describe('textCrop', () => {
  describe('with empty data', () => {
    test(`returns correct margins`, () => {
      const cropData = {};

      const result = textCrop(cropData);

      expect(result['::after'].marginTop).toEqual(`-0em`);
      expect(result['::before'].marginBottom).toEqual(`-0em`);
    });
  });

  describe('with non-empty data', () => {
    test.each([
      [
        {
          lineHeight: 1,
          topCrop: 0,
          bottomCrop: 0,
        },
        `-0em`,
        `-0em`,
      ],
      [
        {
          lineHeight: 1.5,
          topCrop: 9,
          bottomCrop: 8,
          topAdjustment: 1,
          bottomAdjustment: 1,
        },
        `calc(-0.4em + 1px)`,
        `calc(-0.43125em + 1px)`,
      ],

      [
        {
          lineHeight: 1.3,
          topCrop: 2,
          bottomCrop: 3,
          cropFontSize: 16,
          cropLineHeight: 1,
        },
        `-0.3375em`,
        `-0.275em`,
      ],
      [
        {
          lineHeight: 1.3,
          topCrop: 2,
          bottomCrop: 3,
          topAdjustment: 1,
          bottomAdjustment: 1,
          cropFontSize: 16,
          cropLineHeight: 1,
        },
        `calc(-0.3375em + 1px)`,
        `calc(-0.275em + 1px)`,
      ],
    ] as Test[])(
      'returns the correct margins',
      (cropData, marginTop, marginBottom) => {
        const result = textCrop(cropData);

        expect(result['::after'].marginTop).toEqual(marginTop);
        expect(result['::before'].marginBottom).toEqual(marginBottom);
      },
    );
  });

  describe('common properties', () => {
    const commonProps = {
      content: "''",
      display: 'block',
      height: 0,
      width: 0,
    };

    test(`returns correct common properties for ::before pesuod-element`, () => {
      const cropData = {};

      const result = textCrop(cropData);

      expect(result['::before']).toMatchObject(commonProps);
    });

    test(`returns correct common properties for ::after pesuod-element`, () => {
      const cropData = {};

      const result = textCrop(cropData);

      expect(result['::after']).toMatchObject(commonProps);
    });
  });
});
