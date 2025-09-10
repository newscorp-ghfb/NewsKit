/** Checks whether or not a media query boolean prop `MQ<boolean>` is set to `true` for a given breakpoint */
export var checkBreakpointProp = function (prop, currentBreakpoint) {
    var MQKeys = Object.keys(prop).filter(Boolean);
    return MQKeys.includes(currentBreakpoint) || prop === true;
};
//# sourceMappingURL=check-breakpoint-prop.js.map