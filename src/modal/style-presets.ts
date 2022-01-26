import {StylePreset} from '../theme/types';

export default {
  modalPanel: {
    base: {
      borderRadius: '{{borders.borderRadiusSharp}}',
      backgroundColor: '{{colors.interfaceBackground}}',
      boxShadow: '{{shadows.shadow060}}',
    },
  },
} as Record<string, StylePreset>;
