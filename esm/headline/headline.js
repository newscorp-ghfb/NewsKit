import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getSpacingInlineHorizontal, getStylePreset, css, } from '../utils/style';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { getLogicalPropsAndTypographyPreset } from '../utils/logical-properties';
var HeadlineContainer = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), getLogicalPropsAndTypographyPreset('headline'));
var cssReset = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline;\n  font: inherit;\n  margin: 0;\n"], ["\n  display: inline;\n  font: inherit;\n  margin: 0;\n"])));
var Heading = styled.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), cssReset, getStylePreset('headline.heading', 'heading'));
var Kicker = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", "\n  ", ";\n"])), function (_a) {
    var as = _a.as;
    return (as !== 'span' ? cssReset : null);
}, getStylePreset('headline.kicker', 'kicker'), getSpacingInlineHorizontal('headline.kicker', 'kicker'));
var ThemelessHeadline = React.forwardRef(function (_a, ref) {
    var children = _a.children, kickerText = _a.kickerText, _b = _a.headingAs, headingAs = _b === void 0 ? 'h1' : _b, _c = _a.kickerAs, kickerAs = _c === void 0 ? 'span' : _c, _d = _a.overrides, overrides = _d === void 0 ? {} : _d, rest = __rest(_a, ["children", "kickerText", "headingAs", "kickerAs", "overrides"]);
    return (React.createElement(HeadlineContainer, __assign({ overrides: overrides, ref: ref }, rest),
        kickerText && (React.createElement(Kicker, { className: "nk-headline-kicker", as: kickerAs, overrides: overrides },
            kickerText,
            ' ')),
        React.createElement(Heading, { className: "nk-headline-heading", as: headingAs, overrides: overrides }, children)));
});
export var Headline = withOwnTheme(ThemelessHeadline)({ defaults: defaults });
Headline.displayName = 'Headline';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=headline.js.map