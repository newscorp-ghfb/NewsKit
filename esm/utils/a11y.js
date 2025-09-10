// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var splitAriaProps = function (props) {
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
//# sourceMappingURL=a11y.js.map