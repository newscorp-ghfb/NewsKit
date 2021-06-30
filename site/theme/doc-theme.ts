import {createTheme} from 'newskit';
import colorsLight from './colors-light.json';
import colorsDark from './colors-dark.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import typographyPresets from './typography-presets.json';
import borders from './borders.json';
import {stylePresets} from './style-presets';
import {componentDefaults} from './component-defaults';

export const foundationsLightOverrides = {
  colors: {
    inkBrand010: '{{colors.purple050}}',
    inkBrand020: '{{colors.purple080}}',
    interfaceBrand010: '{{colors.purple020}}',
    interfaceBrand020: '{{colors.purple030}}',
    interfaceBrand030: '{{colors.purple050}}',
    interfaceBrand040: '{{colors.purple060}}',
    interfaceBrand050: '{{colors.purple080}}',
  },
};

export const foundationsDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.purple040}}',
    inkBrand020: '{{colors.purple020}}',
    interfaceBrand010: '{{colors.purple090}}',
    interfaceBrand020: '{{colors.purple080}}',
    interfaceBrand030: '{{colors.purple050}}',
    interfaceBrand040: '{{colors.purple040}}',
    interfaceBrand050: '{{colors.purple020}}',
  },
};

export const patternsLightOverrides = {
  colors: {
    inkBrand010: '{{colors.teal050}}',
    inkBrand020: '{{colors.teal080}}',
    interfaceBrand010: '{{colors.teal020}}',
    interfaceBrand020: '{{colors.teal030}}',
    interfaceBrand030: '{{colors.teal050}}',
    interfaceBrand040: '{{colors.teal070}}',
    interfaceBrand050: '{{colors.teal080}}',
  },
};

export const patternsDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.teal040}}',
    inkBrand020: '{{colors.teal020}}',
    interfaceBrand010: '{{colors.teal090}}',
    interfaceBrand020: '{{colors.teal080}}',
    interfaceBrand030: '{{colors.teal050}}',
    interfaceBrand040: '{{colors.teal040}}',
    interfaceBrand050: '{{colors.teal020}}',
  },
};

export const accessibilityLightOverrides = {
  colors: {
    inkBrand010: '{{colors.neutral050}}',
    inkBrand020: '{{colors.neutral080}}',
    interfaceBrand010: '{{colors.neutral020}}',
    interfaceBrand020: '{{colors.neutral040}}',
    interfaceBrand030: '{{colors.neutral050}}',
    interfaceBrand040: '{{colors.neutral070}}',
    interfaceBrand050: '{{colors.neutral080}}',
  },
};

export const accessibilityDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.neutral050}}',
    inkBrand020: '{{colors.neutral030}}',
    interfaceBrand010: '{{colors.neutral090}}',
    interfaceBrand020: '{{colors.neutral080}}',
    interfaceBrand030: '{{colors.neutral050}}',
    interfaceBrand040: '{{colors.neutral040}}',
    interfaceBrand050: '{{colors.neutral020}}',
  },
};

export const [lightOverrides, darkOverrides] = [colorsLight, colorsDark].map(
  colors => ({
    colors,
    stylePresets,
    typographyPresets,
    componentDefaults,
    fonts,
    overlays,
    borders,
    sizing: {
      sizing055: '28px',
    },
    spacePresets: {
      space055: '{{sizing.sizing055}}',
    },
  }),
);

export const docsThemeLight = createTheme({
  name: 'docs-theme-light',
  overrides: lightOverrides,
});

export const docsThemeDark = createTheme({
  name: 'docs-theme-dark',
  baseTheme: docsThemeLight,
  overrides: darkOverrides,
});

export const foundationsThemeLight = createTheme({
  name: 'docs-foundations-light',
  baseTheme: docsThemeLight,
  overrides: foundationsLightOverrides,
});

export const foundationsThemeDark = createTheme({
  name: 'docs-foundations-dark',
  baseTheme: docsThemeDark,
  overrides: foundationsDarkOverrides,
});

export const patternsThemeLight = createTheme({
  name: 'docs-patterns-light',
  baseTheme: docsThemeLight,
  overrides: patternsLightOverrides,
});

export const patternsThemeDark = createTheme({
  name: 'docs-patterns-dark',
  baseTheme: docsThemeDark,
  overrides: patternsDarkOverrides,
});

export const accessibilityThemeLight = createTheme({
  name: 'docs-accessibility-light',
  baseTheme: docsThemeLight,
  overrides: accessibilityLightOverrides,
});

export const accessibilityThemeDark = createTheme({
  name: 'docs-accessibility-dark',
  baseTheme: docsThemeDark,
  overrides: accessibilityDarkOverrides,
});
