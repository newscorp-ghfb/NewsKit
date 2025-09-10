"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHorizontalRatio = exports.filterInteractiveStates = exports.isReverse = exports.isHorizontal = void 0;
var style_1 = require("../utils/style");
var isHorizontal = function (layout) {
    return layout && layout.includes('horizontal');
};
exports.isHorizontal = isHorizontal;
var isReverse = function (layout) {
    return Boolean(layout && layout.includes('reverse'));
};
exports.isReverse = isReverse;
var filterInteractiveStates = function (path, hasHref) {
    return (0, style_1.getStylePreset)("card".concat(path ? ".".concat(path) : ''), path, hasHref ? {} : { omitStates: ['hover', 'active'] });
};
exports.filterInteractiveStates = filterInteractiveStates;
// We are checking if we have invalid ratio passed. Invalid would be anything that is not integer:integer
var validateRatios = function (ratios) {
    return ratios
        .split(':', 2)
        .some(function (ratio) { return !Number.isNaN(parseInt(ratio, 10)); });
};
var getHorizontalRatio = function (layout, cardDefaults, overrides) {
    // We are checking if horizontalRatio override is none, and if it is, we don't apply the flex property
    if ((0, exports.isHorizontal)(layout) && overrides.horizontalRatio !== 'none') {
        var horizontalRatioDefault = cardDefaults.horizontalRatio;
        var ratio = overrides.horizontalRatio && validateRatios(overrides.horizontalRatio)
            ? overrides.horizontalRatio
            : horizontalRatioDefault;
        // In the event that the default horizontalRatio is not set or set to 'none', we don't apply the flex property.
        /* istanbul ignore else */
        if (ratio && ratio !== 'none') {
            var ratios = ratio.split(':', 2);
            return (0, exports.isReverse)(layout) ? ratios.reverse() : ratios;
        }
    }
    // If we don't want to apply the flex property, we return an array of empty strings.
    return ['', ''];
};
exports.getHorizontalRatio = getHorizontalRatio;
//# sourceMappingURL=utils.js.map