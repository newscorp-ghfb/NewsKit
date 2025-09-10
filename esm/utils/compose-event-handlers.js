// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var composeEventHandlers = function (listeners) {
    if (listeners === void 0) { listeners = []; }
    return function (event) {
        listeners.forEach(function (listener) {
            if (typeof listener === 'function') {
                listener(event);
            }
        });
    };
};
//# sourceMappingURL=compose-event-handlers.js.map