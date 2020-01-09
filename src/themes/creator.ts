import {deepMerge} from '../utils/deep-merge';
import {createThemeColors, Colors, ColorKeys} from './mappers/colors';
import {colorPrimitives, ColorPrimitives} from './newskit-light/colors';
import {Animation, animationPrimitives} from './newskit-light/animation';
import {
  BorderRadius,
  borderRadiusPrimitives,
} from './newskit-light/border-radius';
import {borderPrimitives} from './newskit-light/borders';
import {Breakpoints, breakpointPrimitives} from './newskit-light/breakpoints';
import {Grid, gridPrimitives} from './newskit-light/grid';
import {FontPrimitives, fontPrimitives} from './newskit-light/fonts';
import {
  Sizing,
  sizingPrimitives,
  IconSizeKeys,
  IconSize,
  iconSizes,
} from './newskit-light/spacing';
import {TypePresets, createTypePresets} from './mappers/type-presets';
import {Borders, createBorders} from './mappers/borders';
import {Shadow, shadowPrimitives} from './newskit-light/shadow';
import {Overlay, overlayPrimitives} from './newskit-light/overlay';
import {createSpacingPresets, SpacingPreset} from './mappers/spacing';

type ColourableIcon = React.ComponentType<{
  $size: IconSizeKeys;
  $color?: ColorKeys;
}>;
type NonColourableIcon = React.ComponentType<{$size: IconSizeKeys}>;

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
  Placeholder?: NonColourableIcon;
  CopyLink?: ColourableIcon;
  Circle?: ColourableIcon;
}

export interface Theme extends Record<string, unknown> {
  name: string;
  breakpoints: Breakpoints;
  grid: Grid;
  colors: Colors;
  typePresets: TypePresets;
  fonts: FontPrimitives;
  sizing: SpacingPreset & IconSize;
  borderRadius: BorderRadius;
  borders: Borders;
  animation: Animation;
  icons: Icons;
  overlay: Overlay;
  shadow: Shadow;
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
  sizing: {...createSpacingPresets(sizingPrimitives), ...iconSizes},
  shadow: shadowPrimitives,
  borderRadius: borderRadiusPrimitives,
  borders: createBorders(borderPrimitives),
  animation: animationPrimitives,
  overlay: overlayPrimitives,
  icons: {},
  zIndex: {
    modal: 2000,
  },
});

interface PrimitiveOverrides {
  newTheme: Theme;
  colors: Colors;
  sizing: Sizing;
  borders: Borders;
  fonts: FontPrimitives;
  typePresets: TypePresets;
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
  const {colors, sizing, borders, fonts, typePresets} = newTheme;

  return deepMerge(
    newTheme,
    themeOverrider &&
      themeOverrider({
        newTheme,
        colors,
        sizing,
        borders,
        fonts,
        typePresets,
      }),
  );
};
