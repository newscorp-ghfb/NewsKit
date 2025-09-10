import colors from './colors.json';
import { createTheme } from '../../../theme';
import { newskitLightTheme } from '../../..';
export var storybookNewskitLightTheme = createTheme({
    name: 'storybook-newskit-light',
    baseTheme: newskitLightTheme,
    overrides: { colors: colors },
});
//# sourceMappingURL=storybook-newskit-light-theme.js.map