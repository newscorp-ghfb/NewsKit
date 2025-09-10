import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, css } from '../utils/style';
import { getMediaQueryFromTheme } from '../utils/responsive-helpers';
import { GridContextProvider } from './context';
import { getOverridableProp, OverrideProp } from './utils';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
var generateBreakpointConfig = function (breakpoint) { return function (_a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    var halfColumnGutter = getOverridableProp(OverrideProp.ColumnGutter, breakpoint, __assign({ theme: theme }, props)) / 2;
    var rowGutter = getOverridableProp(OverrideProp.RowGutter, breakpoint, __assign({ theme: theme }, props));
    var containerMargin = getOverridableProp(OverrideProp.Margin, breakpoint, __assign({ theme: theme }, props));
    var sideMargin = containerMargin - halfColumnGutter;
    return (!Number.isNaN(halfColumnGutter) &&
        !Number.isNaN(rowGutter) &&
        !Number.isNaN(containerMargin) && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", " {\n        margin: -", "px ", "px 0 ", "px;\n      }\n    "], ["\n      ", " {\n        margin: -", "px ", "px 0 ", "px;\n      }\n    "])), getMediaQueryFromTheme(breakpoint)({ theme: theme }), rowGutter, sideMargin, sideMargin));
}; };
var StyledGridContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n"], ["\n  width: 100%;\n  max-width: ", ";\n  margin: 0 auto;\n"])), function (_a) {
    var theme = _a.theme, maxWidth = _a.maxWidth;
    return maxWidth || theme.componentDefaults.grid.maxWidth;
});
var StyledGrid = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), generateBreakpointConfig('xs'), generateBreakpointConfig('sm'), generateBreakpointConfig('md'), generateBreakpointConfig('lg'), generateBreakpointConfig('xl'));
var ThemelessGrid = function (_a) {
    var children = _a.children, maxWidth = _a.maxWidth, props = __rest(_a, ["children", "maxWidth"]);
    return (React.createElement(GridContextProvider, { value: props },
        React.createElement(StyledGridContainer, { maxWidth: maxWidth },
            React.createElement(StyledGrid, __assign({}, props), children))));
};
export var Grid = withOwnTheme(ThemelessGrid)({ defaults: defaults });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=grid.js.map