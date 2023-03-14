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
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '-{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
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
  tabPanel: {
    focus: {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '-3px',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
} as Record<string, StylePreset>;
