import {StylePreset} from '../theme/types';

export default {
  iconTEST: {
    base: {
      iconColor: '{{colors.red050}}',
    },
    hover: {
      iconColor: '{{colors.green050}}',
    },
  },

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
  indeterminateProgressIndicatorPrimary: {
    base: {
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  indeterminateProgressIndicatorSecondary: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  indeterminateProgressIndicatorNegative: {
    base: {
      iconColor: '{{colors.inkNegative}}',
    },
  },
  indeterminateProgressIndicatorPositive: {
    base: {
      iconColor: '{{colors.inkPositive}}',
    },
  },
  indeterminateProgressIndicatorInverse: {
    base: {
      iconColor: '{{colors.inkInverse}}',
    },
  },
} as Record<string, StylePreset>;
