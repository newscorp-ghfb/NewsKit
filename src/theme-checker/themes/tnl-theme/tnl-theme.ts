import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import {createTheme} from '../../../theme';

export const tnlOverrides = {
  typographyPresets,
  fonts,
  overlays,
  colors,
  shadows,
  borders,
};

export const tnlTheme = createTheme({
  name: 'tnl-theme',
  overrides: tnlOverrides,
});
