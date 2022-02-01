import * as React from 'react';
import {getMediaQueryFromTheme} from '../../../../utils/responsive-helpers';
import {styled} from '../../../../utils/style';
import {Grid, Cell, Visible} from '../../../../grid';
import {Headline} from '../../../../headline';
import {Card} from '../../../../card';
import {TextBlock} from '../../../../text-block';
import {GridLayout} from '../../../grid-layout';
import {Divider} from '../../../../divider';

import {
  cardTeaserHeadline,
  cardTeaserLeadInset,
  cardTypographyPresets,
  LargeItemBody,
} from '../common';
import {Block} from '../../../../block';
import {StorybookHeading} from '../../../../test/storybook-comps';

const FixWidth = styled.div`
  margin: 0 auto;
  max-width: 420px;
  ${getMediaQueryFromTheme('md', 'lg')} {
    max-width: 620px;
  }
  ${getMediaQueryFromTheme('lg')} {
    max-width: 932px;
  }
`;

const SmallItem = () => (
  <>
    <Card
      layout="horizontal"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
      overrides={{
        horizontalRatio: '1:1',
      }}
    >
      <Headline
        kickerText="SHORT"
        overrides={{
          typographyPreset: 'editorialHeadline010',
        }}
      >
        title of the card describing the main content
      </Headline>
    </Card>
  </>
);

const LargeItem = () => (
  <>
    <Card
      layout="vertical"
      media={{
        src: '/placeholder-3x2.png',
        alt: 'Card Media',
      }}
    >
      <LargeItemBody>
        <Block spaceStack={cardTeaserHeadline}>
          <Headline kickerText="SHORT">
            title of the card describing the main content
          </Headline>
        </Block>
        <Block spaceStack={cardTeaserLeadInset}>
          <TextBlock
            stylePreset="cardTeaserLead"
            typographyPreset={cardTypographyPresets.cardTeaserLeadSmall}
          >
            A short paragraph description of the article, outlining the main
            story and focus.
          </TextBlock>
        </Block>
      </LargeItemBody>
    </Card>
  </>
);

export const TheSun = () => (
  <>
    <StorybookHeading>The Sun</StorybookHeading>
    <FixWidth>
      <Grid>
        <Cell xs="full-width" lg={8}>
          <LargeItem />
        </Cell>
        <Cell xs="full-width" lg={4}>
          <GridLayout
            rowGap={{xs: '10px', md: '20px', lg: '0'}}
            columnGap={{md: '20px'}}
            columns={{xs: '1fr', md: '1fr 1fr', lg: '1fr'}}
            justifyContent={{lg: 'stretch'}}
            alignContent={{lg: 'space-between'}}
            overrides={{height: '100%'}}
          >
            <SmallItem />
            <Visible sm lg>
              <Divider />
            </Visible>

            <SmallItem />

            <Visible sm lg>
              <Divider />
            </Visible>

            <SmallItem />

            <Visible sm lg>
              <Divider />
            </Visible>

            <SmallItem />
          </GridLayout>
        </Cell>
      </Grid>
    </FixWidth>
  </>
);
