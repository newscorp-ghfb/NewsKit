"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextInput = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var hooks_1 = require("../utils/hooks");
var context_1 = require("../form/context");
var styled_1 = require("./styled");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var icons_1 = require("../icons");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessTextInput = react_1.default.forwardRef(function (_a, ref) {
    var _b, _c;
    var _d = _a.overrides, overrides = _d === void 0 ? {} : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, label = _a.label, disabled = _a.disabled, icon = _a.icon, _f = _a.hideLabel, hideLabel = _f === void 0 ? false : _f, ariaLabel = _a.ariaLabel, placeholder = _a.placeholder, assistiveText = _a.assistiveText, rules = _a.rules, name = _a.name, _g = _a.spellCheck, spellCheck = _g === void 0 ? false : _g, props = tslib_1.__rest(_a, ["overrides", "size", "label", "disabled", "icon", "hideLabel", "ariaLabel", "placeholder", "assistiveText", "rules", "name", "spellCheck"]);
    var theme = (0, theme_1.useTheme)();
    var _h = (0, react_1.useContext)(context_1.FormValidationContext), validationMode = _h.validationMode, setFieldsHadError = _h.setFieldsHadError, fieldsHadError = _h.fieldsHadError;
    var formContext = (0, react_hook_form_1.useFormContext)();
    var _j = formContext || {
        register: function (nameField) { return ({ nameField: nameField }); },
    }, register = _j.register, formState = _j.formState;
    var _k = formState || {}, errors = _k.errors, isSubmitSuccessful = _k.isSubmitSuccessful;
    var _l = register(name, rules), inputRef = _l.ref, onBlur = _l.onBlur, onChange = _l.onChange, rest = tslib_1.__rest(_l, ["ref", "onBlur", "onChange"]);
    var hadError = name ? (_b = fieldsHadError[name]) === null || _b === void 0 ? void 0 : _b.hadError : undefined;
    var errorText = name && ((_c = errors === null || errors === void 0 ? void 0 : errors[name]) === null || _c === void 0 ? void 0 : _c.message);
    (0, react_1.useEffect)(function () {
        if (!hadError && errorText && name) {
            var updateForFieldsHadError = {};
            updateForFieldsHadError[name] = { hadError: true };
            setFieldsHadError(tslib_1.__assign(tslib_1.__assign({}, fieldsHadError), updateForFieldsHadError));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorText, hadError, name]);
    var id = (0, hooks_1.useReactKeys)(1)[0];
    var assistiveTextId = (errorText && "".concat(id, "-error-text")) ||
        (assistiveText && "".concat(id, "-assistive-text"));
    var validationIconSize = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "textInput.".concat(size, ".input.validationIcon"), 'input.validationIcon', 'iconSize');
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
            setFieldsHadError(tslib_1.__assign(tslib_1.__assign({}, fieldsHadError), updateForFieldsHadError));
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
    return (react_1.default.createElement(styled_1.StyledTextInputContainer, { overrides: overrides },
        !hideLabel && (react_1.default.createElement(styled_1.StyledLabel, { "$size": size, disabled: disabled, invalid: !!errorText, valid: valid, htmlFor: id, overrides: overrides }, label)),
        react_1.default.createElement(styled_1.InputIconContainer, { "$size": size, overrides: overrides },
            icon && (react_1.default.createElement(styled_1.IconContainer, { "$size": size, icon: icon }, icon)),
            react_1.default.createElement(styled_1.StyledInput, tslib_1.__assign({}, rest, { ref: (0, compose_react_refs_1.default)(inputRef, ref), type: "text", placeholder: placeholder, id: id, "aria-describedby": assistiveTextId, disabled: disabled, "aria-label": hideLabel === true ? label : ariaLabel, "$size": size }, props, { overrides: overrides, invalid: !!errorText, valid: valid, "aria-invalid": !!errorText, onBlur: eventHandlerOnBlur, onChange: eventHandlerOnChange, hasIcon: !!icon, spellCheck: spellCheck })),
            (!!errorText || valid) && (react_1.default.createElement(styled_1.IconContainer, { "$size": size, valid: valid, invalid: !!errorText }, (!!errorText && (react_1.default.createElement(icons_1.IconFilledError, { "data-testid": "error-icon", overrides: {
                    size: validationIconSize,
                    stylePreset: 'iconNegative',
                } }))) ||
                (valid && (react_1.default.createElement(icons_1.IconFilledCheckCircle, { "data-testid": "tick-icon", overrides: {
                        size: validationIconSize,
                        stylePreset: 'iconPositive',
                    } })))))),
        react_1.default.createElement(styled_1.StyledAssistiveTextContainer, { "$size": size, overrides: overrides }, (assistiveText || errorText) && !valid && (react_1.default.createElement(styled_1.StyledAssistiveText, { "$size": size, id: assistiveTextId, disabled: disabled, overrides: overrides, invalid: !!errorText, valid: valid, role: errorText && 'alert', "aria-live": errorText ? 'polite' : undefined }, errorText || assistiveText)))));
});
ThemelessTextInput.displayName = 'TextInput';
/**
 * @deprecated This component has been deprecated and will be removed in a future release, use TextField instead
 */
exports.TextInput = (0, with_own_theme_1.withOwnTheme)(ThemelessTextInput)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=text-input.js.map