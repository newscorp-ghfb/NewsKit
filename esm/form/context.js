import { createContext } from 'react';
/* istanbul ignore next */
var noop = function () {
    /* no op */
};
export var FormValidationContext = createContext({
    validationMode: '',
    fieldsHadError: {},
    setFieldsHadError: noop,
});
export var FormValidationContextProvider = FormValidationContext.Provider;
// todo: update name, onChange and onBlur to match UseFormRegisterReturn types
export var FormInputContext = createContext({});
//# sourceMappingURL=context.js.map