export const componentDefaults = {
  audioPlayer: {
    seekBar: {
      slider: {
        track: {
          stylePreset: 'audioPlayerSeekBarTrack',
          size: 'sizing020',
        },
        indicator: {
          stylePreset: 'audioPlayerSeekBarIndicator',
        },
        thumb: {
          stylePreset: 'audioPlayerThumb',
          size: 'sizing040',
        },
        thumbLabel: {
          stylePreset: 'audioPlayerLabels',
        },
        labels: {
          stylePreset: 'audioPlayerLabels',
          typographyPreset: 'utilityLabel020',
        },
      },
      buffering: {
        stylePreset: 'audioPlayerSeekBarBuffering',
      },
    },
    controls: {
      space: 'space030',
      previousButton: {
        stylePreset: 'audioPlayerControlButton',
      },
      replayButton: {
        stylePreset: 'audioPlayerControlButton',
      },
      playPauseButton: {
        stylePreset: 'audioPlayerPlayPauseButton',
      },
      forwardButton: {
        stylePreset: 'audioPlayerControlButton',
      },
      nextButton: {
        stylePreset: 'audioPlayerControlButton',
      },
      popoutButton: {
        stylePreset: 'audioPlayerControlButton',
      },
    },
    volumeControl: {
      slider: {
        track: {
          stylePreset: 'volumeControlTrack',
          size: 'sizing010',
        },
        indicator: {
          stylePreset: 'volumeControlIndicator',
        },
        thumb: {
          stylePreset: 'audioPlayerVolumeControlThumb',
          size: 'sizing040',
        },
        thumbLabel: {
          stylePreset: 'volumeControlLabels',
        },
        labels: {
          stylePreset: 'volumeControlButtons',
        },
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
          typographyPreset: 'utilityBody010',
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
          typographyPreset: 'utilityBody010',
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
  button: {
    small: {
      typographyPreset: 'utilityButton010',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInsetSquish020',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space020',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    medium: {
      typographyPreset: 'utilityButton020',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInsetSquish030',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'space020',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    large: {
      typographyPreset: 'utilityButton030',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInsetSquish040',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'space020',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
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
  card: {
    stylePreset: 'cardContainer',
    horizontalRatio: '1:1',
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceInline: {
        xs: 'space040',
        sm: 'space040',
        md: 'space050',
        lg: 'space050',
      },
    },
    teaserContainer: {
      stylePreset: 'cardContainerTeaser',
      spaceInset: 'spaceInsetSquish000',
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing080',
      spaceInset: 'spaceInsetSquish000',
    },
    headline: {
      nonInteractive: {
        typographyPreset: {
          xs: 'editorialHeadline020',
          sm: 'editorialHeadline020',
          md: 'editorialHeadline030',
          lg: 'editorialHeadline050',
        },
        heading: {
          stylePreset: 'inkContrast',
        },
        kicker: {
          stylePreset: 'uppercaseInkBrand010',
          spaceInline: {
            xs: 'space020',
            sm: 'space020',
            md: 'space030',
            lg: 'space030',
          },
        },
      },
      interactive: {
        typographyPreset: {
          xs: 'editorialHeadline020',
          sm: 'editorialHeadline020',
          md: 'editorialHeadline030',
          lg: 'editorialHeadline050',
        },
        heading: {
          stylePreset: 'headlineHeadingInteractive',
        },
        kicker: {
          stylePreset: 'headlineKickerInteractive',
          spaceInline: {
            xs: 'space020',
            sm: 'space020',
            md: 'space030',
            lg: 'space030',
          },
        },
      },
    },
  },
  cardInset: {
    stylePreset: 'cardContainer',
    horizontalRatio: '1:1',
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceInline: 'space000',
    },
    teaserContainer: {
      stylePreset: 'cardContainerTeaser',
      spaceInset: {
        xs: 'spaceInset040',
        sm: 'spaceInset040',
        md: 'spaceInset050',
        lg: 'spaceInset050',
      },
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing000',
      spaceInset: {
        xs: 'spaceInsetSquish030',
        sm: 'spaceInsetSquish030',
        md: 'spaceInsetSquish040',
        lg: 'spaceInsetSquish040',
      },
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
  divider: {
    stylePreset: 'dividerHorizontal',
  },
  drawer: {
    panel: {
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
  flag: {
    small: {
      typographyPreset: 'utilityLabel010',
      stylePreset: 'flagDefault',
      spaceInset: 'spaceInsetSquish010',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      spaceInline: 'space010',
    },
    medium: {
      typographyPreset: 'utilityLabel020',
      stylePreset: 'flagDefault',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space010',
    },
    large: {
      typographyPreset: 'utilityLabel030',
      stylePreset: 'flagDefault',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing070',
      iconSize: 'iconSize010',
      spaceInline: 'space010',
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
  headline: {
    typographyPreset: {
      xs: 'editorialHeadline060',
      sm: 'editorialHeadline060',
      md: 'editorialHeadline070',
      lg: 'editorialHeadline080',
    },
    heading: {
      stylePreset: 'inkContrast',
    },
    kicker: {
      stylePreset: 'uppercaseInkBrand010',
      spaceInline: {
        xs: 'space030',
        sm: 'space030',
        md: 'space040',
        lg: 'space040',
      },
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
  iconButton: {
    small: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset020',
      width: 'sizing060',
      height: 'sizing060',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    medium: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset030',
      width: 'sizing080',
      height: 'sizing080',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
    large: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset040',
      width: 'sizing090',
      height: 'sizing090',
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    },
  },
  icons: {
    stylePreset: 'iconDefault',
  },
  image: {
    stylePreset: 'imageSharp',
    caption: {
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
  },
  indeterminateProgressIndicator: {
    stylePreset: 'iconDefault',
    size: 'iconSize020',
  },
  link: {
    stylePreset: 'linkInline',
    spaceInline: 'space010',
    externalIcon: {
      size: 'iconSize010',
    },
  },
  linkStandalone: {
    stylePreset: 'linkStandalone',
    typographyPreset: 'utilityLabel020',
  },
  menu: {
    spaceInline: 'space020',
  },
  menuItem: {
    horizontal: {
      minHeight: 'sizing080',
      stylePreset: 'menuItemHorizontal',
      spaceInline: 'space020',
      spaceInset: 'spaceInsetSquish030',
    },
    vertical: {
      minHeight: 'sizing080',
      stylePreset: 'menuItemVertical',
      spaceInline: 'space020',
      spaceInset: 'spaceInsetSquish030',
    },
  },
  menuGroup: {
    spaceInline: 'space050',
    title: {
      typographyPreset: 'utilityHeading030',
      stylePreset: 'inkSubtle',
      spaceInline: 'space050',
    },
  },
  orderedList: {
    spaceInline: 'space040',
    content: {
      stylePreset: 'inkBase',
      typographyPreset: 'editorialParagraph010',
    },
    counter: {
      stylePreset: 'inkBase',
      typographyPreset: 'editorialParagraph010',
      minWidth: 'sizing050',
    },
  },
  overlay: {
    stylePreset: 'overlay',
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
  slider: {
    track: {
      stylePreset: 'sliderTrack',
      size: 'sizing030',
    },
    indicator: {
      stylePreset: 'sliderIndicator',
    },
    thumb: {
      stylePreset: 'sliderThumb',
      size: 'sizing060',
    },
    thumbLabel: {
      stylePreset: 'sliderThumbLabel',
      typographyPreset: 'utilityLabel030',
      space: 'space060',
    },
    labels: {
      stylePreset: 'sliderLabels',
      typographyPreset: 'utilityLabel020',
      space: 'space030',
    },
  },
  standfirst: {
    styledText: {
      stylePreset: 'inkBase',
      typographyPreset: {
        xs: 'editorialSubheadline010',
        lg: 'editorialSubheadline020',
      },
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
  structuredList: {
    divider: {
      stylePreset: 'dividerHorizontal',
    },
  },
  tab: {
    small: {
      stylePreset: 'tab',
      typographyPreset: 'utilityButton010',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space020',
    },
    medium: {
      stylePreset: 'tab',
      typographyPreset: 'utilityButton020',
      spaceInset: 'spaceInsetSquish030',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'space020',
    },
    large: {
      stylePreset: 'tab',
      typographyPreset: 'utilityButton030',
      spaceInset: 'spaceInsetSquish030',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'space020',
    },
  },
  tabs: {
    spaceInline: 'space020',
    selectionIndicator: {
      track: {
        stylePreset: 'tabsBarTrack',
        weight: 'borderWidth020',
      },
      indicator: {
        stylePreset: 'tabsBarIndicator',
        weight: 'borderWidth020',
        motionDuration: 'motionDuration030',
        motionTiming: 'motionEaseInAndOut',
      },
    },
  },
  textInput: {
    small: {
      label: {
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityLabel030',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset020',
        minHeight: 'sizing060',
        typographyPreset: 'utilityBody020',
        spaceStack: 'space020',
        leadingIcon: {
          iconOffset: 'space030',
          spaceInset: 'space070',
        },
        validationIcon: {
          iconOffset: 'space030',
          spaceInset: 'space070',
          iconSize: 'iconSize020',
        },
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'utilityLabel020',
        minHeight: 'sizing030',
      },
    },
    medium: {
      label: {
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityLabel030',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset030',
        minHeight: 'sizing080',
        typographyPreset: 'utilityBody020',
        spaceStack: 'space020',
        leadingIcon: {
          iconOffset: 'space030',
          spaceInset: 'space070',
        },
        validationIcon: {
          iconOffset: 'space030',
          spaceInset: 'space070',
          iconSize: 'iconSize020',
        },
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'utilityLabel020',
        minHeight: 'sizing030',
      },
    },
    large: {
      label: {
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityLabel030',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset030',
        minHeight: 'sizing090',
        typographyPreset: 'utilityBody030',
        spaceStack: 'space020',
        leadingIcon: {
          iconOffset: 'space030',
          spaceInset: 'space080',
        },
        validationIcon: {
          iconOffset: 'space030',
          spaceInset: 'space080',
          iconSize: 'iconSize030',
        },
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'utilityLabel030',
        minHeight: 'sizing030',
      },
    },
  },
  tag: {
    small: {
      typographyPreset: 'utilityLabel010',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInsetSquish010',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      spaceInline: 'space010',
    },
    medium: {
      typographyPreset: 'utilityLabel020',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space010',
    },
    large: {
      typographyPreset: 'utilityLabel030',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing070',
      iconSize: 'iconSize020',
      spaceInline: 'space010',
    },
  },
  titleBar: {
    stylePreset: 'titleBar',
    spaceInset: {
      xs: 'spaceInsetSquish030',
      lg: 'spaceInsetSquish040',
    },
    heading: {
      typographyPreset: {
        xs: 'editorialHeadline050',
        md: 'editorialHeadline070',
        lg: 'editorialHeadline080',
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
    icon: {
      spaceInline: 'space030',
    },
    divider: {
      stylePreset: 'dividerInverse',
    },
    content: {
      title: {
        stylePreset: 'inkInverse',
        typographyPreset: 'utilityHeading010',
        spaceStack: 'space010',
      },
      message: {
        stylePreset: 'inkInverse',
        typographyPreset: 'utilityBody010',
      },
    },
    contentAndActions: {
      spaceInline: 'space030',
    },
  },
  inlineMessage: {
    stylePreset: 'inlineMessage',
    spaceInset: 'spaceInset030',
    maxWidth: '100%',
    icon: {
      spaceInline: 'space020',
    },
    content: {
      title: {
        spaceStack: 'space030',
        stylePreset: 'inkContrast',
        typographyPreset: 'utilityHeading010',
      },
      message: {
        stylePreset: 'inkBase',
        typographyPreset: 'utilityBody010',
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
  volumeControl: {
    slider: {
      track: {
        stylePreset: 'volumeControlTrack',
      },
      indicator: {
        stylePreset: 'volumeControlIndicator',
      },
      thumb: {
        stylePreset: 'volumeControlThumb',
      },
    },
    button: {
      stylePreset: 'volumeControlButtons',
      iconSize: 'iconSize020',
      size: 'small',
    },
  },
};
