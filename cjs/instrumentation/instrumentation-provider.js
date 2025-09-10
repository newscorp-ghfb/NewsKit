"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInstrumentation = exports.withInstrumentation = exports.InstrumentationProvider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var event_instrumentation_1 = require("./event-instrumentation");
var InstrumentationContext = react_1.default.createContext({
    context: {},
    fireEvent: function () { },
});
var InstrumentationProvider = function (_a) {
    var _b = _a.context, context = _b === void 0 ? {} : _b, fireEvent = _a.fireEvent, children = _a.children;
    var parent = (0, react_1.useContext)(InstrumentationContext);
    return (react_1.default.createElement(InstrumentationContext.Provider, { value: {
            fireEvent: fireEvent ||
                (function (event) { return parent.fireEvent((0, event_instrumentation_1.mergeContexts)(context, event)); }),
            context: tslib_1.__assign(tslib_1.__assign({}, parent.context), context),
        } }, children));
};
exports.InstrumentationProvider = InstrumentationProvider;
var useFireEvent = function () {
    // Don't expose the internal context object.
    var _a = (0, react_1.useContext)(InstrumentationContext), fireEvent = _a.fireEvent, context = _a.context;
    return (0, react_1.useCallback)(function (event) { return fireEvent((0, event_instrumentation_1.mergeContexts)(context, event)); }, [context, fireEvent]);
};
var withInstrumentation = function (Component) {
    var ComponentWithInstrumentation = function (props) { return (react_1.default.createElement(Component, tslib_1.__assign({ fireEvent: useFireEvent() }, props))); };
    ComponentWithInstrumentation.displayName = Component.displayName;
    return ComponentWithInstrumentation;
};
exports.withInstrumentation = withInstrumentation;
var useInstrumentation = function () { return ({
    fireEvent: useFireEvent(),
}); };
exports.useInstrumentation = useInstrumentation;
//# sourceMappingURL=instrumentation-provider.js.map