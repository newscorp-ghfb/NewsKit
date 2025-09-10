import { __rest } from "tslib";
import { deepMerge } from '../deep-merge';
import { recurseUnknown } from '../recurse-unknown';
import { errorLogger } from './error-logger';
export var endsWith = function (value, checks) {
    return checks.some(function (c) { return value.endsWith(c); });
};
var sectionsWithThemeValuesOnly = ['typographyPresets', 'stylePresets'];
export var isNonThemeValueAllowed = function (themeKey) {
    return !sectionsWithThemeValuesOnly.includes(themeKey);
};
export var CSSUnits = [
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
export var CSSColorNames = [
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
export var isCSSFunc = function (value) {
    return value.includes('(') && value.includes(')');
};
export var isHexColor = function (value) { return value.startsWith('#'); };
export var isValidColorName = function (value) {
    return CSSColorNames.some(function (color) { return color.toLowerCase() === value.toLowerCase(); });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var isValidUnit = function (themeKey, value) {
    if (['auto', 'revert', 'unset', 'initial', 'inherit'].includes(value)) {
        return value;
    }
    if (['sizing', 'spacePresets', 'borders'].includes(themeKey) &&
        typeof value === 'string') {
        return endsWith(value, CSSUnits) || isCSSFunc(value);
    }
    if (themeKey === 'colors') {
        return isHexColor(value) || isCSSFunc(value) || isValidColorName(value);
    }
    return (typeof value !== 'undefined' &&
        typeof value !== 'object' &&
        !Number.isNaN(value) &&
        !Array.isArray(value));
};
export var isArrayLikeObject = function (value) {
    return typeof value === 'object' && '0' in value;
};
var unifyToken = function (token) {
    if (typeof token === 'string') {
        return { extend: token, overrides: {} };
    }
    var extend = token.extend, overrides = __rest(token, ["extend"]);
    return {
        extend: extend,
        overrides: overrides,
    };
};
export var unifyTransition = function (theme, transitionToken) {
    var _a = unifyToken(transitionToken), tokenName = _a.extend, overrides = _a.overrides;
    var baseTransitionPreset = theme.transitionPresets[tokenName];
    if (!baseTransitionPreset)
        return undefined;
    var compiledThemeResults = recurseUnknown(theme, overrides, errorLogger);
    var compiledResults = Object.keys(compiledThemeResults).length
        ? deepMerge({}, baseTransitionPreset, compiledThemeResults)
        : baseTransitionPreset;
    return compiledResults;
};
//# sourceMappingURL=utils.js.map