import * as React from 'react';
import {
  ThemeProvider,
  createTheme,
  Grid,
  Cell,
  Card,
  TextBlock,
  Block,
  Headline,
  Flag,
  Tag,
  Stack,
  toNewsKitIcon,
} from 'newskit';

import {Image as FilledImage} from '@emotion-icons/material/Image';

const IconFilledImage = toNewsKitIcon(FilledImage);

const myCustomCardTheme = createTheme({
  name: 'my-custom-card-theme',
  overrides: {
    stylePresets: {
      cardLabel: {
        base: {
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
      },
    },
  },
});

const cardMediumTags = () => (
  <Stack flow="horizontal-center" spaceInline="space040">
    <Tag size="medium" href="#">
      News
    </Tag>
    <Tag size="medium" href="#">
      Sport
    </Tag>
  </Stack>
);

export const CardVerticalMediumWithoutInset = () => (
  <Grid>
    <Cell xs={6}>
      <ThemeProvider theme={myCustomCardTheme}>
        <Card
          href="#"
          media={{
            src: 'static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardMediumTags}
        >
          <Block spaceStack="space020">
            <Flag
              overrides={{
                spaceInset: 'spaceInsetSquish000',
                stylePreset: 'cardLabel',
                typographyPreset: 'utilityLabel010',
              }}
            >
              <IconFilledImage />
              IMAGE
            </Flag>
          </Block>

          <Block
            spaceStack={{
              xs: 'space040',
              sm: 'space040',
              md: 'space045',
              lg: 'space050',
            }}
          >
            <Headline
              kickerText="CROWDS HEAD"
              overrides={{
                typographyPreset: 'editorialHeadline030',
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>

          <Block
            spaceStack={{
              xs: 'space040',
              sm: 'space040',
              md: 'space050',
              lg: 'space050',
            }}
          >
            <TextBlock typographyPreset="editorialParagraph020">
              The bank holiday weekend has seen some mixed weather, but as the
              sun emerged, many in the UK took the opportunity to make the most
              of the lockdown easing.
            </TextBlock>
          </Block>
        </Card>
      </ThemeProvider>
    </Cell>
  </Grid>
);
