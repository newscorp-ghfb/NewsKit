import { __makeTemplateObject } from "tslib";
import { getTypographyPreset, styled } from '../utils/style';
import { logicalPaddingProps } from '../utils/logical-properties';
export var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  outline: none;\n  width: 100%;\n  cursor: ", ";\n  border: none;\n  background: none;\n  box-sizing: border-box;\n  // make the input to take size of his parent\n  align-self: stretch;\n  color: currentColor;\n\n  ", "\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"], ["\n  outline: none;\n  width: 100%;\n  cursor: ", ";\n  border: none;\n  background: none;\n  box-sizing: border-box;\n  // make the input to take size of his parent\n  align-self: stretch;\n  color: currentColor;\n\n  ", "\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'default');
}, function (_a) {
    var $size = _a.$size;
    return getTypographyPreset("textField.".concat($size), '', {
        withCrop: true,
    });
}, function (_a) {
    var placeholderColor = _a.placeholderColor;
    return placeholderColor && placeholderColor;
}, function (_a) {
    var $size = _a.$size;
    return logicalPaddingProps("textField.".concat($size));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map