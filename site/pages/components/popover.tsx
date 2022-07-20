import React from 'react';
import {InlineMessage, IconFilledInfo, UnorderedList} from 'newskit';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {IconFilledCircle} from '../../components/icons';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const unorderedListOverrides = {
  spaceStack: 'space050',
  content: {
    typographyPreset: 'editorialParagraph030',
  },
};

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
      status: MetaStatus.Beta,
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
          component: 'Text block',
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon Button for closing the Popover',
          component: 'Icon button',
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
              If no pointer is visible, then the distance to the reference
              element is reduced to zero.
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
              <br />
              <br />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Radio validation"
                title="Note"
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
      introduction:
        'The following guidance describes how and when to appropriately use the Popover component.',
      cards: [
        {
          description:
            'Popovers are intended for displaying non-critical information related to an element. Content passed to a Popover should match the Aria-label and description.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do1'),
        },
        {
          description:
            'Avoid using an overlay with a Popover, as they are intended to display non-critical information, and shouldn’t prevent a user from performing other tasks on the screen. In these cases, consider using a Modal instead.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont1'),
        },

        {
          description:
            'Ensure information presented in a Popover is concise. Users who are on a small screen or with high zoom will need to move around the screen to read the content, potentially losing their place or resulting in cognitive overload.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do2'),
        },
        {
          description:
            'Avoid covering the element that the Popover is attributed to, as it will lose its context.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont2'),
        },

        {
          description:
            'Popovers should remain in view until a user dismisses them.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/popover/usage/do3'),
        },
        {
          description:
            'Avoid rich content. Formatting will not be conveyed to screen reader users eg. bold, italicised text, or icons)',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/popover/usage/dont3'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Popover has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={unorderedListOverrides}
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
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: (
        <>
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={unorderedListOverrides}
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
      related: ['Tooltip', 'Modal'],
    }}
  />
);
export default PopoverComponent;
