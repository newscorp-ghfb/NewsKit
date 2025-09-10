"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Standfirst = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var inline_tags_1 = require("../utils/inline-tags");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var StyledText = style_1.styled.h2(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n"])), (0, style_1.getStylePreset)('standfirst.styledText', 'styledText', {
    filterStates: ['base'],
    filterStyles: ['color'],
}), (0, logical_properties_1.getLogicalPropsAndTypographyPreset)('standfirst.styledText', 'styledText'), function (_a) {
    var as = _a.as;
    return as && ((0, inline_tags_1.isInlineElement)(as) ? 'display: inline-block' : '');
});
var ThemelessStandfirst = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, as = _a.as, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = tslib_1.__rest(_a, ["children", "as", "overrides"]);
    return (react_1.default.createElement(StyledText, tslib_1.__assign({ ref: ref, as: as, overrides: overrides }, rest), children));
});
exports.Standfirst = (0, with_own_theme_1.withOwnTheme)(ThemelessStandfirst)({
    defaults: defaults_1.default,
});
var templateObject_1;
//# sourceMappingURL=standfirst.js.map