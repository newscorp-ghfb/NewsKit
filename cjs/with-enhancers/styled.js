"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInputContainer = exports.StyledEnhancer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var getMarginDirection = function (_a) {
    var marginPosition = _a.marginPosition, position = _a.position;
    if (marginPosition === 'inside') {
        return position === 'startEnhancer' ? 'marginRight' : 'marginLeft';
    }
    return position === 'startEnhancer' ? 'marginLeft' : 'marginRight';
};
exports.StyledEnhancer = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  ", ";\n\n  ", "\n"], ["\n  align-self: center;\n\n  display: flex;\n  align-items: center;\n  ", ";\n\n  ", "\n"])), function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath, position = _a.position, marginPosition = _a.marginPosition;
    return (0, style_1.getResponsiveSpace)(getMarginDirection({ position: position, marginPosition: marginPosition }), "".concat(componentDefaultsPath, ".spaceInline"), '', 'spaceInline');
}, function (_a) {
    var alignSelf = _a.alignSelf;
    return alignSelf && { alignSelf: alignSelf };
});
exports.StyledInputContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  align-items: center;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n   // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n  ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  box-sizing: border-box;\n  align-items: center;\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n   // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults\n  ", "\n\n  ", ";\n  ", ";\n"])), function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSize)('width', componentDefaultsPath, '', 'width');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSize)('height', componentDefaultsPath, '', 'height');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSize)('maxWidth', componentDefaultsPath, '', 'maxWidth');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSize)('maxHeight', componentDefaultsPath, '', 'maxHeight');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSize)('minHeight', componentDefaultsPath, '', 'minHeight');
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, style_1.getResponsiveSpacingStackHorizontal)(componentDefaultsPath);
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath, focused = _a.focused, state = _a.state;
    return (0, style_1.getStylePreset)(componentDefaultsPath, '', {
        isFocused: focused,
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var componentDefaultsPath = _a.componentDefaultsPath;
    return (0, logical_properties_1.logicalMarginProps)(componentDefaultsPath);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map