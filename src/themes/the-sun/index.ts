import {createTheme, Theme} from '../creator';

export const theSunTheme = createTheme('the-sun-theme', {
  colorOverrides: {
    inkContrast: '#222526',
    inkBase: '#2E2E33',
    inkSubtle: '#6E7070',
    inkNonEssential: '#ADAFB0',

    interface010: '#F3F6F7',
    interface020: '#FFFFFF',
    interface030: '#E6EAEB',
    interface040: '#ADAFB0',
    interface050: '#222526',
  },
  fontOverrides: {
    fontFamilyPrimary: 'TheSun',
    fontFamilySecondary: 'TheSun',
    fontFamilyAdditional: 'TheSun-HeavyNarrow, TheSun',
  },
  themeOverrider: ({colors, fonts}) => ({
    colors: {
      linkText: colors.inkSubtle,
      linkActive: colors.inkSubtle,
      linkHover: colors.inkSubtle,
      linkVisited: colors.inkSubtle,

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
