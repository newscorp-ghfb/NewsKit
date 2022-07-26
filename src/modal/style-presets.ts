import {StylePreset} from '../theme/types';

export default {
  modalPanel: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
      backgroundColor: '{{colors.interfaceBackground}}',
      boxShadow: '{{shadows.shadow060}}',
    },
  },
  modalHeader: {
    base: {
      color: '{{colors.inkBase}}',
    },
  },
} as Record<string, StylePreset>;
