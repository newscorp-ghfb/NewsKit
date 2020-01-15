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
    interfaceBackground010: '#F9F9F9',

    semanticNegativeBase: '#C51D24',
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

      linkText: colors.accessibleBlue010,
      linkActive: colors.accessibleBlue010,
      linkHover: colors.accessibleBlue010,
      linkVisited: colors.accessibleBlue010,

      standfirstText: colors.inkSubtle,
    } as Theme['colors'],
  }),
});
