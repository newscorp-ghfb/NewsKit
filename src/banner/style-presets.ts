import {StylePreset} from '../theme/types';

export default {
  bannerInformative: {
    base: {
      backgroundColor: '{{colors.interfaceInformative010}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  bannerNotice: {
    base: {
      backgroundColor: '{{colors.interfaceNotice010}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
  bannerNegative: {
    base: {
      backgroundColor: '{{colors.interfaceNegative010}}',
      iconColor: '{{colors.inkInverse}}',
    },
  },
} as Record<string, StylePreset>;
