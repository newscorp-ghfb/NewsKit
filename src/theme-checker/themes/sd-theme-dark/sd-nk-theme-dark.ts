import {NkDocThemes} from 'package-name';
import {createTheme} from '../../../theme';
import {newskitLightTheme} from '../../..';

// import theme from './theme.json';

// TODO ts complaining?

// TODO user can currently import the package without {} and use any name.
// To hardcode the default name.

// @ts-ignore

export const sdThemeDark = {
  ...NkDocThemes['NK-Dark'],
  themeVersion: 1,
};

export const sdNkThemeDark = createTheme({
  name: 'sd-theme-dark',
  baseTheme: newskitLightTheme,
  overrides: sdThemeDark,
});
