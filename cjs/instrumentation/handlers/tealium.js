"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEventToTealium = void 0;
var types_1 = require("../types");
var extendedWindow = typeof window !== 'undefined' ? window : null;
function sendEventToTealium(e) {
    if (extendedWindow && extendedWindow.utag) {
        return e.trigger === types_1.EventTrigger.Load
            ? extendedWindow.utag.view(e)
            : extendedWindow.utag.link(e);
    }
    return null;
}
exports.sendEventToTealium = sendEventToTealium;
var createHandler = function () { return function (events) {
    return events.map(function (event) {
        sendEventToTealium(event);
        return event;
    });
}; };
exports.default = createHandler;
//# sourceMappingURL=tealium.js.map