"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var image_1 = require("../image");
var styled_1 = require("./styled");
var component_1 = require("../utils/component");
var react_children_utilities_1 = require("../utils/react-children-utilities");
var headline_1 = require("../headline");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var deep_merge_1 = require("../utils/deep-merge");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var logical_properties_1 = require("../utils/logical-properties");
var instrumentation_1 = require("../instrumentation");
// This key is needed to for the card headline (and to the link when it is wrapped)
// to avoid missing key prop warning from react.
// There is no need for the key to be automatically generated for now
// as we only support one Headline per card
// https://nidigitalsolutions.jira.com/browse/PPDSC-1527
var cardHeadlineKey = '1';
var renderMedia = function (media) {
    return (0, component_1.renderIfReactComponent)(media) || (react_1.default.createElement(image_1.Image, tslib_1.__assign({ loadingAspectRatio: "3:2" }, media)));
};
var addHrefToLinkProps = function (props, href) {
    return typeof href === 'string'
        ? tslib_1.__assign(tslib_1.__assign({}, props), { href: href }) : tslib_1.__assign(tslib_1.__assign({}, href), props);
};
var getCardHeadlineOverrides = function (headline, theme, href) {
    var cardHeadlineDefaults = href
        ? theme.componentDefaults.card.headline.interactive
        : theme.componentDefaults.card.headline.nonInteractive;
    var _a = headline.props, userHeadlineOverrides = _a.overrides, restHeadlineProps = tslib_1.__rest(_a, ["overrides"]);
    var headlineOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), cardHeadlineDefaults, (0, filter_object_1.filterOutFalsyProperties)(userHeadlineOverrides)));
    return {
        headlineOverrides: headlineOverrides,
        restHeadlineProps: restHeadlineProps,
    };
};
var CardLink = function (_a) {
    var 
    /* istanbul ignore next */
    _b = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _b === void 0 ? 'card-link' : _b, 
    /* istanbul ignore next */
    _c = _a.eventContext, 
    /* istanbul ignore next */
    eventContext = _c === void 0 ? {} : _c, props = tslib_1.__rest(_a, ["eventOriginator", "eventContext"]);
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var onClick = function () {
        fireEvent({
            originator: eventOriginator,
            trigger: instrumentation_1.EventTrigger.Click,
            context: tslib_1.__assign({ href: props.href }, eventContext),
        });
    };
    return react_1.default.createElement(styled_1.StyledCardLink, tslib_1.__assign({}, props, { onClick: onClick }));
};
var findAndDecorateCardHeadline = function (children, theme, href, eventData) {
    var hasHeadline = false;
    var decorateCardHeadline = function (child) {
        if (!child || !(0, component_1.hasMatchingDisplayNameWith)(child, headline_1.Headline)) {
            return child;
        }
        hasHeadline = true;
        var _a = getCardHeadlineOverrides(child, theme, href), headlineOverrides = _a.headlineOverrides, restHeadlineProps = _a.restHeadlineProps;
        var CardHeadline = (react_1.default.createElement(headline_1.Headline, tslib_1.__assign({}, restHeadlineProps, { overrides: headlineOverrides, key: cardHeadlineKey, className: "nk-card-headline" })));
        // if href is not set - return card headline with styles
        if (!href)
            return CardHeadline;
        var linkPropsWithHref = addHrefToLinkProps({
            className: 'nk-card-link',
            overrides: headlineOverrides,
        }, href);
        // if href is set - wrap card headline with styles within a link
        return (react_1.default.createElement(CardLink, tslib_1.__assign({}, linkPropsWithHref, eventData, { key: cardHeadlineKey }), CardHeadline));
    };
    var decoratedChildren = (0, react_children_utilities_1.deepMap)(children, decorateCardHeadline);
    return { hasHeadline: hasHeadline, decoratedChildren: decoratedChildren };
};
var TeaserDecorator = function (_a) {
    var children = _a.children, href = _a.href, eventOriginator = _a.eventOriginator, eventContext = _a.eventContext;
    var theme = (0, theme_1.useTheme)();
    // if hasHeadline = true - style card headline and wrap it within a link when href prop is set.
    var _b = findAndDecorateCardHeadline(children, theme, href, { eventContext: eventContext, eventOriginator: eventOriginator }), hasHeadline = _b.hasHeadline, decoratedChildren = _b.decoratedChildren;
    if (hasHeadline) {
        return react_1.default.createElement(react_1.default.Fragment, null, decoratedChildren);
    }
    // if hasHeadline = false and href is not set - return children
    if (!href) {
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
    // if hasHeadline = false and href is set - set link props and wrap the while card Teaser with a link
    var linkProps = addHrefToLinkProps({
        className: 'nk-card-link',
        children: children,
    }, href);
    return (react_1.default.createElement(CardLink, tslib_1.__assign({}, linkProps, { eventContext: eventContext, eventOriginator: eventOriginator })));
};
var ThemelessCard = react_1.default.forwardRef(function (_a, ref) {
    var media = _a.media, _b = _a.mediaInteractive, mediaInteractive = _b === void 0 ? false : _b, _c = _a.layout, layout = _c === void 0 ? 'vertical' : _c, href = _a.href, actions = _a.actions, children = _a.children, _d = _a.overrides, overrides = _d === void 0 ? {} : _d, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, _f = _a.eventOriginator, eventOriginator = _f === void 0 ? 'card-link' : _f, restProps = tslib_1.__rest(_a, ["media", "mediaInteractive", "layout", "href", "actions", "children", "overrides", "eventContext", "eventOriginator"]);
    var hasHref = Boolean(href);
    var nonLogicalOverrides = (0, logical_properties_1.omitLogicalPropsFromOverrides)(overrides);
    return (react_1.default.createElement(styled_1.StyledCardContainer, tslib_1.__assign({ hasHref: hasHref, layout: layout, overrides: overrides, ref: ref }, restProps),
        media && (react_1.default.createElement(styled_1.StyledCardContainerMedia, { layout: layout, mediaInteractive: mediaInteractive, hasHref: hasHref, overrides: overrides }, renderMedia(media))),
        react_1.default.createElement(styled_1.StyledCardContainerTeaserAndActions, { layout: layout, overrides: overrides },
            children && (react_1.default.createElement(styled_1.StyledCardContainerTeaser, { hasHref: hasHref, layout: layout, overrides: overrides },
                react_1.default.createElement(TeaserDecorator, { href: href, eventContext: eventContext, eventOriginator: eventOriginator }, children))),
            actions && (react_1.default.createElement(styled_1.StyledCardContainerActions, { flow: "horizontal-center", stackDistribution: "flex-start", hasHref: hasHref, wrap: "nowrap", overrides: nonLogicalOverrides }, (0, component_1.renderIfReactComponent)(actions))))));
});
exports.Card = (0, with_own_theme_1.withOwnTheme)(ThemelessCard)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
exports.Card.displayName = 'Card';
//# sourceMappingURL=card.js.map