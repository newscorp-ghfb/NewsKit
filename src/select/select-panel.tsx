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
  StyledSelectPanelAsDialog,
  StyledSelectPanelAsDialogWrapper,
  StyledSelectPanelBody,
  StyledSelectPanelHeader,
} from './styled';
import {ScreenReaderOnly} from '../screen-reader-only';
import {useBreakpointKey, useReactKeys} from '../utils/hooks';

import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {IconFilledCheck, IconFilledClose} from '../icons';
import {Overlay} from '../overlay/overlay';
import {IconButton} from '../icon-button/icon-button';
import {MQ} from '../utils/style/types';
import {Modal} from '../modal';

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
  overrides?: SelectPanelOverrides;
  children: React.ReactElement<SelectOptionProps>[];
  modal?: MQ<boolean>;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

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
      modal,
      ...restProps
    } = props;

    const listDescriptionId = useReactKeys(1)[0];

    const modalMQKeys = Object.keys(modal || {}).filter(Boolean);
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

    if (renderInModal) {
      if (!isOpen) {
        return <div ref={panelRef} />;
      }
      return (
        <Modal
          open={isOpen}
          onDismiss={() => null}
          restoreFocusTo={buttonRef.current!}
          overrides={{
            header: {spaceInset: 'space000', minHeight: 'sizing000'},
            panel: {maxHeight: '80vh'},
            content: {spaceInset: 'space010'},
            closeButton: {spaceInset: 'space000'},
          }}
        >
          <StyledSelectPanelBody ref={panelRef} {...restProps}>
            {optionsAsChildren}
          </StyledSelectPanelBody>
        </Modal>
      );
      // return (
      //   <>
      //     <Overlay open={isOpen} />
      //     <StyledSelectPanelAsDialogWrapper $isOpen={isOpen}>
      //       <StyledSelectPanelAsDialog $size={size}>
      //         <StyledSelectPanelHeader>
      //           <IconButton aria-label="close" onClick={onClose}>
      //             <IconFilledClose />
      //           </IconButton>
      //         </StyledSelectPanelHeader>
      //         <StyledSelectPanelBody ref={panelRef} {...restProps}>
      //           {optionsAsChildren}
      //         </StyledSelectPanelBody>
      //       </StyledSelectPanelAsDialog>
      //     </StyledSelectPanelAsDialogWrapper>
      //   </>
      // );
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
