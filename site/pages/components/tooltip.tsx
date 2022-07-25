import React from 'react';
import {InlineMessage, IconFilledInfo} from 'newskit';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const TooltipComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tooltip',
      description:
        'A Tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Tooltip',
      hero: {
        illustration: 'components/tooltip/hero',
      },
      introduction:
        'A Tooltip is a feedback component that displays a short, informational message when a user hovers over or focuses on a UI element. ',
    }}
    componentDefaultsKey="Tooltip"
    meta={{
      status: MetaStatus.Beta,
      introduced: 'v5.7.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/tooltip',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1%3A393',
    }}
    anatomy={{
      introduction:
        'The Tooltip contains two required elements and one optional element.',
      rows: [
        {
          name: 'Panel',
          description: 'Contains the Panel Content',
          component: ['Div'],
          optional: undefined,
        },
        {
          name: 'Content',
          description: 'An area to display any text content',
          component: ['Children'],
          optional: undefined,
        },
        {
          name: 'Pointer',
          description:
            'Used to indicate the direction of context that the Tooltip is attributed to',
          component: ['Div'],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/tooltip/anatomy'),
    }}
    options={{
      introduction:
        'The Tooltip has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'The size of the Tooltip is dictated by the content passed to the panel, with the ability to set a maxWidth, and minWidth. Height is dictated by the content',
          media: getIllustrationComponent('components/tooltip/options/size'),
        },
        {
          title: 'Placement',
          description:
            'The Tooltip has 12 different placements to choose from, with the optional pointer to denote the direction of the context it is attributed.',
          media: getIllustrationComponent(
            'components/tooltip/options/placement',
          ),
        },
        {
          title: 'Pointer',
          description: (
            <>
              The pointer is used to indicate to the user the reference element
              to which the Tooltip is attributed. It can be set to be visible or
              hidden.
              <br />
              <br />
              The pointer position changes depending on the placement of the
              Tooltip.
            </>
          ),
          media: getIllustrationComponent('components/tooltip/options/pointer'),
        },
        {
          title: 'Distance',
          description: (
            <>
              The space between the Tooltip and the UI element can be changed
              with spacing tokens. By default, there is 8px of space between the
              tooltip and the element to which it is attributed. This is
              measured from the tip of the pointer, or from the panel if a
              pointer is not used.
              <br />
              <br />
              If no pointer is visible, then the distance to the reference
              element is reduced to zero.
            </>
          ),
          media: getIllustrationComponent(
            'components/tooltip/options/distance',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'The following guidance describes how a Tooltip behaves.',
      cards: [
        {
          title: 'Triggering and closing the Tooltip',
          description:
            'The Tooltip is triggered by hovering and/or focussing on the UI element to which it is attributed. Removing focus or hover will dismiss the Tooltip',
          media: getIllustrationComponent(
            'components/tooltip/behaviours/triggering-and-closing',
          ),
        },
        {
          title: 'Shift',
          description: (
            <>
              The Tooltip shifts in order to remain in view of the visible area,
              with the pointer maintaining the context that the Tooltip is
              attributed to.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/shift">
                For more information, refer to the Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/tooltip/behaviours/shift',
          ),
        },
        {
          title: 'Flip',
          description: (
            <>
              The Tooltip flips to the opposite side once it’s about to overflow
              the visible area, with the pointer maintaining the context that
              the Tooltip is attributed to. Once enough space is detected on its
              preferred side, it will flip back to its original position.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/flip">
                For more information, refer to the Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/tooltip/behaviours/flip'),
        },
        {
          title: 'Transition & delay',
          description: (
            <>
              The Tooltip transitions using the <InlineCode>fade</InlineCode>{' '}
              transition preset when it is triggered.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Transition"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                A delay is applied to the first hovered item, after which there
                is no (or reduced) delay on subsequent Tooltips until the user
                has stopped hovering over any relevant components.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/tooltip/behaviours/transition',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the Tooltip component.',
      cards: [
        {
          description:
            'Tooltips are intended for displaying supplemental information related to an element on hover or focus.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do1'),
        },
        {
          description:
            'Do not put essential information in Tooltips, as the content passed will not be announced by screen readers. Content passed to the Tooltip should match the Aria-label and description.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont1'),
        },
        {
          description:
            'Avoid using large chunks of text in Tooltips as this may result in cognitive overload for some users.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do2'),
        },
        {
          description: (
            <>
              Any interactive content such as links or buttons should not be
              placed within a Tooltip. In these cases, consider using a{' '}
              <Link href="/components/popover">Popover</Link> instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont2'),
        },
        {
          description:
            'Allow the mouse to easily move over the Tooltip without dismissing it. Tooltips should remain in view until a user hovers or focuses away from them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do3'),
        },
        {
          description:
            'Avoid rich text. Formatting will not be conveyed to screen reader users eg. bold, italicised text, or icons).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont3'),
        },
        {
          description:
            'The Tooltip can be applied to the Icon Button or standalone Link in order to provide additional context relating to the intended action or destination for users.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do4'),
        },
        {
          description: 'Avoid using a timeout to hide the Tooltip.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont4'),
        },
        {
          description:
            'Avoid covering the element that the Tooltip is attributed to, as it will lose its context.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont5'),
        },
      ],
      notice: (
        <>
          Tooltip is not triggered if an element inside it has a disabled prop.
          If you would like to wrap a disabled component around Tooltip,{' '}
          <Link
            target="_blank"
            href="https://mui.com/material-ui/react-tooltip/#disabled-elements"
          >
            add a wrapper element
          </Link>{' '}
          <InlineCode>span</InlineCode> for example.
        </>
      ),
    }}
  />
);

export default TooltipComponent;
