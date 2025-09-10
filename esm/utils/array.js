export var toArray = function (arr) {
    return Array.isArray(arr) ? arr : [arr];
};
export var map = function (arr, fn) { return toArray(arr).map(fn); };
//# sourceMappingURL=array.js.map