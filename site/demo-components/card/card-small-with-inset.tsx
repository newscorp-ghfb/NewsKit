import * as React from 'react';
import {
  ThemeProvider,
  Grid,
  Cell,
  CardInset,
  TagSize,
  Block,
  TextBlock,
  Headline,
  Flag,
  Picture,
  Stack,
  Flow,
  Tag,
} from 'newskit';
import {
  myCustomCardTheme,
  cardLabelSpaceStack,
  cardTeaserHeadlineSpaceStack,
  cardTeaserKickerSpaceInline,
  cardTeaserLeadInsetVariantSpaceStack,
  cardActionsSpace,
  cardTeaserKickerSmallTypographyPreset,
  cardTeaserHeadlineSmallTypographyPreset,
  cardTeaserLeadSmallTypographyPreset,
  cardLabelSmallTypographyPreset,
  cardTagSmallTypographyPreset,
} from './common';

const cardSmallTags = () => (
  <Stack flow={Flow.HorizontalCenter} spaceInline={cardActionsSpace}>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
        typographyPreset: cardTagSmallTypographyPreset,
      }}
    >
      News
    </Tag>
    <Tag
      size={TagSize.Small}
      href="/"
      overrides={{
        stylePreset: 'cardTag',
        typographyPreset: cardTagSmallTypographyPreset,
      }}
    >
      Sport
    </Tag>
  </Stack>
);
export const CardSmallWithInset = () => (
  <Grid>
    <Cell xs={4}>
      <ThemeProvider theme={myCustomCardTheme}>
        <CardInset
          href="https://newskit.co.uk/"
          media={{
            src: '/static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block overrides={{spaceStack: cardLabelSpaceStack}}>
            <Flag
              overrides={{
                minHeight: '0',
                spaceInset: 'spaceInset000Squish',
                stylePreset: 'cardLabel',
                typographyPreset: cardLabelSmallTypographyPreset,
              }}
            >
              <Picture />
              IMAGE
            </Flag>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserHeadlineSpaceStack,
            }}
          >
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                heading: {
                  stylePreset: 'cardTeaserHeadline',
                  typographyPreset: cardTeaserHeadlineSmallTypographyPreset,
                },
                kicker: {
                  spaceInline: cardTeaserKickerSpaceInline,
                  stylePreset: 'cardTeaserKicker',
                  typographyPreset: cardTeaserKickerSmallTypographyPreset,
                },
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block
            overrides={{
              spaceStack: cardTeaserLeadInsetVariantSpaceStack,
            }}
          >
            <TextBlock
              overrides={{
                stylePreset: 'cardTeaserLead',
                typographyPreset: cardTeaserLeadSmallTypographyPreset,
              }}
            >
              The bank holiday weekend has seen some mixed weather, but as the
              sun emerged, many in the UK took the opportunity to make the most
              of the lockdown easing.
            </TextBlock>
          </Block>
        </CardInset>
      </ThemeProvider>
    </Cell>
  </Grid>
);
