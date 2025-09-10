"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuSub = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
var context_1 = require("./context");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var get_1 = require("../utils/get");
var hooks_1 = require("../utils/hooks");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var icons_1 = require("../icons");
var overrides_1 = require("../utils/overrides");
var utils_1 = require("./utils");
var DefaultIcon = function (_a) {
    var expanded = _a.expanded, overrides = _a.overrides;
    return expanded ? (react_1.default.createElement(icons_1.IconFilledExpandLess, { overrides: tslib_1.__assign({ size: 'iconSize020' }, overrides) })) : (react_1.default.createElement(icons_1.IconFilledExpandMore, { overrides: tslib_1.__assign({ size: 'iconSize020' }, overrides) }));
};
exports.MenuSub = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, title = _a.title, selected = _a.selected, expandedProp = _a.expanded, _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? false : _b, onClick = _a.onClick, menuSubAlign = _a.align, rest = tslib_1.__rest(_a, ["overrides", "children", "title", "selected", "expanded", "defaultExpanded", "onClick", "align"]);
    var _c = (0, hooks_1.useControlled)({
        controlledValue: expandedProp,
        defaultValue: defaultExpanded,
    }), isExpanded = _c[0], setIsExpanded = _c[1];
    var menuContext = (0, context_1.useMenuContext)();
    var vertical = menuContext.vertical, size = menuContext.size, menuAlign = menuContext.align, menuOverrides = menuContext.overrides, isSubMenu = menuContext.isSubMenu, parentSubMenuId = menuContext.parentSubMenuId, updateExpandedMenuSubId = menuContext.updateExpandedMenuSubId, expandedMenuSubId = menuContext.expandedMenuSubId;
    var align = menuSubAlign || menuAlign;
    var id = (0, react_dom_interactions_1.useId)();
    var nestedId = (0, utils_1.buildNestedId)(id, parentSubMenuId);
    (0, react_1.useEffect)(function () {
        if (!expandedMenuSubId) {
            // all sub menus have been collapsed
            setIsExpanded(false);
        }
        else if (expandedMenuSubId === nestedId ||
            (0, utils_1.isDescendant)(nestedId, expandedMenuSubId)) {
            // this sub menu or one of its descendants has been expanded
            setIsExpanded(true);
        }
        else if ((0, utils_1.isDescendant)(expandedMenuSubId, nestedId)) {
            // this sub menu's ancestor is expanded
            setIsExpanded(false);
        }
        else if (!vertical) {
            // another sub menu elsewhere in the tree has been expanded
            setIsExpanded(false);
        }
    }, [vertical, nestedId, expandedMenuSubId, setIsExpanded]);
    var _d = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon, DefaultIcon, {
        expanded: isExpanded,
    }), IndicatorIcon = _d[0], indicatorIconProps = _d[1];
    // Inform the parent context that this sub menu has been clicked.
    var handleClick = react_1.default.useCallback(function () {
        updateExpandedMenuSubId(nestedId);
    }, [nestedId, updateExpandedMenuSubId]);
    // Set the initial expanded state of this sub menu in the parent context.
    (0, react_1.useEffect)(function () {
        if (defaultExpanded) {
            updateExpandedMenuSubId(nestedId);
        }
    }, []);
    var theme = (0, theme_1.useTheme)();
    var menuItemOverrides = tslib_1.__assign(tslib_1.__assign({}, (0, get_1.get)(theme.componentDefaults, "".concat(isSubMenu ? 'menuSubItem' : 'menuItem', ".").concat(vertical ? 'vertical' : 'horizontal', ".").concat(size))), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    var buttonProps = tslib_1.__assign(tslib_1.__assign({}, rest), { selected: selected, size: size });
    return (react_1.default.createElement(styled_1.StyledMenuItem, { className: "nk-menu-item", vertical: vertical, overrides: menuOverrides, ref: ref },
        react_1.default.createElement(styled_1.StyledButton, tslib_1.__assign({}, buttonProps, { vertical: vertical, align: align, selected: selected, onClick: (0, compose_event_handlers_1.composeEventHandlers)([handleClick, onClick]), "aria-expanded": isExpanded, "data-testid": "menu-sub-button", overrides: tslib_1.__assign({}, menuItemOverrides) }),
            title,
            react_1.default.createElement(IndicatorIcon, tslib_1.__assign({}, indicatorIconProps))),
        react_1.default.createElement(context_1.MenuContextProvider, { value: tslib_1.__assign(tslib_1.__assign({}, menuContext), { isSubMenu: true, parentSubMenuId: nestedId, align: align }) },
            react_1.default.createElement(styled_1.StyledUl, { expanded: isExpanded, size: size, vertical: vertical, overrides: overrides }, children))));
});
exports.MenuSub.displayName = 'MenuSub';
//# sourceMappingURL=menu-sub.js.map