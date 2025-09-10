"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationLastItem = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var context_1 = require("../../context");
var list_item_1 = require("../list-item");
var pagination_item_1 = require("../item/pagination-item");
var filter_object_1 = require("../../../utils/filter-object");
var overrides_1 = require("../../../utils/overrides");
var itemType = 'paginationItemLast';
var DefaultIcon = function (props) { return (react_1.default.createElement(icons_1.IconFilledLastPage, tslib_1.__assign({}, props))); };
exports.PaginationLastItem = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, eventContext = _a.eventContext, props = tslib_1.__rest(_a, ["children", "overrides", "eventContext"]);
    var theme = (0, theme_1.useTheme)();
    var _b = (0, context_1.usePaginationContext)(), getLastItemProps = _b.getLastItemProps, 
    /* istanbul ignore next */
    _c = _b.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, buildHref = _b.buildHref, 
    /* istanbul ignore next */
    _d = _b.lastPage, 
    /* istanbul ignore next */
    lastPage = _d === void 0 ? 1 : _d;
    var PaginationIcon = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.paginationItemLast[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides)),
    })[0];
    var propsFromContext = getLastItemProps && getLastItemProps(props);
    var href = buildHref && buildHref(lastPage);
    return (react_1.default.createElement(list_item_1.PaginationListItem, { key: "last" },
        react_1.default.createElement(pagination_item_1.PaginationItem
        // @ts-ignore
        , tslib_1.__assign({ 
            // @ts-ignore
            itemType: itemType, "data-testid": "pagination-last-item", eventOriginator: "pagination-last-item", eventContext: eventContext, pageNumber: lastPage }, propsFromContext, { overrides: overrides, ref: ref, href: href, size: size }),
            children,
            react_1.default.createElement(PaginationIcon, null))));
});
//# sourceMappingURL=last-item.js.map