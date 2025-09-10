"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = require("react-dom");
var hooks_1 = require("../utils/hooks");
var context_1 = require("./context");
var LAYER_CLASSNAME = 'nk-layer';
var Layer = function (_a) {
    var children = _a.children, appendToRef = _a.appendToRef, className = _a.className;
    // This is the host set in the parent LayerOrganizer
    var layerOrganizerHost = (0, context_1.useLayerOrganizer)().host;
    // parent layer is used for nesting multiple layers
    var parentLayer = (0, context_1.useLayer)(); //
    var layerElement = react_1.default.useMemo(function () { return typeof document !== 'undefined' && document.createElement('div'); }, []);
    (0, hooks_1.useIsomorphicLayoutEffect)(function () {
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
    react_1.default.createElement(react_1.default.Fragment, null, children)) : ((0, react_dom_1.createPortal)(react_1.default.createElement(context_1.LayerContextProvider, { value: layerElement }, children), layerElement));
};
exports.Layer = Layer;
//# sourceMappingURL=layer.js.map