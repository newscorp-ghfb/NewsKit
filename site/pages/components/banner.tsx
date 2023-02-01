/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Banner,
  BannerBaseProps,
  BannerProps,
  Button,
  ButtonOrButtonLinkProps,
  styled,
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
import {Link} from '../../components/link';

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
        'Banners communicate essential information. They’re positioned at the top of the screen to be noticeable and require user action to disappear.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Banner',
      hero: {
        illustration: 'components/banner/banner-illustration',
      },
      introduction:
        'Banners communicate essential information. They’re positioned at the top of the screen to be noticeable and require user action to disappear.',
    }}
    componentDefaultsKey="banner"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/tree/develop/src/banner',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2163%3A45665&t=FbJDxZalohOA9JXM-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the banner component, its variations and configuration options.',
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
        'The banner component contains one required element and three optional elements.',

      rows: [
        {
          name: 'Icon',
          description: 'Indicates the status or intent.',
          component: ['Icon'],
          optional: undefined,
        },
        {
          name: 'Title',
          description: 'Reinforces the message text.',
          component: 'Text Block',
          optional: true,
        },
        {
          name: 'Message',
          description: 'Communicates what’s about to happen or has happened.',
          component: ['Text Block', 'Link'],
          optional: true,
        },
        {
          name: 'Action(s)',
          description: 'Lets a user perform a relevant action such as ‘undo’.',
          component: ['Button', 'Icon Button'],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/banner/banner-anatomy-illustration',
        {viewBox: '0 0 1600 900'},
      ),
    }}
    options={{
      introduction: 'The banner has options for different use cases:',
      cards: [
        {
          title: 'Orientation',
          description: (
            <>
              Display banners horizontally or vertically to best use the space
              available on a screen. When vertical, stack content and make
              buttons full-width.
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/banner/banner-options-orientation-illustration',
          ),
        },
        {
          title: 'Intent',
          description:
            'A banner has three intents: informative, notice and negative. Each communicates a specific tone to the user.',
          media: getIllustrationComponent(
            'components/banner/banner-options-intent-illustration',
          ),
        },
        {
          title: 'Icon',
          description:
            'Display an icon as a visual cue and help users with colour blindness discern the message tone.',
          media: getIllustrationComponent(
            'components/banner/banner-options-icon-illustration',
          ),
        },
        {
          title: 'Title',
          description: 'Give the banner a title to provide extra context.',
          media: getIllustrationComponent(
            'components/banner/banner-options-title-illustration',
          ),
        },
        {
          title: 'Actionable',
          description:
            'Add a call-to-action (CTA) button with a contextual message as a starting point in a user journey.',
          media: getIllustrationComponent(
            'components/banner/banner-options-actionable-illustration',
          ),
        },
        {
          title: 'Dismissible',
          description: 'Add a close button to let users dismiss the banner.',
          media: getIllustrationComponent(
            'components/banner/banner-options-dismissable-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the banner behaves:',
      cards: [
        {
          title: 'Text overflow wrap',
          description:
            'When the title and/or message in the banner is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/banner/banner-behaviours-text-overflow-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the banner:',
      cards: [
        {
          title: 'Do use banners for essential, system-level information',
          description:
            'Examples include internet connection issues, expirations of subscriptions, payment failures or major product changes. For confirmations of actions or promotional messages, use another feedback component (e.g. toast) instead.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-1-illustration',
          ),
        },
        {
          title: 'Don’t show multiple banners at the same time',
          description: 'Banners should appear in order of importance.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-1-illustration',
          ),
        },
        {
          title: 'Do add an action to help users solve the issue',
          description:
            'Whenever possible, add an action in the banner so the user can quickly resolve the issue.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-2-illustration',
          ),
        },
        {
          title: 'Don’t have more than one action in a banner',
          description:
            'Having more than one action to choose from can make it difficult for users to decide what to do next. This doesn’t include the close button.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-2-illustration',
          ),
        },
        {
          title: 'Do position below the navigation header',
          description:
            'Banners should be positioned at the top of a page, below the navigation header.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-3-illustration',
          ),
        },
        {
          title: 'Don’t let banners time out',
          description:
            'Banners should only disappear on user interaction (dismissing or completing a task) or when the information is no longer relevant (e.g. updating failed payment details).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/banner/banner-dont-3-illustration',
          ),
        },
        {
          title: 'Do convey tone with the right intent',
          description:
            'Use the appropriate intent to convey the tone of the banner message. If the tone is neutral, use the informative intent banner.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-do-4-illustration',
          ),
        },
        {
          title: 'Do display again if unresolved',
          description:
            'If a user dismisses a banner without resolving the issue, display it again at the next possible occasion, without overwhelming the user (e.g. the next time session).',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/banner/banner-dont-5-illustration',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>The banner meets the latest WAI-ARIA banner specifications.</>
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
              'Allows users of assistive technologies to identify the landmark as a banner. Landmarks allow users of assistive technologies to find and navigate to content quickly.',
          },
          {
            element: 'banner',
            attribute: 'aria-label',
            value: 'Banner',
            description: 'Defines the aria-label.',
            userSupplied: true,
          },
          {
            element: 'banner',
            attribute: 'aria-live',
            value: '"polite", "assertive" or "off" (default)',
            // TODO: Mozilla docs - link (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#live_regions)
            description: (
              <>
                Needs to be set when the banner appears on the screen at
                runtime.{' '}
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
                  target="_blank"
                >
                  Learn more about aria-live at MDN Web Docs
                </Link>
                .
              </>
            ),
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO considerations',
      introduction: 'There are no SEO considerations for the banner.',
    }}
    componentAPI={{
      introduction:
        'The banner has a range of props to define the experience in different use cases.',
      components: [
        {
          title: 'Banner',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: 'Sets the content of the banner.',
            },
            {
              name: 'layout',
              type: "MQ<'horizontal' | 'vertical'>",
              default: ['xs: vertical', ' md:  horizontal'],
              description:
                'If provided, sets the orientation of the banner to horizontal or vertical.',
            },
            {
              name: 'title',
              type: 'React.ReactNode',
              description:
                'If provided, defines the content of the title in the banner.',
            },
            {
              name: 'icon',
              type: 'ReactElement<NewsKitIcon>',
              description: 'Indicates the status or intent of the banner.',
            },
            {
              name: 'actions',
              type: 'React.ComponentType[]',
              description:
                'If provided, defines the action to be displayed in the banner.',
            },
            {
              name: 'onClose',
              type: 'function',
              description:
                'If you pass onClose callback function to the banner, it will display a close button. Use to manage the external (open/closed) state of the banner.',
            },
            {
              name: 'closeButtonLabel',
              type: 'string',
              description: (
                <>
                  If provided, overrides the close button label for the vertical
                  orientation of the banner. For horizontal orientation, the
                  banner always displays a close icon button and uses this prop
                  as aria-label for the icon button.
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
                'Overrides the stylePreset applied to the banner container and the icon colour.',
            },
            {
              attribute: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              default: 'spaceInset045',
              description:
                'Use paddingInline and paddingBlock instead. Overrides the space inset applied to the banner container. It can take four space tokens to specify the padding for each side of the banner. These four space tokens can be used on breakpoints.',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: 'sizing090',
              description:
                'Overrides the minHeight applied to the banner container.',
            },
            {
              attribute: 'grid.props',
              type: '{props: GridProps;}',
              default: '',
              description: (
                <>
                  Overrides the internal grid&apos;s properties. This grid is
                  used to lay out the content. See{' '}
                  <Link href="/components/grid">grid and cell</Link> for a full
                  list of props
                </>
              ),
            },
            {
              attribute: 'cell.props',
              type: '{props: CellProps;}',
              default: '{ xs: full-width }',
              description: `Overrides the number of columns the cell spans at a given breakpoint. If set to "full-width", the cell spans all 12 columns and breaks out across the margin of the grid. It will still be confined by the grid's max-width.`,
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
                'Overrides the space between the banner content and the action/close buttons.',
            },
            {
              attribute: 'content.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading010',
              description:
                'Overrides the typography preset applied to the banner title.',
            },
            {
              attribute: 'content.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the style preset applied to the banner title.',
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
                'Overrides the typographyPreset applied to the banner content.',
            },
            {
              attribute: 'content.message.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description:
                'Overrides the stylePreset applied to the banner message.',
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
