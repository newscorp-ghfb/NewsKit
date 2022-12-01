import {StylePreset} from '../theme/types';

export default {
  breadcrumbItem: {
    base: {
      color: '{{colors.interactiveLink010}}',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
      textDecoration: 'underline',
    },
    selected: {
      color: '{{colors.inkBase}}',
      textDecoration: 'none',
    },
    'selected:hover': {
      color: '{{colors.inkBase}}',
      textDecoration: 'none',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      textDecoration: 'underline',
    },
  },
  breadcrumbSeparator: {
    base: {color: '{{colors.inkSubtle}}'},
  },
} as Record<string, StylePreset>;
