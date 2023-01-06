import React from 'react';
import {
  Block,
  Button,
  H1,
  InlineMessage,
  LinkInline,
  Modal,
  P,
  Stack,
  UnorderedList,
} from 'newskit';
import {Link} from '../../components/link';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {ModalProps} from '../../../src/modal/types';
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
        'Modals are layout panels that present critical information, or request the user’s input, without navigating away from the current page.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Modal',
      hero: {
        illustration: 'components/modal-illustration',
      },
      introduction: `Modals are layout panels that present critical information, or request the user’s input, without navigating away from the current page.`,
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
        'This demo lets you preview the modal component, its variations and configuration options.',
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
        'The modal contains one required element and four optional elements.',
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
            'An area to display content at the top of a panel (e.g. title)',
          component: 'Block',
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon Button for closing the Modal',
          component: 'Icon button',
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content (e.g. form)',
          component: 'Block',
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/modal/anatomy'),
    }}
    options={{
      introduction: 'The modal has options for different use cases:',
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
                  The modal is positioned in the centre of the screen. Any
                  content passed to the modal panel causes it to grow from the
                  centre until it reaches the max height.
                </>
                <>
                  <b>md/lg/xl</b>
                  <br />
                  The modal is positioned horizontally in the centre of the
                  screen and positioned vertically offset from the top of the
                  screen. Any content passed to the modal panel causes it to
                  grow downwards until it reaches the max height.
                </>
              </UnorderedList>
            </>
          ),
          media: getIllustrationComponent('components/modal/placement'),
        },
        {
          title: 'Close button position',
          description: (
            <>
              Position the close button on the right (default) or left of the
              modal header.
              <InlineMessage
                role="region"
                aria-label="Close position"
                title="Note"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                The header and close button are optional. However, you should
                always include a close button to adhere to{' '}
                <LinkInline
                  target="_blank"
                  href="https://www.w3.org/TR/wai-aria-practices-1.2/#keyboard-interaction-7"
                >
                  ARIA principles
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
            'Customise the width of a modal for each breakpoint to allow for more or less space as needed.',
          media: getIllustrationComponent('components/modal/width'),
        },
        {
          title: 'Focus trapping',
          description: (
            <>
              You can specify the tab order of interactive elements inside the
              modal. Focus is trapped inside the modal until the user closes it.
              <br />
              <br />
              There is no focus trapping when the overlay is hidden (modeless).
            </>
          ),
          media: getIllustrationComponent('components/modal/focus-trapping'),
        },
        {
          title: 'Overlay',
          description: 'Set the modal overlay to visible or hidden.',
          media: getIllustrationComponent('components/modal/overlay'),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the modal behaves:',
      cards: [
        {
          title: 'Height',
          description:
            'The height of a modal panel is calculated as a percentage of the available screen. The modal panel grows vertically to fit the content passed into it, until it reaches the max height.',
          media: getIllustrationComponent('components/modal/height'),
        },
        {
          title: 'Entrance and exit motion',
          description:
            'When the user launches the modal, the overlay fades in from 0% to 100% opacity (transitions) and the modal panel slides upward from the centre of the screen (transforms:translate the x or y axis). When the user dismisses the modal, the same animation occurs in reverse.',
          media: getIllustrationComponent(
            'components/modal/behaviours-focus-trapping',
          ),
        },
        {
          title: 'Triggering and closing the modal',
          description:
            'Control visibility via the open prop (the modal is hidden by default). To close the modal, the user can click the close button or overlay, or press the Esc key. Any of these actions will trigger the onDismiss callback.',
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
            'When a modal is present, the content behind isn’t scrollable (scroll-locked).',
          media: getIllustrationComponent('components/modal/lock-stroll'),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the modal:',
      cards: [
        {
          title: 'Use modals for critical information',
          description:
            'Modals are appropriate for notifications that give the user critical information related to a task. For non-critical information, consider a toast or inline notification instead.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/modal/do01'),
        },
        {
          title: 'Don’t use modals for marketing',
          description:
            'Avoid using modals for marketing or advertising purposes. They’re intended for critical information or requests for user input.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/modal/dont01'),
        },
        {
          title: 'Keep modals close to related content',
          description:
            'A modal should be in close proximity to the content it relates to.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/modal/do02'),
        },
      ],
    }}
    accessibility={{
      introduction: 'The modal has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'header',
            role:
              'Focusses to the content (children) passed to the header area, focusing on any interactive elements',
          },
          {
            order: 2,
            element: 'content',
            role:
              'Focusses to the content (children) passed to the content area, focussing on any interactive elements',
          },
          {
            order: 3,
            element: 'closeButton',
            role: 'Focusses to the close button in the header',
          },
        ],
      },
      infoNoticeFocus: [
        'Upon opening, focus transfers to the first interactive element in the specified order (i.e. if there are interactive elements passed to the header, this will be the first focussable element).',
        'You can change the element that gets focus by adding a data-autofocus attribute to another HTML element.',
      ],

      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When the modal is active, it maintains focus trapping. The user will only be able to tab through it and its children',
          },
          {
            command: ['shift', 'Tab'],
            description:
              'Focusses to the previous link or action in the modal (if provided)',
          },
          {
            command: ['Esc'],
            description: 'Closes the modal and overlay',
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
            description: 'Defines the aria-label of the modal',
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
              Ensure all text, icons and images are visible in the modal so
              information can be crawled and indexed by search engines.
            </>

            <>
              The modal and its content are rendered to the DOM but only visible
              to the user when the modal is open.
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
            'The modal has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that you can override to define their appearance.',
          overridesSummary:
            'The modal has a range of props to define the experience in different use cases, and a range of predefined elements and attributes that you can override to define their appearance.',
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
                'If provided, invokes a callback on dismissing the modal by clicking the close button or overlay, or pressing the Esc key',
            },
            {
              name: 'header',
              type: 'React.ReactNode',
              description: 'If provided, sets the content of the modal header',
            },
            {
              name: 'closePosition',
              type: ['left', 'right', 'none'],
              description: 'If provided, sets the position of the close button',
            },
            {
              name: 'restoreFocusTo',
              type: 'HTMLElement',
              description:
                'If provided, returns focus to the specified element after the modal is closed. If not provided, focus returns to the element that was focussed before the modal opened',
            },
            {
              name: 'disableFocusTrap',
              type: 'boolean',
              description:
                'If true, focus can leave the modal window by tabbing, or clicking directly on the main content',
            },
            {
              name: 'inline',
              type: 'boolean',
              description:
                'If true, the modal displays inline using position absolute (instead of fixed) and takes the size of its container',
            },
          ],
          overridesRows: [
            {
              attribute: 'overlay.stylePreset',
              type: 'MQ<string>',
              default: 'overlay',
              description:
                'If provided, overrides the style preset applied to the overlay',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'modalPanel',
              description:
                'If provided, overrides the style preset applied to the modal panel',
            },
            {
              attribute: 'panel.topOffset',
              type: 'MQ<string>',
              default: '20vh',
              description:
                'If provided, offsets the modal panel from the top of the screen. There is no topOffset applied to mobile breakpoints, as it grows from the centre until the max height is reached. If provided, sets the position of the close button',
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
                'If provided, overrides the width property of the modal panel',
            },
            {
              attribute: 'panel.maxWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, overrides the maxWidth property of the modal panel',
            },
            {
              attribute: 'panel.minWidth',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, overrides the minWidth property of the modal panel',
            },
            {
              attribute: 'panel.height',
              type: 'MQ<string>',
              default: "all: '80%'",
              description:
                'If provided, overrides the height property of the modal panel',
            },
            {
              attribute: 'panel.minHeight',
              type: 'MQ<string>',
              default: "all: '15%'",
              description:
                'If provided, overrides the minHeight property of the modal panel',
            },
            {
              attribute: 'panel.maxHeight',
              type: 'MQ<string>',
              default: ['xs>: 95%', 'md>: 80%'],
              description:
                'If provided, overrides the maxHeight property of the modal pane',
            },
            ...prefixLogicalProps(logicalPaddingOverrideProps, 'panel'),
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish040',
              description:
                'If provided, overrides the padding space set in the modal header content container',
            },
            {
              attribute: 'content.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset050',
              description:
                'If provided, overrides the padding space set in the modal content container',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'If provided, overrides the style preset applied to the modal close button',
            },
            {
              attribute: 'closeButton.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description:
                'If provided, overrides the padding space set in the modal close button',
            },
            {
              attribute: 'zIndex',
              type: 'number',
              default: '80',
              description: 'If provided, overrides the zIndex of the modal',
            },
            {
              attribute: 'overlay.zIndex',
              type: 'number',
              default: '70',
              description: 'If provided, overrides the zIndex of the overlay',
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
