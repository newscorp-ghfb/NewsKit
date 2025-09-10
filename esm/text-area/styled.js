import { __makeTemplateObject } from "tslib";
import { getTypographyPreset, styled, getResponsiveSize, getStylePreset, } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
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
export var StyledTextArea = styled.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", ";\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n    ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n\n  ", ";\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n    ", ";\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return ({ cursor: disabled ? 'not-allowed' : 'default' });
}, function (_a) {
    var resize = _a.resize;
    return ({ resize: resize });
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('width', "textArea.".concat($size), '', 'width');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('height', "textArea.".concat($size), '', 'height');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('maxWidth', "textArea.".concat($size), '', 'maxWidth');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('maxHeight', "textArea.".concat($size), '', 'maxHeight');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('minHeight', "textArea.".concat($size), '', 'minHeight');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('minWidth', "textArea.".concat($size), '', 'minWidth');
}, function (_a) {
    var $size = _a.$size, state = _a.state;
    return getStylePreset("textArea.".concat($size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
        omitStates: getOmittedStates(state),
    });
}, function (_a) {
    var $size = _a.$size;
    return getTypographyPreset("textArea.".concat($size), '', {
        withCrop: true,
    });
}, function (_a) {
    var $size = _a.$size;
    return logicalProps("textArea.".concat($size));
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor && placeholderColor;
});
var templateObject_1;
//# sourceMappingURL=styled.js.map