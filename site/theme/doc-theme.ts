import {createTheme} from 'newskit';
import colorsLight from './colors-light.json';
import colorsDark from './colors-dark.json';
import fonts from './fonts.json';
import typographyPresets from './typography-presets.json';
import overlaysDark from './overlays-dark.json';
import overlays from './overlays.json';
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

    illustrationPalette010: '{{colors.purple010}}',
    illustrationPalette020: '{{colors.purple020}}',
    illustrationPalette030: '{{colors.purple030}}',
    illustrationPalette040: '{{colors.purple040}}',
    illustrationPalette050: '{{colors.purple050}}',
    illustrationPalette060: '{{colors.purple060}}',
    illustrationPalette070: '{{colors.purple070}}',
    illustrationPalette080: '{{colors.purple080}}',
    illustrationPalette090: '{{colors.purple090}}',
    illustrationPalette100: '{{colors.purple100}}',
    illustrationHighlight010: '{{colors.purple040}}',
    illustrationSubtle010: '{{colors.darkBlue060}}',
    illustrationBackground010: '{{colors.blue005}}',
    illustrationBackground020: '{{colors.darkBlue010}}',
    illustrationBorder010: '{{colors.darkBlue020}}',
    illustrationBorder020: '{{colors.darkBlue040}}',
    illustrationDisabled: '{{colors.darkBlue020}}',
    illustrationInterface010: '{{colors.white}}',
    illustrationInterface020: '{{colors.purple010}}',
    illustrationInterface030: '{{colors.purple020}}',
    illustrationInterface040: '{{colors.purple030}}',
    illustrationInterface050: '{{colors.purple040}}',
    illustrationInterface060: '{{colors.purple050}}',
    illustrationInterface070: '{{colors.purple060}}',
    illustrationInterface080: '{{colors.purple070}}',
    illustrationInterface090: '{{colors.purple080}}',
    illustrationInterface100: '{{colors.purple090}}',
    illustrationAnatomySubtle: '{{colors.purple020}}',
    illustrationAnatomyBorder010: '{{colors.purple020}}',
    illustrationAnatomyBorder020: '{{colors.purple040}}',
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

    illustrationPalette010: '{{colors.purple010}}',
    illustrationPalette020: '{{colors.purple020}}',
    illustrationPalette030: '{{colors.purple030}}',
    illustrationPalette040: '{{colors.purple040}}',
    illustrationPalette050: '{{colors.purple050}}',
    illustrationPalette060: '{{colors.purple060}}',
    illustrationPalette070: '{{colors.purple070}}',
    illustrationPalette080: '{{colors.purple080}}',
    illustrationPalette090: '{{colors.purple090}}',
    illustrationPalette100: '{{colors.purple100}}',
    illustrationHighlight010: '{{colors.white}}',
    illustrationSubtle010: '{{colors.purple070}}',
    illustrationBackground010: '{{colors.darkBlue090}}',
    illustrationBackground020: '{{colors.darkBlue090}}',
    illustrationBorder010: '{{colors.purple070}}',
    illustrationBorder020: '{{colors.purple060}}',
    illustrationDisabled: '{{colors.purple080}}',
    illustrationInterface010: '{{colors.purple050}}',
    illustrationInterface020: '{{colors.purple060}}',
    illustrationInterface030: '{{colors.purple070}}',
    illustrationInterface040: '{{colors.purple080}}',
    illustrationInterface050: '{{colors.purple090}}',
    illustrationInterface060: '{{colors.purple010}}',
    illustrationInterface070: '{{colors.purple020}}',
    illustrationInterface080: '{{colors.purple030}}',
    illustrationInterface090: '{{colors.purple040}}',
    illustrationInterface100: '{{colors.purple010}}',
    illustrationAnatomySubtle: '{{colors.purple040}}',
    illustrationAnatomyBorder010: '{{colors.purple080}}',
    illustrationAnatomyBorder020: '{{colors.purple040}}',
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

    illustrationPalette010: '{{colors.teal010}}',
    illustrationPalette020: '{{colors.teal020}}',
    illustrationPalette030: '{{colors.teal030}}',
    illustrationPalette040: '{{colors.teal040}}',
    illustrationPalette050: '{{colors.teal050}}',
    illustrationPalette060: '{{colors.teal060}}',
    illustrationPalette070: '{{colors.teal070}}',
    illustrationPalette080: '{{colors.teal080}}',
    illustrationPalette090: '{{colors.teal090}}',
    illustrationPalette100: '{{colors.teal100}}',
    illustrationHighlight010: '{{colors.teal040}}',
    illustrationSubtle010: '{{colors.darkBlue060}}',
    illustrationBackground010: '{{colors.blue005}}',
    illustrationBackground020: '{{colors.darkBlue010}}',
    illustrationBorder010: '{{colors.darkBlue020}}',
    illustrationBorder020: '{{colors.darkBlue040}}',
    illustrationDisabled: '{{colors.darkBlue020}}',
    illustrationInterface010: '{{colors.white}}',
    illustrationInterface020: '{{colors.teal010}}',
    illustrationInterface030: '{{colors.teal020}}',
    illustrationInterface040: '{{colors.teal030}}',
    illustrationInterface050: '{{colors.teal040}}',
    illustrationInterface060: '{{colors.teal050}}',
    illustrationInterface070: '{{colors.teal060}}',
    illustrationInterface080: '{{colors.teal070}}',
    illustrationInterface090: '{{colors.teal080}}',
    illustrationInterface100: '{{colors.teal090}}',
    illustrationAnatomySubtle: '{{colors.teal020}}',
    illustrationAnatomyBorder010: '{{colors.teal020}}',
    illustrationAnatomyBorder020: '{{colors.teal040}}',
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

    illustrationPalette010: '{{colors.teal010}}',
    illustrationPalette020: '{{colors.teal020}}',
    illustrationPalette030: '{{colors.teal030}}',
    illustrationPalette040: '{{colors.teal040}}',
    illustrationPalette050: '{{colors.teal050}}',
    illustrationPalette060: '{{colors.teal060}}',
    illustrationPalette070: '{{colors.teal070}}',
    illustrationPalette080: '{{colors.teal080}}',
    illustrationPalette090: '{{colors.teal090}}',
    illustrationPalette100: '{{colors.teal100}}',
    illustrationHighlight010: '{{colors.white}}',
    illustrationSubtle010: '{{colors.teal070}}',
    illustrationBackground010: '{{colors.darkBlue090}}',
    illustrationBackground020: '{{colors.darkBlue090}}',
    illustrationBorder010: '{{colors.teal070}}',
    illustrationBorder020: '{{colors.teal060}}',
    illustrationDisabled: '{{colors.teal080}}',
    illustrationInterface010: '{{colors.teal050}}',
    illustrationInterface020: '{{colors.teal060}}',
    illustrationInterface030: '{{colors.teal070}}',
    illustrationInterface040: '{{colors.teal080}}',
    illustrationInterface050: '{{colors.teal090}}',
    illustrationInterface060: '{{colors.teal020}}',
    illustrationInterface070: '{{colors.teal030}}',
    illustrationInterface080: '{{colors.teal050}}',
    illustrationInterface090: '{{colors.teal050}}',
    illustrationInterface100: '{{colors.teal010}}',
    illustrationAnatomySubtle: '{{colors.teal040}}',
    illustrationAnatomyBorder010: '{{colors.teal080}}',
    illustrationAnatomyBorder020: '{{colors.teal040}}',
  },
};

export const accessibilityLightOverrides = {
  colors: {
    inkBrand010: '{{colors.purple050}}',
    inkBrand020: '{{colors.purple080}}',
    interfaceBrand010: '{{colors.purple020}}',
    interfaceBrand020: '{{colors.purple040}}',
    interfaceBrand030: '{{colors.purple050}}',
    interfaceBrand040: '{{colors.purple070}}',
    interfaceBrand050: '{{colors.purple080}}',
  },
};

export const accessibilityDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.purple050}}',
    inkBrand020: '{{colors.purple030}}',
    interfaceBrand010: '{{colors.purple090}}',
    interfaceBrand020: '{{colors.purple080}}',
    interfaceBrand030: '{{colors.purple050}}',
    interfaceBrand040: '{{colors.purple040}}',
    interfaceBrand050: '{{colors.purple020}}',
  },
};

const lightAndDarkCommonOverrides = {
  stylePresets,
  typographyPresets,
  componentDefaults,
  fonts,
  overlays,
};

export const darkOverrides = {
  ...lightAndDarkCommonOverrides,
  shadows: colorsDark.shadows,
  colors: colorsDark.colors,
  overlays: overlaysDark,
};

export const lightOverrides = {
  ...lightAndDarkCommonOverrides,

  colors: colorsLight.colors,
};

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
