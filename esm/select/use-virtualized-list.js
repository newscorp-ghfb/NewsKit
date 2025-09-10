import { __assign } from "tslib";
import React from 'react';
import { useVirtual } from 'react-virtual';
import composeRefs from '@seznam/compose-react-refs';
import { get } from '../utils/get';
import { StyledOptionWithPrivateProps } from './select-panel';
export var useVirtualizedList = function (_a) {
    var items = _a.items, listRef = _a.listRef, getItemProps = _a.getItemProps, limit = _a.limit, highlightedIndex = _a.highlightedIndex, selectedItem = _a.selectedItem, size = _a.size, isOpen = _a.isOpen;
    var rowVirtualizer = useVirtual({
        size: items.length,
        parentRef: listRef,
        overscan: 2,
    });
    var useVirtualization = items.length > limit;
    var renderSelectOption = function (props, child, index, ref) {
        var combinedProps = __assign(__assign(__assign({}, props), child.props), { key: child.key });
        var isSelected = Boolean(selectedItem &&
            get(selectedItem, 'props.value') === get(child, 'props.value'));
        return (React.createElement(StyledOptionWithPrivateProps, __assign({ "$focused": highlightedIndex === index, "$selected": isSelected, "$size": size }, combinedProps, { ref: 
            // @ts-ignore
            composeRefs(combinedProps.ref, ref) })));
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
        return useVirtualization ? (React.createElement("div", { key: "total-size", style: { height: rowVirtualizer.totalSize } })) : null;
    };
    return {
        children: isOpen ? (React.createElement(React.Fragment, null,
            getTotalSizeItem(),
            getItems())) : null,
        scrollToIndex: useVirtualization ? rowVirtualizer.scrollToIndex : function () { },
    };
};
//# sourceMappingURL=use-virtualized-list.js.map