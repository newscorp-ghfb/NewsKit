"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var with_own_theme_1 = require("../utils/with-own-theme");
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var context_1 = require("./context");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var utils_1 = require("../utils");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var ThemelessPagination = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, pageSize = _a.pageSize, pageProp = _a.page, // undefined if uncontrolled externally
    _c = _a.defaultPage, // undefined if uncontrolled externally
    defaultPage = _c === void 0 ? 1 : _c, totalItems = _a.totalItems, buildHref = _a.buildHref, onPageChange = _a.onPageChange, overrides = _a.overrides, rest = tslib_1.__rest(_a, ["children", "size", "pageSize", "page", "defaultPage", "totalItems", "buildHref", "onPageChange", "overrides"]);
    // Only warn once (on component mount)
    (0, react_1.useEffect)(function () {
        if (process.env.NODE_ENV !== 'production' &&
            Boolean(buildHref) === Boolean(onPageChange)) {
            // eslint-disable-next-line no-console
            console.warn('Pagination must have either buildHref OR onPageChange set.');
        }
    });
    /* istanbul ignore next */
    var _d = (0, utils_1.useControlled)({
        defaultValue: defaultPage,
        controlledValue: pageProp,
    }), _e = _d[0], page = _e === void 0 ? 1 : _e, setPage = _d[1];
    var lastPage = Math.ceil(totalItems / pageSize);
    var changePage = (0, react_1.useCallback)(function (pageNumber) {
        setPage(pageNumber);
        if (onPageChange) {
            onPageChange(pageNumber);
        }
    }, [setPage, onPageChange]);
    var getFirstItemProps = (0, react_1.useCallback)(function (_a) {
        var getterProps = tslib_1.__rest(_a, []);
        return (tslib_1.__assign(tslib_1.__assign({ disabled: page < 2 }, getterProps), { onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                function () { return changePage(1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage]);
    var getPrevItemProps = (0, react_1.useCallback)(function (_a) {
        var getterProps = tslib_1.__rest(_a, []);
        return (tslib_1.__assign(tslib_1.__assign({ disabled: page < 2 }, getterProps), { onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                function () { return changePage(page - 1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage]);
    var getNextItemProps = (0, react_1.useCallback)(function (_a) {
        var getterProps = tslib_1.__rest(_a, []);
        return (tslib_1.__assign(tslib_1.__assign({ disabled: page >= lastPage }, getterProps), { onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                function () { return changePage(page + 1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage, lastPage]);
    var getLastItemProps = (0, react_1.useCallback)(function (_a) {
        var getterProps = tslib_1.__rest(_a, []);
        return (tslib_1.__assign(tslib_1.__assign({ disabled: page >= lastPage }, getterProps), { onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                function () { return changePage(lastPage); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage, lastPage]);
    var value = (0, react_1.useMemo)(function () { return ({
        size: size,
        pageSize: pageSize,
        totalItems: totalItems,
        defaultPage: defaultPage,
        page: page,
        lastPage: lastPage,
        changePage: changePage,
        buildHref: buildHref,
        getFirstItemProps: getFirstItemProps,
        getPrevItemProps: getPrevItemProps,
        getNextItemProps: getNextItemProps,
        getLastItemProps: getLastItemProps,
    }); }, [
        size,
        pageSize,
        totalItems,
        defaultPage,
        page,
        lastPage,
        changePage,
        buildHref,
        getFirstItemProps,
        getPrevItemProps,
        getNextItemProps,
        getLastItemProps,
    ]);
    var gapToken = (0, get_token_1.getToken)({ theme: (0, theme_1.useTheme)(), overrides: overrides }, "pagination.".concat(size), '', 'gap');
    return (react_1.default.createElement(context_1.PaginationProvider, { value: value },
        react_1.default.createElement(styled_1.StyledNav, tslib_1.__assign({ size: size, "aria-label": "pagination", "data-testid": "pagination-container", ref: ref, overrides: overrides }, rest),
            react_1.default.createElement(styled_1.StyledUnorderedList, { as: "ul", autoFlow: "column", autoColumns: "auto", columns: "auto", inline: true, justifyContent: "start", alignItems: "center", columnGap: gapToken }, children))));
});
exports.Pagination = (0, with_own_theme_1.withOwnTheme)(ThemelessPagination)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=pagination.js.map