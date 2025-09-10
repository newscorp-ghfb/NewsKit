"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalLink = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var style_1 = require("../utils/style");
var instrumentation_1 = require("../instrumentation");
var icons_1 = require("../icons");
var stack_1 = require("../stack/stack");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var utils_1 = require("./utils");
var hooks_1 = require("../utils/hooks");
var text_block_1 = require("../text-block");
var logical_properties_1 = require("../utils/logical-properties");
var transition_preset_1 = require("../utils/style/transition-preset");
var StyledLink = style_1.styled.a(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: ", ";\n  ", ";\n  ", "\n  ", "\n"], ["\n  display: ", ";\n  ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var textOnly = _a.textOnly;
    return (textOnly ? 'inline' : 'inline-block');
}, (0, transition_preset_1.getTransitionPreset)("link", ''), (0, style_1.getStylePreset)('link', ''), (0, logical_properties_1.logicalProps)('link'));
var StyledTextBlock = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  /* Needed for IE to propagate text-decoration properly */\n  display: block;\n"], ["\n  /* Needed for IE to propagate text-decoration properly */\n  display: block;\n"])));
exports.InternalLink = react_1.default.forwardRef(function (props, ref) {
    var noCrop = props.noCrop, href = props.href, external = props.external, textOnly = props.textOnly, children = props.children, overrides = props.overrides, eventContext = props.eventContext, _a = props.eventOriginator, eventOriginator = _a === void 0 ? 'link' : _a;
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var theme = (0, theme_1.useTheme)();
    var hasMounted = (0, hooks_1.useHasMounted)();
    var externalIconSize = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'link.externalIcon', 'externalIcon', 'size');
    var spaceInBetween = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'link', '', 'spaceInline');
    var typographyPreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'link', '', 'typographyPreset');
    var willRenderExternalIcon = external === undefined ? hasMounted && (0, utils_1.isLinkExternal)(href) : external;
    var renderExternalIcon = (0, react_1.useMemo)(function () {
        return willRenderExternalIcon && (react_1.default.createElement(icons_1.IconFilledLaunch, { title: "External link", overrides: { size: externalIconSize } }));
    }, [externalIconSize, willRenderExternalIcon]);
    return (react_1.default.createElement(StyledLink, tslib_1.__assign({ ref: ref }, props, { onClick: function (event) {
            fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Click,
                context: tslib_1.__assign({ href: props.href }, eventContext),
            });
            if (props.onClick) {
                props.onClick(event);
            }
        } }), textOnly ? (react_1.default.createElement(react_1.default.Fragment, null,
        children,
        renderExternalIcon)) : (react_1.default.createElement(stack_1.Stack, { flow: "horizontal-center", spaceInline: willRenderExternalIcon || react_1.default.Children.count(children) !== 1
            ? spaceInBetween
            : null, as: "span" },
        react_1.default.Children.map(children, function (child) {
            return typeof child === 'string' ? (react_1.default.createElement(StyledTextBlock, { noCrop: noCrop, as: "span", typographyPreset: typographyPreset }, child)) : (child);
        }),
        renderExternalIcon))));
});
exports.InternalLink.displayName = 'InternalLink;';
var templateObject_1, templateObject_2;
//# sourceMappingURL=internal-link.js.map