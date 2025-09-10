import { __assign, __makeTemplateObject } from "tslib";
import React from 'react';
import { styled, getStylePreset, getResponsiveSize } from '../../../utils/style';
import { withTheme } from '../../../theme';
import { Svg } from '../../svg';
import { withOwnTheme } from '../../../utils/with-own-theme';
import defaults from '../../defaults';
import stylePresets from '../../style-presets';
var StyledSvg = styled(Svg)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ", ";\n  ", ";\n  stroke: ", ";\n\n  circle {\n    r: ", ";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"], ["\n  @keyframes rotate {\n    0% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(270deg);\n    }\n    50% {\n      stroke-dasharray: 502;\n      stroke-dashoffset: 360;\n      transform: rotate(315deg);\n    }\n    100% {\n      stroke-dasharray: 410;\n      stroke-dashoffset: 360;\n      transform: rotate(630deg);\n    }\n  }\n\n  ", ";\n  ", ";\n  stroke: ", ";\n\n  circle {\n    r: ", ";\n    fill: transparent;\n    stroke-width: 2px;\n    stroke-dasharray: 502;\n    stroke-dashoffset: 360;\n    transform: rotate(270deg);\n    transform-origin: 50% 50%;\n    will-change: stroke-dasharray;\n    will-change: stroke-dashoffset;\n    will-change: transform;\n    animation: rotate 1s linear infinite;\n  }\n"])), getResponsiveSize('width', 'indeterminateProgressIndicator', '', 'size'), getResponsiveSize('height', 'indeterminateProgressIndicator', '', 'size'), function (props) {
    var stylePresetObj = getStylePreset('indeterminateProgressIndicator', '', {
        isSvg: true,
    })(props);
    return stylePresetObj.fill;
}, "calc(50% - 2px)");
var DefaultProgressIndicatorIcon = function (props) { return (React.createElement(StyledSvg, __assign({}, props, { viewBox: "0 0 64 64" }),
    React.createElement("circle", { cx: "50%", cy: "50%" }))); };
export var IndeterminateProgressIndicator = withOwnTheme(withTheme(function (props) {
    var Icon = props.theme.icons.IndeterminateProgressIndicator ||
        DefaultProgressIndicatorIcon;
    return React.createElement(Icon, __assign({}, props));
}))({ defaults: defaults, stylePresets: stylePresets });
IndeterminateProgressIndicator.displayName = 'IndeterminateProgressIndicator';
var templateObject_1;
//# sourceMappingURL=indeterminate-progress-indicator.js.map