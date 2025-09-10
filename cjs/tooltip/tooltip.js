"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var base_floating_element_1 = require("../base-floating-element/base-floating-element");
var ThemelessTooltip = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, _b = _a.trigger, trigger = _b === void 0 ? ['hover', 'focus'] : _b, asLabel = _a.asLabel, props = tslib_1.__rest(_a, ["children", "content", "trigger", "asLabel"]);
    var useInteractions = function (context) {
        return (0, react_dom_interactions_1.useInteractions)([
            (0, react_dom_interactions_1.useHover)(context, {
                enabled: trigger.includes('hover'),
            }),
            (0, react_dom_interactions_1.useFocus)(context, { enabled: trigger.includes('focus') }),
            (0, react_dom_interactions_1.useDismiss)(context),
        ]);
    };
    var contentIsString = typeof content === 'string';
    var showDisabledWarning = function () {
        if (process.env.NODE_ENV !== 'production' && children.props.disabled) {
            // eslint-disable-next-line no-console
            console.warn("When passing a component with disabled prop to Tooltip please remember to use a wrapper element, such as a span.");
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react_1.useEffect)(function () { return showDisabledWarning(); }, [children.props.disabled]);
    var buildContextAriaAttributes = function (_a) {
        var _b = _a.floating, id = _b.id, open = _b.open;
        var attrs = {};
        // If tooltip is used as a label, add aria-label or aria-labelledby to childrenProps and id to StyledTooltip;
        // aria-label is used when content is string; aria-labelledby is used when it's not a string;
        // Because of above, 'aria-describedby' has different id for reference and floating, hence manually set below as well;
        if (asLabel) {
            attrs['aria-label'] = contentIsString ? content : undefined;
            attrs['aria-labelledby'] = open && !contentIsString ? id : undefined;
        }
        else {
            attrs['aria-describedby'] = open ? id : undefined;
        }
        return attrs;
    };
    var buildFloatingElementAriaAttributes = function () { return ({
        'aria-hidden': true,
    }); };
    return (React.createElement(base_floating_element_1.BaseFloatingElement, tslib_1.__assign({ ref: ref, path: "tooltip", className: "Tooltip", content: content, buildRefElAriaAttributes: buildContextAriaAttributes, buildFloatingElAriaAttributes: buildFloatingElementAriaAttributes, useInteractions: useInteractions, role: !asLabel ? 'tooltip' : undefined }, props), children));
});
exports.Tooltip = (0, with_own_theme_1.withOwnTheme)(ThemelessTooltip)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=tooltip.js.map