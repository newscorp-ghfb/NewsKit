import {
  BackgroundRepeatProperty,
  BackgroundPositionProperty,
  BorderStyleProperty,
  BoxShadowProperty,
  BackgroundColorProperty,
  BackgroundImageProperty,
  BorderColorProperty,
  ColorProperty,
} from 'csstype';
import {BorderPrimitives} from '../newskit-light/borders';
import {ColorPrimitives} from '../newskit-light/colors';
import {BorderRadiusShape, BorderRadius} from '../newskit-light/border-radius';
import {Sizing} from '../newskit-light/spacing';

export interface StylePresetStyles {
  boxShadow?: BoxShadowProperty; // shadow
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundPosition?: BackgroundPositionProperty<string>;
  borderStyles?: BorderStyleProperty;
  borderColor?: BorderColorProperty;
  borderWidth?: string;
  color?: ColorProperty;
  borderRadius?: Sizing; // shape
  iconColor?: ColorProperty;
}
export type StylePresetStyleKeys = keyof StylePresetStyles;

export interface StylePresetStates {
  // component states
  current?: StylePresetStyles;
  loading?: StylePresetStyles;
  // baseline css
  base?: StylePresetStyles;
  // css pseudo classes
  hover?: StylePresetStyles;
  focus?: StylePresetStyles;
  active?: StylePresetStyles;
  visited?: StylePresetStyles;
  disabled?: StylePresetStyles;
}
export type StylePresetStateKeys = keyof StylePresetStates;

interface CreateStylePreset {
  colorPrimitives: ColorPrimitives;
  borderPrimitives: BorderPrimitives;
  borderRadiusPrimitives: BorderRadius;
}

export const createStylePresets = ({
  colorPrimitives,
  borderPrimitives,
  borderRadiusPrimitives,
}: CreateStylePreset) => ({
  interactive010: {
    base: {
      backgroundColor: colorPrimitives.brand010,
      color: colorPrimitives.inkInverse,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.blue070,
    },
    active: {
      backgroundColor: colorPrimitives.blue080,
    },
    focus: {
      borderWidth: borderPrimitives.borderWidth020,
    },
    disabled: {
      backgroundColor: colorPrimitives.neutral020,
      color: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  interactive010Inverse: {
    base: {
      color: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkBrand,
    },
    hover: {
      backgroundColor: colorPrimitives.neutral010,
      iconColor: colorPrimitives.blue070,
    },
    active: {
      backgroundColor: colorPrimitives.neutral010,
      iconColor: colorPrimitives.blue070,
    },
    focus: {
      borderWidth: borderPrimitives.borderWidth020,
    },
    disabled: {
      backgroundColor: colorPrimitives.neutral020,
      color: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  interactive020: {
    base: {
      backgroundColor: colorPrimitives.white,
      borderStyles: 'solid',
      borderColor: colorPrimitives.brand010,
      borderWidth: borderPrimitives.borderWidth010,
      color: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkBrand,
    },
    hover: {
      boxShadow: '0 0 0 4px rgba(200,228,253,0.60)',
    },
    active: {
      boxShadow: '0 0 0 4px rgba(200,228,253,0.60)',
    },
    disabled: {
      backgroundColor: colorPrimitives.neutral020,
    },
  } as StylePresetStates,
  interactive030: {
    base: {
      backgroundColor: colorPrimitives.neutral040,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
    disabled: {
      backgroundColor: colorPrimitives.neutral020,
    },
  } as StylePresetStates,
  interactive040: {
    base: {
      backgroundColor: colorPrimitives.neutral030,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
    disabled: {
      backgroundColor: colorPrimitives.neutral020,
    },
  } as StylePresetStates,
  maskPointed010: {
    base: {
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
    },
    loading: {
      backgroundColor: colorPrimitives.skeletonLight,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
      iconColor: colorPrimitives.inkSubtle,
    },
  } as StylePresetStates,
  maskSemiRounded: {
    base: {
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
    },
    loading: {
      backgroundColor: colorPrimitives.skeletonLight,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
      iconColor: colorPrimitives.inkSubtle,
    },
  } as StylePresetStates,
  maskRound: {
    base: {
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
    loading: {
      backgroundColor: colorPrimitives.skeletonLight,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkSubtle,
    },
  } as StylePresetStates,
});

export type StylePresets = ReturnType<typeof createStylePresets> &
  Record<string, StylePresetStates>;
