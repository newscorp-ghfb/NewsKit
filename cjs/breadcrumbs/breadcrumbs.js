"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumbs = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var with_own_theme_1 = require("../utils/with-own-theme");
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var icons_1 = require("../icons");
var overrides_1 = require("../utils/overrides");
var filter_object_1 = require("../utils/filter-object");
var theme_1 = require("../theme");
var DefaultIcon = function (props) { return (react_1.default.createElement(icons_1.IconFilledChevronRight, tslib_1.__assign({}, props))); };
var ThemelessBreadcrumbs = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.showTrailingSeparator, showTrailingSeparator = _b === void 0 ? false : _b, overrides = _a.overrides, _c = _a.size, size = _c === void 0 ? 'medium' : _c, rest = tslib_1.__rest(_a, ["children", "showTrailingSeparator", "overrides", "size"]);
    var theme = (0, theme_1.useTheme)();
    var _d = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.separator, DefaultIcon, {
        overrides: tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.breadcrumbs[size].separator), (0, filter_object_1.filterOutFalsyProperties)(overrides === null || overrides === void 0 ? void 0 : overrides.separator)),
    }), BreadcrumbsIcon = _d[0], breadcrumbsIconProps = _d[1];
    var getBreadcrumbSeparator = function (index, arr) { return index < arr.length - 1 || showTrailingSeparator; };
    var breadcrumbChildren = react_1.default.Children.toArray(children);
    var breadcrumbElements = [];
    breadcrumbChildren.forEach(function (element, index) {
        // add breadcrumb element to the list
        breadcrumbElements.push(react_1.default.createElement(styled_1.StyledListItem, { key: element.key }, react_1.default.cloneElement(element, {
            size: size,
        })));
        // add breadcrumb separator to the list
        if (getBreadcrumbSeparator(index, breadcrumbChildren)) {
            breadcrumbElements.push(react_1.default.createElement(styled_1.StyledListItem, { key: "".concat(element.key, "-separator"), "aria-hidden": "true" },
                react_1.default.createElement(BreadcrumbsIcon, tslib_1.__assign({}, breadcrumbsIconProps))));
        }
    });
    return (react_1.default.createElement(styled_1.StyledNav, tslib_1.__assign({ "aria-label": "breadcrumbs", "data-testid": "breadcrumb-container", ref: ref, showTrailingSeparator: showTrailingSeparator, overrides: overrides }, rest),
        react_1.default.createElement(styled_1.StyledOrderedList, { size: size }, breadcrumbElements)));
});
exports.Breadcrumbs = (0, with_own_theme_1.withOwnTheme)(ThemelessBreadcrumbs)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=breadcrumbs.js.map