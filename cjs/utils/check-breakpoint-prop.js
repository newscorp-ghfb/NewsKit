"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBreakpointProp = void 0;
/** Checks whether or not a media query boolean prop `MQ<boolean>` is set to `true` for a given breakpoint */
var checkBreakpointProp = function (prop, currentBreakpoint) {
    var MQKeys = Object.keys(prop).filter(Boolean);
    return MQKeys.includes(currentBreakpoint) || prop === true;
};
exports.checkBreakpointProp = checkBreakpointProp;
//# sourceMappingURL=check-breakpoint-prop.js.map