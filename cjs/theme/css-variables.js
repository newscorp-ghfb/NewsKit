"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssVariablesContainer = exports.generateCSSVars = exports.themeDiff = void 0;
var tslib_1 = require("tslib");
var react_1 = require("@emotion/react");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var has_own_property_1 = require("../utils/has-own-property");
var foundationsList = [
    'borders',
    'colors',
    'overlays',
    'motions',
    'shadows',
    'sizing',
    'spacePresets',
    'fonts',
];
var hasSameValue = function (tokenName, tokenValueA, tokenValueB) {
    if (tokenName.startsWith('fontFamily') &&
        typeof tokenValueA === 'object' &&
        typeof tokenValueB === 'object') {
        return tokenValueA.fontFamily === tokenValueB.fontFamily;
    }
    return tokenValueA === tokenValueB;
};
var themeDiff = function (parentTheme, childTheme) {
    var diff = {};
    foundationsList.forEach(function (foundationKey) {
        var parentFoundation = parentTheme[foundationKey] || {};
        var childFoundation = childTheme[foundationKey] || {};
        Object.entries(childFoundation).forEach(function (_a) {
            var tokenName = _a[0], tokenValue = _a[1];
            if (foundationKey &&
                tokenName &&
                (!parentFoundation[tokenName] || // does not exist in parent theme, so is new token
                    !hasSameValue(tokenName, parentFoundation[tokenName], tokenValue)) // token value are different
            ) {
                if (!(0, has_own_property_1.hasOwnProperty)(diff, foundationKey)) {
                    diff[foundationKey] = {};
                }
                // @ts-ignore
                diff[foundationKey][tokenName] = tokenValue;
            }
        });
    });
    return diff;
};
exports.themeDiff = themeDiff;
var generateCSSVars = function (theme) {
    var cssValue = foundationsList
        .map(function (themeKey) {
        var tokensObject = theme[themeKey];
        /* istanbul ignore if */
        if (typeof tokensObject !== 'object') {
            return '';
        }
        var tokensNames = Object.keys(tokensObject);
        var prefix = themeKey === 'colors' ? 'color-' : '';
        return tokensNames
            .map(function (tokenName) {
            if (tokenName.startsWith('fontFamily') &&
                typeof tokensObject[tokenName] === 'object' &&
                tokensObject[tokenName].fontFamily) {
                return "--".concat(prefix).concat(tokenName, ": ").concat(tokensObject[tokenName].fontFamily, ";");
            }
            return "--".concat(prefix).concat(tokenName, ": ").concat(tokensObject[tokenName], ";");
        })
            .join('');
    })
        .join('');
    return (0, react_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    ", "\n  "], ["\n    ", "\n  "])), cssValue);
};
exports.generateCSSVars = generateCSSVars;
exports.CssVariablesContainer = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var diff = _a.diff;
    return (0, exports.generateCSSVars)(diff);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=css-variables.js.map