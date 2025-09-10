"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unifyTransition = exports.isArrayLikeObject = exports.isValidUnit = exports.isValidColorName = exports.isHexColor = exports.isCSSFunc = exports.CSSColorNames = exports.CSSUnits = exports.isNonThemeValueAllowed = exports.endsWith = void 0;
var tslib_1 = require("tslib");
var deep_merge_1 = require("../deep-merge");
var recurse_unknown_1 = require("../recurse-unknown");
var error_logger_1 = require("./error-logger");
var endsWith = function (value, checks) {
    return checks.some(function (c) { return value.endsWith(c); });
};
exports.endsWith = endsWith;
var sectionsWithThemeValuesOnly = ['typographyPresets', 'stylePresets'];
var isNonThemeValueAllowed = function (themeKey) {
    return !sectionsWithThemeValuesOnly.includes(themeKey);
};
exports.isNonThemeValueAllowed = isNonThemeValueAllowed;
exports.CSSUnits = [
    'cm',
    'mm',
    'in',
    'px',
    'pt',
    'pc',
    'em',
    'ex',
    'ch',
    'rem',
    'vw',
    'vh',
    'vmin',
    'vmax',
    '%',
];
exports.CSSColorNames = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed ',
    'Indigo  ',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
];
// check for CSS functions like: rgb(0,0,0), calc(), min(), var() etc
// full list of funcitons https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions
var isCSSFunc = function (value) {
    return value.includes('(') && value.includes(')');
};
exports.isCSSFunc = isCSSFunc;
var isHexColor = function (value) { return value.startsWith('#'); };
exports.isHexColor = isHexColor;
var isValidColorName = function (value) {
    return exports.CSSColorNames.some(function (color) { return color.toLowerCase() === value.toLowerCase(); });
};
exports.isValidColorName = isValidColorName;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var isValidUnit = function (themeKey, value) {
    if (['auto', 'revert', 'unset', 'initial', 'inherit'].includes(value)) {
        return value;
    }
    if (['sizing', 'spacePresets', 'borders'].includes(themeKey) &&
        typeof value === 'string') {
        return (0, exports.endsWith)(value, exports.CSSUnits) || (0, exports.isCSSFunc)(value);
    }
    if (themeKey === 'colors') {
        return (0, exports.isHexColor)(value) || (0, exports.isCSSFunc)(value) || (0, exports.isValidColorName)(value);
    }
    return (typeof value !== 'undefined' &&
        typeof value !== 'object' &&
        !Number.isNaN(value) &&
        !Array.isArray(value));
};
exports.isValidUnit = isValidUnit;
var isArrayLikeObject = function (value) {
    return typeof value === 'object' && '0' in value;
};
exports.isArrayLikeObject = isArrayLikeObject;
var unifyToken = function (token) {
    if (typeof token === 'string') {
        return { extend: token, overrides: {} };
    }
    var extend = token.extend, overrides = tslib_1.__rest(token, ["extend"]);
    return {
        extend: extend,
        overrides: overrides,
    };
};
var unifyTransition = function (theme, transitionToken) {
    var _a = unifyToken(transitionToken), tokenName = _a.extend, overrides = _a.overrides;
    var baseTransitionPreset = theme.transitionPresets[tokenName];
    if (!baseTransitionPreset)
        return undefined;
    var compiledThemeResults = (0, recurse_unknown_1.recurseUnknown)(theme, overrides, error_logger_1.errorLogger);
    var compiledResults = Object.keys(compiledThemeResults).length
        ? (0, deep_merge_1.deepMerge)({}, baseTransitionPreset, compiledThemeResults)
        : baseTransitionPreset;
    return compiledResults;
};
exports.unifyTransition = unifyTransition;
//# sourceMappingURL=utils.js.map