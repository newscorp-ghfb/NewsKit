import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledListWrapper, StyledWrapper } from './styled';
import { Divider } from '../divider';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
export var StructuredListCell = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, React.Children.map(children, function (child) { return (React.createElement(StyledWrapper, null, child)); })));
};
var ThemelessStructuredList = function (_a) {
    var children = _a.children, ariaLabel = _a.ariaLabel, divider = _a.divider, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = __rest(_a, ["children", "ariaLabel", "divider", "overrides"]);
    var structuredListChildren = React.Children.toArray(children);
    return (React.createElement(StyledListWrapper, __assign({ overrides: overrides, "aria-label": ariaLabel }, props), structuredListChildren.reduce(function (acc, listItem, index, array) {
        acc.push(listItem);
        if (divider && index < array.length - 1) {
            acc.push(React.createElement("li", { "aria-hidden": "true", key: "divider-".concat(index || listItem.key) },
                React.createElement(Divider, { overrides: overrides.divider })));
        }
        return acc;
    }, [])));
};
export var StructuredList = withOwnTheme(ThemelessStructuredList)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=structured-list.js.map