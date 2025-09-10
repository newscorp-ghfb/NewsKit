"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var context_1 = require("./context");
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var utils_1 = require("./utils");
var getAlign = function (align, vertical) {
    if (!align) {
        return vertical ? 'start' : 'center';
    }
    return align;
};
var ThemelessMenu = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, _b = _a.vertical, vertical = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, passedAlign = _a.align, rest = tslib_1.__rest(_a, ["overrides", "children", "vertical", "size", "align"]);
    var align = getAlign(passedAlign, vertical);
    var _d = (0, react_1.useState)(null), expandedMenuSubId = _d[0], setExpandedMenuSubId = _d[1];
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
            setExpandedMenuSubId((0, utils_1.getParentId)(id));
        }
        else if ((0, utils_1.isDescendant)(id, expandedMenuSubId)) {
            // the parent of the currently expanded sub menu has been clicked
            setExpandedMenuSubId((0, utils_1.getParentId)(id));
        }
        else {
            // any other sub menu has been clicked
            setExpandedMenuSubId(id);
        }
    };
    var menuRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        document.addEventListener("click", function (_a) {
            var target = _a.target;
            if (menuRef.current &&
                !menuRef.current.contains(target) &&
                !vertical) {
                setExpandedMenuSubId(null);
            }
        });
    }, [vertical]);
    return (react_1.default.createElement(context_1.MenuContextProvider, { value: {
            vertical: vertical,
            size: size,
            align: align,
            overrides: overrides,
            updateExpandedMenuSubId: updateExpandedMenuSubId,
            expandedMenuSubId: expandedMenuSubId,
            parentSubMenuId: null,
        } },
        react_1.default.createElement(styled_1.StyledMenu, tslib_1.__assign({ role: "navigation", "data-testid": "menu-container", overrides: overrides, vertical: vertical, ref: (0, compose_react_refs_1.default)(ref, menuRef) }, rest),
            react_1.default.createElement("ul", { role: "list" }, children))));
});
exports.Menu = (0, with_own_theme_1.withOwnTheme)(ThemelessMenu)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=menu.js.map