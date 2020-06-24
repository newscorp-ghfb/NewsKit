export const overlayPrimitives = {
  gradientDark010:
    'linear-gradient(90deg, rgba(48, 49, 49, 0) 0%, rgba(48, 49, 49, 1) 100%)',
  gradientLight010:
    'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',

  overlayLight010: 'rgba(255,255,255,0.20)',
  overlayLight020: 'rgba(255,255,255,0.40)',
  overlayLight030: 'rgba(255,255,255,0.60)',
  overlayLight040: 'rgba(255,255,255,0.80)',

  overlayDark010: 'rgba(10,10,10,0.20)',
  overlayDark020: 'rgba(10,10,10,0.40)',
  overlayDark030: 'rgba(10,10,10,0.60)',
  overlayDark040: 'rgba(10,10,10,0.80)',
};

export type Overlay = typeof overlayPrimitives;
export type OverlayKeys = keyof Overlay;
