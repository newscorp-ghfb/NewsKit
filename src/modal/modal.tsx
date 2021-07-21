import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {ModalProps} from './types';
import {StyledModal} from './styled';
import {BaseDialogFunction} from '../dialog';
import {Overlay} from '../overlay/overlay';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onDismiss,
  restoreFocusTo,
  closePosition: placement = 'right',
  overrides,
  ...props
}) => {
  const theme = useTheme();

  if (!open) {
    return null;
  }

  const overlayOverrides = {
    ...deepMerge(
      mergeBreakpointObject(Object.keys(theme.breakpoints) as BreakpointKeys[]),
      theme.componentDefaults.modal.overlay,
      filterOutFalsyProperties(overrides && overrides.overlay),
    ),
  };

  return (
    <BaseDialogFunction
      open={open}
      restoreFocusTo={restoreFocusTo}
      onDismiss={onDismiss}
      renderOverlay={handleOverlayClick => (
        // Render conditionally the Overlay for Modal V2
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          overrides={overlayOverrides}
        />
      )}
    >
      {handleCloseButtonClick => (
        <CSSTransition in={open} timeout={1000} classNames="nk-modal" appear>
          <StyledModal
            open={open}
            handleCloseButtonClick={handleCloseButtonClick}
            path="modal"
            data-testid="modal"
            aria-label="modal"
            placement={placement}
            overrides={overrides}
            {...props}
          >
            {children}
          </StyledModal>
        </CSSTransition>
      )}
    </BaseDialogFunction>
  );
};
