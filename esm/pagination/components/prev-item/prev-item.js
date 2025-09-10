import { __assign, __rest } from "tslib";
import React from 'react';
import { useTheme } from '../../../theme';
import { IconFilledChevronLeft } from '../../../icons';
import { usePaginationContext } from '../../context';
import { PaginationListItem } from '../list-item';
import { PaginationItem } from '../item/pagination-item';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getComponentOverrides } from '../../../utils/overrides';
var itemType = 'paginationItemPrev';
var DefaultIcon = function (props) { return (React.createElement(IconFilledChevronLeft, __assign({}, props))); };
export var PaginationPrevItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, eventContext = _a.eventContext, props = __rest(_a, ["children", "overrides", "eventContext"]);
    var theme = useTheme();
    var _b = usePaginationContext(), getPrevItemProps = _b.getPrevItemProps, 
    /* istanbul ignore next */
    _c = _b.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, buildHref = _b.buildHref, 
    /* istanbul ignore next */
    _d = _b.page, 
    /* istanbul ignore next */
    page = _d === void 0 ? 1 : _d;
    var PaginationIcon = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: __assign(__assign({}, theme.componentDefaults.paginationItemPrev[size]), filterOutFalsyProperties(overrides)),
    })[0];
    var propsFromContext = getPrevItemProps && getPrevItemProps(props);
    var prevPage = Math.max(page - 1, 1);
    var href = buildHref && buildHref(prevPage);
    return (React.createElement(PaginationListItem, { key: "prev" },
        React.createElement(PaginationItem
        // @ts-ignore
        , __assign({ 
            // @ts-ignore
            itemType: itemType, "data-testid": "pagination-prev-item", eventOriginator: "pagination-prev-item", eventContext: eventContext, pageNumber: prevPage }, propsFromContext, { overrides: overrides, ref: ref, href: href, size: size }),
            React.createElement(PaginationIcon, null),
            children)));
});
//# sourceMappingURL=prev-item.js.map