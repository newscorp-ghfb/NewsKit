import { createContext, useContext } from 'react';
var LayerOrganizerContext = createContext({
    host: null,
});
export var useLayerOrganizer = function () { return useContext(LayerOrganizerContext); };
export var LayerOrganizerContextProvider = LayerOrganizerContext.Provider;
var LayerContext = createContext(null);
export var useLayer = function () { return useContext(LayerContext); };
export var LayerContextProvider = LayerContext.Provider;
//# sourceMappingURL=context.js.map