import {createTheme, compileTheme} from '../../theme';
import {getFillColor} from '../utils';

describe('slider util getFillColour', () => {
  const theme = compileTheme(
    createTheme({
      name: 'myTestTheme',
      overrides: {
        stylePresets: {
          presetRed: {
            base: {
              backgroundColor: 'red',
            },
          },
          presetYellow: {
            base: {
              backgroundColor: 'yellow',
            },
          },
          presetNoBaseState: {},
          presetNoBackground: {
            base: {},
          },
        },
      },
    }),
  );

  test('returns fallback background', () => {
    expect(getFillColor(theme, 'presetRed', undefined)).toEqual('red');
  });

  test('returns override background', () => {
    expect(getFillColor(theme, 'presetRed', 'presetYellow')).toEqual('yellow');
  });

  test('returns empty string if no background', () => {
    expect(getFillColor(theme, 'presetNoBaseState', undefined)).toEqual('');
    expect(getFillColor(theme, 'presetNoBackground', undefined)).toEqual('');
    expect(
      getFillColor(theme, 'presetNoBaseState', 'presetNoBackground'),
    ).toEqual('');
    expect(
      getFillColor(theme, 'presetNoBackground', 'presetNoBaseState'),
    ).toEqual('');
  });
});
