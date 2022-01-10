import {StylePreset} from '../theme/types';

export default {
  structuredListItem: {
    hover: {
      backgroundColor: '{{colors.interactiveSecondary010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
    },
  },
} as Record<string, StylePreset>;
