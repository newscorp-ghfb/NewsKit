import {StylePreset} from '../theme/types';

export default {
  textInput: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
      borderWidth: '{{borders.borderWidthDefault}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBase}}',
      textOverflow: 'ellipsis',
      placeholderColor: '{{colors.inkSubtle}}',
    },
    focus: {
      backgroundColor: '{{colors.interface020}}',
      borderColor: '{{colors.interfaceBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interface020}}',
    },
    disabled: {
      borderColor: '{{colors.interactiveDisabled010}}',
      color: '{{colors.inkNonEssential}}',
    },
    invalid: {
      caretColor: '{{colors.inkNegative}}',
      borderColor: '{{colors.interactiveNegative030}}',
    },
    valid: {
      caretColor: '{{colors.inkPositive}}',
      borderColor: '{{colors.interactivePositive030}}',
    },
  },

  textInputLabel: {
    base: {
      color: '{{colors.inkContrast}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
  },

  textInputAssistiveText: {
    base: {
      color: '{{colors.inkSubtle}}',
    },
    disabled: {
      color: '{{colors.inkNonEssential}}',
    },
    invalid: {
      color: '{{colors.inkNegative}}',
    },
    valid: {
      color: '{{colors.inkPositive}}',
    },
  },
} as Record<string, StylePreset>;
