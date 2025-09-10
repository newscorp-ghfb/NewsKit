import { __assign } from "tslib";
import { deepMerge } from '../utils/deep-merge';
import * as foundations from './foundations';
import * as presets from './presets';
import { get } from '../utils/get';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
var deepDuplicationChecker = function (warningLogger, baseTheme, overrides) {
    var recurse = function (obj, keys) {
        Object.entries(obj).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var newKey = keys ? [keys, key].join('.') : key;
            if (typeof value === 'object') {
                recurse(value, newKey);
            }
            else if (get(baseTheme, newKey) === value) {
                warningLogger("Override at path: '".concat(newKey, "' has the same value as base theme: '").concat(value, "'."));
            }
        });
    };
    recurse(overrides);
};
var isFontFamily = function (fontThemeValue) {
    return fontThemeValue.fontFamily !== undefined;
};
// Font family info should not be merged. E.g.:
// - Base theme: { ...fontFamily010: {fontFamily: "Font A", fontMetrics: {...fontAMetrics} }
// - Overrides: { ...fontFamily010: {fontFamily: "Font B"} }
// In this example, we should remove fontFamily010 from the base theme, otherwise
// the merged object will be invalid:
// - { ...fontFamily010: {fontFamily: "Font B", fontMetrics: {...fontAMetrics} }
// This function removes font families from a theme if they are defined in an
// overrides object (which can be another theme). It should be called before merging
// the theme with the overrides.
var removeFontFamilies = function (theme, overrideFonts) { return (__assign(__assign({}, theme), { fonts: theme.fonts
        ? Object.entries(theme.fonts).reduce(function (prev, _a) {
            var _b;
            var fontThemeToken = _a[0], fontThemeValue = _a[1];
            return (__assign(__assign({}, prev), (isFontFamily(fontThemeValue) && overrideFonts[fontThemeToken]
                ? {}
                : (_b = {}, _b[fontThemeToken] = fontThemeValue, _b))));
        }, {})
        : undefined })); };
export var createTheme = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'unnamed-newskit-theme' : _b, baseTheme = _a.baseTheme, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, checkOverrides = _a.checkOverrides, 
    // eslint-disable-next-line no-console
    _d = _a.warningLogger, 
    // eslint-disable-next-line no-console
    warningLogger = _d === void 0 ? console.warn.bind(console) : _d;
    if (baseTheme && baseTheme.compiled) {
        throw new Error('createTheme received a compiled baseTheme. Base themes must be uncompiled.');
    }
    // Don't take font family info from NKLight if defined in the base theme.
    var newskitLight = removeFontFamilies(__assign(__assign(__assign({}, foundations), presets), { componentDefaults: {}, icons: {} }), (baseTheme === null || baseTheme === void 0 ? void 0 : baseTheme.fonts) || {});
    if (checkOverrides) {
        deepDuplicationChecker(warningLogger, baseTheme || newskitLight, overrides);
    }
    /* istanbul ignore next */
    var breakpointsKeys = ((overrides === null || overrides === void 0 ? void 0 : overrides.breakpoints)
        ? /* istanbul ignore next */
            overrides === null || overrides === void 0 ? void 0 : overrides.breakpoints
        : newskitLight.breakpoints);
    return deepMerge(mergeBreakpointObject(Object.keys(breakpointsKeys)), newskitLight, 
    // Don't take font family info from the base theme if defined in overrides.
    baseTheme
        ? removeFontFamilies(baseTheme, 
        /* istanbul ignore next */
        (overrides === null || overrides === void 0 ? void 0 : overrides.fonts) || {})
        : baseTheme, overrides, { name: name, themeVersion: 1 });
};
//# sourceMappingURL=creator.js.map