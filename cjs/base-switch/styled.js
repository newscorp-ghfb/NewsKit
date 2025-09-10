"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLabel = exports.StyledInput = exports.StyledSwitchFeedback = exports.StyledSwitch = exports.StyledSwitchContainer = exports.StyledSwitchAndLabelWrapper = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../utils");
var logical_properties_1 = require("../utils/logical-properties");
var STACKING_CONTEXT = {
    feedback: '1',
    input: '2',
};
exports.StyledSwitchAndLabelWrapper = utils_1.styled.label(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  ", ";\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n\n  ", ";\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var state = _a.state;
    return ({ cursor: state === 'disabled' ? 'not-allowed' : 'pointer' });
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getResponsiveSpace)('marginBottom', "".concat(path, ".").concat(size), '', 'spaceStack');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, logical_properties_1.logicalProps)("".concat(path, ".").concat(size));
});
// todo: is this container element necessary?
exports.StyledSwitchContainer = utils_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n  align-self: start;\n  flex-shrink: 0;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  display: inline-block;\n  align-self: start;\n  flex-shrink: 0;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getResponsiveSize)(function (rectSize) { return ({ width: rectSize, height: rectSize }); }, "".concat(path, ".").concat(size, ".input"), 'input', 'size');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getResponsiveSize)('blockSize', "".concat(path, ".").concat(size, ".input"), 'input', 'blockSize');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getResponsiveSize)('inlineSize', "".concat(path, ".").concat(size, ".input"), 'input', 'inlineSize');
}, function (_a) {
    var size = _a.size, labelPosition = _a.labelPosition, path = _a.path;
    return (0, utils_1.getResponsiveSpace)(labelPosition === 'end' ? 'marginRight' : 'marginLeft', "".concat(path, ".").concat(size, ".input"), 'input', 'spaceInline');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, logical_properties_1.logicalMarginProps)("".concat(path, ".").concat(size, ".input"), 'input');
});
var insetCSS = "\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n";
exports.StyledSwitch = utils_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", "\n"], ["\n  ", "\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", "\n"])), insetCSS, function (_a) {
    var size = _a.size, checked = _a.checked, state = _a.state, isFocused = _a.isFocused, isHovered = _a.isHovered, isFocusedVisible = _a.isFocusedVisible, path = _a.path;
    return (0, utils_1.getStylePreset)("".concat(path, ".").concat(size, ".input"), 'input', {
        isChecked: checked,
        isDisabled: state === 'disabled',
        isInvalid: state === 'invalid',
        isValid: state === 'valid',
        isFocused: isFocused,
        isHovered: isHovered,
        isFocusedVisible: isFocusedVisible,
    });
}, function (_a) {
    var feedbackIsVisible = _a.feedbackIsVisible;
    return feedbackIsVisible && "z-index: ".concat(STACKING_CONTEXT.input);
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getTransitionPreset)("".concat(path, ".").concat(size, ".input"), 'input');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, logical_properties_1.logicalPaddingProps)("".concat(path, ".").concat(size, ".input"), 'input');
});
exports.StyledSwitchFeedback = utils_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n\n  ", "\n\n  ", ";\n\n  ", "\n  ", ";\n  ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n\n  ", "\n\n  ", ";\n\n  ", "\n  ", ";\n  ", ";\n"])), function (_a) {
    var centreOnThumb = _a.centreOnThumb, size = _a.size, checked = _a.checked, path = _a.path, thumbOffset = _a.thumbOffset, rest = tslib_1.__rest(_a, ["centreOnThumb", "size", "checked", "path", "thumbOffset"]);
    if (!centreOnThumb) {
        return { left: '50%' };
    }
    return (0, utils_1.getResponsiveSize)(function (thumbSize) { return ({
        left: checked
            ? "calc(100% - (".concat(thumbSize, " / 2) - ").concat(thumbOffset || "0px", ")")
            : "calc((".concat(thumbSize, " / 2) + ").concat(thumbOffset || "0px", ")"),
    }); }, "".concat(path, ".").concat(size, ".thumb"), 'thumb', 'size')(rest);
}, function (_a) {
    var isHovered = _a.isHovered;
    return isHovered && "z-index: ".concat(STACKING_CONTEXT.feedback);
}, function (_a) {
    var size = _a.size, isHovered = _a.isHovered, isActive = _a.isActive, state = _a.state, path = _a.path;
    return (0, utils_1.getStylePreset)("".concat(path, ".").concat(size, ".feedback"), 'feedback', {
        isHovered: isHovered,
        isActive: isActive,
        isDisabled: state === 'disabled',
        isInvalid: state === 'invalid',
        isValid: state === 'valid',
        // when is not HOVER we need to remove the hover so it does not apply as class:hover
        omitStates: isHovered ? [] : ['hover'],
    });
}, function (_a) {
    var size = _a.size, path = _a.path, isHovered = _a.isHovered;
    return (0, utils_1.getResponsiveSize)(function (rectSize) { return ({
        width: isHovered ? rectSize : '1px',
        height: isHovered ? rectSize : '1px',
        transform: "translate3d(calc(".concat(rectSize, " / -2), calc(").concat(rectSize, " / -2), 0)"),
    }); }, "".concat(path, ".").concat(size, ".feedback"), 'feedback', 'size');
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getTransitionPreset)("".concat(path, ".").concat(size, ".feedback"), 'feedback');
});
exports.StyledInput = utils_1.styled.input(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", "\n  margin: 0;\n  opacity: 0;\n  cursor: inherit;\n"], ["\n  ", "\n  margin: 0;\n  opacity: 0;\n  cursor: inherit;\n"])), insetCSS);
exports.StyledLabel = utils_1.styled.span(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), function (_a) {
    var size = _a.size, state = _a.state, path = _a.path;
    return (0, utils_1.getStylePreset)("".concat(path, ".").concat(size, ".label"), 'label', {
        isDisabled: state === 'disabled',
        isInvalid: state === 'invalid',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size, path = _a.path;
    return (0, utils_1.getTypographyPreset)("".concat(path, ".").concat(size, ".label"), 'label', {
        withCrop: true,
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map