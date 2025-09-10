"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toast = exports.ToastProvider = void 0;
var tslib_1 = require("tslib");
var react_hot_toast_1 = tslib_1.__importStar(require("react-hot-toast"));
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var utils_1 = require("./utils");
var ToastProvider = function (_a) {
    var _b = _a.position, position = _b === void 0 ? 'bottom-center' : _b, _c = _a.autoHideDuration, autoHideDuration = _c === void 0 ? 6000 : _c, _d = _a.horizontalOffset, horizontalOffset = _d === void 0 ? 'space040' : _d, _e = _a.verticalOffset, verticalOffset = _e === void 0 ? 'space040' : _e;
    var _f = (0, react_hot_toast_1.useToaster)({ duration: autoHideDuration }), toasts = _f.toasts, handlers = _f.handlers;
    var startPause = handlers.startPause, endPause = handlers.endPause, calculateOffset = handlers.calculateOffset, updateHeight = handlers.updateHeight;
    var toastContainerRef = (0, react_1.useRef)(null);
    // focus in and out are not supported by react
    // so we need to use the native way
    (0, react_1.useEffect)(function () {
        var toastContainerElement = toastContainerRef.current;
        /* istanbul ignore else */
        if (toastContainerElement) {
            toastContainerElement.addEventListener('focusin', startPause);
            toastContainerElement.addEventListener('focusout', endPause);
        }
        return function () {
            /* istanbul ignore else */
            if (toastContainerElement) {
                toastContainerElement.removeEventListener('focusin', startPause);
                toastContainerElement.removeEventListener('focusout', endPause);
            }
        };
    }, [startPause, endPause]);
    return (react_1.default.createElement(styled_1.StyledToastProvider, { ref: toastContainerRef, horizontalOffset: horizontalOffset, verticalOffset: verticalOffset, position: position, onMouseEnter: startPause, onMouseLeave: endPause }, toasts.map(function (toast) {
        var _a;
        var offset = calculateOffset(toast.id, {
            reverseOrder: true,
            margin: 0,
        });
        var ref = function (el) {
            if (el && !toast.height) {
                var height = el.offsetHeight;
                /* istanbul ignore next */
                if (height) {
                    updateHeight(toast.id, height);
                }
            }
        };
        var node = toast.message;
        /* istanbul ignore else */
        if (typeof node === 'function') {
            node = node(toast);
        }
        return (react_1.default.createElement(styled_1.StyledToastBar, { style: (_a = {}, _a[(0, utils_1.getVerticalPosition)(position)] = offset, _a), key: toast.id, position: position, ref: ref, visible: toast.visible }, node));
    })));
};
exports.ToastProvider = ToastProvider;
var toast = function (component, toastOptions) {
    var options = {
        duration: toastOptions === null || toastOptions === void 0 ? void 0 : toastOptions.autoHideDuration,
    };
    return (0, react_hot_toast_1.default)(function (e) {
        var onClose = function () { return react_hot_toast_1.default.dismiss(e.id); };
        if (typeof component === 'function') {
            return component({ id: e.id, onClose: onClose });
        }
        return component;
    }, options);
};
exports.toast = toast;
//# sourceMappingURL=toast-provider.js.map