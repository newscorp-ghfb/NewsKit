import {StylePreset} from '../theme/types';

export default {
  tooltip: {
    base: {
      backgroundColor: '{{colors.interface060}}',
    },
  },
  tooltipPanel: {
    base: {
      color: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
} as Record<string, StylePreset>;
