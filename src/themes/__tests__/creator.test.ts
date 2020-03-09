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

    test('override of color is propagated in styledPreset', () => {
      const testColor = '#eeff99';
      const theme = createTheme('newskit-light', {
        colorOverrides: {
          interactive030: testColor,
        },
        baseTheme: newskitLightTheme,
        themeOverrider: () => ({
          colors: {
            interactive030: testColor,
          },
        }),
      });
      expect(theme.colors.interactive030).toEqual(testColor);
      expect(
        theme.stylePresets.iconButtonSolidPrimary &&
          theme.stylePresets.iconButtonSolidPrimary.base &&
          theme.stylePresets.iconButtonSolidPrimary.base.backgroundColor,
      ).toEqual(testColor);
    });

    test('override of stylePreset is present in theme', () => {
      const customStylePreset = {
        base: {
          backgroundColor: '#101010',
          borderRadius: '20rem',
        },
        hover: {
          backgroundColor: '#909090',
        },
      };
      const theme = createTheme('newskit-light', {
        themeOverrider: () => ({
          stylePresets: {
            audioPlayerSeekBarIndicator: customStylePreset,
          },
        }),
      });
      expect(theme.stylePresets.audioPlayerSeekBarIndicator).toEqual(
        customStylePreset,
      );
    });
  });
});
