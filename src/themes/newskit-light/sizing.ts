export const sizingPrimitives = {
  sizing000: '0',
  sizing010: '4px',
  sizing020: '8px',
  sizing030: '12px',
  sizing040: '16px',
  sizing050: '24px',
  sizing060: '32px',
  sizing070: '40px',
  sizing080: '48px',
  sizing090: '64px',
  sizing100: '80px',
  sizing110: '120px',
  sizing120: '160px',

  spacingSize000: '0',
  spacingSize010: '4px',
  spacingSize020: '8px',
  spacingSize030: '12px',
  spacingSize040: '16px',
  spacingSize050: '24px',
  spacingSize060: '32px',
  spacingSize070: '40px',
  spacingSize080: '48px',
  spacingSize090: '64px',
  spacingSize100: '80px',
  spacingSize110: '120px',
  spacingSize120: '160px',
};

export type SizingKeys = keyof Sizing;
export type Sizing = typeof sizingPrimitives;

export const iconSizes = {
  iconSize010: sizingPrimitives.sizing040,
  iconSize020: sizingPrimitives.sizing050,
  iconSize030: sizingPrimitives.sizing060,
  iconSize040: sizingPrimitives.sizing070,
  iconSize050: sizingPrimitives.sizing080,
};

export type IconSize = typeof iconSizes;
export type IconSizeKeys = keyof IconSize;
