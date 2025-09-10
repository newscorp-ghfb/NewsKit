import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledButton } from './styled';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { useTheme } from '../theme';
export var BreadcrumbItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, selected = _a.selected, href = _a.href, overrides = _a.overrides, 
    /* istanbul ignore next */
    _b = _a.size, 
    /* istanbul ignore next */
    size = _b === void 0 ? 'medium' : _b, _c = _a.eventContext, eventContext = _c === void 0 ? {} : _c, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'breadcrumb-item' : _d, rest = __rest(_a, ["children", "selected", "href", "overrides", "size", "eventContext", "eventOriginator"]);
    var buttonProps = __assign(__assign({}, rest), { selected: selected, size: size });
    var theme = useTheme();
    var buttonSettings = __assign(__assign({}, theme.componentDefaults.breadcrumbItem[size]), filterOutFalsyProperties(overrides));
    return (React.createElement(StyledButton, __assign({}, buttonProps, { href: href, eventContext: __assign({ href: href }, eventContext), eventOriginator: eventOriginator, overrides: __assign(__assign({}, buttonSettings), { width: 'auto' }), "aria-current": selected && 'page', ref: ref }), children));
});
//# sourceMappingURL=breadcrumb-item.js.map