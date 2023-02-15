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

const Playground = ({open, ...state}: {open: boolean} & DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <DrawerWrapper>
      <Drawer {...state} open={isOpen} onDismiss={() => setIsOpen(false)}>
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
        'Drawers are layout panels that slide out from the side of the screen to reveal content like navigation or filters.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Layout',
      name: 'Drawer',
      hero: {
        illustration: 'components/drawer/drawer-illustration',
      },
      introduction:
        'Drawers are layout panels that slide out from the side of the screen to reveal content like navigation or filters.',
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
        'This demo lets you preview the drawer component, its variations and configuration options.',
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
        'The drawer contains two required elements and three optional elements.',
      rows: [
        {
          name: 'Overlay',
          description: 'Obscures the page content behind the panel',
          component: ['Overlay'],
          optional: true,
        },
        {
          name: 'Panel',
          description: 'Contains the panel header and panel content',
          component: ['Block'],
          optional: undefined,
        },
        {
          name: 'Header',
          description:
            'An area to display content at the top of a panel (e.g. title)',
          component: ['Block'],
          optional: true,
        },
        {
          name: 'Close button',
          description: 'Icon Button for closing the drawer',
          component: ['Icon button'],
          optional: true,
        },
        {
          name: 'Content',
          description: 'An area to display any content (e.g. menu)',
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
      introduction: 'The drawer has options for different use cases:',
      cards: [
        {
          title: 'Placement',
          description: `The drawer can appear from the left (default), right, top, or bottom of the screen.`,
          media: getIllustrationComponent(
            'components/drawer/drawer-options-placement-illustration',
          ),
        },
        {
          title: 'Close position',
          description: (
            <>
              When appearing from the left or right of the screen, the close
              icon button is positioned on the side the drawer originates from.
              When appearing from the top or bottom of the screen, the close
              icon button is positioned on the right as default. You can change
              the close button position to either left or right for all four
              placements.
              <InlineMessage
                role="region"
                aria-label="Close position"
                title="Note"
                overrides={{
                  marginBlockStart: 'space050',
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
          media: getIllustrationComponent(
            'components/drawer/drawer-options-close-position-illustration',
          ),
        },
        {
          title: 'Width',
          description:
            'Customise the width of a drawer placed on either the left or right (height is 100%).',
          media: getIllustrationComponent(
            'components/drawer/drawer-options-width-illustration',
          ),
        },
        {
          title: 'Height',
          description:
            'Customise the height of a drawer placed on either the top or bottom (width is 100%).',
          media: getIllustrationComponent(
            'components/drawer/drawer-options-height-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: "Here's how the drawer behaves:",
      cards: [
        {
          title: 'Animation',
          description:
            'When the user launches the drawer, the overlay fades in from 0% to 100% opacity (transitions) and the drawer panel slides in from the edge of the screen (transforms:translate the x or y axis). When the user dismisses the drawer, the same animation occurs in reverse.',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-animation-illustration',
          ),
        },
        {
          title: 'Triggering & closing the drawer',
          description:
            'Control visibility via the open prop (the drawer is hidden by default). To close the drawer, the user can click the close icon button or overlay, or press the Esc key. Any of these actions will trigger the onDismiss callback.',
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
            'When a drawer is present the content behind is not scrollable (scroll-locked).',
          media: getIllustrationComponent(
            'components/drawer/drawer-behaviours-disable-page-scrolling-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction: "Here's how and when to use the drawer:",
      cards: [
        {
          title: 'Use for navigation, filtering and checkout',
          description:
            'Drawers are appropriate for navigation, for filtering content, or in checkout flows.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/drawer/drawer-do-1-illustration',
          ),
        },
        {
          title: "Don't use for top-level navigation on larger screens",
          description:
            "Avoid using drawers for top-level navigation items when there's space to expose them on larger screens.",
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/drawer/drawer-dont-1-illustration',
          ),
        },
        {
          title: 'Keep drawers close to related content',
          description:
            'A drawer should be in close proximity to the content it relates to.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/drawer/drawer-do-2-illustration',
          ),
        },
        {
          title: "Don't nest tiered drawers",
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
        'The drawer has the following accessibility considerations:',
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'header',
            role:
              'Focusses to the content (children) passed to the header area, focussing on any interactive elements',
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
            role: 'Focusses to the close icon button in the header',
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
              'Moves focus to the next link or action in the drawer. When the drawer is active, it will maintain focus trapping. The user will only be able to tab through the drawer and its children',
          },
          {
            command: ['Shift', 'Tab'],
            description:
              'Moves focus to the previous link or action in the drawer. When the drawer is active, it will maintain focus trapping. The user will only be able to shift-tab through the drawer and its children',
          },
          {
            command: ['Esc'],
            description: 'Closes the drawer and overlay.',
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
            description: 'Defines the aria-label of the drawer',
            userSupplied: true,
          },
          {
            element: 'drawer',
            attribute: 'ariaDescribedby',
            value: 'string',
            description: 'Describes the purpose of the drawer',
            userSupplied: true,
          },
        ],
      },
    }}
    seo={{
      title: 'SEO considerations',
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
            'Ensure all text, icons and images are visible in the drawer so that information can be crawled and indexed.',
            'The drawer and its content are rendered to the DOM, but only visible to the user when the drawer is open.',
          ]}
        </OrderedList>
      ),
    }}
    componentAPI={{
      introduction:
        'The drawer has a range of props to define the experience in different use cases.',
      components: [
        {
          title: 'Drawer',
          summary: `The drawer has a range of props that can be used to define an appropriate experience for different use cases.`,
          propsRows: [
            {
              name: 'children',
              type: 'React.ReactNode',
              required: true,
              description: `Content to be rendered inside the drawer panel content area.`,
            },
            {
              name: 'open',
              type: 'boolean',
              default: 'false',
              required: true,
              description: 'Defines if the drawer is open.',
            },
            {
              name: 'onDismiss',
              type: 'function',
              required: true,
              description:
                'If provided, invokes a callback on dismissing the drawer by clicking the close icon button or overlay, or pressing the Esc key',
            },
            {
              name: 'header',
              type: 'React.ReactNode',
              description:
                'If provided, sets the content of the drawer header.',
            },
            {
              name: 'placement',
              type: ['left', 'right', 'top', 'bottom'],
              default: 'left',
              description:
                'Defines the edge of the screen from which the drawer enters and exits',
            },
            {
              name: 'closePosition',
              type: ['left', 'right', 'none'],
              default: 'left',
              description:
                'Set to left as default for left placement and right for right placement. For top and bottom placement, set to the right. If provided, users can set the position of the close icon button',
            },
            {
              name: 'restoreFocusTo',
              type: 'HTMLElement',
              description:
                'If provided, returns focus to the specified element after the drawer is closed. If not provided, focus will return to the focussed element prior to the drawer opening',
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
                'If true, focus can leave the drawer window through tabbing or clicking directly on the main content',
            },
            {
              name: 'inline',
              type: 'boolean',
              description:
                'If true, the drawer will display inline using position absolute (instead of fixed) and take the size of its container',
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
              attribute: 'overlay.zIndex',
              type: 'number',
              default: '70',
              description: 'If provided, overrides the zIndex of the overlay',
            },
            {
              attribute: 'overlay.transitionPreset',
              type: 'string | string[]',
              default: 'fade',
              description:
                'If provided, overrides the motions applied to the overlay',
            },
            {
              attribute: 'panel.stylePreset',
              type: 'MQ<string>',
              default: 'drawerPanel',
              description:
                'If provided, overrides the style preset applied to the drawer panel',
            },
            {
              attribute: 'panel.transitionPreset',
              type: 'string | string[]',
              default: "['fade', 'slideLeft']",
              description:
                'If provided, overrides the motions applied to the drawer',
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
                'If provided, overrides the size of the drawer panel when placed to the left or right. Can accept variable height or variable width depending on the orientation (size = width for left/right drawer | size=height for top/bottom drawer)',
            },
            {
              attribute: 'panel.maxSize',
              type: 'MQ<string>',
              default: '100%',
              description:
                'If provided, overrides the max-size property of the drawer panel. Can accept variable height or variable width depending on the orientation',
            },
            {
              attribute: 'panel.minSize',
              type: 'MQ<string>',
              default: '20px',
              description:
                'If provided, overrides the min-size property of the drawer panel. Can accept variable height or variable width depending on the orientation',
            },
            {
              attribute: 'panel.zIndex',
              type: 'number',
              default: '80',
              description:
                'If provided, overrides the zIndex of the drawer panel',
            },
            ...prefixLogicalProps(logicalPaddingOverrideProps, 'panel'),
            ...prefixLogicalProps(logicalMarginOverrideProps, 'panel'),
            {
              attribute: 'header.stylePreset',
              type: 'MQ<string>',
              default: '',
              description:
                'If provided, overrides the style preset applied to the drawer header',
            },
            {
              attribute: 'header.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish040',
              description:
                'If provided, overrides the padding space set in the drawer header content container',
            },
            {
              attribute: 'content.spaceInset',
              type: 'MQ<string>',
              default: 'space050',
              description:
                'If provided, overrides the padding space set in the drawer content container',
            },
            {
              attribute: 'closeButton.stylePreset',
              type: 'MQ<string>',
              default: 'iconButtonMinimalSecondary',
              description:
                'If provided, overrides the style preset applied to the drawer close icon button',
            },
            {
              attribute: 'closeButton.spaceInset',
              type: 'MQ<string>',
              default: 'space020',
              description:
                'If provided, overrides the padding space set in the drawer close icon button',
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
