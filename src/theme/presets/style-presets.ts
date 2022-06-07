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
    outlineColor: '{{outline.outlineColorDefault}}',
    outlineStyle: '{{outline.outlineStyleDefault}}',
    outlineWidth: '{{outline.outlineWidthDefault}}',
    safariOutlineStyle: '{{outline.safariOutlineStyleDefault}}',
    borderColor: '{{colors.transparent}}',
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
    borderColor: '{{outline.outlineColorDefault}}',
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
    borderColor: '{{outline.outlineColorDefault}}',
    backgroundColor: '{{colors.interactiveInput010}}',
  },
  'invalid:hover': {
    borderColor: '{{colors.interactiveNegative030}}',
    backgroundColor: '{{colors.interactiveInput010}}',
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

stylePresets.feedback = {
  base: {
    backgroundColor: '{{colors.interactiveInput040}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    opacity: '{{overlays.opacity000}}',
  },
  hover: {
    opacity: '{{overlays.opacity020}}',
  },
  disabled: {
    opacity: '{{overlays.opacity000}}',
  },
  'hover:active': {
    opacity: '{{overlays.opacity040}}',
  },
  'valid:hover': {
    backgroundColor: '{{colors.interactivePositive040}}',
    opacity: '{{overlays.opacity020}}',
  },
  'valid:hover:active': {
    backgroundColor: '{{colors.interactivePositive040}}',
    opacity: '{{overlays.opacity040}}',
  },
  'invalid:hover': {
    backgroundColor: '{{colors.interactiveNegative040}}',
    opacity: '{{overlays.opacity020}}',
  },
  'invalid:hover:active': {
    backgroundColor: '{{colors.interactiveNegative040}}',
    opacity: '{{overlays.opacity040}}',
  },
};
