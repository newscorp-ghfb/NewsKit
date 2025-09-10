import { __assign } from "tslib";
import { useContext, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValidationContext } from './context';
export var FormEntry = function (_a) {
    var _b, _c;
    var name = _a.name, rules = _a.rules, children = _a.children;
    var _d = useState(false), hasContent = _d[0], setHasContent = _d[1];
    var _e = useContext(FormValidationContext), validationMode = _e.validationMode, setFieldsHadError = _e.setFieldsHadError, fieldsHadError = _e.fieldsHadError;
    var formContext = useFormContext();
    var _f = formContext || {
        register: function (nameField) { return ({ nameField: nameField }); },
    }, register = _f.register, formState = _f.formState;
    var _g = formState || {}, errors = _g.errors, isSubmitSuccessful = _g.isSubmitSuccessful;
    var _h = register(name, rules), inputRef = _h.ref, onBlur = _h.onBlur, onChange = _h.onChange;
    var refObject = useRef(null);
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
    var valid = Boolean(isSubmitSuccessful || (hadError && !errorText));
    var invalid = !!errorText;
    // eslint-disable-next-line no-undef-init
    var state = undefined;
    if (invalid) {
        state = 'invalid';
    }
    else if (valid) {
        state = 'valid';
    }
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
    };
    var eventHandlerOnChange = function (e) {
        if (e.target.value !== '') {
            setHasContent(true);
        }
        else if (hasContent) {
            setHasContent(false);
        }
        if (onChange) {
            onChange(e);
        }
    };
    // See https://react-hook-form.com/faqs#Howtosharerefusage
    var updateRef = function (instance) {
        if ((instance === null || instance === void 0 ? void 0 : instance.name) === name && (instance === null || instance === void 0 ? void 0 : instance.value)) {
            setHasContent(true);
        }
        if (inputRef) {
            inputRef(instance);
        }
        refObject.current = instance;
    };
    return children({
        onBlur: eventHandlerOnBlur,
        onChange: eventHandlerOnChange,
        state: state,
        ref: updateRef,
        error: errorText,
        refObject: refObject,
        hasContent: hasContent,
    });
};
//# sourceMappingURL=form-entry.js.map