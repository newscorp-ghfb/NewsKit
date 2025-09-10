import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getStylePreset } from '../utils/style';
import { isInlineElement } from '../utils/inline-tags';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { getLogicalPropsAndTypographyPreset } from '../utils/logical-properties';
var StyledText = styled.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n"])), getStylePreset('standfirst.styledText', 'styledText', {
    filterStates: ['base'],
    filterStyles: ['color'],
}), getLogicalPropsAndTypographyPreset('standfirst.styledText', 'styledText'), function (_a) {
    var as = _a.as;
    return as && (isInlineElement(as) ? 'display: inline-block' : '');
});
var ThemelessStandfirst = React.forwardRef(function (_a, ref) {
    var children = _a.children, as = _a.as, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = __rest(_a, ["children", "as", "overrides"]);
    return (React.createElement(StyledText, __assign({ ref: ref, as: as, overrides: overrides }, rest), children));
});
export var Standfirst = withOwnTheme(ThemelessStandfirst)({
    defaults: defaults,
});
var templateObject_1;
//# sourceMappingURL=standfirst.js.map