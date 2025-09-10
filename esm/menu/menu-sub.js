import { __assign, __rest } from "tslib";
import React, { useEffect } from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { MenuContextProvider, useMenuContext } from './context';
import { StyledButton, StyledMenuItem, StyledUl } from './styled';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { get } from '../utils/get';
import { useControlled } from '../utils/hooks';
import { composeEventHandlers } from '../utils/compose-event-handlers';
import { IconFilledExpandLess, IconFilledExpandMore } from '../icons';
import { getComponentOverrides } from '../utils/overrides';
import { buildNestedId, isDescendant } from './utils';
var DefaultIcon = function (_a) {
    var expanded = _a.expanded, overrides = _a.overrides;
    return expanded ? (React.createElement(IconFilledExpandLess, { overrides: __assign({ size: 'iconSize020' }, overrides) })) : (React.createElement(IconFilledExpandMore, { overrides: __assign({ size: 'iconSize020' }, overrides) }));
};
export var MenuSub = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, title = _a.title, selected = _a.selected, expandedProp = _a.expanded, _b = _a.defaultExpanded, defaultExpanded = _b === void 0 ? false : _b, onClick = _a.onClick, menuSubAlign = _a.align, rest = __rest(_a, ["overrides", "children", "title", "selected", "expanded", "defaultExpanded", "onClick", "align"]);
    var _c = useControlled({
        controlledValue: expandedProp,
        defaultValue: defaultExpanded,
    }), isExpanded = _c[0], setIsExpanded = _c[1];
    var menuContext = useMenuContext();
    var vertical = menuContext.vertical, size = menuContext.size, menuAlign = menuContext.align, menuOverrides = menuContext.overrides, isSubMenu = menuContext.isSubMenu, parentSubMenuId = menuContext.parentSubMenuId, updateExpandedMenuSubId = menuContext.updateExpandedMenuSubId, expandedMenuSubId = menuContext.expandedMenuSubId;
    var align = menuSubAlign || menuAlign;
    var id = useId();
    var nestedId = buildNestedId(id, parentSubMenuId);
    useEffect(function () {
        if (!expandedMenuSubId) {
            // all sub menus have been collapsed
            setIsExpanded(false);
        }
        else if (expandedMenuSubId === nestedId ||
            isDescendant(nestedId, expandedMenuSubId)) {
            // this sub menu or one of its descendants has been expanded
            setIsExpanded(true);
        }
        else if (isDescendant(expandedMenuSubId, nestedId)) {
            // this sub menu's ancestor is expanded
            setIsExpanded(false);
        }
        else if (!vertical) {
            // another sub menu elsewhere in the tree has been expanded
            setIsExpanded(false);
        }
    }, [vertical, nestedId, expandedMenuSubId, setIsExpanded]);
    var _d = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.indicatorIcon, DefaultIcon, {
        expanded: isExpanded,
    }), IndicatorIcon = _d[0], indicatorIconProps = _d[1];
    // Inform the parent context that this sub menu has been clicked.
    var handleClick = React.useCallback(function () {
        updateExpandedMenuSubId(nestedId);
    }, [nestedId, updateExpandedMenuSubId]);
    // Set the initial expanded state of this sub menu in the parent context.
    useEffect(function () {
        if (defaultExpanded) {
            updateExpandedMenuSubId(nestedId);
        }
    }, []);
    var theme = useTheme();
    var menuItemOverrides = __assign(__assign({}, get(theme.componentDefaults, "".concat(isSubMenu ? 'menuSubItem' : 'menuItem', ".").concat(vertical ? 'vertical' : 'horizontal', ".").concat(size))), filterOutFalsyProperties(overrides));
    var buttonProps = __assign(__assign({}, rest), { selected: selected, size: size });
    return (React.createElement(StyledMenuItem, { className: "nk-menu-item", vertical: vertical, overrides: menuOverrides, ref: ref },
        React.createElement(StyledButton, __assign({}, buttonProps, { vertical: vertical, align: align, selected: selected, onClick: composeEventHandlers([handleClick, onClick]), "aria-expanded": isExpanded, "data-testid": "menu-sub-button", overrides: __assign({}, menuItemOverrides) }),
            title,
            React.createElement(IndicatorIcon, __assign({}, indicatorIconProps))),
        React.createElement(MenuContextProvider, { value: __assign(__assign({}, menuContext), { isSubMenu: true, parentSubMenuId: nestedId, align: align }) },
            React.createElement(StyledUl, { expanded: isExpanded, size: size, vertical: vertical, overrides: overrides }, children))));
});
MenuSub.displayName = 'MenuSub';
//# sourceMappingURL=menu-sub.js.map