import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';

// import theme from './theme.json';

// TODO ts complaining?

// TODO user can currently import the package without {} and use any name. 
// To hardcode the default name.

// @ts-ignore
import {NkThemes} from 'package-name'

export const sdThemeDark = {
  ...NkThemes["NK-Dark"],
  themeVersion: 1,
};

export const sdNkThemeDark = createTheme({
  name: 'sd-theme-dark',
  baseTheme: newskitLightTheme,
  overrides: sdThemeDark,
});
