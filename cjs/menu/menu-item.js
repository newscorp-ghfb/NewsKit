"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var context_1 = require("./context");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var get_1 = require("../utils/get");
exports.MenuItem = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, selected = _a.selected, _b = _a.eventContext, eventContext = _b === void 0 ? {} : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'menu-item' : _c, onClickProp = _a.onClick, rest = tslib_1.__rest(_a, ["overrides", "children", "selected", "eventContext", "eventOriginator", "onClick"]);
    var _d = (0, context_1.useMenuContext)(), vertical = _d.vertical, size = _d.size, align = _d.align, menuOverrides = _d.overrides, updateExpandedMenuSubId = _d.updateExpandedMenuSubId, isSubMenu = _d.isSubMenu;
    var onClick = function (e) {
        if (!vertical) {
            updateExpandedMenuSubId(null);
        }
        if (onClickProp) {
            onClickProp(e);
        }
    };
    var theme = (0, theme_1.useTheme)();
    var menuItemOverrides = tslib_1.__assign(tslib_1.__assign({}, (0, get_1.get)(theme.componentDefaults, "".concat(isSubMenu ? 'menuSubItem' : 'menuItem', ".").concat(vertical ? 'vertical' : 'horizontal', ".").concat(size))), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    var buttonProps = tslib_1.__assign(tslib_1.__assign({}, rest), { selected: selected, size: size });
    return (react_1.default.createElement(styled_1.StyledMenuItem, { className: "nk-menu-item", vertical: vertical, overrides: menuOverrides, ref: ref },
        react_1.default.createElement(styled_1.StyledButton, tslib_1.__assign({}, buttonProps, { vertical: vertical, align: align, eventContext: tslib_1.__assign({ href: rest.href }, eventContext), eventOriginator: eventOriginator, overrides: tslib_1.__assign({}, menuItemOverrides), "aria-current": selected && 'page', onClick: onClick }), children)));
});
exports.MenuItem.displayName = 'MenuItem';
//# sourceMappingURL=menu-item.js.map