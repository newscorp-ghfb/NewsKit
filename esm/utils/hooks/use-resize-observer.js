// Code from here: https://codesandbox.io/s/zw8kylol8m?file=/src/useResizeObserver.ts
import React from 'react';
export var useResizeObserver = function (ref, callback) {
    var _a = React.useState(0), width = _a[0], setWidth = _a[1];
    var _b = React.useState(0), height = _b[0], setHeight = _b[1];
    var handleResize = React.useCallback(function (entries) {
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
    React.useEffect(function () {
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
//# sourceMappingURL=use-resize-observer.js.map