"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMediaQueryObject = exports.useBreakpointKey = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var context_1 = require("./context");
var utils_1 = require("./utils");
var useMediaQueryContext = function () {
    var context = react_1.default.useContext(context_1.MQContext);
    return context;
};
function useBreakpointKey() {
    var breakpointState = useMediaQueryContext();
    var currentBreakpoint = (0, utils_1.getCurrentBreakpointKey)(breakpointState);
    return currentBreakpoint;
}
exports.useBreakpointKey = useBreakpointKey;
function useMediaQueryObject(mqObject) {
    var breakpointsState = useMediaQueryContext();
    var theme = (0, theme_1.useTheme)();
    var breakpoints = theme.breakpoints;
    var breakpointsKeys = Object.keys(breakpoints);
    // when the param is simple type like string | number
    if (typeof mqObject !== 'object')
        return mqObject;
    var valuesPerBreakpoint = mqObject;
    // when the props has only one key like {xs: 10px}
    if (Object.keys(valuesPerBreakpoint).length === 1) {
        var breakpoint = Object.keys(valuesPerBreakpoint)[0];
        return valuesPerBreakpoint[breakpoint];
    }
    var currentBreakpoint = (0, utils_1.getCurrentBreakpointKey)(breakpointsState);
    if (valuesPerBreakpoint[currentBreakpoint] !== undefined)
        return valuesPerBreakpoint[currentBreakpoint];
    // get the smallest breakpoint as "base", and pre-fill the rest based on the base
    var baseBreakpoint = (0, utils_1.sortBreakpointKeys)(Object.keys(valuesPerBreakpoint), breakpointsKeys)[0];
    var baseValue = valuesPerBreakpoint[baseBreakpoint];
    var valuesForAllBreakpoints = breakpointsKeys.reduce(function (acc, breakpointKey) {
        var _a;
        if (acc[breakpointKey] === undefined) {
            return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[breakpointKey] = baseValue, _a));
        }
        baseValue = acc[breakpointKey];
        return acc;
    }, valuesPerBreakpoint);
    return valuesForAllBreakpoints[currentBreakpoint];
}
exports.useMediaQueryObject = useMediaQueryObject;
//# sourceMappingURL=use-media-query-object.js.map