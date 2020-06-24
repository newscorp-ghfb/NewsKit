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
import {Shadow, shadowPrimitives} from '../newskit-light/shadow';

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
}: CreateStylePreset) => {
  const presets: Record<string, StylePresetStates> = {};

  //
  // Button
  //

  presets.buttonSolidPrimary = {
    base: {
      backgroundColor: colorPrimitives.interactive030,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkInverse,
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
      color: colorPrimitives.inkBrand010,
    },
  };
  presets.buttonSolidSecondary = {
    base: {
      backgroundColor: colorPrimitives.interactive130,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive140,
    },
    active: {
      backgroundColor: colorPrimitives.interactive150,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
      color: colorPrimitives.inkBase,
    },
  };
  presets.buttonSolidNegative = {
    base: {
      backgroundColor: colorPrimitives.semanticNegative030,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative050,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
      color: colorPrimitives.inkNegative,
    },
  };
  presets.buttonSolidPositive = {
    base: {
      backgroundColor: colorPrimitives.semanticPositive030,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive050,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
      color: colorPrimitives.inkPositive,
    },
  };

  presets.buttonOutlinedPrimary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkBrand010,
      iconColor: colorPrimitives.inkBrand010,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive010,
      borderColor: colorPrimitives.interactive040,
    },
    active: {
      backgroundColor: colorPrimitives.interactive020,
      borderColor: colorPrimitives.interactive050,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
      borderStyle: 'none',
    },
  };
  presets.buttonOutlinedSecondary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive130,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkBase,
      iconColor: colorPrimitives.inkBase,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive110,
      borderColor: colorPrimitives.interactive140,
    },
    active: {
      backgroundColor: colorPrimitives.interactive120,
      borderColor: colorPrimitives.interactive150,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
      borderStyle: 'none',
    },
  };
  presets.buttonOutlinedNegative = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.semanticNegative030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkNegative,
      iconColor: colorPrimitives.inkNegative,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative010,
      borderColor: colorPrimitives.semanticNegative040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative020,
      borderColor: colorPrimitives.semanticNegative050,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
      borderStyle: 'none',
    },
  };
  presets.buttonOutlinedPositive = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.semanticPositive030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkPositive,
      iconColor: colorPrimitives.inkPositive,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive010,
      borderColor: colorPrimitives.semanticPositive040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive020,
      borderColor: colorPrimitives.semanticPositive050,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
      borderStyle: 'none',
    },
  };

  presets.buttonMinimalPrimary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
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
      backgroundColor: colorPrimitives.interactive020,
    },
  };
  presets.buttonMinimalSecondary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkBase,
      iconColor: colorPrimitives.inkBase,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive110,
    },
    active: {
      backgroundColor: colorPrimitives.interactive120,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
    },
  };
  presets.buttonMinimalNegative = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkNegative,
      iconColor: colorPrimitives.inkNegative,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative010,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative020,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
    },
  };
  presets.buttonMinimalPositive = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      color: colorPrimitives.inkPositive,
      iconColor: colorPrimitives.inkPositive,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive010,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive020,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
    },
  };

  presets.buttonDefault = presets.buttonSolidPrimary;

  //
  // Icon Button
  //

  presets.iconButtonSolidPrimary = {
    base: {
      backgroundColor: colorPrimitives.interactive030,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkInverse,
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
      color: colorPrimitives.inkBrand010,
    },
  };
  presets.iconButtonSolidSecondary = {
    base: {
      backgroundColor: colorPrimitives.interactive130,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive140,
    },
    active: {
      backgroundColor: colorPrimitives.interactive150,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
      color: colorPrimitives.inkBase,
    },
  };
  presets.iconButtonSolidNegative = {
    base: {
      backgroundColor: colorPrimitives.semanticNegative030,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative050,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
      color: colorPrimitives.inkNegative,
    },
  };
  presets.iconButtonSolidPositive = {
    base: {
      backgroundColor: colorPrimitives.semanticPositive030,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive050,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
      color: colorPrimitives.inkPositive,
    },
  };
  presets.iconButtonOutlinedPrimary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkBrand010,
      iconColor: colorPrimitives.inkBrand010,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive010,
      borderColor: colorPrimitives.interactive040,
    },
    active: {
      backgroundColor: colorPrimitives.interactive020,
      borderColor: colorPrimitives.interactive050,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
      borderStyle: 'none',
    },
  };
  presets.iconButtonOutlinedSecondary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive130,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkBase,
      iconColor: colorPrimitives.inkBase,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive110,
      borderColor: colorPrimitives.interactive140,
    },
    active: {
      backgroundColor: colorPrimitives.interactive120,
      borderColor: colorPrimitives.interactive150,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
      borderStyle: 'none',
    },
  };
  presets.iconButtonOutlinedNegative = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.semanticNegative030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkNegative,
      iconColor: colorPrimitives.inkNegative,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative010,
      borderColor: colorPrimitives.semanticNegative050,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative020,
      borderColor: colorPrimitives.semanticNegative030,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
      borderStyle: 'none',
    },
  };
  presets.iconButtonOutlinedPositive = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.semanticPositive030,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkPositive,
      iconColor: colorPrimitives.inkPositive,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive010,
      borderColor: colorPrimitives.semanticPositive040,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive020,
      borderColor: colorPrimitives.semanticPositive050,
    },
    disabled: {
      borderColor: colorPrimitives.interactiveDisabled,
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
      borderStyle: 'none',
    },
  };
  presets.iconButtonMinimalPrimary = {
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
    },
    loading: {
      backgroundColor: colorPrimitives.interactive020,
    },
  };
  presets.iconButtonMinimalSecondary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      color: colorPrimitives.inkBase,
      iconColor: colorPrimitives.inkBase,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive110,
    },
    active: {
      backgroundColor: colorPrimitives.interactive120,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.interactive120,
    },
  };
  presets.iconButtonMinimalNegative = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkNegative,
      iconColor: colorPrimitives.inkNegative,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticNegative010,
    },
    active: {
      backgroundColor: colorPrimitives.semanticNegative020,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticNegative020,
    },
  };
  presets.iconButtonMinimalPositive = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      color: colorPrimitives.inkPositive,
      iconColor: colorPrimitives.inkPositive,
    },
    hover: {
      backgroundColor: colorPrimitives.semanticPositive010,
    },
    active: {
      backgroundColor: colorPrimitives.semanticPositive020,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
    loading: {
      backgroundColor: colorPrimitives.semanticPositive020,
    },
  };
  presets.iconButtonDefault = presets.iconButtonSolidPrimary;

  //
  // Icons
  //
  presets.buttonSocialTwitter = {
    base: {
      ...presets.iconButtonMinimalSecondary.base,
    },
    hover: {
      ...presets.iconButtonMinimalSecondary.hover,
      iconColor: colorPrimitives.socialTwitter,
    },
    active: {
      ...presets.iconButtonMinimalSecondary.active,
      iconColor: colorPrimitives.socialTwitter,
    },
  };
  presets.buttonSocialFacebook = {
    base: {
      ...presets.iconButtonMinimalSecondary.base,
    },
    hover: {
      ...presets.iconButtonMinimalSecondary.hover,
      iconColor: colorPrimitives.socialFacebook,
    },
    active: {
      ...presets.iconButtonMinimalSecondary.active,
      iconColor: colorPrimitives.socialFacebook,
    },
  };
  presets.buttonSocialEmail = presets.iconButtonMinimalSecondary;
  presets.buttonSocialWhatsapp = {
    base: {
      ...presets.iconButtonMinimalSecondary.base,
    },
    hover: {
      ...presets.iconButtonMinimalSecondary.hover,
      iconColor: colorPrimitives.socialWhatsapp,
    },
    active: {
      ...presets.iconButtonMinimalSecondary.active,
      iconColor: colorPrimitives.socialWhatsapp,
    },
  };
  presets.buttonSocialLink = presets.iconButtonMinimalSecondary;
  presets.buttonSocialShare = presets.iconButtonMinimalSecondary;
  //
  // Tag
  //

  presets.tagPrimary = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      borderStyle: 'solid',
      borderColor: colorPrimitives.interactive130,
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusSharp,
      color: colorPrimitives.inkBase,
      iconColor: colorPrimitives.inkBase,
    },
    hover: {
      backgroundColor: colorPrimitives.interactive120,
    },
    active: {
      borderWidth: borderPrimitives.borderWidth010,
    },
    current: {
      backgroundColor: colorPrimitives.interactive130,
      borderColor: 'none',
      borderWidth: 'none',
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
  };
  presets.tagDefault = presets.tagPrimary;

  //
  // Flag
  //

  presets.flagSolid = {
    base: {
      backgroundColor: colorPrimitives.semanticInformative010,
      color: colorPrimitives.inkInverse,
      iconColor: colorPrimitives.inkInverse,
    },
  };
  presets.flagSolidLive = {
    base: {
      ...presets.flagSolid.base,
      backgroundColor: colorPrimitives.semanticNegative030,
    },
  };
  presets.flagMinimal = {
    base: {
      backgroundColor: colorPrimitives.transparent,
      color: colorPrimitives.inkInformative,
      iconColor: colorPrimitives.inkInformative,
    },
  };
  presets.flagDefault = presets.flagSolid;

  //
  // Link
  //

  presets.linkPrimary = {
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
  };

  //
  // Audio Player
  //

  presets.audioPlayerSeekBarTrack = {
    base: {
      backgroundColor: colorPrimitives.interactive210,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  presets.audioPlayerSeekBarIndicator = {
    base: {
      backgroundColor: colorPrimitives.interactive230,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  presets.audioPlayerLabels = {
    base: {
      color: colorPrimitives.inkSubtle,
    },
  };
  presets.audioPlayerThumb = {
    base: {
      backgroundColor: colorPrimitives.inverse,
      borderColor: colorPrimitives.interactive230,
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth010,
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
      boxShadow: shadowPrimitives.shadow010,
      iconColor: colorPrimitives.inkNonEssential,
    },
    active: {
      iconColor: colorPrimitives.inkSubtle,
      backgroundColor: colorPrimitives.interactive240,
    },
  };
  presets.audioPlayerSeekBarBuffering = {
    base: {
      backgroundColor: colorPrimitives.overlayDark010,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  presets.audioPlayerPopoutButton = presets.iconButtonMinimalPrimary;
  presets.audioPlayerControlButton = presets.iconButtonMinimalPrimary;
  presets.audioPlayerPlayPauseButton = presets.iconButtonSolidPrimary;

  //
  // Slider
  //

  presets.sliderTrack = {
    base: {
      backgroundColor: colorPrimitives.interactive210,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
    disabled: {
      backgroundColor: colorPrimitives.interactiveDisabled,
    },
  };
  presets.sliderIndicator = {
    base: {
      backgroundColor: colorPrimitives.interactive230,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
    disabled: {
      backgroundColor: colorPrimitives.interface040,
    },
  };
  presets.sliderThumb = {
    base: {
      ...presets.audioPlayerThumb.base,
      iconColor: colorPrimitives.inkInverse,
    },
    active: {
      backgroundColor: colorPrimitives.interactive240,
    },
    disabled: {
      backgroundColor: colorPrimitives.interface040,
      borderColor: 'none',
      borderStyle: 'none',
      borderWidth: 'none',
      boxShadow: 'none',
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.sliderThumbLabel = {
    base: {
      color: colorPrimitives.inkBrand010,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
    },
  };
  presets.sliderLabels = {
    base: {
      color: colorPrimitives.inkSubtle,
      iconColor: colorPrimitives.inkSubtle,
    },
    disabled: {
      color: colorPrimitives.inkNonEssential,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };

  //
  // Volume Control
  //

  presets.volumeControlTrackIndicator = {
    base: {
      backgroundColor: colorPrimitives.interactive230,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  presets.volumeControlThumb = presets.audioPlayerThumb;
  presets.volumeControlLabels = presets.audioPlayerLabels;
  presets.volumeControlTrack = {
    base: {
      backgroundColor: colorPrimitives.interface030,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
    },
  };
  presets.volumeControlButtons = presets.iconButtonMinimalPrimary;

  //
  // Progress Indicator
  //

  presets.circularProgressIndicatorIndicatorPrimary = {
    base: {
      borderStyle: 'solid',
      borderWidth: borderPrimitives.borderWidth020,
      borderRadius: borderRadiusPrimitives.borderRadiusPill,
      borderColor: colorPrimitives.interactive230,
    },
  };
  presets.circularProgressIndicatorTrackPrimary = {
    base: {
      ...presets.circularProgressIndicatorIndicatorPrimary.base,
      borderColor: colorPrimitives.interactive210,
    },
  };
  presets.circularProgressIndicatorIndicatorInverse = {
    base: {
      ...presets.circularProgressIndicatorIndicatorPrimary.base,
      borderColor: colorPrimitives.inverse,
    },
  };
  presets.circularProgressIndicatorTrackInverse = {
    base: {
      ...presets.circularProgressIndicatorIndicatorPrimary.base,
      borderColor: overlayPrimitives.overlayLight010,
    },
  };

  //
  // Image
  //

  presets.imageSharp = {
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.imageRoundedSmall = {
    base: {
      borderRadius: borderRadiusPrimitives.borderRadiusRounded010,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.imageRoundedMedium = {
    base: {
      borderRadius: borderRadiusPrimitives.borderRadiusRounded030,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.imageRoundedLarge = {
    base: {
      borderRadius: borderRadiusPrimitives.borderRadiusRounded050,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.imageDefault = {
    base: {
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      borderRadius: borderRadiusPrimitives.borderRadiusDefault,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };
  presets.imageCircle = {
    base: {
      borderRadius: borderRadiusPrimitives.borderRadiusCircle,
    },
    loading: {
      backgroundColor: colorPrimitives.skeleton010,
      iconColor: colorPrimitives.inkNonEssential,
    },
  };

  //
  // Article Headline
  //

  presets.articleHeadlineKicker = {
    base: {
      color: colorPrimitives.inkBrand010,
    },
  };
  presets.articleHeadlineContent = {
    base: {
      color: colorPrimitives.inkContrast,
    },
  };

  //
  // Standfirst
  //

  presets.standfirst = {
    base: {
      color: colorPrimitives.inkBase,
    },
  };

  //
  // Share Bar
  //

  presets.shareBarLabel = {
    base: {
      color: colorPrimitives.inkBase,
    },
  };

  return presets;
};

export type StylePresets = ReturnType<typeof createStylePresets> &
  Record<string, StylePresetStates>;
export type StylePresetKeys = keyof StylePresets;
