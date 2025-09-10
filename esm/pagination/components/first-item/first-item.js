import { __assign, __rest } from "tslib";
import React from 'react';
import { useTheme } from '../../../theme';
import { IconFilledFirstPage } from '../../../icons';
import { usePaginationContext } from '../../context';
import { PaginationListItem } from '../list-item';
import { PaginationItem } from '../item/pagination-item';
import { getComponentOverrides } from '../../../utils/overrides';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
var itemType = 'paginationItemFirst';
var DefaultIcon = function (props) { return (React.createElement(IconFilledFirstPage, __assign({}, props))); };
export var PaginationFirstItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, eventContext = _a.eventContext, props = __rest(_a, ["children", "overrides", "eventContext"]);
    var theme = useTheme();
    var _b = usePaginationContext(), getFirstItemProps = _b.getFirstItemProps, 
    /* istanbul ignore next */
    _c = _b.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, buildHref = _b.buildHref;
    var PaginationIcon = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: __assign(__assign({}, theme.componentDefaults.paginationItemPrev[size]), filterOutFalsyProperties(overrides)),
    })[0];
    var propsFromContext = getFirstItemProps && getFirstItemProps(props);
    var href = buildHref && buildHref(1);
    return (React.createElement(PaginationListItem, { key: "first" },
        React.createElement(PaginationItem
        // @ts-ignore
        , __assign({ 
            // @ts-ignore
            itemType: itemType, "data-testid": "pagination-first-item", eventOriginator: "pagination-first-item", eventContext: eventContext, pageNumber: 1 }, propsFromContext, { overrides: overrides, ref: ref, href: href, size: size }),
            React.createElement(PaginationIcon, null),
            children)));
});
//# sourceMappingURL=first-item.js.map