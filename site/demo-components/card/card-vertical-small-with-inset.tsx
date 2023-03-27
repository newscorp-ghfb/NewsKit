import * as React from 'react';
import {
  ThemeProvider,
  createTheme,
  Grid,
  Cell,
  CardInset,
  Block,
  TextBlock,
  Headline,
  Flag,
  Stack,
  Tag,
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

const cardSmallTags = () => (
  <Stack flow="horizontal-center" spaceInline="space040">
    <Tag size="small" href="#">
      News
    </Tag>
    <Tag size="small" href="#">
      Sport
    </Tag>
  </Stack>
);

export const CardVerticalSmallWithInset = () => (
  <Grid>
    <Cell xs={4}>
      <ThemeProvider theme={myCustomCardTheme}>
        <CardInset
          href="#"
          media={{
            src: 'static/placeholder-3x2.png',
            alt: 'Card Media',
          }}
          actions={cardSmallTags}
          overrides={{
            stylePreset: 'cardContainer',
          }}
        >
          <Block spaceStack="space020">
            <Flag
              overrides={{
                paddingInline: 'space000',
                paddingBlock: 'space000',
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
                typographyPreset: 'editorialHeadline010',
              }}
            >
              outdoors as bank holiday temps soar above 20 degrees
            </Headline>
          </Block>
          <TextBlock typographyPreset="editorialParagraph010">
            The bank holiday weekend has seen some mixed weather, but as the sun
            emerged, many in the UK took the opportunity to make the most of the
            lockdown easing.
          </TextBlock>
        </CardInset>
      </ThemeProvider>
    </Cell>
  </Grid>
);
