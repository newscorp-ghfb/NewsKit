export const stylePresets = {
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
    },
    hover: {
      color: '{{colors.inkSubtle}}',
      textDecoration: 'none',
    },
    active: {
      color: '{{colors.inkContrast}}',
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
      backgroundColor: '{{colors.interface010}}',
      color: '{{colors.inkSubtle}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      iconColor: '{{colors.red070}}',
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
      color: '{{colors.inkSubtle}}',
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
    selected: {
      color: '{{colors.inkContrast}}',
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
      backgroundColor: '{{colors.interface020}}',
      borderRadius: '{{borders.borderRadiusRounded010}}',
      whiteSpace: 'nowrap',
    },
  },
  flagMinimalNeutral: {
    base: {
      __extends: '{{stylePresets.flagSolidNeutral.base}}',
      backgroundColor: '__delete',
      borderRadius: '__delete',
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
      backgroundImage: 'url(/static/landing/feature-card-contribute.svg)',
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
      color: '{{colors.inkWhite}}',
      iconColor: '{{colors.inkWhite}}',
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
      color: '{{colors.inkContrast}}',
      textDecoration: 'none',
    },
    hover: {
      color: '{{colors.inkSubtle}}',
      textDecoration: 'underline',
    },
    active: {
      color: '{{colors.inkNonEssential}}',
      textDecoration: 'none',
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
      color: '{{colors.inkWhite}}',
      iconColor: '{{colors.inkWhite}}',
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
      backgroundImage: 'url(/static/landing/feature-card-roadmap.svg)',
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
      backgroundImage: 'url(/static/feature-card-patterns-16-9.svg)',
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
      color: '{{colors.inkWhite}}',
      iconColor: '{{colors.inkWhite}}',
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

  whatsnewCardContainerNonInteractive: {
    base: {
      backgroundColor: '{{colors.interfaceBrand060}}',
      borderRadius: '{{borders.borderRadiusRounded020}}',
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
      color: '{{colors.inkWhite}}',
      iconColor: '{{colors.inkWhite}}',
    },
    active: {
      backgroundColor: '{{colors.interactiveInverse050}}',
      color: '{{colors.inkBrand020}}',
      iconColor: '{{colors.inkBrand020}}',
    },
  },

  whatsnewCardMedia: {
    base: {
      backgroundImage: 'url(/static/landing/feature-card-whatsnew.svg)',
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
      backgroundImage: 'url(/static/card-feature-need-help.svg)',
      borderRadius: '{{borders.borderRadiusRounded030}}',
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
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
      color: '{{colors.inkWhite}}',
      iconColor: '{{colors.inkWhite}}',
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
    },
  },
  imageRoundedMedium: {
    base: {
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
  inkWhite: {
    base: {
      color: '{{colors.white}}',
    },
  },
  buttonMinimalInverseDocs: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.inkInverse}}',
      iconColor: '{{colors.inkWhite}}',
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
  },
  buttonOutlinedInverseDocs: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderStyle: 'solid',
      borderColor: '{{colors.interactiveInverse030}}',
      borderWidth: '{{borders.borderWidth010}}',
      borderRadius: '{{borders.borderRadiusDefault}}',
      color: '{{colors.interactiveInverse030}}',
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
  },
};
