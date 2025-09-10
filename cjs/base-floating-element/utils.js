"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showOverridePxWarnings = exports.getOverridePxValue = void 0;
var get_token_1 = require("../utils/get-token");
// Some floating-ui middleware APIs accept a single px value (i.e.. offset and arrow.padding).
// But so that users can use tokens and update component configs globally, we want
// to use overrides to set these values.
// As a solution, the offset and pointer.edgeOffset overrides do not accept MQ objects.
// They only accept strings and a console warning will display if the value passed
// is not a valid token or px string.
// This function fetches the override value and returns the px value as an integer.
// If override is not a valid token or px string, this function returns undefined.
var getOverridePxValue = function (path, props, overridePath, defaultsObjectKey) {
    var token = (0, get_token_1.getToken)(props, path, overridePath, defaultsObjectKey);
    var value = props.theme.spacePresets[token] || token;
    if (!value.includes('px')) {
        return undefined;
    }
    return parseInt(value.replace('px', ''), 10);
};
exports.getOverridePxValue = getOverridePxValue;
var showOverridePxWarnings = function (parsedValue, overridePath) {
    if (process.env.NODE_ENV !== 'production' && !parsedValue) {
        // eslint-disable-next-line no-console
        console.warn("Invalid component override: please make sure '".concat(overridePath, "' is a valid token or px value."));
    }
};
exports.showOverridePxWarnings = showOverridePxWarnings;
//# sourceMappingURL=utils.js.map