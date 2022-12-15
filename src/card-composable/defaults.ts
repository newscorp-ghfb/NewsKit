export default {
  card: {
    stylePreset: 'cardContainer',
    horizontalRatio: '1:1',
    mediaContainer: {
      spaceInline: {
        xs: 'space040',
        sm: 'space040',
        md: 'space050',
        lg: 'space050',
      },
    },
    teaserContainer: {
      spaceInset: 'spaceInsetSquish000',
    },
    actionsContainer: {
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
      spaceInline: 'space000',
    },
    teaserContainer: {
      spaceInset: {
        xs: 'spaceInset040',
        sm: 'spaceInset040',
        md: 'spaceInset050',
        lg: 'spaceInset050',
      },
    },
    actionsContainer: {
      minHeight: 'sizing000',
      spaceInset: {
        xs: 'spaceInsetSquish030',
        sm: 'spaceInsetSquish030',
        md: 'spaceInsetSquish040',
        lg: 'spaceInsetSquish040',
      },
    },
  },
};
