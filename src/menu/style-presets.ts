import {StylePreset} from '../theme/types';
import {defaultFocusVisible} from '../utils/default-focus-visible';

export default {
  menuItemVertical: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.transparent}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
      color: '{{colors.inkSubtle}}',
      iconColor: '{{colors.inkSubtle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    selected: {
      borderColor: '{{colors.interactivePrimary030}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    'selected:hover': {
      backgroundColor: '{{colors.transparent}}',
      borderColor: '{{colors.interactivePrimary030}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    'focus-visible': defaultFocusVisible,
  },
  menuItemHorizontal: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.transparent}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
      color: '{{colors.inkSubtle}}',
      iconColor: '{{colors.inkSubtle}}',
    },
    hover: {
      borderColor: '{{colors.interactivePrimary030}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    active: {
      borderColor: '{{colors.interactivePrimary040}}',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkContrast}}',
    },
    selected: {
      borderColor: '{{colors.interactivePrimary030}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    'selected:hover': {
      borderColor: '{{colors.interactivePrimary030}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    'focus-visible': defaultFocusVisible,
  },
  menuItemHorizontalInverse: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.transparent}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    hover: {
      borderColor: '{{colors.interactiveInverse030}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    'selected:hover': {
      borderColor: '{{colors.interactiveInverse030}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    active: {
      borderColor: '{{colors.interactiveInverse030}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    selected: {
      borderColor: '{{colors.interactiveInverse030}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
    },
    disabled: {
      color: '{{colors.interactiveInverse020}}',
      iconColor: '{{colors.interactiveInverse020}}',
    },
    'focus-visible': defaultFocusVisible,
  },
} as Record<string, StylePreset>;
