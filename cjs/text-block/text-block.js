"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBlock = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var inline_tags_1 = require("../utils/inline-tags");
var logical_properties_1 = require("../utils/logical-properties");
var StyledTextBlock = style_1.styled.p(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin: 0;\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), function (_a) {
    var stylePreset = _a.stylePreset;
    return stylePreset && (0, style_1.getStylePresetFromTheme)(stylePreset);
}, function (_a) {
    var typographyPreset = _a.typographyPreset, noCrop = _a.noCrop;
    return typographyPreset &&
        (0, style_1.getTypographyPresetFromTheme)(typographyPreset, undefined, {
            withCrop: !noCrop,
        });
}, function (_a) {
    var as = _a.as, noCrop = _a.noCrop;
    return as && !noCrop && (0, inline_tags_1.isInlineElement)(as) ? 'display: inline-block;' : '';
}, (0, logical_properties_1.logicalProps)());
exports.TextBlock = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    return react_1.default.createElement(StyledTextBlock, tslib_1.__assign({}, props, { ref: ref }));
});
var templateObject_1;
//# sourceMappingURL=text-block.js.map