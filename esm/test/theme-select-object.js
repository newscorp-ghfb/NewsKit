var _a;
import { __assign } from "tslib";
import { newskitLightTheme, createTheme, newskitDarkTheme, } from '..';
import { tnlTheme } from '../theme-checker/themes/tnl-theme/tnl-theme';
import { virginTheme } from '../theme-checker/themes/virgin-theme/virgin-theme';
import { sunTheme } from '../theme-checker/themes/sun-theme/sun-theme';
import { storybookNewskitLightTheme } from '../theme-checker/themes/storybook-newskit-light/storybook-newskit-light-theme';
import { storybookNewskitDarkTheme } from '../theme-checker/themes/storybook-newskit-dark/storybook-newskit-dark-theme';
import { marketWatchTheme } from '../theme-checker/themes/market-watch-theme/market-watch-theme';
import { wsjTheme } from '../theme-checker/themes/wsj-theme/wsj-theme';
var STYLING_OVERRIDES = 'Styling overrides';
export var THEME_KEYS = {
    transparent: 'transparent',
    storybookLight: 'storybookOverridesLight',
    storybookDark: 'storybookOverridesDark',
    newskitLight: '#ffffff',
    newskitDark: '#2E2E2E',
    sun: '#eb1801',
    virgin: '#e10a0a',
    tnl: '#006699',
    marketWatch: '#367F2E',
    wsj: '#0274B6',
};
export var themeObject = (_a = {},
    _a[THEME_KEYS.transparent] = newskitLightTheme,
    _a[THEME_KEYS.storybookLight] = storybookNewskitLightTheme,
    _a[THEME_KEYS.storybookDark] = storybookNewskitDarkTheme,
    _a[THEME_KEYS.newskitLight] = newskitLightTheme,
    _a[THEME_KEYS.newskitDark] = newskitDarkTheme,
    _a[THEME_KEYS.sun] = sunTheme,
    _a[THEME_KEYS.virgin] = virginTheme,
    _a[THEME_KEYS.tnl] = tnlTheme,
    _a[THEME_KEYS.marketWatch] = marketWatchTheme,
    _a[THEME_KEYS.wsj] = wsjTheme,
    _a);
var isLightTheme = function (key) { return key === THEME_KEYS.newskitLight; };
var isDarkTheme = function (key) { return key === THEME_KEYS.newskitDark; };
var isTransparentTheme = function (key) { return key === THEME_KEYS.transparent; };
export var getThemeObject = function (key, scenarioName) {
    var isScenarioStylingOverrides = scenarioName === STYLING_OVERRIDES;
    if (!key) {
        var themeKey = localStorage.getItem('themeKey');
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
    }
    else {
        localStorage.setItem('themeKey', key);
    }
    if ((isLightTheme(key) || isTransparentTheme(key)) &&
        isScenarioStylingOverrides) {
        return themeObject[THEME_KEYS.storybookLight];
    }
    if (isDarkTheme(key) && isScenarioStylingOverrides) {
        return themeObject[THEME_KEYS.storybookDark];
    }
    return themeObject[key];
};
export var createCustomThemeWithBaseThemeSwitch = function (themeKey, customThemeArgs, scenarioName) {
    return createTheme(__assign(__assign({}, customThemeArgs), { baseTheme: getThemeObject(themeKey, scenarioName) }));
};
//# sourceMappingURL=theme-select-object.js.map