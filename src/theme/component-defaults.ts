export const componentDefaults = {
  assistiveText: {
    small: {
      stylePreset: 'assistiveText',
      typographyPreset: 'utilityBody010',
      minHeight: 'sizing030',
      startEnhancer: {
        iconSize: 'iconSize010',
        spaceInline: 'space020',
      },
      endEnhancer: {
        iconSize: 'iconSize010',
        spaceInline: 'space020',
      },
    },
    medium: {
      stylePreset: 'assistiveText',
      typographyPreset: 'utilityBody020',
      minHeight: 'sizing030',
      startEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
      endEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
    },
    large: {
      stylePreset: 'assistiveText',
      typographyPreset: 'utilityBody030',
      minHeight: 'sizing030',
      startEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space030',
      },
      endEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space030',
      },
    },
  },
  banner: {
    horizontal: {
      stylePreset: 'bannerInformative',
      spaceInset: 'spaceInset045',
      minHeight: 'sizing090',
      maxWidth: '1920px',
      icon: {
        spaceInline: 'space030',
      },
      content: {
        spaceInline: 'space030',
        title: {
          stylePreset: 'inkInverse',
          typographyPreset: 'utilityHeading010',
          spaceStack: 'space030',
        },
        message: {
          stylePreset: 'inkInverse',
          typographyPreset: 'utilityBody020',
        },
      },
      actions: {
        spaceInline: 'space040',
        closeButton: {
          stylePreset: 'iconButtonMinimalInverse',
        },
      },
    },
    vertical: {
      stylePreset: 'bannerInformative',
      spaceInset: 'spaceInset045',
      minHeight: 'sizing090',
      maxWidth: '1920px',
      icon: {
        spaceInline: 'space030',
      },
      content: {
        spaceInline: 'space050',
        title: {
          stylePreset: 'inkInverse',
          typographyPreset: 'utilityHeading010',
          spaceStack: 'space030',
        },
        message: {
          stylePreset: 'inkInverse',
          typographyPreset: 'utilityBody020',
        },
      },
      actions: {
        spaceInline: 'space050',
        closeButton: {
          stylePreset: 'buttonOutlinedInverse',
        },
      },
    },
  },
  byline: {
    stylePreset: 'inkSubtle',
    typographyPreset: 'utilityMeta020',
    spaceStack: 'space020',
    link: {
      stylePreset: 'linkInline',
      typographyPreset: 'utilityMeta020',
    },
    divider: {
      stylePreset: 'inkNonEssential',
      spaceInline: 'space020',
    },
  },
  caption: {
    typographyPreset: 'editorialCaption010',
    stylePreset: 'inkBase',
    spaceStack: 'space040',
    credit: {
      typographyPreset: 'utilityMeta010',
      stylePreset: 'uppercaseInkSubtle',
    },
  },
  captionInset: {
    typographyPreset: 'editorialCaption010',
    stylePreset: 'inkBase',
    spaceStack: 'space040',
    spaceInset: {
      xs: 'spaceInset040',
      md: 'spaceInset050',
    },
    credit: {
      typographyPreset: 'utilityMeta010',
      stylePreset: 'uppercaseInkSubtle',
    },
  },
  divider: {
    stylePreset: 'divider',
  },

  grid: {
    maxWidth: '1920px',
    columns: 12,
    containerMargin: {
      xs: 'space040',
      sm: 'space040',
      md: 'space040',
      lg: 'space050',
      xl: 'space050',
    },
    columnGutters: {
      xs: 'space040',
      sm: 'space040',
      md: 'space040',
      lg: 'space050',
      xl: 'space050',
    },
    rowGutters: {
      xs: 'space040',
      sm: 'space040',
      md: 'space040',
      lg: 'space050',
      xl: 'space050',
    },
  },
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
      xs: 'editorialHeadline030',
      md: 'editorialHeadline040',
    },
  },
  headlineH3: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline020',
      md: 'editorialHeadline030',
    },
  },
  headlineH4: {
    stylePreset: 'inkContrast',
    typographyPreset: {
      xs: 'editorialHeadline010',
      md: 'editorialHeadline020',
    },
  },
  headlineH5: {
    stylePreset: 'inkContrast',
    typographyPreset: 'editorialSubheadline020',
  },
  headlineH6: {
    stylePreset: 'inkContrast',
    typographyPreset: 'editorialSubheadline010',
  },
  inlineMessage: {
    stylePreset: 'inlineMessageInformative',
    spaceInset: 'spaceInset030',
    icon: {
      spaceInline: 'space030',
    },
    content: {
      title: {
        spaceStack: 'space030',
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityHeading010',
      },
      message: {
        stylePreset: 'inkBase',
        typographyPreset: 'utilityBody020',
      },
    },
  },
  label: {
    small: {
      stylePreset: 'label',
      typographyPreset: 'utilityLabel010',
      spaceStack: 'space040',
      spaceInline: 'space010',
    },
    medium: {
      stylePreset: 'label',
      typographyPreset: 'utilityLabel020',
      spaceStack: 'space040',
      spaceInline: 'space010',
    },
    large: {
      stylePreset: 'label',
      typographyPreset: 'utilityLabel030',
      spaceStack: 'space040',
      spaceInline: 'space010',
    },
  },
  paragraph: {
    stylePreset: 'inkBase',
    typographyPreset: 'editorialParagraph020',
    dropCap: {
      stylePreset: 'inkContrast',
      typographyPreset: {
        xs: 'editorialDropCap010',
        md: 'editorialDropCap020',
        lg: 'editorialDropCap030',
      },
      space: 'space010',
    },
  },
  structuredList: {
    divider: {
      stylePreset: 'divider',
    },
  },
  structuredListItem: {
    stylePreset: 'structuredListItem',
    spaceInset: 'spaceInsetStretch040',
    minHeight: 'sizing100',
    icon: {
      size: 'iconSize010',
      stylePreset: 'inkContrast',
    },
  },
  textField: {
    small: {
      stylePreset: 'inputField',
      spaceInset: 'spaceInset020',
      minHeight: 'sizing060',
      width: '100%',
      typographyPreset: 'utilityBody020',
      spaceStack: 'space020',
      startEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
      endEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
    },
    medium: {
      stylePreset: 'inputField',
      spaceInset: 'spaceInset030',
      minHeight: 'sizing080',
      width: '100%',
      typographyPreset: 'utilityBody020',
      spaceStack: 'space020',
      startEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
      endEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
    },
    large: {
      stylePreset: 'inputField',
      spaceInset: 'spaceInset030',
      minHeight: 'sizing090',
      width: '100%',
      typographyPreset: 'utilityBody030',
      spaceStack: 'space020',
      startEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
      endEnhancer: {
        iconSize: 'iconSize020',
        spaceInline: 'space020',
      },
    },
  },
  toast: {
    stylePreset: 'toastNeutral',
    spaceInset: 'spaceInset030',
    maxWidth: {
      xs: '90%',
      sm: '60%',
      md: '45%',
      lg: '38%',
      xl: '31%',
    },
    content: {
      message: {
        stylePreset: 'inkInverse',
        typographyPreset: 'utilityBody020',
      },
      title: {
        stylePreset: 'inkInverse',
        typographyPreset: 'utilityHeading010',
        spaceStack: 'space010',
      },
    },
    contentAndActions: {
      spaceInline: 'space030',
    },
    divider: {
      stylePreset: 'dividerInverse',
    },
    icon: {
      spaceInline: 'space030',
    },
  },
  checkbox: {
    small: {
      spaceStack: 'space000',
      input: {
        size: 'sizing050',
        stylePreset: 'checkboxInput',
        spaceInline: 'space030',
      },
      feedback: {
        size: 'sizing070',
        stylePreset: 'checkboxFeedback',
      },
      label: {
        stylePreset: 'controlLabel',
        typographyPreset: 'utilityBody020',
      },
    },
    medium: {
      spaceStack: 'space000',
      input: {
        size: 'sizing060',
        stylePreset: 'checkboxInput',
        spaceInline: 'space030',
      },
      feedback: {
        size: 'sizing080',
        stylePreset: 'checkboxFeedback',
      },
      label: {
        stylePreset: 'controlLabel',
        typographyPreset: 'utilityBody020',
      },
    },
    large: {
      spaceStack: 'space000',
      input: {
        size: 'sizing070',
        stylePreset: 'checkboxInput',
        spaceInline: 'space040',
      },
      feedback: {
        size: 'sizing090',
        stylePreset: 'checkboxFeedback',
      },
      label: {
        stylePreset: 'controlLabel',
        typographyPreset: 'utilityBody030',
      },
    },
  },
};
