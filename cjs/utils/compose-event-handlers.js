"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeEventHandlers = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var composeEventHandlers = function (listeners) {
    if (listeners === void 0) { listeners = []; }
    return function (event) {
        listeners.forEach(function (listener) {
            if (typeof listener === 'function') {
                listener(event);
            }
        });
    };
};
exports.composeEventHandlers = composeEventHandlers;
//# sourceMappingURL=compose-event-handlers.js.map