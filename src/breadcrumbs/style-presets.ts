import {StylePreset} from '../theme/types';

export default {
  breadcrumbItem: {
    base: {
      color: '{{colors.interactiveLink010}}',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
    },
    selected: {
      color: '{{colors.inkBase}}',
    },
    'selected:hover': {
      color: '{{colors.inkBase}}',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
    },
  },
  breadcrumbSeparator: {
    base: {color: '{{colors.inkSubtle}}'},
  },
} as Record<string, StylePreset>;
