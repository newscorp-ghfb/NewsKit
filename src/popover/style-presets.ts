import {StylePreset} from '../theme';
import {defaultFocusVisible} from '../utils/default-focus-visible';

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
    'focus-visible': {
      ...defaultFocusVisible,
      outlineOffset: '0px',
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
