export const componentDefaults = {
  byline: {
    stylePreset: 'byline',
    typographyPreset: 'meta020',
    space: 'sizing020',
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
      paddingPreset: 'spaceInset020Squish',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing020',
    },
    medium: {
      typographyPreset: 'button020',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset030Squish',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      space: 'sizing020',
    },
    large: {
      typographyPreset: 'button030',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset040Squish',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      space: 'sizing020',
    },
  },
  card: {
    stylePreset: 'cardContainer',
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceStack: {
        xs: 'space040',
        sm: 'space040',
        md: 'space050',
        lg: 'space050',
      },
    },
    contentAndActionsContainer: {
      stylePreset: 'cardContainerTeaserAndActions',
    },
    teaserContainer: {
      stylePreset: 'cardContainerTeaser',
      paddingPreset: 'spaceInset000Squish',
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing080',
      paddingPreset: 'spaceInset000Squish',
    },
  },
  cardInset: {
    stylePreset: 'cardContainer',
    mediaContainer: {
      stylePreset: 'cardContainerMedia',
      spaceStack: 'space000',
    },
    contentAndActionsContainer: {
      stylePreset: 'cardContainerTeaserAndActions',
    },
    teaserContainer: {
      stylePreset: 'cardContainerTeaser',
      paddingPreset: {
        xs: 'spaceInset040',
        sm: 'spaceInset040',
        md: 'spaceInset050',
        lg: 'spaceInset050',
      },
    },
    actionsContainer: {
      stylePreset: 'cardContainerActions',
      minHeight: 'sizing000',
      paddingPreset: {
        xs: 'spaceInset030Squish',
        sm: 'spaceInset030Squish',
        md: 'spaceInset040Squish',
        lg: 'spaceInset040Squish',
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
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typographyPreset: 'label020',
      stylePreset: 'flagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
  },
  grid: {
    maxWidth: 1920,
    columns: 12,
    containerMargin: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
    columnGutters: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
    rowGutters: {
      xs: 16,
      sm: 16,
      md: 24,
      lg: 24,
    },
  },
  headline: {
    heading: {
      stylePreset: 'headlineContent',
      typographyPreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
    },
    kicker: {
      stylePreset: 'headlineKicker',
      typographyPreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
      spaceInline: {
        xs: 'space030',
        sm: 'space030',
        md: 'space040',
        lg: 'space040',
      },
    },
  },
  headlineH1: {
    stylePreset: 'headlineH1',
    typographyPreset: {
      xs: 'heading050',
      md: 'heading070',
      lg: 'heading090',
    },
  },
  headlineH2: {
    stylePreset: 'headlineH2',
    typographyPreset: {
      xs: 'heading030',
      md: 'heading040',
    },
  },
  headlineH3: {
    stylePreset: 'headlineH3',
    typographyPreset: {
      xs: 'heading020',
      md: 'heading030',
    },
  },
  headlineH4: {
    stylePreset: 'headlineH4',
    typographyPreset: {
      xs: 'heading010',
      md: 'heading020',
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
      paddingPreset: 'spaceInset020',
      width: 'sizing060',
      height: 'sizing060',
    },
    medium: {
      stylePreset: 'iconButtonDefault',
      paddingPreset: 'spaceInset030',
      width: 'sizing080',
      height: 'sizing080',
    },
    large: {
      stylePreset: 'iconButtonDefault',
      paddingPreset: 'spaceInset040',
      width: 'sizing090',
      height: 'sizing090',
    },
  },
  image: {
    stylePreset: 'imageSharp',
  },
  link: {
    stylePreset: 'linkInline',
    space: 'sizing010',
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
      typographyPreset: 'label020',
      stylePreset: 'shareBarLabel',
      spaceInline: 'space040',
      spaceStack: 'space040',
    },
    items: {
      space: 'sizing020',
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
        md: 'subhead030',
      },
    },
  },
  tab: {
    small: {
      stylePreset: 'tab',
      typographyPreset: 'label020',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing020',
    },
    medium: {
      stylePreset: 'tab',
      typographyPreset: 'label020',
      paddingPreset: 'spaceInset030Squish',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      space: 'sizing020',
    },
    large: {
      stylePreset: 'tab',
      typographyPreset: 'label030',
      paddingPreset: 'spaceInset030Squish',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      space: 'sizing020',
    },
  },
  tag: {
    small: {
      typographyPreset: 'label010',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    medium: {
      typographyPreset: 'label020',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typographyPreset: 'label030',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing070',
      iconSize: 'iconSize020',
      space: 'sizing010',
    },
  },
  titleBar: {
    paddingPreset: {
      xs: 'spaceInset030Squish',
      md: 'spaceInset040Squish',
    },
    stylePreset: 'titleBar',
    heading: {
      typographyPreset: {
        xs: 'heading040',
        md: 'heading050',
        lg: 'heading070',
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
};
