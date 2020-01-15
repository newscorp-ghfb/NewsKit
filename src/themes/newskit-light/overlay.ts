export const overlayPrimitives = {
  gradientLight010:
    'linear-gradient(180deg, rgba(51,51,51,0.00) 0%, #333333 100%)',
  gradientDark010:
    'linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%)',

  overlayLight010: 'rgba(255,255,255,0.20)',
  overlayLight020: 'rgba(255,255,255,0.40)',
  overlayLight030: 'rgba(255,255,255,0.60)',
  overlayLight040: 'rgba(255,255,255,0.80)',

  overlayDark010: 'rgba(46,46,46,0.20)',
  overlayDark020: 'rgba(46,46,46,0.40)',
  overlayDark030: 'rgba(46,46,46,0.60)',
  overlayDark040: 'rgba(46,46,46,0.80)',
};

export type Overlay = typeof overlayPrimitives;
export type OverlayKeys = keyof Overlay;
