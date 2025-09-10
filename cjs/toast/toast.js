"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var divider_1 = require("../divider");
var component_1 = require("../utils/component");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var a11y_1 = require("../utils/a11y");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var react_children_utilities_1 = require("../utils/react-children-utilities");
var logical_properties_1 = require("../utils/logical-properties");
var ThemelessToast = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, children = _a.children, icon = _a.icon, actions = _a.actions, title = _a.title, _c = _a.ariaLive, ariaLive = _c === void 0 ? 'polite' : _c, _d = _a.role, role = _d === void 0 ? 'status' : _d, restProps = tslib_1.__rest(_a, ["overrides", "children", "icon", "actions", "title", "ariaLive", "role"]);
    var theme = (0, theme_1.useTheme)();
    var dividerOverrides = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.toast.divider), (0, filter_object_1.filterOutFalsyProperties)(overrides.divider));
    var _e = (0, a11y_1.splitAriaProps)(restProps), aria = _e.aria, rest = _e.rest;
    var nonLogicalOverrides = (0, logical_properties_1.omitLogicalPropsFromOverrides)(overrides);
    return (react_1.default.createElement(styled_1.StyledToastContainer, tslib_1.__assign({ "data-testid": "toast-container", overrides: overrides, ref: ref }, rest),
        react_1.default.createElement(styled_1.StyledToastInnerContainer, null,
            icon && (react_1.default.createElement(styled_1.StyledIconContainer, { "aria-hidden": "true", overrides: nonLogicalOverrides }, icon)),
            react_1.default.createElement(styled_1.StyledContentContainer, tslib_1.__assign({ role: role, "aria-live": ariaLive }, aria, { overrides: nonLogicalOverrides, actions: actions }),
                title && (react_1.default.createElement(styled_1.StyledTitleContainer, { overrides: nonLogicalOverrides }, title)),
                react_1.default.createElement(styled_1.StyledMessageContainer, { overrides: nonLogicalOverrides, as: (0, react_children_utilities_1.childrenIsString)(children) ? 'p' : 'div' }, children))),
        actions && (react_1.default.createElement(styled_1.StyledDividerContainer, { overrides: nonLogicalOverrides },
            react_1.default.createElement(divider_1.Divider, { vertical: true, overrides: dividerOverrides }))),
        actions && (react_1.default.createElement(styled_1.StyledActionsContainer, null, (0, component_1.renderIfReactComponent)(actions)))));
});
exports.Toast = (0, with_own_theme_1.withOwnTheme)(ThemelessToast)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=toast.js.map