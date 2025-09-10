"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpaceBetweenToasts = exports.getVerticalPosition = exports.getHorizontalPosition = void 0;
var getHorizontalPosition = function (position) {
    if (position.includes('right'))
        return 'flex-end';
    if (position.includes('left'))
        return 'flex-start';
    return 'center';
};
exports.getHorizontalPosition = getHorizontalPosition;
var getVerticalPosition = function (position) {
    if (position.includes('top'))
        return 'top';
    return 'bottom';
};
exports.getVerticalPosition = getVerticalPosition;
var getSpaceBetweenToasts = function (position) { return function (space) {
    var _a;
    var padding = (0, exports.getVerticalPosition)(position) === 'top' ? 'paddingBottom' : 'paddingTop';
    return _a = {}, _a[padding] = space, _a;
}; };
exports.getSpaceBetweenToasts = getSpaceBetweenToasts;
//# sourceMappingURL=utils.js.map