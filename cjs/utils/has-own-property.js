"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOwnProperty = void 0;
// Checking props exist in object in TypeScript way
// https://fettblog.eu/typescript-hasownproperty/
function hasOwnProperty(obj, prop) {
    // eslint-disable-next-line no-prototype-builtins
    return obj.hasOwnProperty(prop);
}
exports.hasOwnProperty = hasOwnProperty;
//# sourceMappingURL=has-own-property.js.map