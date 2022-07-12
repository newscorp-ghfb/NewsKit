import {StylePreset} from '../theme/types';

export default {
  videoPlayerPlayButton: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.white}}',
      borderWidth: '{{borders.borderWidth020}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      color: '{{colors.white}}',
    },
  },
  videoPlayerSeekBarContainer: {
    base: {
      backgroundColor: '{{colors.blackTint020}}',
    },
  },
  videoPlayerLoadProgressBar: {
    base: {
      backgroundColor: '{{colors.whiteTint050}}',
    },
  },
  videoPlayerPlayProgressBar: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
    },
  },
  videoPlayerSeekHandle: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
    },
  },
  videoPlayerCurrentDuration: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      borderStyle: 'solid',
      borderColor: '{{colors.inkInverse}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkContrast}}',
    },
  },
  videoPlayerSeekPosition: {
    base: {
      backgroundColor: '{{colors.inkContrast}}',
      borderStyle: 'solid',
      borderColor: '{{colors.inkContrast}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkInverse}}',
    },
  },
  videoPlayerControlBar: {
    base: {
      backgroundColor: '{{colors.blackTint050}}',
    },
  },
  videoPlayerVolumeBar: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
    },
  },
  videoPlayerVolumeLevel: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
    },
  },
  videoPlayerDockText: {
    base: {
      backgroundImage: '{{overlays.overlayGradientFromTop}}',
    },
  },
  videoPlayerDockTextTitle: {
    base: {
      color: '{{colors.white}}',
    },
  },
  videoPlayerMiniCardOverlay: {
    base: {
      backgroundColor: '{{colors.neutral090}}',
    },
  },
} as Record<string, StylePreset>;
