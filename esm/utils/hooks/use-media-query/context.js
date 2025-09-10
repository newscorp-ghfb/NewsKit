import { __assign } from "tslib";
import React, { useEffect, useMemo } from 'react';
import { useTheme } from '../../../theme';
import { getMediaQueryFromTheme } from '../../responsive-helpers';
import { createInitState, addMQEventListener, removeMQEventListener, } from './utils';
export var MQContext = React.createContext({});
export function MediaQueryProvider(_a) {
    var children = _a.children;
    var theme = useTheme();
    var breakpoints = theme.breakpoints;
    var breakpointKeys = Object.keys(breakpoints);
    var mqPerBreakpoint = breakpointKeys.reduce(function (acc, breakpointKey, index, arr) {
        var _a;
        var nextBreakpointKey = arr[index + 1] ? arr[index + 1] : undefined;
        var cssMediaRule = getMediaQueryFromTheme(breakpointKey, nextBreakpointKey)({
            theme: theme,
        }).replace('@media ', '');
        return __assign(__assign({}, acc), (_a = {}, _a[breakpointKey] = cssMediaRule, _a));
    }, {});
    var INITIAL_STATE = useMemo(function () { return createInitState(mqPerBreakpoint); }, [
        mqPerBreakpoint,
    ]);
    var _b = React.useState(function () { return INITIAL_STATE; }), breakpointState = _b[0], setBreakpointState = _b[1];
    var _c = React.useState(function () { return INITIAL_STATE; }), internalBreakpointState = _c[0], setInternalBreakpointState = _c[1];
    React.useEffect(function () {
        var mqListenersRegistry = [];
        /* istanbul ignore else */
        if (typeof window !== 'undefined' && 'matchMedia' in window) {
            Object.entries(mqPerBreakpoint).forEach(function (_a) {
                var breakpointKey = _a[0], mqString = _a[1];
                var mqList = window.matchMedia(mqString);
                var mqHandler = function (event) {
                    setInternalBreakpointState(function (prev) {
                        var _a;
                        var newState = __assign(__assign({}, prev), (_a = {}, _a[breakpointKey] = event.matches, _a));
                        return newState;
                    });
                };
                addMQEventListener(mqList, mqHandler);
                mqListenersRegistry.push({ mqList: mqList, mqHandler: mqHandler });
            });
        }
        return function () {
            mqListenersRegistry.forEach(function (_a) {
                var mqList = _a.mqList, mqHandler = _a.mqHandler;
                removeMQEventListener(mqList, mqHandler);
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(function () {
        if (Object.values(internalBreakpointState).filter(function (e) { return e === true; }).length ===
            1) {
            setBreakpointState(internalBreakpointState);
        }
    }, [internalBreakpointState]);
    return (React.createElement(MQContext.Provider, { value: breakpointState }, children));
}
export var withMediaQueryProvider = function (BaseComponent) {
    var WrappedComponent = React.forwardRef(function (props, ref) { return (React.createElement(MediaQueryProvider, null,
        React.createElement(BaseComponent, __assign({}, props, { ref: ref })))); });
    return WrappedComponent;
};
//# sourceMappingURL=context.js.map