import {createTheme} from 'newskit';

// Spacing presets
const cardLabelSpaceStack = 'space020';
const cardTeaserHeadlineSpaceStack = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};
const cardTeaserLeadSpaceStack = {
  xs: 'space040',
  sm: 'space040',
  md: 'space050',
  lg: 'space050',
};
const cardTeaserLeadInsetVariantSpaceStack = 'space000';
const cardActionsSpace = 'space040';

// Typography presets
const cardTeaserHeadlineSmallTypographyPreset = 'editorialHeadline010';
const cardTeaserLeadSmallTypographyPreset = 'editorialParagraph010';
const cardLabelSmallTypographyPreset = 'utilityLabel010';
const cardTagSmallTypographyPreset = 'utilityLabel010';

const cardTeaserHeadlineMediumTypographyPreset = 'editorialHeadline030';
const cardTeaserLeadMediumTypographyPreset = 'editorialParagraph020';
const cardLabelMediumTypographyPreset = 'utilityLabel010';
const cardTagMediumTypographyPreset = 'utilityLabel010';

// Style presets
const labelDefault = {
  base: {
    color: '{{colors.inkSubtle}}',
    iconColor: '{{colors.inkSubtle}}',
  },
};

const myCustomCardTheme = createTheme({
  name: 'my-custom-card-theme',
  overrides: {
    stylePresets: {
      cardLabel: labelDefault,
      cardTeaserLead: {
        base: {
          color: '{{colors.inkBase}}',
        },
      },
    },
  },
});

export {
  myCustomCardTheme,
  cardLabelSpaceStack,
  cardTeaserHeadlineSpaceStack,
  cardTeaserLeadSpaceStack,
  cardTeaserLeadInsetVariantSpaceStack,
  cardActionsSpace,
  cardTeaserHeadlineSmallTypographyPreset,
  cardTeaserLeadSmallTypographyPreset,
  cardLabelSmallTypographyPreset,
  cardTagSmallTypographyPreset,
  cardTeaserHeadlineMediumTypographyPreset,
  cardTeaserLeadMediumTypographyPreset,
  cardLabelMediumTypographyPreset,
  cardTagMediumTypographyPreset,
};
