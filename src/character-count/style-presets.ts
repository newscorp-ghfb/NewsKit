import {StylePreset} from '../theme';

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
  },
} as Record<string, StylePreset>;
