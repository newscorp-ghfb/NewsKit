"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLabel = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledLabel = style_1.styled.label(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: block;\n  ", "\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  display: block;\n  ", "\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var size = _a.size, state = _a.state;
    return (0, style_1.getStylePreset)("label.".concat(size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size;
    return (0, style_1.getTypographyPreset)("label.".concat(size), '', {
        withCrop: true,
    });
}, function (_a) {
    var size = _a.size;
    return (0, style_1.getResponsiveSpacingStackHorizontal)("label.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return (0, style_1.getResponsiveSpacingInlineHorizontal)("label.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return (0, logical_properties_1.logicalProps)("label.".concat(size));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map