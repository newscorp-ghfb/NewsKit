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
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceInline: {
        xs: 'space040',
        sm: 'space040',
        lg: 'space050',
        xl: 'space050',
      },
    },
    contentAndActionsContainer: {
      stylePreset: 'cardContainerTeaserAndActions',
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
  },
  cardInset: {
    stylePreset: 'cardContainer',
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceInline: 'space000',
    },
    contentAndActionsContainer: {
      stylePreset: 'cardContainerTeaserAndActions',
    },
    teaserContainer: {
      stylePreset: 'cardContainerTeaser',
      spaceInset: {
        xs: 'spaceInset040',
        sm: 'spaceInset040',
        lg: 'spaceInset050',
        xl: 'spaceInset050',
      },
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing000',
      spaceInset: {
        xs: 'spaceInsetSquish030',
        sm: 'spaceInsetSquish030',
        lg: 'spaceInsetSquish040',
        xl: 'spaceInsetSquish040',
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
      typographyPreset: "utilityLabel020",
      stylePreset: "flagDefault",
      spaceInset: "spaceInsetSquish020",
      minHeight: "sizing060",
      iconSize: "iconSize010",
      spaceInline: "space010"
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
    maxWidth: 1920,
    columns: 12,
    containerMargin: {
      xs: 16,
      sm: 16,
      lg: 24,
      xl: 24,
    },
    columnGutters: {
      xs: 16,
      sm: 16,
      lg: 24,
      xl: 24,
    },
    rowGutters: {
      xs: 16,
      sm: 16,
      lg: 24,
      xl: 24,
    },
  },
  headline: {
    typographyPreset: {
      xs: 'editorialHeadline060',
      sm: 'editorialHeadline060',
      lg: 'editorialHeadline070',
      xl: 'editorialHeadline080',
    },
    heading: {
      stylePreset: 'inkContrast',
    },
    kicker: {
      stylePreset: 'uppercaseInkBrand010',
      spaceInline: {
        xs: 'space030',
        sm: 'space030',
        lg: 'space040',
        xl: 'space040',
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
    typographyPreset: 'utilityButton020',
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
  tab: {
    small: {
      stylePreset: 'tab',
      typographyPreset: 'utilityLabel010',
      spaceInset: 'spaceInsetSquish020',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'space020',
    },
    medium: {
      stylePreset: 'tab',
      typographyPreset: 'utilityLabel020',
      spaceInset: 'spaceInsetSquish030',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'space020',
    },
    large: {
      stylePreset: 'tab',
      typographyPreset: 'utilityLabel030',
      spaceInset: 'spaceInsetSquish030',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'space020',
    },
  },
  tabGroup: {
    stylePreset: 'tabGroup',
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
        iconSize: 'iconSize020',
        iconSpace: 'space030',
        spaceInsetRight: 'space070',
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
        iconSize: 'iconSize020',
        iconSpace: 'space030',
        spaceInsetRight: 'space070',
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
        iconSize: 'iconSize030',
        iconSpace: 'space030',
        spaceInsetRight: 'space080',
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
