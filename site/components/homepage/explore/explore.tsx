import * as React from 'react';
import {Headline, TextBlock, GridLayout, Card} from 'newskit';
import NextLink from 'next/link';
import {ContentPrimary} from '../../content-structure';
import {Illustration} from '../../illustrations/illustration-loader';

const cardsContent = [
  {
    media: (
      <Illustration
        viewBox="0 0 1344 759"
        path="landing-page/explore-foundations"
      />
    ),
    title: 'Theme',
    href: '/theme/overview',
    description:
      'These standardised styles define the look and feel of UI components, e.g. colours, fonts, shadows and sizing.',
  },
  {
    media: (
      <Illustration
        viewBox="0 0 1344 759"
        path="landing-page/explore-components"
      />
    ),
    title: 'Components',
    href: '/components/overview',
    description:
      'NewsKit’s flexible UI components are built to best practices to ensure usability, performance and accessibility.',
  },
  {
    media: (
      <Illustration
        viewBox="0 0 1344 759"
        path="landing-page/explore-patterns"
      />
    ),
    title: 'Patterns',
    href: '/patterns/overview',
    description:
      'Design patterns provide a framework for solving a particular user problem in a consistent, considered way.',
  },
];

export const Explore = () => (
  <ContentPrimary hideBottomSpacing headline="Explore">
    <GridLayout
      columns={{xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
      columnGap="space050"
    >
      {cardsContent.map(({media, title, href, description}) => (
        <NextLink legacyBehavior href={href} passHref>
          <Card
            key={href}
            href={href}
            media={() => media}
            overrides={{
              stylePreset: 'homepageCard',
              marginBlockEnd: {xs: 'space080', md: 'space000'},
            }}
          >
            <Headline
              overrides={{
                marginBlockEnd: 'space040',
                typographyPreset: 'editorialHeadline020',
                heading: {stylePreset: 'exploreCardLink'},
              }}
            >
              {title}
            </Headline>
            <TextBlock
              marginBlockEnd="space040"
              typographyPreset="editorialParagraph020"
            >
              {description}
            </TextBlock>
          </Card>
        </NextLink>
      ))}
    </GridLayout>
  </ContentPrimary>
);
