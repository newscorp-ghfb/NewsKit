"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentationMiddleware = exports.composeInstrumentationMiddleware = void 0;
var tslib_1 = require("tslib");
var filters = tslib_1.__importStar(require("./filters"));
var composeInstrumentationMiddleware = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    return function (events) {
        return tslib_1.__spreadArray([], middlewares, true).reverse().reduce(function (e, mw) { return mw(e); }, events);
    };
};
exports.composeInstrumentationMiddleware = composeInstrumentationMiddleware;
exports.instrumentationMiddleware = tslib_1.__assign({}, filters);
//# sourceMappingURL=index.js.map