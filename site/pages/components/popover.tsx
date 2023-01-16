import React from 'react';
import {InlineMessage, UnorderedList, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
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
        'A Popover (also known as a Popper) is a layout component that displays non-critical information when a user clicks or taps on a UI element. ',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Popover',
      hero: {
        illustration: 'components/popover/hero',
      },
      introduction:
        'A Popover (also known as a Popper) is a layout component that displays non-critical information when a user clicks or taps on a UI element. ',
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
        'The Popover contains one required element and four optional elements.',
      media: getIllustrationComponent('components/popover/anatomy'),
      rows: [
        {
          name: 'Panel',
          description: 'Contains the Panel Header and Panel Content',
          component: 'Auto Height',
          optional: undefined,
        },
        {
          name: 'Header',
          description:
            'An area to display content at the top of a panel e.g. a title',
          component: 'Text Block',
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon Button for closing the Popover',
          component: 'Icon Button',
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content e.g. text, or controls',
          component: 'Children',
          optional: true,
        },
        {
          name: 'Pointer',
          description:
            'Used to indicate the direction of context that the Popover is attributed to',
          component: 'Div',
          optional: true,
        },
      ],
    }}
    options={{
      introduction:
        'The Popover has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'The size of the Popover is dictated by the content passed to the panel, with the ability to set a maxWidth, and minWidth. Height is dictated by the content.',
          media: getIllustrationComponent('components/popover/options/size'),
        },
        {
          title: 'Placement',
          description:
            'The Popover has 12 different placements to choose from, with the optional pointer to denote the direction of the context it is attributed.',
          media: getIllustrationComponent(
            'components/popover/options/placement',
          ),
        },
        {
          title: 'Pointer',
          description: (
            <>
              The pointer is used to indicate to the user the reference element
              to which the Popover is attributed. It can be set to be visible or
              hidden.
              <br />
              <br />
              The pointer position changes depending on the placement of the
              Popover.
            </>
          ),
          media: getIllustrationComponent('components/popover/options/pointer'),
        },
        {
          title: 'Distance',
          description: (
            <>
              The space between the Popover and the reference element can be
              changed with spacing tokens. By default, there is 8px of space
              between the popover and the element to which it is attributed,
              which is measured from the tip of the pointer.
              <br />
              <br />
              If no pointer is visible, then the distance can still be set via
              overrides.
            </>
          ),
          media: getIllustrationComponent(
            'components/popover/options/distance',
          ),
        },
        {
          title: 'Close position',
          description: (
            <>
              The position of the close icon button in the Popover is set to the
              right as default, with the option to set the position to the left.
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Aria principles"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
                }}
              >
                The close icon button is optional. However, it‘s recommended
                that a close button is used to adhere to{' '}
                <Link
                  target="_blank"
                  href="https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-7"
                >
                  aria-principles.
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
      introduction: 'The following guidance describes how a Popover behaves.',
      cards: [
        {
          title: 'Triggering and closing the Popover',
          description:
            'The Popover is triggered by clicking and/or tapping on the UI element to which it is attributed. Clicking or tapping on the UI element again will dismiss the Popover.',
          media: getIllustrationComponent(
            'components/popover/behaviours/triggering-and-closing',
          ),
        },
        {
          title: 'Focus',
          description:
            'Upon focus of the Popover, the first interactive element in the specified order will receive focus ie. if there are interactive elements passed to the header area, then this will be the first focusable element.',
          media: getIllustrationComponent(
            'components/popover/behaviours/focus',
          ),
        },
        {
          title: 'Shift',
          description: (
            <>
              The Popover shifts in order to remain in view of the visible area,
              with the pointer maintaining the context that the Popover is
              attributed to.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/shift">
                For more information, refer to the Floating UI library.
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
              The Popover flips to the opposite side once it’s about to overflow
              the visible area, with the pointer maintaining the context that
              the Popover is attributed to. Once enough space is detected on its
              preferred side, it will flip back to its original position.
              <br />
              <br />
              <Link target="_blank" href="https://floating-ui.com/docs/flip">
                For more information, refer to the Floating UI library.
              </Link>
            </>
          ),
          media: getIllustrationComponent('components/popover/behaviours/flip'),
        },
        {
          title: 'Transition',
          description: (
            <>
              The Popover transitions using the <InlineCode>fade</InlineCode>{' '}
              transition preset when it is triggered.
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
          title: 'Do use popovers for non-critical information',
          description:
            'Popovers are intended for displaying non-critical information related to an element. Content passed to a popover should match the aria-label and description.',
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
              <Link href="/components/modal/">Modal</Link> instead.
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont1'),
        },

        {
          title: 'Do make popovers clear and concise',
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
          media: getIllustrationComponent('components/popover/usage/dont2'),
        },

        {
          title: 'Do keep popovers in view until dismissed',
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
          media: getIllustrationComponent('components/popover/usage/dont3'),
        },
        {
          title: 'Don’t hide elements required across breakpoints',
          description:
            'Have equivalent functionality for all breakpoints (e.g. a drawer for top-level navigation items on xs or sm breakpoints where space is limited).',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont4'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Popover has the following accessibility considerations:
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
              Popovers must be discoverable and readable with a mouse, other
              pointer devices, keyboard, screen reader, zoom software, and any
              other assistive technology.
            </>
            <>
              They should provide relevant information that may be helpful with
              learning the UI, but is not required to operate it.
            </>
            <>
              When open, Popovers should not block a user from performing any
              other task on the screen, this should be tested across all
              breakpoints.
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
              'Focusses to the content (children) passed to the header area, focusing on any interactive elements (if provided).',
          },
          {
            order: 2,
            element: 'content',
            role:
              'Focusses to the content (children) passed to the content area, focusing on any interactive elements (if provided).',
          },
          {
            order: 3,
            element: 'closeButton',
            role:
              'Focusses to the close Icon Button in the header (if provided).',
          },
        ],
      },
      infoNoticeFocus: [
        'There is no focus trapping available for the Popover.',
        'Upon focus of the Popover, the first interactive element in the specified order will receive focus ie. if there are interactive elements passed to the header area, then this will be the first focusable element.',
        'If you want to change the element that gets focus then add a data-autofocus attribute to the HTML element you want to be focused on.',
      ],
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Space or Enter'],
            description:
              'Toggle the Popover when the interactive element it is attributed to is focused',
          },
          {
            command: ['Tab'],
            description: `Cycle through the open panel's links or actions (if provided)`,
          },
          {
            command: ['Shift', 'Tab'],
            description:
              'Focuses the previous link or action in the Popover (if provided)',
          },
          {
            command: ['Esc'],
            description:
              'Closes the Popover if the closeOnEsc prop is provided',
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
              'Set to true if the Popover is visible; false if the Popover is hidden',
          },
          {
            element: 'Popover',
            attribute: 'aria-hidden',
            value: 'boolean',
            description: 'If true, hides the Popover',
          },
          {
            element: 'Popover',
            attribute: 'aria-controls',
            value: '',
            description:
              'Set to the HTML id of the region toggled by Popover trigger (optional)',
          },
        ],
      },
      infoNoticeAria: [
        <>
          By default, the Popover only describes its child element. The content
          of the Popover acts as an accessible description and{' '}
          <InlineCode>aria-describedby</InlineCode> will be added to the
          Popover&apos;s child elements.
          <br />
          <br />
          Note that if the Popover provides the only visual label, eg an icon
          button, then you should use Popover to label its child elements.
          Otherwise, the children would have no accessible name and the Popover
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
          Popover act as a label. In this case,{' '}
          <InlineCode>role=popover</InlineCode> will be removed, and if Popover
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
            <>
              Ensure all text, icons, and images are visible in the Popover so
              that information can be crawled and indexed.
            </>
            <>
              The Popover component and its content are rendered to the DOM, but
              only visible to the user when the Popover is open.
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
            'The Popover has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Popover has a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactElement & { ref?: React.Ref<unknown>; };',
              description: 'Popover reference element.',
              required: true,
            },
            {
              name: 'content',
              type: 'React.ReactNode',
              description: 'Default content value.',
              required: true,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              description: 'If true, determines if the Popover is open.',
              required: undefined,
            },
            {
              name: 'onDismiss',
              type: 'function',
              description:
                'A callback which is invoked on dismissing the Popover through either clicking on the element that opened it, the close Icon Button, area surrounding the Popover on the page, or by pressing the Esc key.',
              required: undefined,
            },
            {
              name: 'fallbackBehaviours',
              type: `'flip' | 'shift' | ['flip', 'shift']`,
              default: `'flip', 'shift'`,
              description: (
                <>
                  Behaviour the Popover should follow for fallback.
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
              description: 'Defines the content of the Popover header.',
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
                'Defines the placement of the Popover, with the optional pointer to denote the direction of the context it is attributed.',
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
                'If provided, returns focus to the focused element prior to the Popover opening.',
              required: undefined,
            },
            {
              name: 'enableDismiss',
              type: 'boolean',
              default: 'false',
              description:
                'If true, the Popover can be closed by clicking outside of the popover or by pressing the Esc key.',
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
              description: 'Overrides the maxWidth property of the Popover.',
            },
            {
              attribute: 'minWidth',
              type: 'MQ<string>',
              description: 'Overrides the minWidth property of the Popover.',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description: 'Overrides the zIndex of the Popover.',
            },
            {
              attribute: 'distance',
              type: 'MQ<string>',
              default: 'space050',
              description:
                'Overrides the distance between the Popover and the item it is attributed to.',
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
              description: 'Overrides the transitionPrese of the Popover.',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'popoverPanel',
              description:
                'Overrides the stylePreset applied to the Popover panel.',
            },
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: 'popoverHeader',
              description:
                'Overrides the stylePreset applied to the Popover header.',
            },
            {
              attribute: 'header.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel030',
              description:
                'Overrides the typographyPreset applied to the Popover header.',
            },
            {
              attribute: 'header.paddingBlock',
              type: 'MQ<string>',
              default: 'space040',
              description: '',
            },
            {
              attribute: 'header.paddingInline',
              type: 'MQ<string>',
              default: 'space050',
              description: '',
            },
            {
              attribute: 'header.paddingBlockStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'header.paddingBlockEnd',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'header.paddingInlineStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'header.paddingInlineEnd',
              type: 'MQ<string>',
              description: '',
            },
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
            {
              attribute: 'content.paddingBlock',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.paddingInline',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.paddingBlockStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.paddingBlockEnd',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.paddingInlineStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'content.paddingInlineEnd',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'Overrides the stylePreset applied to the Popover close Icon Button.',
            },
            {
              attribute: 'closeButtonContainer.stylePreset',
              type: 'MQ<string>',
              default: 'popoverCloseButtonContainer',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingBlock',
              type: 'MQ<string>',
              default: 'space020',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingInline',
              type: 'MQ<string>',
              default: 'space020',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingBlockStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingBlockEnd',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingInlineStart',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'closeButtonContainer.paddingInlineEnd',
              type: 'MQ<string>',
              description: '',
            },
            {
              attribute: 'pointer.size',
              type: 'MQ<string>',
              default: 'sizing040',
              description: 'Overrides the size of the Popover indicator.',
            },
            {
              attribute: 'pointer.stylePreset',
              type: 'MQ<string>',
              default: 'popoverPointer',
              description:
                'Overrides the stylePreset of the Popover indicator.',
            },
            {
              attribute: 'pointer.edgeOffset',
              type: 'MQ<string>',
              default: 'space030',
              description:
                'Overrides the edgeOffset of the Popover indicator. The edgeOffset is the padding between the indicator and the edges of the popover container.',
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
                If the Popover is wrapping a functional component, ensure that
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
