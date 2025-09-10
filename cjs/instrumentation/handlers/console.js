"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createHandler = function (prefix) { return function (events) {
    return events.map(function (event) {
        var args = prefix ? [prefix, event] : [event];
        console.log.apply(console, args);
        return event;
    });
}; };
exports.default = createHandler;
//# sourceMappingURL=console.js.map