import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

//
// Banner
//

stylePresets.bannerInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.bannerNotice = {
  base: {
    backgroundColor: '{{colors.interfaceNotice010}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.bannerNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative010}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

//
// Button
//

stylePresets.buttonSolidPrimary = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.buttonSolidSecondary = {
  base: {
    backgroundColor: '{{colors.interactiveSecondary030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.buttonSolidNegative = {
  base: {
    backgroundColor: '{{colors.interactiveNegative030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.buttonSolidPositive = {
  base: {
    backgroundColor: '{{colors.interactivePositive030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
};
stylePresets.buttonSolidInverse = {
  base: {
    backgroundColor: '{{colors.interactiveInverse030}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.buttonOutlinedPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePrimary030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
    borderColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    borderColor: '{{colors.interactivePrimary050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveSecondary030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
    borderColor: '{{colors.interactiveSecondary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    borderColor: '{{colors.interactiveSecondary050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveNegative030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative010}}',
    borderColor: '{{colors.interactiveNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePositive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive010}}',
    borderColor: '{{colors.interactivePositive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive020}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
    borderStyle: 'none',
  },
};
stylePresets.buttonOutlinedInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveInverse030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse010}}',
    borderColor: '{{colors.interactiveInverse040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    borderColor: '{{colors.interactiveInverse050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    borderStyle: 'none',
  },
};

stylePresets.buttonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
};
stylePresets.buttonMinimalSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
};
stylePresets.buttonMinimalNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
  },
};
stylePresets.buttonMinimalPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive010}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
  },
};
stylePresets.buttonMinimalInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
  },
};
//
// Icon Button
//

stylePresets.iconButtonSolidPrimary = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.iconButtonSolidSecondary = {
  base: {
    backgroundColor: '{{colors.interactiveSecondary030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.iconButtonSolidNegative = {
  base: {
    backgroundColor: '{{colors.interactiveNegative030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.iconButtonSolidPositive = {
  base: {
    backgroundColor: '{{colors.interactivePositive030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
};
stylePresets.iconButtonSolidInverse = {
  base: {
    backgroundColor: '{{colors.interactiveInverse030}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse050}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.iconButtonOutlinedPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePrimary030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
    borderColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    borderColor: '{{colors.interactivePrimary050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveSecondary030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
    borderColor: '{{colors.interactiveSecondary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    borderColor: '{{colors.interactiveSecondary050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveNegative030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative010}}',
    borderColor: '{{colors.interactiveNegative050}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    borderColor: '{{colors.interactiveNegative030}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePositive030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive010}}',
    borderColor: '{{colors.interactivePositive040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive020}}',
    borderColor: '{{colors.interactivePositive050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
    borderStyle: 'none',
  },
};
stylePresets.iconButtonOutlinedInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveInverse030}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse010}}',
    borderColor: '{{colors.interactiveInverse040}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    borderColor: '{{colors.interactiveInverse050}}',
  },
  disabled: {
    borderColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
    borderStyle: 'none',
  },
};

stylePresets.iconButtonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
};
stylePresets.iconButtonMinimalSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
    color: '{{colors.inkInverse}}',
  },
};
stylePresets.iconButtonMinimalNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveNegative010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveNegative020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveNegative020}}',
  },
};
stylePresets.iconButtonMinimalPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePositive010}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePositive020}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePositive020}}',
  },
};
stylePresets.iconButtonMinimalInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  loading: {
    backgroundColor: '{{colors.interactiveInverse020}}',
  },
};

//
// Icons
//
stylePresets.iconSocialTwitter = {
  base: {
    iconColor: '{{colors.socialTwitter}}',
  },
};
stylePresets.iconSocialGitHub = {
  base: {
    iconColor: '{{colors.socialGithub}}',
  },
};
stylePresets.iconSocialFacebook = {
  base: {
    iconColor: '{{colors.socialFacebook}}',
  },
};
stylePresets.iconSocialInstagram = {
  base: {
    iconColor: '{{colors.socialInstagram}}',
  },
};
stylePresets.iconSocialYoutube = {
  base: {
    iconColor: '{{colors.socialYoutube}}',
  },
};
stylePresets.iconSocialWhatsApp = {
  base: {
    iconColor: '{{colors.socialWhatsapp}}',
  },
};
stylePresets.iconSocialReddit = {
  base: {
    iconColor: '{{colors.socialReddit}}',
  },
};

stylePresets.iconDefault = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};

//
// Indeterminate Progress Indicator
//

stylePresets.indeterminateProgressIndicatorPrimary = {
  base: {
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.indeterminateProgressIndicatorSecondary = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.indeterminateProgressIndicatorNegative = {
  base: {
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.indeterminateProgressIndicatorPositive = {
  base: {
    iconColor: '{{colors.inkPositive}}',
  },
};
stylePresets.indeterminateProgressIndicatorInverse = {
  base: {
    iconColor: '{{colors.inkInverse}}',
  },
};

//
// Tag
//

stylePresets.tagPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactiveSecondary030}}',
    borderWidth: '{{borders.borderWidth010}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  active: {
    borderWidth: '{{borders.borderWidth010}}',
  },
};
stylePresets.tagPrimaryInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interface010}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveInverse010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveInverse020}}',
  },
};

// Tab

stylePresets.tab = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  selected: {
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
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
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

stylePresets.tabsBarTrack = {
  base: {
    backgroundColor: '{{colors.interface040}}',
  },
};

stylePresets.tabsBarIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
  },
};

// Text Field
stylePresets.assistiveText = {
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
};
stylePresets.textField = {
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
};
stylePresets.label = {
  base: {
    color: '{{colors.inkContrast}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};

// Text Input
stylePresets.textInput = {
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
};

stylePresets.textInputLabel = {
  base: {
    color: '{{colors.inkContrast}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};

stylePresets.textInputAssistiveText = {
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
};

stylePresets.iconPositive = {
  base: {
    iconColor: '{{colors.inkPositive}}',
  },
};

stylePresets.iconNegative = {
  base: {
    iconColor: '{{colors.inkNegative}}',
  },
};

//
// Flag
//

stylePresets.flagSolidPrimary = {
  base: {
    backgroundColor: '{{colors.interfaceBrand010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidPositive = {
  base: {
    backgroundColor: '{{colors.interfacePositive010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidNotice = {
  base: {
    backgroundColor: '{{colors.interfaceNotice010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidNeutral = {
  base: {
    backgroundColor: '{{colors.interfaceNeutral010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidInverse = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
};
stylePresets.flagMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.flagMinimalPositive = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkPositive}}',
    iconColor: '{{colors.inkPositive}}',
  },
};
stylePresets.flagMinimalNegative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkNegative}}',
    iconColor: '{{colors.inkNegative}}',
  },
};
stylePresets.flagMinimalNotice = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkNotice}}',
    iconColor: '{{colors.inkNotice}}',
  },
};
stylePresets.flagMinimalInformative = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInformative}}',
    iconColor: '{{colors.inkInformative}}',
  },
};
stylePresets.flagMinimalNeutral = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.flagMinimalInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

//
// Link
//
stylePresets.linkStandalone = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.linkStandaloneInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
};
stylePresets.linkInline = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.linkInlineInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
  },
  visited: {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
};
stylePresets.linkEmail = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.linkEmailInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
};
stylePresets.linkExternal = {
  base: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
    iconColor: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.linkExternalInverse = {
  base: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'none',
  },
  hover: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.interactiveInverse030}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
};

//
// Slider
//

stylePresets.sliderTrack = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interactiveDisabled010}}',
  },
};
stylePresets.sliderIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
  disabled: {
    backgroundColor: '{{colors.interface040}}',
  },
};
stylePresets.sliderThumb = {
  base: {
    boxShadow: '{{shadows.shadow010}}',
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactivePrimary010}}',
    borderWidth: '{{borders.borderWidth010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  disabled: {
    boxShadow: 'none',
    backgroundColor: '{{colors.interface040}}',
    borderStyle: 'none',
    borderColor: 'none',
    borderWidth: 'none',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.sliderThumbLabel = {
  base: {
    color: '{{colors.inkBrand010}}',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
  },
};
stylePresets.sliderLabels = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// Volume Control
//

stylePresets.volumeControlIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.volumeControlThumb = {
  base: {
    ...stylePresets.sliderThumb.base,
  },
  hover: {
    ...stylePresets.sliderThumb.hover,
  },
  active: {
    ...stylePresets.sliderThumb.active,
  },
};
stylePresets.volumeControlTrack = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};

//
// Audio Player
//

stylePresets.audioPlayerSeekBarTrack = {
  base: {
    backgroundColor: '{{colors.interface020}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerSeekBarIndicator = {
  base: {
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerSeekBarBuffering = {
  base: {
    backgroundColor: '{{colors.interface030}}',
    borderRadius: '{{borders.borderRadiusPill}}',
  },
};
stylePresets.audioPlayerThumb = {
  base: {
    ...stylePresets.sliderThumb.base,
    backgroundColor: '{{colors.interactivePrimary030}}',
    borderColor: '{{colors.interfaceBackground}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary040}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary050}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

//
// Image
//

stylePresets.imageSharp = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedSmall = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded010}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedMedium = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded030}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageRoundedLarge = {
  base: {
    borderRadius: '{{borders.borderRadiusRounded050}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageDefault = {
  base: {
    borderRadius: '{{borders.borderRadiusDefault}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.imageCircle = {
  base: {
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  loading: {
    backgroundColor: '{{colors.interfaceSkeleton010}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

//
// TitleBar
//

stylePresets.titleBar = {
  base: {
    backgroundColor: '{{colors.transparent}}',
  },
};

//
// Divider
//

stylePresets.divider = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth: '{{borders.borderWidthDefault}}',
  },
};

stylePresets.dividerInverse = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.whiteTint050}}',
    borderWidth: '{{borders.borderWidthDefault}}',
  },
};

//
// Headline
//

stylePresets.headlineKickerInteractive = {
  base: {
    color: '{{colors.interactivePrimary030}}',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
  },
};
stylePresets.headlineHeadingInteractive = {
  base: {
    color: '{{colors.inkBase}}',
  },
  hover: {
    color: '{{colors.interactivePrimary040}}',
    textDecoration: 'underline',
  },
  active: {
    color: '{{colors.interactivePrimary050}}',
    textDecoration: 'underline',
  },
  visited: {
    color: '{{colors.interactiveVisited010}}',
  },
};

//
// Overlay
//

stylePresets.overlay = {
  base: {
    backgroundColor: '{{overlays.overlayTintBase040}}',
  },
};

//
// Overlay
//

stylePresets.scrollOverlaysHorizontal = {
  base: {
    backgroundImage: '{{overlays.overlayGradientBaseHorizontal}}',
  },
};
stylePresets.scrollOverlaysVertical = {
  base: {
    backgroundImage: '{{overlays.overlayGradientBaseVertical}}',
  },
};

//
// Drawer
//

stylePresets.drawerPanel = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
    backgroundColor: '{{colors.interface010}}',
    boxShadow: '{{shadows.shadow050}}',
  },
};

// Card

stylePresets.cardContainer = {
  base: {
    color: '{{colors.inkBase}}',
    backgroundColor: '{{colors.interface010}}',
  },
};

// Toast

stylePresets.toastNeutral = {
  base: {
    backgroundColor: '{{colors.interfaceNeutral010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.toastInformative = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

stylePresets.toastNotice = {
  base: {
    backgroundColor: '{{colors.interfaceNotice010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.toastPositive = {
  base: {
    backgroundColor: '{{colors.interfacePositive010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.toastNegative = {
  base: {
    backgroundColor: '{{colors.interfaceNegative010}}',
    borderRadius: '{{borders.borderRadiusRounded020}}',
    iconColor: '{{colors.inkInverse}}',
  },
};

// StructuredList
stylePresets.structuredListItem = {
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  disabled: {
    backgroundColor: '{{colors.transparent}}',
  },
};

// Inline Message

stylePresets.inlineMessageInformative = {
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
};

stylePresets.inlineMessageNegative = {
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
};

// Menu

stylePresets.menuItemVertical = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.transparent}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary010}}',
    borderColor: '{{colors.interactivePrimary030}}',
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
  },
  active: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    borderColor: '{{colors.interactivePrimary040}}',
    color: '{{colors.interactivePrimary040}}',
    iconColor: '{{colors.interactivePrimary040}}',
  },
  selected: {
    borderColor: '{{colors.interactivePrimary030}}',
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

stylePresets.menuItemHorizontal = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.transparent}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
  hover: {
    borderColor: '{{colors.interactivePrimary030}}',
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
  active: {
    borderColor: '{{colors.interactivePrimary030}}',
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
  selected: {
    borderColor: '{{colors.interactivePrimary030}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  disabled: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};

stylePresets.menuItemHorizontalInverse = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.transparent}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
    color: '{{colors.interactiveInverse040}}',
    iconColor: '{{colors.interactiveInverse040}}',
  },
  hover: {
    backgroundColor: '{{colors.transparent}}',
    borderColor: '{{colors.interactiveInverse040}}',
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.inkContrast}}',
  },
  active: {
    backgroundColor: '{{colors.transparent}}',
    borderColor: '{{colors.interactiveInverse050}}',
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.inkContrast}}',
  },
  selected: {
    backgroundColor: '{{colors.interactiveInverse030}}',
    borderColor: '{{colors.interactiveInverse030}}',
    color: '{{colors.interactiveInverse030}}',
    iconColor: '{{colors.inkContrast}}',
  },
  disabled: {
    color: '{{colors.interactiveInverse020}}',
    iconColor: '{{colors.interactiveInverse020}}',
  },
};

//
// Modal
//

stylePresets.modalPanel = {
  base: {
    borderRadius: '{{borders.borderRadiusSharp}}',
    backgroundColor: '{{colors.interfaceBackground}}',
    boxShadow: '{{shadows.shadow050}}',
  },
};
