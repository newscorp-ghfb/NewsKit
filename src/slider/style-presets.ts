import {StylePreset} from '../theme/types';
import {defaultFocusVisible} from '../utils/default-focus-visible';

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
    'focus-visible': {
      ...defaultFocusVisible,
      safariOutlineOffset: '-7px',
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
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  sliderLabelsOld: {
    __extends: '{{stylePresets.sliderLabels}}',
    base: {
      color: '{{colors.inkSubtle}}',
      iconColor: '{{colors.inkSubtle}}',
    },
  },
} as Record<string, StylePreset>;
