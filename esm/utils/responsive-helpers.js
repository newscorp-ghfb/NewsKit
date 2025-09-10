import { hasOwnProperty } from './has-own-property';
/**
 * Helper function that generates media queries based on given parameters
 *
 * E.g.
 * getMediaQuery({'max-width': '1280px', 'min-height': '720px'}, 'and') =>
 *   '@media screen and (max-width: 1280px) and (min-height: 720px)'
 */
export var getMediaQuery = function (options, booleanOperator) {
    if (booleanOperator === void 0) { booleanOperator = 'OR'; }
    var mediaFeatureSeparator = booleanOperator === 'OR' ? ', ' : ' and ';
    var mediaFeatures = Object.keys(options).map(function (key) { return "(".concat(key, ": ").concat(options[key], ")"); });
    return "@media screen and ".concat(mediaFeatures.join(mediaFeatureSeparator));
};
export var getMediaQueries = function (breakpoints) {
    return Object.keys(breakpoints)
        .sort(function (a, b) { return breakpoints[a] - breakpoints[b]; })
        .map(function (size) { return getMediaQuery({ 'min-width': "".concat(breakpoints[size], "px") }); });
};
export var getMediaQueryFromTheme = function (minWidth, maxWidth) { return function (_a) {
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
export var isResponsive = function (prop, breakpoints) {
    return !!prop &&
        typeof prop === 'object' &&
        Object.keys(breakpoints).some(function (bp) { return prop && hasOwnProperty(prop, bp); });
};
//# sourceMappingURL=responsive-helpers.js.map