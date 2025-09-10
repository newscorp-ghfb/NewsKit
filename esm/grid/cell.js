import { __assign, __makeTemplateObject } from "tslib";
import React, { useContext } from 'react';
import { styled, css } from '../utils/style';
import { getMediaQueryFromTheme } from '../utils/responsive-helpers';
import { GridContext } from './context';
import { breakpointKeys, getInheritedValue, getOverridableProp, OverrideProp, reverseBreakpointKeys, } from './utils';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
var cleanCss = function (acc, breakpoint, i) {
    var cellCss = acc[breakpoint];
    // If we are on XS breakpoint then remove unneeded 0's etc
    if (breakpoint === 'xs') {
        if (cellCss.display === 'block') {
            delete cellCss.display;
        }
        ['padding', 'marginTop', 'marginLeft'].forEach(function (k) {
            if (cellCss[k] === 0) {
                delete cellCss[k];
            }
        });
        return acc;
    }
    // On XL to SM, remove properties which will be inherited
    // e.g. if padding css is rendered at MD, we dont need to render it out at LG and XL if unchanged.
    var prevCellCss = acc[reverseBreakpointKeys[i + 1]];
    [
        'display',
        'order',
        'padding',
        'flexBasis',
        'maxWidth',
        'marginTop',
        'marginLeft',
    ].forEach(function (k) {
        if (cellCss[k] === prevCellCss[k]) {
            delete cellCss[k];
        }
    });
    return acc;
};
var generateBreakpointConfig = function (props) {
    var theme = props.theme;
    // Generate the CSS for each breakpoint
    var cssObjects = breakpointKeys.reduce(function (acc, breakpoint) {
        var cellCss = {};
        if (props["".concat(breakpoint, "Hidden")]) {
            cellCss.display = 'none';
        }
        else {
            // Get props/default values we need
            var halfColumnGutter = getOverridableProp(OverrideProp.ColumnGutter, breakpoint, props) / 2;
            var rowGutter = getOverridableProp(OverrideProp.RowGutter, breakpoint, props);
            var colOffset = parseInt(getInheritedValue(OverrideProp.Offset, breakpoint, props) || '0', 10);
            var colSpan = getInheritedValue(OverrideProp.Span, breakpoint, props) || 1;
            // Common CSS
            cellCss.display = 'block';
            cellCss.order =
                props["".concat(breakpoint, "Order")] || undefined;
            cellCss.padding = halfColumnGutter ? "0 ".concat(halfColumnGutter, "px") : 0;
            cellCss.marginTop = rowGutter ? "".concat(rowGutter, "px") : 0;
            // Specific CSS to either numeric span or full-width
            if (colSpan === 'full-width') {
                // Full width (12 span and breaks out of margin) Cell
                var margin = getOverridableProp(OverrideProp.Margin, breakpoint, props);
                cellCss.flexBasis = "calc(100% + ".concat(margin * 2, "px)");
                cellCss.maxWidth = "calc(100% + ".concat(margin * 2, "px)");
                cellCss.marginLeft = margin ? "-".concat(margin, "px") : 0;
            }
            else {
                // Standard 1-12 column spanning Cell
                var colWidth = 100 / theme.componentDefaults.grid.columns;
                var width = +colSpan * colWidth;
                var offsetColumnGutter = colOffset * colWidth;
                cellCss.marginLeft =
                    offsetColumnGutter > 0 ? "".concat(offsetColumnGutter, "%;") : 0;
                cellCss.flexBasis = "".concat(width, "%");
                cellCss.maxWidth = "".concat(width, "%");
            }
        }
        acc[breakpoint] = cellCss;
        return acc;
    }, {});
    // Filter out unneeded CSS, working down from XL
    reverseBreakpointKeys.reduce(cleanCss, cssObjects);
    // Render out each breakpoints (cleaned) CSS
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), breakpointKeys.reduce(function (acc, k) {
        acc[getMediaQueryFromTheme(k)({ theme: theme })] = cssObjects[k];
        return acc;
    }, {}));
};
var StyledCell = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  flex: 1 0 auto;\n  ", ";\n"], ["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  flex: 1 0 auto;\n  ", ";\n"])), generateBreakpointConfig);
var filterGridOverrides = function (gridOverrides) {
    var overrides = __assign({}, gridOverrides);
    delete overrides.className;
    return overrides;
};
var ThemelessCell = function (props) {
    var gridOverrides = useContext(GridContext);
    return React.createElement(StyledCell, __assign({}, filterGridOverrides(gridOverrides), props));
};
export var Cell = withOwnTheme(ThemelessCell)({ defaults: defaults });
var templateObject_1, templateObject_2;
//# sourceMappingURL=cell.js.map