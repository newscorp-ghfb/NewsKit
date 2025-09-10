"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFontMetricsObject = exports.isFontConfigObject = void 0;
var isFontConfigObject = function (object) {
    return typeof object !== 'number' &&
        typeof object !== 'string' &&
        typeof object === 'object' &&
        'fontFamily' in object;
};
exports.isFontConfigObject = isFontConfigObject;
var isFontMetricsObject = function (object) {
    return typeof object === 'object' &&
        'capHeight' in object &&
        'ascent' in object &&
        'descent' in object &&
        'lineGap' in object &&
        'unitsPerEm' in object;
};
exports.isFontMetricsObject = isFontMetricsObject;
//# sourceMappingURL=guards.js.map