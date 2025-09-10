"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hidden = exports.Visible = void 0;
var tslib_1 = require("tslib");
/* eslint-disable import/no-extraneous-dependencies */
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var responsive_helpers_1 = require("../utils/responsive-helpers");
var device_helpers_1 = require("../utils/device-helpers");
var generateBreakpointConfig = function (visibleOnTrue, breakpoint) { return function (_a) {
    var _b = _a.$display, $display = _b === void 0 ? 'block' : _b, props = tslib_1.__rest(_a, ["$display"]);
    var onTrue = visibleOnTrue ? $display : 'none';
    var onFalse = visibleOnTrue ? 'none' : $display;
    return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    ", " {\n      display: ", ";\n    }\n  "], ["\n    ", " {\n      display: ", ";\n    }\n  "])), (0, responsive_helpers_1.getMediaQueryFromTheme)(breakpoint)(props), props[breakpoint] ? onTrue : onFalse);
}; };
var StyledVisible = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig(true, 'xs'), generateBreakpointConfig(true, 'sm'), generateBreakpointConfig(true, 'md'), generateBreakpointConfig(true, 'lg'), generateBreakpointConfig(true, 'xl'), function (_a) {
    var targetDevices = _a.targetDevices;
    return targetDevices &&
        (0, device_helpers_1.getDeviceQueryFromTheme)(targetDevices, { display: 'block' })();
});
var Visible = function (_a) {
    var display = _a.display, props = tslib_1.__rest(_a, ["display"]);
    return (react_1.default.createElement(StyledVisible, tslib_1.__assign({}, props, { "$display": display })));
};
exports.Visible = Visible;
var StyledHidden = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig(false, 'xs'), generateBreakpointConfig(false, 'sm'), generateBreakpointConfig(false, 'md'), generateBreakpointConfig(false, 'lg'), generateBreakpointConfig(false, 'xl'), function (_a) {
    var targetDevices = _a.targetDevices;
    return targetDevices &&
        (0, device_helpers_1.getDeviceQueryFromTheme)(targetDevices, { display: 'none' })();
});
var Hidden = function (_a) {
    var display = _a.display, props = tslib_1.__rest(_a, ["display"]);
    return (react_1.default.createElement(StyledHidden, tslib_1.__assign({}, props, { "$display": display })));
};
exports.Hidden = Hidden;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=visibility.js.map