import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

//
// Icons
//
stylePresets.iconSocialTwitter = {
  base: {
    iconColor: '{{colors.socialTwitter}}',
  },
};
stylePresets.iconSocialGitHub = {
  base: {
    iconColor: '{{colors.socialGithub}}',
  },
};
stylePresets.iconSocialFacebook = {
  base: {
    iconColor: '{{colors.socialFacebook}}',
  },
};
stylePresets.iconSocialInstagram = {
  base: {
    iconColor: '{{colors.socialInstagram}}',
  },
};
stylePresets.iconSocialYoutube = {
  base: {
    iconColor: '{{colors.socialYoutube}}',
  },
};
stylePresets.iconSocialWhatsApp = {
  base: {
    iconColor: '{{colors.socialWhatsapp}}',
  },
};
stylePresets.iconSocialReddit = {
  base: {
    iconColor: '{{colors.socialReddit}}',
  },
};

stylePresets.iconDefault = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};

//
// Indeterminate Progress Indicator
//

stylePresets.indeterminateProgressIndicatorPrimary = {
  base: {
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.indeterminateProgressIndicatorSecondary = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.indeterminateProgressIndicatorNegative = {
  base: {
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.indeterminateProgressIndicatorPositive = {
  base: {
    iconColor: '{{colors.inkPositive}}',
  },
};
stylePresets.indeterminateProgressIndicatorInverse = {
  base: {
    iconColor: '{{colors.inkInverse}}',
  },
};

//
// Assistive Text
//

stylePresets.assistiveText = {
  base: {
    color: '{{colors.inkSubtle}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
  invalid: {
    color: '{{colors.inkNegative}}',
  },
  valid: {
    color: '{{colors.inkSubtle}}',
  },
};

//
// Label
//

stylePresets.label = {
  base: {
    color: '{{colors.inkContrast}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};

//
// Input Field
//

stylePresets.inputField = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveInput020}}',
    borderWidth: '{{borders.borderWidthDefault}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    textOverflow: 'ellipsis',
    placeholderColor: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkBase}}',
  },
  focus: {
    borderColor: '{{colors.interactiveInput040}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  valid: {
    borderColor: '{{colors.interactivePositive030}}',
  },
  'valid:hover': {
    borderColor: '{{colors.interactivePositive030}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  'valid:focus': {
    borderColor: '{{colors.interactiveInput040}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    iconColor: '{{colors.inkBrand010}}',
  },
  invalid: {
    borderColor: '{{colors.interactiveNegative030}}',
  },
  'invalid:focus': {
    borderColor: '{{colors.interactiveInput040}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  'invalid:hover': {
    borderColor: '{{colors.interactiveNegative030}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
};

// Text Input
stylePresets.textInput = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth: '{{borders.borderWidthDefault}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    textOverflow: 'ellipsis',
    placeholderColor: '{{colors.inkSubtle}}',
  },
  focus: {
    backgroundColor: '{{colors.interface020}}',
    borderColor: '{{colors.interfaceBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interface020}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
  },
  invalid: {
    caretColor: '{{colors.inkNegative}}',
    borderColor: '{{colors.interactiveNegative030}}',
  },
  valid: {
    caretColor: '{{colors.inkPositive}}',
    borderColor: '{{colors.interactivePositive030}}',
  },
};

stylePresets.textInputLabel = {
  base: {
    color: '{{colors.inkContrast}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};

stylePresets.textInputAssistiveText = {
  base: {
    color: '{{colors.inkSubtle}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
  invalid: {
    color: '{{colors.inkNegative}}',
  },
  valid: {
    color: '{{colors.inkPositive}}',
  },
};

stylePresets.iconPositive = {
  base: {
    iconColor: '{{colors.inkPositive}}',
  },
};

stylePresets.iconNegative = {
  base: {
    iconColor: '{{colors.inkNegative}}',
  },
};

//
// Select
//

stylePresets.selectPanel = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderRadius: '{{borders.borderRadiusRounded010}}',
    boxShadow: '{{shadows.shadow050}}',
  },
};

stylePresets.selectOptionItem = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBase}}',
    textOverflow: 'ellipsis',
    borderRadius: '{{borders.borderRadiusSharp}}',
    borderStyle: 'solid',
    borderWidth: '{{borders.borderWidth010}}',
    borderColor: '{{colors.transparent}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  focus: {
    backgroundColor: '{{colors.interactiveInput010}}',
    borderColor: '{{colors.interactiveInput040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
  selected: {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
  'selected:hover': {
    backgroundColor: '{{colors.interactiveInput030}}',
    color: '{{colors.inkContrast}}',
  },
  'selected:focus': {
    backgroundColor: '{{colors.interactiveInput030}}',
    borderColor: '{{colors.interactiveInput040}}',
  },
  'selected:active': {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
  'selected:focus:active': {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
  'selected:focus:hover': {
    backgroundColor: '{{colors.interactiveInput030}}',
    color: '{{colors.inkContrast}}',
  },
};

stylePresets.selectOptionItemIcon = {
  selected: {
    iconColor: '{{colors.interactiveInput040}}',
  },
  'selected:hover': {
    iconColor: '{{colors.interactiveInput040}}',
  },
  'selected:focus': {
    iconColor: '{{colors.interactiveInput040}}',
  },
  'selected:active': {
    iconColor: '{{colors.interactiveInput040}}',
  },
};

//
// Link
//
stylePresets.linkStandalone = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
};
stylePresets.linkStandaloneInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
};
stylePresets.linkInline = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'underline',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
    textDecoration: 'underline',
  },
  'visited:hover': {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
    textDecoration: 'underline',
  },
};
stylePresets.linkInlineInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
    textDecoration: 'underline',
  },
  'visited:hover': {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
};

//
// Slider
//

stylePresets.sliderTrack = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
  },
};
stylePresets.sliderIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interface040}}',
  },
};
stylePresets.sliderThumb = {
  base: {
    boxShadow: '{{shadows.shadow010}}',
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePrimary010}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  disabled: {
    boxShadow: 'none',
    backgroundColor: '{{colors.interface040}}',
    borderStyle: 'none',
    borderColor: 'none',
    borderWidth: 'none',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.sliderThumbLabel = {
  base: {
    color: '{{colors.inkBrand010}}',
    textAlign: 'center',
    whiteSpace: 'nowrap',
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

stylePresets.volumeControlIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.volumeControlThumb = {
  base: {
    ...stylePresets.sliderThumb.base,
  },
  hover: {
    ...stylePresets.sliderThumb.hover,
  },
  active: {
    ...stylePresets.sliderThumb.active,
  },
};
stylePresets.volumeControlTrack = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};

//
// Audio Player
//

stylePresets.audioPlayerSeekBarTrack = {
  base: {
    backgroundColor: '{{colors.interface020}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerSeekBarIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerSeekBarBuffering = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerThumb = {
  base: {
    ...stylePresets.sliderThumb.base,
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderColor: '{{colors.interfaceBackground}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

//
// Image
//

stylePresets.imageSharp = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedSmall = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded010}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedMedium = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded030}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedLarge = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded050}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageDefault = {
  base: {
    borderRadius: '{{borders.borderRadiusDefault}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageCircle = {
  base: {
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// TitleBar
//

stylePresets.titleBar = {
  base: {
    backgroundColor: '{{colors.transparent}}',
  },
};

//
// Headline
//

stylePresets.headlineKickerInteractive = {
  base: {
    color: '{{colors.interactivePrimary030}}',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.headlineHeadingInteractive = {
  base: {
    color: '{{colors.inkBase}}',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
  },
};

//
// Overlay
//

stylePresets.overlay = {
  base: {
    backgroundColor: '{{overlays.overlayTintBase040}}',
  },
};

//
// Overlay
//

stylePresets.scrollOverlaysHorizontal = {
  base: {
    backgroundImage: '{{overlays.overlayGradientBaseHorizontal}}',
  },
};
stylePresets.scrollOverlaysVertical = {
  base: {
    backgroundImage: '{{overlays.overlayGradientBaseVertical}}',
  },
};

//
// Drawer
//

stylePresets.drawerPanel = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
    backgroundColor: '{{colors.interface010}}',
    boxShadow: '{{shadows.shadow060}}',
  },
};

// Card

stylePresets.cardContainer = {
  base: {
    color: '{{colors.inkBase}}',
    backgroundColor: '{{colors.interface010}}',
  },
};

// Toast

stylePresets.toastNeutral = {
  base: {
    backgroundColor: '{{colors.interfaceNeutral010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.toastInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.toastNotice = {
  base: {
    backgroundColor: '{{colors.interfaceNotice010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.toastPositive = {
  base: {
    backgroundColor: '{{colors.interfacePositive010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.toastNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

// StructuredList
stylePresets.structuredListItem = {
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
  },
};

// Inline Message

stylePresets.inlineMessageInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative020}}',
    borderColor: '{{colors.interfaceInformative010}}',
    borderStyle: 'solid',
    borderRadius: '{{borders.borderRadiusRounded010}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth030}}',
    iconColor: '{{colors.inkInformative}}',
    color: '{{colors.inkInverse}}',
  },
};

stylePresets.inlineMessageNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative020}}',
    borderColor: '{{colors.interfaceNegative010}}',
    borderStyle: 'solid',
    borderRadius: '{{borders.borderRadiusRounded010}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth030}}',
    iconColor: '{{colors.inkNegative}}',
    color: '{{colors.inkBase}}',
  },
};

// Menu

//
// Modal
//

stylePresets.modalPanel = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
    backgroundColor: '{{colors.interfaceBackground}}',
    boxShadow: '{{shadows.shadow060}}',
  },
};

//
// Checkbox
//

stylePresets.checkboxInput = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderColor: '{{colors.interactiveInput020}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusRounded010}}',
    borderStyle: 'solid',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    borderColor: '{{colors.interactiveInput040}}',
  },
  focus: {
    borderColor: '{{colors.interactiveInput050}}',
  },
  'focus:hover': {
    borderColor: '{{colors.interactiveInput050}}',
  },
  checked: {
    backgroundColor: '{{colors.interactiveInput040}}',
    borderColor: '{{colors.interactiveInput040}}',
  },
  'checked:hover': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  'checked:focus': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  'checked:focus:hover': {
    backgroundColor: '{{colors.interactiveInput050}}',
    borderColor: '{{colors.interactiveInput050}}',
  },
  invalid: {
    borderColor: '{{colors.interactiveNegative040}}',
  },
  'invalid:focus': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'invalid:hover': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'invalid:focus:hover': {
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid': {
    backgroundColor: '{{colors.interactiveNegative040}}',
    borderColor: '{{colors.interactiveNegative040}}',
  },
  'checked:invalid:focus': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid:hover': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  'checked:invalid:focus:hover': {
    backgroundColor: '{{colors.interactiveNegative050}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  valid: {
    borderColor: '{{colors.interactivePositive040}}',
  },
  'valid:focus': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'valid:hover': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'valid:focus:hover': {
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid': {
    backgroundColor: '{{colors.interactivePositive040}}',
    borderColor: '{{colors.interactivePositive040}}',
  },
  'checked:valid:focus': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid:hover': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  'checked:valid:focus:hover': {
    backgroundColor: '{{colors.interactivePositive050}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
  },
  'checked:disabled': {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    borderColor: '{{colors.interactiveDisabled010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

stylePresets.checkboxFeedback = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusRounded010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
  focus: {
    backgroundColor: '{{colors.interactiveInput030}}',
  },
};

stylePresets.controlLabel = {
  base: {
    color: '{{colors.inkBase}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};
