"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndeterminateProgressIndicator = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../../../utils/style");
var theme_1 = require("../../../theme");
var svg_1 = require("../../svg");
var with_own_theme_1 = require("../../../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("../../defaults"));
var style_presets_1 = tslib_1.__importDefault(require("../../style-presets"));
var StyledSvg = (0, style_1.styled)(svg_1.Svg)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ", ";\n  ", ";\n  stroke: ", ";\n\n  circle {\n    r: ", ";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"], ["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ", ";\n  ", ";\n  stroke: ", ";\n\n  circle {\n    r: ", ";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"])), (0, style_1.getResponsiveSize)('width', 'indeterminateProgressIndicator', '', 'size'), (0, style_1.getResponsiveSize)('height', 'indeterminateProgressIndicator', '', 'size'), function (props) {
    var stylePresetObj = (0, style_1.getStylePreset)('indeterminateProgressIndicator', '', {
        isSvg: true,
    })(props);
    return stylePresetObj.fill;
}, "calc(50% - 2px)");
var DefaultProgressIndicatorIcon = function (props) { return (react_1.default.createElement(StyledSvg, tslib_1.__assign({}, props, { viewBox: "0 0 64 64" }),
    react_1.default.createElement("circle", { cx: "50%", cy: "50%" }))); };
exports.IndeterminateProgressIndicator = (0, with_own_theme_1.withOwnTheme)((0, theme_1.withTheme)(function (props) {
    var Icon = props.theme.icons.IndeterminateProgressIndicator ||
        DefaultProgressIndicatorIcon;
    return react_1.default.createElement(Icon, tslib_1.__assign({}, props));
}))({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
exports.IndeterminateProgressIndicator.displayName = 'IndeterminateProgressIndicator';
var templateObject_1;
//# sourceMappingURL=indeterminate-progress-indicator.js.map