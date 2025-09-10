import { __assign, __rest } from "tslib";
import React, { useCallback, useEffect, useMemo } from 'react';
import { withOwnTheme } from '../utils/with-own-theme';
import { StyledNav, StyledUnorderedList } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { PaginationProvider } from './context';
import { composeEventHandlers } from '../utils/compose-event-handlers';
import { useControlled } from '../utils';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
var ThemelessPagination = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 'medium' : _b, pageSize = _a.pageSize, pageProp = _a.page, // undefined if uncontrolled externally
    _c = _a.defaultPage, // undefined if uncontrolled externally
    defaultPage = _c === void 0 ? 1 : _c, totalItems = _a.totalItems, buildHref = _a.buildHref, onPageChange = _a.onPageChange, overrides = _a.overrides, rest = __rest(_a, ["children", "size", "pageSize", "page", "defaultPage", "totalItems", "buildHref", "onPageChange", "overrides"]);
    // Only warn once (on component mount)
    useEffect(function () {
        if (process.env.NODE_ENV !== 'production' &&
            Boolean(buildHref) === Boolean(onPageChange)) {
            // eslint-disable-next-line no-console
            console.warn('Pagination must have either buildHref OR onPageChange set.');
        }
    });
    /* istanbul ignore next */
    var _d = useControlled({
        defaultValue: defaultPage,
        controlledValue: pageProp,
    }), _e = _d[0], page = _e === void 0 ? 1 : _e, setPage = _d[1];
    var lastPage = Math.ceil(totalItems / pageSize);
    var changePage = useCallback(function (pageNumber) {
        setPage(pageNumber);
        if (onPageChange) {
            onPageChange(pageNumber);
        }
    }, [setPage, onPageChange]);
    var getFirstItemProps = useCallback(function (_a) {
        var getterProps = __rest(_a, []);
        return (__assign(__assign({ disabled: page < 2 }, getterProps), { onClick: composeEventHandlers([
                function () { return changePage(1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage]);
    var getPrevItemProps = useCallback(function (_a) {
        var getterProps = __rest(_a, []);
        return (__assign(__assign({ disabled: page < 2 }, getterProps), { onClick: composeEventHandlers([
                function () { return changePage(page - 1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage]);
    var getNextItemProps = useCallback(function (_a) {
        var getterProps = __rest(_a, []);
        return (__assign(__assign({ disabled: page >= lastPage }, getterProps), { onClick: composeEventHandlers([
                function () { return changePage(page + 1); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage, lastPage]);
    var getLastItemProps = useCallback(function (_a) {
        var getterProps = __rest(_a, []);
        return (__assign(__assign({ disabled: page >= lastPage }, getterProps), { onClick: composeEventHandlers([
                function () { return changePage(lastPage); },
                /* istanbul ignore next */
                getterProps === null || getterProps === void 0 ? void 0 : getterProps.onClick,
            ]) }));
    }, [page, changePage, lastPage]);
    var value = useMemo(function () { return ({
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
    var gapToken = getToken({ theme: useTheme(), overrides: overrides }, "pagination.".concat(size), '', 'gap');
    return (React.createElement(PaginationProvider, { value: value },
        React.createElement(StyledNav, __assign({ size: size, "aria-label": "pagination", "data-testid": "pagination-container", ref: ref, overrides: overrides }, rest),
            React.createElement(StyledUnorderedList, { as: "ul", autoFlow: "column", autoColumns: "auto", columns: "auto", inline: true, justifyContent: "start", alignItems: "center", columnGap: gapToken }, children))));
});
export var Pagination = withOwnTheme(ThemelessPagination)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=pagination.js.map