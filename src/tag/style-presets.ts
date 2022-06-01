import {StylePreset} from '../theme/types';

export default {
  tagPrimary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveSecondary030}}',
      borderWidth: '{{borders.borderWidth010}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    active: {
      borderWidth: '{{borders.borderWidth010}}',
    },
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
  },
  tagPrimaryInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface010}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusSharp}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse020}}',
    },
    'focus-visible': {
      outlineColor: '{{outline.outlineColorDefault}}',
      outlineStyle: '{{outline.outlineStyleDefault}}',
      outlineWidth: '{{outline.outlineWidthDefault}}',
      outlineOffset: '{{outline.outlineOffsetDefault}}',
    },
  },
} as Record<string, StylePreset>;
