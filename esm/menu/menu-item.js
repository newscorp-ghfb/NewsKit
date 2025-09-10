import { __assign, __rest } from "tslib";
import React from 'react';
import { useMenuContext } from './context';
import { StyledButton, StyledMenuItem } from './styled';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { get } from '../utils/get';
export var MenuItem = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, selected = _a.selected, _b = _a.eventContext, eventContext = _b === void 0 ? {} : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'menu-item' : _c, onClickProp = _a.onClick, rest = __rest(_a, ["overrides", "children", "selected", "eventContext", "eventOriginator", "onClick"]);
    var _d = useMenuContext(), vertical = _d.vertical, size = _d.size, align = _d.align, menuOverrides = _d.overrides, updateExpandedMenuSubId = _d.updateExpandedMenuSubId, isSubMenu = _d.isSubMenu;
    var onClick = function (e) {
        if (!vertical) {
            updateExpandedMenuSubId(null);
        }
        if (onClickProp) {
            onClickProp(e);
        }
    };
    var theme = useTheme();
    var menuItemOverrides = __assign(__assign({}, get(theme.componentDefaults, "".concat(isSubMenu ? 'menuSubItem' : 'menuItem', ".").concat(vertical ? 'vertical' : 'horizontal', ".").concat(size))), filterOutFalsyProperties(overrides));
    var buttonProps = __assign(__assign({}, rest), { selected: selected, size: size });
    return (React.createElement(StyledMenuItem, { className: "nk-menu-item", vertical: vertical, overrides: menuOverrides, ref: ref },
        React.createElement(StyledButton, __assign({}, buttonProps, { vertical: vertical, align: align, eventContext: __assign({ href: rest.href }, eventContext), eventOriginator: eventOriginator, overrides: __assign({}, menuItemOverrides), "aria-current": selected && 'page', onClick: onClick }), children)));
});
MenuItem.displayName = 'MenuItem';
//# sourceMappingURL=menu-item.js.map