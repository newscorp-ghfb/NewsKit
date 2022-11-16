import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {useSelect, UseSelectStateChange} from 'downshift';
import composeRefs from '@seznam/compose-react-refs';
import {SelectProps, SelectOptionProps} from './types';
import {SelectPanel} from './select-panel';
import {SelectButton} from './select-button';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {checkBreakpointProp} from '../utils/check-breakpoint-prop';
import {useBreakpointKey} from '../utils/hooks/use-media-query';
import {useVirtualizedList} from './use-virtualized-list';
import {Layer} from '../layer';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {get} from '../utils/get';

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
      virtualized = 50,
      eventContext = {},
      eventOriginator = 'select',
      ...restProps
    } = props;

    const selectRef: React.RefObject<HTMLDivElement> = useRef(null);
    const localInputRef: React.RefObject<HTMLInputElement> = useRef(null);
    const panelRef: React.RefObject<HTMLDivElement> = useRef(null);

    const renderInModal = checkBreakpointProp(useModal, useBreakpointKey());

    const [isFocused, setIsFocused] = React.useState(false);
    const onSelectButtonFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement, Element>) => {
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

    const buttonValue = programmaticallySelectedItem
      ? get(programmaticallySelectedItem, 'props.value')
      : get(defaultSelectedItem, 'props.value');

    // Seems we are calling onChage 2 times
    // Every time defaultSelected or selected is changes
    // and one more time in onInputChange function.
    // this one is also called on every render, I think is useless

    // useEffect(() => {
    //   if (programmaticallySelectedItem || defaultSelectedItem) {
    //     // istanbul ignore else
    //     if (localInputRef.current) {
    //       localInputRef.current.value = programmaticallySelectedItem
    //         ? programmaticallySelectedItem.props.value
    //         : defaultSelectedItem!.props.value;

    //       if (onChange && !programmaticallySelectedItem) {
    //         console.log('i am 1');
    //         onChange({
    //           type: 'change',
    //           target: localInputRef.current,
    //         } as ChangeEvent<HTMLInputElement>);
    //       }
    //     }
    //   }
    // }, [defaultSelectedItem, onChange, programmaticallySelectedItem]);

    const {fireEvent} = useInstrumentation();
    const onInputChange = React.useCallback<
      (
        changes: UseSelectStateChange<React.ReactElement<SelectOptionProps>>,
      ) => void
    >(
      /* istanbul ignore next */
      event => {
        /* istanbul ignore next */
        if (localInputRef.current) {
          localInputRef.current.value = event.selectedItem!.props.value;

          fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Change,
            context: {
              value: localInputRef.current.value,
              ...eventContext,
            },
          });
        }
        /* istanbul ignore next */
        if (onChange && localInputRef.current) {
          onChange({
            type: 'change',
            target: localInputRef.current,
          } as ChangeEvent<HTMLInputElement>);
        }
      },
      [onChange, fireEvent, eventOriginator, eventContext],
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
        /* istanbul ignore next */
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
      if (isOpen && selectRef.current) {
        // getting width, height, left, top of the select
        setSelectRect(selectRef.current.getBoundingClientRect());
      }
    }, [isOpen, selectRef]);

    // Chrome does not focus the panel until its in view port,
    // that's why we need to use scrollIntoView and focus after that.
    // This does not seems to be a problem in FF and Safari
    // This part can be removed if Chrome fixes that in the future.
    useEffect(() => {
      /* istanbul ignore next */
      if (
        isOpen &&
        panelRef.current &&
        'scrollIntoView' in panelRef.current &&
        'focus' in panelRef.current
      ) {
        const callback = () => {
          panelRef.current?.scrollIntoView();
          panelRef.current?.focus();
        };
        setTimeout(callback, 0);
      }
    }, [isOpen, panelRef]);

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
          value={buttonValue}
          {...downshiftButtonPropsExceptRef}
          {...restProps}
        />
        <Layer>
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
        </Layer>
      </>
    );
  },
);

ThemelessSelect.displayName = 'Select';

export const Select = withOwnTheme(ThemelessSelect)({
  defaults,
  stylePresets,
});
