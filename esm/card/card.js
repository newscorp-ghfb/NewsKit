import { __assign, __rest } from "tslib";
import React from 'react';
import { Image } from '../image';
import { StyledCardContainer, StyledCardContainerMedia, StyledCardContainerTeaserAndActions, StyledCardContainerTeaser, StyledCardContainerActions, StyledCardLink, } from './styled';
import { renderIfReactComponent, hasMatchingDisplayNameWith, } from '../utils/component';
import { deepMap } from '../utils/react-children-utilities';
import { Headline } from '../headline';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { deepMerge } from '../utils/deep-merge';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { omitLogicalPropsFromOverrides } from '../utils/logical-properties';
import { EventTrigger, useInstrumentation } from '../instrumentation';
// This key is needed to for the card headline (and to the link when it is wrapped)
// to avoid missing key prop warning from react.
// There is no need for the key to be automatically generated for now
// as we only support one Headline per card
// https://nidigitalsolutions.jira.com/browse/PPDSC-1527
var cardHeadlineKey = '1';
var renderMedia = function (media) {
    return renderIfReactComponent(media) || (React.createElement(Image, __assign({ loadingAspectRatio: "3:2" }, media)));
};
var addHrefToLinkProps = function (props, href) {
    return typeof href === 'string'
        ? __assign(__assign({}, props), { href: href }) : __assign(__assign({}, href), props);
};
var getCardHeadlineOverrides = function (headline, theme, href) {
    var cardHeadlineDefaults = href
        ? theme.componentDefaults.card.headline.interactive
        : theme.componentDefaults.card.headline.nonInteractive;
    var _a = headline.props, userHeadlineOverrides = _a.overrides, restHeadlineProps = __rest(_a, ["overrides"]);
    var headlineOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), cardHeadlineDefaults, filterOutFalsyProperties(userHeadlineOverrides)));
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
    eventContext = _c === void 0 ? {} : _c, props = __rest(_a, ["eventOriginator", "eventContext"]);
    var fireEvent = useInstrumentation().fireEvent;
    var onClick = function () {
        fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Click,
            context: __assign({ href: props.href }, eventContext),
        });
    };
    return React.createElement(StyledCardLink, __assign({}, props, { onClick: onClick }));
};
var findAndDecorateCardHeadline = function (children, theme, href, eventData) {
    var hasHeadline = false;
    var decorateCardHeadline = function (child) {
        if (!child || !hasMatchingDisplayNameWith(child, Headline)) {
            return child;
        }
        hasHeadline = true;
        var _a = getCardHeadlineOverrides(child, theme, href), headlineOverrides = _a.headlineOverrides, restHeadlineProps = _a.restHeadlineProps;
        var CardHeadline = (React.createElement(Headline, __assign({}, restHeadlineProps, { overrides: headlineOverrides, key: cardHeadlineKey, className: "nk-card-headline" })));
        // if href is not set - return card headline with styles
        if (!href)
            return CardHeadline;
        var linkPropsWithHref = addHrefToLinkProps({
            className: 'nk-card-link',
            overrides: headlineOverrides,
        }, href);
        // if href is set - wrap card headline with styles within a link
        return (React.createElement(CardLink, __assign({}, linkPropsWithHref, eventData, { key: cardHeadlineKey }), CardHeadline));
    };
    var decoratedChildren = deepMap(children, decorateCardHeadline);
    return { hasHeadline: hasHeadline, decoratedChildren: decoratedChildren };
};
var TeaserDecorator = function (_a) {
    var children = _a.children, href = _a.href, eventOriginator = _a.eventOriginator, eventContext = _a.eventContext;
    var theme = useTheme();
    // if hasHeadline = true - style card headline and wrap it within a link when href prop is set.
    var _b = findAndDecorateCardHeadline(children, theme, href, { eventContext: eventContext, eventOriginator: eventOriginator }), hasHeadline = _b.hasHeadline, decoratedChildren = _b.decoratedChildren;
    if (hasHeadline) {
        return React.createElement(React.Fragment, null, decoratedChildren);
    }
    // if hasHeadline = false and href is not set - return children
    if (!href) {
        return React.createElement(React.Fragment, null, children);
    }
    // if hasHeadline = false and href is set - set link props and wrap the while card Teaser with a link
    var linkProps = addHrefToLinkProps({
        className: 'nk-card-link',
        children: children,
    }, href);
    return (React.createElement(CardLink, __assign({}, linkProps, { eventContext: eventContext, eventOriginator: eventOriginator })));
};
var ThemelessCard = React.forwardRef(function (_a, ref) {
    var media = _a.media, _b = _a.mediaInteractive, mediaInteractive = _b === void 0 ? false : _b, _c = _a.layout, layout = _c === void 0 ? 'vertical' : _c, href = _a.href, actions = _a.actions, children = _a.children, _d = _a.overrides, overrides = _d === void 0 ? {} : _d, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, _f = _a.eventOriginator, eventOriginator = _f === void 0 ? 'card-link' : _f, restProps = __rest(_a, ["media", "mediaInteractive", "layout", "href", "actions", "children", "overrides", "eventContext", "eventOriginator"]);
    var hasHref = Boolean(href);
    var nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);
    return (React.createElement(StyledCardContainer, __assign({ hasHref: hasHref, layout: layout, overrides: overrides, ref: ref }, restProps),
        media && (React.createElement(StyledCardContainerMedia, { layout: layout, mediaInteractive: mediaInteractive, hasHref: hasHref, overrides: overrides }, renderMedia(media))),
        React.createElement(StyledCardContainerTeaserAndActions, { layout: layout, overrides: overrides },
            children && (React.createElement(StyledCardContainerTeaser, { hasHref: hasHref, layout: layout, overrides: overrides },
                React.createElement(TeaserDecorator, { href: href, eventContext: eventContext, eventOriginator: eventOriginator }, children))),
            actions && (React.createElement(StyledCardContainerActions, { flow: "horizontal-center", stackDistribution: "flex-start", hasHref: hasHref, wrap: "nowrap", overrides: nonLogicalOverrides }, renderIfReactComponent(actions))))));
});
export var Card = withOwnTheme(ThemelessCard)({ defaults: defaults, stylePresets: stylePresets });
Card.displayName = 'Card';
//# sourceMappingURL=card.js.map