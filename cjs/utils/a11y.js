"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitAriaProps = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var splitAriaProps = function (props) {
    /* istanbul ignore next */
    if (typeof props !== 'object') {
        return { aria: {}, rest: {} };
    }
    var ariaProps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var nonAriaProps = {};
    Object.keys(props).forEach(function (propName) {
        if (propName.startsWith('aria')) {
            ariaProps[propName] = props[propName];
        }
        else {
            nonAriaProps[propName] = props[propName];
        }
    });
    return {
        aria: ariaProps,
        rest: nonAriaProps,
    };
};
exports.splitAriaProps = splitAriaProps;
//# sourceMappingURL=a11y.js.map