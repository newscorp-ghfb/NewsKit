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
          optional: true,
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
            'The size of the Tooltip is dictated by the content passed to the panel, with the ability to set a maxWidth, and minWidth. Height is dictated by the content.',
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
            'The Tooltip is triggered by hovering and/or focussing on the UI element to which it is attributed. Removing focus or hover will dismiss the Tooltip.',
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
    accessibility={{
      introduction: (
        <>
          The Tooltip has the following accessibility considerations:
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
              Tooltips must be discoverable and readable with a mouse, other
              pointer devices, keyboard, screen reader, zoom software, and any
              other assistive technology.
            </>
            <>
              They should provide relevant information that may be helpful for
              learning the UI, but is not required to operate it.
            </>
            <>
              When open, Tooltips should not block a user from performing any
              other task on the screen, this should be tested across all
              breakpoints.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
      },
      infoNoticeFocus:
        'It is not recommeded to pass links or other interactive elements to a Tooltip, due to the intent of a Tooltip being intended for short, informational messages on hover or focus.',
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description: `Toggle the Tooltip when the element that triggers it is focused.`,
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
            description: 'If true, hides the Tooltip',
          },
        ],
      },
      infoNoticeAria: [
        <>
          By default, the Tooltip only describes its child element. The content
          of the Tooltip acts as an accessible description and{' '}
          <InlineCode>aria-describedby</InlineCode> will be added to the
          Tooltip&apos;s child elements.
          <br />
          <br />
          Note that if the Tooltip provides the only visual label, eg an icon
          button, then you should use Tooltip to label its child elements.
          Otherwise, the children would have no accessible name and the Tooltip
          would violate{' '}
          <Link
            target="_blank"
            href="https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html"
          >
            success criterion 2.5.3 in WCAG 2.1.
          </Link>
          <br />
          <br />
          You can pass the <InlineCode>asLabel</InlineCode> prop to make the
          Tooltip act as a label. In this case,{' '}
          <InlineCode>role=tooltip</InlineCode> will be removed, and if Tooltip
          content is a string, <InlineCode>aria-label</InlineCode> will be added
          to child elements. Otherwise, <InlineCode>aria-labelledby</InlineCode>{' '}
          will be added.
        </>,
      ],
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: (
        <>
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              spaceStack: 'space050',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
            }}
          >
            {[
              <>
                The Tooltip component and its content are rendered to the DOM,
                but only visible to the user when the Tooltip is open.
              </>,
            ]}
          </UnorderedList>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          propsSummary:
            'The Tooltip has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Tooltip has a range of predefined elements and attributes that can be overridden to define their appearance.',
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
                  Set to true if the tooltip acts as an accessible label for the
                  child component.
                  <br />
                  <br />
                  By default the title acts as an accessible description for the
                  child.
                </>
              ),
              required: undefined,
            },
            {
              name: 'trigger',
              type: 'string | string[]',
              default: `['hover', 'focus']`,
              description: `Defines how the Tooltip is triggered`,
              required: undefined,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              description: 'If true, the Tooltip is shown',
              required: undefined,
            },
            {
              name: 'fallbackBehaviours',
              type: `'flip' | 'shift' | ['flip', 'shift']`,
              default: `‘flip', 'shift’`,
              description: (
                <>
                  Behavior the Tooltip should follow for fallback.
                  <br />
                  <br />
                  <Link
                    href="https://floating-ui.com/docs/react-dom-interactions"
                    target="_blank"
                  >
                    For more information refer to the documentation from
                    Floating UI.
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
                  Describes the clipping element(s) that overflow will be
                  checked relative to.
                  <br />
                  <br />
                  <Link
                    href="https://floating-ui.com/docs/react-dom-interactions"
                    target="_blank"
                  >
                    For more information refer to the documentation from
                    Floating UI.
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
                'Defines the placement of the Tooltip, with the optional indicator to denote the direction of the context it is attributed.',
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
              description: 'Overrides the maxWidth property of the Tooltip.',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              description: 'Overrides the minWidth property of the Tooltip.',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description: 'Overrides the zIndex of the Tooltip.',
            },
            {
              attribute: 'distance',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'Overrides the distance between the Tooltip and the item it is attributed to.',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: 'Overrides the stylePreset applied to the Tooltip.',
            },
            {
              attribute: 'transitionPreset',
              type: 'MQ<string>',
              default: 'fade',
              description: 'Overrides the transitionPrese of the Tooltip.',
            },
            {
              attribute: 'panel.paddingBlock',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description: 'Overrides the inset space of the Tooltip panel.',
            },
            {
              attribute: 'panel.paddingInline',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description: 'Overrides the inset space of the Tooltip panel.',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'tooltipPanel',
              description:
                'Overrides the stylePreset applied to the Tooltip panel.',
            },
            {
              attribute: 'panel.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel010',
              description:
                'Overrides the typographyPreset applied to the Tooltip panel.',
            },
            {
              attribute: 'panel.paddingBlockStart',
              type: 'MQ<string>',
              description:
                'It can take one space token to specify the logical block start padding of the container. This space token can also be used on breakpoints',
            },
            {
              attribute: 'panel.paddingBlockEnd',
              type: 'MQ<string>',
              description:
                'It can take one space token to specify the logical block end padding of the container. This space token can also be used on breakpoints.',
            },
            {
              attribute: 'panel.paddingInlineStart',
              type: 'MQ<string>',
              description:
                'It can take one space token to specify the logical inline start padding of the container. This space token can also be used on breakpoints.',
            },
            {
              attribute: 'panel.paddingInlineEnd',
              type: 'MQ<string>',
              description:
                'It can take one space token to specify the logical inline end padding of the container. This space token can also be used on breakpoints.',
            },
            {
              attribute: 'pointer.size',
              type: 'MQ<string>',
              default: 'sizing010',
              description: 'Overrides the size of the Tooltip pointer.',
            },
            {
              attribute: 'pointer.stylePreset',
              type: 'MQ<string>',
              default: 'tooltipPointer',
              description: 'Overrides the stylePreset of the Tooltip pointer.',
            },
            {
              attribute: 'pointer.edgeOffset',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'Overrides the edgeOffset of the Tooltip indicator. The edgeOffset is the padding between the indicator and the edges of the popover container.',
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="ForwardRef"
                title="Note"
                overrides={{
                  marginBlockStart: 'space070',
                }}
              >
                If the Tooltip is wrapping a functional component, ensure that
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
    compliance={{
      states: true,
      variations: true,
      themes: true,
      behaviours: true,
      usage: true,
      accessibility: true,
      seo: true,
      performance: false,
      design: true,
      props: true,
      uiKit: true,
    }}
    related={{
      related: [
        'Banner',
        'Flag',
        'Progress Indicator',
        'Toast',
        'Inline Message',
      ],
    }}
  />
);

export default TooltipComponent;
