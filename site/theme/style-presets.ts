import {defaultFocusVisible} from '../../src/utils/default-focus-visible';

export const stylePresets = {
  buttonOutlinedSecondary: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveSecondary030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded050}}',
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
    },
  },
  buttonLightDarkToggle: {
    base: {
      backgroundColor: '{{colors.interactiveSecondary010}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveSecondary020}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
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

  linkTopNavigation: {
    base: {
      color: '{{colors.inkSubtle}}',
      textDecoration: 'none',
      borderColor: '{{colors.transparent}}',
      borderWidth: '4px',
      borderStyle: 'solid',
    },
    hover: {
      color: '{{colors.inkSubtle}}',
      textDecoration: 'none',
    },
    selected: {
      borderColor:
        '{{colors.transparent}} {{colors.transparent}} {{colors.interactivePrimary030}} {{colors.transparent}}',
      color: '{{colors.interactivePrimary030}}',
      textDecoration: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  sideBarNavigation: {
    base: {
      textDecoration: 'none',
      borderColor: '{{colors.transparent}}',
      borderWidth: '4px',
      borderStyle: 'solid',
      color: '{{colors.inkSubtle}}', // TODO write color
    },
    hover: {
      color: '{{colors.interactivePrimary040}}',
      backgroundColor: '{{colors.interactivePrimary020}}',
    },
    active: {
      color: '{{colors.interactivePrimary050}}',
    },
    selected: {
      borderColor:
        '{{colors.transparent}} {{colors.transparent}} {{colors.transparent}} {{colors.interactivePrimary030}} ',
      color: '{{colors.interactivePrimary030}}',
      textDecoration: 'none',
    },
  },
  linkStandaloneInversePersistent: {
    base: {
      color: '{{colors.inkLight010}}',
      iconColor: '{{colors.inkLight010}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.inkLight010}}',
      iconColor: '{{colors.inkLight010}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.inkLight010}}',
      iconColor: '{{colors.inkLight010}}',
      textDecoration: 'underline',
    },
    'focus-visible': defaultFocusVisible,
  },
  tableHeader: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interface050}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}',
      color: '{{colors.inkContrast}}',
    },
  },
  tableRow: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
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
  nullDotIcon: {
    base: {
      iconColor: '{{colors.interface040}}',
    },
  },
  swatchBadge: {
    base: {
      iconColor: '{{colors.interface060}}',
    },
  },
  swatchBadgeInTable: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      iconColor: '{{colors.inkContrast}}',
    },
  },
  tokenFlag: {
    base: {
      backgroundColor: '{{colors.interface020}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      color: '{{colors.inkBase}}',
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
      color: '{{colors.inkSubtle}}',
    },
    hover: {
      color: '{{colors.interactivePrimary030}}',
    },

    selected: {
      color: '{{colors.interactivePrimary030}}',
    },
  },
  sidebarHeader: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkContrast}}',
    },
  },

  headerNavItem: {
    base: {
      color: '{{colors.inkSubtle}}',
    },
    selected: {
      color: '{{colors.inkContrast}}',
    },
  },
  contentsNavItem: {
    base: {
      color: '{{colors.inkSubtle}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface030}}',
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
  componentPageTabs: {
    base: {
      borderRadius: 'borderRadiusSharp',
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkSubtle}}',
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
  checkIconContainer: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfacePositive010}}',
      backgroundColor: '{{colors.interfacePositive020}}',
      iconColor: '{{colors.inkPositive}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  crossIconContainer: {
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
  menuDivider: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interface050}}',
      borderWidth: '{{borders.borderWidth010}}',
    },
  },
  flagSolidPositive: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNegative: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNotice: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidInformative: {
    base: {
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
  },
  flagSolidNeutral: {
    base: {
      color: '{{colors.inkBase}}',
      iconColor: '{{colors.inkBase}}',
      backgroundColor: '{{colors.interface020}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      whiteSpace: 'nowrap',
    },
  },
  flagSolidPrimary: {
    base: {
      color: '{{colors.inkSubtle}}',
      backgroundColor: '{{colors.interface020}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    hover: {
      backgroundColor: '{{colors.interface020}}',
    },
  },
  flagBrand: {
    base: {
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      whiteSpace: 'nowrap',
    },
  },
  flagSolidMinor: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNeutral020}}',
      color: '{{colors.inkContrast}}',
      backgroundColor: '{{colors.interface020}}',
    },
  },
  flagSolidPatch: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNeutral020}}',
      color: '{{colors.inkContrast}}',
      backgroundColor: '{{colors.interface030}}',
    },
  },
  flagSolidMajor: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNeutral010}}',
      color: '{{colors.inkContrast}}',
      backgroundColor: '{{colors.interface010}}',
    },
  },
  flagSolidBreakingChange: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNegative010}}',
      color: '{{colors.inkContrast}}',
      backgroundColor: '{{colors.interfaceNegative020}}',
    },
  },

  // Divider

  dividerPositive: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfacePositive010}}',
      borderWidth: '{{borders.borderWidth030}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
  },

  dividerNegative: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interfaceNegative010}}',
      borderWidth: '{{borders.borderWidth030}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
  },

  // Override these here for now - will move to NewsKit Light in another ticket
  cardContainer: {
    base: {
      borderRadius: (false as unknown) as string,
    },
  },
  cardMediaNonInteractive: {
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

  baseCardNonInteractive: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
  },
  baseCardInteractive: {
    base: {
      borderStyle: 'solid',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderColor: '{{colors.interface040}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
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

  imageDefault: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },

  contributeCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  contributeCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  contributeCardMedia: {
    base: {
      backgroundSize: 'cover',
      backgroundImage: 'url(static/landing/feature-card-contribute.svg)',
      backgroundPosition: 'center',
    },
  },
  contributeCardButton: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
    },
    hover: {
      textDecoration: 'underline',
    },
  },

  linkFooter: {
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
      textDecoration: 'none',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  roadmapCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  roadmapCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  roadmapCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  roadmapCardMedia: {
    base: {
      backgroundImage: 'url(static/landing/feature-card-roadmap.svg)',
    },
  },

  patternsCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  patternsCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  patternsCardMedia: {
    base: {
      backgroundImage: 'url(static/feature-card-patterns-16-9.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
    },
  },
  patternsCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },

  principleCard: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  principleCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },

  featureCard: {
    base: {
      backgroundColor: '{{colors.interfaceBrand040}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
  featureCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand040}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },

  whatsnewCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },

  whatsnewCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand030}}',
      iconColor: '{{colors.inkBrand030}}',
    },
  },

  whatsnewCardMedia: {
    base: {
      backgroundImage: 'url(static/landing/feature-card-whatsnew.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
    },
  },
  worldDesignSystemsWeekCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand040}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  worldDesignSystemsWeekCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand040}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  worldDesignSystemsWeekCardButton: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  worldDesignSystemsWeekCardMedia: {
    base: {
      backgroundImage: 'url(static/landing/feature-card-banner.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  },

  needHelpCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  needHelpCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  needHelpCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  needHelpCardMedia: {
    base: {
      backgroundImage: 'url(static/card-feature-need-help.svg)',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
    },
  },

  latestReleaseCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  latestReleaseCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkContrast}}',
    },
  },
  latestReleaseCardButton: {
    base: {
      backgroundColor: '{{colors.interactivePrimary010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactivePrimary050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactivePrimary020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  latestReleaseCardMedia: {
    base: {
      backgroundImage: 'url(static/feature-card-release.svg)',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
    },
  },

  foundationFeatureCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  foundationFeatureCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  foundationFeatureCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  foundationFeatureCardMedia: {
    base: {
      backgroundImage: 'url(static/feature-card-foundations.svg)',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom left',
    },
  },

  buttonSolidInverse010: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  tab: {
    base: {
      color: '{{colors.inkSubtle}}',
      borderRadius: 'borderRadiusSharp',
    },
    hover: {
      color: '{{colors.inkBase}}',
      backgroundColor: '{{colors.transparent}}',
    },
    active: {
      color: '{{colors.inkBase}}',
      backgroundColor: '{{colors.transparent}}',
    },
    selected: {
      color: '{{colors.inkContrast}}',
      borderColor: '{{colors.interactivePrimary030}}',
    },
    'selected:hover': {
      color: '{{colors.inkContrast}}',
      borderColor: '{{colors.interactivePrimary030}}',
    },
  },
  blockRoundedMedium: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded030}}',
      // TODO: remove overflow from here
      overflow: 'hidden',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any,
  },
  sidebar: {
    base: {
      backgroundColor: '{{colors.interface010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
      borderWidth:
        '{{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}} {{borders.borderWidth000}}',
    },
  },
  inkWhiteContrast: {
    base: {
      color: '{{colors.white}}',
    },
  },
  buttonMinimalInverseDocs: {
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
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  buttonOutlinedInverseDocs: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveInverse030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.interactiveInverse030}}',
      iconColor: '{{colors.red100}}',
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
    'focus-visible': {
      outlineColor: '{{outlines.outlineColorDefault}}',
      outlineStyle: '{{outlines.outlineStyleDefault}}',
      outlineWidth: '{{outlines.outlineWidthDefault}}',
      outlineOffset: '{{outlines.outlineOffsetDefault}}',
      safariOutlineStyle: '{{outlines.safariOutlineStyleDefault}}',
    },
  },
  toastButton: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.neutral100}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
    },
  },
  stepFlag: {
    base: {
      backgroundColor: '{{colors.blue060}}',
      borderRadius: '{{borders.borderRadiusRounded050}}',
      color: '{{colors.white}}',
    },
  },
  timerFlag: {
    base: {
      backgroundColor: '{{colors.neutral030}}',
      borderRadius: '{{borders.borderRadiusRounded050}}',
      color: '{{colors.neutral080}}',
      iconColor: '{{colors.neutral100}}',
    },
  },
  patternFeatureCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      color: '{{colors.inkWhiteContrast}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  patternFeatureCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkWhiteContrast}}',
    },
  },
  patternFeatureCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkWhiteContrast}}',
      iconColor: '{{colors.inkWhiteContrast}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    disabled: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand010}}',
      iconColor: '{{colors.inkBrand010}}',
    },
  },
  patternFeatureCardMedia: {
    base: {
      backgroundImage: 'url(static/feature-card-patterns-16-9.svg)',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom left',
    },
  },
  gitHubMarkDownText: {
    base: {
      color: '{{colors.inkBase}}',
    },
  },
  keepInTouchLink: {
    base: {
      color: '{{colors.interactiveInput040}}',
      iconColor: '{{colors.interactiveInput040}}',
      textDecoration: 'none',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  homepageCard: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      color: '{{colors.inkBase}}',
    },
  },
  exploreCardLink: {
    base: {
      textDecoration: 'none',
      color: '{{colors.inkContrast}}',
      iconColor: '{{colors.inkContrast}}',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  whatsNewCardLink: {
    base: {
      textDecoration: 'none',
      color: '{{colors.interactivePrimary030}}',
      iconColor: '{{colors.interactivePrimary030}}',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  whatsNewHomeFlag: {
    base: {
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkInverse}}',
      backgroundColor: '{{colors.inkInformative}}',
    },
  },
  componentsUtilitiesStructuredList: {
    base: {
      borderStyle: 'solid',
      borderColor: '{{colors.interface040}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
  heroInteractiveSliderTrack: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      boxShadow: '{{shadows.shadow040}}',
      borderRadius: '{{borders.borderRadiusRounded050}}',
    },
  },
  heroInteractiveForm: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      boxShadow: '{{shadows.shadow040}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
  heroInteractiveFormInput: {
    base: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput020}}',
      borderStyle: 'solid',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      color: '{{colors.inkBase}}',
    },
  },
  heroInteractiveSelectionList: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
      boxShadow: '{{shadows.shadow050}}',
    },
  },
  heroInteractiveSelectButton: {
    base: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveInput020}}',
      borderWidth: '{{borders.borderWidthDefault}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBase}}',
    },
  },
  heroInteractiveSelectPanel: {
    base: {
      backgroundColor: '{{colors.inkInverse}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      boxShadow: '{{shadows.shadow050}}',
    },
  },
  searchTag: {
    base: {
      color: '{{colors.inkSubtle}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderColor: '{{colors.inkSubtle}}',
      borderStyle: 'solid',
      borderRadius: '{{borders.borderRadiusRounded010}}',
    },
  },
};
