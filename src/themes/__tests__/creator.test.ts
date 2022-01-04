import {createTheme, newskitLightTheme} from '..';

describe('themeing functions', () => {
  describe('createTheme', () => {
    test('create default Theme', () => {
      const theme = createTheme('newskit-light');
      const copy = Object.assign({}, newskitLightTheme);
      const expected = Object.assign(copy, {name: 'newskit-light'});
      expect(theme).toEqual(expected);
    });

    test('override by passing newskitLightTheme', () => {
      const theme = createTheme('newskit-light', {
        baseTheme: newskitLightTheme,
      });
      expect(theme).toEqual(newskitLightTheme);
    });

    test('override using theme overriding function', () => {
      const theme = createTheme('newskit-light', {
        baseTheme: newskitLightTheme,
        themeOverrider: () => ({
          colors: {
            black: 'nooop',
          },
        }),
      });
      expect(theme).not.toEqual(newskitLightTheme);
      expect((theme.colors as any).black).toEqual('nooop');
    });
  });
});
