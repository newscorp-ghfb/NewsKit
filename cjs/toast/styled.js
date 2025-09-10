"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledActionsContainer = exports.StyledDividerContainer = exports.StyledIconContainer = exports.StyledTitleContainer = exports.StyledMessageContainer = exports.StyledContentContainer = exports.StyledToastInnerContainer = exports.StyledToastContainer = exports.StyledToastBar = exports.StyledToastProvider = void 0;
var tslib_1 = require("tslib");
var react_1 = require("@emotion/react");
var text_block_1 = require("../text-block");
var style_1 = require("../utils/style");
var utils_1 = require("./utils");
var logical_properties_1 = require("../utils/logical-properties");
var enterAnimation = function (factor) { return (0, react_1.keyframes)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  0% {transform: translate3d(0, ", "%, 0) scale(0.1); opacity: 0;}\n  100% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n"], ["\n  0% {transform: translate3d(0, ", "%, 0) scale(0.1); opacity: 0;}\n  100% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n"])), factor * -100); };
var exitAnimation = function (factor) { return (0, react_1.keyframes)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  0% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n  100% {transform: translate3d(0,", "%,0) scale(0.1); opacity:0;}\n"], ["\n  0% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n  100% {transform: translate3d(0,", "%,0) scale(0.1); opacity:0;}\n"])), factor * -100); };
var getAnimation = function (position, visible) {
    var factor = (0, utils_1.getVerticalPosition)(position) === 'top' ? 1 : -1;
    return visible ? enterAnimation(factor) : exitAnimation(factor);
};
exports.StyledToastProvider = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  position: fixed;\n  pointer-events: none;\n  ", "\n  ", "\n"], ["\n  position: fixed;\n  pointer-events: none;\n  ", "\n  ", "\n"])), function (props) {
    return (0, style_1.getSpacingCssFromTheme)(function (offset) { return ({ left: offset, right: offset }); }, props.horizontalOffset)(props);
}, function (props) {
    return (0, style_1.getSpacingCssFromTheme)(function (offset) {
        var _a;
        return (_a = {},
            _a[(0, utils_1.getVerticalPosition)(props.position)] = offset,
            _a);
    }, props.verticalOffset)(props);
});
exports.StyledToastBar = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  ", "\n  ", ";\n  transition-property: top, bottom;\n  animation-fill-mode: forwards;\n  animation-name: ", ";\n  ", "\n  ", ";\n  ", "\n  ", ";\n  > * {\n    // allow events to all direct children\n    pointer-events: ", ";\n  }\n"], ["\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  ", "\n  ", ";\n  transition-property: top, bottom;\n  animation-fill-mode: forwards;\n  animation-name: ", ";\n  ", "\n  ", ";\n  ", "\n  ", ";\n  > * {\n    // allow events to all direct children\n    pointer-events: ", ";\n  }\n"])), function (_a) {
    var position = _a.position, props = tslib_1.__rest(_a, ["position"]);
    return (0, style_1.getSpacingCssFromTheme)((0, utils_1.getSpaceBetweenToasts)(position), 'space020')(props);
}, function (_a) {
    var _b;
    var position = _a.position;
    return (_b = {
            alignItems: (0, utils_1.getHorizontalPosition)(position)
        },
        _b[(0, utils_1.getVerticalPosition)(position)] = 0,
        _b);
}, function (_a) {
    var visible = _a.visible, position = _a.position;
    return getAnimation(position, visible);
}, (0, style_1.getMotionCssFromTheme)('transitionDuration', 'motionDuration020'), (0, style_1.getMotionCssFromTheme)('transitionTimingFunction', 'motionTimingEaseInAndOut'), (0, style_1.getMotionCssFromTheme)('animationDuration', 'motionDuration020'), (0, style_1.getMotionCssFromTheme)('animationTimingFunction', 'motionTimingEaseInAndOut'), function (_a) {
    var visible = _a.visible;
    return (visible ? 'initial' : 'none');
});
exports.StyledToastContainer = style_1.styled.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  ", "\n"])), (0, style_1.getStylePreset)('toast', ''), (0, style_1.getResponsiveSize)('width', 'toast', '', 'width'), (0, style_1.getResponsiveSize)('minWidth', 'toast', '', 'minWidth'), (0, style_1.getResponsiveSize)('maxWidth', 'toast', '', 'maxWidth'), (0, style_1.getResponsiveSize)('minHeight', 'toast', '', 'minHeight'), (0, logical_properties_1.logicalProps)('toast'));
exports.StyledToastInnerContainer = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  align-items: flex-start;\n"])));
exports.StyledContentContainer = style_1.styled.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  align-self: center;\n  ", "\n"], ["\n  align-self: center;\n  ", "\n"])), function (props) {
    return props.actions &&
        (0, style_1.getResponsiveSpace)('marginRight', 'toast.contentAndActions', 'contentAndActions', 'spaceInline')(props);
});
exports.StyledMessageContainer = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), (0, style_1.getTypographyPreset)('toast.content.message', 'content.message', {
    withCrop: true,
}), (0, style_1.getStylePreset)('toast.content.message', 'content.message'));
exports.StyledTitleContainer = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", "\n"])), (0, style_1.getTypographyPreset)('toast.content.title', 'content.title', {
    withCrop: true,
}), (0, style_1.getStylePreset)('toast.content.title', 'content.title'), (0, style_1.getResponsiveSpace)('marginBottom', 'toast.content.title', 'content.title', 'spaceStack'));
exports.StyledIconContainer = style_1.styled.div(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  ", "\n  // clean inline space\n  svg {\n    display: block;\n  }\n"], ["\n  ", "\n  // clean inline space\n  svg {\n    display: block;\n  }\n"])), (0, style_1.getResponsiveSpace)('marginRight', 'toast.icon', 'icon', 'spaceInline'));
exports.StyledDividerContainer = style_1.styled.div(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  align-self: stretch;\n  ", "\n"], ["\n  align-self: stretch;\n  ", "\n"])), (0, style_1.getResponsiveSpace)('marginRight', 'toast.contentAndActions', 'contentAndActions', 'spaceInline'));
exports.StyledActionsContainer = style_1.styled.div(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n  align-self: center;\n"], ["\n  align-self: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map