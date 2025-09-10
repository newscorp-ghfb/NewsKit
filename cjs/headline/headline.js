"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headline = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var HeadlineContainer = style_1.styled.section(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, logical_properties_1.getLogicalPropsAndTypographyPreset)('headline'));
var cssReset = (0, style_1.css)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: inline;\n  font: inherit;\n  margin: 0;\n"], ["\n  display: inline;\n  font: inherit;\n  margin: 0;\n"])));
var Heading = style_1.styled.h1(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n"])), cssReset, (0, style_1.getStylePreset)('headline.heading', 'heading'));
var Kicker = style_1.styled.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", "\n  ", ";\n"])), function (_a) {
    var as = _a.as;
    return (as !== 'span' ? cssReset : null);
}, (0, style_1.getStylePreset)('headline.kicker', 'kicker'), (0, style_1.getSpacingInlineHorizontal)('headline.kicker', 'kicker'));
var ThemelessHeadline = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, kickerText = _a.kickerText, _b = _a.headingAs, headingAs = _b === void 0 ? 'h1' : _b, _c = _a.kickerAs, kickerAs = _c === void 0 ? 'span' : _c, _d = _a.overrides, overrides = _d === void 0 ? {} : _d, rest = tslib_1.__rest(_a, ["children", "kickerText", "headingAs", "kickerAs", "overrides"]);
    return (react_1.default.createElement(HeadlineContainer, tslib_1.__assign({ overrides: overrides, ref: ref }, rest),
        kickerText && (react_1.default.createElement(Kicker, { className: "nk-headline-kicker", as: kickerAs, overrides: overrides },
            kickerText,
            ' ')),
        react_1.default.createElement(Heading, { className: "nk-headline-heading", as: headingAs, overrides: overrides }, children)));
});
exports.Headline = (0, with_own_theme_1.withOwnTheme)(ThemelessHeadline)({ defaults: defaults_1.default });
exports.Headline.displayName = 'Headline';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=headline.js.map