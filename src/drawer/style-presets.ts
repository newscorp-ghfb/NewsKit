import {StylePreset} from '../theme/types';

export default {
  drawerPanel: {
    base: {
      borderRadius: '{{borders.borderRadiusSharp}}',
      backgroundColor: '{{colors.interface010}}',
      boxShadow: '{{shadows.shadow060}}',
    },
  },
  drawerHeader: {
    base: {
      color: '{{colors.inkBase}}',
    },
  },
} as Record<string, StylePreset>;
