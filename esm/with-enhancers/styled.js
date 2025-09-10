import { __makeTemplateObject } from "tslib";
import { getResponsiveSize, getResponsiveSpace, getStylePreset, getResponsiveSpacingStackHorizontal, styled, } from '../utils/style';
import { logicalMarginProps } from '../utils/logical-properties';
var getMarginDirection = function (_a) {
    var marginPosition = _a.marginPosition, position = _a.position;
    if (marginPosition === 'inside') {
        return position === 'startEnhancer' ? 'marginRight' : 'marginLeft';
    }
    return position === 'startEnhancer' ? 'marginLeft' : 'marginRight';
};
export var StyledEnhancer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  ", ";\n\n  ", "\n"], ["\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  ", ";\n\n  ", "\n"])), function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath, position = _a.position, marginPosition = _a.marginPosition;
    return getResponsiveSpace(getMarginDirection({ position: position, marginPosition: marginPosition }), "".concat(componentDefaultsPath, ".spaceInline"), '', 'spaceInline');
}, function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf && { alignSelf: alignSelf };
});
export var StyledInputContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  align-items: center;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n   // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n  ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  align-items: center;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n   // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n  ", ";\n"])), function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSize('width', componentDefaultsPath, '', 'width');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSize('height', componentDefaultsPath, '', 'height');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSize('maxWidth', componentDefaultsPath, '', 'maxWidth');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSize('maxHeight', componentDefaultsPath, '', 'maxHeight');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSize('minHeight', componentDefaultsPath, '', 'minHeight');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return getResponsiveSpacingStackHorizontal(componentDefaultsPath);
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath, focused = _a.focused, state = _a.state;
    return getStylePreset(componentDefaultsPath, '', {
        isFocused: focused,
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return logicalMarginProps(componentDefaultsPath);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map