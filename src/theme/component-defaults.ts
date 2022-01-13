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
  dateTime: {
    stylePreset: 'inkSubtle',
    typographyPreset: 'utilityMeta020',
    prefix: {
      stylePreset: 'inkSubtle',
      typographyPreset: 'utilityMeta020',
    },
    suffix: {
      stylePreset: 'inkSubtle',
      typographyPreset: 'utilityMeta020',
    },
  },
  drawer: {
    overlay: {
      zIndex: 70,
      transitionPreset: 'fade',
    },
    panel: {
      zIndex: 80,
      stylePreset: 'drawerPanel',
      maxSize: '100%',
      minSize: '20px',
      size: {
        xs: '305px',
        sm: '309px',
        md: '310px',
        lg: '333px',
        xl: '354px',
      },
      left: {
        transitionPreset: ['fade', 'slideLeft'],
      },
      right: {
        transitionPreset: ['fade', 'slideRight'],
      },
      top: {
        transitionPreset: ['fade', 'slideTop'],
      },
      bottom: {
        transitionPreset: ['fade', 'slideBottom'],
      },
    },
    header: {
      spaceInset: 'spaceInsetSquish040',
    },
    content: {
      spaceInset: 'spaceInset050',
    },
    closeButton: {
      stylePreset: 'iconButtonMinimalSecondary',
      spaceInset: 'spaceInset020',
    },
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
  inlineDrawer: {
    __extends: '{{componentDefaults.drawer}}',
    panel: {
      __extends: '{{componentDefaults.drawer.panel}}',
      maxSize: 'auto',
    },
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
  modal: {
    overlay: {
      zIndex: 70,
      transitionPreset: {
        extend: 'fade',
        enterActive: {
          transitionDuration: '{{motions.motionDuration030}}',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
        exitActive: {
          transitionDuration: '{{motions.motionDuration030}}',
          transitionDelay: '{{motions.motionDuration010}}',
          transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
        },
      },
    },
    panel: {
      zIndex: 80,
      stylePreset: 'modalPanel',
      transitionPreset: [
        {
          extend: 'fade',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingLinear}}',
          },
        },
        {
          extend: 'moveUp',
          enterActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
            transitionDelay: '{{motions.motionDuration010}}',
          },
          exitActive: {
            transitionDuration: '{{motions.motionDuration010}}',
            transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
          },
        },
      ],
      topOffset: '20vh',
      width: {
        xs: '90vw',
        sm: '60vw',
        md: '45vw',
        lg: '38vw',
        xl: '31vw',
      },
      minHeight: '15vh',
      maxHeight: {
        xs: '95vh',
        md: '80vh',
      },
    },
    header: {
      spaceInset: 'spaceInsetSquish040',
    },
    content: {
      spaceInset: 'spaceInset050',
    },
    closeButton: {
      stylePreset: 'iconButtonMinimalSecondary',
      spaceInset: 'spaceInset020',
    },
  },

  overlay: {
    stylePreset: 'overlay',
    transitionPreset: 'fade',
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
  scroll: {
    horizontal: {
      controls: {
        button: {
          stylePreset: 'iconButtonSolidPrimary',
          spaceInset: 'spaceInset000',
        },
        offset: 'space040',
      },
      overlays: {
        stylePreset: 'scrollOverlaysHorizontal',
        size: 'sizing090',
      },
    },
    vertical: {
      controls: {
        button: {
          stylePreset: 'iconButtonSolidPrimary',
          spaceInset: 'spaceInset000',
        },
        offset: 'space040',
      },
      overlays: {
        stylePreset: 'scrollOverlaysVertical',
        size: 'sizing090',
      },
    },
  },
  select: {
    small: {
      button: {
        stylePreset: 'inputField',
        minHeight: 'sizing060',
        width: '100%',
        spaceInset: 'spaceInset020',
        spaceStack: 'space020',
        spaceInline: 'space020',
        typographyPreset: 'utilityBody020',
        iconSize: 'iconSize020',
        loadingIndicator: {
          stylePreset: 'indeterminateProgressIndicatorPrimary',
        },
        startEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
        endEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
      },
      panel: {
        spaceStack: 'space010',
        stylePreset: 'selectPanel',
        maxHeight: '184px',
        spaceInset: 'spaceInset020',
      },
    },
    medium: {
      button: {
        stylePreset: 'inputField',
        minHeight: 'sizing080',
        width: '100%',
        spaceInset: 'spaceInset020',
        spaceStack: 'space020',
        spaceInline: 'space020',
        typographyPreset: 'utilityBody020',
        iconSize: 'iconSize020',
        loadingIndicator: {
          stylePreset: 'indeterminateProgressIndicatorPrimary',
        },
        startEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
        endEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
      },
      panel: {
        spaceStack: 'space010',
        stylePreset: 'selectPanel',
        maxHeight: '272px',
        spaceInset: 'spaceInset020',
      },
    },
    large: {
      button: {
        stylePreset: 'inputField',
        minHeight: 'sizing090',
        width: '100%',
        spaceInset: 'spaceInset030',
        spaceStack: 'space020',
        spaceInline: 'space020',
        typographyPreset: 'utilityBody030',
        iconSize: 'iconSize020',
        loadingIndicator: {
          stylePreset: 'indeterminateProgressIndicatorPrimary',
        },
        startEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
        endEnhancer: {
          spaceInline: 'space020',
          iconSize: 'iconSize020',
        },
      },
      panel: {
        spaceStack: 'space010',
        stylePreset: 'selectPanel',
        maxHeight: '360px',
        spaceInset: 'spaceInset020',
      },
    },
  },
  selectOption: {
    small: {
      minHeight: 'sizing060',
      spaceInline: 'space020',
      spaceInset: 'spaceInsetSquish010',
      stylePreset: 'selectOptionItem',
      typographyPreset: 'utilityBody020',
      icon: {
        stylePreset: 'selectOptionItemIcon',
        iconSize: 'iconSize020',
      },
    },
    medium: {
      minHeight: 'sizing080',
      spaceInline: 'space020',
      spaceInset: 'spaceInset020',
      stylePreset: 'selectOptionItem',
      typographyPreset: 'utilityBody020',
      icon: {
        stylePreset: 'selectOptionItemIcon',
        iconSize: 'iconSize020',
      },
    },
    large: {
      minHeight: 'sizing090',
      spaceInline: 'space020',
      spaceInset: 'spaceInsetStretch030',
      stylePreset: 'selectOptionItem',
      typographyPreset: 'utilityBody030',
      icon: {
        stylePreset: 'selectOptionItemIcon',
        iconSize: 'iconSize020',
      },
    },
  },
  shareBar: {
    label: {
      stylePreset: 'shareBarLabel',
      typographyPreset: 'utilityLabel020',
      spaceInline: 'space040',
    },
    items: {
      spaceInline: 'space020',
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
  unorderedList: {
    spaceStack: 'space040',
    content: {
      stylePreset: 'inkBase',
      typographyPreset: 'editorialParagraph010',
    },
    marker: {
      stylePreset: 'inkBase',
      spaceInline: 'space020',
      size: 'iconSize005',
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
