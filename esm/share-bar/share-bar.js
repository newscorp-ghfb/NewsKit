import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getTypographyPreset, getSpacingInset, getSpacingInlineHorizontal, getSpacingInlineVertical, getStylePreset, } from '../utils/style';
import { Stack } from '../stack';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
var StyledLabel = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), getTypographyPreset("shareBar.label", 'label', { withCrop: true }), getStylePreset("shareBar.label", 'label'), getSpacingInset("shareBar.label", 'label'), function (_a) {
    var orientation = _a.orientation;
    return (orientation === 'vertical'
        ? getSpacingInlineVertical
        : getSpacingInlineHorizontal)('shareBar.label', 'label');
});
var StyledShareBarContainer = styled(Stack)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), getStylePreset("shareBar"));
var ThemelessShareBar = function (_a) {
    var label = _a.label, vertical = _a.vertical, children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = __rest(_a, ["label", "vertical", "children", "overrides"]);
    var theme = useTheme();
    var orientation = vertical ? 'vertical' : 'horizontal';
    var styledComponentsProps = {
        overrides: overrides,
        orientation: orientation,
    };
    return (React.createElement(StyledShareBarContainer, __assign({ role: "region", inline: vertical, flow: vertical ? 'vertical-center' : 'horizontal-center' }, rest, styledComponentsProps),
        label && React.createElement(StyledLabel, __assign({}, styledComponentsProps), label),
        React.createElement(Stack, { flow: vertical ? 'vertical-center' : 'horizontal-center', spaceInline: getToken({ theme: theme, overrides: overrides }, "shareBar.items", 'items', 'spaceInline') }, children)));
};
ThemelessShareBar.displayName = 'ShareBar';
/**
 * @deprecated ShareBar is deprecated and will be removed in the next major release.
 */
export var ShareBar = withOwnTheme(ThemelessShareBar)({
    defaults: defaults,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=share-bar.js.map