import React, { useRef, useEffect, useCallback } from 'react';
import FocusLock from 'react-focus-lock';
import { hideOthers } from 'aria-hidden';
import composeRefs from '@seznam/compose-react-refs';
import { useKeypress } from '../utils/hooks';
import { get } from '../utils/get';
export var BaseDialogFunction = React.forwardRef(function (_a, ref) {
    var children = _a.children, open = _a.open, onDismiss = _a.onDismiss, _b = _a.restoreFocusTo, restoreFocusTo = _b === void 0 ? undefined : _b, renderOverlay = _a.renderOverlay, hideOverlay = _a.hideOverlay, disableFocusTrap = _a.disableFocusTrap, transitionInProgress = _a.transitionInProgress;
    var triggerClose = function () { return open && onDismiss && onDismiss(); };
    var handleEscape = function () {
        triggerClose();
    };
    var handleOverlayClick = function () {
        triggerClose();
    };
    var handleCloseButtonClick = function () {
        triggerClose();
    };
    useKeypress('Escape', handleEscape, { enabled: open });
    // ref to store activeElement ( focused ) before dialog been opened
    var originalFocusedElementRef = useRef(null);
    var baseDialogFunctionRef = useRef(null);
    var undoRef = useRef({});
    var handleOnLockActivation = function () {
        originalFocusedElementRef.current = document.activeElement;
        // Aria hides everything else that is not contained inside BaseDialogFunction
        if (baseDialogFunctionRef.current) {
            var undo = hideOthers(baseDialogFunctionRef.current);
            undoRef.current = { undo: undo };
        }
    };
    var handleOnLockDeactivation = useCallback(function () {
        var originalFocusedElement = get(originalFocusedElementRef, 'current');
        /* istanbul ignore else */
        if (restoreFocusTo || originalFocusedElement) {
            var elementToFocus_1 = restoreFocusTo || originalFocusedElement;
            // without the zero-timeout, focus will likely remain on the dialog
            window.setTimeout(function () {
                return typeof elementToFocus_1.focus === 'function' &&
                    elementToFocus_1.focus();
            }, 0);
        }
        if (undoRef.current) {
            var undo = undoRef.current.undo;
            if (typeof undo === 'function') {
                undo();
            }
        }
    }, [restoreFocusTo]);
    useEffect(function () {
        if (disableFocusTrap && open) {
            handleOnLockActivation();
        }
        return function () {
            if (disableFocusTrap && open) {
                handleOnLockDeactivation();
            }
        };
    }, [disableFocusTrap, handleOnLockDeactivation, open]);
    return (React.createElement("div", { ref: composeRefs(baseDialogFunctionRef, ref) },
        !hideOverlay && renderOverlay(handleOverlayClick),
        React.createElement(FocusLock, { disabled: !open || disableFocusTrap || transitionInProgress, onActivation: handleOnLockActivation, onDeactivation: handleOnLockDeactivation }, children && children(handleCloseButtonClick))));
});
//# sourceMappingURL=base-dialog-function.js.map