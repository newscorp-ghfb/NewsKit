import {StylePreset} from '../theme/types';

export default {
  selectPanel: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      boxShadow: '{{shadows.shadow050}}',
    },
  },
  selectOptionItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkBase}}',
      textOverflow: 'ellipsis',
      borderRadius: '{{borders.borderRadiusSharp}}',
      borderStyle: 'solid',
      borderWidth: '{{borders.borderWidth010}}',
      borderColor: '{{colors.transparent}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput010}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput040}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
    selected: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'selected:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      color: '{{colors.inkContrast}}',
    },
    'selected:focus': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput040}}',
    },
    'selected:active': {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'selected:focus:active': {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'selected:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      color: '{{colors.inkContrast}}',
    },
  },
  selectOptionItemIcon: {
    selected: {
      iconColor: '{{colors.interactiveInput040}}',
    },
    'selected:hover': {
      iconColor: '{{colors.interactiveInput040}}',
    },
    'selected:focus': {
      iconColor: '{{colors.interactiveInput040}}',
    },
    'selected:active': {
      iconColor: '{{colors.interactiveInput040}}',
    },
  },
} as Record<string, StylePreset>;
