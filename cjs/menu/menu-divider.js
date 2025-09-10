"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDivider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var context_1 = require("./context");
var styled_1 = require("./styled");
var divider_1 = require("../divider");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
exports.MenuDivider = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides;
    var _b = (0, context_1.useMenuContext)(), vertical = _b.vertical, menuOverrides = _b.overrides;
    var theme = (0, theme_1.useTheme)();
    var dividerOverrides = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.menuDivider), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    return (react_1.default.createElement(styled_1.StyledMenuDivider, { role: "separator", "aria-hidden": "true", overrides: tslib_1.__assign(tslib_1.__assign({}, menuOverrides), overrides), vertical: vertical, ref: ref },
        react_1.default.createElement(divider_1.Divider, { vertical: !vertical, overrides: dividerOverrides })));
});
exports.MenuDivider.displayName = 'MenuDivider';
//# sourceMappingURL=menu-divider.js.map