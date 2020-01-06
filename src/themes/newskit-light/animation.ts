export const animationEasing = {
  animationEaseIn: 'cubic-bezier(.5, 0, 1, 1)',
  animationEaseOut: 'cubic-bezier(0, 0, .5, 1)',
  animationEaseInAndOut: 'cubic-bezier(.5, 0, .5, 1)',
};

export type AnimationEasingKeys = keyof AnimationEasing;
export type AnimationEasing = typeof animationEasing;

export const animationDuration = {
  animationDuration010: '100ms',
  animationDuration020: '200ms',
  animationDuration030: '300ms',
  animationDuration040: '400ms',
  animationDuration050: '500ms',
};

export type AnimationDuration = typeof animationDuration;
export type AnimationDurationKeys = keyof AnimationDuration;
