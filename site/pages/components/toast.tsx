import React from 'react';
import {Toast, ToastProps, Button, styled, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {Link} from '../../components/link';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {Mono} from '../../components/flags';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const playGroundActions = () => (
  <Button size="small" overrides={{stylePreset: 'toastButton'}}>
    undo
  </Button>
);

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const ToastComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Toast',
      description:
        'A Toast communicates confirmation of an action or a low-priority message that does not need to completely interrupt the user experience.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Toast',
      hero: {
        illustration: 'components/toast/toast-illustration',
      },
      introduction: `A Toast communicates confirmation of an action or a low-priority message that does not need to completely interrupt the user experience.`,
    }}
    componentDefaultsKey="toast"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/toast',
      figmaUrl:
        'https://www.figma.com/file/i1jp5qmzkADF5z3XmPrxfp/02---NK-Web---Components---Toast?node-id=0%3A1',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Toast component, its variations, and configuration options.',
      playground: {
        componentName: 'Toast',
        component: state => {
          const {icon, actions, ...restProps} = state as ToastProps;
          return (
            <PlaygroundContainer>
              <Toast
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
                actions={actions && playGroundActions}
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
                label: 'neutral',
                value: undefined,
              },
              {
                label: 'informative',
                value: {
                  stylePreset: 'toastInformative',
                },
              },
              {
                label: 'notice',
                value: {
                  stylePreset: 'toastNotice',
                },
              },
              {
                label: 'positive',
                value: {
                  stylePreset: 'toastPositive',
                },
              },
              {
                label: 'negative',
                value: {
                  stylePreset: 'toastNegative',
                },
              },
            ],
          },
          {
            name: 'Icon',
            propName: 'icon',
            options: [
              {
                label: 'Unset',
                value: undefined,
              },
              {
                label: 'With Icon',
                value: 'your icon here',
                isDefault: true,
              },
            ],
          },
          {
            name: 'Title',
            propName: 'title',
            value: 'Toast title',
          },
          {
            name: 'Message',
            propName: 'children',
            value: 'Toast message will display here',
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
        ],
      },
    }}
    anatomy={{
      introduction:
        'A Toast contains one required element and three optional elements.',
      rows: [
        {
          name: 'Icon',
          description: 'Indicates the status or intent.',
          component: 'Icons',
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
        },
        {
          name: 'Actions',
          description: `Enables a user to perform a relevant action such as 'Undo'.`,
          component: ['Button', 'Icon Button'],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/toast/toast-anatomy-illustration',
        {viewBox: '0 0 1600 900'},
      ),
    }}
    options={{
      introduction:
        'A Toast has the following options to provide an appropriate experience for different scenarios.',
      cards: [
        {
          title: 'Intent',
          description:
            'A Toast has five intents: neutral, informative, notice and positive and negative. Each intent is used to communicate a specific semantic tone of the Toast to the user.',
          media: getIllustrationComponent(
            'components/toast/toast-options-intent-illustration',
          ),
        },
        {
          title: 'Icon',
          description:
            'An icon can be displayed in Toast to indicate the status or intent and to help those with colour blindness discern the message tone.',
          media: getIllustrationComponent(
            'components/toast/toast-options-icon-illustration',
          ),
        },
        {
          title: 'Title',
          description:
            'A title can be displayed in the Toast to provide the user with extra context to the message.',
          media: getIllustrationComponent(
            'components/toast/toast-options-title-illustration',
          ),
        },
        {
          title: 'Actionable',
          description:
            'A CTA button with a contextual label can be added to the Toast to provide the user with the option to perform another action relevant to the one just taken e.g. ‘Undo’.',

          media: getIllustrationComponent(
            'components/toast/toast-options-actionable-illustration',
          ),
        },
        {
          title: 'Auto-Hide Duration',
          description:
            'A Toast’s auto-hide duration can be altered to increase or decrease the amount of time it is displayed before hiding. This is to allow the users more or less time to read the content in the Toast.',

          media: getIllustrationComponent(
            'components/toast/toast-options-auto-hide-illustration',
          ),
        },
        {
          title: 'Position',
          description: `
            A Toast can be positioned to appear and hide from the following
            positions on the screen:
            top-left | top-center  |
            top-right  |  bottom-left  |
            bottom-center |  bottom-right
         `,
          media: getIllustrationComponent(
            'components/toast/toast-options-position-illustration',
          ),
        },
        {
          title: 'Offset',
          description:
            'A Toast can have an offset to create space from the horizontal and/or vertical edge of the screen.',
          media: getIllustrationComponent(
            'components/toast/toast-options-offset-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how a Toast behaves.',
      cards: [
        {
          title: 'Text Overflow Wrap',
          description:
            'When the title and/or the message in the Toast is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/toast/toast-options-text-overflow-illustration',
          ),
        },
        {
          title: 'Multi Toast',
          description:
            'Multiple Toasts can be displayed at the same time using a queue system (Toast provider).',
          media: getIllustrationComponent(
            'components/toast/toast-options-multi-toast-illustration',
          ),
        },
        {
          title: 'Persist on Interaction',
          description:
            'When the Toast is in a hover or focus state, then it does not auto-hide (pause). After the Toast isn’t in a hover or in a focus state, then the timer starts from where it left off (unpause).',
          media: getIllustrationComponent(
            'components/toast/toast-options-persist-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the toast:',
      cards: [
        {
          title: 'Do use for confirmation and low-priority messages',
          description:
            'Use a toast to communicate confirmation of an action or a low-priority message that doesn’t need to completely interrupt the user’s experience.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/toast/usage/do-01'),
        },
        {
          title: 'Don’t place a toast over navigation',
          description:
            'Avoid placing a toast over navigation as this may block user interaction.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/toast/usage/dont-01'),
        },
        {
          title: 'Do avoid clashes with other components',
          description:
            'Consider the placement of a toast in relation to other user feedback components (e.g. banners) to avoid clashes.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/toast/usage/do-02'),
        },
        {
          title: 'Don’t use toasts for multiple actions',
          description:
            'Avoid displaying more than one action in a toast. Having more than one action to choose from can make it difficult for the user to decide to do next.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/toast/usage/dont-02'),
        },
        {
          title: 'Do offset from the edge of the screen',
          description:
            'Always have offset (space) from the edge of the screen to the toast.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/toast/usage/do-03'),
        },
        {
          title: 'Don’t show multiple toasts',
          description:
            'Avoid displaying more than one toast where possible. Where applicable, update the content of the current toast instead (e.g. “Article saved. ‘Undo’” to “Article removed”).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/toast/usage/dont-03'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'A Toast implements the best practice from the W3C guidelines.',
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
          {
            order: 3,
            element: 'Action',
            role: 'Focusses to the next action (if provided)',
          },
        ],
      },

      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the Toast it moves focus to the first link or action in the Toast. If focus is on the first link or action in the Toast it moves focus to the next link or action in the Toast.',
          },
          {
            command: ['Shift', 'Tab'],
            description:
              'Focuses the previous link or action (if provided) in the Toast.',
          },
          {
            command: ['Rtn'],
            description: 'Activates the focussed link or action in the Toast.',
          },
        ],
      },

      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Toast',
            attribute: 'role',
            value: 'status',
            description:
              'The aria-role can be used to identify the role of the Toast within an interface. It is set to ‘status’ by deault.',
            userSupplied: true,
          },
          {
            element: 'Toast',
            attribute: 'aria-live',
            value: 'polite',
            description:
              'The aria-live attribute makes possible for content within the aria-live region to automatically be read by the screen reader, without having to focus on the place where the text is displayed.',
          },
        ],
      },
    }}
    componentAPI={{
      introduction: ``,
      components: [
        {
          title: 'Toast',
          summary: `A Toast has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'children',
              type: `Exclude<React.ReactNode, 'undefined'>`,
              required: true,
              description: 'Defines the content of the message of the Toast.',
            },
            {
              name: 'icon',
              type: 'ReactElement<NewsKitIcon>',
              description:
                'If provided, defines the icon that is displayed in the Toast.',
            },
            {
              name: 'title',
              type: 'string',
              description:
                'If provided, defines the content of the title in the Toast.',
            },
            {
              name: 'actions',
              type: 'React.ComponentType',
              description:
                'If provided, defines the action(s) that is/are displayed in the Toast.',
            },
            {
              name: 'role',
              default: 'status',
              type: 'string',
              description: (
                <>
                  Defines the aria-role attribute of the Toast within an
                  interface.{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles"
                    target="_blank"
                  >
                    Learn about aria-role.
                  </Link>
                </>
              ),
            },
            {
              name: 'ariaLive',
              default: 'polite',
              type: 'string',
              description: (
                <>
                  Defines the aria-live attribute of the Toast within an
                  interface. Learn about aria-role.
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"
                    target="_blank"
                  >
                    Learn about aria-live.
                  </Link>
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'toastNeutral',
              description: (
                <>
                  Overrides the style preset of the Toast container. There are
                  the following style presets for other Toast intents:
                  <Mono>toastPositive</Mono> |<Mono>toastNegative</Mono> |
                  <Mono>toastInformative</Mono> |<Mono>toastNotice</Mono>
                </>
              ),
            },
            {
              attribute: 'spaceInset(deprecated)',
              type: 'MQ<string>',
              default: 'spaceInset030',
              description:
                'This property is deprecated. Use paddingInline and paddingBlock instead.',
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: '',
              description: 'Overrides width of the Toast container.',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              default: '',
              description: 'Overrides the minWidth of the Toast container.',
            },
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              default: [
                'xs = 90%',
                'sm = 60%',
                'md = 45%',
                'lg = 38%',
                'xl = 31%',
              ],
              description:
                'Overrides maxWidth of the Toast container. Note - This accepts a sizing token or a standard CSS sizing value.',
            },
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: '',
              description: 'Overrides the minHeight of the Toast container.',
            },

            {
              attribute: 'content.message.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description: 'Overrides the stylePreset of the Toast message.',
            },
            {
              attribute: 'content.message.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody010',
              description:
                'Overrides the typographyPreset of the Toast message.',
            },
            {
              attribute: 'content.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkInverse',
              description: 'Overrides the stylePreset of the Toast title.',
            },
            {
              attribute: 'content.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading010',
              description: 'Overrides the typographyPreset of the Toast title.',
            },
            {
              attribute: 'content.title.spaceStack',
              type: 'MQ<string>',
              default: 'space010',
              description: 'Overrides the space between title and message.',
            },
            {
              attribute: 'contentAndActions.spaceInline',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the space between the message and the divider and also the divider and actions. Note - it’s only applicable when actions are displayed.',
            },
            {
              attribute: 'divider.stylePreset',
              type: 'MQ<string>',
              default: 'dividerInverse',
              description:
                'Overrides the style preset applied to the Toast divider.',
            },
            {
              attribute: 'icon.spaceInline',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the space between the icon and the content.',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
        {
          title: 'ToastProvider',
          summary: '',
          propsRows: [
            {
              name: 'position',
              type: [
                'top-left',
                'top-center',
                'top-right',
                'bottom-left',
                'bottom-center',
                'bottom-right',
              ],
              default: 'bottom-center',
              description: 'Defines the position of Toast on the screen.',
            },
            {
              name: 'autoHideDuration',
              type: 'number',
              default: '6000',
              description:
                'Defines the duration that the Toast displays for before auto-hiding. A digit represents 1 millisecond.',
            },
            {
              name: 'horizontalOffset',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'Defines the horizontal offset from the left or right hand side of the screen. Note - This accept a space token or a standard CSS space value',
            },
            {
              name: 'verticalOffset',
              type: 'MQ<string>',
              default: 'space040',
              description:
                'Defines the vertical offset from the top or bottom of the screen. Note - This accepts a space token or a standard CSS space value.',
            },
          ],
        },
        {
          title: 'toast() function',
          summary:
            'A function that can be invoked to display a toast. Returns a toast ID.',
          argsRows: [
            {
              order: 1,
              type: ['function', 'React.ReactNode'],
              default: 'space040',
              description: 'Defines the Toast component to be toasted.',
              required: true,
            },
            {
              order: 2,
              type: '{autoHideDuration: number}',
              default: '',
              description:
                'Defines the duration that the Toast displays for before auto-hiding. A digit represents 1 millisecond. The default values is provided as prop to <ToastProvider />',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Banner', 'Flag', 'Inline Message', 'Tooltip'],
    }}
  />
);

export default ToastComponent;
