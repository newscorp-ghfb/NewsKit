import {StylePreset} from '../theme/types';

// The paginationItem style preset is based on the buttonMinimalPrimary style preset
// but using link colours
export default {
  paginationItem0: {
    base: {
      backgroundColor: "{{colors.transparent}}",
      color: '{{colors.interactiveLink010}}',
    },
    hover: {
      color: '{{colors.interactivePrimary010}}', //{{colors.interactiveLink020}}',
      textDecoration: 'none',
    },
    selected: {
      color: '{{colors.interactiveLink030}}',
      textDecoration: 'none',
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    'selected:hover': {
      color: '{{colors.inkBase}}',
      textDecoration: 'none',
    },
    active: {
      color: '{{colors.interactivePrimary020}}', //'{{colors.interactiveLink030}}',
      textDecoration: 'none',
    },
    disabled: {
      //backgroundColor: '{{colors.interactiveDisabled010}}',
      backgroundColor: "{{colors.transparent}}",
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    'focus-visible': {
      outlineColor: "{{outlines.outlineColorDefault}}",
      outlineOffset: "{{outlines.outlineOffsetDefault}}",
      outlineStyle: "{{outlines.outlineStyleDefault}}",
      outlineWidth: "{{outlines.outlineWidthDefault}}",
      safariOutlineStyle: "{{outlines.safariOutlineStyleDefault}}",
    }
  },
  paginationItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      //color: '{{colors.inkBrand010}}',
      color: '{{colors.interactiveLink010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
    },
    active: {
      color: '{{colors.interactiveLink030}}',
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    'focus-visible': {
      outlineColor: "{{outlines.outlineColorDefault}}",
      outlineOffset: "{{outlines.outlineOffsetDefault}}",
      outlineStyle: "{{outlines.outlineStyleDefault}}",
      outlineWidth: "{{outlines.outlineWidthDefault}}",
      safariOutlineStyle: "{{outlines.safariOutlineStyleDefault}}",
    }
  },
  paginationNavigationIcon: {
    base: {
      backgroundColor: "{{colors.transparent}}",
      color: '{{colors.inkSubtle}}'
    },
  },
  paginationBoundary: {
    base: {
      backgroundColor: "{{colors.transparent}}",
      color: '{{colors.inkSubtle}}'
    },
  },
} as Record<string, StylePreset>;
