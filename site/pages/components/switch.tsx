import React from 'react';
import {InlineMessage, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {InlineCode} from '../../components/markdown-elements';
import {UsageKind} from '../../components/usage-card';

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
                aria-label="Thumb and track"
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
      introduction:
        'The Text Field has the following states. They can be displayed with both placeholder content or user-inputted content:',
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
      introduction:
        'The following guidance describes how and when to appropriately use the switch component.',
      cards: [
        {
          description:
            'Use switches for communicating activation e.g. on/off states.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/switch/usage/do-1'),
        },
        {
          description:
            'Avoid using switches for communicating selection e.g. multiple table rows. In these cases, use a checkbox.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/switch/usage/dont-1'),
        },
        {
          description:
            'Switches should always have an associated label to give users context for what the switch represents.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/switch/usage/do-2'),
        },
        {
          description:
            'Switches shouldn’t require users to press a button to apply settings.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/switch/usage/dont-2'),
        },
      ],
    }}
  />
);

export default SwitchComponent;
