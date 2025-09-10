"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useResizeObserver = void 0;
var tslib_1 = require("tslib");
// Code from here: https://codesandbox.io/s/zw8kylol8m?file=/src/useResizeObserver.ts
var react_1 = tslib_1.__importDefault(require("react"));
var useResizeObserver = function (ref, callback) {
    var _a = react_1.default.useState(0), width = _a[0], setWidth = _a[1];
    var _b = react_1.default.useState(0), height = _b[0], setHeight = _b[1];
    var handleResize = react_1.default.useCallback(function (entries) {
        /* istanbul ignore next */
        if (!Array.isArray(entries) || !entries.length) {
            return;
        }
        var entry = entries[0];
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
        if (callback) {
            callback(entry.contentRect);
        }
    }, [callback]);
    react_1.default.useEffect(function () {
        if (!ref || !ref.current || !window.ResizeObserver) {
            return;
        }
        var RO = new window.ResizeObserver(function (entries) {
            // Prevents ResizeObserver - loop limit exceeded error
            // https://stackoverflow.com/a/58701523
            return window.requestAnimationFrame(function () { return handleResize(entries); });
        });
        RO.observe(ref.current);
        // eslint-disable-next-line consistent-return
        return function () {
            RO.disconnect();
        };
    }, [ref, handleResize]);
    return [width, height];
};
exports.useResizeObserver = useResizeObserver;
//# sourceMappingURL=use-resize-observer.js.map