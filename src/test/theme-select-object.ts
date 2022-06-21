import {newskitLightTheme, newskitDarkTheme} from '..';
import {tnlTheme} from '../theme-checker/themes/tnl-theme/tnl-theme';
import {virginTheme} from '../theme-checker/themes/virgin-theme/virgin-theme';
import {sunTheme} from '../theme-checker/themes/sun-theme/sun-theme';

export const themeObject = {
  '#ffffff': newskitLightTheme,
  '#2E2E2E': newskitDarkTheme,
  transparent: newskitLightTheme,
  sun: sunTheme,
  virgin: virginTheme,
  times: tnlTheme,
};
