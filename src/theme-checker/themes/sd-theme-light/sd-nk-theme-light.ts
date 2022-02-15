import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
// import theme from './theme.json';

// TODO ts complaining?

// TODO user can currently import the package without {} and use any name. 
// To hardcode the default name.

// @ts-ignore
import {NkThemes} from 'package-name'

export const sdThemeLight = {
  ...NkThemes["NK-Light"],
  themeVersion: 1,
};

export const sdNkThemeLight = createTheme({
  name: 'sd-theme-light',
  baseTheme: newskitLightTheme,
  overrides: sdThemeLight,
});
