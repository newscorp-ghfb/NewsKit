// We use a 4px grid for sizing.
const gridSize = 4;

export const getFontSizing = (fontSize: string, lineHeight: number) => {
  const fontSizePx = parseInt(fontSize, 10);
  // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
  // then convert back to a line-height number.
  const adjustedLineHeight =
    (Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx;

  return {
    fontSize,
    lineHeight: adjustedLineHeight,
  };
};
