"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var responsive_helpers_1 = require("../utils/responsive-helpers");
var context_1 = require("./context");
var utils_1 = require("./utils");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var generateBreakpointConfig = function (breakpoint) { return function (_a) {
    var theme = _a.theme, props = tslib_1.__rest(_a, ["theme"]);
    var halfColumnGutter = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.ColumnGutter, breakpoint, tslib_1.__assign({ theme: theme }, props)) / 2;
    var rowGutter = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.RowGutter, breakpoint, tslib_1.__assign({ theme: theme }, props));
    var containerMargin = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.Margin, breakpoint, tslib_1.__assign({ theme: theme }, props));
    var sideMargin = containerMargin - halfColumnGutter;
    return (!Number.isNaN(halfColumnGutter) &&
        !Number.isNaN(rowGutter) &&
        !Number.isNaN(containerMargin) && (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      ", " {\n        margin: -", "px ", "px 0 ", "px;\n      }\n    "], ["\n      ", " {\n        margin: -", "px ", "px 0 ", "px;\n      }\n    "])), (0, responsive_helpers_1.getMediaQueryFromTheme)(breakpoint)({ theme: theme }), rowGutter, sideMargin, sideMargin));
}; };
var StyledGridContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n"])), function (_a) {
    var theme = _a.theme, maxWidth = _a.maxWidth;
    return maxWidth || theme.componentDefaults.grid.maxWidth;
});
var StyledGrid = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig('xs'), generateBreakpointConfig('sm'), generateBreakpointConfig('md'), generateBreakpointConfig('lg'), generateBreakpointConfig('xl'));
var ThemelessGrid = function (_a) {
    var children = _a.children, maxWidth = _a.maxWidth, props = tslib_1.__rest(_a, ["children", "maxWidth"]);
    return (react_1.default.createElement(context_1.GridContextProvider, { value: props },
        react_1.default.createElement(StyledGridContainer, { maxWidth: maxWidth },
            react_1.default.createElement(StyledGrid, tslib_1.__assign({}, props), children))));
};
exports.Grid = (0, with_own_theme_1.withOwnTheme)(ThemelessGrid)({ defaults: defaults_1.default });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=grid.js.map