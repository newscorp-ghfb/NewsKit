import {StylePreset} from '../theme/types';

export default {
  cardContainer: {
    base: {
      color: '{{colors.inkBase}}',
      backgroundColor: '{{colors.interface010}}',
    },
  },
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
} as Record<string, StylePreset>;
