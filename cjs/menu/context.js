"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMenuContext = exports.MenuContextProvider = exports.MenuContext = void 0;
var react_1 = require("react");
/* istanbul ignore next */
var defaultMenuContextArgs = {
    updateExpandedMenuSubId: function () { },
    expandedMenuSubId: null,
    parentSubMenuId: null,
};
exports.MenuContext = (0, react_1.createContext)(defaultMenuContextArgs);
exports.MenuContextProvider = exports.MenuContext.Provider;
var useMenuContext = function () {
    var context = (0, react_1.useContext)(exports.MenuContext);
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        Object.keys(context).length === 0) {
        // eslint-disable-next-line no-console
        console.error('You are using a component which needs to be a child of <Menu />');
    }
    return context;
};
exports.useMenuContext = useMenuContext;
//# sourceMappingURL=context.js.map