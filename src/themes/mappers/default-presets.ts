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
  standfirst: {
    styledText: {
      stylePreset: 'standfirst',
      typePreset: {
        xs: 'subhead020',
        md: 'subhead030',
      },
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
};
