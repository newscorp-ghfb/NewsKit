import {StylePreset} from '../theme/types';

export default {
  blockDefault: {
    base: {
      backgroundColor: '{{colors.purple020}}',
    },
    hover: {
      backgroundColor: '{{colors.red020}}',
    },
    active: {
      backgroundColor: '{{colors.green020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
    },
  },
} as Record<string, StylePreset>;
