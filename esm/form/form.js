import { __assign, __makeTemplateObject } from "tslib";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState, } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormValidationContextProvider } from './context';
import { excludeReactHookFormProps } from './utils';
import { logicalProps } from '../utils/logical-properties';
import { styled } from '../utils';
var StyledForm = styled.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), logicalProps());
export var Form = forwardRef(function (props, ref) {
    var children = props.children, onSubmit = props.onSubmit, onSubmitInvalid = props.onSubmitInvalid, _a = props.validationMode, validationMode = _a === void 0 ? 'onSubmit' : _a, _b = props.reValidationMode, reValidationMode = _b === void 0 ? 'onBlur' : _b, _c = props.defaultValues, defaultValues = _c === void 0 ? {} : _c, resolver = props.resolver;
    var _d = useState({}), fieldsHadError = _d[0], setFieldsHadError = _d[1];
    var formContext = useForm({
        mode: validationMode,
        reValidateMode: reValidationMode,
        defaultValues: defaultValues,
        resolver: resolver,
    });
    var setAllFieldsHadErrorToFalse = useCallback(function () {
        var formFields = Object.keys(formContext.getValues());
        var newFieldsHadErrorObject = {};
        if (formFields.length === 0)
            return;
        formFields.forEach(function (field) {
            newFieldsHadErrorObject[field] = { hadError: false };
        });
        setFieldsHadError(newFieldsHadErrorObject);
    }, [formContext]);
    useEffect(function () {
        if (Object.keys(fieldsHadError).length === 0 && formContext.formState) {
            // Populates the fieldsHadError state and sets the values to false
            setAllFieldsHadErrorToFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formContext.formState]);
    var formRef = useRef(null);
    useImperativeHandle(ref, function () { return ({
        reset: (function (values, omitResetState) {
            if (values === void 0) { values = defaultValues; }
            setAllFieldsHadErrorToFalse();
            formContext.reset(values, omitResetState);
        }),
        clearValidation: function () {
            setAllFieldsHadErrorToFalse();
            formContext.reset({}, {
                // Don't reset these properties of the form context
                keepValues: true,
                keepIsSubmitted: true,
                keepTouched: true,
                keepSubmitCount: true,
            });
        },
        watch: formContext.watch,
        setError: formContext.setError,
        setValue: formContext.setValue,
        getValues: formContext.getValues,
        trigger: formContext.trigger,
        element: formRef.current,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control: formContext.control,
    }); }, [defaultValues, formContext, setAllFieldsHadErrorToFalse]);
    return (React.createElement(FormValidationContextProvider, { value: { validationMode: validationMode, fieldsHadError: fieldsHadError, setFieldsHadError: setFieldsHadError } },
        React.createElement(FormProvider, __assign({}, formContext),
            React.createElement(StyledForm, __assign({}, excludeReactHookFormProps(props), { ref: formRef, onSubmit: formContext.handleSubmit(onSubmit, onSubmitInvalid), noValidate: true }), children))));
});
Form.displayName = 'Form';
var templateObject_1;
//# sourceMappingURL=form.js.map