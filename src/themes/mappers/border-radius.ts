import {Sizing} from '../newskit-light/spacing';

export const createBorderRadius = (sizingPrimitives: Sizing) => ({
  borderRadiusSharp: sizingPrimitives.sizing000,
  borderRadiusCircle: '50%',
  borderRadiusPill: '20rem',
  borderRadiusDefault: sizingPrimitives.sizing020,
  borderRadiusRounded010: sizingPrimitives.sizing010,
  borderRadiusRounded020: sizingPrimitives.sizing020,
  borderRadiusRounded030: sizingPrimitives.sizing030,
  borderRadiusRounded040: sizingPrimitives.sizing040,
  borderRadiusRounded050: sizingPrimitives.sizing050,
});

export type BorderRadius = ReturnType<typeof createBorderRadius>;
export type BorderRadiusKeys = keyof BorderRadius;
