export const textCrop = ({
  lineHeight = 1.2,
  topCrop = 0,
  bottomCrop = 0,
  topAdjustment = 0,
  bottomAdjustment = 0,
  cropFontSize = 32,
  cropLineHeight = 1.2,
}) => {
  const dynamicTopCrop =
    Math.max(topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2), 0) /
    cropFontSize;

  const dynamicBottomCrop =
    Math.max(
      bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2),
      0,
    ) / cropFontSize;

  const common = {
    content: "''",
    display: 'block',
    height: 0,
    width: 0,
  };

  return {
    '::before': {
      ...common,
      marginBottom: topAdjustment
        ? `calc(-${dynamicTopCrop}em + ${topAdjustment}px)`
        : `-${dynamicTopCrop}em`,
    },
    '::after': {
      ...common,
      marginTop: bottomAdjustment
        ? `calc(-${dynamicBottomCrop}em + ${bottomAdjustment}px)`
        : `-${dynamicBottomCrop}em`,
    },
  };
};
