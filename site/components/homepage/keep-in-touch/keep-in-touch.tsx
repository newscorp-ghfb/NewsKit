import * as React from 'react';
import {Card, GridLayout, Headline, LinkStandalone, TextBlock} from 'newskit';
import {IconFilledLaunch} from '../../../../src/icons';
import {Github, Storybook, Medium} from '../../illustrations/landing-page';
import {ContentPrimary} from '../../content-structure';

const keepInTouchContent = [
  {
    title: 'GitHub',
    url: 'https://github.com/newscorp-ghfb/newskit',
    description: 'Contribute, request features and report bugs.',
    icon: () => <Github />,
  },
  {
    title: 'Storybook',
    url: 'https://storybook.newskit.co.uk/',
    description: 'Take a look at our UI components.',
    icon: () => <Storybook />,
  },
  {
    title: 'Blog',
    url: 'https://medium.com/newskit-design-system',
    description: 'Hear what our team’s been up to.',
    icon: () => <Medium />,
  },
];

export const KeepInTouch = () => (
  <ContentPrimary hideBottomSpacing headline="Keep in touch">
    <GridLayout
      columns={{xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}
      columnGap="space090"
    >
      {keepInTouchContent.map(({title, url, description, icon}) => (
        <Card
          overrides={{mediaContainer: {spaceInline: 'space000'}}}
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
