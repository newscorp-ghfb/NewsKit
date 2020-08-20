import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

//
// Button
//

stylePresets.buttonSolidPrimary = {
  base: {
    backgroundColor: '{{colors.interactive030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.buttonSolidSecondary = {
  base: {
    backgroundColor: '{{colors.interactive130}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive140}}',
  },
  active: {
    backgroundColor: '{{colors.interactive150}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.buttonSolidNegative = {
  base: {
    backgroundColor: '{{colors.semanticNegative030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.buttonSolidPositive = {
  base: {
    backgroundColor: '{{colors.semanticPositive030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
};

stylePresets.buttonOutlinedPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive010}}',
    borderColor: '{{colors.interactive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactive020}}',
    borderColor: '{{colors.interactive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive130}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive110}}',
    borderColor: '{{colors.interactive140}}',
  },
  active: {
    backgroundColor: '{{colors.interactive120}}',
    borderColor: '{{colors.interactive150}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.semanticNegative030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative010}}',
    borderColor: '{{colors.semanticNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative020}}',
    borderColor: '{{colors.semanticNegative050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.semanticPositive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive010}}',
    borderColor: '{{colors.semanticPositive040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive020}}',
    borderColor: '{{colors.semanticPositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
    borderStyle: 'none',
  },
};

stylePresets.buttonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive010}}',
  },
  active: {
    backgroundColor: '{{colors.interactive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
  },
};
stylePresets.buttonMinimalSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive110}}',
  },
  active: {
    backgroundColor: '{{colors.interactive120}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
  },
};
stylePresets.buttonMinimalNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative010}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
  },
};
stylePresets.buttonMinimalPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive010}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
  },
};

stylePresets.buttonDefault = stylePresets.buttonSolidPrimary;

// Card

stylePresets.cardActionsContainer = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive040}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
};

//
// Icon Button
//

stylePresets.iconButtonSolidPrimary = {
  base: {
    backgroundColor: '{{colors.interactive030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};

stylePresets.iconButtonSolidSecondary = {
  base: {
    backgroundColor: '{{colors.interactive130}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive140}}',
  },
  active: {
    backgroundColor: '{{colors.interactive150}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};

stylePresets.iconButtonSolidNegative = {
  base: {
    backgroundColor: '{{colors.semanticNegative030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
};

stylePresets.iconButtonSolidPositive = {
  base: {
    backgroundColor: '{{colors.semanticPositive030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
};

stylePresets.iconButtonOutlinedPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive010}}',
    borderColor: '{{colors.interactive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactive020}}',
    borderColor: '{{colors.interactive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive130}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive110}}',
    borderColor: '{{colors.interactive140}}',
  },
  active: {
    backgroundColor: '{{colors.interactive120}}',
    borderColor: '{{colors.interactive150}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.semanticNegative030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative010}}',
    borderColor: '{{colors.semanticNegative050}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative020}}',
    borderColor: '{{colors.semanticNegative030}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.semanticPositive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive010}}',
    borderColor: '{{colors.semanticPositive040}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive020}}',
    borderColor: '{{colors.semanticPositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive010}}',
  },
  active: {
    backgroundColor: '{{colors.interactive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
    backgroundColor: '{{colors.transparent}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive020}}',
    color: '{{colors.inkBrand010}}',
  },
};
stylePresets.iconButtonMinimalSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive110}}',
  },
  active: {
    backgroundColor: '{{colors.interactive120}}',
  },
  selected: {
    backgroundColor: '{{colors.transparent}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactive120}}',
    color: '{{colors.inkInverse}}',
  },
};

stylePresets.iconButtonMinimalNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{borders.borderRadiusCircle}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticNegative010}}',
  },
  active: {
    backgroundColor: '{{colors.semanticNegative020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticNegative020}}',
  },
};
stylePresets.iconButtonMinimalPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.semanticPositive010}}',
  },
  active: {
    backgroundColor: '{{colors.semanticPositive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.semanticPositive020}}',
  },
};

stylePresets.iconButtonDefault = stylePresets.iconButtonSolidPrimary;

//
// Icons
//
stylePresets.buttonSocialTwitter = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialFacebook = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialEmail = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialWhatsapp = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialLink = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialShare = stylePresets.iconButtonMinimalSecondary;

//
// Tag
//

stylePresets.tagPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive130}}',
    borderWidth: '{{borders.borderWidth010}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive120}}',
  },
  active: {
    borderWidth: '{{borders.borderWidth010}}',
  },
  selected: {
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
    backgroundColor: '{{colors.interactive130}}',
    borderStyle: 'none',
  },
};
stylePresets.tagDefault = stylePresets.tagPrimary;

// Tab

stylePresets.tab = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  selected: {
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive010}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  active: {
    backgroundColor: '{{colors.interactive020}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// Flag
//

stylePresets.flagSolid = {
  base: {
    backgroundColor: '{{colors.semanticInformative010}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidLive = {
  base: {
    ...stylePresets.flagSolid.base,
    backgroundColor: '{{colors.semanticNegative030}}',
  },
};
stylePresets.flagMinimal = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkInformative}}',
    iconColor: '{{colors.inkInformative}}',
  },
};
stylePresets.flagDefault = stylePresets.flagSolid;

//
// Link
//

stylePresets.linkInline = {
  base: {
    color: '{{colors.inkLink}}',
    iconColor: '{{colors.inkLink}}',
  },
  hover: {
    color: '{{colors.inkLinkHover}}',
    iconColor: '{{colors.inkLinkHover}}',
  },
  active: {
    color: '{{colors.inkLinkActive}}',
    iconColor: '{{colors.inkLinkActive}}',
  },
  visited: {
    color: '{{colors.inkLinkVisited}}',
    iconColor: '{{colors.inkLinkVisited}}',
  },
};

stylePresets.linkStandalone = {
  base: {
    color: '{{colors.inkLink}}',
    iconColor: '{{colors.inkLink}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.inkLinkHover}}',
    iconColor: '{{colors.inkLinkHover}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.inkLinkActive}}',
    iconColor: '{{colors.inkLinkActive}}',
  },
  visited: {
    color: '{{colors.inkLink}}',
    iconColor: '{{colors.inkLink}}',
  },
};

//
// Audio Player
//

stylePresets.audioPlayerSeekBarTrack = {
  base: {
    backgroundColor: '{{colors.interactive210}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerSeekBarIndicator = {
  base: {
    backgroundColor: '{{colors.interactive230}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerLabels = {
  base: {
    color: '{{colors.inkSubtle}}',
  },
};
stylePresets.audioPlayerThumb = {
  base: {
    backgroundColor: '{{colors.inkInverse}}',
    borderColor: '{{colors.interactive230}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    iconColor: '{{colors.inkNonEssential}}',
    boxShadow: '{{shadows.shadow010}}',
    borderStyle: 'solid',
  },
  hover: {
    backgroundColor: '{{colors.interactive240}}',
  },
  active: {
    iconColor: '{{colors.inkSubtle}}',
    backgroundColor: '{{colors.interactive050}}',
  },
};
stylePresets.audioPlayerSeekBarBuffering = {
  base: {
    backgroundColor: '{{overlays.overlayDark010}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerPopoutButton = stylePresets.iconButtonMinimalPrimary;
stylePresets.audioPlayerControlButton = stylePresets.iconButtonMinimalPrimary;
stylePresets.audioPlayerPlayPauseButton = stylePresets.iconButtonSolidPrimary;

//
// Slider
//

stylePresets.sliderTrack = {
  base: {
    backgroundColor: '{{colors.interactive210}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled}}',
  },
};
stylePresets.sliderIndicator = {
  base: {
    backgroundColor: '{{colors.interactive230}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interface040}}',
  },
};
stylePresets.sliderThumb = {
  base: {
    ...stylePresets.audioPlayerThumb.base,
    iconColor: '{{colors.inkInverse}}',
  },
  active: {
    backgroundColor: '{{colors.interactive240}}',
  },
  disabled: {
    backgroundColor: '{{colors.interface040}}',
    borderColor: 'none',
    borderStyle: 'none',
    borderWidth: 'none',
    boxShadow: 'none',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.sliderThumbLabel = {
  base: {
    color: '{{colors.inkBrand010}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};
stylePresets.sliderLabels = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// Volume Control
//

stylePresets.volumeControlTrackIndicator = {
  base: {
    backgroundColor: '{{colors.interactive230}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.volumeControlThumb = stylePresets.audioPlayerThumb;
stylePresets.volumeControlLabels = stylePresets.audioPlayerLabels;
stylePresets.volumeControlTrack = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.volumeControlButtons = stylePresets.iconButtonMinimalPrimary;

//
// Image
//

stylePresets.imageSharp = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedSmall = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded010}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedMedium = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded030}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedLarge = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded050}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageDefault = {
  base: {
    borderRadius: '{{borders.borderRadiusDefault}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageCircle = {
  base: {
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  loading: {
    backgroundColor: '{{colors.skeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// Headline
//

stylePresets.headlineKicker = {
  base: {
    color: '{{colors.inkBrand010}}',
  },
};
stylePresets.headlineContent = {
  base: {
    color: '{{colors.inkContrast}}',
  },
};

//
// Standfirst
//

stylePresets.standfirst = {
  base: {
    color: '{{colors.inkBase}}',
  },
};

//
// Share Bar
//

stylePresets.shareBarLabel = {
  base: {
    color: '{{colors.inkBase}}',
  },
};

//
// TitleBar
//
stylePresets.titleBar = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
  },
};

stylePresets.titleBarButton = stylePresets.buttonSolidPrimary;
stylePresets.titleBarLink = stylePresets.linkStandalone;
//
// Lists
//

stylePresets.listItemContent = {
  base: {
    color: '{{colors.inkBase}}',
  },
};

stylePresets.unorderedListItemMarker = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};

stylePresets.orderedListItemNumber = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};

stylePresets.unorderedListItemContent = stylePresets.listItemContent;
stylePresets.orderedListItemContent = stylePresets.listItemContent;

//
// Divider
//

stylePresets.dividerHorizontal = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth: '{{borders.borderWidthDefault}}',
  },
};

stylePresets.dividerVertical = stylePresets.dividerHorizontal;

//
// DateTime
//

stylePresets.dateTime = {
  base: {
    color: '{{colors.inkSubtle}}',
  },
};

stylePresets.dateTimePrefix = stylePresets.dateTime;
stylePresets.dateTimeSuffix = stylePresets.dateTime;

//
// Byline
//

stylePresets.byline = {
  base: {
    color: '{{colors.inkSubtle}}',
  },
};

stylePresets.bylineLink = stylePresets.linkInline;
stylePresets.bylineDivider = {
  base: {
    ...stylePresets.dividerVertical.base,
    borderColor: '{{colors.interface050}}',
  },
};
