import React from 'react';
import {TitleBar, styled, Link, LinkInline, Paragraph} from 'newskit';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';

const PlaygroundContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const HeadlineComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof TitleBar>
    headTags={{
      title: 'Title bar',
      description:
        'The title bar provides a headline for the content below with optional supporting actions.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Title bar',
      hero: {
        illustration: 'components/title-bar/01-hero/hero',
      },
      introduction:
        'The title bar provides a headline for the content below with optional supporting actions.',
    }}
    componentDefaultsKey=""
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/title-bar',
      storybookId: 'components-title-bar--story-title-bar',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/(v4)-NK-Web-Components?node-id=4145%3A123621&t=7UUQdJ2TqSKpYWOY-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the title bar component, its variations, and configuration options.',
      playground: {
        componentName: 'TitleBar',
        component: props => (
          <PlaygroundContainer>
            <TitleBar
              {...props}
              actionItem={() => <Link href="/">Link</Link>}
            />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            propName: 'children',
            name: 'Children',
            value: 'Heading',
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The title bar contains two required elements and one optional element.',
      rows: [
        {
          name: 'Title',
          description: 'The text providing context to the following section',
          component: ['Headline'],
        },
        {
          name: 'Container',
          description:
            'Container of the title bar that contains the headline and action item',
          component: ['Block'],
        },
        {
          name: 'Action item',
          description: 'An optional action',
          component: [],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/title-bar/02-anatomy/anatomy',
      ),
    }}
    options={{
      introduction: 'The title bar has options for different use cases:',
      cards: [
        {
          title: 'Actions',
          description:
            "An action, such as a link, can be added to the title bar. They are positioned to the container's right,  aligned to the title.",
          media: getIllustrationComponent(
            'components/title-bar/03-options/actions',
          ),
        },
        {
          title: 'Width',
          description:
            'The container takes the entire width of the specified grid area, for example, 12 columns, six columns etc.',
          media: getIllustrationComponent(
            'components/title-bar/03-options/border',
          ),
        },
        {
          title: 'Border',
          description:
            'A border can be applied to the container to provide visual separation from the preceding or the following content.',
          media: getIllustrationComponent(
            'components/title-bar/03-options/heading-tag',
          ),
        },
        {
          title: 'Heading tag',
          description:
            "By default, the title is set to h3. The tag can be set to 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'.",
          media: getIllustrationComponent(
            'components/title-bar/03-options/width',
          ),
        },
      ],
    }}
    behaviors={{
      title: 'Behaviours',
      introduction:
        'The following guidance describes how the title bar behaves.',
      cards: [
        {
          title: 'Actions are hidden at the xs breakpoint.',
          description:
            'The action item is default hidden on an extra small (xs) breakpoint (below 480px). This allows the action to be placed at the bottom of the following content for an improved user experience.',
          media: getIllustrationComponent(
            'components/title-bar/04-behaviours/hidden',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to use the title bar component appropriately.',
      layout: '2-span',
      cards: [
        {
          title: 'Do use a title bar to create sections of content.',
          description:
            'Use a title bar to create content sections. Add a link to additional content if available.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/title-bar/05-usage/sections',
          ),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The title bar has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Action item',
            role: 'Focusses to the action item (if available)',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Enter'],
            description: 'Activates the action item (if available)',
          },
        ],
      },
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <>
          <Paragraph overrides={{typographyPreset: 'editorialParagraph030'}}>
            Title text should be set at the correct semantic level (e.g.{' '}
            <LinkInline
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern"
              target="_blank"
            >
              {'<h1>'} to {'<h6>'}
            </LinkInline>{' '}
            ) to enable crawlers to better index the page.
          </Paragraph>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Title bar',
          summary:
            'The title bar has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The title bar has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              description:
                'The content of the title is passed as the child of the component.',
              required: true,
            },
            {
              name: 'headingAs',
              type: 'h1 | h2 | h3 | h4 | h5 | h6 | span',
              description: (
                <>
                  The heading tag used for the title. It should be one of the
                  following strings:
                  <InlineCode>h1</InlineCode>, <InlineCode>h2</InlineCode>,{' '}
                  <InlineCode>h3</InlineCode>, <InlineCode>h4</InlineCode>,{' '}
                  <InlineCode>h5</InlineCode>, <InlineCode>h6</InlineCode>.
                </>
              ),
              default: 'h3',
            },
            {
              name: 'actionItem',
              type: 'React.ComponentType',
              description:
                'An action item, most commonly a button or a link, related to the title. The actionItem is hidden for extra small viewports (less than 480px).',
            },
            {
              name: 'hideActionItemOn',
              type: 'MQPartial<boolean>',
              description:
                'An object to specify in which breakpoints to hide the action item.',
              default: 'xs: true',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the style preset applied to the title bar.',
              default: 'titleBar',
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              description: (
                <>
                  If provided, applies padding to the title bar container.
                  <br />
                  Note that this property is deprecated.
                  <br />
                  Use the below logical padding props instead.
                </>
              ),
              default: ['xs: spaceInsetSquish030', 'lg: spaceInsetSquish040'],
            },
            {
              attribute: 'heading.typographyPreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the typography preset applied to the title bar heading.',
              default: [
                'xs: editorialHeadline050',
                'md: editorialHeadline070',
                'lg: editorialHeadline080',
              ],
            },
            {
              attribute: 'heading.stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, this overrides the style preset applied to the title bar heading.',
            },
            {
              attribute: 'logicalProps',
              type: 'MQ<string>',
              description:
                "Logical props can define either padding or margins, depending on the element's writing mode, directionality, or text orientation.",
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Link'],
    }}
  />
);

export default HeadlineComponent;
