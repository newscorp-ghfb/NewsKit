import { __assign, __rest } from "tslib";
import React from 'react';
import { isButtonLink } from './types';
import { StyledFlag } from './styled';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { as as emotionAs } from '../utils/component';
import { IndeterminateProgressIndicator } from '../icons/filled/custom/indeterminate-progress-indicator';
import { useInstrumentation, EventTrigger } from '../instrumentation';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessButton = React.forwardRef(function (props, ref) {
    var theme = useTheme();
    var fireEvent = useInstrumentation().fireEvent;
    var children = props.children, _a = props.overrides, overrides = _a === void 0 ? {} : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, loading = props.loading;
    var buttonSettings = __assign(__assign({}, theme.componentDefaults.button[size]), filterOutFalsyProperties(overrides));
    var loadingIndicatorStylePreset = buttonSettings.loadingIndicator &&
        buttonSettings.loadingIndicator.stylePreset;
    var getProps = function (linkOrButtonProps) {
        var _a = linkOrButtonProps, disabled = _a.disabled, eventContext = _a.eventContext, eventOriginator = _a.eventOriginator, rest = __rest(_a, ["disabled", "eventContext", "eventOriginator"]);
        var isLink = isButtonLink(linkOrButtonProps);
        var disabledLinkProps = {
            href: undefined,
            role: 'link',
            'aria-disabled': 'true',
        };
        return __assign(__assign({}, (isLink
            ? __assign(__assign(__assign(__assign({ 'data-testid': 'buttonLink' }, emotionAs('a')), rest), { disabled: disabled }), (disabled && disabledLinkProps)) : __assign(__assign(__assign(__assign({ type: 'button', 'data-testid': 'button' }, emotionAs('button')), rest), { disabled: disabled }), (loading && {
            'aria-busy': 'true',
            'aria-live': 'polite',
        })))), { onClick: function (event) {
                fireEvent({
                    originator: eventOriginator || (isLink ? 'link' : 'button'),
                    trigger: EventTrigger.Click,
                    context: __assign({}, eventContext),
                });
                if (linkOrButtonProps.onClick) {
                    linkOrButtonProps.onClick(event);
                }
            }, overrides: buttonSettings });
    };
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.createElement(StyledFlag, __assign({}, getProps(props), { ref: ref }), loading ? (React.createElement(IndeterminateProgressIndicator, { overrides: {
            size: buttonSettings.iconSize,
            stylePreset: loadingIndicatorStylePreset,
        } })) : (children)));
});
export var Button = withOwnTheme(ThemelessButton)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=button.js.map