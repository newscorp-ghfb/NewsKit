"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEventTrackingToTealium = void 0;
var extendedWindow = typeof window !== 'undefined' ? window : null;
function sendEventTrackingToTealium(e) {
    if (extendedWindow && extendedWindow.tealiumTrack) {
        return extendedWindow.tealiumTrack(e);
    }
    return null;
}
exports.sendEventTrackingToTealium = sendEventTrackingToTealium;
var createTealiumTrackHandler = function () { return function (events) {
    return events.map(function (event) {
        sendEventTrackingToTealium(event);
        return event;
    });
}; };
exports.default = createTealiumTrackHandler;
//# sourceMappingURL=tealium-track.js.map