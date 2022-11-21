import * as React from 'react';
import {Card, GridLayout, Headline, LinkStandalone, TextBlock} from 'newskit';
import {Illustration} from '../../illustrations/illustration-loader';
import {IconFilledLaunch} from '../../../../src/icons';
import {ContentPrimary} from '../../content-structure';

const keepInTouchContent = [
  {
    title: 'GitHub',
    url: 'https://github.com/newscorp-ghfb/newskit',
    description: 'Contribute, request features and report bugs.',
    icon: () => (
      <Illustration viewBox="0 0 1490 547" path="landing-page/github" />
    ),
  },
  {
    title: 'Storybook',
    url: 'https://storybook.newskit.co.uk/',
    description: 'Take a look at our UI components.',
    icon: () => (
      <Illustration viewBox="0 0 1493 547" path="landing-page/storybook" />
    ),
  },
  {
    title: 'Blog',
    url: 'https://medium.com/newskit-design-system',
    description: 'Hear what our team’s been up to.',
    icon: () => (
      <Illustration viewBox="0 0 1490 547" path="landing-page/medium" />
    ),
  },
];

export const KeepInTouch = () => (
  <ContentPrimary hideBottomSpacing headline="Keep in touch">
    <GridLayout
      columns={{xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
      columnGap="space090"
      overrides={{marginBlockEnd: 'space080'}}
    >
      {keepInTouchContent.map(({title, url, description, icon}) => (
        <Card
          overrides={{
            mediaContainer: {spaceInline: 'space000'},
            stylePreset: 'homepageCard',
          }}
          key={url}
          media={icon}
          actions={() => (
            <LinkStandalone
              external={false}
              href={url}
              target="_blank"
              overrides={{stylePreset: 'keepInTouchLink'}}
            >
              Explore {title}
              <IconFilledLaunch overrides={{size: 'iconSize010'}} />
            </LinkStandalone>
          )}
        >
          <Headline
            overrides={{
              typographyPreset: 'editorialHeadline020',
              marginBlockEnd: 'space040',
            }}
          >
            {title}
          </Headline>
          <TextBlock
            typographyPreset="editorialParagraph020"
            marginBlockEnd="space040"
          >
            {description}
          </TextBlock>
        </Card>
      ))}
    </GridLayout>
  </ContentPrimary>
);
