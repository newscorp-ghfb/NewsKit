import { __assign, __rest } from "tslib";
import React from 'react';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { useTheme } from '../../../theme';
import { getPaginationItemAria } from '../../utils';
import { get } from '../../../utils/get';
import { getComponentOverrides } from '../../../utils/overrides';
import { GridLayout } from '../../../grid-layout';
import { PaginationButton } from '../button';
import { TextBlock } from '../../../text-block';
export var PaginationItem = React.forwardRef(function (_a, ref) {
    var children = _a.children, selected = _a.selected, pageNumber = _a.pageNumber, lastPage = _a.lastPage, href = _a.href, onClick = _a.onClick, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.itemType, itemType = _c === void 0 ? 'paginationItem' : _c, 
    /* istanbul ignore next */
    _d = _a.size, 
    /* istanbul ignore next */
    size = _d === void 0 ? 'medium' : _d, changePage = _a.changePage, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, 
    /* istanbul ignore next */
    _f = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _f === void 0 ? 'pagination-item' : _f, rest = __rest(_a, ["children", "selected", "pageNumber", "lastPage", "href", "onClick", "overrides", "itemType", "size", "changePage", "eventContext", "eventOriginator"]);
    var buttonProps = __assign(__assign({}, rest), { 'data-testid': get(rest, 'data-testid') || 'pagination-item', pageNumber: pageNumber, selected: selected, size: size, href: href, onClick: onClick });
    var itemButton = overrides.itemButton, itemDescription = overrides.itemDescription;
    var theme = useTheme();
    var itemTypeComponentDefaults = itemType !== 'paginationItem'
        ? theme.componentDefaults[itemType][size]
        : undefined;
    var buttonSettings = __assign(__assign(__assign({}, theme.componentDefaults.paginationItem[size]), itemTypeComponentDefaults), filterOutFalsyProperties(overrides));
    var textblockSettings = __assign(__assign({}, theme.componentDefaults.paginationItemNonInteractive[size]), filterOutFalsyProperties(itemDescription));
    // Extract to utils
    var ariaProps = getPaginationItemAria({
        itemType: itemType,
        pageNumber: pageNumber,
        selected: selected,
        disabled: buttonProps.disabled,
    });
    var combinedEventContext = href
        ? __assign(__assign({}, eventContext), { href: href }) : __assign(__assign({}, eventContext), { page: pageNumber });
    var combinedProps = __assign(__assign(__assign({}, buttonProps), ariaProps), { eventContext: combinedEventContext, eventOriginator: eventOriginator, overrides: buttonSettings, ref: ref });
    if (itemType !== 'paginationItemTruncation' &&
        (itemButton || itemDescription)) {
        var _g = getComponentOverrides(itemButton, PaginationButton, __assign(__assign({}, combinedProps), { lastPage: lastPage, changePage: changePage })), ItemButton = _g[0], itemButtonProps = _g[1];
        var _h = getComponentOverrides(itemDescription, TextBlock, textblockSettings), ItemDescription = _h[0], itemDescriptionProps = _h[1];
        return (React.createElement(GridLayout, { columns: "auto auto", rows: "1fr", autoFlow: "row", alignItems: "center", columnGap: "space010" },
            React.createElement(ItemButton, __assign({}, itemButtonProps), children),
            itemDescription && (React.createElement(ItemDescription, __assign({}, itemDescriptionProps, { selected: true, pageNumber: pageNumber, lastPage: lastPage })))));
    }
    // @ts-ignore - href must be allowed to be undefined so that Button renders as a link when appropriate
    return React.createElement(PaginationButton, __assign({}, combinedProps), children);
});
//# sourceMappingURL=pagination-item.js.map