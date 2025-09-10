export var getHorizontalPosition = function (position) {
    if (position.includes('right'))
        return 'flex-end';
    if (position.includes('left'))
        return 'flex-start';
    return 'center';
};
export var getVerticalPosition = function (position) {
    if (position.includes('top'))
        return 'top';
    return 'bottom';
};
export var getSpaceBetweenToasts = function (position) { return function (space) {
    var _a;
    var padding = getVerticalPosition(position) === 'top' ? 'paddingBottom' : 'paddingTop';
    return _a = {}, _a[padding] = space, _a;
}; };
//# sourceMappingURL=utils.js.map