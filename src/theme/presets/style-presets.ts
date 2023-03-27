import {StylePreset} from './types';
import {defaultFocusVisible} from '../../utils/default-focus-visible';

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
    outlineColor: '{{outlines.outlineColorDefault}}',
    outlineStyle: '{{outlines.outlineStyleDefault}}',
    outlineWidth: '{{outlines.outlineWidthDefault}}',
    safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
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
    outlineColor: '{{outlines.outlineColorDefault}}',
    outlineStyle: '{{outlines.outlineStyleDefault}}',
    outlineWidth: '{{outlines.outlineWidthDefault}}',
    safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    borderColor: '{{colors.transparent}}',
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
    outlineColor: '{{outlines.outlineColorDefault}}',
    outlineStyle: '{{outlines.outlineStyleDefault}}',
    outlineWidth: '{{outlines.outlineWidthDefault}}',
    safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    borderColor: '{{colors.transparent}}',
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
  'focus-visible': {
    ...defaultFocusVisible,
    outlineOffset: '-{{outlines.outlineOffsetDefault}}',
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
  base: {
    iconColor: '{{colors.interactiveInput040}}',
  },
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
