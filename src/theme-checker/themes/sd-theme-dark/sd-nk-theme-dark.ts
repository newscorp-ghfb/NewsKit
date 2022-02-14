import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
import theme from './theme.json';

export const sdThemeDark = {
  ...theme,
  themeVersion: 1,
};

export const sdNkThemeDark = createTheme({
  name: 'sd-theme-dark',
  baseTheme: newskitLightTheme,
  overrides: sdThemeDark,
});
