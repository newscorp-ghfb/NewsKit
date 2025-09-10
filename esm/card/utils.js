import { getStylePreset } from '../utils/style';
export var isHorizontal = function (layout) {
    return layout && layout.includes('horizontal');
};
export var isReverse = function (layout) {
    return Boolean(layout && layout.includes('reverse'));
};
export var filterInteractiveStates = function (path, hasHref) {
    return getStylePreset("card".concat(path ? ".".concat(path) : ''), path, hasHref ? {} : { omitStates: ['hover', 'active'] });
};
// We are checking if we have invalid ratio passed. Invalid would be anything that is not integer:integer
var validateRatios = function (ratios) {
    return ratios
        .split(':', 2)
        .some(function (ratio) { return !Number.isNaN(parseInt(ratio, 10)); });
};
export var getHorizontalRatio = function (layout, cardDefaults, overrides) {
    // We are checking if horizontalRatio override is none, and if it is, we don't apply the flex property
    if (isHorizontal(layout) && overrides.horizontalRatio !== 'none') {
        var horizontalRatioDefault = cardDefaults.horizontalRatio;
        var ratio = overrides.horizontalRatio && validateRatios(overrides.horizontalRatio)
            ? overrides.horizontalRatio
            : horizontalRatioDefault;
        // In the event that the default horizontalRatio is not set or set to 'none', we don't apply the flex property.
        /* istanbul ignore else */
        if (ratio && ratio !== 'none') {
            var ratios = ratio.split(':', 2);
            return isReverse(layout) ? ratios.reverse() : ratios;
        }
    }
    // If we don't want to apply the flex property, we return an array of empty strings.
    return ['', ''];
};
//# sourceMappingURL=utils.js.map