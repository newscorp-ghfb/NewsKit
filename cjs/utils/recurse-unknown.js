"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recurseUnknown = void 0;
var tslib_1 = require("tslib");
var deep_merge_1 = require("./deep-merge");
var get_1 = require("./get");
var parseTokens = function (str) {
    if (typeof str !== 'string') {
        return [];
    }
    var result = [];
    var res;
    var regex = /{{([a-z0-9.]+)}}/gi;
    // eslint-disable-next-line no-cond-assign
    while ((res = regex.exec(str))) {
        result.push(res[1]);
    }
    return result;
};
var parseAndGet = function (theme, value, errorLogger, stack) {
    if (stack === void 0) { stack = []; }
    if (stack.length > 4) {
        errorLogger("Recursive loop detected, token stack: \"".concat(stack.join('", "'), "\"!"));
        return '';
    }
    var tokens = parseTokens(value);
    if (tokens.length) {
        // at this point, we know value is a string
        return tokens.reduce(function (result, tokenPath) {
            var tokenValue = (0, get_1.get)(theme, tokenPath);
            if (typeof tokenValue === 'undefined') {
                errorLogger("Theme token \"".concat(tokenPath, "\" was not found when compiling theme!"));
            }
            else {
                // We recurse down with that token value to support things like colors
                // e.g. (border color = interactiveNegative010 = red010 = #ff0000).
                tokenValue = parseAndGet(theme, tokenValue, errorLogger, tslib_1.__spreadArray([
                    tokenPath
                ], stack, true));
            }
            // if the string contains more than just the token, substitute
            // otherwise use recurseUnknown to parse the value
            return value !== "{{".concat(tokenPath, "}}")
                ? result.replace("{{".concat(tokenPath, "}}"), tokenValue)
                : // eslint-disable-next-line @typescript-eslint/no-use-before-define
                    (0, exports.recurseUnknown)(theme, tokenValue, errorLogger);
        }, value);
    }
    // Not a token, return as is (e.g. hex code or px value).
    return value;
};
var recurseUnknown = function (theme, value, errorLogger) {
    if (typeof value === 'function') {
        // Evaluation function, e.g. for calculating line height, run function and pass it the theme.
        var fResult = value(theme);
        // Result could be an object (with tokens), so recursively compile.
        return (0, exports.recurseUnknown)(theme, fResult, errorLogger);
    }
    if (typeof value === 'object' && !Array.isArray(value)) {
        // Nested object, recurse down
        return Object.entries(value).reduce(function (acc, _a) {
            var k = _a[0], v = _a[1];
            // Key could be a token, e.g. cropAdjustments fonts object
            var key = parseAndGet(theme, k, errorLogger);
            if (key === '__extends' || key === '__deepExtends') {
                var extendsObjects = (typeof v === 'string' ? [v] : v).map(function (extendsToken) {
                    return parseAndGet(theme, extendsToken, errorLogger);
                });
                var mergeFn = key === '__deepExtends' ? deep_merge_1.deepMerge : Object.assign.bind(Object);
                return mergeFn.apply(void 0, tslib_1.__spreadArray([{}, acc], extendsObjects, false));
            }
            acc[key] = (0, exports.recurseUnknown)(theme, v, errorLogger);
            if (acc[key] === '__delete') {
                delete acc[key];
            }
            return acc;
        }, {});
    }
    // Anything else, probably string, parse and get the token value
    return parseAndGet(theme, value, errorLogger);
};
exports.recurseUnknown = recurseUnknown;
//# sourceMappingURL=recurse-unknown.js.map