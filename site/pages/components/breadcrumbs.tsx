import React from 'react';
import {
  UnorderedList,
  InlineMessage,
  toNewsKitIcon,
  Breadcrumbs,
  styled,
  BreadcrumbItem,
  BreadcrumbsProps,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {UsageKind} from '../../components/usage-card';
import {IconFilledCircle} from '../../components/icons';
import {Link} from '../../components/link';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
  commonLogicalProps,
} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const PlaygroundContainer = styled.div`
  display: flex;
  & > nav {
    width: 500px;
  }
`;

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const BreadcrumbsComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Breadcrumbs',
      description: 'Breadcrumbs are used for secondary navigation.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Breadcrumbs',
      hero: {
        illustration: 'components/breadcrumbs/hero',
      },
      introduction: `Breadcrumbs are used for secondary navigation.`,
    }}
    componentDefaultsKey="breadcrumbs"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v6.5.2',
      introducedLink: false,
      storybookId: 'components-breadcrumbs--story-default',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/breadcrumbs',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the breadcrumbs component variations, and configuration options.',
      playground: {
        componentName: 'Breadcrumbs',
        component: (props: BreadcrumbsProps) => (
          <PlaygroundContainer>
            <Breadcrumbs {...props}>
              <BreadcrumbItem href="http://newskit.co.uk">
                Breadcrumb item
              </BreadcrumbItem>
              <BreadcrumbItem href="http://newskit.co.uk">
                Breadcrumb item
              </BreadcrumbItem>
              <BreadcrumbItem href="http://newskit.co.uk">
                Breadcrumb item{' '}
              </BreadcrumbItem>
            </Breadcrumbs>
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Size',
            propName: 'size',
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
                isDefault: true,
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
        ],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
    }}
    anatomy={{
      introduction: 'Breadcrumbs contain three required elements.',
      rows: [
        {
          name: 'Breadcrumbs',
          description: 'Combines a number of ‘breadcrumb items’ and separators',
          component: ['Ordered list'],
        },
        {
          name: 'Breadcrumb item',
          description: 'Includes a label and an icon',
          component: ['Button (as a link)'],
        },
        {
          name: 'Separator',
          description: 'Visual separator that appears after ‘breadcrumb items’',
          component: ['Icon'],
        },
      ],
      media: getIllustrationComponent('components/breadcrumbs/anatomy'),
    }}
    options={{
      introduction:
        'Breadcrumbs have options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of breadcrumb items: small, medium, and large.',
          media: getIllustrationComponent(
            'components/breadcrumbs/options/size',
          ),
        },
        {
          title: 'Separator',
          description: (
            <>
              The separator can be customised to use an alternative component,
              or the icon overridden.
              <br />
              <br />
              Separators are non-interactive.
              <br />
              <br />
              The last trailing separator can be set to be visible via the{' '}
              <InlineCode>showTrailingSeparator prop.</InlineCode>
            </>
          ),
          media: getIllustrationComponent(
            'components/breadcrumbs/options/separator',
          ),
        },
      ],
    }}
    states={{
      introduction:
        'Breadcrumbs have states including, base, selected, hover, active, and focus. By default, the selected breadcrumb item is non-interactive.',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description:
            'Breadcrumb items have a base state. This is the base style of the breadcrumb item before it has been interacted with by a user.',
          media: getIllustrationComponent('components/breadcrumbs/states/base'),
        },
        {
          title: 'Selected',
          description:
            'The selected breadcrumb item (current) is non-interactive and appears visually in a selected state.',
          media: getIllustrationComponent(
            'components/breadcrumbs/states/selected',
          ),
        },
        {
          title: 'Hover',
          description:
            'Breadcrumb items have a hover state. The style of the breadcrumb item changes to visually communicate and provide feedback to the user that the breadcrumb item is an interactive element.',
          media: getIllustrationComponent(
            'components/breadcrumbs/states/hover',
          ),
        },
        {
          title: 'Active',
          description:
            'Breadcrumb items have an active state. The style of the breadcrumb item changes to visually communicate and provide feedback to the user that the breadcrumb item has been interacted with.',
          media: getIllustrationComponent(
            'components/breadcrumbs/states/active',
          ),
        },
        {
          title: 'Focus',
          description:
            'Breadcrumb items in a focus state communicate that a user has highlighted a breadcrumb item, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/breadcrumbs/states/focus',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how breadcrumbs behave.',
      cards: [
        {
          title: 'Selected breadcrumb item',
          description: (
            <>
              By default, the current page breadcrumb item is displayed as
              non-interactive and is set via the
              <InlineCode>selected</InlineCode> prop.
            </>
          ),
          media: getIllustrationComponent(
            'components/breadcrumbs/behaviours/selected-breadcrumb-item',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use breadcrumbs:',
      layout: '2-span',
      cards: [
        {
          title: 'Do use breadcrumbs for secondary navigation',
          description:
            'Use breadcrumbs for internal secondary navigation links.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/breadcrumbs/usage/do-01'),
        },
        {
          title: 'Dont use as the primary navigation',
          description:
            'Don’t use breadcrumbs as the primary navigation for a website. Instead, use the menu component.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/breadcrumbs/usage/dont-01',
          ),
        },
        {
          title: 'Do add breadcrumbs after primary navigation',
          description:
            'Breadcrumbs should be placed horizontally after the primary page navigation and before the main page content.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/breadcrumbs/usage/do-02'),
        },
        {
          title: "Don't wrap across multiple lines",
          description: 'Avoid wrapping breadcrumb items across multiple lines.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/breadcrumbs/usage/dont-02',
          ),
        },
        {
          title: 'Do keep breadcrumb items short',
          description:
            'Breadcrumb item names should be short and clearly reflect the page it links to.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/breadcrumbs/usage/do-03'),
        },
        {
          title: "Don't have external breadcrumb items",
          description: 'Breadcrumb items shouldn’t be used for external links.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/breadcrumbs/usage/dont-03',
          ),
        },
        {
          title: "Don't make the last breadcrumb item interactive",
          description:
            'The last breadcrumb item (current) should not be a link. It can be set to hidden if the current page is clearly labelled elsewhere (e.g. an article headline).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/breadcrumbs/usage/dont-04',
          ),
        },
        {
          title: "Don't use breadcrumbs for a multi-step process",
          description:
            'Don’t use breadcrumbs as a method of taking users through a multi-step process. Use a stepper component instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/breadcrumbs/usage/dont-05',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          Breadcrumbs have the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph020',
              },
              spaceStack: 'space070',
            }}
          >
            <>
              Breadcrumbs are structured using an{' '}
              <Link
                href="https://www.newskit.co.uk/components/ordered-list/"
                target="_blank"
              >
                ordered list
              </Link>
              . This is because nav elements labeled as ‘breadcrumb’ identify
              the structure as a breadcrumb trail, making it a navigation
              landmark so that it is easy to locate.
            </>
            <>
              To prevent screen reader announcement of the visual separators
              between breadcrumb items, they are added via CSS, hidden via{' '}
              <InlineCode>aria-hidden</InlineCode>.
            </>
            <>
              The separators that appear between breadcrumb items are
              non-interactive.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Breadcrumb item',
            role: 'Focusses to the first breadcrumb Item.',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the breadcrumbs it moves focus to the first breadcrumb item. If focus is on a breadcrumb item it moves focus to the next breadcrumb item.',
          },
          {
            command: ['Shift + Tab'],
            description: 'Moves focus to previous breadcrumb item.',
          },
          {
            command: ['Enter'],
            description:
              'Activates the breadcrumb item if it was not already selected.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'nav',
            attribute: 'arialabel',
            value: 'breadcrumb',
            description:
              'Provides a label that describes the type of navigation provided in the nav element.',
          },
          {
            element: 'separator',
            attribute: 'arialabel',
            value: 'true',
            description:
              'Hides the separators between breadcrumb items so they are not announced by a screen reader or any other assistive technology.',
          },
          {
            element: 'breadcrumbs',
            attribute: 'arialabel',
            value: 'page',
            description: (
              <>
                Applied to the last link in the set to indicate that it
                represents the current page.
                <br />
                <br />
                Used to inform the assistive technology user what has been
                indicated via styling.
              </>
            ),
          },
        ],
      },
    }}
    seo={{
      title: 'SEO',
      introduction: (
        <UnorderedList
          markerAlign="start"
          overrides={{
            marginBlockEnd: 'space050',
            content: {
              stylePreset: 'inkBase',
              typographyPreset: 'editorialParagraph020',
            },
            spaceStack: 'space070',
          }}
        >
          <>
            Breadcrumbs should appear after the primary page navigation in the{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
              target="_blank"
            >
              DOM order
            </Link>
            .
          </>
          <>
            Consider mobile-first indexing when using breadcrumbs to ensure
            optimal page indexing and ranking. For more information, refer to{' '}
            <Link
              href="https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing#:~:text=Mobile%2Dfirst%20indexing%20means%20Google,page%20to%20a%20user's%20query."
              target="_blank"
            >
              mobile-first indexing best practices from Google Search Central.
            </Link>
          </>
          <>
            The rendered breadcrumbs are built using a{' '}
            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Breadcrumb_Navigation"
              target="_blank"
            >
              native HTML nav element
            </Link>
            , this should ensure that it is easy for crawlers to discover.
          </>
          <>
            Navigational Items should have clear descriptive full-page titles in
            the breadcrumb trail to allow crawlers to correctly identify
            content.
          </>
          <>
            It is recommended to have a simple (clickable) link for each level
            on the trail, except for the current page.
          </>
          <>
            You can choose to display breadcrumbs on a page, e.g. once below the
            primary navigation and above the footer in the DOM (across all
            devices).
          </>
        </UnorderedList>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Breadcrumb Item',
          summary:
            'The breadcrumb item has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: ['Exclude<React.ReactNode>', 'undefined'],
              description:
                'A collection (array, component, JSX element) of breadcrumbs, and breadcrumb items',
              required: true,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: 'Defines the size of the breadcrumbs.',
            },
            {
              name: 'showTrailingSeparator',
              type: ['boolean'],
              default: 'false',
              description: (
                <>
                  If provided, shows the last trailing separator in a breadcrumb
                  group. e.g.{' '}
                  <Link
                    href="https://baseweb.design/components/breadcrumbs/#breadcrumbs-with-pseudo-separators"
                    target="_blank"
                  >
                    https://baseweb.design/components/breadcrumbs/#breadcrumbs-with-pseudo-separators
                  </Link>
                </>
              ),
            },
          ],
          overridesSummary:
            'Breadcrumbs have a range of predefined elements and attributes that can be overridden to define their appearance.',
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the breadcrumbs.',
            },
            {
              attribute: 'separator.stylePreset',
              type: 'MQ<string>',
              description:
                'If provided, overrides the stylePreset of the breadcrumb separators.',
            },
            {
              attribute: 'separator',
              type: 'Override<NewskitIconProps>',
              default: 'chevron right',
              description:
                'If provided, this overrides the breadcrumb separator icons.',
            },
            {
              attribute: 'separator.paddingInline',
              type: 'MQ<string>',
              default: 'paddingInline: space020',
              description:
                'If provided, this overrides the space between the breadcrumb items and separators.',
            },
            {
              attribute: 'separator.iconSize',
              type: 'MQ<string>',
              default: [
                'small - iconSize010',
                'medium - iconSize020',
                'large - iconSize030',
              ],
              description:
                'If provided, this overrides the breadcrumb separator icon size',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
        {
          title: 'Breadcrumb item',
          propsSummary:
            'The breadcrumb item has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: ['Exclude<React.ReactNode>', 'undefined'],
              description: 'Label and icon of the breadcrumb item.',
              required: true,
            },
            {
              name: 'selected',
              type: 'boolean',
              default: 'false',
              description:
                'Sets the breadcrumb item to the selected state (current).',
            },
            {
              name: 'href',
              type: 'string',
              description:
                'If provided, will render the breadcrumb item as a link.',
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'breadcrumb-link',
              description:
                'This prop allows users to add event originator custom name.',
            },
            {
              name: 'eventContext',
              type: 'object',
              description:
                'This prop allows users to add extra event data to click events.',
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="LinkStandalone info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                Please refer to the{' '}
                <Link
                  href="https://storybook.newskit.co.uk/?path=/docs/components-button--story-button-default"
                  target="_blank"
                >
                  button component
                </Link>{' '}
                for details of the props and other overrides.
              </InlineMessage>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="LinkStandalone info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                You can choose to hide the selected (current) breadcrumb item by
                using{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden"
                  target="_blank"
                >
                  hidden.
                </Link>
              </InlineMessage>
            </>
          ),
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'breadcrumbItem',
              description:
                'If provided, this overrides the breadcrumb item styling.',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: [
                'small - iconSize010',
                'medium - iconSize020',
                'large - iconSize030',
              ],
              description:
                'If provided, this overrides the breadcrumb item typography preset.',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
      ],
    }}
    related={{
      related: ['Menu', 'Tabs'],
    }}
  />
);
export default BreadcrumbsComponent;
