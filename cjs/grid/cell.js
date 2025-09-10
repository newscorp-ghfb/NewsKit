"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var style_1 = require("../utils/style");
var responsive_helpers_1 = require("../utils/responsive-helpers");
var context_1 = require("./context");
var utils_1 = require("./utils");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
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
    var prevCellCss = acc[utils_1.reverseBreakpointKeys[i + 1]];
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
    var cssObjects = utils_1.breakpointKeys.reduce(function (acc, breakpoint) {
        var cellCss = {};
        if (props["".concat(breakpoint, "Hidden")]) {
            cellCss.display = 'none';
        }
        else {
            // Get props/default values we need
            var halfColumnGutter = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.ColumnGutter, breakpoint, props) / 2;
            var rowGutter = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.RowGutter, breakpoint, props);
            var colOffset = parseInt((0, utils_1.getInheritedValue)(utils_1.OverrideProp.Offset, breakpoint, props) || '0', 10);
            var colSpan = (0, utils_1.getInheritedValue)(utils_1.OverrideProp.Span, breakpoint, props) || 1;
            // Common CSS
            cellCss.display = 'block';
            cellCss.order =
                props["".concat(breakpoint, "Order")] || undefined;
            cellCss.padding = halfColumnGutter ? "0 ".concat(halfColumnGutter, "px") : 0;
            cellCss.marginTop = rowGutter ? "".concat(rowGutter, "px") : 0;
            // Specific CSS to either numeric span or full-width
            if (colSpan === 'full-width') {
                // Full width (12 span and breaks out of margin) Cell
                var margin = (0, utils_1.getOverridableProp)(utils_1.OverrideProp.Margin, breakpoint, props);
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
    utils_1.reverseBreakpointKeys.reduce(cleanCss, cssObjects);
    // Render out each breakpoints (cleaned) CSS
    return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    ", ";\n  "], ["\n    ", ";\n  "])), utils_1.breakpointKeys.reduce(function (acc, k) {
        acc[(0, responsive_helpers_1.getMediaQueryFromTheme)(k)({ theme: theme })] = cssObjects[k];
        return acc;
    }, {}));
};
var StyledCell = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  flex: 1 0 auto;\n  ", ";\n"], ["\n  box-sizing: border-box;\n  background-clip: padding-box;\n  flex: 1 0 auto;\n  ", ";\n"])), generateBreakpointConfig);
var filterGridOverrides = function (gridOverrides) {
    var overrides = tslib_1.__assign({}, gridOverrides);
    delete overrides.className;
    return overrides;
};
var ThemelessCell = function (props) {
    var gridOverrides = (0, react_1.useContext)(context_1.GridContext);
    return react_1.default.createElement(StyledCell, tslib_1.__assign({}, filterGridOverrides(gridOverrides), props));
};
exports.Cell = (0, with_own_theme_1.withOwnTheme)(ThemelessCell)({ defaults: defaults_1.default });
var templateObject_1, templateObject_2;
//# sourceMappingURL=cell.js.map