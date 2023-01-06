import React from 'react';
import {
  Drawer,
  DrawerProps,
  InlineMessage,
  LinkInline,
  OrderedList,
  styled,
} from 'newskit';

import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
  prefixLogicalProps,
} from '../../components/component-api/common-logical-props';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';

import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const DrawerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Playground = ({open, ...state}: {open: boolean}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <DrawerWrapper>
      <Drawer
        {...(state as DrawerProps)}
        open={isOpen}
        onDismiss={() => setIsOpen(false)}
      >
        Content
      </Drawer>
    </DrawerWrapper>
  );
};

const DrawerComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Drawer',
      description:
        'A Drawer is a layout panel that slides out the side of the screen revealing content like navigation or filters.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Drawer',
      hero: {
        illustration: 'components/drawer/drawer-illustration',
      },
      introduction:
        'A Drawer is a layout panel that slides out the side of the screen revealing content like navigation or filters.',
    }}
    componentDefaultsKey="drawer"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.0.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/develop/src/drawer',
      figmaUrl:
        'https://www.figma.com/file/VYOAzpSq02PoR7cci6SJlE/?node-id=324%3A2',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Drawer component, its variations, and configuration options.',
      playground: {
        componentName: 'Drawer',
        // @ts-ignore
        component: Playground,
        knobs: [
          {
            name: 'open',
            propName: 'open',
            value: false,
          },
          {
            name: 'placement',
            propName: 'placement',
            options: [
              {
                label: 'Left',
                value: 'left',
                isDefault: true,
              },
              {
                label: 'Right',
                value: 'right',
              },
              {
                label: 'Top',
                value: 'top',
              },
              {
                label: 'Bottom',
                value: 'bottom',
              },
            ],
          },
          {
            name: 'closePosition',
            propName: 'closePosition',
            options: [
              {
                label: 'Unset',
                isDefault: true,
                value: undefined,
              },
              {
                label: 'Left',
                value: 'left',
                isDefault: true,
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
            value: true,
          },
          {
            name: 'inline',
            propName: 'inline',
            value: true,
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The Drawer contains four required elements and one optional element.',
      rows: [
        {
          name: 'Overlay',
          description: 'Obscures the page content behind the panel',
          component: ['Overlay'],
          optional: true,
        },
        {
          name: 'Panel',
          description: 'Contains the Panel Header and Panel Content',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Header',
          description:
            'An area to display content at the top of a panel eg a title',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Close Button',
          description: 'Icon Button for closing the Drawer',
          component: ['Icon Button'],
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content eg a menu',
          component: ['Block'],
          optional: undefined,
        },
      ],
      media: getIllustrationComponent(
        'components/drawer/drawer-anatomy-illustration',
        {viewBox: '0 0 1600 900'},
      ),
    }}
    options={{
      introduction:
        'The Drawer has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Placement',
          description: `The Drawer can appear from the left (default), right, top, or
              bottom of the screen. When appearing from the left or right of
              the screen, the close Icon Button is positioned on the same side
              where the Drawer originates from. When appearing from the top or
              bottom of the screen, the close Icon Button is positioned on the
              right as default.`,

          media: getIllustrationComponent(
            'components/drawer/drawer-options-placement-illustration',
          ),
        },
        {
          title: 'Close Position',
          description: (
            <>
              The position of the close button in the Drawer header is set to
              left as default for left placement, and right for right placement.
              For top and bottom placement, it is set to the right. Users have
              the option to set the close button position to either left or
              right for all four placements.
              <InlineMessage
                role="region"
                aria-label="Close position"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
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
          media: getIllustrationComponent(
            'components/drawer/drawer-options-close-position-illustration',
          ),
        },
        {
          title: 'Width',
          description:
            'When the placement of the Drawer is set to either left or right, the width of a Drawer can be customised appropriately, with the height being 100%.',
          media: getIllustrationComponent(
            'components/drawer/drawer-options-width-illustration',
          ),
        },
        {
          title: 'Height',
          description:
            'When the placement of the Drawer is set to either top or bottom, the height of a Drawer can be customised appropriately, with the width being 100%.',
          media: getIllustrationComponent(
            'components/drawer/drawer-options-height-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'The following guidance describes how the Drawer component behaves.',
      cards: [
        {
          title: 'Animation',
          description:
            'When the Drawer is launched, the overlay fades in from 0% to 100% opacity (transitions) and the Drawer panel slides in from the edge of the screen (transforms:translate the x or y axis). When the Drawer is dismissed, the same animation in reverse occurs.',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-animation-illustration',
          ),
        },
        {
          title: 'Triggering & Closing the Drawer',
          description:
            'The Drawer visibility is controlled via the open prop on the component, hidden by default. To handle closing the Drawer the user will need to supply and handle via the onDismiss callback. This will be triggered when the user clicks on the close Icon Button, the overlay, or by pressing the Esc keyboard key.',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-triggering-closing-illustration',
          ),
        },
        {
          title: 'Content overflow',
          description:
            'When the content is too long to fit, content overflows and Scroll is applied. The header becomes fixed and the content can then independently scroll to bring overflowed content into view.',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-content-overflow-illustration',
          ),
        },
        {
          title: 'Disable page scrolling when launched',
          description:
            'When a Drawer is present the content behind is not scrollable (scroll-locked).',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-disable-page-scrolling-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the drawer:',
      cards: [
        {
          title: 'Do use for revealing additional content',
          description:
            'Drawers are appropriate for navigation, for filtering content, or in checkout flows.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/drawer/drawer-do-1-illustration',
          ),
        },
        {
          title: 'Don’t use for top-level navigation on larger screens',
          description:
            'Avoid using drawers for top-level navigation items when there’s space to expose them on larger screens.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/drawer/drawer-dont-1-illustration',
          ),
        },
        {
          title: 'Do keep drawers close to related content',
          description:
            'A drawer should be in close proximity to the content it relates to.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/drawer/drawer-do-2-illustration',
          ),
        },
        {
          title: 'Don’t nest tiered drawers',
          description:
            'Avoid nesting tiered drawers as this can cause usability issues. Consider an alternative component (e.g. accordion) or rethink the page structure.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/drawer/drawer-dont-2-illustration',
          ),
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
              'When the Drawer is active it will maintain focus trapping. The user will only be able to tab through it and its children.',
          },
          {
            command: ['Shift', 'Tab'],
            description:
              'When the Drawer is active it will maintain focus trapping. The user will only be able to tab through it and its children.',
          },
          {
            command: ['Esc'],
            description: 'Closes the Drawer and overlay.',
          },
        ],
      },

      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'drawer',
            attribute: 'ariaLabelledby',
            value: 'string',
            description: 'Defines the Aria-label of the Drawer',
            userSupplied: true,
          },
          {
            element: 'drawer',
            attribute: 'ariaDescribedby',
            value: 'string',
            description: 'Describes the purpose of the Drawer',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction: (
        <OrderedList
          overrides={{
            content: {
              stylePreset: 'inkBase',
              typographyPreset: 'editorialParagraph020',
            },
          }}
        >
          {[
            'Ensure all text, icons, and images are visible in the Drawer so that information can be crawled and indexed.',
            'The Drawer component and its content are rendered to the DOM, but only visible to the user when the Drawer is open.',
          ]}
        </OrderedList>
      ),
    }}
    componentAPI={{
      introduction:
        'The Drawer has a range of props that can be used to define an appropriate experience for different use cases.',
      components: [
        {
          title: 'Drawer',
          summary: `The Drawer has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: `Content to be rendered inside the Drawer panel content area.`,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              required: true,
              description: 'Defines if the Drawer is open.',
            },
            {
              name: 'onDismiss',
              type: 'function',
              required: true,
              description:
                'If provided, a callback which is invoked on dismissing the Drawer through either clicking the close Icon Button, overlay, or pressing the Esc key.',
            },
            {
              name: 'header',
              type: 'React.ReactNode',
              description:
                'If provided, sets the content of the Drawer header.',
            },
            {
              name: 'placement',
              type: ['left', 'right', 'top', 'bottom'],
              default: 'left',
              description:
                'Defines the edge of the screen from which the Drawer enters and exits from.',
            },
            {
              name: 'closePosition',
              type: ['left', 'right', 'none'],
              default: 'left',
              description:
                'closePosition is set to left as default for left placement, and right for right placement. For top and bottom placement, it is set to the right. If provided, users can set the position of the close icon button.',
            },
            {
              name: 'restoreFocusTo',
              type: 'HTMLElement',
              description:
                'If provided, returns focus to the specified element after the Drawer is closed. If not provided, focus will return to the focused element prior to the Drawer opening.',
            },
            {
              name: 'hideOverlay',
              type: 'boolean',
              description:
                "If true, the overlay behind the drawer won't be shown and scrolling through the entire page will be enabled.",
            },
            {
              name: 'disableFocusTrap',
              type: 'boolean',
              description:
                'If true, focus can leave the drawer window through tabbing or direct click on the main content.',
            },
            {
              name: 'inline',
              type: 'boolean',
              description:
                'If true,the drawer will display inline using position absolute ( instead of fixed ) and will take the size of its container',
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
              attribute: 'overlay.zIndex',
              type: 'number',
              default: '70',
              description:
                'If provided, this overrides the zIndex of the Overlay.',
            },
            {
              attribute: 'overlay.transitionPreset',
              type: 'string | string[]',
              default: 'fade',
              description:
                'If provided, this overrides the motions applied to the Overlay.',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'drawerPanel',
              description:
                'If provided, this overrides the style preset applied to the Drawer panel.',
            },
            {
              attribute: 'panel.transitionPreset',
              type: 'string | string[]',
              default: "['fade', 'slideLeft']",
              description:
                'If provided, this overrides the motions applied to the Drawer.',
            },
            {
              attribute: 'panel.size',
              type: 'MQ<string>',
              default: [
                'xs = 305px',
                'sm = 309px',
                'md = 310px',
                'lg = 333px',
                'xl =354px',
              ],
              description:
                'If provided, this overrides the size of the Drawer panel when placed to the left or right. Can accept variable height or variable width depending on the orientation. (size = width for left/right Drawer | size=height for top/bottom Drawer).',
            },
            {
              attribute: 'panel.maxSize',
              type: 'MQ<string>',
              default: '100%',
              description:
                'If provided, this overrides the max-size property of the Drawer panel. Can accept variable height or variable width depending on the orientation.',
            },
            {
              attribute: 'panel.minSize',
              type: 'MQ<string>',
              default: '20px',
              description:
                'If provided, this overrides the min-size property of the Drawer panel. Can accept variable height or variable width depending on the orientation.',
            },
            {
              attribute: 'panel.zIndex',
              type: 'number',
              default: '80',
              description:
                'If provided, this overrides the zIndex of the Drawer panel.',
            },
            ...prefixLogicalProps(logicalPaddingOverrideProps, 'panel'),
            ...prefixLogicalProps(logicalMarginOverrideProps, 'panel'),
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, this overrides the style preset applied to the Drawer header.',
            },
            {
              attribute: 'header.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish040',
              description:
                'If provided, this overrides the padding space set in Drawer header content container.',
            },
            {
              attribute: 'content.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset050',
              description:
                'If provided, this overrides the padding space set in the Drawer content container.',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'If provided, this overrides the style preset applied to the Drawer close Icon Button.',
            },
            {
              attribute: 'closeButton.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInset020',
              description:
                'If provided, this overrides the padding space set in the Drawer close Icon Button.',
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Block', 'Divider', 'Modal', 'Popover'],
    }}
  />
);

export default DrawerComponent;
