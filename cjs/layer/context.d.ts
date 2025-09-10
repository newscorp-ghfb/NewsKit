/// <reference types="react" />
type LayerOrganizerContextType = {
    host: HTMLDivElement | null;
};
export declare const useLayerOrganizer: () => LayerOrganizerContextType;
export declare const LayerOrganizerContextProvider: import("react").Provider<LayerOrganizerContextType>;
type LayerContextType = HTMLDivElement | null;
export declare const useLayer: () => LayerContextType;
export declare const LayerContextProvider: import("react").Provider<LayerContextType>;
export {};
//# sourceMappingURL=context.d.ts.map