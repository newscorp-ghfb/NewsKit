import {StylePreset} from '../theme';

export default {
  popover: {
    base: {
      boxShadow: '{{shadows.shadow060}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  popoverPointer: {
    base: {
      backgroundColor: '{{colors.interface010}}',
    },
  },
  popoverPanel: {
    base: {
      color: '{{colors.inkBase}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      backgroundColor: '{{colors.interface010}}',
    },
  },
  popoverHeader: {
    base: {
      borderColor: '{{colors.interface050}}',
      borderStyle: 'none none solid none',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  popoverCloseButtonContainer: {
    base: {
      borderColor: '{{colors.interface050}}',
      borderStyle: 'none none solid none',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
} as Record<string, StylePreset>;
