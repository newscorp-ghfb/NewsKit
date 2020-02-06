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
import {Overlay} from '../newskit-light/overlay';

export interface StylePresetStyles {
  boxShadow?: BoxShadowProperty; // shadow
  backgroundColor?: BackgroundColorProperty;
  backgroundImage?: BackgroundImageProperty;
  backgroundRepeat?: BackgroundRepeatProperty;
  backgroundPosition?: BackgroundPositionProperty<string>;
  borderStyle?: BorderStyleProperty;
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
  overlayPrimitives: Overlay;
}
export const createStylePresets = ({
  colorPrimitives,
  borderPrimitives,
  borderRadiusPrimitives,
  overlayPrimitives,
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
      iconColor: colorPrimitives.inkNonEssential,
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
      borderStyle: 'solid',
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
      backgroundColor: colorPrimitives.skeleton010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
      iconColor: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  maskSemiRounded010: {
    base: {
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton020,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
      iconColor: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  maskRound010: {
    base: {
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  interactive050: {
    base: {
      borderStyle: 'solid',
      borderColor: colorPrimitives.blue020,
      borderWidth: borderPrimitives.borderWidth010,
      color: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkBrand,
    },
    hover: {
      backgroundColor: colorPrimitives.blue010,
    },
    active: {
      backgroundColor: colorPrimitives.blue010,
      borderWidth: colorPrimitives.blue060,
    },
    disabled: {
      backgroundColor: colorPrimitives.disabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  interactive060: {
    base: {
      color: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkBrand,
    },
    hover: {
      backgroundColor: colorPrimitives.blue010,
    },
    active: {
      backgroundColor: colorPrimitives.blue010,
      borderStyle: 'solid',
      borderColor: colorPrimitives.blue060,
      borderWidth: borderPrimitives.borderWidth010,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  interactive070: {
    base: {
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth010,
      backgroundColor: 'transparent',
      color: colorPrimitives.inkBase,
      borderColor: colorPrimitives.neutral040,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Squared],
    },
    hover: {
      borderColor: colorPrimitives.neutral080,
    },
    active: {
      backgroundColor: colorPrimitives.neutral020,
    },
    focus: {
      borderColor: colorPrimitives.neutral080,
    },
    disabled: {
      backgroundColor: colorPrimitives.disabled,
      color: colorPrimitives.inkNonEssential,
    },
  } as StylePresetStates,
  audioPlayerTrack: {
    base: {
      backgroundColor: colorPrimitives.neutral030,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  } as StylePresetStates,
  audioPlayerTrackIndicator: {
    base: {
      backgroundColor: colorPrimitives.brand010,
    },
  } as StylePresetStates,
  audioPlayerTrackBuffering: {
    base: {
      backgroundColor: colorPrimitives.neutral040,
    },
  } as StylePresetStates,
  circleLoaderIndicator010: {
    base: {
      borderColor: colorPrimitives.brand010,
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth020,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  } as StylePresetStates,
  circleLoaderTrack010: {
    base: {
      borderColor: colorPrimitives.neutral020,
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth020,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  } as StylePresetStates,
  circleLoaderIndicator010Inverse: {
    base: {
      borderColor: colorPrimitives.white,
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth020,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  } as StylePresetStates,
  circleLoaderTrack010Inverse: {
    base: {
      borderColor: overlayPrimitives.overlayLight020,
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth020,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  } as StylePresetStates,
});

export type StylePresets = ReturnType<typeof createStylePresets> &
  Record<string, StylePresetStates>;
