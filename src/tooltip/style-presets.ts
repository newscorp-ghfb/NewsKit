import {StylePreset} from '../theme/types';

export default {
  tooltipPointer: {
    base: {
      backgroundColor: '{{colors.interface060}}',
    },
  },
  tooltipPanel: {
    base: {
      color: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      backgroundColor: '{{colors.interface060}}',
    },
  },
} as Record<string, StylePreset>;
