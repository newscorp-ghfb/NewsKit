export const animationPrimitives = {
  animationEaseIn: 'cubic-bezier(.5, 0, 1, 1)',
  animationEaseOut: 'cubic-bezier(0, 0, .5, 1)',
  animationEaseInAndOut: 'cubic-bezier(.5, 0, .5, 1)',

  animationDuration010: '100ms',
  animationDuration020: '200ms',
  animationDuration030: '300ms',
  animationDuration040: '400ms',
  animationDuration050: '500ms',
};

export type AnimationKeys = keyof Animation;
export type Animation = typeof animationPrimitives;
