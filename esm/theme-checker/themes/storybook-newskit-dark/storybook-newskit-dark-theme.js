import colors from './colors.json';
import { createTheme } from '../../../theme';
import { newskitDarkTheme } from '../../..';
export var storybookNewskitDarkTheme = createTheme({
    name: 'storybook-newskit-dark',
    baseTheme: newskitDarkTheme,
    overrides: { colors: colors },
});
//# sourceMappingURL=storybook-newskit-dark-theme.js.map