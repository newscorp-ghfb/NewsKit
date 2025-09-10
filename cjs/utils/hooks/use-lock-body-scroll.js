"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLockBodyScroll = void 0;
var react_1 = require("react");
// TODO: improve scroll lock https://medium.com/react-camp/how-to-fight-the-body-scroll-2b00267b37ac should be supported in all browsers and devices
var useLockBodyScroll = function () {
    (0, react_1.useEffect)(function () {
        var originalStyle = window.getComputedStyle(document.body)
            .overflow;
        var disableBodyScroll = function () {
            /* istanbul ignore else */
            if (document !== undefined) {
                document.body.style.overflow = 'hidden';
            }
        };
        var resetBodyScroll = function () {
            /* istanbul ignore else */
            if (document !== undefined && originalStyle !== null) {
                document.body.style.overflow = originalStyle;
                originalStyle = null;
            }
        };
        disableBodyScroll();
        return function () { return resetBodyScroll(); };
    }, []); // Empty array ensures effect is only run on mount and unmount
};
exports.useLockBodyScroll = useLockBodyScroll;
//# sourceMappingURL=use-lock-body-scroll.js.map