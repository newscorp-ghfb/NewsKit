/* eslint-disable global-require */
/* eslint-disable no-shadow */
import {FontConfig} from '../../themes/newskit-light/fonts';
import {getFontProps} from '../get-font-props';

const fontSize = '12px';
const lineHeight = 1.5;

describe('getFontProps', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test(`returns correct margins without additional crop adjustments`, () => {
    const fontFamilyTest: FontConfig = {
      fontFamily: 'Test Font Family',
      cropConfig: {
        top: 9,
        bottom: 8,
      },
    };

    jest.doMock('../../themes/newskit-light/fonts', () => {
      const actual = jest.requireActual('../../themes/newskit-light/fonts');
      return {
        fontPrimitives: {
          ...actual.fontPrimitives,
          fontFamilyTest,
        },
      };
    });

    const {getFontProps} = require('../get-font-props');

    const result = getFontProps(
      fontSize,
      lineHeight,
      fontFamilyTest.fontFamily,
    );

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

    jest.doMock('../../themes/newskit-light/fonts', () => {
      const actual = jest.requireActual('../../themes/newskit-light/fonts');
      return {
        fontPrimitives: {
          ...actual.fontPrimitives,
          fontFamilyTest,
        },
      };
    });

    const {getFontProps} = require('../get-font-props');

    const result = getFontProps(
      fontSize,
      lineHeight,
      fontFamilyTest.fontFamily,
    );

    expect(result['::before'].marginBottom).toEqual(
      `calc(-0.5145833333333334em + 2px)`,
    );
    expect(result['::after'].marginTop).toEqual(
      `calc(-0.4833333333333334em + 1px)`,
    );
  });

  test(`returns undefined if font-family is found but no crop config is available`, () => {
    const fontFamilyTest: FontConfig = {
      fontFamily: 'Test Font Family',
    };

    jest.doMock('../../themes/newskit-light/fonts', () => {
      const actual = jest.requireActual('../../themes/newskit-light/fonts');
      return {
        fontPrimitives: {
          ...actual.fontPrimitives,
          fontFamilyTest,
        },
      };
    });

    const {getFontProps} = require('../get-font-props');

    const result = getFontProps(
      fontSize,
      lineHeight,
      fontFamilyTest.fontFamily,
    );

    expect(result).toBeUndefined();
  });

  test(`returns undefined if font-family is not found`, () => {
    const fontFamilyTest: FontConfig = {
      fontFamily: 'Test Font Family',
    };

    const result = getFontProps(
      fontSize,
      lineHeight,
      fontFamilyTest.fontFamily,
    );

    expect(result).toBeUndefined();
  });
});
