import {StylePreset} from './types';

export const stylePresets: Record<string, StylePreset> = {};

//
// Text & Icon Colors
//

stylePresets.inkBrand010 = {
  base: {
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
  },
};
stylePresets.uppercaseInkBrand010 = {
  base: {
    ...stylePresets.inkBrand010.base,
    textTransform: 'uppercase',
  },
};
stylePresets.inkContrast = {
  base: {
    color: '{{colors.inkContrast}}',
    iconColor: '{{colors.inkContrast}}',
  },
};
stylePresets.uppercaseInkContrast = {
  base: {
    ...stylePresets.inkContrast.base,
    textTransform: 'uppercase',
  },
};
stylePresets.inkBase = {
  base: {
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
};
stylePresets.uppercaseInkBase = {
  base: {
    ...stylePresets.inkBase.base,
    textTransform: 'uppercase',
  },
};
stylePresets.inkSubtle = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};
stylePresets.uppercaseInkSubtle = {
  base: {
    ...stylePresets.inkSubtle.base,
    textTransform: 'uppercase',
  },
};
stylePresets.inkNonEssential = {
  base: {
    color: '{{colors.inkNonEssential}}',
    iconColor: '{{colors.inkNonEssential}}',
  },
};
stylePresets.uppercaseInkNonEssential = {
  base: {
    ...stylePresets.inkNonEssential.base,
    textTransform: 'uppercase',
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

stylePresets.buttonDefault = stylePresets.buttonSolidPrimary;

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
stylePresets.iconButtonMinimalPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBrand010}}',
    iconColor: '{{colors.inkBrand010}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
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
    backgroundColor: '{{colors.transparent}}',
  },
  loading: {
    backgroundColor: '{{colors.interactivePrimary020}}',
    color: '{{colors.inkBrand010}}',
  },
};
stylePresets.iconButtonMinimalSecondary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
    borderRadius: '{{borders.borderRadiusCircle}}',
  },
  hover: {
    backgroundColor: '{{colors.interactiveSecondary010}}',
  },
  active: {
    backgroundColor: '{{colors.interactiveSecondary020}}',
  },
  selected: {
    backgroundColor: '{{colors.transparent}}',
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

stylePresets.iconButtonDefault = stylePresets.iconButtonSolidPrimary;

//
// Icons
//
stylePresets.iconDefault = {
  base: {
    iconColor: '{{colors.inkBase}}',
  },
};

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

stylePresets.buttonSocialTwitter = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialFacebook = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialWhatsapp = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialEmail = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialLink = stylePresets.iconButtonMinimalSecondary;
stylePresets.buttonSocialShare = stylePresets.iconButtonMinimalSecondary;

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
  selected: {
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
    backgroundColor: '{{colors.interactiveSecondary030}}',
    borderStyle: 'none',
  },
};
stylePresets.tagDefault = stylePresets.tagPrimary;

// Tab

stylePresets.tab = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
  },
  selected: {
    iconColor: '{{colors.inkBase}}',
    color: '{{colors.inkBrand010}}',
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

stylePresets.tabGroup = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interface050}}',
    borderWidth: '{{borders.borderWidth020}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
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

stylePresets.flagSolid = {
  base: {
    backgroundColor: '{{colors.interfaceInformative010}}',
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
  },
};
stylePresets.flagSolidLive = {
  base: {
    ...stylePresets.flagSolid.base,
    backgroundColor: '{{colors.interactiveNegative030}}',
  },
};
stylePresets.flagMinimal = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    color: '{{colors.inkInformative}}',
    iconColor: '{{colors.inkInformative}}',
  },
};
stylePresets.flagDefault = stylePresets.flagSolid;

//
// Link
//

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
  },
  visited: {
    color: '{{colors.interactivePrimary030}}',
    iconColor: '{{colors.interactivePrimary030}}',
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
stylePresets.volumeControlButtons = stylePresets.iconButtonMinimalPrimary;

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

stylePresets.audioPlayerVolumeControlThumb = stylePresets.audioPlayerThumb;
stylePresets.audioPlayerPopoutButton = stylePresets.iconButtonMinimalPrimary;
stylePresets.audioPlayerControlButton = stylePresets.iconButtonMinimalPrimary;
stylePresets.audioPlayerPlayPauseButton = stylePresets.iconButtonSolidPrimary;

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
    borderRadius: '{{borders.borderRadiusDefault}}',
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

// // Card

stylePresets.cardContainer = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  active: {
    backgroundColor: '{{colors.interface020}}',
  },
};

stylePresets.cardContainerMedia = stylePresets.imageSharp;

stylePresets.cardContainerTeaserAndActions = {
  base: {
    backgroundColor: '{{colors.transparent}}',
  },
};

stylePresets.cardContainerTeaser = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
    color: '{{colors.inkBase}}',
  },
  hover: {
    backgroundColor: '{{colors.interactivePrimary020}}',
  },
};

stylePresets.cardContainerActions = {
  base: {
    backgroundColor: '{{colors.interface010}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
};

//
// TitleBar
//
stylePresets.titleBar = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth:
      '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
  },
};

stylePresets.titleBarButton = stylePresets.buttonSolidPrimary;
stylePresets.titleBarLink = stylePresets.linkStandalone;

//
// Divider
//

stylePresets.dividerHorizontal = {
  base: {
    borderStyle: 'solid',
    borderColor: '{{colors.interface040}}',
    borderWidth: '{{borders.borderWidthDefault}}',
  },
};
stylePresets.dividerVertical = stylePresets.dividerHorizontal;
