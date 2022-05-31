import {StylePreset} from '../theme/types';

export default {
  tooltip: {
    base: {
      backgroundColor: '{{colors.interface060}}',
      color: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  tooltipPointer: {
    base: {
      backgroundColor: '{{colors.interface060}}',
    },
  },
} as Record<string, StylePreset>;
