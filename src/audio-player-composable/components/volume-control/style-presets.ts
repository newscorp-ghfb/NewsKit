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
      borderColor: '{{colors.interfaceBackground}}',
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
  audioPlayerVolumeControlThumbOld: {
    __extends: 'audioPlayerVolumeControlThumb',
    base: {
      borderColor: '{{colors.interactivePrimary010}}',
    },
  },
  audioPlayerVolumeControlTrack: {
    base: {
      backgroundColor: '{{colors.interface030}}',
      borderRadius: '{{borders.borderRadiusPill}}',
    },
  },
  audioPlayerVolumeControlPopover: {
    base: {
      boxShadow: '{{shadows.shadow060}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      backgroundColor: '{{colors.interface010}}',
    },
  },
  audioPlayerVolumeControlPopoverOld: {
    __extends: '{{stylePresets.audioPlayerVolumeControlPopover}}',
    base: {
      boxShadow: '{{shadows.shadow050}}',
    },
  },
} as Record<string, StylePreset>;
