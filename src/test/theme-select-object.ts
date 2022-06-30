import {newskitLightTheme, newskitDarkTheme, UncompiledTheme} from '..';
import {tnlTheme} from '../theme-checker/themes/tnl-theme/tnl-theme';
import {virginTheme} from '../theme-checker/themes/virgin-theme/virgin-theme';
import {sunTheme} from '../theme-checker/themes/sun-theme/sun-theme';

export const themeObject: {[key: string]: UncompiledTheme} = {
  transparent: newskitLightTheme,
  '#ffffff': newskitLightTheme,
  '#2E2E2E': newskitDarkTheme,
  '#eb1801': sunTheme,
  '#e10a0a': virginTheme,
  '#006699': tnlTheme,
};

export const getThemeObject = (value: string): UncompiledTheme => {
  if (!value) {
    const themeKey = localStorage.getItem('themeKey');
    if (themeKey) {
      return themeObject[themeKey];
    }
    return themeObject.transparent;
  }
  if (value === 'transparent') {
    localStorage.removeItem('themeKey');
  } else {
    localStorage.setItem('themeKey', value);
  }
  return themeObject[value];
};
