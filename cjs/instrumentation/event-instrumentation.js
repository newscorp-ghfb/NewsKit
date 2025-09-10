"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventInstrumentation = exports.mergeContexts = void 0;
var tslib_1 = require("tslib");
var types_1 = require("./types");
var mergeContexts = function (context, event) { return (tslib_1.__assign(tslib_1.__assign({}, event), { context: tslib_1.__assign(tslib_1.__assign({}, context), event.context) })); };
exports.mergeContexts = mergeContexts;
var allowedEventTriggers = Object.values(types_1.EventTrigger);
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
var createEventInstrumentation = function (eventHandlers, context) {
    if (context === void 0) { context = {}; }
    if (!eventHandlers.length) {
        throw new Error('createEventInstrumentation called with no event handlers');
    }
    var handlers = tslib_1.__spreadArray([], eventHandlers, true);
    var fireEvent = function (event) {
        assertEvent(event);
        handlers.forEach(function (handler) {
            handler([(0, exports.mergeContexts)(context, event)]);
        });
    };
    return {
        context: context,
        fireEvent: fireEvent,
    };
};
exports.createEventInstrumentation = createEventInstrumentation;
//# sourceMappingURL=event-instrumentation.js.map