import {StylePreset} from '../theme/types';

export default {
  iconPositive: {
    base: {
      iconColor: '{{colors.inkPositive}}',
    },
  },
  iconNegative: {
    base: {
      iconColor: '{{colors.inkNegative}}',
    },
  },
  iconSocialTwitter: {
    base: {
      iconColor: '{{colors.socialTwitter}}',
    },
  },
  iconSocialGitHub: {
    base: {
      iconColor: '{{colors.socialGithub}}',
    },
  },
  iconSocialFacebook: {
    base: {
      iconColor: '{{colors.socialFacebook}}',
    },
  },
  iconSocialInstagram: {
    base: {
      iconColor: '{{colors.socialInstagram}}',
    },
  },
  iconSocialYoutube: {
    base: {
      iconColor: '{{colors.socialYoutube}}',
    },
  },
  iconSocialWhatsApp: {
    base: {
      iconColor: '{{colors.socialWhatsapp}}',
    },
  },
  iconSocialReddit: {
    base: {
      iconColor: '{{colors.socialReddit}}',
    },
  },

  iconDefault: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
} as Record<string, StylePreset>;
