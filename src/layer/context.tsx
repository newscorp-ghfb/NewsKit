import {createContext, useContext} from 'react';

type LayerOrganizerContextType = {
  host: HTMLDivElement | null;
};
const LayerOrganizerContext = createContext<LayerOrganizerContextType>({
  host: null,
});
export const useLayerOrganizer = () => useContext(LayerOrganizerContext);
export const LayerOrganizerContextProvider = LayerOrganizerContext.Provider;

type LayerContextType = HTMLDivElement | null;
const LayerContext = createContext<LayerContextType | null>(null);
export const useLayer = () => useContext(LayerContext);
export const LayerContextProvider = LayerContext.Provider;
