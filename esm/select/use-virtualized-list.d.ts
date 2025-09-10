import React from 'react';
import { ButtonSelectSize, SelectOptionProps } from './types';
export declare const useVirtualizedList: ({ items, listRef, getItemProps, limit, highlightedIndex, selectedItem, size, isOpen, }: {
    items: React.ReactElement<SelectOptionProps>[];
    listRef: React.RefObject<HTMLDivElement | null>;
    getItemProps: Function;
    limit: number;
    highlightedIndex?: number | null | undefined;
    selectedItem?: React.ReactNode;
    size: ButtonSelectSize;
    isOpen: boolean;
}) => {
    children: React.ReactNode;
    scrollToIndex: Function;
};
//# sourceMappingURL=use-virtualized-list.d.ts.map