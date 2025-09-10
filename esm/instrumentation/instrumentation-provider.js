import { __assign } from "tslib";
import React, { useContext, useCallback } from 'react';
import { mergeContexts } from './event-instrumentation';
var InstrumentationContext = React.createContext({
    context: {},
    fireEvent: function () { },
});
export var InstrumentationProvider = function (_a) {
    var _b = _a.context, context = _b === void 0 ? {} : _b, fireEvent = _a.fireEvent, children = _a.children;
    var parent = useContext(InstrumentationContext);
    return (React.createElement(InstrumentationContext.Provider, { value: {
            fireEvent: fireEvent ||
                (function (event) { return parent.fireEvent(mergeContexts(context, event)); }),
            context: __assign(__assign({}, parent.context), context),
        } }, children));
};
var useFireEvent = function () {
    // Don't expose the internal context object.
    var _a = useContext(InstrumentationContext), fireEvent = _a.fireEvent, context = _a.context;
    return useCallback(function (event) { return fireEvent(mergeContexts(context, event)); }, [context, fireEvent]);
};
export var withInstrumentation = function (Component) {
    var ComponentWithInstrumentation = function (props) { return (React.createElement(Component, __assign({ fireEvent: useFireEvent() }, props))); };
    ComponentWithInstrumentation.displayName = Component.displayName;
    return ComponentWithInstrumentation;
};
export var useInstrumentation = function () { return ({
    fireEvent: useFireEvent(),
}); };
//# sourceMappingURL=instrumentation-provider.js.map