import React from 'react';
import {InlineMessage, UnorderedList, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {IconFilledCircle} from '../../components/icons';
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

const TooltipComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Tooltip',
      description:
        'Tooltips display short, informational messages when a user hovers over or focusses on a UI element.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Tooltip',
      hero: {
        illustration: 'components/tooltip/hero',
      },
      introduction:
        'Tooltips display short, informational messages when a user hovers over or focusses on a UI element.',
    }}
    componentDefaultsKey="Tooltip"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.7.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/tooltip',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/(v4)-NK-Web-Components?node-id=7827%3A137510&t=tMmC9eY3t1cyYBbd-0',
    }}
    anatomy={{
      introduction:
        'The tooltip component contains two required elements and one optional element.',
      rows: [
        {
          name: 'Panel',
          description: 'Contains the panel content',
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
            'Indicates the direction of context that the tooltip is attributed to',
          component: ['Div'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/tooltip/anatomy'),
    }}
    options={{
      introduction: 'The tooltip has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'Set a maxWidth and minWidth for the tooltip. Height is set automatically based on the content.',
          media: getIllustrationComponent('components/tooltip/options/size'),
        },
        {
          title: 'Placement',
          description: 'Choose from 12 different tooltip placements.',
          media: getIllustrationComponent(
            'components/tooltip/options/placement',
          ),
        },
        {
          title: 'Pointer',
          description: (
            <>
              Add a pointer to indicate the element to which the tooltip is
              attributed. Set it to &apos;visible&apos; or &apos;hidden&apos; as
              required.
              <br />
              <br />
              The pointer changes position depending on the placement of the
              tooltip.
            </>
          ),
          media: getIllustrationComponent('components/tooltip/options/pointer'),
        },
        {
          title: 'Distance',
          description: (
            <>
              Change the space between the tooltip and the element with spacing
              tokens. By default, there&apos;s 8px of space between the tooltip
              and the element, measured from the tip of the pointer, or from the
              panel if you’re not using a pointer.
              <br />
              <br />
              If no pointer is visible, the distance can still be set via
              overrides.
            </>
          ),
          media: getIllustrationComponent(
            'components/tooltip/options/distance',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the tooltip behaves:',
      cards: [
        {
          title: 'Triggering and closing the tooltip',
          description:
            'The tooltip is triggered when the user hovers and/or focusses on the UI element to which it is attributed. Removing focus or hover dismisses the tooltip.',
          media: getIllustrationComponent(
            'components/tooltip/behaviours/triggering-and-closing',
          ),
        },
        {
          title: 'Shift',
          description: (
            <>
              The tooltip shifts to remain in view while the pointer maintains
              context to the element it is attributed to.
              <br />
              <br />
              Learn more about shift at the Floating UI library.
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
              The tooltip flips to the opposite side once it&apos;s about to
              overflow the visible area, with the pointer maintaining the
              context that the tooltip is attributed to. Once it detects enough
              space on its preferred side, it flips back to its original
              position.
              <br />
              <br />
              Learn more about flip at the{' '}
              <Link target="_blank" href="https://floating-ui.com/docs/flip">
                Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/tooltip/behaviours/flip'),
        },
        {
          title: 'Transition and delay',
          description: (
            <>
              When triggered, the tooltip transitions using the{' '}
              <InlineCode>fade</InlineCode> transition preset.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Transition"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                A delay is applied to the first hovered item, after which there
                is no (or reduced) delay on subsequent tooltips until the user
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
      introduction: 'Here’s how and when to use the tooltip:',
      cards: [
        {
          title: 'Do use tooltips for supplemental information',
          description:
            'Tooltips are intended for displaying supplemental information related to an element on hover or focus.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do1'),
        },
        {
          title: 'Don’t use tooltips for essential information',
          description:
            'Avoid putting essential information in tooltips, as the content won’t be announced by screen readers. Content passed to the tooltip should match the aria-label and description.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont1'),
        },
        {
          title: 'Do make tooltips clear and concise',
          description:
            'Avoid putting large chunks of text in tooltips as this can result in cognitive overload for some users.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do2'),
        },
        {
          title: 'Don’t put interactive context within tooltips',
          description: (
            <>
              Avoid placing interactive content (e.g. links or buttons) within a
              tooltip. Consider using a{' '}
              <Link href="/components/popover">Popover</Link> instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont2'),
        },
        {
          title: 'Do keep tooltips in view until the user focuses away',
          description:
            'Allow the mouse to easily move over the tooltip without dismissing it. Tooltips should remain in view until a user hovers or focusses away from them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do3'),
        },
        {
          title: 'Don’t use rich text formatting',
          description:
            'Rich text formatting (e.g. bold, italics, icons) won’t be conveyed to screen reader users.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont3'),
        },
        {
          title: 'Do add to icon buttons and standalone links for context',
          description:
            'You can apply the tooltip to the icon button or standalone link to provide extra context on the intended action or destination.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/tooltip/usage/do4'),
        },
        {
          title: 'Don’t let tooltips time out',
          description: 'Avoid using a timeout to hide the tooltip.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/tooltip/usage/dont4'),
        },
        {
          title: 'Don’t cover the attributed element',
          description:
            'Avoid covering the element that the tooltip is attributed to, as it will lose its context.',
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
    accessibility={{
      introduction: (
        <>
          The tooltip has the following accessibility considerations:
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              spaceStack: 'space050',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
            }}
          >
            <>
              Tooltips must be discoverable and readable with a mouse or other
              pointer device, keyboard, screen reader, zoom software and any
              other assistive technology.
            </>
            <>
              Tooltips should provide information that’s helpful for learning
              the UI, but isn’t required to operate it.
            </>
            <>
              When open, tooltips shouldn’t block the user from performing any
              other task on the screen. You should test this across all
              breakpoints.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        description:
          'Don’t pass links or other interactive elements to a tooltip. Tooltips are for short, informational messages on hover or focus.',
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: `Toggles the tooltip when the element that triggers it is focussed.`,
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Popover',
            attribute: 'aria-hidden',
            value: 'true',
            description: 'If ‘true’, hides the tooltip',
          },
        ],
      },
      infoNoticeAria: [
        <>
          By default, the tooltip only describes its child element. The content
          of the tooltip acts as an accessible description and{' '}
          <InlineCode>aria-describedby</InlineCode> is added to the
          tooltip&apos;s child elements.
          <br />
          <br />
          If the tooltip provides the only visual label (e.g. an icon button)
          then you should use the tooltip to label its child elements.
          Otherwise, the children will have no accessible name and the tooltip
          will violate{' '}
          <Link
            target="_blank"
            href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
          >
            success criterion 2.5.3 in WCAG 2.1.
          </Link>
          <br />
          <br />
          You can pass the <InlineCode>asLabel</InlineCode> prop to make the
          tooltip act as a label. In this case,{' '}
          <InlineCode>role=tooltip</InlineCode>is removed, and if tooltip
          content is a string, <InlineCode>aria-label</InlineCode>is added to
          child elements. Otherwise, <InlineCode>aria-labelledby</InlineCode> is
          added.
        </>,
      ],
    }}
    seo={{
      title: 'SEO considerations',
      introduction: (
        <>
          The tooltip and its content are rendered to the DOM, but only visible
          to the user when the tooltip is open.
        </>
      ),
    }}
    componentAPI={{
      introduction:
        'The tooltip has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that can be overridden to define their appearance.',
      components: [
        {
          title: '',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactElement & { ref?: React.Ref<unknown>; };',
              description: 'Tooltip reference element.',
              required: true,
            },
            {
              name: 'content',
              type: 'React.ReactNode',
              description: 'Default content value.',
              required: true,
            },
            {
              name: 'asLabel',
              type: 'boolean',
              default: 'false',
              description: (
                <>
                  Set to ‘true’ if the tooltip acts as an accessible label for
                  the child component.
                  <br />
                  <br />
                  By default, the title acts as an accessible description for
                  the child
                </>
              ),
              required: undefined,
            },
            {
              name: 'trigger',
              type: 'string | string[]',
              default: `['hover', 'focus']`,
              description: `Defines how the tooltip is triggered`,
              required: undefined,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              description: 'If ‘true’, the tooltip is shown',
              required: undefined,
            },
            {
              name: 'fallbackBehaviours',
              type: `'flip' | 'shift' | ['flip', 'shift']`,
              default: `‘flip', 'shift’`,
              description: (
                <>
                  Behaviour the tooltip should follow for fallback.
                  <br />
                  <br />
                  <Link
                    href="https://floating-ui.com/docs/react-dom-interactions"
                    target="_blank"
                  >
                    Learn more at the Floating UI library
                  </Link>
                </>
              ),
              required: undefined,
            },
            {
              name: 'boundary',
              type: `'clippingAncestors' | Element | Array<Element>;`,
              default: `'clippingAncestors'`,
              description: (
                <>
                  The edge of the tooltip panel where the overflow content will
                  be clipped.
                  <br />
                  <br />
                  <Link
                    href="https://floating-ui.com/docs/react-dom-interactions"
                    target="_blank"
                  >
                    Learn more at the Floating UI library
                  </Link>
                </>
              ),
              required: undefined,
            },
            {
              name: 'placement',
              type: [
                'top',
                'top-start',
                'top-end',
                'right',
                'right-start',
                'right-end',
                'bottom',
                'bottom-start',
                'bottom-end',
                'left',
                'left-start',
                'left-end',
              ],
              default: `top`,
              description:
                'Defines the placement of the tooltip, with the optional indicator to denote the direction of the attributed context.',
              required: undefined,
            },
            {
              name: 'hidePointer',
              type: 'boolean',
              default: 'false',
              description: 'If provided, hides the pointer.',
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              description: 'Overrides the maxWidth of the tooltip.',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              description: 'Overrides the minWidth of the tooltip.',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description: 'Overrides the zIndex of the tooltip.',
            },
            {
              attribute: 'distance',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'Overrides the distance between the tooltip and the item it is attributed to.',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: 'Overrides the stylePreset applied to the tooltip.',
            },
            {
              attribute: 'transitionPreset',
              type: 'MQ<string>',
              default: 'fade',
              description: 'Overrides the transitionPreset of the tooltip.',
            },
            {
              attribute: 'panel.paddingBlock',
              type: 'MQ<string>',
              default: 'space020',
              description: 'Overrides the inset space of the tooltip panel.',
            },
            {
              attribute: 'panel.paddingInline',
              type: 'MQ<string>',
              default: 'space020',
              description: 'Overrides the inset space of the tooltip panel.',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'tooltipPanel',
              description:
                'Overrides the stylePreset applied to the tooltip panel.',
            },
            {
              attribute: 'panel.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel010',
              description:
                'Overrides the typographyPreset applied to the tooltip panel.',
            },
            {
              attribute: 'panel.paddingBlockStart',
              type: 'MQ<string>',
              description:
                'Takes one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints.',
            },
            {
              attribute: 'panel.paddingBlockEnd',
              type: 'MQ<string>',
              description:
                'Takes one space token to specify the logical block end padding of the container. Can also be used on breakpoints.',
            },
            {
              attribute: 'panel.paddingInlineStart',
              type: 'MQ<string>',
              description:
                'Takes one space token to specify the logical inline start padding of the container. Can also be used on breakpoints.',
            },
            {
              attribute: 'panel.paddingInlineEnd',
              type: 'MQ<string>',
              description:
                'Takes one space token to specify the logical inline end padding of the container. Can also be used on breakpoints.',
            },
            {
              attribute: 'pointer.size',
              type: 'MQ<string>',
              default: 'sizing010',
              description: 'Overrides the size of the tooltip pointer.',
            },
            {
              attribute: 'pointer.stylePreset',
              type: 'MQ<string>',
              default: 'tooltipPointer',
              description: 'Overrides the stylePreset of the tooltip pointer.',
            },
            {
              attribute: 'pointer.edgeOffset',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'Overrides the edgeOffset of the tooltip indicator. The edgeOffset is the padding between the indicator and the edges of the popover container.',
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="ForwardRef"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                If the tooltip is wrapping a functional component, ensure that
                the functional component accepts a ref using{' '}
                <Link
                  href="https://reactjs.org/docs/forwarding-refs.html"
                  target="_blank"
                >
                  forwardRef.
                </Link>
              </InlineMessage>
            </>
          ),
        },
      ],
    }}
    related={{
      related: ['Banner', 'Flag', 'Toast', 'Inline Message'],
    }}
  />
);

export default TooltipComponent;
