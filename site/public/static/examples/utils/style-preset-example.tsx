const iconButtonSolidPrimary: StylePresetStates = {
  base: {
    backgroundColor: colorPrimitives.interactive030,
    borderRadius: borderRadiusPrimitives.borderRadiusDefault,
    color: colorPrimitives.inkInverse,
    iconColor: colorPrimitives.inkInverse,
  },
  hover: {
    backgroundColor: colorPrimitives.interactive040,
    boxShadow: shadowPrimitives.shadow020,
  },
  active: {
    backgroundColor: colorPrimitives.interactive050,
  },
  disabled: {
    backgroundColor: colorPrimitives.disabled,
    color: colorPrimitives.inkNonEssential,
    iconColor: colorPrimitives.inkNonEssential,
  },
  loading: {
    iconColor: colorPrimitives.white,
  },
};