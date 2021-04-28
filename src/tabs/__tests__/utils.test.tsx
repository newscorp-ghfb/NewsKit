import {getLayoutParams} from '../utils';
import {compileTheme, createTheme} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-tab-group-theme',
});

test('when element is undefined', () => {
  const element = undefined;
  const theme = compileTheme(myCustomTheme);
  expect(getLayoutParams(element, theme, false)).toEqual({
    size: 0,
    distance: 0,
  });
});

describe('getLayoutParams', () => {
  const element = document.createElement('div');
  Object.defineProperties(element, {
    getBoundingClientRect: {
      value: () => ({
        width: 80,
        height: 48,
      }),
    },
    offsetLeft: {
      value: 0,
    },
    offsetTop: {
      value: 0,
    },
  });
  test('when it is default value', () => {
    const theme = compileTheme(myCustomTheme);
    expect(getLayoutParams(element, theme, false)).toEqual({
      size: 80,
      distance: 0,
    });
    expect(getLayoutParams(element, theme, true)).toEqual({
      size: 48,
      distance: 0,
    });
  });

  test('when sizeOverride is a string', () => {
    const theme = compileTheme(myCustomTheme);
    const sizeOverride = 'sizing050';
    expect(getLayoutParams(element, theme, false, sizeOverride)).toEqual({
      size: 24,
      distance: 28,
    });
    expect(getLayoutParams(element, theme, true, sizeOverride)).toEqual({
      size: 24,
      distance: 12,
    });
  });

  test('when sizeOverride is a percentage value', () => {
    const theme = compileTheme(myCustomTheme);
    const sizeOverride = '75%';
    expect(getLayoutParams(element, theme, false, sizeOverride)).toEqual({
      size: 60,
      distance: 10,
    });
    expect(getLayoutParams(element, theme, true, sizeOverride)).toEqual({
      size: 36,
      distance: 6,
    });
  });

  test('when sizeOverride is a pixel value', () => {
    const theme = compileTheme(myCustomTheme);
    const sizeOverride = '20px';
    expect(getLayoutParams(element, theme, false, sizeOverride)).toEqual({
      size: 20,
      distance: 30,
    });
    expect(getLayoutParams(element, theme, true, sizeOverride)).toEqual({
      size: 20,
      distance: 14,
    });
  });

  test('when sizeOverride is an unsupported value returns original sizes', () => {
    const theme = compileTheme(myCustomTheme);
    const sizeOverride = '1em';
    expect(getLayoutParams(element, theme, false, sizeOverride)).toEqual({
      size: 80,
      distance: 0,
    });
    expect(getLayoutParams(element, theme, true, sizeOverride)).toEqual({
      size: 48,
      distance: 0,
    });
  });
});
