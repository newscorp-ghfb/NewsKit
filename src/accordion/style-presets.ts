import {StylePreset} from '../theme/types';

export default {
  accordionHeader: {
    base: {
      backgroundColor: '{{colors.interfaceBackground}}',
      color: '{{colors.inkBase}}',
      borderStyle: 'none none solid none',
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
      iconColor: '{{colors.inkBase}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput010}}',
      color: '{{colors.interactiveInput040}}',
      iconColor: '{{colors.interactiveInput040}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  accordionHeaderOld: {
    __extends: 'accordionHeader',
    base: {
      backgroundColor: '{{colors.interface010}}',
    },
  },
  accordionPanel: {
    base: {
      borderStyle: 'none none solid none',
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
} as Record<string, StylePreset>;
