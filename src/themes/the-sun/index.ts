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
    fontFamily1: {
      fontFamily: 'TheSun',
    },
    fontFamily2: {
      fontFamily: 'TheSun',
    },
    fontFamily3: {
      fontFamily: 'TheSun-HeavyNarrow, TheSun',
    },
  },
  themeOverrider: ({colors}) => ({
    colors: {
      linkText: colors.inkSubtle,
      linkActive: colors.inkSubtle,
      linkHover: colors.inkSubtle,
      linkVisited: colors.inkSubtle,

      tagBorder: colors.inkSubtle,
      tagHoverBorder: colors.inkSubtle,
    } as Theme['colors'],
  }),
});
