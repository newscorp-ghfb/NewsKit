import {
  newskitLightTheme,
  newskitDarkTheme,
  UncompiledTheme,
  createTheme,
  CreateThemeArgs,
} from '..';
import {tnlTheme} from '../theme-checker/themes/tnl-theme/tnl-theme';
import {virginTheme} from '../theme-checker/themes/virgin-theme/virgin-theme';
import {sunTheme} from '../theme-checker/themes/sun-theme/sun-theme';
import {marketWatchTheme} from '../theme-checker/themes/market-watch-theme/market-watch-theme';
import {wsjTheme} from '../theme-checker/themes/wsj-theme/wsj-theme';

export const themeObject: {[key: string]: UncompiledTheme} = {
  transparent: newskitLightTheme,
  '#ffffff': newskitLightTheme,
  '#2E2E2E': newskitDarkTheme,
  '#eb1801': sunTheme,
  '#e10a0a': virginTheme,
  '#006699': tnlTheme,
  '#367F2E': marketWatchTheme,
  '#0274B6': wsjTheme,
};

export const getThemeObject = (key: string): UncompiledTheme => {
  if (!key) {
    const themeKey = localStorage.getItem('themeKey');
    if (themeKey) {
      return themeObject[themeKey];
    }
    return themeObject.transparent;
  }
  if (key === 'transparent') {
    localStorage.removeItem('themeKey');
  } else {
    localStorage.setItem('themeKey', key);
  }
  return themeObject[key];
};

export const createCustomThemeWithBaseThemeSwitch = (
  key: string,
  customThemeArgs: CreateThemeArgs,
): UncompiledTheme =>
  createTheme({
    ...customThemeArgs,
    baseTheme: getThemeObject(key),
  });
