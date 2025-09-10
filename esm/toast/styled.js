import { __makeTemplateObject, __rest } from "tslib";
import { keyframes } from '@emotion/react';
import { TextBlock } from '../text-block';
import { getSpacingCssFromTheme, getMotionCssFromTheme, styled, getStylePreset, getResponsiveSize, getTypographyPreset, getResponsiveSpace, } from '../utils/style';
import { getHorizontalPosition, getVerticalPosition, getSpaceBetweenToasts, } from './utils';
import { logicalProps } from '../utils/logical-properties';
var enterAnimation = function (factor) { return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: translate3d(0, ", "%, 0) scale(0.1); opacity: 0;}\n  100% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n"], ["\n  0% {transform: translate3d(0, ", "%, 0) scale(0.1); opacity: 0;}\n  100% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n"])), factor * -100); };
var exitAnimation = function (factor) { return keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n  100% {transform: translate3d(0,", "%,0) scale(0.1); opacity:0;}\n"], ["\n  0% {transform: translate3d(0, 0, 0) scale(1); opacity:1;}\n  100% {transform: translate3d(0,", "%,0) scale(0.1); opacity:0;}\n"])), factor * -100); };
var getAnimation = function (position, visible) {
    var factor = getVerticalPosition(position) === 'top' ? 1 : -1;
    return visible ? enterAnimation(factor) : exitAnimation(factor);
};
export var StyledToastProvider = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  pointer-events: none;\n  ", "\n  ", "\n"], ["\n  position: fixed;\n  pointer-events: none;\n  ", "\n  ", "\n"])), function (props) {
    return getSpacingCssFromTheme(function (offset) { return ({ left: offset, right: offset }); }, props.horizontalOffset)(props);
}, function (props) {
    return getSpacingCssFromTheme(function (offset) {
        var _a;
        return (_a = {},
            _a[getVerticalPosition(props.position)] = offset,
            _a);
    }, props.verticalOffset)(props);
});
export var StyledToastBar = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  ", "\n  ", ";\n  transition-property: top, bottom;\n  animation-fill-mode: forwards;\n  animation-name: ", ";\n  ", "\n  ", ";\n  ", "\n  ", ";\n  > * {\n    // allow events to all direct children\n    pointer-events: ", ";\n  }\n"], ["\n  pointer-events: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  ", "\n  ", ";\n  transition-property: top, bottom;\n  animation-fill-mode: forwards;\n  animation-name: ", ";\n  ", "\n  ", ";\n  ", "\n  ", ";\n  > * {\n    // allow events to all direct children\n    pointer-events: ", ";\n  }\n"])), function (_a) {
    var position = _a.position, props = __rest(_a, ["position"]);
    return getSpacingCssFromTheme(getSpaceBetweenToasts(position), 'space020')(props);
}, function (_a) {
    var _b;
    var position = _a.position;
    return (_b = {
            alignItems: getHorizontalPosition(position)
        },
        _b[getVerticalPosition(position)] = 0,
        _b);
}, function (_a) {
    var visible = _a.visible, position = _a.position;
    return getAnimation(position, visible);
}, getMotionCssFromTheme('transitionDuration', 'motionDuration020'), getMotionCssFromTheme('transitionTimingFunction', 'motionTimingEaseInAndOut'), getMotionCssFromTheme('animationDuration', 'motionDuration020'), getMotionCssFromTheme('animationTimingFunction', 'motionTimingEaseInAndOut'), function (_a) {
    var visible = _a.visible;
    return (visible ? 'initial' : 'none');
});
export var StyledToastContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  ", "\n"])), getStylePreset('toast', ''), getResponsiveSize('width', 'toast', '', 'width'), getResponsiveSize('minWidth', 'toast', '', 'minWidth'), getResponsiveSize('maxWidth', 'toast', '', 'maxWidth'), getResponsiveSize('minHeight', 'toast', '', 'minHeight'), logicalProps('toast'));
export var StyledToastInnerContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  align-items: flex-start;\n"], ["\n  display: flex;\n  align-items: flex-start;\n"])));
export var StyledContentContainer = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  align-self: center;\n  ", "\n"], ["\n  align-self: center;\n  ", "\n"])), function (props) {
    return props.actions &&
        getResponsiveSpace('marginRight', 'toast.contentAndActions', 'contentAndActions', 'spaceInline')(props);
});
export var StyledMessageContainer = styled(TextBlock)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), getTypographyPreset('toast.content.message', 'content.message', {
    withCrop: true,
}), getStylePreset('toast.content.message', 'content.message'));
export var StyledTitleContainer = styled(TextBlock)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", "\n"])), getTypographyPreset('toast.content.title', 'content.title', {
    withCrop: true,
}), getStylePreset('toast.content.title', 'content.title'), getResponsiveSpace('marginBottom', 'toast.content.title', 'content.title', 'spaceStack'));
export var StyledIconContainer = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  ", "\n  // clean inline space\n  svg {\n    display: block;\n  }\n"], ["\n  ", "\n  // clean inline space\n  svg {\n    display: block;\n  }\n"])), getResponsiveSpace('marginRight', 'toast.icon', 'icon', 'spaceInline'));
export var StyledDividerContainer = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  align-self: stretch;\n  ", "\n"], ["\n  align-self: stretch;\n  ", "\n"])), getResponsiveSpace('marginRight', 'toast.contentAndActions', 'contentAndActions', 'spaceInline'));
export var StyledActionsContainer = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  align-self: center;\n"], ["\n  align-self: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
//# sourceMappingURL=styled.js.map