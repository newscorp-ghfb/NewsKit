"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerContextProvider = exports.useLayer = exports.LayerOrganizerContextProvider = exports.useLayerOrganizer = void 0;
var react_1 = require("react");
var LayerOrganizerContext = (0, react_1.createContext)({
    host: null,
});
var useLayerOrganizer = function () { return (0, react_1.useContext)(LayerOrganizerContext); };
exports.useLayerOrganizer = useLayerOrganizer;
exports.LayerOrganizerContextProvider = LayerOrganizerContext.Provider;
var LayerContext = (0, react_1.createContext)(null);
var useLayer = function () { return (0, react_1.useContext)(LayerContext); };
exports.useLayer = useLayer;
exports.LayerContextProvider = LayerContext.Provider;
//# sourceMappingURL=context.js.map