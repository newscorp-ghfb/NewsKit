const borderWidths = {
  borderWidth000: '0px',
  borderWidth010: '1px',
  borderWidth020: '2px',
  borderWidth030: '4px',
};

export const borderPrimitives = {
  ...borderWidths,

  borderWidthDefault: borderWidths.borderWidth010,
};

export type BorderPrimitives = typeof borderPrimitives;
export type BorderPrimitiveKeys = keyof BorderPrimitives;
