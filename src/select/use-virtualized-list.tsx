import React, {Ref} from 'react';
import {useVirtual} from 'react-virtual';
import composeRefs from '@seznam/compose-react-refs';

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
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef: listRef,
    overscan: 2,
  });

  const useVirtualization = items.length > limit;

  const renderSelectOption = (
    props: object,
    child: React.ReactElement<SelectOptionProps>,
    index: number,
    ref?: Ref<HTMLDivElement>,
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
        ref={
          // @ts-ignore
          composeRefs(combinedProps.ref as Ref<HTMLDivElement>, ref)
        }
      />
    );
  };

  const mapVirtualized = (virtualRow: {
    index: number;
    size: number;
    start: number;
    measureRef: Ref<HTMLDivElement>;
  }) => {
    const itemProps = getItemProps({
      index: virtualRow.index,
      item: items[virtualRow.index],
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        transform: `translateY(${virtualRow.start}px)`,
      },
    });

    const {index, measureRef} = virtualRow;
    const child = items[index];

    return renderSelectOption(itemProps, child, index, measureRef);
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
