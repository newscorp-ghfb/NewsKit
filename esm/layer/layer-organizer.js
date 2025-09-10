import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../utils/hooks';
import { LayerOrganizerContextProvider, useLayerOrganizer } from './context';
var LAYER_ORGANIZER_CLASSNAME = 'nk-layer-organizer';
export var LayerOrganizer = function (_a) {
    var children = _a.children, zIndex = _a.zIndex;
    // host is a container for all layers
    var _b = useState(null), host = _b[0], setHost = _b[1];
    // parent layer organizer is used for nesting multiple layer-organizers
    var parentLayerOrganizer = useLayerOrganizer();
    // The parent container that the new layer-organizer(host) will be attached
    var parentHost = parentLayerOrganizer.host;
    // Create a host element which hold all layers
    var hostElement = React.useMemo(function () { return typeof document !== 'undefined' && document.createElement('div'); }, []);
    useIsomorphicLayoutEffect(function () {
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
    return (React.createElement(LayerOrganizerContextProvider, { value: layerOrganizerCtx }, children));
};
//# sourceMappingURL=layer-organizer.js.map