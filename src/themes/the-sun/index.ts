import {createTheme, Theme} from '../creator';

export const theSunTheme = createTheme('the-sun-theme', {
  colorOverrides: {
    interactive010: '#4085CB',
    interactive020: '#6E7070',
    link010: '#007AFF',

    inkContrast: '#222526',
    inkBase: '#2E2E33',
    inkSubtle: '#6E7070',
    inkNonEssential: '#ADAFB0',

    interface010: '#F3F6F7',
    interface020: '#FFFFFF',
    interface030: '#E6EAEB',
    interface040: '#ADAFB0',
    interface050: '#222526',

    inverse020: '#222526',
  },
  fontOverrides: {
    fontFamilyPrimary: 'TheSun',
    fontFamilySecondary: 'TheSun',
    fontFamilyAdditional: 'TheSun-HeavyNarrow, TheSun',
  },
  themeOverrider: ({colors, fonts}) => ({
    colors: {
      linkText: colors.interactive020,
      linkActive: colors.interactive020,
      linkHover: colors.interactive020,
      linkVisited: colors.interactive020,

      tagBorder: colors.inkSubtle,
      tagHoverBorder: colors.inkSubtle,
      standfirstText: colors.inkBase,
    } as Theme['colors'],
    typePresets: {
      standfirst200: {
        fontSize: fonts.fontSize060,
      },
    } as Theme['typePresets'],
  }),
});
