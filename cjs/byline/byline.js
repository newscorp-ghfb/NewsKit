"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Byline = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var link_1 = require("../link");
var stack_1 = require("../stack");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var block_1 = require("../block");
var text_block_1 = require("../text-block");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var InlineBlock = (0, style_1.styled)(block_1.Block)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"])));
var getStyledTextBlock = function (typographyPreset, stylePreset, spaceInline) { return function (_a) {
    var children = _a.children, _b = _a.withSpace, withSpace = _b === void 0 ? false : _b, ariaHidden = _a.ariaHidden;
    var StyledTextBlock = (react_1.default.createElement(text_block_1.TextBlock, { "aria-hidden": ariaHidden, as: "span", typographyPreset: typographyPreset, stylePreset: stylePreset }, children));
    if (withSpace) {
        return (react_1.default.createElement(InlineBlock, { spaceInline: spaceInline }, StyledTextBlock));
    }
    return StyledTextBlock;
}; };
var renderLink = function (_a, overrides) {
    var href = _a.href, author = _a.author, ariaLabel = _a.ariaLabel;
    return (react_1.default.createElement(link_1.LinkInline, { overrides: overrides, href: href, rel: "author", "aria-label": ariaLabel || "more by ".concat(author), "data-author": author }, author));
};
var isLastItem = function (currentIndex, length) {
    return currentIndex === length - 1;
};
var ThemelessByline = react_1.default.forwardRef(function (_a, ref) {
    var bylineData = _a.bylineData, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = tslib_1.__rest(_a, ["bylineData", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var spaceStack = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline', '', 'spaceStack');
    var linkStyles = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline.link', 'link', 'stylePreset');
    var linkTypes = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline.link', 'link', 'typographyPreset');
    var textStyles = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline', '', 'stylePreset');
    var textTypes = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline', '', 'typographyPreset');
    var dividerSpace = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'byline.divider', 'divider', 'spaceInline');
    var PipeContainer = style_1.styled.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      ", "\n      ", "\n    user-select: none;\n    "], ["\n      ", "\n      ", "\n    user-select: none;\n    "])), (0, style_1.getResponsiveSpace)('marginLeft', 'byline.divider', 'divider', 'spaceInline'), (0, style_1.getStylePreset)('byline.divider', 'divider'));
    var StyledTextBlockWithSpace = getStyledTextBlock(textTypes, textStyles, dividerSpace);
    var BylineItem = function (_a) {
        var lastItem = _a.lastItem, children = _a.children;
        return (react_1.default.createElement(StyledTextBlockWithSpace, { withSpace: !lastItem },
            children,
            !lastItem && react_1.default.createElement(PipeContainer, { overrides: overrides }, "|")));
    };
    var byLineAuthorInfo = function (title, location) {
        if (location && title) {
            return "".concat(title, ", ").concat(location);
        }
        if (title) {
            return title;
        }
        return location;
    };
    var logicalProps = (0, logical_properties_1.extractLogicalPropsFromOverrides)(overrides);
    return (react_1.default.createElement(stack_1.Stack, tslib_1.__assign({ ref: ref, flow: "horizontal-center", inline: true, wrap: "wrap", spaceStack: spaceStack }, logicalProps, rest), bylineData.map(function (_a, i) {
        var author = _a.author, href = _a.href, title = _a.title, location = _a.location, ariaLabel = _a.ariaLabel, key = _a.key;
        var lastItem = isLastItem(i, bylineData.length);
        var hasLinkOnly = href && !title && !location;
        var hasLinkAndAuthorInfo = href && (title || location);
        var hasNoLink = !href;
        var authorNameLink = renderLink({ author: author, href: href, ariaLabel: ariaLabel }, {
            stylePreset: linkStyles,
            typographyPreset: linkTypes,
        });
        return (react_1.default.createElement(react_1.default.Fragment, { key: key },
            hasLinkOnly && (react_1.default.createElement(BylineItem, { lastItem: lastItem }, authorNameLink)),
            hasLinkAndAuthorInfo && (react_1.default.createElement(BylineItem, { lastItem: lastItem },
                authorNameLink,
                react_1.default.createElement(StyledTextBlockWithSpace, { ariaHidden: true }, ",".concat('\u00A0')),
                byLineAuthorInfo(title, location))),
            hasNoLink && (react_1.default.createElement(BylineItem, { lastItem: lastItem },
                author,
                title && ", ".concat(title),
                location && ", ".concat(location)))));
    })));
});
exports.Byline = (0, with_own_theme_1.withOwnTheme)(ThemelessByline)({
    defaults: defaults_1.default,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=byline.js.map