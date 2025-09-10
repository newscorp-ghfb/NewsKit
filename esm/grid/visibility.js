import { __assign, __makeTemplateObject, __rest } from "tslib";
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { styled, css } from '../utils/style';
import { getMediaQueryFromTheme } from '../utils/responsive-helpers';
import { getDeviceQueryFromTheme } from '../utils/device-helpers';
var generateBreakpointConfig = function (visibleOnTrue, breakpoint) { return function (_a) {
    var _b = _a.$display, $display = _b === void 0 ? 'block' : _b, props = __rest(_a, ["$display"]);
    var onTrue = visibleOnTrue ? $display : 'none';
    var onFalse = visibleOnTrue ? 'none' : $display;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", " {\n      display: ", ";\n    }\n  "], ["\n    ", " {\n      display: ", ";\n    }\n  "])), getMediaQueryFromTheme(breakpoint)(props), props[breakpoint] ? onTrue : onFalse);
}; };
var StyledVisible = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig(true, 'xs'), generateBreakpointConfig(true, 'sm'), generateBreakpointConfig(true, 'md'), generateBreakpointConfig(true, 'lg'), generateBreakpointConfig(true, 'xl'), function (_a) {
    var targetDevices = _a.targetDevices;
    return targetDevices &&
        getDeviceQueryFromTheme(targetDevices, { display: 'block' })();
});
export var Visible = function (_a) {
    var display = _a.display, props = __rest(_a, ["display"]);
    return (React.createElement(StyledVisible, __assign({}, props, { "$display": display })));
};
var StyledHidden = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig(false, 'xs'), generateBreakpointConfig(false, 'sm'), generateBreakpointConfig(false, 'md'), generateBreakpointConfig(false, 'lg'), generateBreakpointConfig(false, 'xl'), function (_a) {
    var targetDevices = _a.targetDevices;
    return targetDevices &&
        getDeviceQueryFromTheme(targetDevices, { display: 'none' })();
});
export var Hidden = function (_a) {
    var display = _a.display, props = __rest(_a, ["display"]);
    return (React.createElement(StyledHidden, __assign({}, props, { "$display": display })));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=visibility.js.map