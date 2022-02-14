import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
import theme from './theme.json';

export const sdThemeLight = {
  ...theme,
  themeVersion: 1,
};

export const sdNkThemeLight = createTheme({
  name: 'sd-theme-light',
  baseTheme: newskitLightTheme,
  overrides: sdThemeLight,
});
