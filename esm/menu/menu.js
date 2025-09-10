import { __assign, __rest } from "tslib";
import React, { useEffect, useRef, useState } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import { MenuContextProvider } from './context';
import { StyledMenu } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { getParentId, isDescendant } from './utils';
var getAlign = function (align, vertical) {
    if (!align) {
        return vertical ? 'start' : 'center';
    }
    return align;
};
var ThemelessMenu = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, _b = _a.vertical, vertical = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, passedAlign = _a.align, rest = __rest(_a, ["overrides", "children", "vertical", "size", "align"]);
    var align = getAlign(passedAlign, vertical);
    var _d = useState(null), expandedMenuSubId = _d[0], setExpandedMenuSubId = _d[1];
    var updateExpandedMenuSubId = function (id) {
        if (!id) {
            setExpandedMenuSubId(null);
        }
        else if (!expandedMenuSubId) {
            // no sub menu currently expanded
            setExpandedMenuSubId(id);
        }
        else if (expandedMenuSubId === id) {
            // the currently expanded sub menu has been clicked
            setExpandedMenuSubId(getParentId(id));
        }
        else if (isDescendant(id, expandedMenuSubId)) {
            // the parent of the currently expanded sub menu has been clicked
            setExpandedMenuSubId(getParentId(id));
        }
        else {
            // any other sub menu has been clicked
            setExpandedMenuSubId(id);
        }
    };
    var menuRef = useRef(null);
    useEffect(function () {
        document.addEventListener("click", function (_a) {
            var target = _a.target;
            if (menuRef.current &&
                !menuRef.current.contains(target) &&
                !vertical) {
                setExpandedMenuSubId(null);
            }
        });
    }, [vertical]);
    return (React.createElement(MenuContextProvider, { value: {
            vertical: vertical,
            size: size,
            align: align,
            overrides: overrides,
            updateExpandedMenuSubId: updateExpandedMenuSubId,
            expandedMenuSubId: expandedMenuSubId,
            parentSubMenuId: null,
        } },
        React.createElement(StyledMenu, __assign({ role: "navigation", "data-testid": "menu-container", overrides: overrides, vertical: vertical, ref: composeRefs(ref, menuRef) }, rest),
            React.createElement("ul", { role: "list" }, children))));
});
export var Menu = withOwnTheme(ThemelessMenu)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=menu.js.map