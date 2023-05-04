import React from 'react';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {UnorderedList} from 'newskit';

const DividerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Card Composable',
      description:
        'Cards contain preview content and actions relating to a specific subject.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Card Composable',
      hero: {
        illustration: 'components/divider-illustration',
      },
      introduction: `Cards contain preview content and actions relating to a specific subject.`,
    }}
    componentDefaultsKey="divider"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v7.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/NewsKit/tree/main/src/card-composable',
      figmaUrl:
        'https://www.figma.com/file/MkU4xtY2yPcCpfhzQCuSnK/v5.3-%F0%9F%9F%A2-NewsKit-component-library?node-id=15173-225586&t=jmEqNiut63zVBEtL-0',
    }}
    anatomy={{
      introduction:
        'The card is a composable component. It is responsible for maintaining the card state, and containing and receiving interactions from the areas of the card. It is the wrapper for the areas listed below:',
      rows: [
        {
          name: 'CardComposable',
          description: 'Wrapper for the areas of the card',
          component: ['Grid layout'],
          optional: undefined,
        },
        {
          name: 'CardLink',
          description:
            'Wrapper for links passed to the card, such as a headline. This can be used multiple times to create multiple links inside the card.',
          component: ['LinkStandalone'],
          optional: true,
        },
        {
          name: 'CardContent',
          description:
            'Area for content, such as a headline, paragraph text, or flags',
          component: ['Grid layout'],
          optional: true,
        },
        {
          name: 'CardMedia',
          description: 'Area for media, such as image',
          component: ['Image', 'Grid layout'],
          optional: true,
        },
        {
          name: 'CardActions',
          description:
            'Area for additional interactive components, such as links or tags',
          component: ['Grid layout'],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/divider/anatomy-illustration',
      ),
    }}
    options={{
      introduction: 'The card has options for different use cases:',
      cards: [
        {
          title: 'Card as a link',
          description:
            'A part or the whole card can be a link by using the //expand// prop.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
        {
          title: 'Span',
          description:
            'Card areas can be set to span any number of columns in the grid, or set to a percentage, allowing for custom layout ratios.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
        {
          title: 'Card as a link',
          description:
            'A part or the whole card can be a link by using the //expand// prop.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
        {
          title: 'Inset',
          description:
            'Card areas can have inset space applied by using logical props to set the desired spacing.',
          media: getIllustrationComponent(
            'components/divider/orientation-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the card behaves:',
      cards: [
        {
          title: 'Grid layout',
          description:
            'The card uses the grid layout component to give layout control across breakpoints and any elements passed to the areas of the card.',
          media: getIllustrationComponent(
            'components/banner/banner-behaviours-text-overflow-illustration',
          ),
        },
        {
          title: 'Static card',
          description:
            'If CardLink is not provided, the card will omit all interactive states from the style presets applied to the card, appearing static.',
          media: getIllustrationComponent(
            'components/banner/banner-behaviours-text-overflow-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the card:',
      cards: [
        {
          title: 'Do have clear and succinct card headings',
          description: (
            <>Headings should be concise and briefly explain the content.</>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/divider/do-01'),
        },
        {
          title: 'Don&apos;t use excessive content',
          description: (
            <>
              Avoid including lots of information in a card, so users are not
              overwhelmed with excessive content. Include essential, summarised
              information that acts as a preview for the main content it
              represents.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/divider/do-01'),
        },
        {
          title: 'Do use consistent elements when arranged in groups.',
          description: (
            <>Aim for consistency in cards that are part of a related group.</>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/divider/do-01'),
        },
        {
          title: 'Don’t use varying heights in a group of cards',
          description: (
            <>
              Avoid varying heights of cards when placed next to each other in a
              rail. Cards should all match the height of the largest card,
              taking up the available space i.e. not having different height
              cards. Reference: Card - CSS: Cascading Style Sheets | MDN
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/divider/do-01'),
        },
        {
          title: 'Do ensure the content in the card represents its destination',
          description: (
            <>
              The information contained within a card should always be related
              to the content it represents.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/divider/do-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The card has the following accessibility considerations:
          {/* <UnorderedList
          markerAlign="start"
          overrides={{
            marginBlockStart: 'space030',
            spaceStack: 'space050',
            content: {
              typographyPreset: 'editorialParagraph020',
            },
            marker: {
              spaceInline: 'space030',
            },
          }}
        >
          <>
          Use list markup to group your cards
          </>
          <>
Each Card has a Heading level of the same level because they belong to a flat list hierarchy.
          </>
          <>
When grouping the cards in a List, add an appropriate heading for the Group or aria-label that describes the group
          </><>
Update the heading level based on the content of the page to make sure card headings are in the correct, logical order.
          </><>
          Avoid having 2 links to the same URL (in the same Card) like one for the Title and another for the Read More link (in that way we reduce the tab stops)
          </><>
When creating a tab order for the different parts of the card, remember to put the headline before the image or media so that screen-reader users get the context before the image alt tag.
          </><>
A video: If a video is provided, ensure the following
<UnorderedList markerAlign="start"
          overrides={{
            marginBlockStart: 'space030',
            spaceStack: 'space050',
            content: {
              typographyPreset: 'editorialParagraph020',
            },
            marker: {
              spaceInline: 'space030',
            },
          }}>
  <>The video does not auto-play</>
  <>The video player's controls are accessible by a screen reader and 'ard</>
  <>Dialogue in the video is accompanied by closed captions</>
  </UnorderedList>
  </><>
          It's not recommended to nest interactive elements like a button inside a link, or a link inside a button and so on.

          </><>
          Don’t wrap the whole card in a Link, use //expand//prop to make it look like it.
          </>
        </UnorderedList> */}
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        description: (
          <>
            Position the close button on the right (default) or left of the
            modal header.
            {/* <InlineMessage role="region"
            // icon={infoIcon}
                overrides={{
                  marginBlockStart: 'space030',
                }}>Focus order depends on how the card areas are assembled and ordered in the DOM. The first interactive element of the card will be the first focusable item.</InlineMessage> */}
          </>
        ),
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: 'Change focus on the card and subsequent actions',
          },
          {
            command: ['Return'],
            description:
              'Select the card and actions, if any are actions passed to the CardActions area',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'CardMedia',
            attribute: 'alt',
            value: 'string',
            description:
              'Alt of the image when the image is not decorative, it needs to be different from card title.',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO considerations',
      introduction: (
        <>
          <UnorderedList
            markerAlign="start"
            overrides={{
              marginBlockStart: 'space030',
              spaceStack: 'space050',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marker: {
                spaceInline: 'space030',
              },
            }}
          >
            <>
              Ensure all text, icons, and images are visible in the card so
              information can be crawled and indexed by search engines.
            </>

            <>Allow all text to use schema markup (h tag or span).</>
            <>Ensure any media used has alt text applied.</>
            <>
              When nesting other components in the card actions area make sure
              to follow those components SEO guidelines.
            </>
            <>
              The content shown on-load should be optimised and labeled
              accordingly as standard. Should conform to best practice SEO
              techniques.
            </>
          </UnorderedList>
        </>
      ),
    }}
    componentAPI={{
      introduction: (
        <>
          The card has a range of props to define the experience in different
          use cases, and a range of predefined elements and attributes that you
          can override to define their appearance.
        </>
      ),
      components: [
        {
          title: 'CardComposable',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description:
                'The card requires to have at least a heading provided.',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<String>',
              default: 'cardContainer',
              description:
                'If provided, overrides the stylePreset of the card.',
            },
            {
              attribute: 'transitionPreset',
              type: 'String | String[]',
              default: 'backgroundColorChange',
              description: '',
            },
            {
              attribute: 'marginInline',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginInlineStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginInlineEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlock',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlockStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlockEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInline',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start and end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInlineStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInlineEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlock',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start and end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlockStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlockEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block end padding of the container. Can be used on breakpoints',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
        {
          title: 'CardContent',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description:
                'The card requires to have at least a heading provided.',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<String>',
              default: 'cardContainer',
              description:
                'If provided, overrides the stylePreset of the card.',
            },
            {
              attribute: 'transitionPreset',
              type: 'String | String[]',
              default: 'backgroundColorChange',
              description: '',
            },
            {
              attribute: 'marginInline',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginInlineStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginInlineEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlock',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlockStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'marginBlockEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInline',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start and end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInlineStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline start padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingInlineEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical inline end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlock',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start and end padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlockStart',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block start padding of the container. Can be used on breakpoints',
            },
            {
              attribute: 'paddingBlockEnd',
              type: 'MQ<string>',
              default: '',
              description:
                'Takes one space token to specify the logical block end padding of the container. Can be used on breakpoints',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Block', 'Drawer', 'Modal', 'Structured List'],
    }}
  />
);

export default DividerComponent;
