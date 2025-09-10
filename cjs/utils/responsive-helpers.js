"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isResponsive = exports.getMediaQueryFromTheme = exports.getMediaQueries = exports.getMediaQuery = void 0;
var has_own_property_1 = require("./has-own-property");
/**
 * Helper function that generates media queries based on given parameters
 *
 * E.g.
 * getMediaQuery({'max-width': '1280px', 'min-height': '720px'}, 'and') =>
 *   '@media screen and (max-width: 1280px) and (min-height: 720px)'
 */
var getMediaQuery = function (options, booleanOperator) {
    if (booleanOperator === void 0) { booleanOperator = 'OR'; }
    var mediaFeatureSeparator = booleanOperator === 'OR' ? ', ' : ' and ';
    var mediaFeatures = Object.keys(options).map(function (key) { return "(".concat(key, ": ").concat(options[key], ")"); });
    return "@media screen and ".concat(mediaFeatures.join(mediaFeatureSeparator));
};
exports.getMediaQuery = getMediaQuery;
var getMediaQueries = function (breakpoints) {
    return Object.keys(breakpoints)
        .sort(function (a, b) { return breakpoints[a] - breakpoints[b]; })
        .map(function (size) { return (0, exports.getMediaQuery)({ 'min-width': "".concat(breakpoints[size], "px") }); });
};
exports.getMediaQueries = getMediaQueries;
var getMediaQueryFromTheme = function (minWidth, maxWidth) { return function (_a) {
    var theme = _a.theme;
    var queries = ['@media screen'];
    if (minWidth && theme.breakpoints[minWidth]) {
        queries.push(" and (min-width: ".concat(theme.breakpoints[minWidth], "px)"));
    }
    if (maxWidth) {
        queries.push(" and (max-width: ".concat(theme.breakpoints[maxWidth] - 1, "px)"));
    }
    return queries.join('');
}; };
exports.getMediaQueryFromTheme = getMediaQueryFromTheme;
var isResponsive = function (prop, breakpoints) {
    return !!prop &&
        typeof prop === 'object' &&
        Object.keys(breakpoints).some(function (bp) { return prop && (0, has_own_property_1.hasOwnProperty)(prop, bp); });
};
exports.isResponsive = isResponsive;
//# sourceMappingURL=responsive-helpers.js.map