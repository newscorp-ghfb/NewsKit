import { __assign, __spreadArray } from "tslib";
import { EventTrigger, } from './types';
export var mergeContexts = function (context, event) { return (__assign(__assign({}, event), { context: __assign(__assign({}, context), event.context) })); };
var allowedEventTriggers = Object.values(EventTrigger);
var assertEvent = function (event) {
    if (!event.originator) {
        throw new Error("Event originator cannot be undefined.");
    }
    if (!event.trigger) {
        throw new Error("Event trigger cannot be undefined.");
    }
    if (!allowedEventTriggers.includes(event.trigger)) {
        throw new Error("Event trigger \"".concat(event.trigger, "\" is not allowed."));
    }
};
export var createEventInstrumentation = function (eventHandlers, context) {
    if (context === void 0) { context = {}; }
    if (!eventHandlers.length) {
        throw new Error('createEventInstrumentation called with no event handlers');
    }
    var handlers = __spreadArray([], eventHandlers, true);
    var fireEvent = function (event) {
        assertEvent(event);
        handlers.forEach(function (handler) {
            handler([mergeContexts(context, event)]);
        });
    };
    return {
        context: context,
        fireEvent: fireEvent,
    };
};
//# sourceMappingURL=event-instrumentation.js.map