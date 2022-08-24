/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Banner,
  BannerBaseProps,
  BannerProps,
  Button,
  ButtonOrButtonLinkProps,
  Link,
  styled,
  TextBlock,
  toNewsKitIcon,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const CTABtn = ({overrides, ...restProps}: ButtonOrButtonLinkProps) => (
  <Button
    overrides={{stylePreset: 'buttonSolidInverse', width: '100%', ...overrides}}
    {...restProps}
  >
    Action
  </Button>
);

const playGroundActions = () => <CTABtn />;

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const BannerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Banner',
      description:
        'A Banner communicates essential information without blocking an experience. They are positioned at the top of the screen, so they are noticeable. They require user action to disappear.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Components',
      name: 'Banner',
      hero: {
        illustration: 'components/banner/banner-illustration',
      },
      introduction:
        'A Banner communicates essential information without blocking an experience. They are positioned at the top of the screen, so they are noticeable. They require user action to disappear.',
    }}
    componentDefaultsKey="banner"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Banner component, its variations, and configuration options.',
      playground: {
        componentName: 'Banner',
        component: (state: BannerBaseProps) => {
          const {icon, actions, onClose, ...restProps} = state as BannerProps;
          return (
            <PlaygroundContainer>
              <Banner
                {...restProps}
                icon={
                  icon && (
                    <IconFilledInfo
                      overrides={{
                        size: 'iconSize020',
                      }}
                    />
                  )
                }
                actions={actions && [playGroundActions]}
                onClose={onClose}
              />
            </PlaygroundContainer>
          );
        },
        knobs: [
          {
            name: 'Intent',
            propName: 'overrides',
            options: [
              {
                isDefault: true,
                label: 'Informative',
                value: {
                  stylePreset: 'bannerInformative',
                },
              },
              {
                label: 'Notice',
                value: {
                  stylePreset: 'bannerNotice',
                },
              },
              {
                label: 'Negative',
                value: {
                  stylePreset: 'bannerNegative',
                },
              },
            ],
          },
          {
            name: 'Icon',
            propName: 'icon',
            options: [
              {
                label: 'With Icon',
                value: 'your icon here',
                isDefault: true,
              },
              {
                label: 'Unset',
                value: undefined,
                isDefault: true,
              },
            ],
          },
          {
            name: 'Title',
            propName: 'title',
            value: 'Banner title',
          },
          {
            name: 'Message',
            propName: 'children',
            value: 'Banner message will display in this space',
          },

          {
            name: 'Actions',
            propName: 'actions',
            options: [
              {
                label: 'Unset',
                value: undefined,
              },
              {
                label: 'With Actions',
                value: 'your actions here',
                isDefault: true,
              },
            ],
          },
          {
            name: 'Close button',
            propName: 'onClose',
            options: [
              {
                label: 'Unset',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'With close button',
                value: 'your actions here',
              },
            ],
          },
        ],
      } as any,
    }}
    anatomy={{
      introduction:
        'A Banner contains two required elements and three optional elements.',

      rows: [
        {
          name: 'Icon',
          description: 'Indicates the status or intent.',
          component: ['Icon'],
          optional: true,
        },
        {
          name: 'Title',
          description: 'Reinforces the message text.',
          component: 'Text Block',
          optional: true,
        },
        {
          name: 'Message',
          description: 'Communicates what is about to happen or has happened.',
          component: ['Text Block', 'Link'],
          optional: undefined,
        },
        {
          name: 'Action(s)',
          description:
            'Enables a user to perform a relevant action such as Undo’.',
          component: ['Button', 'Icon Button'],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/banner/banner-anatomy-illustration',
      ),
    }}
    options={{
      introduction:
        'A Banner has the following options to provide an appropriate experience for different scenarios.',
      cards: [
        {
          title: 'Orientation',
          description: (
            <>
              <TextBlock>
                A Banner can be displayed horizontally or vertically to
                effectively and appropriately use the space available on a
                screen.
              </TextBlock>
              <TextBlock>
                When vertical the content is stacked and the width of the
                buttons are full-width.
              </TextBlock>
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/banner/banner-options-orientation-illustration',
          ),
        },
        {
          title: 'Intent',
          description:
            'A Banner has three intents: informative, notice and negative. Each intent is used to communicate a specific semantic tone of the Banner to the user.',
          media: getIllustrationComponent(
            'components/banner/banner-options-intent-illustration',
          ),
        },
        {
          title: 'Icon',
          description:
            'An icon can be displayed in Banner to provide the user with a visual cue and to help those with colour blindness discern the message tone.',
          media: getIllustrationComponent(
            'components/banner/banner-options-icon-illustration',
          ),
        },
        {
          title: 'Title',
          description:
            'A title can be displayed in the Banner to provide the user with extra context to the Banner message.',
          media: getIllustrationComponent(
            'components/banner/banner-options-title-illustration',
          ),
        },
        {
          title: 'Actionable',
          description:
            'A CTA button with a contextual message can be added to the Banner to provide the user with a starting point, for a particular flow.',
          media: getIllustrationComponent(
            'components/banner/banner-options-actionable-illustration',
          ),
        },
        {
          title: 'Dismissible',
          description:
            'A close button can be added to the banner to prove the user with a way to dismiss the banner.',
          media: getIllustrationComponent(
            'components/banner/banner-options-dismissable-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how a Banner behaves.',
      cards: [
        {
          title: 'Text Overflow Wrap',
          description:
            'When the title and/or message in the Banner is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/banner/banner-behaviours-text-overflow-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a Banner component.',
      cards: [
        {
          description:
            'Banners should be reserved only for essential system-level information, such as internet connection issues, expirations of subscriptions, payment failures or major product changes. For confirmations of actions or promotional messaging use another feedback component such as a Toast.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-1-illustration',
          ),
        },
        {
          description:
            'Never show multiple Banners at the same time. When multiple Banners are consecutively or simultaneously triggered, the Banner with more importance should replace an existing Banner of lesser importance until the higher priority one has been resolved.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-1-illustration',
          ),
        },
        {
          description:
            'Whenever possible, add an action in the Banner for a user to quickly resolve the associated Banner message.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-2-illustration',
          ),
        },
        {
          description:
            'Avoid using more than one action in a Banner. (excluding the dismiss button). Having more than one action to choose from can make it difficult for users to decide what action to do next.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-2-illustration',
          ),
        },
        {
          description:
            'Banners should be positioned at the top of a page, below the navigation header.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-3-illustration',
          ),
        },
        {
          description:
            'Never allow Banners to time out. They should only disappear on user interaction (either dismissing or completing a task) or when the information is no longer relevant, e.g. updating failed payment details.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-3-illustration',
          ),
        },
        {
          description:
            'Use the appropriate intent to convey the tone of the Banner message. If the tone is neutral use the informative intent Banner. ',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-4-illustration',
          ),
        },
        {
          description:
            'If a user dismisses a Banner without resolving the issue, it should be displayed again at the next possible occasion, without overwhelming the user e.g. the next time session.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-dont-5-illustration',
          ),
        },
        {
          description:
            "Keep a Banner's message clear and concise, describing what's happening, and what the user needs to know and do. ",
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-6-illustration',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          A Banner implements the latest{' '}
          <Link href="TODO:find the link">
            WAI-ARIA A Banner specifications.
          </Link>
          .
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Link',
            role: 'Focusses to the link in the message (if provided)',
          },
          {
            order: 2,
            element: 'Action',
            role: 'Focusses to the first action (if provided)',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'banner',
            attribute: 'aria-role',
            value: 'region',
            description:
              'The region landmark role is used to identify an area in the document that counted as significant. It is used to provide a generic landmark for people to be able to navigate to easily when none of the other landmark roles are appropriate.',
          },
          {
            element: 'banner',
            attribute: 'aria-label',
            value: 'Banner',
            description: 'Defines the Aria-label of the Banner.',
            userSupplied: true,
          },
          {
            element: 'banner',
            attribute: 'aria-live',
            value: '"polite", "assertive" or "off" (default)',
            // TODO: Mozilla docs - link (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#live_regions)
            description: (
              <>
                This prop needs to be set when the Banner appears on the screen
                at runtime. For more information check the description for aria
                live at,{' '}
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#live_regions"
                >
                  Mozilla docs.
                </Link>
              </>
            ),
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: 'There are no SEO considerations for this component.',
    }}
    componentAPI={{
      introduction:
        'A Banner has a range of props that can be used to define an appropriate experience for different use cases.',
      components: [
        {
          title: 'Banner',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: 'Sets the content of the Banner.',
            },
            {
              name: 'layout',
              type: "MQ<'horizontal' | 'vertical'>",
              default: ['xs: vertical', ' md:  horizontal'],
              description:
                'If provided, defines the content of the title in the Banner.',
            },
            {
              name: 'title',
              type: 'React.ReactNode',
              description:
                'If provided, defines the content of the title in the Banner.',
            },
            {
              name: 'icon',
              type: 'ReactElement<NewsKitIcon>',
              description:
                'Icon used to indicate the status or intent of the Banner.',
            },
            {
              name: 'actions',
              type: 'React.ComponentType[]',
              description:
                'If provided, defines the action(s) that is/are displayed in the Banner.',
            },
            {
              name: 'onClose',
              type: 'function',
              description:
                'If you pass onClose callback function to the banner it will display a close button. The function can be used to manage the external (open/closed) state of the banner.',
            },
            {
              name: 'closeButtonLabel',
              type: 'string',
              description: (
                <>
                  <TextBlock>
                    If provided, overrides the close Button label for the
                    vertical orientation of the Banner.
                  </TextBlock>
                  <TextBlock>
                    NOTE - For horizontal orientation the Banner always displays
                    a close Icon Button and uses this prop as aria-label for the
                    icon-button.
                  </TextBlock>
                </>
              ) as any,
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'Banner',
              description:
                'Overrides the stylePreset applied to the Banner container and the Icon color.',
            },
            {
              attribute: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              default: 'spaceInset045',
              description:
                'Use paddingInline & paddingBlock instead. Overrides the space inset applied to the Banner container. It can take four space tokens to specify the padding for each side of the Banner. These four space tokens can also be used on breakpoints.	',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: 'sizing090',
              description:
                'Overrides the minHeight applied to the Banner container.',
            },
            {
              attribute: 'grid.props',
              type: '{props: GridProps;}',
              default: '',
              description: (
                <>
                  Overrides internal grid&apos;s properties. This grid is used
                  to layout the content, see{' '}
                  <Link href="/components/grid">grid documentation</Link> for a
                  full list of props
                </>
              ),
            },
            {
              attribute: 'cell.props',
              type: '{props: CellProps;}',
              default: '{ xs: full-width }',
              description: `Overrides the amount of columns for the Cell to span at a given breakpoint. If set to "full-width" the Cell will span all 12 columns and breakout across the margin of the Grid. It will still be confined by the Grid's max-width.`,
            },
            {
              attribute: 'icon.spaceInline',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the space between the icon and the content.',
            },
            {
              attribute: 'content.spaceInline',
              type: 'MQ<string>',
              default: ['horizontal: space030', 'vertical: space050'],
              description:
                'Overrides the space between the banner content and the action/close buttons',
            },
            {
              attribute: 'content.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading010',
              description:
                'Overrides the typography preset applied to the Banner title.',
            },
            {
              attribute: 'content.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the style preset applied to the Banner title.',
            },
            {
              attribute: 'content.title.spaceStack',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the spacing between the title and the message.',
            },
            {
              attribute: 'content.message.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody010',
              description:
                'Overrides the typographyPreset applied to the Banner content.',
            },
            {
              attribute: 'content.message.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the stylePreset applied to the Banner message.',
            },
            {
              attribute: 'actions.spaceInline',
              type: 'MQ<string>',
              default: ['horizontal: space040', 'vertical: space050'],
              description:
                'Overrides the spacing between the action buttons and the close button.',
            },
            {
              attribute: 'actions.closeButton.stylePreset',
              type: 'MQ<string>',
              default: [
                `horizontal: iconButtonMinimalInverse`,
                `vertical: buttonOutlinedInverse`,
              ],
              description:
                'Overrides the spacing between the action buttons and the close button.',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Flag', 'Toast', 'Inline Message', 'Tooltip'],
    }}
  />
);

export default BannerComponent;
