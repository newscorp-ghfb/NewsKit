import {StylePreset} from '../theme/types';
import {defaultFocusVisible} from '../utils/default-focus-visible';

export default {
  linkStandalone: {
    base: {
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.interactiveLink010}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
      iconColor: '{{colors.interactiveLink020}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      iconColor: '{{colors.interactiveLink030}}',
      textDecoration: 'underline',
    },
    'focus-visible': defaultFocusVisible,
  },
  linkStandaloneInverse: {
    base: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'underline',
    },
    'focus-visible': defaultFocusVisible,
  },

  linkInline: {
    base: {
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.interactiveLink010}}',
      textDecoration: 'underline',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
      iconColor: '{{colors.interactiveLink020}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      iconColor: '{{colors.interactiveLink030}}',
      textDecoration: 'underline',
    },
    visited: {
      color: '{{colors.interactiveVisited010}}',
      iconColor: '{{colors.interactiveVisited010}}',
      textDecoration: 'underline',
    },
    'visited:hover': {
      color: '{{colors.interactiveVisited010}}',
      iconColor: '{{colors.interactiveVisited010}}',
      textDecoration: 'underline',
    },
    'focus-visible': defaultFocusVisible,
  },
  linkInlineInverse: {
    base: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'underline',
    },
    hover: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.interactiveInverse030}}',
      textDecoration: 'underline',
    },
    visited: {
      color: '{{colors.interactiveInverse040}}',
      iconColor: '{{colors.interactiveInverse040}}',
      textDecoration: 'underline',
    },
    'visited:hover': {
      color: '{{colors.interactiveInverse040}}',
      iconColor: '{{colors.interactiveInverse040}}',
    },
    'focus-visible': defaultFocusVisible,
  },
} as Record<string, StylePreset>;
