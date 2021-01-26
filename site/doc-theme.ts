import {createTheme, newskitDarkTheme} from 'newskit';
import {FontConfig} from 'newskit/theme/foundations/fonts';

const palettes = {
  // blue
  blue010: '#E0E7FF',
  blue020: '#AEBFFF',
  blue030: '#87A4FC',
  blue040: '#577FFB',
  blue050: '#446BE4',
  blue060: '#3358CC',
  blue070: '#2B4AAB',
  blue080: '#213A82',
  blue090: '#213A5F',
  blue100: '#192C48',
  // teal
  teal010: '#D0EEF1',
  teal020: '#A8E0E6',
  teal030: '#81D2DA',
  teal040: '#65BBC4',
  teal050: '#41A0AA',
  teal060: '#2C8C96',
  teal070: '#20676F',
  teal080: '#0C4E55',
  teal090: '#093E43',
  teal100: '#083136',
  // red
  red010: '#FFE8E5',
  red020: '#FFCDC7',
  red030: '#FFA99E',
  red040: '#F88B7C',
  red050: '#ED6B5A',
  red060: '#DA5F4E',
  red070: '#D23F2D',
  red080: '#9F3325',
  red090: '#822D21',
  red100: '#56211A',
  // green
  green010: '#e6faeb',
  green020: '#b8efc8',
  green030: '#8ee1a6',
  green040: '#67cf86',
  green050: '#42ba67',
  green060: '#23a248',
  green070: '#148f39',
  green080: '#0a782a',
  green090: '#005d1c',
  green100: '#003e11',
  // amber
  amber010: '#FFEECF',
  amber020: '#FFDB9D',
  amber030: '#FFC058',
  amber040: '#FFAD2C',
  amber050: '#FF9900',
  amber060: '#FF8F00',
  amber070: '#FF8200',
  amber080: '#ff7200',
  amber090: '#FF6000',
  amber100: '#FF4B00',
  // neutral
  neutral010: '#FAFAFA',
  neutral020: '#F4F4F4',
  neutral030: '#E4E4E4',
  neutral040: '#CCCCCC',
  neutral050: '#C0C0C0',
  neutral060: '#8F8F8F',
  neutral070: '#808080',
  neutral080: '#65665F',
  neutral090: '#2C2E30',
  neutral100: '#1D1D1B',
  // purple
  purple010: '#B2C3D5',
  purple020: '#93A1C3',
  purple030: '#757CB1',
  purple040: '#5D589F',
  purple050: '#503B8C',
  purple060: '#471E79',
  purple070: '#50196B',
  purple080: '#54145D',
  purple090: '#4F1049',
  purple100: '#400C30',
  // social
  socialTwitter: '#1da1f2',
  socialFacebook: '#1877f2',
  socialInstagram: '#c32aa3',
  socialYoutube: '#ff0000',
  socialWhatsapp: '#25d366',
  socialReddit: '#ff4500',
  socialGithub: '#000000',
  // whiteTint
  whiteTint010: 'RGB(255, 255, 255, 0.1)',
  whiteTint020: 'RGB(255, 255, 255, 0.2)',
  whiteTint030: 'RGB(255, 255, 255, 0.3)',
  whiteTint040: 'RGB(255, 255, 255, 0.4)',
  whiteTint050: 'RGB(255, 255, 255, 0.5)',
  whiteTint060: 'RGB(255, 255, 255, 0.6)',
  whiteTint070: 'RGB(255, 255, 255, 0.7)',
  whiteTint080: 'RGB(255, 255, 255, 0.8)',
  whiteTint090: 'RGB(255, 255, 255, 0.9)',
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
};

const colors = {
  ...palettes,
  // old colors not sure about them
  // inkBrand010: '#4B6ADF',
  // inkBrand020: '#E0E7FF',
  // interfaceBrand010: '#577FFB',
  inkLogo: '#192C48',
  // end of old colors
  inkBase: '{{colors.neutral090}}',
  inkContrast: '{{colors.neutral100}}',
  inkSubtle: '{{colors.neutral080}}',
  inkNonEssential: '{{colors.neutral050}}',
  inkInverse: '{{colors.white}}',
  // remove these but check that nothing is using them at the moment
  inkHeadingLink: '{{colors.inkContrast}}',
  inkHeadingLinkHover: '#2F75D7',
  inkHeadingLinkActive: '#2F75D7',
  inkHeadingLinkVisited: '{{colors.inkContrast}}',

  inkNegative: '{{colors.red070}}',
  inkPositive: '{{colors.green080}}',
  inkNotice: '{{colors.amber080}}',
  inkInformative: '{{colors.teal070}}',
  inkBrand010: '{{colors.blue050}}',
  inkBrand020: '{{colors.blue080}}',

  interfaceBackground: '{{colors.white}}',
  interface010: '{{colors.white}}',
  interface020: '{{colors.neutral010}}',
  interface030: '{{colors.neutral020}}',
  interface040: '{{colors.neutral030}}',
  interface050: '{{colors.neutral040}}',
  interface060: '{{colors.neutral100}}',
  interfaceBrand010: '{{colors.blue020}}',
  interfaceBrand020: '{{colors.blue030}}',
  interfaceBrand030: '{{colors.blue040}}',
  interfaceBrand040: '{{colors.blue050}}',
  interfaceBrand050: '{{colors.blue070}}',
  interfaceBrand060: '{{colors.teal050}}',
  interfaceInformative010: '{{colors.teal070}}',
  interfaceInformative020: '{{colors.teal010}}',
  interfaceNotice010: '{{colors.amber080}}',
  interfaceNotice020: '{{colors.amber010}}',
  interfaceNegative010: '{{colors.red070}}',
  interfaceNegative020: '{{colors.red010}}',
  interfacePositive010: '{{colors.green080}}',
  interfacePositive020: '{{colors.green010}}',
  interfaceSkeleton010: '{{colors.neutral020}}',
  interfaceSkeleton020: '{{colors.neutral030}}',

  // remove these but check that nothing is using them at the moment
  interfaceNeutral010: '{{colors.neutral080}}',

  interactivePrimary010: '{{colors.blue010}}',
  interactivePrimary020: '{{colors.blue020}}',
  interactivePrimary030: '{{colors.blue040}}',
  interactivePrimary040: '{{colors.blue070}}',
  interactivePrimary050: '{{colors.blue080}}',
  interactiveSecondary010: '{{colors.teal010}}',
  interactiveSecondary020: '{{colors.teal020}}',
  interactiveSecondary030: '{{colors.teal040}}',
  interactiveSecondary040: '{{colors.teal060}}',
  interactiveSecondary050: '{{colors.teal070}}',
  interactiveNegative010: '{{colors.red010}}',
  interactiveNegative020: '{{colors.red020}}',
  interactiveNegative030: '{{colors.red060}}',
  interactiveNegative040: '{{colors.red070}}',
  interactiveNegative050: '{{colors.red080}}',
  interactivePositive010: '{{colors.green010}}',
  interactivePositive020: '{{colors.green020}}',
  interactivePositive030: '{{colors.green060}}',
  interactivePositive040: '{{colors.green070}}',
  interactivePositive050: '{{colors.green080}}',
  interactiveVisited010: '{{colors.purple050}}',
  interactiveDisabled010: '{{colors.neutral030}}',
};

const colorsDarkTheme = {
  inkLogo: '#FFFFFF',
};

const stylePresets = {
  cardContainerNonInteractive010: {
    base: {
      backgroundColor: '{{colors.blue060}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },
  cardContainerNonInteractive020: {
    base: {
      backgroundColor: '{{colors.blue070}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },
  cardContainerNonInteractive030: {
    base: {
      backgroundColor: '{{colors.blue080}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },
  inkWhiteContrast: {
    base: {
      color: '{{colors.white}}',
    },
  },
  inkWhiteSubtle: {
    base: {
      color: '{{colors.whiteTint080}}',
    },
  },
  inkWhiteBase: {
    base: {
      color: '{{colors.whiteTint090}}',
    },
  },
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

  // Override these here for now - will move to NewsKit Light in another ticket
  cardContainer: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      borderRadius: (false as unknown) as string,
      color: '{{colors.inkBase}}',
    },
  },
  cardMediaNonInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    loading: {
      backgroundColor: '{{colors.interfaceSkeleton010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },
  cardContainerTeaserAndActions: {
    base: {
      backgroundColor: (false as unknown) as string,
    },
  },
  cardContainerTeaser: {
    base: {
      backgroundColor: (false as unknown) as string,
      borderRadius: (false as unknown) as string,
      color: 'inherit',
    },
  },
  cardContainerActions: {
    base: {
      backgroundColor: (false as unknown) as string,
      borderRadius: (false as unknown) as string,
    },
  },

  //
  // Website Cards
  //
  cardContainerFoundationsOverview: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderColor: '{{colors.amber100}}',
    },
  },

  cardContainerNonInteractive030: {
    base: {
      backgroundColor: '{{colors.blue080}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },

  cardContainerNonInteractive020: {
    base: {
      backgroundColor: '{{colors.blue070}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },

  cardContainerNonInteractive010: {
    base: {
      backgroundColor: '{{colors.blue060}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
  },
  cardMediaInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded040}}',
    },
  },

  //
  // Inks
  //
  inkSubtle: {
    base: {
      color: '{{colors.inkSubtle}}',
    },
  },
  inkBase: {
    base: {
      color: '{{colors.inkBase}}',
    },
  },
  inkWhiteBase: {
    base: {
      color: '{{colors.whiteTint090}}',
    },
  },
  inkWhiteSubtle: {
    base: {
      color: '{{colors.whiteTint080}}',
    },
  },
  inkWhiteContrast: {
    base: {
      color: '{{colors.white}}',
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
