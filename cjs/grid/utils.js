"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverridableProp = exports.getInheritedValue = exports.reverseBreakpointKeys = exports.breakpointKeys = exports.OverrideProp = void 0;
var tslib_1 = require("tslib");
var OverrideProp;
(function (OverrideProp) {
    OverrideProp["Margin"] = "Margin";
    OverrideProp["ColumnGutter"] = "ColumnGutter";
    OverrideProp["RowGutter"] = "RowGutter";
    OverrideProp["Offset"] = "Offset";
    OverrideProp["Span"] = "";
})(OverrideProp = exports.OverrideProp || (exports.OverrideProp = {}));
var propThemeMap = (_a = {},
    _a[OverrideProp.Margin] = 'containerMargin',
    _a[OverrideProp.ColumnGutter] = 'columnGutters',
    _a[OverrideProp.RowGutter] = 'rowGutters',
    // The following are not supported in component defaults
    _a[OverrideProp.Offset] = '',
    _a[OverrideProp.Span] = '',
    _a);
// The keys, i.e. the breakpoints we support, cannot be changed.
exports.breakpointKeys = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
];
exports.reverseBreakpointKeys = tslib_1.__spreadArray([], exports.breakpointKeys, true).reverse();
var getInheritedValue = function (prop, breakpoint, _a) {
    var theme = _a.theme, props = tslib_1.__rest(_a, ["theme"]);
    return exports.breakpointKeys
        .slice(0, exports.breakpointKeys.indexOf(breakpoint) + 1)
        .reverse()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(function (bkp) { return props["".concat(bkp).concat(prop)]; })
        .find(function (value) { return typeof value !== 'undefined'; });
};
exports.getInheritedValue = getInheritedValue;
var getOverridableProp = function (prop, breakpoint, props) {
    var inheritedValue = (0, exports.getInheritedValue)(prop, breakpoint, props);
    var themeKey = propThemeMap[prop];
    var theme = props.theme;
    var defaultToken = theme.componentDefaults.grid[themeKey][breakpoint];
    var tokenValue = (inheritedValue && theme.spacePresets[inheritedValue]) ||
        theme.spacePresets[defaultToken];
    return parseInt(tokenValue, 10);
};
exports.getOverridableProp = getOverridableProp;
//# sourceMappingURL=utils.js.map