"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextArea = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
/**
 * there is an issue with getStylePreset when is used on input/textarea component,
 * it adds component:valid:hover style by default which is the browser default behaviour
 * that's why valid:hover and invalid:hover are removed from style-preset when the component don't need these states.
 */
var getOmittedStates = function (state) {
    if (state !== 'valid' && state !== 'invalid')
        return ['valid:hover', 'invalid:hover'];
    return [];
};
exports.StyledTextArea = style_1.styled.textarea(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", ";\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n    ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n\n  ", ";\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n    ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return ({ cursor: disabled ? 'not-allowed' : 'default' });
}, function (_a) {
    var resize = _a.resize;
    return ({ resize: resize });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('width', "textArea.".concat($size), '', 'width');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('height', "textArea.".concat($size), '', 'height');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('maxWidth', "textArea.".concat($size), '', 'maxWidth');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('maxHeight', "textArea.".concat($size), '', 'maxHeight');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('minHeight', "textArea.".concat($size), '', 'minHeight');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('minWidth', "textArea.".concat($size), '', 'minWidth');
}, function (_a) {
    var $size = _a.$size, state = _a.state;
    return (0, style_1.getStylePreset)("textArea.".concat($size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
        omitStates: getOmittedStates(state),
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("textArea.".concat($size), '', {
        withCrop: true,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, logical_properties_1.logicalProps)("textArea.".concat($size));
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor && placeholderColor;
});
var templateObject_1;
//# sourceMappingURL=styled.js.map