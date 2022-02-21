import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {useSelect, UseSelectStateChange} from 'downshift';
import composeRefs from '@seznam/compose-react-refs';
import {useVirtual} from 'react-virtual';
import {ButtonSelectSize, SelectProps, SelectOptionProps} from './types';
import {SelectPanel, StyledOptionWithPrivateProps} from './select-panel';
import {SelectButton} from './select-button';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {shouldRenderInModal} from './utils';
import {withMediaQueryProvider} from '../utils/hooks/use-media-query/context';
import {useBreakpointKey} from '../utils/hooks/use-media-query';
import {get} from '../utils/get';

const useVirtualizedList = ({
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
}) => {
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

const ThemelessSelect = React.forwardRef<HTMLInputElement, SelectProps>(
  (props, inputRef) => {
    const {
      overrides,
      placeholder = 'Select Option',
      state,
      startEnhancer,
      endEnhancer,
      validationIcon,
      onBlur,
      onFocus,
      onChange,
      size = 'medium',
      loading,
      children,
      useModal = {},
      virtualized = 50, // TODO: what's the magic number?
      ...restProps
    } = props;

    const selectRef: React.RefObject<HTMLDivElement> = useRef(null);
    const localInputRef: React.RefObject<HTMLInputElement> = useRef(null);
    const panelRef: React.RefObject<HTMLDivElement> = useRef(null);

    const renderInModal = shouldRenderInModal(useModal, useBreakpointKey());

    const [isFocused, setIsFocused] = React.useState(false);
    const onSelectButtonFocus = React.useCallback(
      event => {
        setIsFocused(true);
        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus],
    );

    const programmaticallySelectedItem = children.find(
      option => option.props.selected,
    );
    const defaultSelectedItem = children.find(
      option => option.props.defaultSelected,
    );

    useEffect(() => {
      if (programmaticallySelectedItem || defaultSelectedItem) {
        // istanbul ignore else
        if (localInputRef.current) {
          localInputRef.current.value = programmaticallySelectedItem
            ? programmaticallySelectedItem.props.value
            : defaultSelectedItem!.props.value;
          if (onChange) {
            onChange({
              type: 'change',
              target: localInputRef.current,
            } as ChangeEvent<HTMLInputElement>);
          }
        }
      }
    }, [defaultSelectedItem, onChange, programmaticallySelectedItem]);

    const onInputChange = React.useCallback(
      event => {
        // istanbul ignore else
        if (localInputRef.current) {
          localInputRef.current.value = event.selectedItem.props.value;
        }
        // istanbul ignore else
        if (onChange && localInputRef.current) {
          onChange({
            type: 'change',
            target: localInputRef.current,
          } as ChangeEvent<HTMLInputElement>);
        }
      },
      [onChange],
    );

    const [highlightedIndex, setHighlightedIndex] = React.useState<
      number | null | undefined
    >(-1);

    const onHighlightedIndexChange = (
      indexChangeEvent: UseSelectStateChange<React.ReactNode>,
    ) => {
      // istanbul ignore else
      if (indexChangeEvent.type !== '__item_mouse_move__') {
        setHighlightedIndex(indexChangeEvent.highlightedIndex);
      }
    };

    /* eslint-disable @typescript-eslint/no-explicit-any */
    // istanbul ignore next
    const itemToString = (item: any) =>
      item?.props?.['aria-label'] || item?.props?.value;
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      getItemProps,
      openMenu,
      closeMenu,
    } = useSelect({
      items: children,
      defaultSelectedItem,
      onSelectedItemChange: onInputChange,
      itemToString,
      onHighlightedIndexChange,
      stateReducer: (_, actionAndChanges) => {
        const {type, changes} = actionAndChanges;
        // Does not close panel in the case we are rendering panel inside a modal
        if (renderInModal && type === useSelect.stateChangeTypes.MenuBlur) {
          return {
            ...changes,
            isOpen: true,
          };
        }

        return changes;
      },
      ...(programmaticallySelectedItem
        ? {selectedItem: programmaticallySelectedItem}
        : {}),
    });

    const {children: optionsAsChildren, scrollToIndex} = useVirtualizedList({
      items: React.Children.toArray(
        children,
      ) as React.ReactElement<SelectOptionProps>[],
      listRef: panelRef,
      getItemProps,
      limit: virtualized,
      highlightedIndex,
      selectedItem,
      size,
      isOpen,
    });

    useEffect(() => {
      if (highlightedIndex) scrollToIndex(highlightedIndex);
    }, [highlightedIndex, scrollToIndex]);

    const [allowBlur, setAllowBlur] = React.useState(true);
    const onSelectButtonBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur && allowBlur) {
          onBlur(event);
        }
        setIsFocused(false);
      },
      [allowBlur, onBlur],
    );

    const {
      ref: downshiftButtonPropsRef,
      ...downshiftButtonPropsExceptRef
    } = getToggleButtonProps();
    delete downshiftButtonPropsExceptRef['aria-labelledby']; // deleting because FormInput provides these props

    const {
      ref: downshiftMenuPropsRef,
      ...downshiftMenuPropsExceptRef
    } = getMenuProps();

    const [{width, top, height, left}, setSelectRect] = useState({
      width: 0,
      top: 0,
      height: 0,
      left: 0,
    });

    useEffect(() => {
      if (isOpen) {
        const {
          clientWidth = 0,
          offsetTop = 0,
          clientHeight = 0,
          offsetLeft = 0,
        } = (selectRef && selectRef.current) || {};
        setSelectRect({
          width: clientWidth,
          top: offsetTop,
          height: clientHeight,
          left: offsetLeft,
        });
      }
    }, [isOpen, selectRef]);

    return (
      <>
        <SelectButton
          size={size}
          placeholder={placeholder}
          isFocused={isFocused}
          loading={loading}
          state={state}
          selectedItem={selectedItem}
          overrides={overrides?.button}
          startEnhancer={startEnhancer}
          endEnhancer={endEnhancer}
          validationIcon={validationIcon}
          setAllowBlur={setAllowBlur}
          onSelectButtonBlur={onSelectButtonBlur}
          onSelectButtonFocus={onSelectButtonFocus}
          openMenu={openMenu}
          itemToString={itemToString}
          ref={composeRefs(localInputRef, downshiftButtonPropsRef, inputRef)}
          selectRef={selectRef}
          {...downshiftButtonPropsExceptRef}
          {...restProps}
        />
        <SelectPanel
          isOpen={isOpen}
          overrides={overrides}
          width={width}
          height={height}
          top={top}
          left={left}
          size={size}
          buttonRef={localInputRef}
          renderInModal={renderInModal}
          closeMenu={closeMenu}
          {...downshiftMenuPropsExceptRef}
          ref={composeRefs(panelRef, downshiftMenuPropsRef)}
        >
          {optionsAsChildren}
        </SelectPanel>
      </>
    );
  },
);

ThemelessSelect.displayName = 'Select';

export const Select = withMediaQueryProvider(
  withOwnTheme(ThemelessSelect)({
    defaults,
    stylePresets,
  }),
);
