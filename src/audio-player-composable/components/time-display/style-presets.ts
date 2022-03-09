import {StylePreset} from '../../../theme/types';

export default {
  currentTimeDisplay: {
    base: {
      color: '{{colors.inkContrast}}',
    },
  },
  container: {
    base: {
      backgroundColor: '{{colors.transparent}}',
    },
  },
} as Record<string, StylePreset>;
