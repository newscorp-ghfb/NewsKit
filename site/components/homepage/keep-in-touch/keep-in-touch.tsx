import * as React from 'react';
import {
  Block,
  Card,
  GridLayout,
  Headline,
  LinkStandalone,
  Tag,
  TextBlock,
} from 'newskit';
import {SectionIntroductionGrid} from '../../section-introduction-grid';
import {IconFilledChevronRight} from '../../../../src/icons';
import {Github, Storybook, Medium} from '../../illustrations/landing-page';

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
    description: 'Hear what our team’s been up to',
    icon: () => <Medium />,
  },
];

export const KeepInTouch = () => (
  <>
    <SectionIntroductionGrid title="Keep in touch" />
    <GridLayout columns={{xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}}>
      {keepInTouchContent.map(({title, url, description, icon}) => (
        <Card
          overrides={{mediaContainer: {spaceInline: 'space000'}}}
          key={url}
          media={icon}
          actions={() => (
            <Tag
              overrides={{
                paddingInline: 'space000',
                stylePreset: 'tagKeepInTouch',
              }}
            >
              <LinkStandalone external={false} href={url}>
                Explore {title}
              </LinkStandalone>

              <IconFilledChevronRight overrides={{size: 'iconSize010'}} />
            </Tag>
          )}
        >
          <Block marginBlockEnd="space040">
            <Headline overrides={{typographyPreset: 'editorialHeadline020'}}>
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
  </>
);
