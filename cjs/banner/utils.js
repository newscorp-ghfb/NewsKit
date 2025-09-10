"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVisibleBreakpointsForLayout = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils/hooks/use-media-query/utils");
var isVertical = function (layout) {
    return layout === 'vertical';
};
var getVisibleBreakpointsForLayout = function (layout, theme) {
    var horizontalBreakpoints = {};
    var verticalBreakpoints = {};
    var breakpoints = theme.breakpoints;
    var breakpointsKeys = Object.keys(breakpoints);
    // Get the lowest breakpoint key as base
    var baseBreakpoint = (0, utils_1.sortBreakpointKeys)(Object.keys(layout), breakpointsKeys)[0];
    var baseValue = layout[baseBreakpoint];
    // Set values to all breakpoints (mainly for the missing ones)
    var valuesForAllBreakpoints = breakpointsKeys.reduce(function (acc, breakpointKey) {
        var _a;
        if (acc[breakpointKey] === undefined) {
            return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[breakpointKey] = baseValue, _a));
        }
        baseValue = acc[breakpointKey];
        return acc;
    }, layout);
    var valuesForAllBreakpointsAsArr = Object.entries(valuesForAllBreakpoints);
    // Creating breakpoint objects like:
    // verticalBreakpoints = {
    //   xs: true,
    //   sm: true,
    //   md: false,
    //   lg: false,
    //   xl: false,
    // }
    // That can be passed to the visible component based on the layout
    valuesForAllBreakpointsAsArr.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        verticalBreakpoints[key] = isVertical(value);
        horizontalBreakpoints[key] = !isVertical(value);
    });
    return {
        verticalBreakpoints: verticalBreakpoints,
        horizontalBreakpoints: horizontalBreakpoints,
    };
};
exports.getVisibleBreakpointsForLayout = getVisibleBreakpointsForLayout;
//# sourceMappingURL=utils.js.map