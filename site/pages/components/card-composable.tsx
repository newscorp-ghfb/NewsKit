import React from 'react';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {OverridesRowsProps} from '../../components/component-api';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {UnorderedList, InlineMessage, LinkInline} from 'newskit';
import {Link} from '../../components/link';
import {InlineCode} from '../../components/markdown-elements';

const DividerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Card Composable',
      description:
        'Cards contain preview content and actions relating to a specific subject.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Card Composable',
      hero: {
        illustration: 'components/card-composable/hero',
      },
      introduction: `Cards contain preview content and actions relating to a specific subject.`,
    }}
    componentDefaultsKey="card-composable"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v7.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/NewsKit/tree/main/src/card-composable',
      storybookId: 'components-cardcomposable--story-default',
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
          component: 'Grid Layout',
          optional: undefined,
        },
        {
          name: 'CardLink',
          description:
            'Wrapper for links passed to the card, such as a headline. This can be used multiple times to create multiple links inside the card.',
          component: 'Link',
          optional: true,
        },
        {
          name: 'CardContent',
          description:
            'Area for content, such as a headline, paragraph text, or flags',
          component: 'Grid Layout',
          optional: true,
        },
        {
          name: 'CardMedia',
          description: 'Area for media, such as image',
          component: ['Image', 'Grid Layout'],
          optional: true,
        },
        {
          name: 'CardActions',
          description:
            'Area for additional interactive components, such as links or tags',
          component: 'Grid Layout',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/card-composable/anatomy'),
    }}
    options={{
      introduction: 'The card has options for different use cases:',
      cards: [
        {
          title: 'Card as a link',
          description: (
            <>
              A part or the whole card can be a link by using the{' '}
              <InlineCode>expand</InlineCode> prop.
            </>
          ),
          media: getIllustrationComponent(
            'components/card-composable/options/expand',
          ),
        },
        {
          title: 'Order',
          description:
            'The order in which the card areas appear can be changed at different breakpoints.',
          media: getIllustrationComponent(
            'components/card-composable/options/order',
          ),
        },
        {
          title: 'Span',
          description:
            'Card areas can be set to span any number of columns in the grid, or set to a percentage, allowing for custom layout ratios.',
          media: getIllustrationComponent(
            'components/card-composable/options/span',
          ),
        },
        {
          title: 'Inset',
          description: (
            <>
              Card areas can have inset space applied by using{' '}
              <Link href="/theme/foundation/spacing/">logical props</Link> to
              set the desired spacing.
            </>
          ),
          media: getIllustrationComponent(
            'components/card-composable/options/inset',
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
            'components/card-composable/behaviours/grid-layout',
          ),
        },
        {
          title: 'Static card',
          description:
            'If CardLink is not provided, the card will omit all interactive states from the style presets applied to the card, appearing static.',
          media: getIllustrationComponent(
            'components/card-composable/behaviours/static',
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
          media: getIllustrationComponent(
            'components/card-composable/usage/do-3',
          ),
        },
        {
          title: 'Don’t use excessive content',
          description: (
            <>
              Avoid including lots of information in a card, so users are not
              overwhelmed with excessive content. Include essential, summarised
              information that acts as a preview for the main content it
              represents.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/card-composable/usage/dont-1',
          ),
        },
        {
          title: 'Do use consistent elements when arranged in groups.',
          description: (
            <>Aim for consistency in cards that are part of a related group.</>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/card-composable/usage/do-2',
          ),
        },
        {
          title: 'Don’t use varying heights in a group of cards',
          description: (
            <>
              Avoid varying heights of cards when placed next to each other in a
              rail. Cards should all match the height of the largest card,
              taking up the available space i.e. not having different height
              cards.{' '}
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card">
                Reference: Card - CSS: Cascading Style Sheets | MDN
              </Link>
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/card-composable/usage/dont-2',
          ),
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
          media: getIllustrationComponent(
            'components/card-composable/usage/do-1',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The card has the following accessibility considerations:
          <UnorderedList
            markerAlign="start"
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
            }}
          >
            <>Use list markup to group your cards</>
            <>
              Each Card has a Heading level of the same level because they
              belong to a flat list hierarchy
            </>
            <>
              When grouping the cards in a List, add an appropriate heading for
              the Group or aria-label that describes the group
            </>
            <>
              Update the heading level based on the content of the page to make
              sure card headings are in the correct, logical order
            </>
            <>
              Avoid having 2 links to the same URL (in the same Card) like one
              for the Title and another for the Read More link (in that way we
              reduce the tab stops)
            </>
            <>
              When creating a tab order for the different parts of the card,
              remember to put the headline before the image or media so that
              screen-reader users get the context before the image alt tag
            </>
            <>A video: If a video is provided, ensure the following</>
          </UnorderedList>
          <UnorderedList
            markerAlign="start"
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginInlineStart: 'space050',
            }}
          >
            <>
              The video{' '}
              <Link href="https://bbc.github.io/gel/components/cards/#fn3">
                does not auto-play
              </Link>
            </>
            <>
              The video player&apos;s controls are accessible by a screen reader
              and keyboard
            </>
            <>Dialogue in the video is accompanied by closed captions</>
          </UnorderedList>
          <UnorderedList
            markerAlign="start"
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
            }}
          >
            <>
              It&apos;s not recommended to nest interactive elements like a
              button inside a link, or a link inside a button and so on
            </>
            <>
              Don&apos;t wrap the whole card in a Link, use the{' '}
              <InlineCode>expand</InlineCode> prop to make it interactive
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
      },
      infoNoticeFocus: [
        'Focus order depends on how the card areas are assembled and ordered in the DOM. The first interactive element of the card will be the first focusable item.',
      ],

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
              'Image alt text, if the image is not decorative. Alt text needs to be different from the card title',
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
              information can be crawled and indexed by search engines
            </>

            <>Allow all text to use schema markup (h tag or span).</>
            <>Ensure any media used has alt text applied</>
            <>
              When nesting other components in the card actions area make sure
              to follow those components SEO guidelines
            </>
            <>
              The content shown on-load should be optimised and labeled
              accordingly as standard. Should conform to best practice SEO
              techniques
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
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
          propsFooter: (
            <>
              <InlineMessage
                role="region"
                aria-label="LinkStandalone info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                Please refer to the component,{' '}
                <Link href="grid-layout/">grid layout</Link> and any elements
                passed to the zones of the card.
              </InlineMessage>
            </>
          ),
        },
        {
          title: 'CardContent',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'The card content…',
            },
          ],
        },
        {
          title: 'CardMedia',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: undefined,
              description:
                'The card media can have children in that case it will replace the default Image component.',
            },
            {
              name: 'media',
              type: 'ImageProps',
              required: undefined,
              description:
                'If this parameter is provided as ImageProps object (see Image documentation), it will render the media as an image.',
            },
          ],
        },
        {
          title: 'CardActions',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: 'The card actions children…',
            },
          ],
        },
        {
          title: 'CardLink',
          summary: 'Props & Overrides same as StandaloneLink',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              description:
                'The content of the LinkStandalone is passed as the child of the component.',
              required: true,
            },
            {
              name: 'href',
              type: 'string',
              description: (
                <>
                  If provided, the undefined link component turns into an anchor
                  element. The provided URL or fragment identifier will be
                  loaded when the link is clicked.
                  <br />
                  <br />
                  Note - a link requires a href property to be passed in.
                </>
              ),
              required: true,
            },
            {
              name: 'noCrop',
              type: 'boolean',
              description:
                'If true, the cropping applied to the LinkStandalone is removed.',
              default: 'false',
            },
            {
              name: 'eventContext',
              type: 'object',
              description: (
                <>
                  Allows users to add extra event data to a LinkStandalone&#39;s
                  click events.
                </>
              ),
            },
            {
              name: 'eventOriginator',
              type: 'string',
              description: (
                <>
                  Allows users to add event originator custom name e.g.
                  &#39;newskit-standalone-link&#39;.
                </>
              ),
              default: 'link',
            },
            {
              name: 'external',
              type: 'boolean',
              description: (
                <>
                  If true, renders the &apos;external&apos; icon next to the
                  LinkStandalone body content.
                  <br />
                  <br />
                  Note - when a LinkStandalone renders, it automatically checks
                  if the passed href is external or internal to the website
                  where the link is used. If the href is external, an icon
                  indicating this will be rendered after (trailing) the label.
                </>
              ),
            },
            {
              name: 'textOnly',
              type: 'boolean',
              description: (
                <>
                  Allows the link to break into multiple lines.
                  <br />
                  <br />
                  Note - when this is true custom icons can&apos;t be passed as
                  children to the LinkStandalone component. Custom icons can
                  still be added before or after the LinkStandalone component.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'linkInline',
              description:
                'If provided, overrides the stylePresets of the LinkStandalone.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel020',
              description:
                'If provided, overrides the typographyPreset of the LinkStandalone.',
            },
            {
              attribute: 'transitionPreset',
              type: 'MQ<string>',
              default: ['fontColorChange', 'iconColorChange'],
              description:
                'If provided, overrides the transitionPresets of the LinkStandalone.',
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'If provided overrides the gap between each element in the LinkStandalone. e.g. icon and text.',
            },
            {
              attribute: 'externalIcon.size',
              type: 'MQ<string>',
              default: 'iconSize010',
              description: (
                <>
                  If provided, overrides the size of the external icon, that
                  appears after (trailing) the label of the LinkStandalone.
                  <br />
                  <br />
                  Note - it is also possible to set the icon size by passing it
                  directly as a size prop to the icon. However, by doing this
                  you will override the <InlineCode>iconSize</InlineCode> passed
                  from overrides.
                </>
              ),
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Grid Layout'],
    }}
  />
);

export default DividerComponent;
