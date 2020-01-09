import {Sizing, SizingKeys, sizingPrimitives} from './spacing';

export enum BorderRadiusShape {
  Squared = 'squared',
  SemiRounded = 'semiRounded',
  Rounded = 'rounded',
}

export type RadiusCalculators = Record<
  BorderRadiusShape,
  (size: string) => string
>;

const buildSizingObject = (
  shape: BorderRadiusShape,
  radiusCalculators: RadiusCalculators,
) => (acc: Sizing, [sizeKey, sizeValue]: [keyof Sizing, string]) => {
  acc[sizeKey as SizingKeys] = radiusCalculators[shape](sizeValue);
  return acc;
};

const buildShapeObject = (radiusCalculators: RadiusCalculators) => (
  acc: BorderRadius,
  shape: BorderRadiusShape,
) => {
  const entries = Object.entries(sizingPrimitives) as Array<
    [keyof Sizing, string]
  >;
  acc[shape] = entries.reduce(
    buildSizingObject(shape, radiusCalculators),
    {} as Sizing,
  );
  return acc;
};

export const buildBorderRadiusSizing = (radiusCalculators: RadiusCalculators) =>
  Object.values(BorderRadiusShape).reduce<BorderRadius>(
    buildShapeObject(radiusCalculators),
    {} as BorderRadius,
  );

export const borderRadiusPrimitives: BorderRadius = buildBorderRadiusSizing({
  [BorderRadiusShape.Squared]: () => '0',
  [BorderRadiusShape.SemiRounded]: (size: string) => `calc(${size} * 0.25)`,
  [BorderRadiusShape.Rounded]: (size: string) => size,
});

export type BorderRadiusKeys = BorderRadiusShape;
export type BorderRadius = Record<BorderRadiusShape, Sizing>;
