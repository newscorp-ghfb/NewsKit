import React, {ChangeEvent, useEffect, useRef} from 'react';
import {useSelect, UseSelectStateChange} from 'downshift';
import composeRefs from '@seznam/compose-react-refs';
import {
  useFloating,
  autoUpdate,
  shift,
  offset,
  size as floatingSize,
  autoPlacement,
} from '@floating-ui/react-dom-interactions';
import {SelectProps, SelectOptionProps} from './types';
import {SelectPanel} from './select-panel';
import {SelectButton} from './select-button';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {checkBreakpointProp} from '../utils/check-breakpoint-prop';
import {useBreakpointKey} from '../utils/hooks/use-media-query';
import {useVirtualizedList} from './use-virtualized-list';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {get} from '../utils/get';
import {Layer} from '../layer';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

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
      onOpenChange,
      // force select in controlled mode
      controlled = false,
      labelId,
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

    const getSelectedItem = () => {
      if (programmaticallySelectedItem) {
        return {selectedItem: programmaticallySelectedItem};
      }

      if (controlled) {
        return {selectedItem: programmaticallySelectedItem || null};
      }

      return {};
    };

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
      onIsOpenChange: event => {
        if (onOpenChange) {
          onOpenChange(Boolean(event.isOpen));
        }
      },
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
      ...getSelectedItem(),
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

    const {x, y, reference, strategy, update, refs} = useFloating({
      strategy: 'absolute',
      open: isOpen,
      placement: 'bottom-start',
      middleware: [
        offset(0),
        shift(),
        autoPlacement({
          allowedPlacements: ['top-start', 'bottom-start'],
        }),
        floatingSize({
          apply({rects, elements}) {
            Object.assign(elements.floating.style, {
              // when the panel is inside a modal we want to be 100%
              width: elements.floating.classList.contains('modal-panel')
                ? /* istanbul ignore next */
                  '100%'
                : `${rects.reference.width}px`,
            });
          },
        }),
      ],
    });

    const {
      ref: downshiftButtonPropsRef,
      ...downshiftButtonPropsExceptRef
    } = getToggleButtonProps();
    delete downshiftButtonPropsExceptRef['aria-labelledby']; // deleting because FormInput provides these props

    const {
      ref: downshiftMenuPropsRef,
      ...downshiftMenuPropsExceptRef
    } = getMenuProps({
      ref: composeRefs(refs.floating, panelRef),
      'aria-labelledby': labelId,
    });

    // eslint-disable-next-line consistent-return
    React.useLayoutEffect(() => {
      /* istanbul ignore next */
      if (isOpen && refs.reference.current && refs.floating.current) {
        return autoUpdate(
          refs.reference.current,
          refs.floating.current,
          update,
        );
      }
    }, [isOpen, update, refs.floating, refs.reference]);

    const theme = useTheme();
    const zIndex = getToken(
      {theme, overrides},
      `select.${size}.panel.zIndex`,
      'panel.zIndex',
      'sizing',
    );

    // by default the select panel renders in layer,
    // however users can provider zIndex value so that change and adjust according to their use-case
    const LayerElement = zIndex === 'layer' ? Layer : React.Fragment;

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
          selectRef={composeRefs(selectRef, reference)}
          value={buttonValue}
          isOpen={isOpen}
          {...downshiftButtonPropsExceptRef}
          {...restProps}
        />
        <LayerElement>
          <SelectPanel
            isOpen={isOpen}
            overrides={overrides}
            top={y}
            left={x}
            size={size}
            buttonRef={localInputRef}
            renderInModal={renderInModal}
            closeMenu={closeMenu}
            {...downshiftMenuPropsExceptRef}
            ref={downshiftMenuPropsRef}
            strategy={strategy}
            zIndex={zIndex}
          >
            {optionsAsChildren}
          </SelectPanel>
        </LayerElement>
      </>
    );
  },
);

ThemelessSelect.displayName = 'Select';

export const Select = withOwnTheme(ThemelessSelect)({
  defaults,
  stylePresets,
});
