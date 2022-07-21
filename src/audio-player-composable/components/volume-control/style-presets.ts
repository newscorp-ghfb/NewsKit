import {StylePreset} from '../../../theme/types';
import {defaultFocusVisible} from '../../../utils/default-focus-visible';

export default {
  audioPlayerVolumeControlIndicator: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerVolumeControlThumb: {
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
    'focus-visible': {
      ...defaultFocusVisible,
      safariOutlineOffset: '-7px',
    },
  },
  audioPlayerVolumeControlTrack: {
    base: {
      backgroundColor: '{{colors.interface030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerVolumeControlHorizontalContainer: {
    base: {
      backgroundColor: '{{colors.transparent}}',
    },
  },
  audioPlayerVolumeControlVerticalContainer: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      boxShadow: '{{shadows.shadow050}}',
    },
  },
} as Record<string, StylePreset>;
