import {StylePreset} from '../theme/types';

export default {
  tab: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
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
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    'selected:hover': {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
    focus: {
      outlineOffset: '-1px',
      safariOutlineOffset: '-5px',
    },
  },
  tabsBarTrack: {
    base: {
      backgroundColor: '{{colors.interface040}}',
    },
  },
  tabsBarIndicator: {
    base: {
      backgroundColor: '{{colors.interactivePrimary030}}',
    },
  },
} as Record<string, StylePreset>;
