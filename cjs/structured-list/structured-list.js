"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructuredList = exports.StructuredListCell = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var divider_1 = require("../divider");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var StructuredListCell = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.Children.map(children, function (child) { return (react_1.default.createElement(styled_1.StyledWrapper, null, child)); })));
};
exports.StructuredListCell = StructuredListCell;
var ThemelessStructuredList = function (_a) {
    var children = _a.children, ariaLabel = _a.ariaLabel, divider = _a.divider, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = tslib_1.__rest(_a, ["children", "ariaLabel", "divider", "overrides"]);
    var structuredListChildren = react_1.default.Children.toArray(children);
    return (react_1.default.createElement(styled_1.StyledListWrapper, tslib_1.__assign({ overrides: overrides, "aria-label": ariaLabel }, props), structuredListChildren.reduce(function (acc, listItem, index, array) {
        acc.push(listItem);
        if (divider && index < array.length - 1) {
            acc.push(react_1.default.createElement("li", { "aria-hidden": "true", key: "divider-".concat(index || listItem.key) },
                react_1.default.createElement(divider_1.Divider, { overrides: overrides.divider })));
        }
        return acc;
    }, [])));
};
exports.StructuredList = (0, with_own_theme_1.withOwnTheme)(ThemelessStructuredList)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=structured-list.js.map