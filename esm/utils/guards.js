export var isFontConfigObject = function (object) {
    return typeof object !== 'number' &&
        typeof object !== 'string' &&
        typeof object === 'object' &&
        'fontFamily' in object;
};
export var isFontMetricsObject = function (object) {
    return typeof object === 'object' &&
        'capHeight' in object &&
        'ascent' in object &&
        'descent' in object &&
        'lineGap' in object &&
        'unitsPerEm' in object;
};
//# sourceMappingURL=guards.js.map