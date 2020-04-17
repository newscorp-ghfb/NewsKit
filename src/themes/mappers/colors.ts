import {ColorPrimitives} from '../newskit-light/colors';

export const createThemeColors = (primitives: ColorPrimitives) => ({
  ...primitives,

  // Button

  buttonFill: primitives.inkBrand010,
  buttonText: primitives.inkInverse,
  buttonDisabledFill: primitives.disabled,
  buttonDisabledText: primitives.inkNonEssential,

  // Link

  linkText: primitives.inkLink,
  linkVisited: primitives.inkLinkVisited,
  linkHover: primitives.inkLink,
  linkActive: primitives.inkLink,

  // Title Bar

  titleBarTextColor: primitives.inkBase,
  titleBarBorder: primitives.interface030,

  // Tags

  tagFill: primitives.interface020,
  tagBorder: primitives.interface030,
  tagText: primitives.inkSubtle,
  tagHoverFill: primitives.interactive020,
  tagHoverBorder: primitives.interface040,
  tagHoverText: primitives.inkBase,
  tagDisabledFill: primitives.disabled,
  tagDisabledBorder: primitives.disabled,
  tagDisabledText: primitives.inkNonEssential,

  // Article

  standfirstText: primitives.inkBase,

  // Share Bar

  shareBarBackground: primitives.interface020,
  shareIconFill: primitives.inkSubtle,
  shareIconBorder: primitives.inkSubtle,
  shareIconBackground: primitives.interface020,

  shareIconHoverFill: primitives.inkBrand010,
  shareIconHoverBorder: primitives.inkBrand010,
  shareIconHoverBackground: primitives.interface020,
});

export type ColorKeys = keyof Colors;
export type Colors = ReturnType<typeof createThemeColors>;
