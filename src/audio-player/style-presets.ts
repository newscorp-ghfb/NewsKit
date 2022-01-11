import {StylePreset} from '../theme/types';

export default {
  audioPlayerSeekBarTrack: {
    base: {
      backgroundColor: '{{colors.interface020}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerSeekBarIndicator: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerSeekBarBuffering: {
    base: {
      backgroundColor: '{{colors.interface030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerThumb: {
    base: {
      boxShadow: '{{shadows.shadow010}}',
      borderStyle: 'solid',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkNonEssential}}',
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
  },
} as Record<string, StylePreset>;
