import {BorderPrimitives} from '../newskit-light/borders';

export const createBorders = (primitives: BorderPrimitives) => ({
  ...primitives,

  titleBarBorderWidth: primitives.borderWidth010,
  tagBorderWidth: primitives.borderWidth020,
});

export type BorderKeys = keyof Borders;
export type Borders = ReturnType<typeof createBorders>;
