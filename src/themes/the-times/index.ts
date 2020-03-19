import {createTheme, Theme} from '../creator';

export const theTimesTheme = createTheme('the-times-theme', {
  colorOverrides: {
    inkContrast: '#1D1D1B',
    inkBase: '#333333',
    inkSubtle: '#696969',
    inkNonEssential: '#4D4D4D',

    interface010: '#F5F5F5',
    interface020: '#FFFFFF',
    interface030: '#F0F0F0',
    interface040: '#DBDBDB',
    interface050: '#272D34',

    semanticNegative030: '#C51D24',
  },
  fontOverrides: {
    fontFamily1: {
      fontFamily: 'TimesModern-Regular',
      cropConfig: {
        top: 0,
        bottom: 0,
      },
    },
    fontFamily2: {
      fontFamily: 'TimesDigitalW04-Regular',
    },
    fontFamily3: {
      fontFamily: 'GillSansMTStd-Medium',
    },
  },
  themeOverrider: ({colors, borders}) => ({
    borders: {
      tagBorderWidth: borders.borderWidth010,
    } as Theme['borders'],
    colors: {
      tagBorder: colors.interface040,
      tagHoverBorder: colors.interface040,

      linkText: colors.inkLink,
      linkActive: colors.inkLink,
      linkHover: colors.inkLink,
      linkVisited: colors.inkLink,

      standfirstText: colors.inkSubtle,
    } as Theme['colors'],
  }),
});
