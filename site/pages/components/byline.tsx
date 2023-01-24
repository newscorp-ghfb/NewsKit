import React from 'react';
import {styled, Byline} from 'newskit';
import {BylineProps} from '../../../src/byline/types';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const BYLINE_DATA = [
  {
    author: 'Alex Lowe',
    href: 'https://www.thetimes.co.uk/profile/alex-lowe',
    title: 'Deputy Rugby Correspondent',
  },
  {
    author: 'Tom Knowles',
    href: 'https://www.thetimes.co.uk/profile/tom-knowles',
    title: 'West Coast Technology Reporter',
    location: 'London',
  },
  {
    author: 'David Aaronovitch',
    href: 'https://www.thetimes.co.uk/profile/david-aaronovitch',
    title: 'Columnist',
  },
];

const DividerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Byline',
      description:
        'A byline is a line of text that lists the authors of an article, with options to add author’s title, location and link.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Byline',
      hero: {
        illustration: 'components/byline-illustration',
      },
      introduction: `A byline is a line of text that lists the authors of an article, with options to add author’s title, location and link.`,
    }}
    componentDefaultsKey="divider"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.18.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/byline',
      storybookId: 'components-byline--story-byline-default',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the byline component, its variations, and configuration options.',
      playground: {
        componentName: 'Byline',
        component: ((props: BylineProps) => (
          <PlaygroundContainer>
            <Byline {...(props as BylineProps)} />
          </PlaygroundContainer>
        )) as React.ComponentType,
        knobs: [
          {
            name: 'Byline Data',
            propName: 'bylineData',
            value: BYLINE_DATA,
          },
          {
            name: 'Typography Preset Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  typographyPreset: 'utilityMeta020',
                  link: {
                    typographyPreset: 'utilityMeta020',
                  },
                },
                isDefault: true,
              },
              {
                label: 'utilityButton020',
                value: {
                  typographyPreset: 'utilityButton020',
                  link: {
                    typographyPreset: 'utilityButton020',
                  },
                },
              },
            ],
          },
          {
            name: 'Style Preset Overrides',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  stylePreset: 'inkBase',
                },
                isDefault: true,
              },
              {
                label: 'inkPositive',
                value: {
                  stylePreset: 'inkPositive',
                },
              },
              {
                label: 'inkNegative',
                value: {
                  stylePreset: 'inkNegative',
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The byline contains one required element and one optional element.',
      rows: [
        {
          name: 'Byline',
          description:
            'The author’s name. Option to provide the author’s title and location, and pass an href property to link from the author’s name.',
          component: 'Text Block',
          optional: undefined,
        },
        {
          name: 'Divider',
          description: 'Vertical divider that visually separates each author',
          component: 'Divider',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/byline/anatomy/anatomy'),
    }}
    options={{
      introduction: 'The byline has options for different use cases:',
      cards: [
        {
          title: 'Author’s title',
          description:
            'Option to add the author’s title, following their name.',
          media: getIllustrationComponent(
            'components/byline/options/job-title',
          ),
        },
        {
          title: 'Author’s location',
          description:
            'Option to add the author’s location, following their name and title.',
          media: getIllustrationComponent('components/byline/options/location'),
        },
        {
          title: 'Divider',
          description:
            'A vertical divider between each author allows visual separation.',
          media: getIllustrationComponent('components/byline/options/divider'),
        },
        {
          title: 'Link',
          description: (
            <>
              If supplied, adds a link to the author’s name. This typically goes
              to the author’s page.
              <br />
              <br />
              If the link is external, the external link trailing icon is shown.
            </>
          ),
          media: getIllustrationComponent('components/byline/options/link'),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how the byline behaves.',
      cards: [
        {
          title: 'Breaks responsively',
          description:
            'When viewed responsively, the byline breaks onto a new line for each author.',
          media: getIllustrationComponent(
            'components/byline/behaviours/responsive',
          ),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The byline has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Byline',
            role: 'Focusses to the first link, if a link is supplied',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the byline, moves focus to the first author link. If focus is on an active author link, moves focus to the next author link, or the next element in the keyboard focus.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Byline',
            attribute: 'ariaLabel',
            value: '',
            description:
              'The author’s name does not describe where the link is taking the user. Adding an ariaLabel can provide more context.',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction:
        'The byline has a range of props that can be used to define an appropriate experience for different use cases.',
      components: [
        {
          title: 'Byline',
          propsRows: [
            {
              name: 'bylineData',
              type: 'BylineData[]',
              required: true,
              description: (
                <>
                  An array of data to populate the byline authors. Byline data
                  objects must contain an author string, and can contain
                  optional href, title and location strings. An optional
                  ariaLabel can provide more context to the link destination.
                  <br />
                  <br />
                  <InlineCode>
                    BylineData &#123; <br />
                    &emsp;author: string; <br />
                    &emsp;href?: string;
                    <br />
                    &emsp;title?: string; <br />
                    &emsp;location?: string; <br />
                    &emsp;ariaLabel?: string; <br />
                    &emsp;key?: string | number;
                    <br />
                    &#125;
                  </InlineCode>
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description:
                'If provided, this overrides the style preset of the component',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta020',
              description:
                'If provided, this overrides the typography preset of the component',
            },
            {
              attribute: 'spaceStack (deprecated)',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the vertical space between each line when the bylines items wrap onto a new line',
            },
            {
              attribute: 'link.stylePreset',
              type: 'MQ<string>',
              default: 'linkInline',
              description:
                'If provided, this overrides the style preset applied to the passed link',
            },
            {
              attribute: 'link.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta020',
              description:
                'If provided, this overrides the typography preset applied to the passed link',
            },
            {
              attribute: 'divider.stylePreset',
              type: 'MQ<string>',
              default: 'inkNonEssential',
              description:
                'If provided, this overrides the style preset applied to the divider',
            },
            {
              attribute: 'divider.spaceInline (deprecated)',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, this overrides the horizontal space between the divider and the text',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Text Block'],
    }}
  />
);

export default DividerComponent;
