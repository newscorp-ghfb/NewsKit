import { createContext, useContext } from 'react';
/* istanbul ignore next */
var defaultMenuContextArgs = {
    updateExpandedMenuSubId: function () { },
    expandedMenuSubId: null,
    parentSubMenuId: null,
};
export var MenuContext = createContext(defaultMenuContextArgs);
export var MenuContextProvider = MenuContext.Provider;
export var useMenuContext = function () {
    var context = useContext(MenuContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <Menu />');
    }
    return context;
};
//# sourceMappingURL=context.js.map