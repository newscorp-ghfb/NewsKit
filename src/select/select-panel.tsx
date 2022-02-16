import React from 'react';

import {
  ButtonSelectSize,
  SelectPanelOverrides,
  SelectOptionProps,
  SelectPropsOverrides,
} from './types';
import {
  StyledOption,
  StyledOptionIcon,
  StyledSelectPanel,
  StyledModalPanel,
} from './styled';
import {ScreenReaderOnly} from '../screen-reader-only';
import {useReactKeys} from '../utils/hooks';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {IconFilledCheck} from '../icons';
import {Modal, ModalProps} from '../modal';
import {getComponentOverrides, Override} from '../utils/overrides';
import {getModalOverrides} from './utils';

interface SelectPanelProps {
  isOpen: boolean;
  width: number;
  height: number;
  top: number;
  left: number;
  size: ButtonSelectSize;
  getItemProps: Function;
  selectedItem?: React.ReactElement<SelectOptionProps>;
  highlightedIndex?: number;
  overrides?: {
    panel?: SelectPanelOverrides;
    modal?: Override<ModalProps>;
  };
  children: React.ReactElement<SelectOptionProps>[];
  renderInModal: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  closeMenu: Function;
  getItems: Function;
}

const DefaultModal = Modal;

const StyledOptionWithPrivateProps = React.forwardRef<
  HTMLDivElement,
  SelectOptionProps & StyledOptionPrivateProps
>((props, inputRef) => {
  const {$size, $selected, $focused, selectedIcon, overrides} = props;

  const theme = useTheme();
  const iconSize = getToken(
    {theme},
    `selectOption.${$size}.icon`,
    '',
    'iconSize',
  );

  const optionSpaceInline = getToken(
    {theme, overrides},
    `selectOption.${$size}`,
    '',
    'spaceInline',
  );

  const {children} = props;
  return (
    <StyledOption {...props} ref={inputRef} $spaceInline={optionSpaceInline}>
      <div>{children}</div>
      {$selected && (
        <StyledOptionIcon
          $size={$size}
          $selected={$selected}
          $focused={$focused}
        >
          {selectedIcon || <IconFilledCheck overrides={{size: iconSize}} />}
        </StyledOptionIcon>
      )}
    </StyledOption>
  );
});

export const SelectPanel = React.forwardRef<HTMLDivElement, SelectPanelProps>(
  (props, panelRef) => {
    const {
      isOpen,
      width,
      height,
      top,
      left,
      size,
      children,
      getItemProps,
      selectedItem,
      highlightedIndex,
      buttonRef,
      renderInModal,
      closeMenu,
      overrides,
      getItems,
      getTotalSizeItem,
      ...restProps
    } = props;

    const listDescriptionId = useReactKeys(1)[0];

    const theme = useTheme();
    const modalOverrides = getModalOverrides({
      theme,
      size,
      overrides: overrides?.modal as SelectPropsOverrides['modal'],
    });

    // const optionsAsChildren =
    //   isOpen &&
    //   React.Children.map(
    //     children,
    //     (child: React.ReactElement<SelectOptionProps>, index) => {
    //       const downshiftOptionProps = getItemProps({
    //         item: child,
    //         index,
    //       });

    //       const combinedProps = {
    //         ...downshiftOptionProps,
    //         ...child.props,
    //       };

    //       return (
    //         <StyledOptionWithPrivateProps
    //           $focused={highlightedIndex === index}
    //           $selected={selectedItem === child}
    //           $size={size}
    //           {...combinedProps}
    //         />
    //       );
    //     },
    //   );

    const optionsAsChildren = isOpen && (
      // @ts-ignore
      <>
        {getTotalSizeItem()}
        {getItems().map(({child, props: itemProps, index}) => {
          const combinedProps = {
            ...itemProps,
            ...child.props,
          };

          return (
            <StyledOptionWithPrivateProps
              $focused={highlightedIndex === index}
              $selected={selectedItem === child}
              $size={size}
              {...combinedProps}
            />
          );
        })}
      </>
    );

    const screenReaderOnlyMessage = isOpen && (
      <ScreenReaderOnly id={listDescriptionId}>
        Press down arrow key to navigate to the first item
      </ScreenReaderOnly>
    );

    if (renderInModal && !isOpen) {
      // this is needed for downshift in order to work properly
      return <div ref={panelRef} />;
    }
    if (renderInModal && isOpen) {
      const [ModalComponent, modalProps] = getComponentOverrides(
        overrides?.modal,
        DefaultModal,
        {
          overrides: modalOverrides,
          open: isOpen,
          restoreFocusTo: buttonRef.current!,
          onDismiss: closeMenu,
        },
      );

      return (
        <ModalComponent {...(modalProps as ModalProps)}>
          {screenReaderOnlyMessage}
          <StyledModalPanel
            data-testid="select-panel"
            aria-describedby={listDescriptionId}
            ref={panelRef}
            {...restProps}
            onBlur={e => {
              // set tabIndex to 0 so that user can return to the element
              // when before that moves to Close / Other focusable elements inside the modal
              e.target.setAttribute('tabIndex', '0');
            }}
          >
            {optionsAsChildren}
          </StyledModalPanel>
        </ModalComponent>
      );
    }
    return (
      <>
        {screenReaderOnlyMessage}
        <StyledSelectPanel
          $isOpen={isOpen}
          data-testid="select-panel"
          aria-describedby={isOpen ? listDescriptionId : undefined}
          $width={width}
          $top={(top || 0) + (height || 0)}
          $left={left}
          $size={size}
          ref={panelRef}
          overrides={overrides?.panel}
          {...restProps}
        >
          {optionsAsChildren}
        </StyledSelectPanel>
      </>
    );
  },
);

interface StyledOptionPrivateProps {
  ref: React.Ref<HTMLDivElement>;
  $size: ButtonSelectSize;
  $focused?: boolean;
  $selected?: boolean;
}
