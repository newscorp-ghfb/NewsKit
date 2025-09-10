import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import { createTheme } from '../../../theme';
import { newskitLightTheme } from '../../..';
export var tnlOverrides = {
    typographyPresets: typographyPresets,
    fonts: fonts,
    overlays: overlays,
    colors: colors,
    shadows: shadows,
    borders: borders,
};
export var tnlTheme = createTheme({
    name: 'tnl-theme',
    baseTheme: newskitLightTheme,
    overrides: tnlOverrides,
});
//# sourceMappingURL=tnl-theme.js.map