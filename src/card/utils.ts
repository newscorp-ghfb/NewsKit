export const isHorizontal = (layout?: string) =>
  layout && layout.includes('horizontal');

export const isReverse = (layout?: string) =>
  layout && layout.includes('reverse');
