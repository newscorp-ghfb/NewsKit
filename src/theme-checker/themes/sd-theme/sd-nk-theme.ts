import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
import theme from './theme.json';

export const sdTheme = {
  ...theme,
  themeVersion: 1,
};

export const sdNkTheme = createTheme({
  name: 'sd-marco-theme',
  baseTheme: newskitLightTheme,
  overrides: sdTheme,
});
