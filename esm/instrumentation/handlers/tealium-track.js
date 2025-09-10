var extendedWindow = typeof window !== 'undefined' ? window : null;
export function sendEventTrackingToTealium(e) {
    if (extendedWindow && extendedWindow.tealiumTrack) {
        return extendedWindow.tealiumTrack(e);
    }
    return null;
}
var createTealiumTrackHandler = function () { return function (events) {
    return events.map(function (event) {
        sendEventTrackingToTealium(event);
        return event;
    });
}; };
export default createTealiumTrackHandler;
//# sourceMappingURL=tealium-track.js.map