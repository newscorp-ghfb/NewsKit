import {Theme} from '../theme/types';

// We use a 4px grid for sizing.
const gridSize = 4;

// TODO: PPDSE-32 - remove this once we move the text crop calculation to the typography preset
export const getFontSizing = (fontSize: string, lineHeight: number) => {
  const fontSizePx = fontSize.endsWith('rem')
    ? parseInt(fontSize, 10) * 16
    : parseInt(fontSize, 10);

  // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
  // then convert back to a line-height number.
  const adjustedLineHeight =
    (Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx;

  return {
    fontSize,
    lineHeight: adjustedLineHeight,
  };
};

/**
 * @deprecated This method has been deprecated and will be removed in a future release. Use typography tokens instead.
 */
/* istanbul ignore next */
export const getLineHeight = (
  fontSizeToken: string,
  lineHeightToken: string,
) => (theme: Theme) => {
  const fontSize = theme.fonts[fontSizeToken.replace('fonts.', '')];
  const lineHeight = theme.fonts[
    lineHeightToken.replace('fonts.', '')
  ] as number;

  const fontSizePx = parseInt(fontSize, 10);
  // If line-height in pixels does not align to the grid, we round it up or down to nearest grid line (4px),
  // then convert back to a line-height number.
  return (
    (Math.round((lineHeight * fontSizePx) / gridSize) * gridSize) / fontSizePx
  );
};
