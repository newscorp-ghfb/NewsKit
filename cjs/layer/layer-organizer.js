"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerOrganizer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var hooks_1 = require("../utils/hooks");
var context_1 = require("./context");
var LAYER_ORGANIZER_CLASSNAME = 'nk-layer-organizer';
var LayerOrganizer = function (_a) {
    var children = _a.children, zIndex = _a.zIndex;
    // host is a container for all layers
    var _b = (0, react_1.useState)(null), host = _b[0], setHost = _b[1];
    // parent layer organizer is used for nesting multiple layer-organizers
    var parentLayerOrganizer = (0, context_1.useLayerOrganizer)();
    // The parent container that the new layer-organizer(host) will be attached
    var parentHost = parentLayerOrganizer.host;
    // Create a host element which hold all layers
    var hostElement = react_1.default.useMemo(function () { return typeof document !== 'undefined' && document.createElement('div'); }, []);
    (0, hooks_1.useIsomorphicLayoutEffect)(function () {
        // Ignore that on SSR
        /* istanbul ignore next */
        if (!hostElement || typeof document === 'undefined')
            return;
        // target: is the place where we attach the current layer-organizer(host)
        var target = parentHost || document.body;
        hostElement.setAttribute('class', LAYER_ORGANIZER_CLASSNAME);
        if (zIndex) {
            hostElement.style.position = 'absolute';
            hostElement.style.top = '0';
            hostElement.style.left = '0';
            hostElement.style.right = '0';
            hostElement.style.zIndex = zIndex.toString();
        }
        target.appendChild(hostElement);
        setHost(hostElement);
        // eslint-disable-next-line consistent-return
        return function () {
            if (host && target.contains(host)) {
                target.removeChild(host);
                setHost(null);
            }
        };
    }, [hostElement, host, parentLayerOrganizer.host, zIndex]);
    var layerOrganizerCtx = {
        host: host,
    };
    return (react_1.default.createElement(context_1.LayerOrganizerContextProvider, { value: layerOrganizerCtx }, children));
};
exports.LayerOrganizer = LayerOrganizer;
//# sourceMappingURL=layer-organizer.js.map