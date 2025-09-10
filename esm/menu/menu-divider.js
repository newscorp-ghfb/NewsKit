import { __assign } from "tslib";
import React from 'react';
import { useMenuContext } from './context';
import { StyledMenuDivider } from './styled';
import { Divider } from '../divider';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
export var MenuDivider = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides;
    var _b = useMenuContext(), vertical = _b.vertical, menuOverrides = _b.overrides;
    var theme = useTheme();
    var dividerOverrides = __assign(__assign({}, theme.componentDefaults.menuDivider), filterOutFalsyProperties(overrides));
    return (React.createElement(StyledMenuDivider, { role: "separator", "aria-hidden": "true", overrides: __assign(__assign({}, menuOverrides), overrides), vertical: vertical, ref: ref },
        React.createElement(Divider, { vertical: !vertical, overrides: dividerOverrides })));
});
MenuDivider.displayName = 'MenuDivider';
//# sourceMappingURL=menu-divider.js.map