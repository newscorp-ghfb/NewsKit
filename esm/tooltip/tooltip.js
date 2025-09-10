import { __assign, __rest } from "tslib";
import * as React from 'react';
import { useEffect } from 'react';
import { useDismiss, useFocus, useHover, useInteractions as floatingUiUseInteractions, } from '@floating-ui/react-dom-interactions';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { BaseFloatingElement } from '../base-floating-element/base-floating-element';
var ThemelessTooltip = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, _b = _a.trigger, trigger = _b === void 0 ? ['hover', 'focus'] : _b, asLabel = _a.asLabel, props = __rest(_a, ["children", "content", "trigger", "asLabel"]);
    var useInteractions = function (context) {
        return floatingUiUseInteractions([
            useHover(context, {
                enabled: trigger.includes('hover'),
            }),
            useFocus(context, { enabled: trigger.includes('focus') }),
            useDismiss(context),
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
    useEffect(function () { return showDisabledWarning(); }, [children.props.disabled]);
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
    return (React.createElement(BaseFloatingElement, __assign({ ref: ref, path: "tooltip", className: "Tooltip", content: content, buildRefElAriaAttributes: buildContextAriaAttributes, buildFloatingElAriaAttributes: buildFloatingElementAriaAttributes, useInteractions: useInteractions, role: !asLabel ? 'tooltip' : undefined }, props), children));
});
export var Tooltip = withOwnTheme(ThemelessTooltip)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=tooltip.js.map