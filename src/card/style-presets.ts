import {StylePreset} from '../theme/types';
import {defaultFocusVisible} from '../utils/default-focus-visible';

export default {
  headlineHeadingInteractive: {
    base: {
      color: '{{colors.inkContrast}}',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
      textDecoration: 'underline',
    },
    visited: {
      color: '{{colors.interactiveVisited010}}',
    },
  },
  headlineKickerInteractive: {
    base: {
      color: '{{colors.interactivePrimary030}}',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
      textDecoration: 'underline',
    },
    visited: {
      color: '{{colors.interactiveVisited010}}',
    },
  },
  headlineHeadingLink: {
    'focus-visible': defaultFocusVisible,
  },
} as Record<string, StylePreset>;
