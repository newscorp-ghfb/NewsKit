import {StylePreset} from '../theme/types';

export default {
  sliderTrack: {
    base: {
      backgroundColor: '{{colors.interface030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
    },
  },
  sliderIndicator: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
    disabled: {
      backgroundColor: '{{colors.interface040}}',
    },
  },
  sliderThumb: {
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
  },
  sliderThumbLabel: {
    base: {
      color: '{{colors.inkBrand010}}',
      textAlign: 'center',
      whiteSpace: 'nowrap',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
  },
  sliderLabels: {
    base: {
      color: '{{colors.inkSubtle}}',
      iconColor: '{{colors.inkSubtle}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  sliderFeedback: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput050}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput050}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
    },
  },
} as Record<string, StylePreset>;
