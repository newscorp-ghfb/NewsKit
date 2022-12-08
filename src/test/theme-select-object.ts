import {
  newskitLightTheme,
  UncompiledTheme,
  createTheme,
  CreateThemeArgs,
} from '..';
import {tnlTheme} from '../theme-checker/themes/tnl-theme/tnl-theme';
import {virginTheme} from '../theme-checker/themes/virgin-theme/virgin-theme';
import {sunTheme} from '../theme-checker/themes/sun-theme/sun-theme';
import {storybookNewskitLightTheme} from '../theme-checker/themes/storybook-newskit-light/storybook-newskit-light-theme';
import {nkDarkThemeFromPublisher} from '../theme-checker/themes/storybook-newskit-dark/storybook-newskit-dark-theme';

const STYLING_OVERRIDES = 'Styling overrides';
const THEME_KEYS = {
  transparent: 'transparent',
  storybookLight: 'storybookOverridesLight',
  storybookDark: 'storybookOverridesDark',
  newskitLight: '#ffffff',
  newskitDark: '#2E2E2E',
  sun: '#eb1801',
  virgin: '#e10a0a',
  tnl: '#006699',
};

export const themeObject = {
  [THEME_KEYS.transparent]: newskitLightTheme,
  [THEME_KEYS.storybookLight]: storybookNewskitLightTheme,
  [THEME_KEYS.storybookDark]: nkDarkThemeFromPublisher,
  [THEME_KEYS.newskitLight]: newskitLightTheme,
  [THEME_KEYS.newskitDark]: nkDarkThemeFromPublisher,
  [THEME_KEYS.sun]: sunTheme,
  [THEME_KEYS.virgin]: virginTheme,
  [THEME_KEYS.tnl]: tnlTheme,
};

const isLightTheme = (key: string) => key === THEME_KEYS.newskitLight;
const isDarkTheme = (key: string) => key === THEME_KEYS.newskitDark;
const isTransparentTheme = (key: string) => key === THEME_KEYS.transparent;

export const getThemeObject = (
  key: string,
  scenarioName?: string,
): UncompiledTheme => {
  const isScenarioStylingOverrides = scenarioName === STYLING_OVERRIDES;

  if (!key) {
    const themeKey = localStorage.getItem('themeKey');
    if (themeKey) {
      if (isScenarioStylingOverrides) {
        if (isLightTheme(themeKey)) {
          return themeObject[THEME_KEYS.storybookLight];
        }
        if (isDarkTheme(themeKey)) {
          return themeObject[THEME_KEYS.storybookDark];
        }
      }
      return themeObject[themeKey];
    }

    return isScenarioStylingOverrides
      ? themeObject[THEME_KEYS.storybookLight]
      : themeObject[THEME_KEYS.transparent];
  }

  if (isTransparentTheme(key)) {
    localStorage.removeItem('themeKey');
  } else {
    localStorage.setItem('themeKey', key);
  }

  if (
    (isLightTheme(key) || isTransparentTheme(key)) &&
    isScenarioStylingOverrides
  ) {
    return themeObject[THEME_KEYS.storybookLight];
  }
  if (isDarkTheme(key) && isScenarioStylingOverrides) {
    return themeObject[THEME_KEYS.storybookDark];
  }

  return themeObject[key];
};

export const createCustomThemeWithBaseThemeSwitch = (
  themeKey: string,
  customThemeArgs: CreateThemeArgs,
  scenarioName?: string,
): UncompiledTheme =>
  createTheme({
    ...customThemeArgs,
    baseTheme: getThemeObject(themeKey, scenarioName),
  });
