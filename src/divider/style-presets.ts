import {StylePreset} from '../theme/types';

export default {
  divider: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
      borderWidth: '{{borders.borderWidthDefault}}',
    },
  },
  dividerInverse: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.inkInverse}}',
      borderWidth: '{{borders.borderWidthDefault}}',
    },
  },
} as Record<string, StylePreset>;
