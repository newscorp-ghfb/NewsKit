import {
  BackgroundRepeatProperty,
  BackgroundPositionProperty,
  BorderStyleProperty,
  BoxShadowProperty,
  BackgroundColorProperty,
  BackgroundImageProperty,
  BorderColorProperty,
  ColorProperty,
  BorderWidthProperty,
  BorderRadiusProperty,
} from 'csstype';
import {BorderPrimitives} from '../newskit-light/borders';
import {ColorPrimitives} from '../newskit-light/colors';
import {BorderRadius} from './border-radius';
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
  borderWidth?: BorderWidthProperty<string>;
  color?: ColorProperty;
  borderRadius?: BorderRadiusProperty<string>; // shape
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
      backgroundColor: colorPrimitives.interactive030,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
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
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
    },
  };
  const iconButtonOutlinedPrimary: StylePresetStates = {
    base: {
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive030,
      borderWidth: borderPrimitives.borderWidth010,
      color: colorPrimitives.inkBrand010,
      iconColor: colorPrimitives.inkBrand010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      backgroundColor: colorPrimitives.transparent,
    },
    hover: {
      borderWidth: borderPrimitives.borderWidth020,
      backgroundColor: colorPrimitives.transparent,
    },
    active: {
      borderWidth: borderPrimitives.borderWidth010,
      backgroundColor: colorPrimitives.transparent,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
      borderColor: colorPrimitives.interactiveDisabled,
      backgroundColor: colorPrimitives.transparent,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
      borderStyle: 'none',
    },
  };
  const iconButtonMinimalPrimary: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      color: colorPrimitives.inkBrand010,
      iconColor: colorPrimitives.inkBrand010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive010,
    },
    active: {
      backgroundColor: colorPrimitives.interactive020,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
      backgroundColor: colorPrimitives.transparent,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
      color: colorPrimitives.inkInverse,
    },
  };
  const iconButtonMinimalSecondary: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      color: colorPrimitives.inkBrand010,
      iconColor: colorPrimitives.inkBrand010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive110,
    },
    active: {
      backgroundColor: colorPrimitives.interactive120,
    },
    current: {
      backgroundColor: colorPrimitives.transparent,
    },
    disabled: {
      backgroundColor: colorPrimitives.transparent,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
      color: colorPrimitives.inkInverse,
    },
  };
  const audioPlayerThumb: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interfaceBrand010,
      borderColor: colorPrimitives.interactive030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      iconColor: colorPrimitives.inkNonEssential,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive040,
    },
    active: {
      iconColor: colorPrimitives.inkSubtle,
      backgroundColor: colorPrimitives.interactive050,
    },
    disabled: {
      borderStyle: 'none',
      iconColor: colorPrimitives.inkNonEssential,
    },
  };

  //
  // Audio Player
  //

  const audioPlayerSeekBarTrack: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interface030,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  const audioPlayerSeekBarIndicator: StylePresetStates = {
    base: {
      backgroundColor: colorPrimitives.interfaceBrand010,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
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
        backgroundColor: colorPrimitives.interactive030,
        color: colorPrimitives.inkInverse,
        borderRadius: borderRadiusPrimitives.borderRadiusRounded020,
        iconColor: colorPrimitives.inkInverse,
      },
      hover: {
        backgroundColor: colorPrimitives.interactive040,
      },
      active: {
        backgroundColor: colorPrimitives.interactive050,
      },
      disabled: {
        backgroundColor: colorPrimitives.interactiveDisabled,
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
      loading: {
        backgroundColor: colorPrimitives.interactive020,
      },
    } as StylePresetStates,
    buttonOutlinedPrimary: {
      base: {
        borderStyle: 'solid',
        borderColor: colorPrimitives.interactive030,
        borderWidth: borderPrimitives.borderWidth010,
        borderRadius: borderRadiusPrimitives.borderRadiusRounded020,
        color: colorPrimitives.inkBrand010,
        iconColor: colorPrimitives.inkBrand010,
        backgroundColor: colorPrimitives.transparent,
      },
      disabled: {
        borderColor: colorPrimitives.interactiveDisabled,
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
        backgroundColor: colorPrimitives.transparent,
      },
      loading: {
        backgroundColor: colorPrimitives.interactive020,
        borderStyle: 'none',
      },
    } as StylePresetStates,
    buttonMinimalPrimary: {
      base: {
        backgroundColor: colorPrimitives.transparent,
        borderRadius: borderRadiusPrimitives.borderRadiusRounded020,
        color: colorPrimitives.inkBrand010,
        iconColor: colorPrimitives.inkBrand010,
      },
      hover: {
        backgroundColor: colorPrimitives.interactive010,
      },
      active: {
        backgroundColor: colorPrimitives.interactive020,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
      loading: {
        color: colorPrimitives.inkInverse,
      },
    } as StylePresetStates,
    buttonSocialTwitter: iconButtonMinimalSecondary,
    buttonSocialFacebook: iconButtonMinimalSecondary,
    buttonSocialEmail: iconButtonMinimalSecondary,
    buttonSocialWhatsapp: iconButtonMinimalSecondary,
    buttonSocialLink: iconButtonMinimalSecondary,
    buttonSocialShare: iconButtonMinimalSecondary,
    tagPrimary: {
      base: {
        backgroundColor: colorPrimitives.transparent,
        borderStyle: 'solid',
        borderColor: colorPrimitives.interactive130,
        borderWidth: borderPrimitives.borderWidth010,
        color: colorPrimitives.inkBase,
        iconColor: colorPrimitives.inkBase,
      },
      hover: {
        borderWidth: borderPrimitives.borderWidth020,
      },
      active: {
        borderWidth: borderPrimitives.borderWidth010,
      },
      current: {
        color: colorPrimitives.inkInverse,
        iconColor: colorPrimitives.inkInverse,
        backgroundColor: colorPrimitives.interactive130,
        borderStyle: 'none',
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
        backgroundColor: colorPrimitives.semanticNegative030,
        color: colorPrimitives.inkInverse,
        iconColor: colorPrimitives.inkInverse,
      },
    } as StylePresetStates,
    flagMinimal: {
      base: {
        backgroundColor: colorPrimitives.transparent,
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
        backgroundColor: colorPrimitives.interface030,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
      disabled: {
        backgroundColor: colorPrimitives.interactiveDisabled,
      },
    } as StylePresetStates,
    sliderIndicator: {
      base: {
        backgroundColor: colorPrimitives.interfaceBrand010,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
      disabled: {
        backgroundColor: colorPrimitives.interface040,
      },
    } as StylePresetStates,
    sliderThumb: audioPlayerThumb,
    sliderThumbLabel: {
      base: {
        color: colorPrimitives.inkBrand010,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    sliderLabels: {
      base: {
        color: colorPrimitives.inkSubtle,
        iconColor: colorPrimitives.inkSubtle,
      },
      disabled: {
        color: colorPrimitives.inkNonEssential,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    iconButtonSolidPrimary,
    iconButtonOutlinedPrimary,
    iconButtonMinimalPrimary,
    iconButtonMinimalSecondary,
    audioPlayerSeekBarIndicator,
    audioPlayerThumb,
    audioPlayerLabels,
    audioPlayerSeekBarTrack,
    audioPlayerSeekBarBuffering: {
      base: {
        backgroundColor: colorPrimitives.interface040,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
    } as StylePresetStates,
    volumeControlTrackIndicator: audioPlayerSeekBarIndicator,
    volumeControlThumb: audioPlayerThumb,
    volumeControlLabels: audioPlayerLabels,
    volumeControlTrack: audioPlayerSeekBarTrack,
    volumeControlButtons: iconButtonMinimalPrimary,
    audioPlayerPopoutButton: iconButtonMinimalPrimary,
    audioPlayerControlButton: iconButtonMinimalPrimary,
    audioPlayerPlayPauseButton: iconButtonSolidPrimary,
    circularProgressIndicatorIndicatorPrimary: {
      base: {
        borderColor: colorPrimitives.interfaceBrand010,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
    } as StylePresetStates,
    circularProgressIndicatorTrackPrimary: {
      base: {
        borderColor: colorPrimitives.neutral020,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
    } as StylePresetStates,
    circularProgressIndicatorIndicatorInverse: {
      base: {
        borderColor: colorPrimitives.interactive010,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
    } as StylePresetStates,
    circularProgressIndicatorTrackInverse: {
      base: {
        borderColor: overlayPrimitives.overlayLight020,
        borderStyle: 'solid',
        borderWidth: borderPrimitives.borderWidth020,
        borderRadius: borderRadiusPrimitives.borderRadiusPill,
      },
    } as StylePresetStates,
    imageSharp: {
      loading: {
        backgroundColor: colorPrimitives.skeleton010,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    imageRounded: {
      base: {
        borderRadius: borderRadiusPrimitives.borderRadiusRounded020,
      },
      loading: {
        backgroundColor: colorPrimitives.skeleton010,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    imageCircle: {
      base: {
        borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      },
      loading: {
        backgroundColor: colorPrimitives.skeleton010,
        iconColor: colorPrimitives.inkNonEssential,
      },
    } as StylePresetStates,
    articleHeadlineKicker: {
      base: {
        color: colorPrimitives.inkBrand010,
      },
    } as StylePresetStates,
    articleHeadlineContent: {
      base: {
        color: colorPrimitives.inkContrast,
      },
    } as StylePresetStates,
    shareBarLabel: {
      base: {
        color: colorPrimitives.inkBase,
      },
    } as StylePresetStates,
    articleStandfirst: {
      base: {
        color: colorPrimitives.inkBase,
      },
    } as StylePresetStates,
  };
};

export type StylePresets = ReturnType<typeof createStylePresets> &
  Record<string, StylePresetStates>;
export type StylePresetKeys = keyof StylePresets;
