import {StylePreset} from '../theme/types';

export default {
  assistiveText: {
    base: {
      color: '{{colors.inkSubtle}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
    invalid: {
      color: '{{colors.inkNegative}}',
    },
    valid: {
      color: '{{colors.inkSubtle}}',
    },
  },
} as Record<string, StylePreset>;
