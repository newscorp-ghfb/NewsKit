import React from 'react';
import {InlineMessage, UnorderedList, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {getLogicalPropsTable} from '../../components/component-api/common-logical-props';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
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

const PopoverComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Popover',
      description:
        'Popovers (also known as poppers) display non-critical information when a user clicks or taps on a UI element.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Popover',
      hero: {
        illustration: 'components/popover/hero',
      },
      introduction:
        'Popovers (also known as poppers) display non-critical information when a user clicks or taps on a UI element.',
    }}
    componentDefaultsKey="Popover"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v5.6.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/popover',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=7296%3A137983',
    }}
    anatomy={{
      introduction:
        'The popover contains one required element and four optional elements.',
      media: getIllustrationComponent('components/popover/anatomy'),
      rows: [
        {
          name: 'Panel',
          description: 'Contains the panel header and panel content',
          component: 'Auto height',
          optional: undefined,
        },
        {
          name: 'Header',
          description:
            'An area to display content at the top of a panel (e.g. title)',
          component: 'Text block',
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon button for closing the popover',
          component: 'Icon button',
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content (e.g. text or controls)',
          component: 'Children',
          optional: true,
        },
        {
          name: 'Pointer',
          description:
            'Used to indicate the direction of context that the popover is attributed to',
          component: 'Div',
          optional: true,
        },
      ],
    }}
    options={{
      introduction: 'The popover has options for different use cases:',
      cards: [
        {
          title: 'Size',
          description:
            'Set a maxWidth and minWidth for the popover. Height is set automatically based on the content.',
          media: getIllustrationComponent('components/popover/options/size'),
        },
        {
          title: 'Placement',
          description: 'Choose from 12 different tooltip placements.',
          media: getIllustrationComponent(
            'components/popover/options/placement',
          ),
        },
        {
          title: 'Pointer',
          description: (
            <>
              Add a pointer to indicate the element to which the popover is
              attributed. Set it to ‘visible’ or ‘hidden’ as required.
              <br />
              <br />
              The pointer changes position depending on the placement of the
              popover.
            </>
          ),
          media: getIllustrationComponent('components/popover/options/pointer'),
        },
        {
          title: 'Offset',
          description:
            'Change the space between the popover and the element with spacing tokens via overrides. By default, there’s 8px of space between the popover and the element, measured from the tip of the pointer or the near edge of the popover if no pointer is visible.',
          media: getIllustrationComponent('components/popover/options/offset'),
        },
        {
          title: 'Close position',
          description: (
            <>
              Position the close button to the right (default) or left.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Aria principles"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                The close button is optional. However, you should include it to
                adhere to{' '}
                <Link
                  target="_blank"
                  href="https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-7"
                >
                  ARIA principles.
                </Link>
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/popover/options/close-position',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the popover behaves:',
      cards: [
        {
          title: 'Triggering and closing the popover',
          description:
            'The popover is triggered when the user clicks and/or taps on the UI element to which it is attributed. Clicking or tapping on the UI element again dismisses the popover.',
          media: getIllustrationComponent(
            'components/popover/behaviours/triggering-and-closing',
          ),
        },
        {
          title: 'Focus',
          description:
            'Upon focus of the popover, the first interactive element in the specified order will receive focus (i.e. if there are interactive elements passed to the header area, this will be the first focussable element).',
          media: getIllustrationComponent(
            'components/popover/behaviours/focus',
          ),
        },
        {
          title: 'Shift',
          description: (
            <>
              The popover shifts in order to remain in view of the visible area,
              with the pointer maintaining the context that the popover is
              attributed to.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/shift">
                Learn more about shift at the Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/popover/behaviours/shift',
          ),
        },
        {
          title: 'Flip',
          description: (
            <>
              The popover flips to the opposite side once it’s about to overflow
              the visible area, with the pointer maintaining the context that
              the popover is attributed to. Once enough space is detected on its
              preferred side, it flips back to its original position.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/flip">
                Learn more about flip at the Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/popover/behaviours/flip'),
        },
        {
          title: 'Transition',
          description: (
            <>
              When triggered, the popover transitions using the{' '}
              <InlineCode>fade</InlineCode> transition preset.
            </>
          ),
          media: getIllustrationComponent(
            'components/popover/behaviours/transition',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the popover:',
      cards: [
        {
          title: 'Use popovers for non-critical information',
          description:
            'Popovers are intended for displaying non-critical information related to an element. Content passed to a popover should match the Aria-label and description.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do1'),
        },
        {
          title: 'Don’t use overlays with popovers',
          description: (
            <>
              Avoid using an overlay with a popover, as they’re intended for
              non-critical information and shouldn’t prevent a user from
              performing other tasks on the screen. If you’re displaying
              critical information, consider a{' '}
              <Link href="/components/modal/">modal</Link> instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont-01'),
        },
        {
          title: 'Make popovers clear and concise',
          description:
            'Avoid large chunks of text in popovers. Too much text can cause cognitive overload, and users with smaller screens or who are zoomed in can lose their place.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do2'),
        },
        {
          title: 'Don’t use rich text formatting',
          description:
            'Rich text formatting (e.g. bold, italics, icons) won’t be conveyed to screen reader users.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont-03'),
        },
        {
          title: 'Keep popovers in view until dismissed',
          description:
            'Popovers should remain in view until the user dismisses them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do3'),
        },
        {
          title: 'Don’t cover the attributed element',
          description:
            'Avoid covering the element that the popover is attributed to, as it will lose its context.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont-02'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The popover has the following accessibility considerations:
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
              Popovers must be discoverable and readable with a mouse or other
              pointer device, keyboard, screen reader, zoom software and any
              other assistive technology
            </>
            <>
              Popovers should provide information that’s helpful for learning
              the UI, but isn’t required to operate it
            </>
            <>
              When open, popovers shouldn’t block the user from performing any
              other task on the screen. You should test this across all
              breakpoints
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'header',
            role:
              'Focusses to the content (children) passed to the header area, focussing on any interactive elements (if provided)',
          },
          {
            order: 2,
            element: 'content',
            role:
              'Focusses to the content (children) passed to the content area, focussing on any interactive elements (if provided)',
          },
          {
            order: 3,
            element: 'closeButton',
            role: 'Focusses to the close button in the header (if provided)',
          },
        ],
      },
      infoNoticeFocus: [
        'Focus trapping is not available for the popover.',
        'Upon focus of the popover, the first interactive element in the specified order will receive focus (i.e. if there are interactive elements passed to the header, this will be the first focussable element).',
        'You can change the element that gets focus by adding a data-autofocus attribute to another HTML element.',
      ],
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Space or Enter'],
            description:
              'Toggle the popover when the interactive element it’s attributed to is focussed',
          },
          {
            command: ['Tab'],
            description: `Cycle through the open panel's links or actions (if provided)`,
          },
          {
            command: ['Shift', 'Tab'],
            description:
              'Focuses the previous link or action in the popover (if provided)',
          },
          {
            command: ['Esc'],
            description:
              'Closes the popover if the closeOnEsc prop is provided',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Popover',
            attribute: ['aria-haspopup'],
            value: 'boolean',
            description:
              'Indicates the availability and type of interactive element that can be triggered by the element on which the attribute is set.',
          },
          {
            element: 'Popover',
            attribute: 'aria-expanded (state)',
            value: 'boolean',
            description:
              'Set to ‘true’ if the popover is visible; ‘false’ if the popover is hidden',
          },
          {
            element: 'Popover',
            attribute: 'aria-hidden',
            value: 'boolean',
            description: 'If ‘true’, hides the popover',
          },
          {
            element: 'Popover',
            attribute: 'aria-controls',
            value: '',
            description:
              'Set to the HTML id of the region toggled by popover trigger (optional)',
          },
        ],
      },
      infoNoticeAria: [
        <>
          By default, the popover only describes its child element. The content
          of the popover acts as an accessible description and{' '}
          <InlineCode>aria-describedby</InlineCode> is added to the
          popover&apos;s child elements.
          <br />
          <br />
          If the popover provides the only visual label (e.g. an icon button)
          then you should use the popover to label its child elements.
          Otherwise, the children will have no accessible name and the popover
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
          popover act as a label. In this case,{' '}
          <InlineCode>role=popover</InlineCode> will be removed, and if popover
          content is a string, <InlineCode>aria-label</InlineCode> is added to
          child elements. Otherwise, <InlineCode>aria-labelledby</InlineCode>{' '}
          will be added.
        </>,
      ],
    }}
    seo={{
      title: 'SEO considerations',
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
            <>
              Ensure all text, icons and images are visible in the popover so
              that information can be crawled and indexed
            </>
            <>
              The popover component and its content are rendered to the DOM, but
              only visible to the user when the popover is open.
            </>
          </UnorderedList>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Popover',
          propsSummary:
            'The popover has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that can be overridden to define its appearance.',
          overridesSummary:
            'The popover has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactElement & { ref?: React.Ref<unknown>; };',
              description: 'Popover reference element',
              required: true,
            },
            {
              name: 'content',
              type: 'React.ReactNode',
              description: 'Default content value',
              required: true,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              description: 'If ‘true’, determines if the popover is open',
              required: undefined,
            },
            {
              name: 'onDismiss',
              type: 'function',
              description:
                'A callback invoked when the user dismisses the popover by clicking on the element that opened it, the close button or area surrounding the popover on the page, or by pressing the Esc key',
              required: undefined,
            },
            {
              name: 'fallbackBehaviours',
              type: `'flip' | 'shift' | ['flip', 'shift']`,
              default: `'flip', 'shift'`,
              description: (
                <>
                  Behaviour the popover should follow for fallback.
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
              name: 'header',
              type: 'React.ReactNode',
              description: 'Defines the content of the popover header.',
              required: undefined,
            },
            {
              name: 'closePosition',
              type: ['left', 'right', 'none'],
              default: 'right',
              description: 'Defines the position of the close icon button.',
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
              default: 'top',
              description:
                'Defines the placement of the popover, with the optional pointer to denote the direction of the context to which it is attributed',
              required: undefined,
            },
            {
              name: 'hidePointer',
              type: 'boolean',
              default: 'false',
              description: 'If provided, hides the pointer.',
              required: undefined,
            },
            {
              name: 'restoreFocusTo',
              type: 'HTMLElement',
              description:
                'If provided, returns focus to the element focussed prior to the popover opening',
              required: undefined,
            },
            {
              name: 'enableDismiss',
              type: 'boolean',
              default: 'false',
              description:
                'If ‘true’, the popover can be closed by clicking outside of the popover or by pressing the Esc key',
              required: undefined,
            },
            {
              name: 'dismissOnBlur',
              type: 'boolean',
              default: 'false',
              description:
                'If true, the Popover can be closed by focusing outside of the popover.',
              required: undefined,
            },
            {
              name: 'disableFocusManagement',
              type: 'boolean',
              default: 'false',
              description:
                'If true, the Popover will not manage focus for you which means when open will not move the focus to the popover and back to the trigger when closed',
              required: undefined,
            },
          ],
          overridesRows: [
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              description: 'Overrides the maxWidth of the popover',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              description: 'Overrides the minWidth of the popover',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description: 'Overrides the zIndex of the popover.',
            },
            {
              attribute: 'offset',
              type: 'MQ<string>',
              default: 'space050',
              description:
                'Overrides the offset between the popover and the item it’s attributed to',
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'popover',
              description: '',
            },
            {
              attribute: 'transitionPreset',
              type: 'MQ<string>',
              default: 'fade',
              description: 'Overrides the transitionPreset of the popover',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'popoverPanel',
              description:
                'Overrides the stylePreset applied to the popover panel.',
            },
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: 'popoverHeader',
              description:
                'Overrides the stylePreset applied to the popover header.',
            },
            {
              attribute: 'header.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel030',
              description:
                'Overrides the typographyPreset applied to the popover header.',
            },
            ...getLogicalPropsTable(undefined, 'header', {
              paddingBlock: 'space040',
              paddingInline: 'space050',
            }),
            {
              attribute: 'content.stylePreset',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.typographyPreset',
              type: 'MQ<string>',
              description: '',
            },
            ...getLogicalPropsTable(undefined, 'content', {
              paddingBlock: 'space050',
              paddingInline: 'space050',
            }),
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'Overrides the stylePreset applied to the popover close Icon Button.',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'popoverCloseButtonContainer',
              description: '',
            },
            ...getLogicalPropsTable(undefined, 'closeButton', {}),
            {
              attribute: 'pointer.size',
              type: 'MQ<string>',
              default: 'sizing040',
              description: 'Overrides the size of the popover indicator.',
            },
            {
              attribute: 'pointer.stylePreset',
              type: 'MQ<string>',
              default: 'popoverPointer',
              description:
                'Overrides the stylePreset of the popover indicator.',
            },
            {
              attribute: 'pointer.edgeOffset',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the edgeOffset of the popover indicator. The edgeOffset is the padding between the indicator and the edges of the popover container.',
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
                If the popover is wrapping a functional component, ensure that
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
      related: ['Block', 'Divider', 'Drawer', 'Modal'],
    }}
  />
);
export default PopoverComponent;
