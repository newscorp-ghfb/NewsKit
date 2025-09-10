import { __assign, __rest } from "tslib";
import React from 'react';
import { withOwnTheme } from '../utils/with-own-theme';
import { StyledListItem, StyledNav, StyledOrderedList } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { IconFilledChevronRight } from '../icons';
import { getComponentOverrides } from '../utils/overrides';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { useTheme } from '../theme';
var DefaultIcon = function (props) { return (React.createElement(IconFilledChevronRight, __assign({}, props))); };
var ThemelessBreadcrumbs = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.showTrailingSeparator, showTrailingSeparator = _b === void 0 ? false : _b, overrides = _a.overrides, _c = _a.size, size = _c === void 0 ? 'medium' : _c, rest = __rest(_a, ["children", "showTrailingSeparator", "overrides", "size"]);
    var theme = useTheme();
    var _d = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.separator, DefaultIcon, {
        overrides: __assign(__assign({}, theme.componentDefaults.breadcrumbs[size].separator), filterOutFalsyProperties(overrides === null || overrides === void 0 ? void 0 : overrides.separator)),
    }), BreadcrumbsIcon = _d[0], breadcrumbsIconProps = _d[1];
    var getBreadcrumbSeparator = function (index, arr) { return index < arr.length - 1 || showTrailingSeparator; };
    var breadcrumbChildren = React.Children.toArray(children);
    var breadcrumbElements = [];
    breadcrumbChildren.forEach(function (element, index) {
        // add breadcrumb element to the list
        breadcrumbElements.push(React.createElement(StyledListItem, { key: element.key }, React.cloneElement(element, {
            size: size,
        })));
        // add breadcrumb separator to the list
        if (getBreadcrumbSeparator(index, breadcrumbChildren)) {
            breadcrumbElements.push(React.createElement(StyledListItem, { key: "".concat(element.key, "-separator"), "aria-hidden": "true" },
                React.createElement(BreadcrumbsIcon, __assign({}, breadcrumbsIconProps))));
        }
    });
    return (React.createElement(StyledNav, __assign({ "aria-label": "breadcrumbs", "data-testid": "breadcrumb-container", ref: ref, showTrailingSeparator: showTrailingSeparator, overrides: overrides }, rest),
        React.createElement(StyledOrderedList, { size: size }, breadcrumbElements)));
});
export var Breadcrumbs = withOwnTheme(ThemelessBreadcrumbs)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=breadcrumbs.js.map