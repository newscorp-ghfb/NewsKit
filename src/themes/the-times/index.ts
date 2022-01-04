import {createTheme, Theme} from '../creator';

export const theTimesTheme = createTheme('the-times-theme', {
  colorOverrides: {
    interactive010: '#006699',
    interactive020: '#1D1D1B',

    link010: '#006699',

    inkContrast: '#1D1D1B',
    inkBase: '#333333',
    inkSubtle: '#696969',
    inkNonEssential: '#4D4D4D',

    interface010: '#F5F5F5',
    interface020: '#FFFFFF',
    interface030: '#F0F0F0',
    interface040: '#DBDBDB',
    interface050: '#272D34',
    interfaceBackground: '#F9F9F9',

    inverse010: '#FFFFFF',
    inverse020: '#272D34',

    semanticNegative: '#C51D24',
  },
  fontOverrides: {
    fontFamilyPrimary: 'TimesModern-Regular',
    fontFamilySecondary: 'TimesDigitalW04-Regular',
    fontFamilyAdditional: 'GillSansMTStd-Medium',
  },
  themeOverrider: ({colors, borders}) => ({
    borders: {
      tagBorderWidth: borders.borderWidth010,
    } as Theme['borders'],
    colors: {
      tagBorder: colors.interface040,
      tagHoverBorder: colors.interface040,

      linkText: colors.link010,
      linkActive: colors.link010,
      linkHover: colors.link010,
      linkVisited: colors.link010,

      standfirstText: colors.inkSubtle,
    } as Theme['colors'],
  }),
});
