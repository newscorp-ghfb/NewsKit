import {StylePreset} from '../theme/types';

export default {
  breadcrumbItem: {
    base: {
      color: '{{colors.interactiveLink010}}',
      backgroundColor: '{{colors.transparent}}',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
      backgroundColor: '{{colors.transparent}}',
    },
    selected: {
      color: '{{colors.inkBase}',
      backgroundColor: '{{colors.transparent}}',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      backgroundColor: '{{colors.transparent}}',
    },
  },
  breadcrumbSeparator: {
    base: {color: '{{colors.inkSubtle}}'},
  },
} as Record<string, StylePreset>;
