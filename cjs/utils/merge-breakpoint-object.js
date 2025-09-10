"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeBreakpointObject = void 0;
var mergeBreakpointObject = function (BPKeys) { return function (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
obj) {
    if (typeof obj !== 'object')
        return false;
    for (var index = 0; index < BPKeys.length; index++) {
        var mqKey = BPKeys[index];
        if (mqKey in obj) {
            return true;
        }
    }
    return false;
}; };
exports.mergeBreakpointObject = mergeBreakpointObject;
//# sourceMappingURL=merge-breakpoint-object.js.map