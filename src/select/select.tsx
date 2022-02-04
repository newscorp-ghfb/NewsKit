import React, {ChangeEvent, useEffect, useRef} from 'react';
import {useSelect, UseSelectStateChange} from 'downshift';
import composeRefs from '@seznam/compose-react-refs';
import {SelectProps} from './types';
import {SelectPanel} from './select-panel';
import {SelectButton} from './select-button';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {shouldRenderInModal} from './utils';
import {withMediaQueryProvider} from '../utils/hooks/use-media-query/context';
import {useBreakpointKey} from '../utils/hooks/use-media-query';

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

    const {
      clientWidth: width = 0,
      offsetTop: top = 0,
      clientHeight: height = 0,
      offsetLeft: left = 0,
    } = (selectRef && selectRef.current) || {};

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
          selectedItem={selectedItem}
          highlightedIndex={highlightedIndex}
          getItemProps={getItemProps}
          buttonRef={localInputRef}
          renderInModal={renderInModal}
          closeMenu={closeMenu}
          {...downshiftMenuPropsExceptRef}
          ref={composeRefs(panelRef, downshiftMenuPropsRef)}
        >
          {children}
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
