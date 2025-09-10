var _a;
import { __rest, __spreadArray } from "tslib";
export var OverrideProp;
(function (OverrideProp) {
    OverrideProp["Margin"] = "Margin";
    OverrideProp["ColumnGutter"] = "ColumnGutter";
    OverrideProp["RowGutter"] = "RowGutter";
    OverrideProp["Offset"] = "Offset";
    OverrideProp["Span"] = "";
})(OverrideProp || (OverrideProp = {}));
var propThemeMap = (_a = {},
    _a[OverrideProp.Margin] = 'containerMargin',
    _a[OverrideProp.ColumnGutter] = 'columnGutters',
    _a[OverrideProp.RowGutter] = 'rowGutters',
    // The following are not supported in component defaults
    _a[OverrideProp.Offset] = '',
    _a[OverrideProp.Span] = '',
    _a);
// The keys, i.e. the breakpoints we support, cannot be changed.
export var breakpointKeys = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
];
export var reverseBreakpointKeys = __spreadArray([], breakpointKeys, true).reverse();
export var getInheritedValue = function (prop, breakpoint, _a) {
    var theme = _a.theme, props = __rest(_a, ["theme"]);
    return breakpointKeys
        .slice(0, breakpointKeys.indexOf(breakpoint) + 1)
        .reverse()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(function (bkp) { return props["".concat(bkp).concat(prop)]; })
        .find(function (value) { return typeof value !== 'undefined'; });
};
export var getOverridableProp = function (prop, breakpoint, props) {
    var inheritedValue = getInheritedValue(prop, breakpoint, props);
    var themeKey = propThemeMap[prop];
    var theme = props.theme;
    var defaultToken = theme.componentDefaults.grid[themeKey][breakpoint];
    var tokenValue = (inheritedValue && theme.spacePresets[inheritedValue]) ||
        theme.spacePresets[defaultToken];
    return parseInt(tokenValue, 10);
};
//# sourceMappingURL=utils.js.map