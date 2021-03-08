import React from 'react';
import {DrawerHeader} from './drawer-header';
import {Overlay} from '../overlay/overlay';
import {
  StyledDrawerContainer,
  StyledDrawerContent as DrawerContent,
} from './styled';
import {DrawerProps} from './types';
import {useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {useKeypress} from '../utils/hooks';

export const Drawer: React.FC<DrawerProps> = ({
  children,
  open: isOpen,
  onDismiss,
  closeable = true,
  overrides = {},
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

  const triggerClose = () => {
    if (!onDismiss) return;

    if (isOpen) {
      onDismiss();
    }
  };

  const handleEscape = () => {
    triggerClose();
  };

  const handleOverlayClick = () => {
    if (!closeable) {
      return;
    }
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
      <StyledDrawerContainer
        isOpen={isOpen}
        role="dialog"
        aria-label="Drawer"
        aria-modal="true"
        data-testid="drawer"
        overrides={overrides}
        {...props}
      >
        <DrawerHeader onCloseButtonClick={handleCloseButtonClick} />
        <DrawerContent data-testid="drawer-content">{children}</DrawerContent>
      </StyledDrawerContainer>
    </>
  );
};
