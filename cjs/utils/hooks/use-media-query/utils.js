"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortBreakpointKeys = exports.getCurrentBreakpointKey = exports.createInitState = exports.removeMQEventListener = exports.addMQEventListener = void 0;
var tslib_1 = require("tslib");
var DEFAULT_BREAKPOINT = 'xs';
var addMQEventListener = function (mql, handler) {
    /* istanbul ignore else */
    if (typeof mql.addEventListener !== 'undefined') {
        mql.addEventListener('change', handler);
    }
    else if (typeof mql.addListener !== 'undefined') {
        // Safari and IE11 support only deprecated browser API
        mql.addListener(handler);
    }
};
exports.addMQEventListener = addMQEventListener;
var removeMQEventListener = function (mql, handler) {
    /* istanbul ignore else */
    if (typeof mql.removeEventListener !== 'undefined') {
        mql.removeEventListener('change', handler);
    }
    else if (typeof mql.removeListener !== 'undefined') {
        // Safari and IE11 support only deprecated browser API
        mql.removeListener(handler);
    }
};
exports.removeMQEventListener = removeMQEventListener;
var createInitState = function (mqPerBreakpoint) {
    return Object.entries(mqPerBreakpoint).reduce(function (state, _a) {
        var _b;
        var breakpointKey = _a[0], mqString = _a[1];
        /* istanbul ignore else */
        if (typeof window !== 'undefined' && 'matchMedia' in window) {
            var mql = window.matchMedia(mqString);
            return tslib_1.__assign(tslib_1.__assign({}, state), (_b = {}, _b[breakpointKey] = mql.matches, _b));
            // eslint-disable-next-line no-else-return
        }
        else {
            return state;
        }
    }, {});
};
exports.createInitState = createInitState;
var getCurrentBreakpointKey = function (state) {
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
exports.getCurrentBreakpointKey = getCurrentBreakpointKey;
var sortBreakpointKeys = function (keys, template) { return keys.sort(function (a, b) { return template.indexOf(a) - template.indexOf(b); }); };
exports.sortBreakpointKeys = sortBreakpointKeys;
//# sourceMappingURL=utils.js.map