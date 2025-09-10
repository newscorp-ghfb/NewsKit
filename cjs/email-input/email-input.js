"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailInput = void 0;
var text_input_1 = require("../text-input");
var utils_1 = require("../utils");
/**
 * @deprecated EmailInput is deprecated and will be removed in the next major release.
 */
exports.EmailInput = (0, utils_1.withDefaultProps)(text_input_1.TextInput, {
    type: 'email',
    rules: {
        required: 'Required field',
        minLength: {
            value: 3,
            message: 'Emails must be at least 3 characters long ',
        },
        pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: 'Please provide a valid email',
        },
    },
});
//# sourceMappingURL=email-input.js.map