import React from 'react';

import {
  ButtonSelectSize,
  SelectPanelOverrides,
  SelectOptionProps,
} from './types';
import {
  StyledOption,
  StyledOptionIcon,
  StyledSelectPanel,
  StyledSelectPanelBody,
} from './styled';
import {ScreenReaderOnly} from '../screen-reader-only';
import {useBreakpointKey, useReactKeys} from '../utils/hooks';

import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {IconFilledCheck} from '../icons';

import {MQ} from '../utils/style/types';
import {Modal, ModalProps} from '../modal';
import {withDefaultProps} from '../utils/with-default-props';
import {getComponentOverrides, Override} from '../utils/overrides';

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
  useModal?: MQ<boolean>;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const DefaultModal = withDefaultProps(
  Modal,
  {
    onDismiss: () => null,
  },
  'select.modal',
);

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
      useModal,
      overrides,
      ...restProps
    } = props;

    const listDescriptionId = useReactKeys(1)[0];

    const modalMQKeys = Object.keys(useModal || {}).filter(Boolean);
    const currentMQ = useBreakpointKey();

    const renderInModal = modalMQKeys.includes(currentMQ);

    const optionsAsChildren =
      isOpen &&
      React.Children.map(
        children,
        (child: React.ReactElement<SelectOptionProps>, index) => {
          const downshiftOptionProps = getItemProps({
            item: child,
            index,
          });

          const combinedProps = {
            ...downshiftOptionProps,
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
        },
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
          open: isOpen,
          restoreFocusTo: buttonRef.current!,
        },
      );

      return (
        <ModalComponent {...(modalProps as ModalProps)}>
          <StyledSelectPanelBody ref={panelRef} {...restProps}>
            {optionsAsChildren}
          </StyledSelectPanelBody>
        </ModalComponent>
      );
    }
    return (
      <>
        <ScreenReaderOnly id={listDescriptionId}>
          Press down arrow key to navigate to the first item
        </ScreenReaderOnly>

        <StyledSelectPanel
          $isOpen={isOpen}
          data-testid="select-panel"
          aria-describedby={listDescriptionId}
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
