"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomThemeWithBaseThemeSwitch = exports.getThemeObject = exports.themeObject = exports.THEME_KEYS = void 0;
var tslib_1 = require("tslib");
var __1 = require("..");
var tnl_theme_1 = require("../theme-checker/themes/tnl-theme/tnl-theme");
var virgin_theme_1 = require("../theme-checker/themes/virgin-theme/virgin-theme");
var sun_theme_1 = require("../theme-checker/themes/sun-theme/sun-theme");
var storybook_newskit_light_theme_1 = require("../theme-checker/themes/storybook-newskit-light/storybook-newskit-light-theme");
var storybook_newskit_dark_theme_1 = require("../theme-checker/themes/storybook-newskit-dark/storybook-newskit-dark-theme");
var market_watch_theme_1 = require("../theme-checker/themes/market-watch-theme/market-watch-theme");
var wsj_theme_1 = require("../theme-checker/themes/wsj-theme/wsj-theme");
var STYLING_OVERRIDES = 'Styling overrides';
exports.THEME_KEYS = {
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
exports.themeObject = (_a = {},
    _a[exports.THEME_KEYS.transparent] = __1.newskitLightTheme,
    _a[exports.THEME_KEYS.storybookLight] = storybook_newskit_light_theme_1.storybookNewskitLightTheme,
    _a[exports.THEME_KEYS.storybookDark] = storybook_newskit_dark_theme_1.storybookNewskitDarkTheme,
    _a[exports.THEME_KEYS.newskitLight] = __1.newskitLightTheme,
    _a[exports.THEME_KEYS.newskitDark] = __1.newskitDarkTheme,
    _a[exports.THEME_KEYS.sun] = sun_theme_1.sunTheme,
    _a[exports.THEME_KEYS.virgin] = virgin_theme_1.virginTheme,
    _a[exports.THEME_KEYS.tnl] = tnl_theme_1.tnlTheme,
    _a[exports.THEME_KEYS.marketWatch] = market_watch_theme_1.marketWatchTheme,
    _a[exports.THEME_KEYS.wsj] = wsj_theme_1.wsjTheme,
    _a);
var isLightTheme = function (key) { return key === exports.THEME_KEYS.newskitLight; };
var isDarkTheme = function (key) { return key === exports.THEME_KEYS.newskitDark; };
var isTransparentTheme = function (key) { return key === exports.THEME_KEYS.transparent; };
var getThemeObject = function (key, scenarioName) {
    var isScenarioStylingOverrides = scenarioName === STYLING_OVERRIDES;
    if (!key) {
        var themeKey = localStorage.getItem('themeKey');
        if (themeKey) {
            if (isScenarioStylingOverrides) {
                if (isLightTheme(themeKey)) {
                    return exports.themeObject[exports.THEME_KEYS.storybookLight];
                }
                if (isDarkTheme(themeKey)) {
                    return exports.themeObject[exports.THEME_KEYS.storybookDark];
                }
            }
            return exports.themeObject[themeKey];
        }
        return isScenarioStylingOverrides
            ? exports.themeObject[exports.THEME_KEYS.storybookLight]
            : exports.themeObject[exports.THEME_KEYS.transparent];
    }
    if (isTransparentTheme(key)) {
        localStorage.removeItem('themeKey');
    }
    else {
        localStorage.setItem('themeKey', key);
    }
    if ((isLightTheme(key) || isTransparentTheme(key)) &&
        isScenarioStylingOverrides) {
        return exports.themeObject[exports.THEME_KEYS.storybookLight];
    }
    if (isDarkTheme(key) && isScenarioStylingOverrides) {
        return exports.themeObject[exports.THEME_KEYS.storybookDark];
    }
    return exports.themeObject[key];
};
exports.getThemeObject = getThemeObject;
var createCustomThemeWithBaseThemeSwitch = function (themeKey, customThemeArgs, scenarioName) {
    return (0, __1.createTheme)(tslib_1.__assign(tslib_1.__assign({}, customThemeArgs), { baseTheme: (0, exports.getThemeObject)(themeKey, scenarioName) }));
};
exports.createCustomThemeWithBaseThemeSwitch = createCustomThemeWithBaseThemeSwitch;
//# sourceMappingURL=theme-select-object.js.map