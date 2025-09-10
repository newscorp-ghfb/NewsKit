import { __assign, __rest } from "tslib";
import React from 'react';
import { useTheme } from '../../../theme';
import { IconFilledChevronRight } from '../../../icons';
import { usePaginationContext } from '../../context';
import { PaginationListItem } from '../list-item';
import { PaginationItem } from '../item/pagination-item';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getComponentOverrides } from '../../../utils/overrides';
var itemType = 'paginationItemNext';
var DefaultIcon = function (props) { return (React.createElement(IconFilledChevronRight, __assign({}, props))); };
export var PaginationNextItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, eventContext = _a.eventContext, props = __rest(_a, ["children", "overrides", "eventContext"]);
    var theme = useTheme();
    var _b = usePaginationContext(), getNextItemProps = _b.getNextItemProps, 
    /* istanbul ignore next */
    _c = _b.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, buildHref = _b.buildHref, 
    /* istanbul ignore next */
    _d = _b.page, 
    /* istanbul ignore next */
    page = _d === void 0 ? 1 : _d, 
    /* istanbul ignore next */
    _e = _b.lastPage, 
    /* istanbul ignore next */
    lastPage = _e === void 0 ? 1 : _e;
    var PaginationIcon = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: __assign(__assign({}, theme.componentDefaults.paginationItemNext[size]), filterOutFalsyProperties(overrides)),
    })[0];
    var propsFromContext = getNextItemProps && getNextItemProps(props);
    var nextPage = Math.min(page + 1, lastPage);
    var href = buildHref && buildHref(nextPage);
    return (React.createElement(PaginationListItem, { key: "next" },
        React.createElement(PaginationItem
        // @ts-ignore
        , __assign({ 
            // @ts-ignore
            itemType: itemType, "data-testid": "pagination-next-item", eventOriginator: "pagination-next-item", eventContext: eventContext, pageNumber: nextPage }, propsFromContext, { overrides: overrides, ref: ref, href: href, size: size }),
            children,
            React.createElement(PaginationIcon, null))));
});
//# sourceMappingURL=next-item.js.map