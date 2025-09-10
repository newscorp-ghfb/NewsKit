"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var context_1 = require("./context");
var utils_1 = require("./utils");
var logical_properties_1 = require("../utils/logical-properties");
var utils_2 = require("../utils");
var StyledForm = utils_2.styled.form(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), (0, logical_properties_1.logicalProps)());
exports.Form = (0, react_1.forwardRef)(function (props, ref) {
    var children = props.children, onSubmit = props.onSubmit, onSubmitInvalid = props.onSubmitInvalid, _a = props.validationMode, validationMode = _a === void 0 ? 'onSubmit' : _a, _b = props.reValidationMode, reValidationMode = _b === void 0 ? 'onBlur' : _b, _c = props.defaultValues, defaultValues = _c === void 0 ? {} : _c, resolver = props.resolver;
    var _d = (0, react_1.useState)({}), fieldsHadError = _d[0], setFieldsHadError = _d[1];
    var formContext = (0, react_hook_form_1.useForm)({
        mode: validationMode,
        reValidateMode: reValidationMode,
        defaultValues: defaultValues,
        resolver: resolver,
    });
    var setAllFieldsHadErrorToFalse = (0, react_1.useCallback)(function () {
        var formFields = Object.keys(formContext.getValues());
        var newFieldsHadErrorObject = {};
        if (formFields.length === 0)
            return;
        formFields.forEach(function (field) {
            newFieldsHadErrorObject[field] = { hadError: false };
        });
        setFieldsHadError(newFieldsHadErrorObject);
    }, [formContext]);
    (0, react_1.useEffect)(function () {
        if (Object.keys(fieldsHadError).length === 0 && formContext.formState) {
            // Populates the fieldsHadError state and sets the values to false
            setAllFieldsHadErrorToFalse();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formContext.formState]);
    var formRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
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
    return (react_1.default.createElement(context_1.FormValidationContextProvider, { value: { validationMode: validationMode, fieldsHadError: fieldsHadError, setFieldsHadError: setFieldsHadError } },
        react_1.default.createElement(react_hook_form_1.FormProvider, tslib_1.__assign({}, formContext),
            react_1.default.createElement(StyledForm, tslib_1.__assign({}, (0, utils_1.excludeReactHookFormProps)(props), { ref: formRef, onSubmit: formContext.handleSubmit(onSubmit, onSubmitInvalid), noValidate: true }), children))));
});
exports.Form.displayName = 'Form';
var templateObject_1;
//# sourceMappingURL=form.js.map