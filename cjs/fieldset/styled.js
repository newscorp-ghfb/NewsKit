"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFieldset = exports.StyledLegend = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var legendStyleReset = "\n  display: table;\n  margin: 0;\n  padding: 0;\n";
var fieldsetStyleReset = "\n  border: 0;\n  padding: 0.01em 0 0 0;\n  margin: 0;\n  min-width: 0;\n  min-inline-size: 0;\n";
exports.StyledLegend = style_1.styled.legend(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  padding: 1px 0;\n\n  ", "\n  ", "\n    ", ";\n"], ["\n  ", "\n  padding: 1px 0;\n\n  ", "\n  ", "\n    ", ";\n"])), legendStyleReset, function (_a) {
    var size = _a.size;
    return (0, style_1.getStylePreset)("legend.".concat(size), '');
}, function (_a) {
    var size = _a.size, noCrop = _a.noCrop;
    return (0, style_1.getTypographyPreset)("legend.".concat(size), '', {
        withCrop: !noCrop,
    });
}, function (_a) {
    var size = _a.size;
    return (0, style_1.getResponsiveSpacingStackHorizontal)("legend.".concat(size), '');
});
exports.StyledFieldset = style_1.styled.fieldset(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  ", ";\n  ", "\n"], ["\n  ", "\n\n  ", ";\n  ", "\n"])), fieldsetStyleReset, (0, style_1.getStylePreset)('fieldset', ''), (0, logical_properties_1.logicalProps)('fieldset'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map