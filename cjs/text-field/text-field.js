"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var with_enhancers_1 = require("../with-enhancers/with-enhancers");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_preset_1 = require("../utils/style/style-preset");
var with_own_theme_1 = require("../utils/with-own-theme");
var instrumentation_1 = require("../instrumentation");
var logical_properties_1 = require("../utils/logical-properties");
var ThemelessTextField = react_1.default.forwardRef(function (_a, inputRef) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, overrides = _a.overrides, state = _a.state, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, eventContext = _a.eventContext, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'text field' : _c, restProps = tslib_1.__rest(_a, ["size", "overrides", "state", "startEnhancer", "endEnhancer", "onBlur", "onFocus", "onChange", "eventContext", "eventOriginator"]);
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var theme = (0, theme_1.useTheme)();
    var _d = react_1.default.useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var onInputFocus = react_1.default.useCallback(function (event) {
        setIsFocused(true);
        fireEvent({
            originator: eventOriginator,
            trigger: instrumentation_1.EventTrigger.Focus,
            context: tslib_1.__assign({}, eventContext),
        });
        if (onFocus) {
            onFocus(event);
        }
    }, [eventContext, eventOriginator, fireEvent, onFocus]);
    var onInputBlur = react_1.default.useCallback(function (event) {
        if (onBlur) {
            onBlur(event);
        }
        setIsFocused(false);
    }, [onBlur]);
    var onInputChange = react_1.default.useCallback(function (event) {
        if (onChange) {
            onChange(event);
        }
    }, [onChange]);
    // This is a fix to apply the placeholderColor to input
    var textFieldStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "textField.".concat(size), '', 'stylePreset');
    var placeholderColor = (0, style_preset_1.getSingleStylePreset)(theme, 'base', 'placeholderColor', textFieldStylePreset);
    var enhancersOverrides = (0, logical_properties_1.omitLogicalPaddingPropsFromOverrides)(overrides);
    var inputOverrides = (0, logical_properties_1.omitLogicalMarginPropsFromOverrides)(overrides);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(with_enhancers_1.WithEnhancers, { componentDefaultsPath: "textField.".concat(size), isFocused: isFocused, overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: endEnhancer },
            react_1.default.createElement(styled_1.StyledInput, tslib_1.__assign({ ref: inputRef, type: "text", disabled: state === 'disabled', "$size": size, overrides: inputOverrides, state: state, onBlur: onInputBlur, onFocus: onInputFocus, onChange: onInputChange, placeholderColor: placeholderColor }, restProps)))));
});
exports.TextField = (0, with_own_theme_1.withOwnTheme)(ThemelessTextField)({
    defaults: defaults_1.default,
});
//# sourceMappingURL=text-field.js.map