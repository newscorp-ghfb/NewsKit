import { __makeTemplateObject, __rest } from "tslib";
import { styled, getTypographyPreset, getStylePreset, getResponsiveSpace, getResponsiveSize, getResponsiveSpacingStackHorizontal, getResponsiveSpacingInlineHorizontal, } from '../utils/style';
import { TextBlock } from '../text-block';
import { Block } from '../block';
export var StyledTextInputContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), getResponsiveSize('width', 'textInput', '', 'width'));
export var InputIconContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  ", "\n"], ["\n  position: relative;\n  ", "\n"])), function (_a) {
    var $size = _a.$size;
    return getResponsiveSpacingStackHorizontal("textInput.".concat($size, ".input"), 'input');
});
export var IconContainer = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  pointer-events: none;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  pointer-events: none;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var valid = _a.valid, invalid = _a.invalid, $size = _a.$size, rest = __rest(_a, ["valid", "invalid", "$size"]);
    return valid || invalid
        ? getResponsiveSpace('right', "textInput.".concat($size, ".input.validationIcon"), 'input.validationIcon', 'iconOffset')(rest)
        : '';
}, function (_a) {
    var icon = _a.icon, $size = _a.$size, rest = __rest(_a, ["icon", "$size"]);
    return icon &&
        getResponsiveSpace('left', "textInput.".concat($size, ".input.leadingIcon"), 'input.leadingIcon', 'iconOffset')(rest);
});
export var StyledInput = styled.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  & {\n    ", "\n    ", "\n  }\n  box-sizing: border-box;\n  width: 100%;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  & {\n    ", "\n    ", "\n  }\n  box-sizing: border-box;\n  width: 100%;\n  cursor: ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var $size = _a.$size;
    return getTypographyPreset("textInput.".concat($size, ".input"), 'input', {
        withCrop: true,
    });
}, function (_a) {
    var valid = _a.valid, invalid = _a.invalid, $size = _a.$size, rest = __rest(_a, ["valid", "invalid", "$size"]);
    return valid || invalid
        ? getResponsiveSpace('paddingRight', "textInput.".concat($size, ".input.validationIcon"), 'input.validationIcon', 'spaceInset')(rest)
        : '';
}, function (_a) {
    var hasIcon = _a.hasIcon, $size = _a.$size, rest = __rest(_a, ["hasIcon", "$size"]);
    return hasIcon
        ? getResponsiveSpace('paddingLeft', "textInput.".concat($size, ".input.leadingIcon"), 'input.leadingIcon', 'spaceInset')(rest)
        : '';
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return getStylePreset("textInput.".concat($size, ".input"), 'input', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSpace('padding', "textInput.".concat($size, ".input"), 'input', 'spaceInset');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('minHeight', "textInput.".concat($size, ".input"), 'input', 'minHeight');
});
export var StyledLabel = styled.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: block;\n  ", "\n  ", "\n    ", "\n    ", "\n"], ["\n  display: block;\n  ", "\n  ", "\n    ", "\n    ", "\n"])), function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return getStylePreset("textInput.".concat($size, ".label"), 'label', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return getTypographyPreset("textInput.".concat($size, ".label"), 'label', {
        withCrop: true,
    });
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSpacingStackHorizontal("textInput.".concat($size, ".label"), 'label');
}, function (_a) {
    var $size = _a.$size;
    return getResponsiveSpacingInlineHorizontal("textInput.".concat($size, ".label"), 'label');
});
export var StyledAssistiveText = styled(TextBlock)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (_a) {
    var $size = _a.$size, invalid = _a.invalid, valid = _a.valid, disabled = _a.disabled;
    return getStylePreset("textInput.".concat($size, ".assistiveText"), 'assistiveText', {
        isInvalid: invalid,
        isValid: valid,
        isDisabled: disabled,
    });
}, function (_a) {
    var $size = _a.$size;
    return getTypographyPreset("textInput.".concat($size, ".assistiveText"), 'assistiveText', {
        withCrop: true,
    });
});
export var StyledAssistiveTextContainer = styled(Block)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var $size = _a.$size;
    return getResponsiveSize('minHeight', "textInput.".concat($size, ".assistiveText"), 'assistiveText', 'minHeight');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map