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
        },
      },
      buffering: {
        stylePreset: 'audioPlayerSeekBarBuffering',
      },
    },
    controls: {
      space: 'sizing030',
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
    stylePreset: 'byline',
    typographyPreset: 'meta020',
    spaceStack: 'sizing020',
    link: {
      stylePreset: 'bylineLink',
      typographyPreset: 'meta020',
    },
    divider: {
      stylePreset: 'bylineDivider',
      spaceInline: 'space020',
    },
  },
  button: {
    small: {
      typographyPreset: 'button010',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInset020Squish',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'sizing020',
    },
    medium: {
      typographyPreset: 'button020',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInset030Squish',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'sizing020',
    },
    large: {
      typographyPreset: 'button030',
      stylePreset: 'buttonDefault',
      spaceInset: 'spaceInset040Squish',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'sizing020',
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
      spaceInset: 'spaceInset000Squish',
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing080',
      spaceInset: 'spaceInset000Squish',
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
        xs: 'spaceInset030Squish',
        sm: 'spaceInset030Squish',
        lg: 'spaceInset040Squish',
        xl: 'spaceInset040Squish',
      },
    },
  },
  dateTime: {
    stylePreset: 'dateTime',
    typographyPreset: 'meta020',
    prefix: {
      stylePreset: 'dateTimePrefix',
      typographyPreset: 'meta020',
    },
    suffix: {
      stylePreset: 'dateTimeSuffix',
      typographyPreset: 'meta020',
    },
  },
  divider: {
    stylePreset: 'dividerHorizontal',
  },
  flag: {
    small: {
      typographyPreset: 'label010',
      stylePreset: 'flagDefault',
      spaceInset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      spaceInline: 'sizing010',
    },
    large: {
      typographyPreset: 'label020',
      stylePreset: 'flagDefault',
      spaceInset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'sizing010',
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
    heading: {
      stylePreset: 'headlineContent',
      typographyPreset: {
        xs: 'heading060',
        sm: 'heading060',
        lg: 'heading070',
        xl: 'heading080',
      },
    },
    kicker: {
      stylePreset: 'headlineKicker',
      typographyPreset: {
        xs: 'heading060',
        sm: 'heading060',
        lg: 'heading070',
        xl: 'heading080',
      },
      spaceInline: {
        xs: 'space030',
        sm: 'space030',
        lg: 'space040',
        xl: 'space040',
      },
    },
  },
  headlineH1: {
    stylePreset: 'headlineH1',
    typographyPreset: {
      xs: 'heading050',
      lg: 'heading070',
      xl: 'heading090',
    },
  },
  headlineH2: {
    stylePreset: 'headlineH2',
    typographyPreset: {
      xs: 'heading030',
      lg: 'heading040',
    },
  },
  headlineH3: {
    stylePreset: 'headlineH3',
    typographyPreset: {
      xs: 'heading020',
      lg: 'heading030',
    },
  },
  headlineH4: {
    stylePreset: 'headlineH4',
    typographyPreset: {
      xs: 'heading010',
      lg: 'heading020',
    },
  },
  headlineH5: {
    stylePreset: 'headlineH5',
    typographyPreset: 'subhead015',
  },
  headlineH6: {
    stylePreset: 'headlineH6',
    typographyPreset: 'subhead010',
  },
  iconButton: {
    small: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset020',
      width: 'sizing060',
      height: 'sizing060',
    },
    medium: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset030',
      width: 'sizing080',
      height: 'sizing080',
    },
    large: {
      stylePreset: 'iconButtonDefault',
      spaceInset: 'spaceInset040',
      width: 'sizing090',
      height: 'sizing090',
    },
  },
  image: {
    stylePreset: 'imageSharp',
  },
  link: {
    stylePreset: 'linkInline',
    spaceInline: 'sizing010',
    externalIcon: {
      size: 'iconSize010',
    },
  },
  linkStandalone: {
    stylePreset: 'linkStandalone',
  },
  paragraph: {
    stylePreset: 'paragraph',
    typographyPreset: 'body020',
    dropCap: {
      stylePreset: 'paragraphDropCap',
      typographyPreset: 'display040',
      space: 'space020',
    },
  },
  shareBar: {
    label: {
      stylePreset: 'shareBarLabel',
      typographyPreset: 'label020',
      spaceInline: 'space040',
    },
    items: {
      spaceInline: 'sizing020',
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
      typographyPreset: 'label030',
      space: 'space060',
    },
    labels: {
      stylePreset: 'sliderLabels',
      typographyPreset: 'label020',
      space: 'space030',
    },
  },
  standfirst: {
    styledText: {
      stylePreset: 'standfirst',
      typographyPreset: {
        xs: 'subhead020',
        lg: 'subhead030',
      },
    },
  },
  tab: {
    small: {
      stylePreset: 'tab',
      typographyPreset: 'button010',
      spaceInset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'sizing020',
    },
    medium: {
      stylePreset: 'tab',
      typographyPreset: 'button020',
      spaceInset: 'spaceInset030Squish',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      spaceInline: 'sizing020',
    },
    large: {
      stylePreset: 'tab',
      typographyPreset: 'button030',
      spaceInset: 'spaceInset030Squish',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      spaceInline: 'sizing020',
    },
  },
  tabGroup: {
    stylePreset: 'tabGroup',
  },
  textInput: {
    small: {
      label: {
        stylePreset: 'textInputLabel',
        typographyPreset: 'label030',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset010Squish',
        minHeight: 'sizing060',
        typographyPreset: 'body020',
        spaceStack: 'space020',
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'label020',
      },
    },
    medium: {
      label: {
        stylePreset: 'textInputLabel',
        typographyPreset: 'label040',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset030',
        minHeight: 'sizing080',
        typographyPreset: 'body020',
        spaceStack: 'space020',
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'label020',
      },
    },
    large: {
      label: {
        stylePreset: 'textInputLabel',
        typographyPreset: 'label040',
        spaceStack: 'space040',
        spaceInline: 'space010',
      },
      input: {
        stylePreset: 'textInput',
        spaceInset: 'spaceInset030',
        minHeight: 'sizing090',
        typographyPreset: 'body030',
        spaceStack: 'space020',
      },
      assistiveText: {
        stylePreset: 'textInputAssistiveText',
        typographyPreset: 'label030',
      },
    },
  },
  tag: {
    small: {
      typographyPreset: 'label010',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      spaceInline: 'sizing010',
    },
    medium: {
      typographyPreset: 'label020',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      spaceInline: 'sizing010',
    },
    large: {
      typographyPreset: 'label030',
      stylePreset: 'tagDefault',
      spaceInset: 'spaceInset020Squish',
      minHeight: 'sizing070',
      iconSize: 'iconSize020',
      spaceInline: 'sizing010',
    },
  },
  titleBar: {
    stylePreset: 'titleBar',
    spaceInset: {
      xs: 'spaceInset030Squish',
      lg: 'spaceInset040Squish',
    },
    heading: {
      typographyPreset: {
        xs: 'heading040',
        lg: 'heading050',
        xl: 'heading070',
      },
    },
  },
  unorderedList: {
    spaceStack: 'space040',
    content: {
      stylePreset: 'unorderedListItemContent',
      typographyPreset: 'body010',
    },
    marker: {
      stylePreset: 'unorderedListItemMarker',
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
      iconSize: 'iconSize010',
      size: 'small',
    },
  },
  icons: {
    stylePreset: 'iconDefault',
  },
};
