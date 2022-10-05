import {StylePreset} from '../theme/types';

export default {
  welcomeBanner: {
    base: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./welcome-banner.svg)',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
} as Record<string, StylePreset>;
