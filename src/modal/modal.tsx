import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {ModalProps} from './types';
import {StyledModal, StyledModalWrapper} from './styled';
import {BaseDialogFunction} from '../dialog';
import {Overlay} from '../overlay/overlay';
import {BreakpointKeys, useTheme} from '../theme';
import {deepMerge} from '../utils/deep-merge';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {mergeBreakpointObject} from '../utils/merge-breakpoint-object';
import {getTransitionDuration} from '../utils/get-transition-duration';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessModal: React.FC<ModalProps> = ({
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

  const [showWrapper, setShowWrapper] = React.useState(false);

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
        <StyledModalWrapper
          inline={props.inline}
          $open={showWrapper}
          overrides={overrides}
        >
          <CSSTransition
            in={open}
            timeout={getTransitionDuration(
              `modal.panel`,
              '',
            )({theme, overrides})}
            classNames="nk-modal"
            mountOnEnter
            unmountOnExit
            appear
            onEnter={() => setShowWrapper(true)}
            onExited={() => setShowWrapper(false)}
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
        </StyledModalWrapper>
      )}
    </BaseDialogFunction>
  );
};

export const Modal = withOwnTheme(ThemelessModal)({
  defaults,
  stylePresets,
});

Modal.stylePresets = stylePresets;
