import {StylePreset} from '../theme/types';

export default {
  iconButtonSolidPrimary: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary040}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary050}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonSolidSecondary: {
    base: {
      backgroundColor: '{{colors.interactiveSecondary030}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveSecondary050}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonSolidNegative: {
    base: {
      backgroundColor: '{{colors.interactiveNegative030}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveNegative040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveNegative050}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveNegative020}}',
      color: '{{colors.inkNegative}}',
      iconColor: '{{colors.inkNegative}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonSolidPositive: {
    base: {
      backgroundColor: '{{colors.interactivePositive030}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePositive040}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePositive050}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePositive020}}',
      color: '{{colors.inkPositive}}',
      iconColor: '{{colors.inkPositive}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonSolidInverse: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkContrast}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },

  iconButtonOutlinedPrimary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactivePrimary030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderColor: '{{colors.interactivePrimary040}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderColor: '{{colors.interactivePrimary050}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderStyle: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonOutlinedSecondary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveSecondary030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary010}}',
      borderColor: '{{colors.interactiveSecondary040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
      borderColor: '{{colors.interactiveSecondary050}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
      borderStyle: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonOutlinedNegative: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveNegative030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkNegative}}',
      iconColor: '{{colors.inkNegative}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveNegative010}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveNegative020}}',
      borderColor: '{{colors.interactiveNegative030}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveNegative020}}',
      borderStyle: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonOutlinedPositive: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactivePositive030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkPositive}}',
      iconColor: '{{colors.inkPositive}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePositive010}}',
      borderColor: '{{colors.interactivePositive040}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePositive020}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePositive020}}',
      borderStyle: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonOutlinedInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveInverse030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
      borderColor: '{{colors.interactiveInverse040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      borderColor: '{{colors.interactiveInverse050}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      borderStyle: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },

  iconButtonMinimalPrimary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonMinimalSecondary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
      color: '{{colors.inkInverse}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonMinimalNegative: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkNegative}}',
      iconColor: '{{colors.inkNegative}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveNegative020}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveNegative020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonMinimalPositive: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkPositive}}',
      iconColor: '{{colors.inkPositive}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePositive020}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePositive020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  iconButtonMinimalInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse020}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
} as Record<string, StylePreset>;
