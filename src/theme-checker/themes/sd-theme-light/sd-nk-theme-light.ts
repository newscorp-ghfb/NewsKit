import {NkDocThemes} from 'package-name';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';
// import theme from './theme.json';

// TODO ts complaining?

// TODO user can currently import the package without {} and use any name.
// To hardcode the default name.

// @ts-ignore

export const sdThemeLight = {
  ...NkDocThemes['NK-Light'],
  themeVersion: 1,
};

export const sdNkThemeLight = createTheme({
  name: 'sd-theme-light',
  baseTheme: newskitLightTheme,
  overrides: sdThemeLight,
});
