/* eslint-disable no-console */
import * as React from 'react';
import {Block} from '../../block';
import {IconFilledImage} from '../../icons';
import {Flag} from '../../flag';
import {CardMedia} from '../Components/CardMedia';
import {CardContent} from '../Components/CardContent';
import {GridLayout, GridLayoutItem} from '../../grid-layout';
import {TextBlock} from '../../text-block';
export default {
  title: 'Components/Card-composable',
  component: () => 'None',
};

const cardLabel = 'space040';
const cardTeaserHeadline = {
  xs: 'space040',
  sm: 'space040',
  md: 'space045',
  lg: 'space050',
};
const cardTeaserLead = {
  xs: 'space040',
  sm: 'space040',
  md: 'space050',
  lg: 'space050',
};
const cardTeaserLeadInset = 'space010';
const cardTeaserLeadInsetVariant = 'space000';
const cardActions = 'space030';

// Typography Presets
const cardTypographyPresets: {[index: string]: string} = {
  cardTeaserHeadlineLarge: 'editorialHeadline050',
  cardTeaserHeadlineMedium: 'editorialHeadline030',
  cardTeaserHeadlineSmall: 'editorialHeadline010',

  cardTeaserLeadLarge: 'editorialParagraph030',
  cardTeaserLeadMedium: 'editorialParagraph020',
  cardTeaserLeadSmall: 'editorialParagraph010',

  cardLabelLarge: 'utilityLabel020',
  cardLabelMedium: 'utilityLabel010',
  cardLabelSmall: 'utilityLabel010',

  cardTagLarge: 'utilityLabel020',
  cardTagMedium: 'utilityLabel010',
  cardTagSmall: 'utilityLabel010',
};

export const StoryCardMedia = () => {
  return (
    <GridLayout
      columns="auto auto 40px 1fr auto auto"
      columnGap="space040"
      alignItems="center"
    >
      <GridLayoutItem column="1" row="1">
        <CardMedia
        layout="horizontal-reverse"
        media={{
            src: '/placeholder-2x3.png',
            alt: 'Card Media',
          }}
        />
        <CardContent>
        <Block>
            <Block spaceStack={cardLabel}>
              <Flag
                overrides={{
                  spaceInset: 'spaceInsetSquish000',
                  stylePreset: 'cardLabel',
                  typographyPreset: cardTypographyPresets.cardLabelSmall,
                  minHeight: 'sizing000',
                }}
              >
                <IconFilledImage />
                IMAGE
              </Flag>
            </Block>
            <Block spaceStack={cardTeaserLead}>
              <TextBlock
                stylePreset="headlineHeadingInteractive"
                typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
              >
                A short paragraph description of the article, outlining the main
                story and focus.
              </TextBlock>
            </Block>
          </Block>
        </CardContent>
      </GridLayoutItem>
    </GridLayout>
  );
};
StoryCardMedia.storyName = 'Card Media';
StoryCardMedia.parameters = {
  percy: {
    waitForSelector: '#storyStoryCardMediaReady',
  },
};