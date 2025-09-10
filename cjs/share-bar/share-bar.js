"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var stack_1 = require("../stack");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var StyledLabel = style_1.styled.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), (0, style_1.getTypographyPreset)("shareBar.label", 'label', { withCrop: true }), (0, style_1.getStylePreset)("shareBar.label", 'label'), (0, style_1.getSpacingInset)("shareBar.label", 'label'), function (_a) {
    var orientation = _a.orientation;
    return (orientation === 'vertical'
        ? style_1.getSpacingInlineVertical
        : style_1.getSpacingInlineHorizontal)('shareBar.label', 'label');
});
var StyledShareBarContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, style_1.getStylePreset)("shareBar"));
var ThemelessShareBar = function (_a) {
    var label = _a.label, vertical = _a.vertical, children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = tslib_1.__rest(_a, ["label", "vertical", "children", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var orientation = vertical ? 'vertical' : 'horizontal';
    var styledComponentsProps = {
        overrides: overrides,
        orientation: orientation,
    };
    return (react_1.default.createElement(StyledShareBarContainer, tslib_1.__assign({ role: "region", inline: vertical, flow: vertical ? 'vertical-center' : 'horizontal-center' }, rest, styledComponentsProps),
        label && react_1.default.createElement(StyledLabel, tslib_1.__assign({}, styledComponentsProps), label),
        react_1.default.createElement(stack_1.Stack, { flow: vertical ? 'vertical-center' : 'horizontal-center', spaceInline: (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "shareBar.items", 'items', 'spaceInline') }, children)));
};
ThemelessShareBar.displayName = 'ShareBar';
/**
 * @deprecated ShareBar is deprecated and will be removed in the next major release.
 */
exports.ShareBar = (0, with_own_theme_1.withOwnTheme)(ThemelessShareBar)({
    defaults: defaults_1.default,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=share-bar.js.map