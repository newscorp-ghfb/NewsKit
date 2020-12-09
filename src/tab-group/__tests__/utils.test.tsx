import {getLayoutParams} from '../utils';
import {compileTheme, createTheme} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-tab-group-theme',
});

test('when element is undefined', () => {
  const element = undefined;
  const theme = compileTheme(myCustomTheme);
  expect(getLayoutParams(element, theme, false)).toEqual({
    length: 0,
    distance: 0,
  });
});

describe('getLayoutParams', () => {
  const element = document.createElement('div');
  Object.defineProperties(element, {
    clientWidth: {
      value: 80,
    },
    offsetLeft: {
      value: 0,
    },
    clientHeight: {
      value: 48,
    },
    offsetTop: {
      value: 0,
    },
  });
  test('when it is default value', () => {
    const theme = compileTheme(myCustomTheme);
    expect(getLayoutParams(element, theme, false)).toEqual({
      length: 80,
      distance: 0,
    });
    expect(getLayoutParams(element, theme, true)).toEqual({
      length: 48,
      distance: 0,
    });
  });

  test('when lengthOverride is a string', () => {
    const theme = compileTheme(myCustomTheme);
    const lengthOverride = 'sizing050';
    expect(getLayoutParams(element, theme, false, lengthOverride)).toEqual({
      length: 24,
      distance: 28,
    });
    expect(getLayoutParams(element, theme, true, lengthOverride)).toEqual({
      length: 24,
      distance: 12,
    });
  });

  test('when lengthOverride is a percentage value', () => {
    const theme = compileTheme(myCustomTheme);
    const lengthOverride = '75%';
    expect(getLayoutParams(element, theme, false, lengthOverride)).toEqual({
      length: 60,
      distance: 10,
    });
    expect(getLayoutParams(element, theme, true, lengthOverride)).toEqual({
      length: 36,
      distance: 6,
    });
  });
});
