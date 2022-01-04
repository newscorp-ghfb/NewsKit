export const animationPrimitives = {
  timing100: '0.25s',
  timing400: '0.4s',
  timing700: '0.6s',
  easeOutCurve: 'cubic-bezier(.2, .8, .4, 1)',
};

export type AnimationKeys = keyof Animation;
export type Animation = typeof animationPrimitives;
