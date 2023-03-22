import {
  newskitLightTheme,
  UncompiledTheme,
  createTheme,
  CreateThemeArgs,
  newskitDarkTheme,
} from '..';
import {
  tnlTheme,
  tnlDarkTheme,
  tnlSubThemes,
} from '../theme-checker/themes/tnl-theme/tnl-theme';
import {storybookNewskitLightTheme} from '../theme-checker/themes/storybook-newskit-light/storybook-newskit-light-theme';
import {storybookNewskitDarkTheme} from '../theme-checker/themes/storybook-newskit-dark/storybook-newskit-dark-theme';

const STYLING_OVERRIDES = 'Styling overrides';
const THEME_KEYS = {
  transparent: 'transparent',
  storybookLight: 'storybookOverridesLight',
  storybookDark: 'storybookOverridesDark',
  newskitLight: '#ffffff',
  newskitDark: '#2E2E2E',
  tnl: '#006699',
  tnlDark: '#006691',
  // @ts-ignore
  ...Object.keys(tnlSubThemes).reduce(
    (prev, curr) => ({[curr]: curr, ...prev}),
    {},
  ),
};

// console.log(tnlSubThemes);
// console.log(Object.keys(tnlSubThemes).map(key => ({name: key, value: key})));

export const themeObject = {
  [THEME_KEYS.transparent]: newskitLightTheme,
  [THEME_KEYS.storybookLight]: storybookNewskitLightTheme,
  [THEME_KEYS.storybookDark]: storybookNewskitDarkTheme,
  [THEME_KEYS.newskitLight]: newskitLightTheme,
  [THEME_KEYS.newskitDark]: newskitDarkTheme,
  [THEME_KEYS.tnl]: tnlTheme,
  [THEME_KEYS.tnlDark]: tnlDarkTheme,
  ...tnlSubThemes,
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
