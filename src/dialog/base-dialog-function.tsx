import React, {useRef} from 'react';
import FocusLock from 'react-focus-lock';
import {useKeypress} from '../utils/hooks';
import {get} from '../utils/get';
import {BaseDialogFunctionProps} from './types';

export const BaseDialogFunction: React.FC<BaseDialogFunctionProps> = ({
  children,
  /* istanbul ignore next */
  open = false,
  onDismiss,
  restoreFocusTo = undefined,
  renderOverlay,
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

  const handleOnLockDeactivation = () => {
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
  };

  return (
    <>
      {renderOverlay(handleOverlayClick)}
      <FocusLock
        disabled={!open}
        onActivation={handleOnLockActivation}
        onDeactivation={handleOnLockDeactivation}
      >
        {children && children(handleCloseButtonClick)}
      </FocusLock>
    </>
  );
};
