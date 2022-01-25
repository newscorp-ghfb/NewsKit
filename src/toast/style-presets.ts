import {StylePreset} from '../theme/types';

export default {
  toastNeutral: {
    base: {
      backgroundColor: '{{colors.interfaceNeutral010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  toastInformative: {
    base: {
      backgroundColor: '{{colors.interfaceInformative010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  toastNotice: {
    base: {
      backgroundColor: '{{colors.interfaceNotice010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  toastPositive: {
    base: {
      backgroundColor: '{{colors.interfacePositive010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  toastNegative: {
    base: {
      backgroundColor: '{{colors.interfaceNegative010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
} as Record<string, StylePreset>;
