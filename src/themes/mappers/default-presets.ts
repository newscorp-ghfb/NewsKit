export const defaultPresets = {
  button: {
    small: {
      typePreset: 'buttonSmall',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset020Squish',
      minWidth: 'sizing090',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing020',
    },
    medium: {
      typePreset: 'buttonMedium',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset030Squish',
      minWidth: 'sizing100',
      minHeight: 'sizing080',
      iconSize: 'iconSize020',
      space: 'sizing020',
    },
    large: {
      typePreset: 'buttonLarge',
      stylePreset: 'buttonDefault',
      paddingPreset: 'spaceInset040Squish',
      minWidth: 'sizing110',
      minHeight: 'sizing090',
      iconSize: 'iconSize030',
      space: 'sizing020',
    },
  },
  card: {
    media: {
      stylePreset: 'imageSharp',
    },
    actionsContainer: {
      stylePreset: 'cardActionsContainer',
      minHeight: 'sizing080',
      paddingPreset: 'spaceInset000Squish',
    },
  },
  headline: {
    heading: {
      stylePreset: 'headlineContent',
      typePreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
    },
    kicker: {
      stylePreset: 'headlineKicker',
      typePreset: {
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
  flag: {
    small: {
      typePreset: 'flag010',
      stylePreset: 'flagDefault',
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typePreset: 'flag020',
      stylePreset: 'flagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
  },
  tag: {
    small: {
      typePreset: 'tag010',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset010Squish',
      minHeight: 'sizing050',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    medium: {
      typePreset: 'tag020',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing060',
      iconSize: 'iconSize010',
      space: 'sizing010',
    },
    large: {
      typePreset: 'tag030',
      stylePreset: 'tagDefault',
      paddingPreset: 'spaceInset020Squish',
      minHeight: 'sizing070',
      iconSize: 'iconSize020',
      space: 'sizing010',
    },
  },
  unorderedList: {
    spaceStack: 'space040',
    content: {
      stylePreset: 'unorderedListItemContent',
      typePreset: 'body010',
    },
    marker: {
      stylePreset: 'unorderedListItemMarker',
      spaceInline: 'space020',
      size: 'iconSize005',
    },
  },
  shareBar: {
    label: {
      typePreset: 'label020',
      stylePreset: 'shareBarLabel',
      spaceInline: 'space040',
      spaceStack: 'space040',
    },
    items: {
      space: 'sizing020',
    },
  },
  divider: {
    stylePreset: 'dividerHorizontal',
  },
  standfirst: {
    styledText: {
      stylePreset: 'standfirst',
      typePreset: {
        xs: 'subhead020',
        md: 'subhead030',
      },
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
  progressIndicator: {
    track: {
      stylePreset: 'circularProgressIndicatorTrackPrimary',
    },
    indicator: {
      stylePreset: 'circularProgressIndicatorIndicatorPrimary',
    },
  },
  dateTime: {
    stylePreset: 'dateTime',
    typePreset: 'meta020',
    prefix: {
      stylePreset: 'dateTimePrefix',
      typePreset: 'meta020',
    },
    suffix: {
      stylePreset: 'dateTimeSuffix',
      typePreset: 'meta020',
    },
  },
};
