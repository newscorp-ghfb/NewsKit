import React from 'react';
import {
  InlineMessageProps,
  styled,
  InlineMessage,
  IconFilledInfo,
} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../components/component-page-template';
import {Mono} from '../../components/flags';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export default (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Inline Message | Newskit design system',
      description:
        'An Inline message communicates contextual information. They are positioned inline, in close proximity to the element they are adding context to.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Inline Message',
      hero: {
        illustration: 'components/inline-message/inline-message-illustration',
      },
      introduction: `An Inline message communicates contextual information. They are positioned inline, in close proximity to the element they are adding context to.`,
    }}
    componentDefaultsKey="inlineMessage"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v3.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/tree/master/src/inline-message',
      // TODO to add figma link once ready -  ask designers
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Inline Message component, its variations, and configuration options.',
      playground: {
        componentName: 'InlineMessage',
        component: state => {
          const {icon, ...restProps} = state as InlineMessageProps;
          return (
            <PlaygroundContainer>
              <InlineMessage
                {...restProps}
                icon={
                  icon && (
                    <IconFilledInfo
                      overrides={{
                        stylePreset: 'inkContrast',
                        size: 'iconSize020',
                      }}
                    />
                  )
                }
                aria-label="lorem ipsum"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </InlineMessage>
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
                label: 'informative',
                value: {
                  stylePreset: 'inlineMessageInformative',
                },
              },
              {
                label: 'negative',
                value: {
                  stylePreset: 'inlineMessageNegative',
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
            value: 'InlineMessage title',
          },
          {
            name: 'Message',
            propName: 'children',
            value: "InlineMessage's message will display here",
          },
        ],
      },
    }}
    // anatomy={{
    //   introduction:
    //     'An Inline message contains one required element and two optional elements.',
    //   rows: [
    //     {
    //       name: 'Icon',
    //       description: 'Indicates the status or intent.',
    //       component: 'Icons',
    //       optional: true,
    //     },
    //     {
    //       name: 'Title',
    //       description: 'Reinforces the message text.',
    //       component: 'Text Block',
    //       optional: true,
    //     },
    //     {
    //       name: 'Message',
    //       description: 'Communicates what is about to happen or has happened.',
    //       component: ['Text Block', 'Link'],
    //     },
    //   ],
    //   media: getIllustrationComponent(
    //     // TODO ANATOMY ILLUSTRATION FOR Iline message
    //     'components/toast/toast-anatomy-illustration',
    //   ),
    // }}
    // options={{
    //   introduction:
    //     'An InlineMessage has the following options to provide an appropriate experience for different scenarios.',
    //   cards: [
    //     {
    //       title: 'Intent',
    //       description:
    //         'A InlineMessage has three intents: informative, notice and negative. Each intent is used to communicate a specific semantic tone of the InlineMessage to the user.',
    //       media: getIllustrationComponent(
    //             // TODO OPTIONS ILLUSTRATION FOR Iline message
    //         'components/toast/toast-options-intent-illustration',
    //       ),
    //     },
    //     {
    //       title: 'Icon',
    //       description:
    //       'An Icon can be displayed to provide the user with a visual cue and to help those with colour blindness discern the message tone.',
    //       media: getIllustrationComponent(
    //           // TODO OPTIONS ILLUSTRATION FOR Iline message
    //         'components/toast/toast-options-icon-illustration',
    //       ),
    //     },
    //     {
    //       title: 'Title',
    //       description:
    //       'A title can be displayed to provide the user with extra context to the message.',
    //       media: getIllustrationComponent(
    //         // TODO OPTIONS ILLUSTRATION FOR Iline message
    //         'components/toast/toast-options-title-illustration',
    //       ),
    //     },
    //   ],
    // }}
    // behaviors={{
    //   introduction: 'The following guidance describes how an InlineMessage behaves.',
    //   cards: [
    //     {
    //       title: 'Text Overflow Wrap',
    //       description:
    //       'When the title and/or message in the Inline message is too long for the available horizontal space, it wraps to form another line.',
    //       media: getIllustrationComponent(
    //         // TODO
    //         'components/toast/toast-options-text-overflow-illustration',
    //       ),
    //     },
    //   ],
    // }}
    // usage={{
    //   introduction:
    //     'The following guidance describes how and when to appropriately use a InlineMessage component.',
    //   cards: [
    //     {
    //       description:
    //       'Use an Inline message for critical system-level messages such as errors e.g. loss of functionality. Something that partially or fully interrupts a user experience is more appropriate e.g. a Banner or Modal.          ',
    //       kind: UsageKind.DO,
    //       media: getIllustrationComponent(
    //         'components/toast/toast-do-1-illustration',
    //       ),
    //     },
    //     {
    //       description: 'Place a Toast over navigation.',
    //       kind: UsageKind.DONT,
    //       media: getIllustrationComponent(
    //         'components/toast/toast-dont-1-illustration',
    //       ),
    //     },
    //     {
    //       description:
    //       // TODO TBA nothing in the web doc for THIS DO
    //         'Consider the placement of a Toast in relation to other user feedback components such as banners, to avoid them from clashing.',
    //       kind: UsageKind.DO,
    //       media: getIllustrationComponent(
    //         'components/toast/toast-do-2-illustration',
    //       ),
    //     },
    //     {
    //       description:
    //         'Use an Inline message to add context to a single input such as a Text input. Assistive text within an input is more appropriate. ',
    //       kind: UsageKind.DONT,
    //       media: getIllustrationComponent(
    //         // TODO
    //         'components/toast/toast-dont-2-illustration',
    //       ),
    //     },
    //     {
    //       description:
    //         'Carefully consider if you need to use more than one Inline message per screen, as this could increase a users cognitive load and become less effective in drawing attention to content.',
    //       kind: UsageKind.DO,
    //       media: getIllustrationComponent(
    //         // TODO
    //         'components/toast/toast-do-3-illustration',
    //       ),
    //     },
    //     {
    //       description:
    //       'Use multiple Inline messages in close proximately.',
    //       kind: UsageKind.DONT,
    //       media: getIllustrationComponent(
    //         // TODO
    //         'components/toast/toast-dont-3-illustration',
    //       ),
    //     },
    //   ],
    // }}
    // // TODO check how looks like first then update it
    // accessibility={{
    //   introduction:
    //     'An Inline Message implements accessibility best practices.',
    //   focusOrder: {
    //     title: 'Focus order',
    //     tableRows: [
    //       {
    //         order: 1,
    //         element: 'Link',
    //         role: 'Focusses to the link in the message (if provided)',
    //       },
    //       {
    //         order: 2,
    //         element: 'Action',
    //         role: 'Focusses to the first action (if provided)',
    //       },
    //       {
    //         order: 3,
    //         element: 'Action',
    //         role: 'Focusses to the next action (if provided)',
    //       },
    //     ],
    //   },
    //   interaction: {
    //     title: 'Keyboard Interactions',
    //     tableRows: [
    //       {
    //         command: ['Tab'],
    //         description:
    //           'When focus is outside of the Toast it moves focus to the first link or action in the Toast. If focus is on the first link or action in the Toast it moves focus to the next link or action in the Toast.',
    //       },
    //       {
    //         command: ['Shift', 'Tab'],
    //         description:
    //           'Focuses the previous link or action (if provided) in the Toast.',
    //       },
    //       {
    //         command: ['Rtn'],
    //         description: 'Activates the focussed link or action in the Toast.',
    //       },
    //     ],
    //   },

    //   aria: {
    //     title: 'WAI-ARIA',
    //     tableRows: [
    //       {
    //         element: 'Toast',
    //         attribute: 'role',
    //         value: 'status',
    //         description:
    //           'The aria-role can be used to identify the role of the Toast within an interface. It is set to ‘status’ by deault.',
    //         userSupplied: true,
    //       },
    //       {
    //         element: 'Toast',
    //         attribute: 'aria-live',
    //         value: 'polite',
    //         description:
    //           'The aria-live attribute makes possible for content within the aria-live region to automatically be read by the screen reader, without having to focus on the place where the text is displayed.',
    //       },
    //     ],
    //   },
    // }}
    componentAPI={{
      introduction: ``,
      components: [
        {
          title: 'Inline Message',
          summary: `An Inline Message has a range of props that can be used to define an appropriate experience for different use cases and
                    a range of predefined elements and attributes that can be overridden to define its appearance.`,
          propsRows: [
            {
              name: 'children',
              type: `Exclude<React.ReactNode, 'undefined'>`,
              required: true,
              description: 'Sets the message of the Inline Message.',
            },
            {
              name: 'icon',
              type: 'ReactElement<NewsKitIcon>',
              description:
                'If provided, defines the icon that is displayed in the Inline Message.',
            },
            {
              name: 'title',
              type: 'string',
              description:
                'If provided, defines the content of the title in the Inline Message.',
            },
            {
              name: 'ariaLabel',
              type: 'React.ComponentType',
              description:
                'If provided, defines the Aria-label of the Inline Message.',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inlineMessageInformative',
              description: (
                <>
                  Overrides the stylePreset of the Inline Message that styles
                  the Icon and the background.
                  <Mono>inlineMessageInformative</Mono> |
                  <Mono>inlineMessageNotice</Mono> |
                  <Mono>inlineMessageNegative</Mono>
                </>
              ),
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset030',
              description:
                'Overrides the spaceInset of the Inline Message container.',
            },
            {
              attribute: 'content.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkContrast',
              description: 'Overrides the stylePreset of the title.',
            },
            {
              attribute: 'content.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading010',
              description: 'Overrides the typographyPreset of the title.',
            },
            {
              attribute: 'content.title.spaceStack',
              type: 'MQ<string>',
              default: 'space030',
              description: 'Overrides the spaceStack of the title.',
            },
            {
              attribute: 'content.message.stylePreset',
              type: 'MQ<string>',
              default: 'inkBase',
              description: 'Overrides the stylePreset of the message.',
            },
            {
              attribute: 'content.message.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody010',
              description: 'Overrides the typographyPreset of the message.',
            },
            {
              attribute: 'content.message.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityBody010',
              description:
                'Overrides the typographyPreset of the Toast message.',
            },
            {
              attribute: 'icon.spaceInline',
              type: 'MQ<string>',
              default: 'space030',
              description: 'Overrides the spaceInline of the icon.',
            },
          ],
        },
        // {
        //   title: 'ToastProvider',
        //   summary: '',
        //   propsRows: [
        //     {
        //       name: 'position',
        //       type: [
        //         'top-left',
        //         'top-center',
        //         'top-right',
        //         'bottom-left',
        //         'bottom-center',
        //         'bottom-right',
        //       ],
        //       default: 'bottom-center',
        //       description: 'Defines the position of Toast on the screen.',
        //     },
        //     {
        //       name: 'autoHideDuration',
        //       type: 'number',
        //       default: '6000',
        //       description:
        //         'Defines the duration that the Toast displays for before auto-hiding. A digit represents 1 millisecond.',
        //     },
        //     {
        //       name: 'horizontalOffset',
        //       type: 'MQ<string>',
        //       default: 'space040',
        //       description:
        //         'Defines the horizontal offset from the left or right hand side of the screen. Note - This accept a space token or a standard CSS space value',
        //     },
        //     {
        //       name: 'verticalOffset',
        //       type: 'MQ<string>',
        //       default: 'space040',
        //       description:
        //         'Defines the vertical offset from the top or bottom of the screen. Note - This accepts a space token or a standard CSS space value.',
        //     },
        //   ],
        // },
        // {
        //   title: 'toast() function',
        //   summary:
        //     'A function that can be invoked to display a toast. Returns a toast ID.',
        //   argsRows: [
        //     {
        //       order: 1,
        //       type: ['function', 'React.ReactNode'],
        //       default: 'space040',
        //       description: 'Defines the Toast component to be toasted.',
        //       required: true,
        //     },
        //     {
        //       order: 2,
        //       type: '{autoHideDuration: number}',
        //       default: '',
        //       description:
        //         'Defines the duration that the Toast displays for before auto-hiding. A digit represents 1 millisecond. The default values is provided as prop to <ToastProvider />',
        //     },
        //   ],
        // },
      ],
    }}
    compliance={{
      states: undefined,
      variations: true,
      themes: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      seo: undefined,
      design: true,
      props: true,
      uiKit: true,
    }}
    related={{
      introduction: 'Components related to Inline Message',
      related: ['Toast', 'Modal', 'Drawer'],
    }}
  />
);
