import { EventTrigger } from '../types';
var extendedWindow = typeof window !== 'undefined' ? window : null;
export function sendEventToTealium(e) {
    if (extendedWindow && extendedWindow.utag) {
        return e.trigger === EventTrigger.Load
            ? extendedWindow.utag.view(e)
            : extendedWindow.utag.link(e);
    }
    return null;
}
var createHandler = function () { return function (events) {
    return events.map(function (event) {
        sendEventToTealium(event);
        return event;
    });
}; };
export default createHandler;
//# sourceMappingURL=tealium.js.map