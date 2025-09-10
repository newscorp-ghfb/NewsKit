"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaginationContext = exports.PaginationProvider = exports.PaginationContext = void 0;
var react_1 = require("react");
exports.PaginationContext = (0, react_1.createContext)({});
exports.PaginationProvider = exports.PaginationContext.Provider;
var usePaginationContext = function () {
    var context = (0, react_1.useContext)(exports.PaginationContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <Pagination />', context);
    }
    return context;
};
exports.usePaginationContext = usePaginationContext;
//# sourceMappingURL=context.js.map