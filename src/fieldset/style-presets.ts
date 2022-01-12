import {StylePreset} from '../theme/types';

export default {
  legend: {
    base: {
      color: '{{colors.inkContrast}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
  },
} as Record<string, StylePreset>;
