export const componentDefaults = {
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
};
