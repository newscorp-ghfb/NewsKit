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
      color: '{{colors.interactivePrimary030}}',
      backgroundColor: '{{colors.interactivePrimary010}}',
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
      color: '{{colors.inkSubtle}}',
      backgroundColor: '{{colors.white}}',
    },
  },
  flagSolidPatch: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',

      borderColor: '{{colors.interfaceNeutral020}}',
      color: '{{colors.inkNonEssential}}',
      backgroundColor: '{{colors.white}}',
    },
  },
  flagSolidMajor: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',

      borderColor: '{{colors.neutral080}}',
      color: '{{colors.inkContrast}}',
      backgroundColor: '{{colors.interfaceNotice020}}',
    },
  },
  flagSolidBreakingChange: {
    base: {
      borderRadius: '{{borders.borderRadiusPill}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderStyle: 'solid',

      borderColor: '{{colors.inkNegative}}',
      color: '{{colors.inkNegative}}',
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
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  contributeCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
  contributeCardMedia: {
    base: {
      backgroundImage: 'url(static/landing/feature-card-contribute.svg)',
    },
  },
  contributeCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
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
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
    loading: {
      backgroundColor: '{{colors.interactiveInverse020}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
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
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  roadmapCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  },
  roadmapCardButton: {
    base: {
      backgroundColor: '{{colors.interactiveInverse030}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.interfaceBrand030}}',
      iconColor: '{{colors.interfaceBrand030}}',
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
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  patternsCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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
    },
  },
  principleCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand050}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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

  /*   whatsnewCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
    },
  }, */
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
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
  },

  whatsnewCardMedia: {
    base: {
      backgroundImage: 'url(static/landing/feature-card-whatsnew.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
    },
  },
  needHelpCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  needHelpCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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

  foundationFeatureCardContainerInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded030}}',
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  foundationFeatureCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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
      backgroundColor: '{{colors.interface020}}',
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
      iconColor: '{{colors.inkWhiteContrast}}',
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
  dividerInverse: {
    base: {
      borderColor: '{{colors.whiteTint050}}',
    },
  },
  toastText: {
    base: {
      color: '{{colors.white}}',
    },
  },
  toastIcon: {
    base: {
      iconColor: '{{colors.white}}',
    },
  },
  toastButton: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.white}}',
      iconColor: '{{colors.neutral100}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInverse010}}',
    },
  },
  bannerIcon: {
    base: {
      iconColor: '{{colors.white}}',
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
    },
    hover: {
      boxShadow: '{{shadows.shadow040}}',
    },
  },
  patternFeatureCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand030}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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
};
