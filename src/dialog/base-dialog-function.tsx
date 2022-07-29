import React, {useRef, useEffect, useCallback} from 'react';
import FocusLock from 'react-focus-lock';
import {hideOthers, Undo} from 'aria-hidden';
import composeRefs from '@seznam/compose-react-refs';
import {useKeypress} from '../utils/hooks';
import {get} from '../utils/get';
import {BaseDialogFunctionProps} from './types';

export const BaseDialogFunction = React.forwardRef<
  HTMLDivElement,
  BaseDialogFunctionProps
>(
  (
    {
      children,
      open,
      onDismiss,
      restoreFocusTo = undefined,
      renderOverlay,
      hideOverlay,
      disableFocusTrap,
    },
    ref,
  ) => {
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

    const baseDialogFunctionRef = useRef<HTMLDivElement>(null);
    const undoRef = useRef<{undo?: Undo}>({});

    const handleOnLockActivation = () => {
      originalFocusedElementRef.current = document.activeElement;

      // Aria hides everything else that is not contained inside BaseDialogFunction
      if (baseDialogFunctionRef.current) {
        const undo = hideOthers(baseDialogFunctionRef.current);
        undoRef.current = {undo};
      }
    };

    const handleOnLockDeactivation = useCallback(() => {
      const originalFocusedElement = get(originalFocusedElementRef, 'current');

      /* istanbul ignore else */
      if (restoreFocusTo || originalFocusedElement) {
        const elementToFocus = restoreFocusTo || originalFocusedElement;
        // without the zero-timeout, focus will likely remain on the dialog
        window.setTimeout(
          () =>
            typeof elementToFocus.focus === 'function' &&
            elementToFocus.focus(),
          0,
        );
      }

      if (undoRef.current) {
        const {undo} = undoRef.current;
        if (typeof undo === 'function') {
          undo();
        }
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
      <div ref={composeRefs(baseDialogFunctionRef, ref)}>
        {!hideOverlay && renderOverlay(handleOverlayClick)}
        <FocusLock
          disabled={!open || disableFocusTrap}
          onActivation={handleOnLockActivation}
          onDeactivation={handleOnLockDeactivation}
        >
          {children && children(handleCloseButtonClick)}
        </FocusLock>
      </div>
    );
  },
);
