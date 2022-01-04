export const overlayPrimitives = {
  overlayGradient010:
    'linear-gradient(180deg, rgba(51,51,51,0.00) 0%, #333333 100%)',
  overlayGradient020:
    'linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%)',
  overlayTint010: 'rgba(51,51,51,0.60)',
  overlayTint020: 'rgba(255,255,255,0.60)',
};

export type Overlay = typeof overlayPrimitives;
export type OverlayKeys = keyof Overlay;
