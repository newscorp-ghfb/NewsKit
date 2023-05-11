export const pixelStringToRemString = (pixelString: string): string => {
  if (
    pixelString &&
    typeof pixelString === 'string' &&
    pixelString.endsWith('px')
  ) {
    const pixelAmount = parseInt(
      pixelString.substring(0, pixelString.length - 2),
    );
    if (pixelAmount > 0) {
      return (pixelAmount / 16).toFixed(3).toString() + 'rem';
    }
  }
  return pixelString;
};
