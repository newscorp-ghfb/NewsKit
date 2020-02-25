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
import {Shadow} from '../newskit-light/shadow';

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
  shadowPrimitives: Shadow;
}
export const createStylePresets = ({
  colorPrimitives,
  borderPrimitives,
  borderRadiusPrimitives,
  overlayPrimitives,
  shadowPrimitives,
}: CreateStylePreset) => {
  const iconButtonSolidPrimary: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interactive010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive020,
      boxShadow: shadowPrimitives.shadow020,
    },
    active: {
      backgroundColor: colorPrimitives.interactive030,
    },
    disabled: {
      backgroundColor: colorPrimitives.disabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  const iconButtonOutlinedPrimary: StylePresetStates = {
    base: {
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive110,
      borderWidth: borderPrimitives.borderWidth010,
      color: colorPrimitives.inkBrand,
      iconColor: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      backgroundColor: 'transparent',
    },
    hover: {
      borderWidth: borderPrimitives.borderWidth020,
      backgroundColor: 'transparent',
    },
    active: {
      borderWidth: borderPrimitives.borderWidth010,
      backgroundColor: 'transparent',
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
      borderColor: colorPrimitives.disabled,
      backgroundColor: 'transparent',
    },
  };
  const iconButtonMinimalPrimary: StylePresetStates = {
    base: {
      backgroundColor: 'transparent',
      color: colorPrimitives.inkBrand,
      iconColor: colorPrimitives.inkBrand,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
    hover: {
      backgroundColor: colorPrimitives.interactive120,
    },
    active: {
      backgroundColor: colorPrimitives.interactive130,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
      backgroundColor: 'transparent',
    },
    loading: {
      backgroundColor: 'transparent',
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  };
  const audioPlayerThumb: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.white,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive010,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      iconColor: colorPrimitives.inkNonEssential,
    },
    hover: {
      borderWidth: borderPrimitives.borderWidth020,
    },
    active: {
      iconColor: colorPrimitives.inkSubtle,
    },
  };
  const audioPlayerTrack: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interface030,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  };
  const audioPlayerTrackIndicator: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interactive010,
      borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
    },
  };
  const audioPlayerLabels: StylePresetStates = {
    base: {
      color: colorPrimitives.inkSubtle,
    },
  };

  return {
    buttonSolidPrimary: {
      base: {
        backgroundColor: colorPrimitives.interactive010,
        color: colorPrimitives.inkInverse,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
        iconColor: colorPrimitives.inkInverse,
      },
      hover: {
        backgroundColor: colorPrimitives.interactive020,
      },
      active: {
        backgroundColor: colorPrimitives.interactive030,
      },
      disabled: {
        backgroundColor: colorPrimitives.disabled,
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
      loading: {
        iconColor: colorPrimitives.white,
      },
    } as StylePresetStates,
    buttonOutlinedPrimary: {
      base: {
        borderStyle: 'solid',
        borderColor: colorPrimitives.interactive110,
        borderWidth: borderPrimitives.borderWidth010,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
        color: colorPrimitives.inkBrand,
        iconColor: colorPrimitives.inkBrand,
        backgroundColor: 'transparent',
      },
      hover: {
        backgroundColor: colorPrimitives.interactive120,
      },
      active: {
        backgroundColor: colorPrimitives.interactive130,
      },
      disabled: {
        borderColor: colorPrimitives.disabled,
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
        backgroundColor: 'transparent',
      },
      loading: {
        iconColor: colorPrimitives.white,
      },
    } as StylePresetStates,
    buttonMinimalPrimary: {
      base: {
        backgroundColor: 'transparent',
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
        color: colorPrimitives.inkBrand,
        iconColor: colorPrimitives.inkBrand,
      },
      hover: {
        backgroundColor: colorPrimitives.interactive120,
      },
      active: {
        backgroundColor: colorPrimitives.interactive130,
        borderColor: colorPrimitives.interactive110,
        borderWidth: borderPrimitives.borderWidth010,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
        backgroundColor: 'transparent',
      },
      loading: {
        iconColor: colorPrimitives.white,
        backgroundColor: 'transparent',
      },
    } as StylePresetStates,
    tagPrimary: {
      base: {
        borderStyle: 'solid',
        borderColor: colorPrimitives.interactive230,
        borderWidth: borderPrimitives.borderWidth010,
        color: colorPrimitives.inkBase,
        iconColor: colorPrimitives.inkBase,
      },
      hover: {
        backgroundColor: colorPrimitives.interactive210,
      },
      active: {
        backgroundColor: colorPrimitives.interactive220,
      },
      current: {
        backgroundColor: colorPrimitives.interactive230,
      },
      disabled: {
        backgroundColor: colorPrimitives.disabled,
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,

    flagSolid: {
      base: {
        backgroundColor: colorPrimitives.semanticInformative010,
        color: colorPrimitives.inkInverse,
        iconColor: colorPrimitives.inkInverse,
      },
    } as StylePresetStates,
    flagSolidLive: {
      base: {
        backgroundColor: colorPrimitives.semanticNegative010,
        color: colorPrimitives.inkInverse,
        iconColor: colorPrimitives.inkInverse,
      },
    } as StylePresetStates,
    flagMinimal: {
      base: {
        color: colorPrimitives.inkInformative,
        iconColor: colorPrimitives.inkInformative,
      },
    } as StylePresetStates,
    linkPrimary: {
      base: {
        color: colorPrimitives.inkLink,
      },
      hover: {
        color: colorPrimitives.inkLinkHover,
      },
      active: {
        color: colorPrimitives.inkLinkActive,
      },
      visited: {
        color: colorPrimitives.inkLinkVisited,
      },
    } as StylePresetStates,
    sliderTrack: {
      base: {
        backgroundColor: colorPrimitives.interface040,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
      disabled: {
        backgroundColor: colorPrimitives.disabled,
      },
    } as StylePresetStates,
    sliderIndicatorTrack: {
      base: {
        backgroundColor: colorPrimitives.interactive010,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
      disabled: {
        backgroundColor: colorPrimitives.interface040,
      },
    } as StylePresetStates,
    sliderThumb: audioPlayerThumb,
    sliderThumbLabel: {
      base: {
        color: colorPrimitives.inkBrand,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    sliderLabels: {
      base: {
        color: colorPrimitives.inkBrand,
        iconColor: colorPrimitives.inkBrand,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    iconButtonSolidPrimary,
    iconButtonOutlinedPrimary,
    iconButtonMinimalPrimary,
    audioPlayerTrackIndicator,
    audioPlayerThumb,
    audioPlayerLabels,
    audioPlayerTrack,
    audioPlayerTrackBuffering: {
      base: {
        backgroundColor: colorPrimitives.interface040,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
    } as StylePresetStates,
    volumeControlTrackIndicator: audioPlayerTrackIndicator,
    volumeControlThumb: audioPlayerThumb,
    volumeControlLabels: audioPlayerLabels,
    volumeControlTrack: audioPlayerTrack,
    volumeControlButtons: iconButtonMinimalPrimary,
    audioPlayerPopoutButton: iconButtonMinimalPrimary,
    audioPlayerControlButton: iconButtonMinimalPrimary,
    audioPlayerPlayPauseButton: iconButtonSolidPrimary,
    circularProgressIndicatorIndicatorPrimary: {
      base: {
        borderColor: colorPrimitives.brand010,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
    } as StylePresetStates,
    circularProgressIndicatorTrackPrimary: {
      base: {
        borderColor: colorPrimitives.neutral020,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
    } as StylePresetStates,
    circularProgressIndicatorIndicatorInverse: {
      base: {
        borderColor: colorPrimitives.white,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
    } as StylePresetStates,
    circularProgressIndicatorTrackInverse: {
      base: {
        borderColor: overlayPrimitives.overlayLight020,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
    } as StylePresetStates,
    imageSquared: {
      loading: {
        backgroundColor: colorPrimitives.skeleton010,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    imageSemiRounded: {
      base: {
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.SemiRounded],
      },
      loading: {
        backgroundColor: colorPrimitives.skeleton020,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    imageRounded: {
      base: {
        borderRadius: borderRadiusPrimitives[BorderRadiusShape.Rounded],
      },
      loading: {
        backgroundColor: colorPrimitives.skeleton010,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
  };
};

export type StylePresets = ReturnType<typeof createStylePresets> &
  Record<string, StylePresetStates>;
