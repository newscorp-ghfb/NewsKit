import {StylePreset} from '../theme/types';

export default {
  linkStandalone: {
    base: {
      color: '{{colors.interactivePrimary030}}',
      iconColor: '{{colors.interactivePrimary030}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
      iconColor: '{{colors.interactivePrimary040}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
      iconColor: '{{colors.interactivePrimary050}}',
      textDecoration: 'underline',
    },
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
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
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
  },
  linkInline: {
    base: {
      color: '{{colors.interactivePrimary030}}',
      iconColor: '{{colors.interactivePrimary030}}',
      textDecoration: 'underline',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
      iconColor: '{{colors.interactivePrimary040}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
      iconColor: '{{colors.interactivePrimary050}}',
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
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
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
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
  },
} as Record<string, StylePreset>;
