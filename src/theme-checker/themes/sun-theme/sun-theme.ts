import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';

export const sunOverrides = {
  typographyPresets,
  fonts,
  overlays,
  colors,
  shadows,
  borders,
};

export const sunTheme = createTheme({
  name: 'sun-theme',
  baseTheme: newskitLightTheme,
  overrides: sunOverrides,
});
