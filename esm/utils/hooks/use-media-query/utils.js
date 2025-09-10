import { __assign } from "tslib";
var DEFAULT_BREAKPOINT = 'xs';
export var addMQEventListener = function (mql, handler) {
    /* istanbul ignore else */
    if (typeof mql.addEventListener !== 'undefined') {
        mql.addEventListener('change', handler);
    }
    else if (typeof mql.addListener !== 'undefined') {
        // Safari and IE11 support only deprecated browser API
        mql.addListener(handler);
    }
};
export var removeMQEventListener = function (mql, handler) {
    /* istanbul ignore else */
    if (typeof mql.removeEventListener !== 'undefined') {
        mql.removeEventListener('change', handler);
    }
    else if (typeof mql.removeListener !== 'undefined') {
        // Safari and IE11 support only deprecated browser API
        mql.removeListener(handler);
    }
};
export var createInitState = function (mqPerBreakpoint) {
    return Object.entries(mqPerBreakpoint).reduce(function (state, _a) {
        var _b;
        var breakpointKey = _a[0], mqString = _a[1];
        /* istanbul ignore else */
        if (typeof window !== 'undefined' && 'matchMedia' in window) {
            var mql = window.matchMedia(mqString);
            return __assign(__assign({}, state), (_b = {}, _b[breakpointKey] = mql.matches, _b));
            // eslint-disable-next-line no-else-return
        }
        else {
            return state;
        }
    }, {});
};
export var getCurrentBreakpointKey = function (state) {
    var active = Object.entries(state)
        .filter(function (_a) {
        var value = _a[1];
        return value;
    })
        .map(function (_a) {
        var key = _a[0];
        return key;
    });
    return (active[0] || DEFAULT_BREAKPOINT);
};
export var sortBreakpointKeys = function (keys, template) { return keys.sort(function (a, b) { return template.indexOf(a) - template.indexOf(b); }); };
//# sourceMappingURL=utils.js.map