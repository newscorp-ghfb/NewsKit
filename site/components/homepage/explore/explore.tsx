import * as React from 'react';
import {Block, Headline, TextBlock, GridLayout, Card} from 'newskit';
import {ContentPrimary} from '../../content-structure';
import {
  ExploreComponents,
  ExploreFoundations,
  ExplorePatterns,
} from '../../illustrations/landing-page';

const cardsContent = [
  {
    media: <ExploreFoundations />,
    title: 'Theme',
    href: '/theme/overview',
    description:
      'These standardised styles define the look and feel of UI components, e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: <ExploreComponents />,
    title: 'Components',
    href: '/components/overview',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility.',
  },
  {
    media: <ExplorePatterns />,
    title: 'Patterns',
    href: '/patterns/overview',
    description:
      'Design patterns provide a framework for solving a particular user problem in a consistent, considered way.',
  },
];

export const Explore = () => (
  <ContentPrimary headline="Explore">
    <GridLayout
      columns={{xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
      columnGap="space050"
    >
      {cardsContent.map(({media, title, href, description}) => (
        <Card
          key={href}
          href={href}
          media={() => media}
          overrides={{stylePreset: 'homepageCard'}}
        >
          <Block marginBlockEnd="space040">
            <Headline
              overrides={{
                typographyPreset: 'editorialHeadline020',
                heading: {stylePreset: 'exploreCardHeadline'},
              }}
            >
              {title}
            </Headline>
          </Block>
          <Block marginBlockEnd="space040">
            <TextBlock typographyPreset="editorialParagraph020">
              {description}
            </TextBlock>
          </Block>
        </Card>
      ))}
    </GridLayout>
  </ContentPrimary>
);
