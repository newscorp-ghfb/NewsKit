"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInputContext = exports.FormValidationContextProvider = exports.FormValidationContext = void 0;
var react_1 = require("react");
/* istanbul ignore next */
var noop = function () {
    /* no op */
};
exports.FormValidationContext = (0, react_1.createContext)({
    validationMode: '',
    fieldsHadError: {},
    setFieldsHadError: noop,
});
exports.FormValidationContextProvider = exports.FormValidationContext.Provider;
// todo: update name, onChange and onBlur to match UseFormRegisterReturn types
exports.FormInputContext = (0, react_1.createContext)({});
//# sourceMappingURL=context.js.map