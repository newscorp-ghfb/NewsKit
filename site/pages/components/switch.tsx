import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {commonLogicalProps} from '../../components/component-api/common-logical-props';
import {OverridesRowsProps} from '../../components/component-api';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const SwitchComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Switch',
      description: 'Switches let users turn a setting on or off.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Switch',
      hero: {
        illustration: 'components/switch/hero',
      },
      introduction: `Switches let users turn a setting on or off.`,
    }}
    componentDefaultsKey="switch"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.4.6',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/switch',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1801%3A344142',
    }}
    anatomy={{
      introduction:
        'The switch component contains two required elements and five optional elements.',
      media: getIllustrationComponent('components/switch/anatomy'),
      rows: [
        {
          name: 'Thumb',
          description:
            'Selection control (div) that can be selected or unselected, and pushed into different states',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Track',
          description: 'Background area that the thumb moves in',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Feedback',
          description:
            'Non-interactive background element for visual feedback on state change (e.g. hover)',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Label',
          description: 'Text attributed to the switch to provide context',
          component: 'Styled label',
          optional: true,
        },
        {
          name: 'On icon',
          description:
            'Appears within the track to indicate the switch is ‘on’',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Off icon',
          description:
            'Appears within the track to indicate the switch is ‘off’',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Thumb icon',
          description: 'Appears within the thumb',
          component: 'Icon',
          optional: true,
        },
      ],
    }}
    options={{
      introduction: 'The switch has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description: (
            <>The switch comes in small, medium (default) and large.</>
          ),
          media: getIllustrationComponent('components/switch/options/size'),
        },
        {
          title: 'Thumb & track (size & icons)',
          description: (
            <>
              Change the thumb and track sizes to match a platform&apos;s visual
              style (e.g. Android, iOS).
              <br />
              <br />
              Add an icon inside the thumb, and two icons within the track (e.g.
              &apos;on&apos; and &apos;off&apos; icons).
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Thumb and track"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                The track icon sizes depend on the size of the track and the
                thumb (i.e. they cannot be bigger than the thumb or they won’t
                be covered when the thumb slides over them). The thumb icon size
                depends on the size of the thumb.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/switch/options/thumb-and-track-size-and-icons',
          ),
        },
        {
          title: 'Feedback',
          description:
            'The feedback element is non-interactive and appears in the background behind the switch thumb for visual feedback on hover.',
          media: getIllustrationComponent('components/switch/options/feedback'),
        },
        {
          title: 'Label',
          description: (
            <>
              Add a label to the right (end) of the switch to provide context.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Label"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                You can add a label on the left (start) of a switch using the{' '}
                <InlineCode>labelPosition</InlineCode> prop.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/switch/options/label'),
        },
      ],
    }}
    states={{
      introduction: 'The switch has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the switch.',
          media: getIllustrationComponent('components/switch/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The switch changes style to let the user know it’s interactive.',
          media: getIllustrationComponent('components/switch/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that the user has highlighted a switch (e.g. via keyboard or voice).',
          media: getIllustrationComponent('components/switch/states/focus'),
        },
        {
          title: 'Focus Hover',
          description:
            'Communicates that the user has highlighted and hovered over a switch (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/switch/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The switch input changes style to let the user know the switch is checked. The style of the label remains the same.',
          media: getIllustrationComponent('components/switch/states/checked'),
        },
        {
          title: 'Checked Hover',
          description:
            'The switch input changes style to let the user know the switch is checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent('components/switch/states/checked'),
        },
        {
          title: 'Checked Focus',
          description:
            'Communicates that a user has highlighted a switch (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/switch/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'Communicates that a user has highlighted and hovered over a switch (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/switch/states/checked-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a switch exists, but isn&apos;t available in
              that scenario. When the user hovers over a switch in a disabled
              state, the cursor shows as &apos;not allowed&apos;.
              <br />
              <br />
              Disabled switches maintain layout consistency and communicate that
              a switch may become available if another condition is met. The
              style of the label (colour) changes to indicate that the switch is
              disabled.
            </>
          ),
          media: getIllustrationComponent('components/switch/states/disabled'),
        },
        {
          title: 'Checked Disabled',
          description: (
            <>
              Communicates that a switch exists, but isn&apos;t available in
              that scenario. When the user hovers over a switch in a checked
              disabled state, the cursor shows as &apos;not allowed&apos;.
              <br />
              <br />
              Checked disabled switches maintain layout consistency and
              communicate that a switch may become available if another
              condition is met. The style of the label (colour) changes to
              indicate that the switch is checked and disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/switch/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The feedback element becomes visible (configurable) on state change (e.g. hover).',
    }}
    behaviors={{
      introduction: 'Here’s how the switch behaves:',
      cards: [
        {
          title: 'Checked vs unchecked',
          description: (
            <>
              Switches can be checked or unchecked.
              <br />
              <br />
              A switch in a checked state is indicated with the thumb on the
              right.
              <br />
              <br />A switch in an unchecked state is indicated with the thumb
              on the left.
            </>
          ),
          media: getIllustrationComponent(
            'components/switch/behaviours/checked-vs-unchecked',
          ),
        },
        {
          title: 'Label overflow wrap',
          description:
            'When a label is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/switch/behaviours/label-overflow-wrap',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The switch feedback element indicates the minimum clickable area for the switch input (also known as hit area or touch target area). The size of the clickable area changes according to the size of the switch. The associated label is also clickable.',
          media: getIllustrationComponent(
            'components/switch/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focusable area',
          description:
            'The switch input and label are both interactive, and a user can hover over either, but only the switch thumb is focusable (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/switch/behaviours/focusable-area',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the switch:',
      cards: [
        {
          title: 'Do communicate activation',
          description:
            'Use switches for communicating activation (e.g. on/off states).',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/switch/usage/do-1'),
        },
        {
          title: 'Don’t use to communicate selection',
          description: (
            <>
              Avoid using switches for communicating selection (e.g. multiple
              table rows). In these cases, use a checkbox instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/switch/usage/dont-1'),
        },
        {
          title: 'Do give switches a label',
          description:
            'Switches should have an associated label to give users context.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/switch/usage/do-2'),
        },
        {
          title: 'Don’t require users to press a button',
          description:
            'Switches shouldn’t require users to press a button to apply settings.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/switch/usage/dont-2'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>The switch has the following accessibility considerations:</>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Switch input',
            role: 'Focusses to the switch input',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: 'Moves focus to the switch input',
          },
          {
            command: ['Space'],
            description: 'Toggle switch between ‘on’ and ‘off’',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'role',
            attribute: 'ariaRole',
            value: 'switch',
            description: 'Defines the role of the switch.',
            userSupplied: true,
          },
          {
            element: 'label',
            attribute: 'ariaLabel',
            value: 'string',
            description:
              'Defines a string that labels the action that will be performed when the user interacts with the switch.',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'ariaRequired',
            value: 'object',
            description:
              'Informs the user that an element is required. When set to ‘true’, screen readers notify users that the element is required.',
            userSupplied: true,
          },
        ],
      },
      infoNoticeAria: [
        <>
          References:{' '}
          <Link
            target="_blank"
            href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/"
          >
            WAI-ARIA Authoring Practices.
          </Link>
        </>,
      ],
    }}
    componentAPI={{
      components: [
        {
          title: 'Switch',
          summary:
            'The switch has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description:
                'Defines the size of the switch, including the thumb and track',
              required: undefined,
            },
            {
              name: 'label',
              type: 'string',
              description: 'Defines the switch label',
              required: undefined,
            },
            {
              name: 'labelPosition',
              type: ['start', 'end'],
              default: 'end',
              description: 'Defines the position of the label',
              required: undefined,
            },
            {
              name: 'labelAttributes',
              type: 'React.LabelHTMLAttributes<HTMLLabelElement>',
              description: 'Passes HTML attributes to the label',
              required: undefined,
            },
            {
              name: 'state',
              type: 'disabled | undefined',
              default: 'undefined',
              description: 'If ‘true’, renders the switch in a disabled state',
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'input.stylePreset',
              type: 'MQ<string>',
              default: 'switchTrack',
              description:
                'If provided, overrides the stylePreset of the switch input',
            },
            {
              attribute: 'input.blockSize',
              type: 'MQ<string>',
              default: [
                'Small = sizing050',
                'Medium = sizing060',
                'Large = sizing070',
              ],
              description:
                'Takes one space token to specify the logical block start and end size of the container. Can be used on breakpoints',
            },
            {
              attribute: 'input.InlineSize',
              type: 'MQ<string>',
              default: ['Small = 44px', 'Medium = 60px', 'Large = 76px'],
              description:
                'Takes one space token to specify the logical inline start and end size of the container. Can be used on breakpoints',
            },
            {
              attribute: 'input.paddingInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'Takes one space token to specify the logical inline start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'input.margin and padding',
              type: 'MQ<string>',
              description:
                'Takes one space token to specify the logical inline start and end margin of the container. Can be used on breakpoints',
            },
            {
              attribute: 'input.spaceInline',
              type: 'MQ<string>',
              default: [
                'Small = space030',
                'Medium = space030',
                'Large = space040',
              ],
              description:
                'If provided, overrides the inline space between the switch input and label',
            },
            {
              attribute: 'thumb.size',
              type: 'MQ<string>',
              default: [
                'Small = sizing040',
                'Medium = sizing050',
                'Large = sizing060',
              ],
              description: 'If provided, overrides the size of the thumb',
            },
            {
              attribute: 'thumb.stylePreset',
              type: 'MQ<string>',
              default: 'switchThumb',
              description:
                'If provided, overrides the stylePreset of the switch',
            },
            {
              attribute: 'thumb.paddingInline',
              type: 'MQ<string>',
              default: 'space010',
              description: '',
            },
            {
              attribute: 'thumb.paddingBlock',
              type: 'MQ<string>',
              default: 'space010',
              description: '',
            },
            {
              attribute: 'thumb.transitionPreset',
              type: 'MQ<string>',
              default: 'shiftAbsolute',
              description:
                'If provided, overrides the transitionPreset of the thumb',
            },
            {
              attribute: 'trackIcon.stylePreset',
              type: 'MQ<string>',
              default: 'switchTrackIcon',
              description:
                'If provided, overrides the stylePreset of the track icon',
            },
            {
              attribute: 'feedback.size',
              type: 'MQ<string>',
              default: [
                'Small = sizing070',
                'Medium = sizing080',
                'Large = sizing090',
              ],
              description:
                'If provided, overrides the size of the feedback element',
            },
            {
              attribute: 'feedback.stylePreset',
              type: 'MQ<string>',
              default: 'feedback',
              description:
                'If provided, overrides the stylePreset of the feedback element',
            },
            {
              attribute: 'feedback.transitionPreset',
              type: 'MQ<string>',
              default: ['shiftAbsolute', 'opacityChange'],
              description:
                'If provided, overrides the transitionPreset of the feedback element',
            },
            {
              attribute: 'label.typographyPreset',
              type: 'MQ<string>',
              default: [
                'Small = utilityBody020',
                'Medium = utilityBody020',
                'Large = utilityBody030',
              ],
              description:
                'If provided, overrides the typographyPreset of the label',
            },
            {
              attribute: 'label.stylePreset',
              type: 'MQ<string>',
              default: 'controlLabel',
              description:
                'If provided, overrides the stylePreset of the label',
            },
            {
              attribute: 'onIcon',
              type: 'Override<BaseSwitchIconProps>',
              description: 'If provided, overrides the ‘on’ icon in the track',
            },
            {
              attribute: 'offIcon',
              type: 'Override<BaseSwitchIconProps>',
              description: 'If provided, overrides the ‘off’ icon in the track',
            },
            {
              attribute: 'thumbIcon',
              type: 'Override<BaseSwitchIconProps>',
              description: 'If provided, overrides the thumb icon',
            },
            ...(commonLogicalProps() as OverridesRowsProps[]),
          ],
        },
      ],
    }}
    related={{
      related: ['Checkbox', 'Form', 'Radio Button', 'Select'],
    }}
  />
);

export default SwitchComponent;
