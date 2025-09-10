import { __assign, __spreadArray } from "tslib";
import * as filters from './filters';
export var composeInstrumentationMiddleware = function () {
    var middlewares = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middlewares[_i] = arguments[_i];
    }
    return function (events) {
        return __spreadArray([], middlewares, true).reverse().reduce(function (e, mw) { return mw(e); }, events);
    };
};
export var instrumentationMiddleware = __assign({}, filters);
//# sourceMappingURL=index.js.map