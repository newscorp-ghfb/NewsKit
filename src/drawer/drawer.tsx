import React from 'react';
import {Overlay} from '../overlay/overlay';
import {
  StyledDrawerPanel,
  StyledDrawerContent,
  StyledDrawerHeader,
  StyledCloseButtonContainer,
  StyledDrawerHeaderContent,
} from './styled';
import {DrawerProps} from './types';
import {useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useKeypress} from '../utils/hooks';
import {IconButton} from '../icon-button';
import {IconFilledClose} from '../icons';
import {Stack} from '../stack';
import {ButtonSize} from '../button';

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open: isOpen,
  onDismiss,
  header,
  overrides = {},
  ariaLabelledby,
  ariaDescribedby,
  placement = 'right',
  ...props
}) => {
  const theme = useTheme();

  const overlaySettings = {
    ...deepMerge(
      {},
      theme.componentDefaults.drawer.overlay,
      filterOutFalsyProperties(overrides.overlay),
    ),
  };

  const closeButtonSettings: typeof overrides['closeButton'] = {
    ...theme.componentDefaults.drawer.closeButton,
    ...filterOutFalsyProperties(overrides.closeButton),
    // TODO: Remove when PPDSC-1449 is resolved
    ...{spaceInset: theme.componentDefaults.drawer.closeButton},
  };

  const triggerClose = () => {
    if (onDismiss && isOpen) {
      onDismiss();
    }
  };

  const handleEscape = () => {
    triggerClose();
  };

  const handleOverlayClick = () => {
    triggerClose();
  };

  const handleCloseButtonClick = () => {
    triggerClose();
  };

  useKeypress('Escape', handleEscape, {enabled: isOpen});

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick} overrides={overlaySettings} />
      )}
      <StyledDrawerPanel
        isOpen={isOpen}
        role="dialog"
        aria-label="drawer"
        aria-describedby={ariaDescribedby}
        aria-labelledby={ariaLabelledby}
        aria-modal="true"
        data-testid="drawer"
        overrides={overrides}
        placement={placement}
        {...props}
      >
        <StyledDrawerHeader overrides={overrides}>
          <Stack flow="horizontal-center" flowReverse={placement === 'left'}>
            {header && (
              <StyledDrawerHeaderContent>{header}</StyledDrawerHeaderContent>
            )}
            <StyledCloseButtonContainer
              placement={placement}
              overrides={overrides}
              // Move props directly to IconButton when PPDSC-1449 is fixed
            >
              <IconButton
                aria-label="close drawer"
                onClick={handleCloseButtonClick}
                overrides={closeButtonSettings}
                size={ButtonSize.Medium}
              >
                <IconFilledClose />
              </IconButton>
            </StyledCloseButtonContainer>
          </Stack>
        </StyledDrawerHeader>

        <StyledDrawerContent data-testid="drawer-content">
          {children}
        </StyledDrawerContent>
      </StyledDrawerPanel>
    </>
  );
};
