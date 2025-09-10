import { __assign, __rest } from "tslib";
import React, { useEffect, useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import composeRefs from '@seznam/compose-react-refs';
import { useReactKeys } from '../utils/hooks';
import { FormValidationContext } from '../form/context';
import { StyledTextInputContainer, StyledInput, StyledAssistiveText, StyledLabel, InputIconContainer, IconContainer, StyledAssistiveTextContainer, } from './styled';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { IconFilledCheckCircle, IconFilledError } from '../icons';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessTextInput = React.forwardRef(function (_a, ref) {
    var _b, _c;
    var _d = _a.overrides, overrides = _d === void 0 ? {} : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, label = _a.label, disabled = _a.disabled, icon = _a.icon, _f = _a.hideLabel, hideLabel = _f === void 0 ? false : _f, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, assistiveText = _a.assistiveText, rules = _a.rules, name = _a.name, _g = _a.spellCheck, spellCheck = _g === void 0 ? false : _g, props = __rest(_a, ["overrides", "size", "label", "disabled", "icon", "hideLabel", "ariaLabel", "placeholder", "assistiveText", "rules", "name", "spellCheck"]);
    var theme = useTheme();
    var _h = useContext(FormValidationContext), validationMode = _h.validationMode, setFieldsHadError = _h.setFieldsHadError, fieldsHadError = _h.fieldsHadError;
    var formContext = useFormContext();
    var _j = formContext || {
        register: function (nameField) { return ({ nameField: nameField }); },
    }, register = _j.register, formState = _j.formState;
    var _k = formState || {}, errors = _k.errors, isSubmitSuccessful = _k.isSubmitSuccessful;
    var _l = register(name, rules), inputRef = _l.ref, onBlur = _l.onBlur, onChange = _l.onChange, rest = __rest(_l, ["ref", "onBlur", "onChange"]);
    var hadError = name ? (_b = fieldsHadError[name]) === null || _b === void 0 ? void 0 : _b.hadError : undefined;
    var errorText = name && ((_c = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _c === void 0 ? void 0 : _c.message);
    useEffect(function () {
        if (!hadError && errorText && name) {
            var updateForFieldsHadError = {};
            updateForFieldsHadError[name] = { hadError: true };
            setFieldsHadError(__assign(__assign({}, fieldsHadError), updateForFieldsHadError));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorText, hadError, name]);
    var id = useReactKeys(1)[0];
    var assistiveTextId = (errorText && "".concat(id, "-error-text")) ||
        (assistiveText && "".concat(id, "-assistive-text"));
    var validationIconSize = getToken({ theme: theme, overrides: overrides }, "textInput.".concat(size, ".input.validationIcon"), 'input.validationIcon', 'iconSize');
    var valid = isSubmitSuccessful || (hadError && !errorText);
    var eventHandlerOnBlur = function (e) {
        // RHF's onBlur function
        if (onBlur) {
            onBlur(e);
        }
        // custom onBlur function
        if (validationMode === 'onBlur' &&
            !hadError &&
            name &&
            (errorText || e.target.value)) {
            var updateForFieldsHadError = {};
            updateForFieldsHadError[name] = { hadError: true };
            setFieldsHadError(__assign(__assign({}, fieldsHadError), updateForFieldsHadError));
        }
        // onBlur function passed in the props
        if (props.onBlur) {
            props.onBlur(e);
        }
    };
    var eventHandlerOnChange = function (e) {
        // RHF's onChange function
        if (onChange) {
            onChange(e);
        }
        // onChange function passed in the props
        if (props.onChange) {
            props.onChange(e);
        }
    };
    return (React.createElement(StyledTextInputContainer, { overrides: overrides },
        !hideLabel && (React.createElement(StyledLabel, { "$size": size, disabled: disabled, invalid: !!errorText, valid: valid, htmlFor: id, overrides: overrides }, label)),
        React.createElement(InputIconContainer, { "$size": size, overrides: overrides },
            icon && (React.createElement(IconContainer, { "$size": size, icon: icon }, icon)),
            React.createElement(StyledInput, __assign({}, rest, { ref: composeRefs(inputRef, ref), type: "text", placeholder: placeholder, id: id, "aria-describedby": assistiveTextId, disabled: disabled, "aria-label": hideLabel === true ? label : ariaLabel, "$size": size }, props, { overrides: overrides, invalid: !!errorText, valid: valid, "aria-invalid": !!errorText, onBlur: eventHandlerOnBlur, onChange: eventHandlerOnChange, hasIcon: !!icon, spellCheck: spellCheck })),
            (!!errorText || valid) && (React.createElement(IconContainer, { "$size": size, valid: valid, invalid: !!errorText }, (!!errorText && (React.createElement(IconFilledError, { "data-testid": "error-icon", overrides: {
                    size: validationIconSize,
                    stylePreset: 'iconNegative',
                } }))) ||
                (valid && (React.createElement(IconFilledCheckCircle, { "data-testid": "tick-icon", overrides: {
                        size: validationIconSize,
                        stylePreset: 'iconPositive',
                    } })))))),
        React.createElement(StyledAssistiveTextContainer, { "$size": size, overrides: overrides }, (assistiveText || errorText) && !valid && (React.createElement(StyledAssistiveText, { "$size": size, id: assistiveTextId, disabled: disabled, overrides: overrides, invalid: !!errorText, valid: valid, role: errorText && 'alert', "aria-live": errorText ? 'polite' : undefined }, errorText || assistiveText)))));
});
ThemelessTextInput.displayName = 'TextInput';
/**
 * @deprecated This component has been deprecated and will be removed in a future release, use TextField instead
 */
export var TextInput = withOwnTheme(ThemelessTextInput)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=text-input.js.map