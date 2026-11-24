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

// How we get font metrics in.
// If we had different fonts in different themes, this implementation would look different
// Docs site uses the same fonts for each theme - so we just use the same from Light theme as the 'default'
const {fonts} = documentationLight;

//This will be exported by default through the publisher,
// added in as an example for spike purposes
Object.assign(documentationLight, {
  fontFaces: {
    'Poppins-Bold': {
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    'Poppins-Medium': {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    'DM Sans-Regular': {
      fontFamily: 'DM Sans',
      fontWeight: 400,
    },
    'Poppins-Italic': {
      fontFamily: 'Poppins',
      fontWeight: 'italic',
    },
    'DM Sans-Medium': {
      fontFamily: 'DM Sans',
      fontWeight: 500,
    },
    'Poppins-SemiBold': {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    'DM Mono-Regular': {
      fontFamily: 'DM Mono',
      fontWeight: 400,
    },
  },
});

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
      safariOutlineStyleDefault: 'solid',
    },
  },
});

export const foundationsThemeLight = createTheme({
  name: 'docs-foundations-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightFoundations,
    fonts,
  },
});

export const foundationsThemeDark = createTheme({
  name: 'docs-foundations-dark',
  baseTheme: docsThemeDark,
  overrides: {
    ...documentationDarkFoundations,
    fonts,
  },
});

export const accessibilityThemeLight = createTheme({
  name: 'docs-accessibility-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightAccessibility,
    fonts,
  },
});

export const accessibilityThemeDark = createTheme({
  name: 'docs-accessibility-dark',
  baseTheme: docsThemeDark,
  overrides: {...documentationDarkAccessibility, fonts},
});

export const patternsThemeLight = createTheme({
  name: 'docs-patterns-light',
  baseTheme: docsThemeLight,
  overrides: {
    ...documentationLightPatterns,
    fonts,
  },
});

export const patternsThemeDark = createTheme({
  name: 'docs-patterns-dark',
  baseTheme: docsThemeDark,
  overrides: {
    ...documentationDarkPatterns,
    fonts,
  },
});

// These are all the fonts we currently use in the docs site
export const fontPaths = {
  'DM Sans': `url('static/fonts/dmsans-regular-webfont.woff2') format('woff2'),
   url('static/fonts/dmsans-regular-webfont.woff') format('woff')`,
  'DM Sans-Italic': `url('static/fonts/dmsans-italic-webfont.woff2')
  format('woff2'),
url('static/fonts/dmsans-italic-webfont.woff') format('woff');`,
  'DM Sans-Medium': `url('static/fonts/dmsans-medium-webfont.woff2')
  format('woff2'),
url('static/fonts/dmsans-medium-webfont.woff') format('woff');`,
  'DM Sans-MediumItalic': `url('static/fonts/dmsans-mediumitalic-webfont.woff2')
  format('woff2'),
url('static/fonts/dmsans-mediumitalic-webfont.woff')
  format('woff');`,
  'DM Sans-Bold': `url('static/fonts/dmsans-bold-webfont.woff2')
  format('woff2'),
url('static/fonts/dmsans-bold-webfont.woff') format('woff');`,
  'DM Sans-BoldItalic': `url('static/fonts/dmsans-bolditalic-webfont.woff2')
  format('woff2'),
url('static/fonts/dmsans-bolditalic-webfont.woff')
  format('woff');`,
  'Poppins-Bold': `url('static/fonts/poppins-bold-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-bold-webfont.woff') format('woff');`,
  'Poppins-BoldItalic': `url('static/fonts/poppins-bolditalic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-bolditalic-webfont.woff')
  format('woff');`,
  'Poppins-ExtraBold': `url('static/fonts/poppins-extrabold-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-extrabold-webfont.woff')
  format('woff');`,
  'Poppins-ExtraBoldItalic': `url('static/fonts/poppins-extrabolditalic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-extrabolditalic-webfont.woff')
  format('woff');`,
  'Poppins-italic': `url('static/fonts/poppins-italic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-italic-webfont.woff') format('woff');`,
  'Poppins-Light': `url('static/fonts/poppins-light-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-light-webfont.woff') format('woff');`,
  'Poppins-LightItalic': `url('static/fonts/poppins-lightitalic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-lightitalic-webfont.woff')
  format('woff');`,
  'Poppins-Medium': `url('static/fonts/poppins-medium-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-medium-webfont.woff') format('woff');`,
  'Poppins-MediumItalic': `url('static/fonts/poppins-mediumitalic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-mediumitalic-webfont.woff')
  format('woff');`,
  'Poppins-Regular': `url('static/fonts/poppins-regular-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-regular-webfont.woff')
  format('woff');`,
  'Poppins-SemiBold': `url('static/fonts/poppins-semibold-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-semibold-webfont.woff')
  format('woff');`,
  'Poppins-SemiBoldItalic': `url('static/fonts/poppins-semibolditalic-webfont.woff2')
  format('woff2'),
url('static/fonts/poppins-semibolditalic-webfont.woff')
  format('woff');`,
  'DM Mono': `url('static/fonts/dmmono-medium.woff2') format('woff2'),
url('static/fonts/dmmono-medium.woff') format('woff');,
`,
};
