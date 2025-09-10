import { __makeTemplateObject } from "tslib";
import { getTypographyPreset, getStylePreset, getResponsiveSpacingStackHorizontal, getResponsiveSpacingInlineHorizontal, styled, } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
export var StyledLabel = styled.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  ", "\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  display: block;\n  ", "\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var size = _a.size, state = _a.state;
    return getStylePreset("label.".concat(size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size;
    return getTypographyPreset("label.".concat(size), '', {
        withCrop: true,
    });
}, function (_a) {
    var size = _a.size;
    return getResponsiveSpacingStackHorizontal("label.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return getResponsiveSpacingInlineHorizontal("label.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return logicalProps("label.".concat(size));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map