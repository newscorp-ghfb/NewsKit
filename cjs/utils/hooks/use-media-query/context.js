"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMediaQueryProvider = exports.MediaQueryProvider = exports.MQContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var theme_1 = require("../../../theme");
var responsive_helpers_1 = require("../../responsive-helpers");
var utils_1 = require("./utils");
exports.MQContext = react_1.default.createContext({});
function MediaQueryProvider(_a) {
    var children = _a.children;
    var theme = (0, theme_1.useTheme)();
    var breakpoints = theme.breakpoints;
    var breakpointKeys = Object.keys(breakpoints);
    var mqPerBreakpoint = breakpointKeys.reduce(function (acc, breakpointKey, index, arr) {
        var _a;
        var nextBreakpointKey = arr[index + 1] ? arr[index + 1] : undefined;
        var cssMediaRule = (0, responsive_helpers_1.getMediaQueryFromTheme)(breakpointKey, nextBreakpointKey)({
            theme: theme,
        }).replace('@media ', '');
        return tslib_1.__assign(tslib_1.__assign({}, acc), (_a = {}, _a[breakpointKey] = cssMediaRule, _a));
    }, {});
    var INITIAL_STATE = (0, react_1.useMemo)(function () { return (0, utils_1.createInitState)(mqPerBreakpoint); }, [
        mqPerBreakpoint,
    ]);
    var _b = react_1.default.useState(function () { return INITIAL_STATE; }), breakpointState = _b[0], setBreakpointState = _b[1];
    var _c = react_1.default.useState(function () { return INITIAL_STATE; }), internalBreakpointState = _c[0], setInternalBreakpointState = _c[1];
    react_1.default.useEffect(function () {
        var mqListenersRegistry = [];
        /* istanbul ignore else */
        if (typeof window !== 'undefined' && 'matchMedia' in window) {
            Object.entries(mqPerBreakpoint).forEach(function (_a) {
                var breakpointKey = _a[0], mqString = _a[1];
                var mqList = window.matchMedia(mqString);
                var mqHandler = function (event) {
                    setInternalBreakpointState(function (prev) {
                        var _a;
                        var newState = tslib_1.__assign(tslib_1.__assign({}, prev), (_a = {}, _a[breakpointKey] = event.matches, _a));
                        return newState;
                    });
                };
                (0, utils_1.addMQEventListener)(mqList, mqHandler);
                mqListenersRegistry.push({ mqList: mqList, mqHandler: mqHandler });
            });
        }
        return function () {
            mqListenersRegistry.forEach(function (_a) {
                var mqList = _a.mqList, mqHandler = _a.mqHandler;
                (0, utils_1.removeMQEventListener)(mqList, mqHandler);
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useEffect)(function () {
        if (Object.values(internalBreakpointState).filter(function (e) { return e === true; }).length ===
            1) {
            setBreakpointState(internalBreakpointState);
        }
    }, [internalBreakpointState]);
    return (react_1.default.createElement(exports.MQContext.Provider, { value: breakpointState }, children));
}
exports.MediaQueryProvider = MediaQueryProvider;
var withMediaQueryProvider = function (BaseComponent) {
    var WrappedComponent = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(MediaQueryProvider, null,
        react_1.default.createElement(BaseComponent, tslib_1.__assign({}, props, { ref: ref })))); });
    return WrappedComponent;
};
exports.withMediaQueryProvider = withMediaQueryProvider;
//# sourceMappingURL=context.js.map