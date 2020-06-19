export const defaultPresets = {
  articleHeadline: {
    heading: {
      stylePreset: 'articleHeadlineContent',
      typePreset: {
        xs: 'headline100',
        md: 'headline200',
      },
    },
    kicker: {
      stylePreset: 'articleHeadlineKicker',
      typePreset: {
        xs: 'heading060',
        sm: 'heading060',
        md: 'heading070',
        lg: 'heading080',
      },
      marginPreset: {
        xs: 'spaceInline030',
        sm: 'spaceInline030',
        md: 'spaceInline040',
        lg: 'spaceInline040',
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
  shareBar: {
    horizontal: {
      label: {
        typePreset: 'shareBarLabel',
        stylePreset: 'shareBarLabel',
        marginPreset: 'spaceInline040',
      },
      items: {
        space: 'sizing020',
      },
    },
    vertical: {
      label: {
        typePreset: 'shareBarLabel',
        stylePreset: 'shareBarLabel',
        marginPreset: 'spaceStack040',
      },
      items: {
        space: 'sizing020',
      },
    },
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
};
