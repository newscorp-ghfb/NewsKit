import React from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect } from '../utils/hooks';
import { LayerContextProvider, useLayerOrganizer, useLayer } from './context';
var LAYER_CLASSNAME = 'nk-layer';
export var Layer = function (_a) {
    var children = _a.children, appendToRef = _a.appendToRef, className = _a.className;
    // This is the host set in the parent LayerOrganizer
    var layerOrganizerHost = useLayerOrganizer().host;
    // parent layer is used for nesting multiple layers
    var parentLayer = useLayer(); //
    var layerElement = React.useMemo(function () { return typeof document !== 'undefined' && document.createElement('div'); }, []);
    useIsomorphicLayoutEffect(function () {
        // SSR only
        /* istanbul ignore next */
        if (!layerElement || typeof document === 'undefined')
            return;
        // target: is the element the Layer will be appended to
        // it can be document.body, parent layer-organizer or attache to another element via Ref
        var hostElement = layerOrganizerHost || document.body;
        if (appendToRef && appendToRef.current) {
            hostElement = appendToRef.current;
        }
        else if (parentLayer) {
            hostElement = parentLayer;
        }
        /* istanbul ignore next */
        if (!hostElement)
            return;
        // Add default className and user provided classNames to the layer element
        // Which will allow user to style Layer component
        var classList = [LAYER_CLASSNAME];
        if (className)
            className.split(' ').forEach(function (item) { return classList.push(item); });
        classList.forEach(function (item) { return layerElement.classList.add(item); });
        hostElement.appendChild(layerElement);
        // eslint-disable-next-line consistent-return
        return function () {
            if (hostElement) {
                hostElement.removeChild(layerElement);
            }
        };
    }, [layerElement, parentLayer, layerOrganizerHost, appendToRef, className]);
    // On SSR we don't render layers so there is not nesting, because React.Portal needs DOM
    return typeof document === 'undefined' || !layerElement ? (
    /* istanbul ignore next */
    React.createElement(React.Fragment, null, children)) : (createPortal(React.createElement(LayerContextProvider, { value: layerElement }, children), layerElement));
};
//# sourceMappingURL=layer.js.map