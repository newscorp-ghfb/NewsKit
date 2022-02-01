import {StylePreset} from '../theme/types';

export default {
  inlineMessageInformative: {
    base: {
      backgroundColor: '{{colors.interfaceInformative020}}',
      borderColor: '{{colors.interfaceInformative010}}',
      borderStyle: 'solid',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth030}}',
      iconColor: '{{colors.inkInformative}}',
      color: '{{colors.inkInverse}}',
    },
  },

  inlineMessageNegative: {
    base: {
      backgroundColor: '{{colors.interfaceNegative020}}',
      borderColor: '{{colors.interfaceNegative010}}',
      borderStyle: 'solid',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth030}}',
      iconColor: '{{colors.inkNegative}}',
      color: '{{colors.inkBase}}',
    },
  },
} as Record<string, StylePreset>;
