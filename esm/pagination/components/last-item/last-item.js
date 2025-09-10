import { __assign, __rest } from "tslib";
import React from 'react';
import { useTheme } from '../../../theme';
import { IconFilledLastPage } from '../../../icons';
import { usePaginationContext } from '../../context';
import { PaginationListItem } from '../list-item';
import { PaginationItem } from '../item/pagination-item';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getComponentOverrides } from '../../../utils/overrides';
var itemType = 'paginationItemLast';
var DefaultIcon = function (props) { return (React.createElement(IconFilledLastPage, __assign({}, props))); };
export var PaginationLastItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, eventContext = _a.eventContext, props = __rest(_a, ["children", "overrides", "eventContext"]);
    var theme = useTheme();
    var _b = usePaginationContext(), getLastItemProps = _b.getLastItemProps, 
    /* istanbul ignore next */
    _c = _b.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, buildHref = _b.buildHref, 
    /* istanbul ignore next */
    _d = _b.lastPage, 
    /* istanbul ignore next */
    lastPage = _d === void 0 ? 1 : _d;
    var PaginationIcon = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: __assign(__assign({}, theme.componentDefaults.paginationItemLast[size]), filterOutFalsyProperties(overrides)),
    })[0];
    var propsFromContext = getLastItemProps && getLastItemProps(props);
    var href = buildHref && buildHref(lastPage);
    return (React.createElement(PaginationListItem, { key: "last" },
        React.createElement(PaginationItem
        // @ts-ignore
        , __assign({ 
            // @ts-ignore
            itemType: itemType, "data-testid": "pagination-last-item", eventOriginator: "pagination-last-item", eventContext: eventContext, pageNumber: lastPage }, propsFromContext, { overrides: overrides, ref: ref, href: href, size: size }),
            children,
            React.createElement(PaginationIcon, null))));
});
//# sourceMappingURL=last-item.js.map