import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

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
