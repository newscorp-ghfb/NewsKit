"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVirtualizedList = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_virtual_1 = require("react-virtual");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var get_1 = require("../utils/get");
var select_panel_1 = require("./select-panel");
var useVirtualizedList = function (_a) {
    var items = _a.items, listRef = _a.listRef, getItemProps = _a.getItemProps, limit = _a.limit, highlightedIndex = _a.highlightedIndex, selectedItem = _a.selectedItem, size = _a.size, isOpen = _a.isOpen;
    var rowVirtualizer = (0, react_virtual_1.useVirtual)({
        size: items.length,
        parentRef: listRef,
        overscan: 2,
    });
    var useVirtualization = items.length > limit;
    var renderSelectOption = function (props, child, index, ref) {
        var combinedProps = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, props), child.props), { key: child.key });
        var isSelected = Boolean(selectedItem &&
            (0, get_1.get)(selectedItem, 'props.value') === (0, get_1.get)(child, 'props.value'));
        return (react_1.default.createElement(select_panel_1.StyledOptionWithPrivateProps, tslib_1.__assign({ "$focused": highlightedIndex === index, "$selected": isSelected, "$size": size }, combinedProps, { ref: 
            // @ts-ignore
            (0, compose_react_refs_1.default)(combinedProps.ref, ref) })));
    };
    var mapVirtualized = function (virtualRow) {
        var itemProps = getItemProps({
            index: virtualRow.index,
            item: items[virtualRow.index],
            style: {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: "translateY(".concat(virtualRow.start, "px)"),
            },
        });
        var index = virtualRow.index, measureRef = virtualRow.measureRef;
        var child = items[index];
        return renderSelectOption(itemProps, child, index, measureRef);
    };
    var mapNonVirtualized = function (child, index) {
        var itemProps = getItemProps({
            item: child,
            index: index,
        });
        return renderSelectOption(itemProps, child, index);
    };
    var getItems = function () {
        return useVirtualization
            ? rowVirtualizer.virtualItems.map(mapVirtualized)
            : items.map(mapNonVirtualized);
    };
    var getTotalSizeItem = function () {
        return useVirtualization ? (react_1.default.createElement("div", { key: "total-size", style: { height: rowVirtualizer.totalSize } })) : null;
    };
    return {
        children: isOpen ? (react_1.default.createElement(react_1.default.Fragment, null,
            getTotalSizeItem(),
            getItems())) : null,
        scrollToIndex: useVirtualization ? rowVirtualizer.scrollToIndex : function () { },
    };
};
exports.useVirtualizedList = useVirtualizedList;
//# sourceMappingURL=use-virtualized-list.js.map