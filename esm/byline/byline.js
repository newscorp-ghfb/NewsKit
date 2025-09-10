import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getStylePreset, getResponsiveSpace } from '../utils/style';
import { LinkInline } from '../link';
import { Stack } from '../stack';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { Block } from '../block';
import { TextBlock } from '../text-block';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { extractLogicalPropsFromOverrides } from '../utils/logical-properties';
var InlineBlock = styled(Block)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n"], ["\n  display: inline-flex;\n"])));
var getStyledTextBlock = function (typographyPreset, stylePreset, spaceInline) { return function (_a) {
    var children = _a.children, _b = _a.withSpace, withSpace = _b === void 0 ? false : _b, ariaHidden = _a.ariaHidden;
    var StyledTextBlock = (React.createElement(TextBlock, { "aria-hidden": ariaHidden, as: "span", typographyPreset: typographyPreset, stylePreset: stylePreset }, children));
    if (withSpace) {
        return (React.createElement(InlineBlock, { spaceInline: spaceInline }, StyledTextBlock));
    }
    return StyledTextBlock;
}; };
var renderLink = function (_a, overrides) {
    var href = _a.href, author = _a.author, ariaLabel = _a.ariaLabel;
    return (React.createElement(LinkInline, { overrides: overrides, href: href, rel: "author", "aria-label": ariaLabel || "more by ".concat(author), "data-author": author }, author));
};
var isLastItem = function (currentIndex, length) {
    return currentIndex === length - 1;
};
var ThemelessByline = React.forwardRef(function (_a, ref) {
    var bylineData = _a.bylineData, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, rest = __rest(_a, ["bylineData", "overrides"]);
    var theme = useTheme();
    var spaceStack = getToken({ theme: theme, overrides: overrides }, 'byline', '', 'spaceStack');
    var linkStyles = getToken({ theme: theme, overrides: overrides }, 'byline.link', 'link', 'stylePreset');
    var linkTypes = getToken({ theme: theme, overrides: overrides }, 'byline.link', 'link', 'typographyPreset');
    var textStyles = getToken({ theme: theme, overrides: overrides }, 'byline', '', 'stylePreset');
    var textTypes = getToken({ theme: theme, overrides: overrides }, 'byline', '', 'typographyPreset');
    var dividerSpace = getToken({ theme: theme, overrides: overrides }, 'byline.divider', 'divider', 'spaceInline');
    var PipeContainer = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", "\n      ", "\n    user-select: none;\n    "], ["\n      ", "\n      ", "\n    user-select: none;\n    "])), getResponsiveSpace('marginLeft', 'byline.divider', 'divider', 'spaceInline'), getStylePreset('byline.divider', 'divider'));
    var StyledTextBlockWithSpace = getStyledTextBlock(textTypes, textStyles, dividerSpace);
    var BylineItem = function (_a) {
        var lastItem = _a.lastItem, children = _a.children;
        return (React.createElement(StyledTextBlockWithSpace, { withSpace: !lastItem },
            children,
            !lastItem && React.createElement(PipeContainer, { overrides: overrides }, "|")));
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
    var logicalProps = extractLogicalPropsFromOverrides(overrides);
    return (React.createElement(Stack, __assign({ ref: ref, flow: "horizontal-center", inline: true, wrap: "wrap", spaceStack: spaceStack }, logicalProps, rest), bylineData.map(function (_a, i) {
        var author = _a.author, href = _a.href, title = _a.title, location = _a.location, ariaLabel = _a.ariaLabel, key = _a.key;
        var lastItem = isLastItem(i, bylineData.length);
        var hasLinkOnly = href && !title && !location;
        var hasLinkAndAuthorInfo = href && (title || location);
        var hasNoLink = !href;
        var authorNameLink = renderLink({ author: author, href: href, ariaLabel: ariaLabel }, {
            stylePreset: linkStyles,
            typographyPreset: linkTypes,
        });
        return (React.createElement(React.Fragment, { key: key },
            hasLinkOnly && (React.createElement(BylineItem, { lastItem: lastItem }, authorNameLink)),
            hasLinkAndAuthorInfo && (React.createElement(BylineItem, { lastItem: lastItem },
                authorNameLink,
                React.createElement(StyledTextBlockWithSpace, { ariaHidden: true }, ",".concat('\u00A0')),
                byLineAuthorInfo(title, location))),
            hasNoLink && (React.createElement(BylineItem, { lastItem: lastItem },
                author,
                title && ", ".concat(title),
                location && ", ".concat(location)))));
    })));
});
export var Byline = withOwnTheme(ThemelessByline)({
    defaults: defaults,
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=byline.js.map