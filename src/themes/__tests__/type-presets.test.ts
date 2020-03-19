import {getFontProps} from '../mappers/type-presets';
import {FontConfig} from '../newskit-light/fonts';

const fontSize = '12px';
const lineHeight = 1.5;

describe('getFontProps', () => {
  test(`returns correct margins without additional crop adjustments`, () => {
    const fontFamilyTest: FontConfig = {
      fontFamily: 'Test Font Family',
      cropConfig: {
        top: 9,
        bottom: 8,
      },
    };

    const result = getFontProps(fontSize, lineHeight, fontFamilyTest);

    expect(result['::after'].marginTop).toEqual(`-0.4833333333333334em`);
    expect(result['::before'].marginBottom).toEqual(`-0.5145833333333334em`);
  });

  test(`returns correct margins with additional crop adjustments`, () => {
    const fontFamilyTest: FontConfig = {
      fontFamily: 'Test Font Family',
      cropConfig: {
        top: 9,
        bottom: 8,
      },
      cropAdjustments: {
        '12px': {
          top: 2,
          bottom: 1,
        },
      },
    };

    const result = getFontProps(fontSize, lineHeight, fontFamilyTest);

    expect(result['::before'].marginBottom).toEqual(
      `calc(-0.5145833333333334em + 2px)`,
    );
    expect(result['::after'].marginTop).toEqual(
      `calc(-0.4833333333333334em + 1px)`,
    );
  });
});
