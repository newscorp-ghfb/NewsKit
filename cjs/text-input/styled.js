"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAssistiveTextContainer = exports.StyledAssistiveText = exports.StyledLabel = exports.StyledInput = exports.IconContainer = exports.InputIconContainer = exports.StyledTextInputContainer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var text_block_1 = require("../text-block");
var block_1 = require("../block");
exports.StyledTextInputContainer = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, style_1.getResponsiveSize)('width', 'textInput', '', 'width'));
exports.InputIconContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSpacingStackHorizontal)("textInput.".concat($size, ".input"), 'input');
});
exports.IconContainer = style_1.styled.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  pointer-events: none;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  pointer-events: none;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var valid = _a.valid, invalid = _a.invalid, $size = _a.$size, rest = tslib_1.__rest(_a, ["valid", "invalid", "$size"]);
    return valid || invalid
        ? (0, style_1.getResponsiveSpace)('right', "textInput.".concat($size, ".input.validationIcon"), 'input.validationIcon', 'iconOffset')(rest)
        : '';
}, function (_a) {
    var icon = _a.icon, $size = _a.$size, rest = tslib_1.__rest(_a, ["icon", "$size"]);
    return icon &&
        (0, style_1.getResponsiveSpace)('left', "textInput.".concat($size, ".input.leadingIcon"), 'input.leadingIcon', 'iconOffset')(rest);
});
exports.StyledInput = style_1.styled.input(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", "\n  & {\n    ", "\n    ", "\n  }\n  box-sizing: border-box;\n  width: 100%;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  & {\n    ", "\n    ", "\n  }\n  box-sizing: border-box;\n  width: 100%;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("textInput.".concat($size, ".input"), 'input', {
        withCrop: true,
    });
}, function (_a) {
    var valid = _a.valid, invalid = _a.invalid, $size = _a.$size, rest = tslib_1.__rest(_a, ["valid", "invalid", "$size"]);
    return valid || invalid
        ? (0, style_1.getResponsiveSpace)('paddingRight', "textInput.".concat($size, ".input.validationIcon"), 'input.validationIcon', 'spaceInset')(rest)
        : '';
}, function (_a) {
    var hasIcon = _a.hasIcon, $size = _a.$size, rest = tslib_1.__rest(_a, ["hasIcon", "$size"]);
    return hasIcon
        ? (0, style_1.getResponsiveSpace)('paddingLeft', "textInput.".concat($size, ".input.leadingIcon"), 'input.leadingIcon', 'spaceInset')(rest)
        : '';
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return (0, style_1.getStylePreset)("textInput.".concat($size, ".input"), 'input', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSpace)('padding', "textInput.".concat($size, ".input"), 'input', 'spaceInset');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('minHeight', "textInput.".concat($size, ".input"), 'input', 'minHeight');
});
exports.StyledLabel = style_1.styled.label(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  display: block;\n  ", "\n  ", "\n    ", "\n    ", "\n"], ["\n  display: block;\n  ", "\n  ", "\n    ", "\n    ", "\n"])), function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return (0, style_1.getStylePreset)("textInput.".concat($size, ".label"), 'label', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("textInput.".concat($size, ".label"), 'label', {
        withCrop: true,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSpacingStackHorizontal)("textInput.".concat($size, ".label"), 'label');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSpacingInlineHorizontal)("textInput.".concat($size, ".label"), 'label');
});
exports.StyledAssistiveText = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return (0, style_1.getStylePreset)("textInput.".concat($size, ".assistiveText"), 'assistiveText', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("textInput.".concat($size, ".assistiveText"), 'assistiveText', {
        withCrop: true,
    });
});
exports.StyledAssistiveTextContainer = (0, style_1.styled)(block_1.Block)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var $size = _a.$size;
    return (0, style_1.getResponsiveSize)('minHeight', "textInput.".concat($size, ".assistiveText"), 'assistiveText', 'minHeight');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map