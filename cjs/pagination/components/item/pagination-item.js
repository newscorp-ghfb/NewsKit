"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var filter_object_1 = require("../../../utils/filter-object");
var theme_1 = require("../../../theme");
var utils_1 = require("../../utils");
var get_1 = require("../../../utils/get");
var overrides_1 = require("../../../utils/overrides");
var grid_layout_1 = require("../../../grid-layout");
var button_1 = require("../button");
var text_block_1 = require("../../../text-block");
exports.PaginationItem = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, selected = _a.selected, pageNumber = _a.pageNumber, lastPage = _a.lastPage, href = _a.href, onClick = _a.onClick, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.itemType, itemType = _c === void 0 ? 'paginationItem' : _c, 
    /* istanbul ignore next */
    _d = _a.size, 
    /* istanbul ignore next */
    size = _d === void 0 ? 'medium' : _d, changePage = _a.changePage, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, 
    /* istanbul ignore next */
    _f = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _f === void 0 ? 'pagination-item' : _f, rest = tslib_1.__rest(_a, ["children", "selected", "pageNumber", "lastPage", "href", "onClick", "overrides", "itemType", "size", "changePage", "eventContext", "eventOriginator"]);
    var buttonProps = tslib_1.__assign(tslib_1.__assign({}, rest), { 'data-testid': (0, get_1.get)(rest, 'data-testid') || 'pagination-item', pageNumber: pageNumber, selected: selected, size: size, href: href, onClick: onClick });
    var itemButton = overrides.itemButton, itemDescription = overrides.itemDescription;
    var theme = (0, theme_1.useTheme)();
    var itemTypeComponentDefaults = itemType !== 'paginationItem'
        ? theme.componentDefaults[itemType][size]
        : undefined;
    var buttonSettings = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.paginationItem[size]), itemTypeComponentDefaults), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    var textblockSettings = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.paginationItemNonInteractive[size]), (0, filter_object_1.filterOutFalsyProperties)(itemDescription));
    // Extract to utils
    var ariaProps = (0, utils_1.getPaginationItemAria)({
        itemType: itemType,
        pageNumber: pageNumber,
        selected: selected,
        disabled: buttonProps.disabled,
    });
    var combinedEventContext = href
        ? tslib_1.__assign(tslib_1.__assign({}, eventContext), { href: href }) : tslib_1.__assign(tslib_1.__assign({}, eventContext), { page: pageNumber });
    var combinedProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, buttonProps), ariaProps), { eventContext: combinedEventContext, eventOriginator: eventOriginator, overrides: buttonSettings, ref: ref });
    if (itemType !== 'paginationItemTruncation' &&
        (itemButton || itemDescription)) {
        var _g = (0, overrides_1.getComponentOverrides)(itemButton, button_1.PaginationButton, tslib_1.__assign(tslib_1.__assign({}, combinedProps), { lastPage: lastPage, changePage: changePage })), ItemButton = _g[0], itemButtonProps = _g[1];
        var _h = (0, overrides_1.getComponentOverrides)(itemDescription, text_block_1.TextBlock, textblockSettings), ItemDescription = _h[0], itemDescriptionProps = _h[1];
        return (react_1.default.createElement(grid_layout_1.GridLayout, { columns: "auto auto", rows: "1fr", autoFlow: "row", alignItems: "center", columnGap: "space010" },
            react_1.default.createElement(ItemButton, tslib_1.__assign({}, itemButtonProps), children),
            itemDescription && (react_1.default.createElement(ItemDescription, tslib_1.__assign({}, itemDescriptionProps, { selected: true, pageNumber: pageNumber, lastPage: lastPage })))));
    }
    // @ts-ignore - href must be allowed to be undefined so that Button renders as a link when appropriate
    return react_1.default.createElement(button_1.PaginationButton, tslib_1.__assign({}, combinedProps), children);
});
//# sourceMappingURL=pagination-item.js.map