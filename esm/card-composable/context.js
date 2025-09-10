import { createContext, useContext } from 'react';
var CardContext = createContext({ useAreas: false });
export var CardProvider = CardContext.Provider;
export var useCardContext = function () {
    var context = useContext(CardContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <CardComposable />');
    }
    return context;
};
//# sourceMappingURL=context.js.map