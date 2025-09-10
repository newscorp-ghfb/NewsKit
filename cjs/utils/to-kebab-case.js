"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = void 0;
var toKebabCase = function (str) {
    if (str) {
        return str
            .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
            .filter(Boolean)
            .map(function (x) { return x.toLowerCase(); })
            .join('-');
    }
    /* istanbul ignore next */
    return '';
};
exports.toKebabCase = toKebabCase;
//# sourceMappingURL=to-kebab-case.js.map