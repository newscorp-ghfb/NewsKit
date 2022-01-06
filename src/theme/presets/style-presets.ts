import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

//
// Banner
//

stylePresets.bannerInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.bannerNotice = {
  base: {
    backgroundColor: '{{colors.interfaceNotice010}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.bannerNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative010}}',
    iconColor: '{{colors.inkInverse}}',
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
// TitleBar
//

stylePresets.titleBar = {
  base: {
    backgroundColor: '{{colors.transparent}}',
  },
};

//
// Divider
//

stylePresets.divider = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth: '{{borders.borderWidthDefault}}',
  },
};

stylePresets.dividerInverse = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.whiteTint050}}',
    borderWidth: '{{borders.borderWidthDefault}}',
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
