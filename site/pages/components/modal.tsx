import React from 'react';
import {
  UnorderedList,
  Block,
  P,
  Stack,
  H1,
  Button,
  Modal,
  InlineMessage,
  LinkInline,
} from 'newskit';
import {Link} from '../../components/link';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {ModalProps} from '../../../src/modal/types';
import {Mono} from '../../components/flags';
import {
  logicalPaddingOverrideProps,
  prefixLogicalProps,
} from '../../components/component-api/common-logical-props';

const modalContent = (
  <Stack
    flow="vertical-center"
    stackDistribution="center"
    spaceInline="space020"
  >
    <H1>You need an account</H1>
    <p contentEditable>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam.
    </p>
    <Button>Register for a free account</Button>
    <P>Already have an account?</P>
    <Link href="/">Sign in here</Link>
  </Stack>
);

const ModalState = ({open, ...state}: {open: boolean}) => {
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    setIsActive(open);
  }, [open]);

  return (
    <>
      <P>Use props bellow to open and configure the modal.</P>
      <Modal
        {...(state as ModalProps)}
        open={isActive}
        onDismiss={() => setIsActive(false)}
      >
        {modalContent}
      </Modal>
    </>
  );
};

const ModalComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Modal',
      description:
        'A Modal is a layout panel that presents critical information or requests users input without navigating away from the current page.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Modal',
      hero: {
        illustration: 'components/modal-illustration',
      },
      introduction: `A Modal is a layout panel that presents critical information or requests users input without navigating away from the current page.`,
    }}
    componentDefaultsKey="modal"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.8.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit',
      figmaUrl: 'https://github.com/newscorp-ghfb/newskit',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Modal component, its variations, and configuration options.',
      playground: {
        componentName: 'Modal',
        // @ts-ignore
        component: ModalState,
        knobs: [
          {
            name: 'open',
            propName: 'open',
            value: false,
          },
          {
            name: 'closePosition',
            propName: 'closePosition',
            options: [
              {
                label: 'Unset',
                value: undefined,
                isDefault: false,
              },
              {
                label: 'Left',
                value: 'left',
                isDefault: false,
              },
              {
                label: 'Right',
                value: 'right',
              },
              {
                label: 'None',
                value: 'none',
              },
            ],
          },
          {
            name: 'Header',
            propName: 'header',
            value: '',
          },
          {
            name: 'hideOverlay',
            propName: 'hideOverlay',
            value: false,
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The Modal contains four required elements and one optional element.',
      rows: [
        {
          name: 'Overlay',
          description: 'Obscures the page content behind the panel',
          component: ['Overlay (internal)'],
          optional: true,
        },
        {
          name: 'Panel',
          description: 'Contains the Panel Header and Panel Content',
          component: 'Block',
          optional: undefined,
        },
        {
          name: 'Header',
          description:
            'An area to display content at the top of a panel e.g. a title',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon Button for closing the Modal',
          component: 'Icon Button',
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content e.g. a form',
          component: 'Block',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/modal/anatomy'),
    }}
    options={{
      introduction:
        'The Modal has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Placement',
          description: (
            <>
              The Modal appears as follows across different breakpoints:
              <Block spaceStack="space050" />
              <UnorderedList
                markerAlign="start"
                overrides={{
                  content: {
                    typographyPreset: 'editorialParagraph010',
                  },
                  marker: {
                    spaceInline: 'space030',
                  },
                }}
              >
                <>
                  <b>xs/sm</b>
                  <br />
                  the Modal is positioned in the centre of the screen, with any
                  content passed to the Modal panel causing it to grow from the
                  centre until the max height is reached.
                </>
                <>
                  <b>md/lg/xl</b>
                  <br />
                  the Modal is positioned horizontally in the centre of the
                  screen, with the Modal positioned vertically offset from the
                  top of the screen, with any content passed to the Modal panel
                  causing it to grow downwards until the max height is reached.
                </>
              </UnorderedList>
            </>
          ),
          media: getIllustrationComponent('components/modal/placement'),
        },
        {
          title: 'Close position',
          description: (
            <>
              The position of the close button in the Modal header is set to
              right as default, with the option to set the position to the left
              of the header.
              <InlineMessage
                role="region"
                aria-label="Close position"
                title="Note"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                The header and close button are optional. However it&lsquo;s
                recommended that a close button is always used to adhere to{' '}
                <LinkInline
                  target="_blank"
                  href="https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-7"
                >
                  aria-principles
                </LinkInline>
                .
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent('components/modal/close-position'),
        },
        {
          title: 'Width',
          description:
            'The width of a Modal can be customised appropriately per breakpoint allowing for more or less space as needed.',
          media: getIllustrationComponent('components/modal/width'),
        },
        {
          title: 'Focus trapping',
          description: (
            <>
              Upon opening, the focus will be transferred to the first
              interactive element in the specified order ie. if there are
              interactive elements passed to the header, then this will be the
              first focusable element.
              <br />
              <br />
              There is no focus trapping when the overlay is hidden (modeless).
            </>
          ),
          media: getIllustrationComponent('components/modal/focus-trapping'),
        },
        {
          title: 'Overlay',
          description: 'The Modal overlay can be set to be visible or hidden.',
          media: getIllustrationComponent('components/modal/overlay'),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Modal component behaves.',
      cards: [
        {
          title: 'Height',
          description:
            'The height of a Modal panel is based on a calculation of the percentage of the available screen, and also by any content passed to the Modal, causing the Modal panel to grow until the max-height is reached.',
          media: getIllustrationComponent('components/modal/height'),
        },
        {
          title: 'Entrance and exit motion',
          description: (
            <>
              When the Modal is launched, the overlay fades in from 0% to 100%
              opacity (transitions) and the Modal panel slides upward from the
              centre of the screen (transforms:translate the x or y axis).
              <br />
              <br />
              When the Modal is dismissed, the same animation in reverse occurs.
            </>
          ),
          media: getIllustrationComponent(
            'components/modal/behaviours-focus-trapping',
          ),
        },
        {
          title: 'Triggering and closing the modal',
          description: (
            <>
              The Modal visibility is controlled via the <Mono>open</Mono> prop
              on the component, hidden by default.
              <br />
              <br />
              To handle closing the Modal the user will need to supply and
              handle via the <Mono>onDismiss</Mono> callback. This will be
              triggered when the user clicks on the close Icon Button, the
              overlay, or by pressing the Esc keyboard key.
            </>
          ),
          media: getIllustrationComponent(
            'components/modal/triggering-and-closing',
          ),
        },
        {
          title: 'Content overflow',
          description:
            'When the content is too long to fit, content overflows and Scroll is applied. The header becomes fixed and the content can then independently scroll to bring overflowed content into view.',
          media: getIllustrationComponent('components/modal/content-overflow'),
        },
        {
          title: 'Lock scroll',
          description:
            'When a Modal is present the content behind is not scrollable (scroll-locked).',
          media: getIllustrationComponent('components/modal/lock-stroll'),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the modal:',
      cards: [
        {
          title: 'Do use modals for critical information',
          description: (
            <>
              Modals are appropriate for notifications that provide the user
              with critical information related to a task.
              <br />
              <br />
              For non-critical information, consider using a toast or inline
              notification.
            </>
          ),
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/modal/usage/do-01'),
        },
        {
          title: 'Don’t use modals for marketing',
          description:
            'Avoid using modals for marketing or advertising purposes. They’re intended for critical information or requests for user input.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/modal/usage/dont-01'),
        },
        {
          title: 'Do keep modals close to related content',
          description:
            'A modal should be in close proximity to the content it relates to.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/modal/usage/do-02'),
        },
      ],
    }}
    accessibility={{
      introduction:
        'The Drawer has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'header',
            role:
              'Focusses to the content (children) passed to the header area, focusing on any interactive elements.',
          },
          {
            order: 2,
            element: 'content',
            role:
              'Focusses to the content (children) passed to the content area, focusing on any interactive elements.',
          },
          {
            order: 3,
            element: 'closeButton',
            role: 'Focusses to the close Icon Button in the header.',
          },
        ],
      },
      infoNoticeFocus: [
        'Upon opening, focus will be transferred to the first interactive element in the specified order ie if there are interactive elements passed to the header, then this will be the first focusable element.',
        'If you want to change the element that gets focus then add a data-autofocus attribute to the HTML element you want to be focused on.',
      ],

      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When the Modal is active it will maintain focus trapping. The user will only be able to tab through it and its children.',
          },
          {
            command: ['shift', 'Tab'],
            description:
              'Focuses the previous link or action in the Modal (if provided).',
          },
          {
            command: ['Esc'],
            description: 'Closes the Modal and overlay.',
          },
        ],
      },

      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Modal',
            attribute: 'ariaLabelledby',
            value: 'string',
            description: 'Defines the Aria-label of the Modal',
            userSupplied: undefined,
          },
          {
            element: 'Modal',
            attribute: 'ariaDescribedby',
            value: 'string',
            description: 'Describes the purpose of the Modal',
            userSupplied: undefined,
          },
          {
            element: 'Modal',
            attribute: 'ariaModal',
            value: 'boolean',
            description: 'Defines the Modal dialog',
            userSupplied: undefined,
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
            overrides={{
              marginBlockStart: 'space030',
              spaceStack: 'space050',
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marker: {
                spaceInline: 'space030',
              },
            }}
          >
            <>
              Ensure all text, icons, and images are visible in the Modal so
              that information can be crawled and indexed.
            </>

            <>
              The Modal component and its content are rendered to the DOM, but
              only visible to the user when the Modal is open.
            </>
          </UnorderedList>
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Modal',
          propsSummary:
            'The Modal has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'The Modal has a range of predefined elements and attributes that can be overridden to define their appearance.',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description:
                'Displays supplied content in the Modal panel content area.',
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              required: true,
              description: 'Determines if the Modal is open.',
            },
            {
              name: 'onDismiss',
              type: 'function',
              description:
                'If provided, a callback which is invoked on dismissing the Modal through either clicking the close Icon Button, overlay, or pressing the Esc key.',
            },
            {
              name: 'header',
              type: 'React.ReactNode',
              description: 'If provided sets the content of the Modal header.',
            },
            {
              name: 'closePosition',
              type: ['left', 'right', 'none'],
              description:
                'If provided, sets the position of the close icon button.',
            },
            {
              name: 'restoreFocusTo',
              type: 'HTMLElement',
              description:
                'If provided, returns focus to the specified element after the Modal is closed. If not provided, focus will return to the focused element prior to the Modal opening.',
            },
            {
              name: 'disableFocusTrap',
              type: 'boolean',
              description:
                'If true, focus can leave the modal window through tabbing or direct click on the main content.',
            },
            {
              name: 'inline',
              type: 'boolean',
              description:
                'If true,the modal will display inline using position absolute ( instead of fixed ) and will take the size of its container',
            },
          ],
          overridesRows: [
            {
              attribute: 'overlay.stylePreset',
              type: 'MQ<string>',
              default: 'overlay',
              description:
                'If provided, this overrides the style preset applied to the Overlay.',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'modalPanel',
              description:
                'If provided, this overrides the style preset applied to the Modal panel.',
            },
            {
              attribute: 'panel.topOffset',
              type: 'MQ<string>',
              default: '20vh',
              description: (
                <>
                  If provided, the Modal panel is offset from the top of the
                  screen.
                  <br />
                  <br />
                  Note - There is no topOffset applied to mobile breakpoints, as
                  it grows from the centre until the max height is reached. If
                  provided, sets the position of the close icon button.
                </>
              ),
            },
            {
              attribute: 'panel.width',
              type: 'MQ<string>',
              default: [
                'xs = 90%',
                'sm = 60%',
                'md = 45%',
                'lg = 38%',
                'xl = 31%',
              ],
              description:
                'If provided, this overrides the width property of the Modal panel.',
            },
            {
              attribute: 'panel.maxWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the maxWidth property of the Modal panel.',
            },
            {
              attribute: 'panel.minWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the minWidth property of the Modal panel.',
            },
            {
              attribute: 'panel.height',
              type: 'MQ<string>',
              default: "all: '80%'",
              description:
                'If provided, this overrides the height property of the Modal panel.',
            },
            {
              attribute: 'panel.minHeight',
              type: 'MQ<string>',
              default: "all: '15%'",
              description:
                'If provided, this overrides the minHeight property of the Modal panel.',
            },
            {
              attribute: 'panel.maxHeight',
              type: 'MQ<string>',
              default: ['xs>: 95%', 'md>: 80%'],
              description:
                'If provided, this overrides the maxHeight property of the Modal panel.',
            },
            ...prefixLogicalProps(logicalPaddingOverrideProps, 'panel'),
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish040',
              description:
                'If provided, this overrides the padding space set in Modal header content container.',
            },
            {
              attribute: 'content.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset050',
              description:
                'If provided, this overrides the padding space set in Modal content container.',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'If provided, this overrides the style preset applied to the Modal close Icon Button.',
            },
            {
              attribute: 'closeButton.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description:
                'If provided, this overrides the padding space set in the Modal close Icon Button.',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description:
                'If provided, this overrides the zIndex of the Modal.',
            },
            {
              attribute: 'overlay.zIndex',
              type: 'number',
              default: '70',
              description:
                'If provided, this overrides the zIndex of the Overlay.',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Block', 'Divider', 'Drawer', 'Popover'],
    }}
  />
);

export default ModalComponent;
