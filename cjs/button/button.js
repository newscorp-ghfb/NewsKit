"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var types_1 = require("./types");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var component_1 = require("../utils/component");
var indeterminate_progress_indicator_1 = require("../icons/filled/custom/indeterminate-progress-indicator");
var instrumentation_1 = require("../instrumentation");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessButton = react_1.default.forwardRef(function (props, ref) {
    var theme = (0, theme_1.useTheme)();
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var children = props.children, _a = props.overrides, overrides = _a === void 0 ? {} : _a, _b = props.size, size = _b === void 0 ? 'medium' : _b, loading = props.loading;
    var buttonSettings = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.button[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    var loadingIndicatorStylePreset = buttonSettings.loadingIndicator &&
        buttonSettings.loadingIndicator.stylePreset;
    var getProps = function (linkOrButtonProps) {
        var _a = linkOrButtonProps, disabled = _a.disabled, eventContext = _a.eventContext, eventOriginator = _a.eventOriginator, rest = tslib_1.__rest(_a, ["disabled", "eventContext", "eventOriginator"]);
        var isLink = (0, types_1.isButtonLink)(linkOrButtonProps);
        var disabledLinkProps = {
            href: undefined,
            role: 'link',
            'aria-disabled': 'true',
        };
        return tslib_1.__assign(tslib_1.__assign({}, (isLink
            ? tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ 'data-testid': 'buttonLink' }, (0, component_1.as)('a')), rest), { disabled: disabled }), (disabled && disabledLinkProps)) : tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ type: 'button', 'data-testid': 'button' }, (0, component_1.as)('button')), rest), { disabled: disabled }), (loading && {
            'aria-busy': 'true',
            'aria-live': 'polite',
        })))), { onClick: function (event) {
                fireEvent({
                    originator: eventOriginator || (isLink ? 'link' : 'button'),
                    trigger: instrumentation_1.EventTrigger.Click,
                    context: tslib_1.__assign({}, eventContext),
                });
                if (linkOrButtonProps.onClick) {
                    linkOrButtonProps.onClick(event);
                }
            }, overrides: buttonSettings });
    };
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    react_1.default.createElement(styled_1.StyledFlag, tslib_1.__assign({}, getProps(props), { ref: ref }), loading ? (react_1.default.createElement(indeterminate_progress_indicator_1.IndeterminateProgressIndicator, { overrides: {
            size: buttonSettings.iconSize,
            stylePreset: loadingIndicatorStylePreset,
        } })) : (children)));
});
exports.Button = (0, with_own_theme_1.withOwnTheme)(ThemelessButton)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=button.js.map