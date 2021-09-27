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
  /* istanbul ignore next */
  open = false,
  onDismiss,
  restoreFocusTo,
  closePosition = 'right',
  overrides,
  hideOverlay,
  disableFocusTrap,
  ...props
}) => {
  const theme = useTheme();

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
      hideOverlay={hideOverlay}
      disableFocusTrap={disableFocusTrap}
      renderOverlay={handleOverlayClick => (
        <Overlay
          open={open}
          onClick={handleOverlayClick}
          overrides={overlayOverrides}
        />
      )}
    >
      {handleCloseButtonClick => (
        <CSSTransition
          in={open}
          timeout={0} // bypass transition until PPDSC-1151 is merged
          classNames="nk-modal"
          unmountOnExit
          mountOnEnter
        >
          <StyledModal
            open={open}
            disableFocusTrap={disableFocusTrap}
            handleCloseButtonClick={handleCloseButtonClick}
            path="modal"
            data-testid="modal"
            closePosition={closePosition}
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
