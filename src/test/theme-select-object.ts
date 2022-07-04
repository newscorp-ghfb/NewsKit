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
import {useStorybookContext} from './storybook-comps';

export const themeObject: {[key: string]: UncompiledTheme} = {
  transparent: newskitLightTheme,
  '#ffffff': newskitLightTheme,
  '#2E2E2E': newskitDarkTheme,
  '#eb1801': sunTheme,
  '#e10a0a': virginTheme,
  '#006699': tnlTheme,
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
  customThemeArgs: CreateThemeArgs,
): UncompiledTheme => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const key = useStorybookContext();
  return createTheme({
    ...customThemeArgs,
    baseTheme: getThemeObject(key),
  });
};
