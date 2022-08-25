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
    inkBrand010: '{{colors.purple060}}',
    inkBrand020: '{{colors.purple080}}',
    interfaceBrand010: '{{colors.purple060}}',
    interfaceBrand020: '{{colors.purple080}}',
    interfaceBrand030: '{{colors.purple060}}',
    interfaceBrand040: '{{colors.purple060}}',
    interfaceBrand050: '{{colors.purple080}}',

    illustrationPalette010: '{{colors.purple010}}',
    illustrationPalette020: '{{colors.purple030}}',
    illustrationPalette030: '{{colors.purple040}}',
    illustrationPalette040: '{{colors.purple050}}',
    illustrationPalette050: '{{colors.purple055}}',
    illustrationPalette060: '{{colors.purple060}}',
    illustrationPalette070: '{{colors.purple070}}',
    illustrationPalette080: '{{colors.purple080}}',
    illustrationPalette090: '{{colors.purple090}}',
    illustrationPalette100: '{{colors.purple100}}',
    illustrationHighlight010: '{{colors.purple050}}',
    illustrationInterface020: '{{colors.purple020}}',
    illustrationInterface030: '{{colors.purple030}}',
    illustrationInterface040: '{{colors.purple040}}',
    illustrationInterface050: '{{colors.purple050}}',
    illustrationInterface060: '{{colors.purple055}}',
    illustrationInterface070: '{{colors.purple060}}',
    illustrationInterface080: '{{colors.purple070}}',
    illustrationInterface090: '{{colors.purple080}}',
    illustrationInterface100: '{{colors.purple090}}',
    illustrationAnatomySubtle: '{{colors.purple030}}',
    illustrationAnatomyBorder010: '{{colors.purple030}}',
    illustrationAnatomyBorder020: '{{colors.purple070}}',
  },
};

export const foundationsDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.purple050}}',
    inkBrand020: '{{colors.purple030}}',
    interfaceBrand010: '{{colors.purple060}}',
    interfaceBrand020: '{{colors.purple080}}',
    interfaceBrand030: '{{colors.purple060}}',
    interfaceBrand040: '{{colors.purple060}}',
    interfaceBrand050: '{{colors.purple080}}',

    illustrationPalette010: '{{colors.purple010}}',
    illustrationPalette020: '{{colors.purple030}}',
    illustrationPalette030: '{{colors.purple040}}',
    illustrationPalette040: '{{colors.purple050}}',
    illustrationPalette050: '{{colors.purple055}}',
    illustrationPalette060: '{{colors.purple060}}',
    illustrationPalette070: '{{colors.purple070}}',
    illustrationPalette080: '{{colors.purple080}}',
    illustrationPalette090: '{{colors.purple090}}',
    illustrationPalette100: '{{colors.purple100}}',
    illustrationHighlight010: '{{colors.white}}',
    illustrationSubtle010: '{{colors.purple080}}',
    illustrationBackground010: '{{colors.darkBlue095}}',
    illustrationBackground020: '{{colors.darkBlue095}}',
    illustrationBorder010: '{{colors.purple070}}',
    illustrationBorder020: '{{colors.purple060}}',
    illustrationDisabled: '{{colors.purple070}}',
    illustrationInterface010: '{{colors.purple055}}',
    illustrationInterface020: '{{colors.purple070}}',
    illustrationInterface030: '{{colors.purple080}}',
    illustrationInterface040: '{{colors.purple090}}',
    illustrationInterface050: '{{colors.purple100}}',
    illustrationInterface060: '{{colors.purple030}}',
    illustrationInterface070: '{{colors.purple040}}',
    illustrationInterface080: '{{colors.purple055}}',
    illustrationInterface090: '{{colors.purple040}}',
    illustrationInterface100: '{{colors.purple010}}',
    illustrationAnatomySubtle: '{{colors.purple040}}',
    illustrationAnatomyBorder010: '{{colors.purple080}}',
    illustrationAnatomyBorder020: '{{colors.purple040}}',
  },
};

export const guidesLightOverrides = {
  colors: {
    inkBrand010: '{{colors.blue060}}',
    inkBrand020: '{{colors.blue080}}',
    interfaceBrand010: '{{colors.blue060}}',
    interfaceBrand020: '{{colors.blue080}}',
    interfaceBrand030: '{{colors.blue060}}',
    interfaceBrand040: '{{colors.blue060}}',
    interfaceBrand050: '{{colors.blue080}}',

    illustrationPalette010: '{{colors.blue010}}',
    illustrationPalette020: '{{colors.blue030}}',
    illustrationPalette030: '{{colors.blue040}}',
    illustrationPalette040: '{{colors.blue050}}',
    illustrationPalette050: '{{colors.blue055}}',
    illustrationPalette060: '{{colors.blue060}}',
    illustrationPalette070: '{{colors.blue070}}',
    illustrationPalette080: '{{colors.blue080}}',
    illustrationPalette090: '{{colors.blue090}}',
    illustrationPalette100: '{{colors.blue100}}',
    illustrationHighlight010: '{{colors.blue050}}',
    illustrationSubtle010: '{{colors.darkBlue050}}',
    illustrationBackground010: '{{colors.blue010}}',
    illustrationBackground020: '{{colors.darkBlue010}}',
    illustrationBorder010: '{{colors.darkBlue020}}',
    illustrationBorder020: '{{colors.darkBlue030}}',
    illustrationDisabled: '{{colors.darkBlue020}}',
    illustrationInterface010: '{{colors.white}}',
    illustrationInterface020: '{{colors.blue020}}',
    illustrationInterface030: '{{colors.blue030}}',
    illustrationInterface040: '{{colors.blue040}}',
    illustrationInterface050: '{{colors.blue050}}',
    illustrationInterface060: '{{colors.blue055}}',
    illustrationInterface070: '{{colors.blue060}}',
    illustrationInterface080: '{{colors.blue070}}',
    illustrationInterface090: '{{colors.blue080}}',
    illustrationInterface100: '{{colors.blue090}}',
    illustrationAnatomySubtle: '{{colors.blue030}}',
    illustrationAnatomyBorder010: '{{colors.blue030}}',
    illustrationAnatomyBorder020: '{{colors.blue070}}',
  },
};

export const guidesDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.blue050}}',
    inkBrand020: '{{colors.blue030}}',
    interfaceBrand010: '{{colors.blue060}}',
    interfaceBrand020: '{{colors.blue080}}',
    interfaceBrand030: '{{colors.blue060}}',
    interfaceBrand040: '{{colors.blue060}}',
    interfaceBrand050: '{{colors.blue080}}',

    illustrationPalette010: '{{colors.blue010}}',
    illustrationPalette020: '{{colors.blue030}}',
    illustrationPalette030: '{{colors.blue040}}',
    illustrationPalette040: '{{colors.blue050}}',
    illustrationPalette050: '{{colors.blue055}}',
    illustrationPalette060: '{{colors.blue060}}',
    illustrationPalette070: '{{colors.blue070}}',
    illustrationPalette080: '{{colors.blue080}}',
    illustrationPalette090: '{{colors.blue090}}',
    illustrationPalette100: '{{colors.blue100}}',
    illustrationHighlight010: '{{colors.white}}',
    illustrationSubtle010: '{{colors.blue080}}',
    illustrationBackground010: '{{colors.darkBlue095}}',
    illustrationBackground020: '{{colors.darkBlue095}}',
    illustrationBorder010: '{{colors.blue070}}',
    illustrationBorder020: '{{colors.blue060}}',
    illustrationDisabled: '{{colors.blue080}}',
    illustrationInterface010: '{{colors.blue055}}',
    illustrationInterface020: '{{colors.blue070}}',
    illustrationInterface030: '{{colors.blue080}}',
    illustrationInterface040: '{{colors.blue090}}',
    illustrationInterface050: '{{colors.blue100}}',
    illustrationInterface060: '{{colors.blue030}}',
    illustrationInterface070: '{{colors.blue040}}',
    illustrationInterface080: '{{colors.blue050}}',
    illustrationInterface090: '{{colors.blue055}}',
    illustrationInterface100: '{{colors.blue010}}',
    illustrationAnatomySubtle: '{{colors.blue040}}',
    illustrationAnatomyBorder010: '{{colors.blue080}}',
    illustrationAnatomyBorder020: '{{colors.blue040}}',
  },
};

export const patternsLightOverrides = {
  colors: {
    inkBrand010: '{{colors.teal060}}',
    inkBrand020: '{{colors.teal080}}',
    interfaceBrand010: '{{colors.teal020}}',
    interfaceBrand020: '{{colors.teal030}}',
    interfaceBrand030: '{{colors.teal060}}',
    interfaceBrand040: '{{colors.teal070}}',
    interfaceBrand050: '{{colors.teal080}}',

    illustrationPalette010: '{{colors.teal010}}',
    illustrationPalette020: '{{colors.teal020}}',
    illustrationPalette030: '{{colors.teal030}}',
    illustrationPalette040: '{{colors.teal040}}',
    illustrationPalette050: '{{colors.teal050}}',
    illustrationPalette060: '{{colors.teal055}}',
    illustrationPalette070: '{{colors.teal060}}',
    illustrationPalette080: '{{colors.teal070}}',
    illustrationPalette090: '{{colors.teal080}}',
    illustrationPalette100: '{{colors.teal090}}',
    illustrationHighlight010: '{{colors.teal050}}',
    illustrationInterface020: '{{colors.teal010}}',
    illustrationInterface030: '{{colors.teal020}}',
    illustrationInterface040: '{{colors.teal030}}',
    illustrationInterface050: '{{colors.teal040}}',
    illustrationInterface060: '{{colors.teal050}}',
    illustrationInterface070: '{{colors.teal055}}',
    illustrationInterface080: '{{colors.teal060}}',
    illustrationInterface090: '{{colors.teal070}}',
    illustrationInterface100: '{{colors.teal080}}',
    illustrationAnatomySubtle: '{{colors.teal030}}',
    illustrationAnatomyBorder010: '{{colors.teal030}}',
    illustrationAnatomyBorder020: '{{colors.teal070}}',
  },
};

export const patternsDarkOverrides = {
  colors: {
    inkBrand010: '{{colors.teal050}}',
    inkBrand020: '{{colors.teal030}}',
    interfaceBrand010: '{{colors.teal080}}',
    interfaceBrand020: '{{colors.teal060}}',
    interfaceBrand030: '{{colors.teal060}}',
    interfaceBrand040: '{{colors.teal080}}',
    interfaceBrand050: '{{colors.teal080}}',

    illustrationPalette010: '{{colors.teal010}}',
    illustrationPalette020: '{{colors.teal020}}',
    illustrationPalette030: '{{colors.teal030}}',
    illustrationPalette040: '{{colors.teal040}}',
    illustrationPalette050: '{{colors.teal050}}',
    illustrationPalette060: '{{colors.teal055}}',
    illustrationPalette070: '{{colors.teal060}}',
    illustrationPalette080: '{{colors.teal070}}',
    illustrationPalette090: '{{colors.teal080}}',
    illustrationPalette100: '{{colors.teal090}}',
    illustrationHighlight010: '{{colors.white}}',
    illustrationSubtle010: '{{colors.teal060}}',
    illustrationBackground010: '{{colors.darkBlue095}}',
    illustrationBackground020: '{{colors.darkBlue095}}',
    illustrationBorder010: '{{colors.teal060}}',
    illustrationBorder020: '{{colors.teal055}}',
    illustrationDisabled: '{{colors.teal070}}',
    illustrationInterface010: '{{colors.teal050}}',
    illustrationInterface020: '{{colors.teal070}}',
    illustrationInterface030: '{{colors.teal060}}',
    illustrationInterface040: '{{colors.teal070}}',
    illustrationInterface050: '{{colors.teal080}}',
    illustrationInterface060: '{{colors.teal020}}',
    illustrationInterface070: '{{colors.teal030}}',
    illustrationInterface080: '{{colors.teal040}}',
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
  outline: {
    safariOutlineStyleDefault: 'solid',
  },
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

export const guidesThemeLight = createTheme({
  name: 'docs-guides-light',
  baseTheme: docsThemeLight,
  overrides: guidesLightOverrides,
});

export const guidesThemeDark = createTheme({
  name: 'docs-guides-dark',
  baseTheme: docsThemeDark,
  overrides: guidesDarkOverrides,
});
