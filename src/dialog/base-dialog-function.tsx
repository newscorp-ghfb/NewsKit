import React, {useRef, useEffect, useCallback} from 'react';
import FocusLock from 'react-focus-lock';
import {useKeypress} from '../utils/hooks';
import {get} from '../utils/get';
import {BaseDialogFunctionProps} from './types';

export const BaseDialogFunction: React.FC<BaseDialogFunctionProps> = ({
  children,
  open,
  onDismiss,
  restoreFocusTo = undefined,
  renderOverlay,
  hideOverlay,
  disableFocusTrap,
}) => {
  const triggerClose = () => open && onDismiss && onDismiss();

  const handleEscape = () => {
    triggerClose();
  };

  const handleOverlayClick = () => {
    triggerClose();
  };

  const handleCloseButtonClick = () => {
    triggerClose();
  };

  useKeypress('Escape', handleEscape, {enabled: open});

  // ref to store activeElement ( focused ) before dialog been opened
  const originalFocusedElementRef = useRef<Element | null>(null);

  const handleOnLockActivation = () => {
    originalFocusedElementRef.current = document.activeElement;
  };

  const handleOnLockDeactivation = useCallback(() => {
    const originalFocusedElement = get(originalFocusedElementRef, 'current');

    /* istanbul ignore else */
    if (restoreFocusTo || originalFocusedElement) {
      const elementToFocus = restoreFocusTo || originalFocusedElement;
      // without the zero-timeout, focus will likely remain on the dialog
      window.setTimeout(
        () =>
          typeof elementToFocus.focus === 'function' && elementToFocus.focus(),
        0,
      );
    }
  }, [restoreFocusTo]);

  useEffect(() => {
    if (disableFocusTrap && open) {
      handleOnLockActivation();
    }
    return () => {
      if (disableFocusTrap && open) {
        handleOnLockDeactivation();
      }
    };
  }, [disableFocusTrap, handleOnLockDeactivation, open]);

  return (
    <>
      {!hideOverlay && renderOverlay(handleOverlayClick)}
      <FocusLock
        disabled={!open || disableFocusTrap}
        onActivation={handleOnLockActivation}
        onDeactivation={handleOnLockDeactivation}
      >
        {children && children(handleCloseButtonClick)}
      </FocusLock>
    </>
  );
};
