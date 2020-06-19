import {deepMerge} from '../utils/deep-merge';
import {createThemeColors, Colors, ColorKeys} from './mappers/colors';
import {colorPrimitives, ColorPrimitives} from './newskit-light/colors';
import {Animation, animationPrimitives} from './newskit-light/animation';
import {borderPrimitives} from './newskit-light/borders';
import {Breakpoints, breakpointPrimitives} from './newskit-light/breakpoints';
import {Grid, gridPrimitives} from './newskit-light/grid';
import {FontPrimitives, fontPrimitives} from './newskit-light/fonts';
import {
  sizingPrimitives,
  Sizing,
  IconSizeKeys,
  IconSize,
  iconSizes,
} from './newskit-light/spacing';
import {Borders, createBorders} from './mappers/borders';
import {BorderRadius, createBorderRadius} from './mappers/border-radius';
import {Shadow, shadowPrimitives} from './newskit-light/shadow';
import {Overlay, overlayPrimitives} from './newskit-light/overlay';
import {createStylePresets, StylePresets} from './mappers/style-preset';
import {createTypePresets, TypePresets} from './mappers/type-presets';
import {
  createPaddingPresets,
  PaddingPreset,
  createMarginPresets,
  MarginPreset,
} from './mappers/spacing';
import {defaultPresets} from './mappers/default-presets';

const borderRadiusPrimitives = createBorderRadius(sizingPrimitives);

type ColourableIcon = React.ComponentType<{
  size?: IconSizeKeys;
  color?: ColorKeys;
}>;
type NonColourableIcon = React.ComponentType<{size?: IconSizeKeys}>;

export interface Icons {
  // Not sure how to solve this.
  // Ideally we'd use the props from the component but this gives us a circular reference.
  SaveActive?: ColourableIcon;
  SaveInactive?: ColourableIcon;
  Email?: ColourableIcon;
  Comment?: ColourableIcon;
  Bookmark?: ColourableIcon;
  Twitter?: NonColourableIcon;
  WhatsApp?: NonColourableIcon;
  Facebook?: NonColourableIcon;
  GitHub?: NonColourableIcon;
  Menu?: ColourableIcon;
  Placeholder?: NonColourableIcon;
  CopyLink?: ColourableIcon;
  Circle?: ColourableIcon;
  Square?: ColourableIcon;
  Play?: ColourableIcon;
  Pause?: ColourableIcon;
  VolumeUp?: ColourableIcon;
  VolumeDown?: ColourableIcon;
  VolumeMute?: ColourableIcon;
  Forward10?: ColourableIcon;
  Replay10?: ColourableIcon;
  SkipNext?: ColourableIcon;
  SkipPrevious?: ColourableIcon;
  Popout?: ColourableIcon;
  Launch?: ColourableIcon;
}

export interface Theme extends Record<string, unknown> {
  name: string;
  breakpoints: Breakpoints;
  grid: Grid;
  colors: Colors;
  typePresets: TypePresets;
  fonts: FontPrimitives;
  sizing: PaddingPreset & IconSize & Sizing & MarginPreset;
  borderRadius: BorderRadius;
  borders: Borders;
  animation: Animation;
  icons: Icons;
  overlay: Overlay;
  shadow: Shadow;
  stylePresets: StylePresets;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultPresets: any;
  zIndex: {
    modal: number;
  };
}

const createDefaultTheme = (): Theme => ({
  name: 'newskit-light',
  breakpoints: breakpointPrimitives,
  grid: gridPrimitives,
  colors: createThemeColors(colorPrimitives),
  typePresets: createTypePresets(fontPrimitives),
  fonts: fontPrimitives,
  sizing: {
    ...createPaddingPresets(sizingPrimitives),
    ...iconSizes,
    ...sizingPrimitives,
    ...createMarginPresets(sizingPrimitives),
  },
  shadow: shadowPrimitives,
  borderRadius: borderRadiusPrimitives,
  borders: createBorders(borderPrimitives),
  animation: animationPrimitives,
  overlay: overlayPrimitives,
  stylePresets: createStylePresets({
    colorPrimitives,
    borderPrimitives,
    borderRadiusPrimitives,
    overlayPrimitives,
    shadowPrimitives,
  }),
  defaultPresets,
  icons: {},
  zIndex: {
    modal: 2000,
  },
});

export interface PrimitiveOverrides {
  newTheme: Theme;
  colors: Colors;
  sizing: Sizing;
  borders: Borders;
  borderRadius: BorderRadius;
  fonts: FontPrimitives;
  typePresets: TypePresets;
  stylePresets: StylePresets;
}

interface ThemeArgs {
  baseTheme: Theme;
  colorOverrides: Partial<ColorPrimitives>;
  fontOverrides: Partial<FontPrimitives>;
  themeOverrider: (p: PrimitiveOverrides) => Record<string, unknown>;
}

export const createTheme = (
  name: string,
  {
    baseTheme,
    colorOverrides,
    fontOverrides,
    themeOverrider,
  }: Partial<ThemeArgs> = {},
): Theme => {
  const oldTheme = baseTheme || createDefaultTheme();
  const newTheme = {
    ...oldTheme,
    colors: createThemeColors({...oldTheme.colors, ...colorOverrides}),
    typePresets: createTypePresets({...fontPrimitives, ...fontOverrides}),
    fonts: {...fontPrimitives, ...fontOverrides},
    name,
  };

  newTheme.stylePresets = createStylePresets({
    colorPrimitives: newTheme.colors,
    borderPrimitives: newTheme.borders,
    borderRadiusPrimitives: newTheme.borderRadius,
    overlayPrimitives: newTheme.overlay,
    shadowPrimitives: newTheme.shadow,
  });

  const {
    colors,
    sizing,
    borders,
    borderRadius,
    fonts,
    typePresets,
    stylePresets,
  } = newTheme;

  return deepMerge(
    newTheme,
    themeOverrider &&
      themeOverrider({
        newTheme,
        colors,
        sizing,
        borders,
        borderRadius,
        fonts,
        typePresets,
        stylePresets,
      }),
  );
};
