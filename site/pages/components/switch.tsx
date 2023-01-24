import React from 'react';
import {InlineMessage, toNewsKitIcon, UnorderedList} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {IconFilledCircle} from '../../components/icons';
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
      description:
        'A switch is a selection control (toggle) that allows users to turn a setting on or off.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Switch',
      hero: {
        illustration: 'components/switch/hero',
      },
      introduction: `A switch is a selection control (toggle) that allows users to turn a setting on or off.`,
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
        'The switch contains two required elements and five optional elements.',
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
            'Non-interactive background element for visual feedback on state change e.g. hover',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Label',
          description:
            'The label is the text attributed to the switch that provides context',
          component: 'Styled label',
          optional: true,
        },
        {
          name: 'On icon',
          description:
            'Icon that appears within the track to indicate the switch is ‘on’',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Off icon',
          description:
            'Icon that appears within the track to indicate the switch is ‘off’',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Thumb icon',
          description: 'Icon that appears within the thumb',
          component: 'Icon',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The switch has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description: (
            <>
              There are three sizes of the switch input: small, medium
              (default), and large.
              <br />
              <br />
              The icons that appear within the switch input track and thumb
              remain the same size at all three sizes but can be overridden.
            </>
          ),
          media: getIllustrationComponent('components/switch/options/size'),
        },
        {
          title: 'Thumb & track (size & icons)',
          description: (
            <>
              The thumb and track sizes can be changed to achieve a different
              look to match the platform&apos;s visual style e.g. MUI,{' '}
              <InlineCode>Android</InlineCode>, iOS.
              <br />
              <br />
              An icon can also be placed inside the thumb, and two icons can be
              placed within the track e.g. on icon and off icon.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Thumb and track"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                The track icon sizes depend on the size of the track and the
                thumb (i.e. they cannot be bigger than the thumb or they would
                not be covered when the thumb slides over them. However, the
                thumb icon size depends on the size of the thumb.
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
              The switch has a label that appears to the right (end) of a
              switch, for context.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Label"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                In the case of needing a label on the left (start) of a switch,
                this can be set via the
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
            'The switch has a base state. This is the base style of the switch before it has been interacted with by a user.',
          media: getIllustrationComponent('components/switch/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The switch has a hover state. The style of the header and the cursor changes to visually communicate that the switch is an interactive element.',
          media: getIllustrationComponent('components/switch/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'The switch has a visual focus state when in focus. The focus state outlines the heading container.',
          media: getIllustrationComponent('components/switch/states/focus'),
        },
        {
          title: 'Focus Hover',
          description:
            'The switch in a focus hover state communicates that a user has highlighted a switch, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/switch/states/focus-hover',
          ),
        },
        {
          title: 'Checked',
          description:
            'The switch has a checked state. The style of the Switch input changes to visually communicate and provide feedback to the user that the switch has been checked. The style of the label remains the same.',
          media: getIllustrationComponent('components/switch/states/checked'),
        },
        {
          title: 'Checked Hover',
          description:
            'The switch has a checked hover state. The style of the switch input changes to visually communicate and provide feedback to the user that the switch has been checked and hovered over. The style of the label remains the same.',
          media: getIllustrationComponent('components/switch/states/checked'),
        },
        {
          title: 'Checked Focus',
          description:
            'The switch in a checked focus hover state communicates that a user has highlighted a switch, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/switch/states/checked-focus',
          ),
        },
        {
          title: 'Checked Focus Hover',
          description:
            'The switch in a checked focus hover state communicates that a user has highlighted a switch, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/switch/states/checked-focus-hover',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              The switch in a disabled state communicates that a switch exists,
              but is not available to the user in that scenario. When the
              user&apos;s cursor hovers over a switch in a disabled state, the
              cursor shows as not allowed.
              <br />
              <br />
              Disabled switches are often used to maintain layout consistency
              and communicate that a switch may become available if another
              condition is met. The style of the label (colour) also changes to
              indicate that the switch is disabled.
            </>
          ),
          media: getIllustrationComponent('components/switch/states/disabled'),
        },
        {
          title: 'Checked Disabled',
          description: (
            <>
              The switch in a checked disabled state communicates that a switch
              exists, but is not available to the user in that scenario. When
              the user&apos;s cursor hovers over a switch in a checked disabled
              state, the cursor shows as not allowed.
              <br />
              <br />
              Disabled checked switches are often used to maintain layout
              consistency and communicate that a switch may become available if
              another condition is met. The style of the label (colour) also
              changes to indicate that the switch is checked and disabled.
            </>
          ),
          media: getIllustrationComponent(
            'components/switch/states/checked-disabled',
          ),
        },
      ],
      notice:
        'The feedback element becomes visible (configurable) on state change e.g. hover.',
    }}
    behaviors={{
      introduction: 'The following guidance describes how the switch behaves.',
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
            'When a Label is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/switch/behaviours/label-overflow-wrap',
          ),
        },
        {
          title: 'Clickable area',
          description:
            'The switch feedback element indicates the minimum clickable area for the switch input (also known as hit area, or touch target area). The size of the clickable area changes according to the size of the switch. The associated Label is also clickable next to the switch.',
          media: getIllustrationComponent(
            'components/switch/behaviours/clickable-area',
          ),
        },
        {
          title: 'Focusable area',
          description:
            'Both the switch input and Label are interactive, and a user can hover over either, but only the switch thumb is focusable when using either keyboard or voice input.',
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
              table rows). In these cases, use a{' '}
              <Link href="/components/checkbox/">checkbox.</Link> instead.
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
        <>
          The switch has the following accessibility considerations:
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
            }}
          >
            <>
              It’s critical that the switch doesn’t change when its state
              changes (checked / unchecked).
            </>
          </UnorderedList>
        </>
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
            description:
              'Aria-role attribute used to define the role of the switch.',
            userSupplied: true,
          },
          {
            element: 'label',
            attribute: 'ariaLabel',
            value: 'string',
            description:
              'Aria-label attribute is used to define a string that labels the action that will be performed when the user interacts with the switch.',
            userSupplied: true,
          },
          {
            element: 'required',
            attribute: 'ariaRequired',
            value: 'object',
            description:
              'This attribute informs the user that an element is required. When set to true, screen readers notify users that the element is required.',
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
            'The switch has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description:
                'Defines the size of the Switch, including the thumb and track',
              required: undefined,
            },
            {
              name: 'label',
              type: 'string',
              description: 'Defines the Switch Label',
              required: undefined,
            },
            {
              name: 'labelPosition',
              type: ['start', 'end'],
              default: 'end',
              description: 'Defines the position of the Label',
              required: undefined,
            },
            {
              name: 'labelAttributes',
              type: 'React.LabelHTMLAttributes<HTMLLabelElement>',
              description: 'Used to pass HTML attributes to the Label',
              required: undefined,
            },
            {
              name: 'state',
              type: 'disabled | undefined',
              default: 'undefined',
              description: 'If true, renders the Switch in a disabled state',
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'input.stylePreset',
              type: 'MQ<string>',
              default: 'switchTrack',
              description:
                'If provided, overrides the stylePreset of the Switch input',
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
                'It can take one space token to specify the logical block start and end size of the container. This space token can also be used on breakpoints',
            },
            {
              attribute: 'input.InlineSize',
              type: 'MQ<string>',
              default: ['Small = 44px', 'Medium = 60px', 'Large = 76px'],
              description:
                'It can take one space token to specify the logical inline start and end size of the container. This space token can also be used on breakpoints',
            },
            {
              attribute: 'input.paddingInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints',
            },
            {
              attribute: 'input.margin and padding',
              type: 'MQ<string>',
              description:
                'It can take one space token to specify the logical inline start and end margin of the container. This space token can also be used on breakpoints',
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
                'If provided, this overrides the inline space between the Switch input and Label',
            },
            {
              attribute: 'thumb.size',
              type: 'MQ<string>',
              default: [
                'Small = sizing040',
                'Medium = sizing050',
                'Large = sizing060',
              ],
              description: 'If provided, this overrides the size of the thumb',
            },
            {
              attribute: 'thumb.stylePreset',
              type: 'MQ<string>',
              default: 'switchThumb',
              description:
                'If provided, this overrides the stylePreset of the Switch',
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
                'If provided, this overrides the transitionPreset of the thumb',
            },
            {
              attribute: 'trackIcon.stylePreset',
              type: 'MQ<string>',
              default: 'switchTrackIcon',
              description:
                'If provided, this overrides the stylePreset of the track icon',
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
                'If provided, this overrides the size of the feedback element',
            },
            {
              attribute: 'feedback.stylePreset',
              type: 'MQ<string>',
              default: 'feedback',
              description:
                'If provided, this overrides the stylePreset of the feedback element',
            },
            {
              attribute: 'feedback.transitionPreset',
              type: 'MQ<string>',
              default: ['shiftAbsolute', 'opacityChange'],
              description:
                'If provided, overrides the transitionPresets of the feedback element',
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
                'If provided, this overrides the typographyPreset of the Label',
            },
            {
              attribute: 'label.stylePreset',
              type: 'MQ<string>',
              default: 'controlLabel',
              description:
                'If provided, this overrides the stylePreset of the Label',
            },
            {
              attribute: 'onIcon',
              type: 'Override<BaseSwitchIconProps>',
              description:
                'If provided, this overrides the ‘on’ icon in the track',
            },
            {
              attribute: 'offIcon',
              type: 'Override<BaseSwitchIconProps>',
              description:
                'If provided, this overrides the ‘off’ icon in the track',
            },
            {
              attribute: 'thumbIcon',
              type: 'Override<BaseSwitchIconProps>',
              description: 'If provided, this overrides the thumb icon',
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
