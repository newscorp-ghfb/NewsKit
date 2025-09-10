"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationItems = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var filter_object_1 = require("../../../utils/filter-object");
var theme_1 = require("../../../theme");
var icons_1 = require("../../../icons");
var overrides_1 = require("../../../utils/overrides");
var item_1 = require("../item");
var context_1 = require("../../context");
var utils_1 = require("../../utils");
var list_item_1 = require("../list-item");
var paginationItemTruncation = 'paginationItemTruncation';
var DefaultIcon = function (props) { return (react_1.default.createElement(icons_1.IconFilledMoreHoriz, tslib_1.__assign({}, props))); };
/* This has deliberately been designed as a stateless component that gets all the props passed in
   for ease of overriding. This component is not meant to be used by a developer, just by
   PaginationItems, as that has access to all the state that needs passing in */
var PaginationItems = function (_a) {
    var children = _a.children, overrides = _a.overrides, _b = _a.truncation, truncation = _b === void 0 ? true : _b, _c = _a.siblings, siblings = _c === void 0 ? 3 : _c, _d = _a.boundaries, boundaries = _d === void 0 ? 1 : _d, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, 
    /* istanbul ignore next */
    _f = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _f === void 0 ? 'pagination-item' : _f;
    var theme = (0, theme_1.useTheme)();
    var _g = (0, context_1.usePaginationContext)(), 
    /* istanbul ignore next */
    _h = _g.size, 
    /* istanbul ignore next */
    size = _h === void 0 ? 'medium' : _h, buildHref = _g.buildHref, 
    /* istanbul ignore next */
    _j = _g.changePage, 
    /* istanbul ignore next */
    changePage = _j === void 0 ? function () { } : _j, page = _g.page, lastPage = _g.lastPage, pageSize = _g.pageSize, totalItems = _g.totalItems;
    var _k = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.icon, DefaultIcon, {
        overrides: tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.paginationItemTruncation[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides === null || overrides === void 0 ? void 0 : overrides.icon)),
    }), PaginationIcon = _k[0], paginationIconProps = _k[1];
    var paginationElements = [];
    if (page && lastPage) {
        var layout = (0, utils_1.getPaginationItemsLayout)({
            page: page,
            lastPage: lastPage,
            truncation: truncation,
            siblings: siblings,
            boundaries: boundaries,
        });
        // These are passed through to the PaginationItem in case overrides.itemButton is set,
        // as custom components will need the full context
        var staticProps_1 = {
            lastPage: lastPage,
            pageSize: pageSize,
            totalItems: totalItems,
            changePage: changePage,
        };
        var truncationCount_1 = 0;
        /* istanbul ignore next */
        layout.forEach(function (element) {
            if (element === void 0) { element = 1; }
            switch (element) {
                case '-':
                    truncationCount_1 += 1;
                    paginationElements.push(react_1.default.createElement(list_item_1.PaginationListItem, { key: "trunc".concat(truncationCount_1), "aria-hidden": "true" },
                        react_1.default.createElement(item_1.PaginationItem, tslib_1.__assign({ itemType: paginationItemTruncation, "datatest-id": "pagination-item-truncation".concat(truncationCount_1), size: size, disabled: true, overrides: overrides }, staticProps_1),
                            "[",
                            react_1.default.createElement(PaginationIcon, tslib_1.__assign({}, paginationIconProps)),
                            "]")));
                    break;
                default:
                    {
                        var pageNumber_1 = element;
                        var href = buildHref && buildHref(pageNumber_1);
                        paginationElements.push(react_1.default.createElement(list_item_1.PaginationListItem, { key: "page".concat(pageNumber_1) },
                            react_1.default.createElement(item_1.PaginationItem, tslib_1.__assign({ href: href, onClick: function () { return changePage(pageNumber_1); }, selected: pageNumber_1 === page, eventContext: eventContext, eventOriginator: eventOriginator, size: size, overrides: overrides, pageNumber: pageNumber_1 }, staticProps_1), children || pageNumber_1)));
                    }
                    break;
            }
        });
    }
    return react_1.default.createElement(react_1.default.Fragment, null, paginationElements);
};
exports.PaginationItems = PaginationItems;
//# sourceMappingURL=pagination-items.js.map