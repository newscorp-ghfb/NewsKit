import {createTheme, newskitLightTheme} from 'newskit';
import documentationLight from '@newskit-themes/newskit-website/Documentation-light.json';
import documentationLightAccessibility from '@newskit-themes/newskit-website/Documentation-light-accessibility.json';
import documentationLightFoundations from '@newskit-themes/newskit-website/Documentation-light-foundations.json';
import documentationLightPatterns from '@newskit-themes/newskit-website/Documentation-light-patterns.json';

import documentationDark from '@newskit-themes/newskit-website/Documentation-dark.json';
import documentationDarkAccessibility from '@newskit-themes/newskit-website/Documentation-dark-accessibility.json';
import documentationDarkFoundations from '@newskit-themes/newskit-website/Documentation-dark-foundations.json';
import documentationDarkPatterns from '@newskit-themes/newskit-website/Documentation-dark-patterns.json';

import documentationLightIllustrationBlue from '@newskit-themes/newskit-website/Documentation-light-IllustrationBlue.json';
import documentationLightIllustrationPurple from '@newskit-themes/newskit-website/Documentation-light-IllustrationPurple.json';
import documentationLightIllustrationTeal from '@newskit-themes/newskit-website/Documentation-light-IllustrationTeal.json';

import documentationDarkIllustrationBlue from '@newskit-themes/newskit-website/Documentation-dark-IllustrationBlue.json';
import documentationDarkIllustrationPurple from '@newskit-themes/newskit-website/Documentation-dark-IllustrationPurple.json';
import documentationDarkIllustrationTeal from '@newskit-themes/newskit-website/Documentation-dark-IllustrationTeal.json';

import {stylePresets} from './style-presets';
import {componentDefaults} from './component-defaults';

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

// We only need to add fontMetrics into the light theme - all other themes come from this

export const docsThemeLight = createTheme({
  name: 'docs-theme-light',
  baseTheme: newskitLightTheme, // TODO: Use newsKitTheme from Publisher eventually
  overrides: {
    ...documentationLight,
    ...documentationLightIllustrationBlue.colors,
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
    ...documentationDarkIllustrationBlue.colors,
    outlines: {
      safariOutlineStyleDefault: 'solid',
    },
  },
});

export const foundationsThemeLight = createTheme({
  name: 'docs-foundations-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightFoundations,
    ...documentationLightIllustrationPurple.colors,
  },
});

export const foundationsThemeDark = createTheme({
  name: 'docs-foundations-dark',
  baseTheme: docsThemeDark,
  overrides: {
    ...documentationDarkFoundations,
    ...documentationDarkIllustrationPurple.colors,
  },
});

export const accessibilityThemeLight = createTheme({
  name: 'docs-accessibility-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightAccessibility,
    ...documentationLightIllustrationBlue.colors,
  },
});

export const accessibilityThemeDark = createTheme({
  name: 'docs-accessibility-dark',
  baseTheme: docsThemeDark,
  overrides: {...documentationDarkAccessibility},
});

export const patternsThemeLight = createTheme({
  name: 'docs-patterns-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightPatterns,
    ...documentationLightIllustrationTeal.colors,
  },
});

export const patternsThemeDark = createTheme({
  name: 'docs-patterns-dark',
  baseTheme: docsThemeDark,
  overrides: {
    ...documentationDarkPatterns,
    ...documentationDarkIllustrationTeal.colors,
  },
});

// These are used on guide pages – initially were going to be another colour
// Now they are the same as the default theme

export const guidesThemeLight = createTheme({
  name: 'docs-guides-light',
  baseTheme: docsThemeLight,
});

export const guidesThemeDark = createTheme({
  name: 'docs-guides-dark',
  baseTheme: docsThemeDark,
});
