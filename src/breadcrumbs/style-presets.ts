import {StylePreset} from '../theme/types';

export default {
  breadcrumbItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.inkSubtle}}',
    },
    hover: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.inkSubtle}}',
    },
    selected: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkSubtle}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
} as Record<string, StylePreset>;
