"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var get = function (obj, path) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return path.split('.').reduce(function (acc, key) { return acc && acc[key]; }, obj);
};
exports.get = get;
//# sourceMappingURL=get.js.map