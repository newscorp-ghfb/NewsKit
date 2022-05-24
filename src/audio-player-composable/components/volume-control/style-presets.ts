import {StylePreset} from '../../../theme/types';

export default {
  volumeControlIndicator: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  volumeControlThumb: {
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
  },
  volumeControlTrack: {
    base: {
      backgroundColor: '{{colors.interface030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
} as Record<string, StylePreset>;
