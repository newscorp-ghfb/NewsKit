import {createTheme, newskitLightTheme} from 'newskit';
import documentationLight from '@newskit-themes/newskit-website/Documentation-light.json';
import documentationLightAccessibility from '@newskit-themes/newskit-website/Documentation-light-accessibility.json';
import documentationLightFoundations from '@newskit-themes/newskit-website/Documentation-light-foundations.json';
import documentationLightPatterns from '@newskit-themes/newskit-website/Documentation-light-patterns.json';

import documentationDark from '@newskit-themes/newskit-website/Documentation-dark.json';
import documentationDarkAccessibility from '@newskit-themes/newskit-website/Documentation-dark-accessibility.json';
import documentationDarkFoundations from '@newskit-themes/newskit-website/Documentation-dark-foundations.json';
import documentationDarkPatterns from '@newskit-themes/newskit-website/Documentation-dark-patterns.json';

import {stylePresets} from './style-presets';
import {componentDefaults} from './component-defaults';

// TODO: implement guides themes

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

// How we get font metrics in.
// If we had different fonts in different themes, this implementation would look different
// Docs site uses the same fonts for each theme - so we just use the same from Light theme as the 'default'
const {fonts} = documentationLight;

Object.assign(fonts.fontFamily010, {
  fontMetrics: {
    fontWeight010: {
      ascent: 992,
      capHeight: 700,
      descent: -310,
      lineGap: 0,
      unitsPerEm: 1000,
    },
  },
});
Object.assign(fonts.fontFamily020, {
  fontMetrics: {
    fontWeight010: {
      ascent: 992,
      capHeight: 700,
      descent: -310,
      lineGap: 0,
      unitsPerEm: 1000,
    },
  },
});
Object.assign(fonts.fontFamily030, {
  fontMetrics: {
    fontWeight010: {
      ascent: 992,
      capHeight: 700,
      descent: -310,
      lineGap: 0,
      unitsPerEm: 1000,
    },
  },
});

export const docsThemeLight = createTheme({
  name: 'docs-theme-light',
  baseTheme: newskitLightTheme,
  overrides: {
    ...documentationLight,
    fonts,
    stylePresets,
    componentDefaults,
  },
});

export const docsThemeDark = createTheme({
  name: 'docs-theme-dark',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationDark,
    fonts,
    outlines: {
      safariOutlineStyleDeafult: 'solid',
    },
  },
});

export const foundationsThemeLight = createTheme({
  name: 'docs-foundations-light',
  baseTheme: docsThemeLight,
  overrides: {...documentationLightFoundations, fonts},
});

export const foundationsThemeDark = createTheme({
  name: 'docs-foundations-dark',
  baseTheme: docsThemeDark,
  overrides: {...documentationDarkFoundations, fonts},
});

export const accessibilityThemeLight = createTheme({
  name: 'docs-accessibilits-light',
  baseTheme: docsThemeLight,
  overrides: {...documentationLightAccessibility, fonts},
});

export const accessibilitysThemeDark = createTheme({
  name: 'docs-accessibility-dark',
  baseTheme: docsThemeDark,
  overrides: {...documentationDarkAccessibility, fonts},
});

export const patternsThemeLight = createTheme({
  name: 'docs-patterns-light',
  baseTheme: docsThemeLight,
  overrides: {...documentationLightPatterns, fonts},
});

export const patternsThemeDark = createTheme({
  name: 'docs-patterns-dark',
  baseTheme: docsThemeDark,
  overrides: {...documentationDarkPatterns, fonts},
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
