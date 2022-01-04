import {ColorPrimitives} from '../newskit-light/colors';

export const createThemeColors = (primitives: ColorPrimitives) => ({
  ...primitives,

  // Button

  buttonFill: primitives.interactive010,
  buttonText: primitives.inkInverse,

  buttonDisabledFill: primitives.interactiveDisabled,
  buttonDisabledText: primitives.inkNonEssential,

  // Link

  linkText: primitives.link010,
  linkVisited: primitives.link010Visited,
  linkHover: primitives.link010Hover,
  linkActive: primitives.link010Active,

  // Title Bar

  titleBarTextColor: primitives.inkBase,
  titleBarBorder: primitives.interface030,

  // Tags

  tagFill: primitives.interface020,
  tagBorder: primitives.interface030,
  tagText: primitives.inkSubtle,

  tagHoverFill: primitives.interfaceHover,
  tagHoverBorder: primitives.interface040,
  tagHoverText: primitives.inkBase,

  tagDisabledFill: primitives.interactiveDisabled,
  tagDisabledBorder: primitives.interactiveDisabled,
  tagDisabledText: primitives.inkNonEssential,

  // Share bar

  shareBarBackground: primitives.interface020,
  shareIconFill: primitives.inkSubtle,
  shareIconBorder: primitives.inkSubtle,
  shareIconBackground: primitives.interface020,

  shareIconHoverFill: primitives.interactive010,
  shareIconHoverBorder: primitives.interactive010,
  shareIconHoverBackground: primitives.interface020,

  // Article

  standfirstText: primitives.inkBase,
});

export type ColorKeys = keyof Colors;
export type Colors = ReturnType<typeof createThemeColors>;
