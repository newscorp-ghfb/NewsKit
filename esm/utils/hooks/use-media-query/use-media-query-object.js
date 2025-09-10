import { __assign } from "tslib";
import React from 'react';
import { useTheme } from '../../../theme';
import { MQContext } from './context';
import { getCurrentBreakpointKey, sortBreakpointKeys } from './utils';
var useMediaQueryContext = function () {
    var context = React.useContext(MQContext);
    return context;
};
export function useBreakpointKey() {
    var breakpointState = useMediaQueryContext();
    var currentBreakpoint = getCurrentBreakpointKey(breakpointState);
    return currentBreakpoint;
}
export function useMediaQueryObject(mqObject) {
    var breakpointsState = useMediaQueryContext();
    var theme = useTheme();
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
    var currentBreakpoint = getCurrentBreakpointKey(breakpointsState);
    if (valuesPerBreakpoint[currentBreakpoint] !== undefined)
        return valuesPerBreakpoint[currentBreakpoint];
    // get the smallest breakpoint as "base", and pre-fill the rest based on the base
    var baseBreakpoint = sortBreakpointKeys(Object.keys(valuesPerBreakpoint), breakpointsKeys)[0];
    var baseValue = valuesPerBreakpoint[baseBreakpoint];
    var valuesForAllBreakpoints = breakpointsKeys.reduce(function (acc, breakpointKey) {
        var _a;
        if (acc[breakpointKey] === undefined) {
            return __assign(__assign({}, acc), (_a = {}, _a[breakpointKey] = baseValue, _a));
        }
        baseValue = acc[breakpointKey];
        return acc;
    }, valuesPerBreakpoint);
    return valuesForAllBreakpoints[currentBreakpoint];
}
//# sourceMappingURL=use-media-query-object.js.map