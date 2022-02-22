import React, {useState, useEffect} from 'react';
import {useVirtual} from 'react-virtual';
import {get} from '../utils/get';
import {ButtonSelectSize, SelectOptionProps} from './types';
import {StyledOptionWithPrivateProps} from './select-panel';

export const useVirtualizedList = ({
  items,
  listRef,
  getItemProps,
  limit,
  highlightedIndex,
  selectedItem,
  size,
  isOpen,
}: {
  items: React.ReactElement<SelectOptionProps>[];
  listRef: React.RefObject<HTMLDivElement>;
  getItemProps: Function;
  limit: number;
  highlightedIndex?: number | null;
  selectedItem?: React.ReactNode;
  size: ButtonSelectSize;
  isOpen: boolean;
}): {
  children: React.ReactNode;
  scrollToIndex: Function;
} => {
  const [itemSize, setItemSize] = useState(0);

  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    estimateSize: React.useCallback(() => itemSize, [itemSize]),
    overscan: 2,
  });

  useEffect(() => {
    if (!isOpen || !listRef.current) return;

    // measure the size of the first item, assuming all items are the same size\
    const element = listRef.current.querySelector('[role="option"]');

    // istanbul ignore if
    if (!(element instanceof HTMLElement)) return;

    const height = element.offsetHeight;
    setItemSize(height || 0);
  }, [listRef, isOpen]);

  const useVirtualization = items.length > limit;

  const renderSelectOption = (
    props: object,
    child: React.ReactElement<SelectOptionProps>,
    index: number,
  ) => {
    const combinedProps = {
      ...props,
      ...child.props,
      key: child.key,
    };

    const isSelected = Boolean(
      selectedItem &&
        get(selectedItem, 'props.value') === get(child, 'props.value'),
    );

    return (
      <StyledOptionWithPrivateProps
        $focused={highlightedIndex === index}
        $selected={isSelected}
        $size={size}
        {...combinedProps}
      />
    );
  };

  const mapVirtualized = (virtualRow: {
    index: number;
    size: number;
    start: number;
  }) => {
    const itemProps = getItemProps({
      index: virtualRow.index,
      item: items[virtualRow.index],
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        // height: virtualRow.size,
        transform: `translateY(${virtualRow.start}px)`,
      },
    });

    const {index} = virtualRow;
    const child = items[index];

    return renderSelectOption(itemProps, child, index);
  };

  const mapNonVirtualized = (
    child: React.ReactElement<SelectOptionProps>,
    index: number,
  ) => {
    const itemProps = getItemProps({
      item: child,
      index,
    });

    return renderSelectOption(itemProps, child, index);
  };

  const getItems = () =>
    useVirtualization
      ? rowVirtualizer.virtualItems.map(mapVirtualized)
      : items.map(mapNonVirtualized);

  const getTotalSizeItem = () =>
    useVirtualization ? (
      <div key="total-size" style={{height: rowVirtualizer.totalSize}} />
    ) : null;

  return {
    children: isOpen ? (
      <>
        {getTotalSizeItem()}
        {getItems()}
      </>
    ) : null,
    scrollToIndex: useVirtualization ? rowVirtualizer.scrollToIndex : () => {},
  };
};
