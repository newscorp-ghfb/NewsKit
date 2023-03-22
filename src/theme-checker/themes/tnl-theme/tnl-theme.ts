import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
import darkColors from './dark/colors.json';
import darkOverlays from './dark/overlays.json';
import darkShadows from './dark/shadows.json';

export const tnlOverrides = {
  typographyPresets,
  fonts,
  overlays,
  colors,
  shadows,
  borders,
};

const tnlDarkOverrides = {
  colors: darkColors,
  overlays: darkOverlays,
  shadows: darkShadows,
};

export const tnlTheme = createTheme({
  name: 'tnl-theme',
  baseTheme: newskitLightTheme,
  overrides: tnlOverrides,
});

export const tnlDarkTheme = createTheme({
  name: 'tnl-theme-dark',
  baseTheme: tnlTheme,
  overrides: tnlDarkOverrides,
});

const tnlSubThemesColors = {
  'NK-TNL-Business': {
    inkBrand010: '{{colors.business010}}',
    interfaceBrand010: '{{colors.business010}}',
  },
  'NK-TNL-Comment': {
    inkBrand010: '{{colors.comment010}}',
    interfaceBrand010: '{{colors.comment010}}',
  },
  'NK-TNL-Culture': {
    inkBrand010: '{{colors.culture010}}',
    interfaceBrand010: '{{colors.culture010}}',
  },
  'NK-TNL-Home': {
    inkBrand010: '{{colors.home010}}',
    interfaceBrand010: '{{colors.home010}}',
  },
  'NK-TNL-Money': {
    inkBrand010: '{{colors.money010}}',
    interfaceBrand010: '{{colors.money010}}',
  },
  'NK-TNL-News': {
    inkBrand010: '{{colors.news010}}',
    interfaceBrand010: '{{colors.news010}}',
  },
  'NK-TNL-Puzzle': {
    inkBrand010: '{{colors.puzzle010}}',
    interfaceBrand010: '{{colors.puzzle010}}',
  },
  'NK-TNL-Register': {
    inkBrand010: '{{colors.register010}}',
    interfaceBrand010: '{{colors.register010}}',
  },
  'NK-TNL-Sport': {
    inkBrand010: '{{colors.sport010}}',
    interfaceBrand010: '{{colors.sport010}}',
  },
  'NK-TNL-Times2': {
    inkBrand010: '{{colors.times2010}}',
    interfaceBrand010: '{{colors.times2010}}',
  },
  'NK-TNL-Travel': {
    inkBrand010: '{{colors.travel010}}',
    interfaceBrand010: '{{colors.travel010}}',
  },
  'NK-TNL-World': {
    inkBrand010: '{{colors.world010}}',
    interfaceBrand010: '{{colors.world2010}}',
  },
  'NK-TNL-TimesPlus': {
    inkBrand010: '{{colors.timesplus010}}',
    interfaceBrand010: '{{colors.timesplus010}}',
  },
};

export const tnlSubThemes = Object.keys(tnlSubThemesColors).reduce(
  (allThemes, themeName) => {
    // @ts-ignore
    const themeColors = tnlSubThemesColors[themeName];

    const subThemeLight = createTheme({
      name: `${themeName} Light`,
      baseTheme: tnlTheme,
      overrides: {
        colors: themeColors,
      },
    });
    const subThemeDark = createTheme({
      name: `${themeName} Dark`,
      baseTheme: tnlDarkTheme,
      overrides: {
        colors: themeColors,
      },
    });

    return {
      // @ts-ignore
      ...allThemes,
      [`${themeName} Light`]: subThemeLight,
      [`${themeName} Dark`]: subThemeDark,
    };
  },
  {},
);
