import {StylePreset} from '../theme/types';

export default {
  label: {
    base: {
      color: '{{colors.inkContrast}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
  },
} as Record<string, StylePreset>;
