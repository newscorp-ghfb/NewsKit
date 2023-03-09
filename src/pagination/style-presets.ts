import {StylePreset} from '../theme/types';

// The paginationItem style preset is based on the buttonMinimalPrimary style preset
// but using link colours
export default {
  paginationItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.interactiveLink010}}',
    },
    hover: {
      color: '{{colors.interactiveLink020}}',
      iconColor: '{{colors.interactiveLink020}}',
      backgroundColor: '{{colors.interactivePrimary010}}',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      iconColor: '{{colors.interactiveLink030}}',
      textDecoration: 'none',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
    selected: {
      color: '{{colors.interactiveLink030}}',
      textDecoration: 'none',
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    'selected:hover': {
      color: '{{colors.inkBase}}',
      textDecoration: 'none',
    },
  },
  paginationItemTruncation: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkNonEssential}}',
    },
  },
} as Record<string, StylePreset>;
