import { __assign, __makeTemplateObject } from "tslib";
import React, { useMemo } from 'react';
import { styled, getStylePreset } from '../utils/style';
import { EventTrigger, useInstrumentation } from '../instrumentation';
import { IconFilledLaunch } from '../icons';
import { Stack } from '../stack/stack';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { isLinkExternal } from './utils';
import { useHasMounted } from '../utils/hooks';
import { TextBlock } from '../text-block';
import { logicalProps } from '../utils/logical-properties';
import { getTransitionPreset } from '../utils/style/transition-preset';
var StyledLink = styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  ", ";\n  ", "\n  ", "\n"], ["\n  display: ", ";\n  ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var textOnly = _a.textOnly;
    return (textOnly ? 'inline' : 'inline-block');
}, getTransitionPreset("link", ''), getStylePreset('link', ''), logicalProps('link'));
var StyledTextBlock = styled(TextBlock)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* Needed for IE to propagate text-decoration properly */\n  display: block;\n"], ["\n  /* Needed for IE to propagate text-decoration properly */\n  display: block;\n"])));
export var InternalLink = React.forwardRef(function (props, ref) {
    var noCrop = props.noCrop, href = props.href, external = props.external, textOnly = props.textOnly, children = props.children, overrides = props.overrides, eventContext = props.eventContext, _a = props.eventOriginator, eventOriginator = _a === void 0 ? 'link' : _a;
    var fireEvent = useInstrumentation().fireEvent;
    var theme = useTheme();
    var hasMounted = useHasMounted();
    var externalIconSize = getToken({ theme: theme, overrides: overrides }, 'link.externalIcon', 'externalIcon', 'size');
    var spaceInBetween = getToken({ theme: theme, overrides: overrides }, 'link', '', 'spaceInline');
    var typographyPreset = getToken({ theme: theme, overrides: overrides }, 'link', '', 'typographyPreset');
    var willRenderExternalIcon = external === undefined ? hasMounted && isLinkExternal(href) : external;
    var renderExternalIcon = useMemo(function () {
        return willRenderExternalIcon && (React.createElement(IconFilledLaunch, { title: "External link", overrides: { size: externalIconSize } }));
    }, [externalIconSize, willRenderExternalIcon]);
    return (React.createElement(StyledLink, __assign({ ref: ref }, props, { onClick: function (event) {
            fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Click,
                context: __assign({ href: props.href }, eventContext),
            });
            if (props.onClick) {
                props.onClick(event);
            }
        } }), textOnly ? (React.createElement(React.Fragment, null,
        children,
        renderExternalIcon)) : (React.createElement(Stack, { flow: "horizontal-center", spaceInline: willRenderExternalIcon || React.Children.count(children) !== 1
            ? spaceInBetween
            : null, as: "span" },
        React.Children.map(children, function (child) {
            return typeof child === 'string' ? (React.createElement(StyledTextBlock, { noCrop: noCrop, as: "span", typographyPreset: typographyPreset }, child)) : (child);
        }),
        renderExternalIcon))));
});
InternalLink.displayName = 'InternalLink;';
var templateObject_1, templateObject_2;
//# sourceMappingURL=internal-link.js.map