"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueInRange = void 0;
var getValueInRange = function (value, _a) {
    var start = _a[0], end = _a[1];
    return Math.max(start, Math.min(end, value));
};
exports.getValueInRange = getValueInRange;
//# sourceMappingURL=value-in-range.js.map