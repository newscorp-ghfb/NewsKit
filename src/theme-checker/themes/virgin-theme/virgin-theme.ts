import colors from './colors.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import {createTheme, newskitLightTheme} from '../../../theme';

export const virginOverrides = {
  typographyPresets,
  fonts,
  overlays,
  colors,
  shadows,
};

export const virginTheme = createTheme({
  name: 'virgin-theme',
  baseTheme: newskitLightTheme,
  overrides: virginOverrides,
});
