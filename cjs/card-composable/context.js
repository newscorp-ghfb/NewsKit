"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCardContext = exports.CardProvider = void 0;
var react_1 = require("react");
var CardContext = (0, react_1.createContext)({ useAreas: false });
exports.CardProvider = CardContext.Provider;
var useCardContext = function () {
    var context = (0, react_1.useContext)(CardContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <CardComposable />');
    }
    return context;
};
exports.useCardContext = useCardContext;
//# sourceMappingURL=context.js.map