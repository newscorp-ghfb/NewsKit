import colors from './colors.json';
import borders from './borders.json';
import fonts from './fonts.json';
import overlays from './overlays.json';
import shadows from './shadows.json';
import typographyPresets from './typography-presets.json';
import { createTheme, newskitLightTheme } from '../../../theme';
export var virginOverrides = {
    typographyPresets: typographyPresets,
    fonts: fonts,
    overlays: overlays,
    colors: colors,
    shadows: shadows,
    borders: borders,
};
export var virginTheme = createTheme({
    name: 'virgin-theme',
    baseTheme: newskitLightTheme,
    overrides: virginOverrides,
});
//# sourceMappingURL=virgin-theme.js.map