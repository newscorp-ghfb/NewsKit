import {createTheme} from 'newskit';

const cardLabelSpaceStack = 'space040';
const cardTeaserHeadlineSpaceStack = {
  lg: 'space050',
  md: 'space045',
  sm: 'space040',
  xs: 'space040',
};
const headlineKickerInline = {
  xs: 'spaceInline030',
  sm: 'spaceInline030',
  md: 'spaceInline040',
  lg: 'spaceInline040',
};
const cardTeaserKickerSpaceInline = headlineKickerInline;
const cardTeaserLeadSpaceStack = {
  lg: 'space050',
  md: 'space050',
  sm: 'space040',
  xs: 'space040',
};
const cardTeaserLeadInsetVariantSpaceStack = 'space000';
const cardActionsSpace = 'sizing040';

const cardTeaserKickerSmallTypePreset = 'heading010';
const cardTeaserHeadlineSmallTypePreset = 'heading010';
const cardTeaserLeadSmallTypePreset = 'body010';
const cardLabelSmallTypePreset = 'label010';
const cardTagSmallTypePreset = 'label010';

const cardTeaserKickerMediumTypePreset = 'heading030';
const cardTeaserHeadlineMediumTypePreset = 'heading030';
const cardTeaserLeadMediumTypePreset = 'body010';
const cardLabelMediumTypePreset = 'label010';
const cardTagMediumTypePreset = 'label010';

const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};
const headlineKicker = {
  base: {
    color: '{{colors.inkBrand010}}',
  },
};
const headlineContent = {
  base: {
    color: '{{colors.inkContrast}}',
  },
};
const tagPrimary = {
  base: {
    backgroundColor: '{{colors.transparent}}',
    borderStyle: 'solid',
    borderColor: '{{colors.interactive130}}',
    borderWidth: '{{borders.borderWidth010}}',
    color: '{{colors.inkBase}}',
    iconColor: '{{colors.inkBase}}',
    borderRadius: '{{borders.borderRadiusSharp}}',
  },
  hover: {
    backgroundColor: '{{colors.interactive120}}',
  },
  active: {
    borderWidth: '{{borders.borderWidth010}}',
  },
  current: {
    color: '{{colors.inkInverse}}',
    iconColor: '{{colors.inkInverse}}',
    backgroundColor: '{{colors.interactive130}}',
    borderStyle: 'none',
  },
};

const myCustomCardTheme = createTheme({
  name: 'my-custom-card-theme',
  overrides: {
    stylePresets: {
      cardLabel: labelDefault,
      cardTeaserHeadline: headlineContent,
      cardTeaserKicker: headlineKicker,
      cardTeaserLead: {
        base: {
          color: '{{colors.inkBase}}',
        },
      },
      cardTag: tagPrimary,

      // mocked card Containers
      cardContainer: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interface040}}',
          borderWidth: '{{borders.borderWidth010}}',
        },
      },
    },
  },
});

export {
  myCustomCardTheme,
  cardLabelSpaceStack,
  cardTeaserHeadlineSpaceStack,
  cardTeaserKickerSpaceInline,
  cardTeaserLeadSpaceStack,
  cardTeaserLeadInsetVariantSpaceStack,
  cardActionsSpace,
  cardTeaserKickerSmallTypePreset,
  cardTeaserHeadlineSmallTypePreset,
  cardTeaserLeadSmallTypePreset,
  cardLabelSmallTypePreset,
  cardTagSmallTypePreset,
  cardTeaserKickerMediumTypePreset,
  cardTeaserHeadlineMediumTypePreset,
  cardTeaserLeadMediumTypePreset,
  cardLabelMediumTypePreset,
  cardTagMediumTypePreset,
};
