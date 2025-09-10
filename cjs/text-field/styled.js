"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledInput = style_1.styled.input(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  outline: none;\n  width: 100%;\n  cursor: ", ";\n  border: none;\n  background: none;\n  box-sizing: border-box;\n  // make the input to take size of his parent\n  align-self: stretch;\n  color: currentColor;\n\n  ", "\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"], ["\n  outline: none;\n  width: 100%;\n  cursor: ", ";\n  border: none;\n  background: none;\n  box-sizing: border-box;\n  // make the input to take size of his parent\n  align-self: stretch;\n  color: currentColor;\n\n  ", "\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $size = _a.$size;
    return (0, style_1.getTypographyPreset)("textField.".concat($size), '', {
        withCrop: true,
    });
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor && placeholderColor;
}, function (_a) {
    var $size = _a.$size;
    return (0, logical_properties_1.logicalPaddingProps)("textField.".concat($size));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map