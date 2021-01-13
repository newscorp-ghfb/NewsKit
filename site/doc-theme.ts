import {createTheme, newskitDarkTheme} from 'newskit';
import {FontConfig} from 'newskit/theme/foundations/fonts';

const colors = {
  inkBrand020: '#E0E7FF',
  interfaceBrand010: '#577FFB',
  inkBrand010: '#4B6ADF',
  inkLogo: '#192C48',
  pink: '#FFC0CB',
};

const colorsDarkTheme = {
  ...colors,
  inkLogo: '#FFFFFF',
};

const stylePresets = {
  buttonLightDarkToggle: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
  },
  linkSectionNavigation: {
    base: {
      color: '{{colors.interactivePrimary030}}',
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
    },
  },
  linkLogo: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  positiveMediaContainer: {
    base: {
      borderStyle: 'none none solid none',
      color: '{{colors.interactivePositive030}}',
      borderWidth: '{{sizing.sizing010}}',
    },
  },
  negativeMediaContainer: {
    base: {
      borderStyle: 'none none solid none',
      color: '{{colors.interactiveNegative030}}',
      borderWidth: '{{sizing.sizing010}}',
    },
  },
  tableHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface060}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
      color: '{{colors.inkContrast}}',
    },
  },

  tableRow: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface050}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
      color: '{{colors.inkBase}}',
    },
  },
  closeIcon: {
    base: {
      iconColor: '{{colors.interactiveSecondary040}}',
    },
  },
  arrowIcon: {
    base: {
      iconColor: '{{colors.inkBase}}',
    },
  },
  swatchBadge: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      color: '{{colors.inkSubtle}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      iconColor: '{{colors.red070}}',
    },
  },
  titleBar: {
    base: {
      backgroundColor: '{{colors.transparent}}',
    },
  },
  linkNoUnderline: {
    base: {
      textDecoration: 'none',
    },
    hover: {
      textDecoration: 'none',
    },
  },
  sidebarNavItem: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
    },
  },
  sidebarHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
  },
  contentsNavItem: {
    base: {
      color: '{{colors.inkSubtle}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
      borderWidth: '{{borders.borderWidth020}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.inkBase}}',
    },
    active: {
      color: '{{colors.inkBase}}',
    },
    selected: {
      color: '{{colors.inkContrast}}',
      borderColor: '{{colors.interactivePrimary030}}',
    },
  },
  usageIconPositive: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfacePositive010}}',
      backgroundColor: '{{colors.interfacePositive020}}',
      iconColor: '{{colors.inkPositive}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  usageIconNegative: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNegative010}}',
      backgroundColor: '{{colors.interfaceNegative020}}',
      iconColor: '{{colors.inkNegative}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  contactUs: {
    base: {
      backgroundColor: '{{colors.interfaceBrand010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  infoNotice: {
    base: {
      backgroundColor: '{{colors.interfaceInformative020}}',
      iconColor: '{{colors.inkInformative}}',
      color: '{{colors.inkInformative}}',
      borderColor: '{{colors.interfaceInformative010}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidPositive: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfacePositive010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNegative: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceNegative010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNotice: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceNotice010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidInformative: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceInformative010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNeutral: {
    base: {
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
      backgroundColor: '{{colors.interface040}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagBrand: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceBrand010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },

  // Card
  cardContainerMedia: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  cardContainerMediaInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded040}}',
    },
  },
  testCard: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded040}}',
      borderColor: '{{colors.inkBrand020}}',
      backgroundColor: '{{colors.pink}}',
    },
  },
};

const typographyPresets = {
  // Editorial Heading
  editorialHeadline010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize040}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize050}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize070}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline040: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize080}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline050: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize090}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline060: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize100}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline070: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize110}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialHeadline080: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize130}}',
    fontWeight: '{{fonts.fontWeight050}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },

  editorialSubheading010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize050}}',
    lineHeight: '{{fonts.fontLineHeight030}}',
    fontWeight: '{{fonts.fontWeight020}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialSubheading020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize070}}',
    lineHeight: '{{fonts.fontLineHeight030}}',
    fontWeight: '{{fonts.fontWeight020}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialSubheading030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize080}}',
    lineHeight: '{{fonts.fontLineHeight030}}',
    fontWeight: '{{fonts.fontWeight020}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialSubheading040: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize090}}',
    lineHeight: '{{fonts.fontLineHeight030}}',
    fontWeight: '{{fonts.fontWeight020}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  editorialSubheading050: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
    fontSize: '{{fonts.fontSize100}}',
    lineHeight: '{{fonts.fontLineHeight030}}',
    fontWeight: '{{fonts.fontWeight020}}',
    letterSpacing: '{{fonts.fontLetterSpacing030}}',
  },
  // Editorial Paragraph
  editorialParagraph010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  editorialParagraph020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  editorialParagraph030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  // Editorial Quote
  editorialQuote010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  editorialQuote020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  // Editorial Caption
  editorialCaption010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },

  // ** UTILITY **

  // Utility Heading
  utilityHeading010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityHeading020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityHeading030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityHeading040: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityHeading050: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },

  // Utility Subheading
  utilitySubheading010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilitySubheading020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilitySubheading030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilitySubheading040: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilitySubheading050: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  // Utility Body
  utilityBody010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityBody020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityBody030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  // Utility Label
  utilityLabel010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityLabel020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityLabel030: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  // Meta
  utilityMeta010: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
  utilityMeta020: {
    fontFamily: '{{fonts.fontFamily020.fontFamily}}',
  },
};

const fonts = {
  fontFamily020: {
    fontFamily: '"Poppins", sans',
    cropConfig: {
      top: 4,
      bottom: 12,
    },
    cropAdjustments: {
      '{{fonts.fontSize010}}': {
        top: 1,
        bottom: -0.5,
      },
      '{{fonts.fontSize020}}': {
        top: 1.2,
      },
      '{{fonts.fontSize070}}': {
        top: 1,
        bottom: 1,
      },
    },
  } as FontConfig,
};

const componentDefaults = {
  headlineH1: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      lg: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH2: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH3: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH4: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH5: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH6: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  contentsNavItem: {
    stylePreset: 'contentsNavItem',
    typographyPreset: 'utilityButton020',
  },
};

export const newsKitLight = createTheme({
  name: 'newskit-light',
  overrides: {
    colors,
    stylePresets,
    typographyPresets,
    componentDefaults,
    fonts,
  },
});

export const newsKitDark = createTheme({
  name: 'newskit-dark',
  baseTheme: newskitDarkTheme,
  overrides: {
    colors: colorsDarkTheme,
    stylePresets,
    typographyPresets,
    componentDefaults,
    fonts,
  },
});
