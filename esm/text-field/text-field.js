import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledInput } from './styled';
import { WithEnhancers } from '../with-enhancers/with-enhancers';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import defaults from './defaults';
import { getSingleStylePreset } from '../utils/style/style-preset';
import { withOwnTheme } from '../utils/with-own-theme';
import { EventTrigger, useInstrumentation } from '../instrumentation';
import { omitLogicalMarginPropsFromOverrides, omitLogicalPaddingPropsFromOverrides, } from '../utils/logical-properties';
var ThemelessTextField = React.forwardRef(function (_a, inputRef) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, overrides = _a.overrides, state = _a.state, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, eventContext = _a.eventContext, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'text field' : _c, restProps = __rest(_a, ["size", "overrides", "state", "startEnhancer", "endEnhancer", "onBlur", "onFocus", "onChange", "eventContext", "eventOriginator"]);
    var fireEvent = useInstrumentation().fireEvent;
    var theme = useTheme();
    var _d = React.useState(false), isFocused = _d[0], setIsFocused = _d[1];
    var onInputFocus = React.useCallback(function (event) {
        setIsFocused(true);
        fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Focus,
            context: __assign({}, eventContext),
        });
        if (onFocus) {
            onFocus(event);
        }
    }, [eventContext, eventOriginator, fireEvent, onFocus]);
    var onInputBlur = React.useCallback(function (event) {
        if (onBlur) {
            onBlur(event);
        }
        setIsFocused(false);
    }, [onBlur]);
    var onInputChange = React.useCallback(function (event) {
        if (onChange) {
            onChange(event);
        }
    }, [onChange]);
    // This is a fix to apply the placeholderColor to input
    var textFieldStylePreset = getToken({ theme: theme, overrides: overrides }, "textField.".concat(size), '', 'stylePreset');
    var placeholderColor = getSingleStylePreset(theme, 'base', 'placeholderColor', textFieldStylePreset);
    var enhancersOverrides = omitLogicalPaddingPropsFromOverrides(overrides);
    var inputOverrides = omitLogicalMarginPropsFromOverrides(overrides);
    return (React.createElement(React.Fragment, null,
        React.createElement(WithEnhancers, { componentDefaultsPath: "textField.".concat(size), isFocused: isFocused, overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: endEnhancer },
            React.createElement(StyledInput, __assign({ ref: inputRef, type: "text", disabled: state === 'disabled', "$size": size, overrides: inputOverrides, state: state, onBlur: onInputBlur, onFocus: onInputFocus, onChange: onInputChange, placeholderColor: placeholderColor }, restProps)))));
});
export var TextField = withOwnTheme(ThemelessTextField)({
    defaults: defaults,
});
//# sourceMappingURL=text-field.js.map