export const componentDefaults = {
  headlineH2: {
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH3: {
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH4: {
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH5: {
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  headlineH6: {
    typographyPreset: {
      xs: 'editorialHeadline050',
      md: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
  },
  contentPrimary: {
    headline: {
      as: 'h2' as 'h2' | 'h3' | 'h4',
      typographyPreset: {
        xs: 'editorialHeadline050',
        md: 'editorialHeadline050',
        lg: 'editorialHeadline050',
        xl: 'editorialHeadline050',
      },
      stylePreset: 'inkContrast',
      spaceStack: {
        xs: 'space045',
        md: 'space050',
        lg: 'space050',
        xl: 'space050',
      },
    },
    description: {
      typographyPreset: {
        xs: 'editorialParagraph020',
        md: 'editorialParagraph030',
        lg: 'editorialParagraph030',
        xl: 'editorialParagraph030',
      },
      stylePreset: 'inkBase',
      spaceStack: {
        xs: 'space070',
        md: 'space080',
        lg: 'space080',
        xl: 'space080',
      },
    },
    separator: {
      spaceStack: {
        xs: 'space070',
        md: 'space100',
        lg: 'space100',
        xl: 'space100',
      },
    },
  },
  contentSecondary: {
    headline: {
      as: 'h3' as 'h2' | 'h3' | 'h4',
      typographyPreset: {
        xs: 'editorialHeadline030',
        md: 'editorialHeadline030',
        lg: 'editorialHeadline030',
        xl: 'editorialHeadline030',
      },
      stylePreset: 'inkContrast',
      spaceStack: {
        xs: 'space045',
        md: 'space050',
        lg: 'space050',
        xl: 'space050',
      },
    },
    description: {
      typographyPreset: {
        xs: 'editorialParagraph020',
        md: 'editorialParagraph030',
        lg: 'editorialParagraph030',
        xl: 'editorialParagraph030',
      },
      stylePreset: 'inkBase',
      spaceStack: {
        xs: 'space070',
        md: 'space080',
        lg: 'space080',
        xl: 'space080',
      },
    },
    separator: {
      spaceStack: {
        xs: 'space100',
        md: 'space100',
        lg: 'space100',
        xl: 'space100',
      },
    },
  },
  contentTertiary: {
    headline: {
      as: 'h4' as 'h2' | 'h3' | 'h4',
      typographyPreset: {
        xs: 'editorialHeadline020',
        md: 'editorialHeadline020',
        lg: 'editorialHeadline020',
        xl: 'editorialHeadline020',
      },
      stylePreset: 'inkContrast',
      spaceStack: {
        xs: 'space045',
        md: 'space050',
        lg: 'space050',
        xl: 'space050',
      },
    },
    description: {
      typographyPreset: {
        xs: 'editorialParagraph020',
        md: 'editorialParagraph030',
        lg: 'editorialParagraph030',
        xl: 'editorialParagraph030',
      },
      stylePreset: 'inkBase',
      spaceStack: {
        xs: 'space070',
        md: 'space080',
        lg: 'space080',
        xl: 'space080',
      },
    },
    separator: {
      spaceStack: {
        xs: 'space100',
        md: 'space100',
        lg: 'space100',
        xl: 'space100',
      },
    },
  },
  contentsNavItem: {
    stylePreset: 'contentsNavItem',
    typographyPreset: 'utilityButton020',
  },
  image: {
    stylePreset: 'imageDefault',
  },
  flag: {
    small: {
      typographyPreset: 'utilityButton010',
      stylePreset: 'flagBrand',
    },
    medium: {
      typographyPreset: 'utilityButton020',
      stylePreset: 'flagBrand',
      paddingInline: 'space020',
      paddingBlock: 'space010',
    },
    large: {
      typographyPreset: 'utilityButton030',
      stylePreset: 'flagBrand',
      paddingInline: 'space020',
      paddingBlock: 'space010',
    },
  },
  inlineMessage: {
    spaceInset: 'space040',
    width: '100%',
    content: {
      message: {
        typographyPreset: 'utilityMeta020',
      },
    },
  },
  featureCard: {
    title: {
      typographyPreset: {
        xs: 'editorialHeadline040',
        lg: 'editorialHeadline060',
      },
    },
    description: {
      typographyPreset: {
        xs: 'editorialSubheadline010',
        lg: 'editorialSubheadline020',
      },
    },
  },
  tab: {
    small: {
      spaceInset: 'spaceInsetStretch040',
    },
  },
  tabs: {
    spaceInline: 'space060',
  },
  banner: {
    horizontal: {
      actions: {
        closeButton: {
          stylePreset: 'buttonMinimalInverseDocs',
        },
      },
    },
    vertical: {
      actions: {
        closeButton: {
          stylePreset: 'buttonOutlinedInverseDocs',
        },
      },
    },
  },
  toast: {
    maxWidth: {
      xs: '90vw',
      sm: '60vw',
      md: '45vw',
      lg: '38vw',
      xl: '31vw',
    },
  },
};
