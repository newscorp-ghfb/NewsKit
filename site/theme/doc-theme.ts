import {createTheme} from 'newskit';
import colorsLight from './colors-light.json';
import colorsDark from './colors-dark.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import typographyPresets from './typography-presets.json';
import borders from './borders.json';
import {stylePresets} from './style-presets';
import {componentDefaults} from './component-defaults';

export const [lightOverrides, darkOverrides] = [colorsLight, colorsDark].map(
  colors => ({
    colors,
    stylePresets,
    typographyPresets,
    componentDefaults,
    fonts,
    overlays,
    borders,
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
