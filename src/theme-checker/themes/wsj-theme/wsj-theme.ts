import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';

export const wsjOverrides = {
  typographyPresets,
  fonts,
  overlays,
  colors,
  shadows,
  borders,
};

export const wsjTheme = createTheme({
  name: 'wsj-theme',
  baseTheme: newskitLightTheme,
  overrides: wsjOverrides,
});
