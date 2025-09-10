"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDialogFunction = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_focus_lock_1 = tslib_1.__importDefault(require("react-focus-lock"));
var aria_hidden_1 = require("aria-hidden");
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var hooks_1 = require("../utils/hooks");
var get_1 = require("../utils/get");
exports.BaseDialogFunction = react_1.default.forwardRef(function (_a, ref) {
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
    (0, hooks_1.useKeypress)('Escape', handleEscape, { enabled: open });
    // ref to store activeElement ( focused ) before dialog been opened
    var originalFocusedElementRef = (0, react_1.useRef)(null);
    var baseDialogFunctionRef = (0, react_1.useRef)(null);
    var undoRef = (0, react_1.useRef)({});
    var handleOnLockActivation = function () {
        originalFocusedElementRef.current = document.activeElement;
        // Aria hides everything else that is not contained inside BaseDialogFunction
        if (baseDialogFunctionRef.current) {
            var undo = (0, aria_hidden_1.hideOthers)(baseDialogFunctionRef.current);
            undoRef.current = { undo: undo };
        }
    };
    var handleOnLockDeactivation = (0, react_1.useCallback)(function () {
        var originalFocusedElement = (0, get_1.get)(originalFocusedElementRef, 'current');
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
    (0, react_1.useEffect)(function () {
        if (disableFocusTrap && open) {
            handleOnLockActivation();
        }
        return function () {
            if (disableFocusTrap && open) {
                handleOnLockDeactivation();
            }
        };
    }, [disableFocusTrap, handleOnLockDeactivation, open]);
    return (react_1.default.createElement("div", { ref: (0, compose_react_refs_1.default)(baseDialogFunctionRef, ref) },
        !hideOverlay && renderOverlay(handleOverlayClick),
        react_1.default.createElement(react_focus_lock_1.default, { disabled: !open || disableFocusTrap || transitionInProgress, onActivation: handleOnLockActivation, onDeactivation: handleOnLockDeactivation }, children && children(handleCloseButtonClick))));
});
//# sourceMappingURL=base-dialog-function.js.map