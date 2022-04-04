import {createContext, useContext} from 'react';

interface LayerOrganizerContext {
  host: HTMLDivElement | null;
}

const LayerOganizerContext = createContext<LayerOrganizerContext>({
  host: null,
});

export const useLayerOrganizer = () => useContext(LayerOganizerContext);
export const LayerOganizerContextProvider = LayerOganizerContext.Provider;

type LayerContext = HTMLDivElement | null;

// eslint-disable-next-line @typescript-eslint/no-redeclare
const LayerContext = createContext<LayerContext | null>(null);

export const useLayer = () => useContext(LayerContext);
export const LayerContextProvider = LayerContext.Provider;
