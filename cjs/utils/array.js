"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.toArray = void 0;
var toArray = function (arr) {
    return Array.isArray(arr) ? arr : [arr];
};
exports.toArray = toArray;
var map = function (arr, fn) { return (0, exports.toArray)(arr).map(fn); };
exports.map = map;
//# sourceMappingURL=array.js.map