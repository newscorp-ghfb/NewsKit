import {StylePreset} from '../theme/types';

export default {
  scrollOverlaysHorizontal: {
    base: {
      backgroundImage: '{{overlays.overlayGradientBaseHorizontal}}',
    },
  },
  scrollOverlaysVertical: {
    base: {
      backgroundImage: '{{overlays.overlayGradientBaseVertical}}',
    },
  },
} as Record<string, StylePreset>;
