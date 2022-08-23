/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Menu,
  styled,
  TextBlock,
  MenuItem,
  InlineMessage,
  MenuGroup,
  MenuDivider,
} from 'newskit';
import {Mono} from '../../components/flags';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {Link} from '../../components/link';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const PlaygroundContainer = styled.div`
  display: flex;
  & > nav {
    width: 500px;
  }
`;

const MenuComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Menu',
      description:
        'A Menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Menu',
      hero: {
        illustration: 'components/menu/menu-illustration',
      },
      introduction:
        'A Menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
    }}
    componentDefaultsKey="Menu"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/menu',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Menu component, its variations, and configuration options.',
      playground: {
        componentName: 'Menu',
        component: (state: any) => {
          const href = 'http://newskit.co.uk';
          return (
            <PlaygroundContainer>
              <Menu aria-label="menu" {...state}>
                <MenuGroup title="Group 1">
                  <MenuItem href={href}>Group 1-item 1</MenuItem>
                  <MenuItem href={href}>Group 1-item 2</MenuItem>
                  <MenuItem href={href}>Group 1-item 3</MenuItem>
                </MenuGroup>
                <MenuDivider />

                <MenuGroup title="Group 2">
                  <MenuItem href={href}>Group 2-item 1</MenuItem>
                  <MenuItem href={href}>Group 2-item 2</MenuItem>
                  <MenuItem href={href}>Group 2-item 3</MenuItem>
                </MenuGroup>
                <MenuDivider />
              </Menu>
            </PlaygroundContainer>
          );
        },
        knobs: [
          {
            name: 'Size',
            propName: 'size',
            options: [
              {
                label: 'small',
                value: 'small',
              },
              {
                label: 'medium',
                value: 'medium',
                isDefault: true,
              },
              {
                label: 'large',
                value: 'large',
              },
            ],
          },
          {
            name: 'vertical',
            propName: 'vertical',
            type: 'boolean',
            value: false,
          },
          {
            name: 'Align',
            propName: 'align',
            options: [
              {
                label: 'center',
                value: 'center',
                isDefault: true,
              },
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          {
            name: 'Space Inline',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {spaceInline: undefined},
                isDefault: true,
              },
              {
                label: 'space020',
                value: {spaceInline: 'space020'},
              },
            ],
          },
        ],
      } as any,
    }}
    anatomy={{
      introduction:
        'A Menu contains one required element and three optional elements.',

      rows: [
        {
          name: 'Menu Item Group',
          description:
            'Combines a number of ‘Menu Items’ and adds and optional title and a divider at the bottom.',
          component: ['Text Block', 'Icon'],
          optional: true,
        },
        {
          name: 'Title',
          description: 'Title of the menu item group.',
          component: ['Text Block', 'Icon'],
          optional: true,
        },
        {
          name: 'Menu Item',
          description: 'Includes a label and an icon.',
          component: ['Text Block', 'Icon', 'Block', 'Link'],
          optional: undefined,
        },
        {
          name: 'Menu Divider',
          description:
            'Divider as the last element or between a Menu Group or between Menu Items.',
          component: ['Divider'],
          optional: true,
        },
      ],
      media: getIllustrationComponent(
        'components/menu/menu-anatomy-illustration',
      ),
    }}
    options={{
      introduction:
        'A Menu has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Orientation',
          description: (
            <TextBlock>
              A Menu can be displayed horizontally or vertically to effectively
              and appropriately use the space on a screen.
            </TextBlock>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-options-orientation-illustration',
          ),
        },
        {
          title: 'Title',
          description: (
            <>
              <TextBlock>
                A title can be displayed in a Menu Item Group above the Menu
                items. This could be used for categorising Menu items.
              </TextBlock>
              <TextBlock>
                This is only available when a Menu is in a vertical orientation.
              </TextBlock>
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-options-title-illustration',
          ),
        },
        {
          title: 'Menu Divider',
          description:
            'Dividers can be displayed as the last element between Menu Groups or between Menu Items.',
          media: getIllustrationComponent(
            'components/menu/menu-options-divider-illustration',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in Menu Item Group titles as well as Menu Items and can be positioned either before (leading) or after (trailing) the label.',
          media: getIllustrationComponent(
            'components/menu/menu-options-icons-illustration',
          ),
        },
        {
          title: 'Alignment',
          description: (
            <>
              <ul>
                <li>
                  <Mono>Center</Mono>: Centers the Menu item label and icons.
                </li>
                <li>
                  <Mono>Start</Mono>: Aligns the Menu item label and icons to
                  the left.
                </li>
                <li>
                  <Mono>End</Mono>: Aligns the Menu item label and icons to the
                  right.
                </li>
              </ul>
              <InlineMessage role="region" aria-label="note" title="Note">
                Default value depends on the vertical prop: when is True the
                value is set to MenuItemAlign.Start, and MenuAlign.Center when
                is False.
              </InlineMessage>
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-options-alignment-illustration',
          ),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of the Menu item: small, medium, and large. Menu item label, icon, and the menu container change size. Menu matches the same height as three button sizes, to align when used together.',
          media: getIllustrationComponent(
            'components/menu/menu-options-size-illustration',
          ),
        },
        {
          title: 'Style',
          description: (
            <>
              <p>
                There are three default styles that can be mapped based on their
                orientation and application.
              </p>
              <ul>
                <li>
                  <Mono>menuItemVertical</Mono> this is the default style
                  applied when the menu is in a vertical orientation.
                </li>
                <li>
                  <Mono>menuItemHorizonal</Mono> this is the default style
                  applied when the menu is in a horizontal orientation.
                </li>
                <li>
                  <Mono>menuItemHorizontalInverse</Mono> this is the default
                  style applied when the menu is in a horizontal orientation on
                  contrasting background colour.
                </li>
              </ul>
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-options-styles-illustration',
          ),
        },
      ],
    }}
    states={{
      introduction:
        'A Menu has states including, base, hover, active, disabled and focus. They can be displayed with both, base or selected. By default, a Menu has one menu item in a selected state.',
      cards: [
        {
          title: 'Base',
          description:
            'Menu items have a base state. This is the base style of the Menu item before it has been interacted with by a user.',
          media: getIllustrationComponent(
            'components/menu/menu-states-base-illustration',
          ),
        },
        {
          title: 'Hover',
          description:
            'Menu items have a hover state. The style of the Menu item changes to visually communicate and provide feedback to the user that the Menu item is an interactive element.',
          media: getIllustrationComponent(
            'components/menu/menu-states-hover-illustration',
          ),
        },
        {
          title: 'Active',
          description:
            'Menu items have an active state. The style of the Menu item changes to visually communicate and provide feedback to the user that the Menu item has been interacted with.',
          media: getIllustrationComponent(
            'components/menu/menu-states-active-illustration',
          ),
        },
        {
          title: 'Disabled',
          description:
            'Menu items in a disabled state communicate that a Menu item exists, but is not available to the user in that scenario. When the user’s cursor hovers over a Menu item in a disabled state, the cursor shows as not-allowed. Disabled Menu items are often used to maintain layout consistency and communicate that a Menu item may become available if another condition has been met.',
          media: getIllustrationComponent(
            'components/menu/menu-states-disabled-illustration',
          ),
        },
        {
          title: 'Focus',
          description:
            'Menu items in a focus state communicate that a user has highlighted a Menu item, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent(
            'components/menu/menu-states-focus-illustration',
          ),
        },
        {
          title: 'Selected',
          description:
            'Menu items have a selected state. The style of the Menu item changes to visually communicate and provide feedback to the user that the Tab item has been selected.',
          media: getIllustrationComponent(
            'components/menu/menu-states-selected-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction:
        'A Menu has the following component functions when integrated into a product.',
      cards: [
        {
          title: 'Width and Height',
          description:
            'A Menu is 100% width and height, therefore if a specific width or height is required a parent container will control this.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-width-height-illustration',
          ),
        },
        {
          title: 'Transitions',
          description:
            'When the user hovers over a Menu item, the style transitions from one state to another.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-transitions-illustration',
          ),
        },
        {
          title: 'Selected',
          description: 'Only one Menu item can be selected at any given time.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-selected-illustration',
          ),
        },
        {
          title: 'Label Overflow',
          description:
            'When the label in a Menu title or Menu item is too long for the available horizontal space, they wrap to form another line.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-overflow-illustration',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use a Menu component.',
      cards: [
        {
          description:
            'Use a Menu to navigate to different top level sections or sub-sections.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/menu/menu-do-01-illustration',
          ),
        },
        {
          description: 'Use a Menu to open content panes within a page.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/menu/menu-dont-01-illustration',
          ),
        },
        {
          description:
            'When using a Menu you should be mindful of the number of items you’re displaying, helping readability and also reducing the cognitive load.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/menu/menu-do-02-illustration',
          ),
        },
        {
          description:
            'All Menu items should be consistent in size e.g. small, medium or large Menu item. This is to ensure Menu items have equal importance.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/menu/menu-dont-02-illustration',
          ),
        },
        {
          description:
            'Menu item labels should be in sentence case. This helps with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/menu/menu-do-03-illustration',
          ),
        },
        {
          description:
            'Menu item labels shouldn’t be truncated. Keep them short, and fully visible.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/menu/menu-dont-03-illustration',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          Menus implement the latest{' '}
          <Link href="https://www.w3.org/WAI/tutorials/menus/">
            WAI-ARIA Menu specifications.
          </Link>
          .
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Menu Item',
            role: 'Focusses to the first Menu Item in the Menu.',
          },
          {
            order: 2,
            element: 'Menu Item',
            role:
              'Focusses to the next Menu item (if vertical orientation - item below and if horizontal orientation - item to the right).',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside of the Menu it moves focus to the first Menu item. If focus is on a Menu item it moves focus to the next Menu item.',
          },
          {
            command: ['Shift', 'Tab'],
            description: 'Moves focus to previous menu item.',
          },
          {
            command: ['Return or Space'],
            description:
              'Activates the Menu item if it was not already selected.',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'Menu',
            attribute: 'role',
            value: 'navigation',
            description: (
              <>
                The navigation landmark role is used to identify major groups of
                links used for navigating through a website or page content.{' '}
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
                >
                  Aria: Navigation Role - Accessibility | MDN
                </Link>
              </>
            ),
          },
          {
            element: 'Menu',
            attribute: 'aria-label',
            value: '',
            description:
              'Labels should be short but descriptive, to allow users to distinguish between multiple menus on a web page.',
            userSupplied: true,
          },
          {
            element: 'MenuItem',
            attribute: 'aria-current',
            value: 'page',
            description: (
              <>
                The <Mono>aria-current</Mono> attribute indicates the current
                page. The value <Mono>page</Mono> is incorporated into the
                screenreader announcement.{' '}
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaCurrent"
                >
                  Element.ariaCurrent - Web APIs | MDN
                </Link>
              </>
            ),
          },
          {
            element: 'MenuDivider',
            attribute: 'role',
            value: 'separator',
            description:
              'This is applied to the divider separating Menu Items Groups or Menu Items.',
          },
          {
            element: 'MenuGroup',
            attribute: 'aria-labelledby',
            value: 'auto-generated',
            description:
              'When MenuGroup has title prop it link the title and menugroup with aria-labelledby.',
          },
        ],
      },
    }}
    seo={{
      title: 'SEO Considerations',
      introduction:
        'The rendered menu is build using a native HTML nav element, this should ensure that it is easily for crawlers to discover. Navigational Items should have clear descriptive titles to allow crawlers to correctly identify content.',
    }}
    componentAPI={{
      introduction: `There are props on the three components that combine to form the Menu component (Menu, Menu Item Group, Menu Item).`,
      components: [
        {
          title: 'Menu',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `A collection (array, component, JSX element) of Menu group, Menu items and Menu group divider components.`,
            },
            {
              name: 'size',
              type: "'small' | 'medium' |'large'",
              default: 'medium',
              description: `Defines the size of the Menu.`,
            },
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description: `If true, changes the orientation of the Menu to vertical.`,
            },
            {
              name: 'align',
              type: "'start' | 'end' | 'center'",
              default: 'MenuItemAlign.start',
              description: `Defines the alignment of the Menu items.`,
            },
          ],
          overridesRows: [
            {
              attribute: 'menu.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between Menu Items.`,
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
        {
          title: 'Menu Item Group',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              description: `A collection (array, component, JSX element) of Menu items belonged to this group and divider components.`,
            },
            {
              name: 'title',
              type: 'React.ReactNode',
              default: 'inkSubtle',
              description: `Title of item group.`,
            },
            {
              name: 'aria-label',
              type: 'string',
              description: `Defines the aria-label attribute of the title of the Menu item group title.`,
            },
          ],
          overridesRows: [
            {
              attribute: 'menuGroup.title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading030',
              description: `Overrides the typographyPreset of the title.`,
            },
            {
              attribute: 'menuGroup.title.stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description: `Overrides the stylePreset of the title.`,
            },
            {
              attribute: 'menuGroup.title.spaceInline',
              type: 'MQ<string>',
              default: 'space050',
              description: `Overrides the space between title and the first Menu Item.`,
            },
            {
              attribute: 'menuGroup.title.spaceInset',
              type: 'MQ<string>',
              default: 'space050',
              description: `Overrides the indentation of the title.`,
            },
            {
              attribute: 'menuGroup.spaceInline',
              type: 'MQ<string>',
              default: 'space050',
              description: `Defines the space between MenuGroup.`,
            },
            {
              attribute: 'menuGroup.stylePreset',
              type: 'MQ<string>',
              description: `Overrides the stylePreset of the MenuGroup.`,
            },
          ],
        },
        {
          title: 'Menu Item',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `Label and icon(s) of the Menu item.`,
            },
            {
              name: 'aria-label',
              type: 'string',
              default: 'label',
              description: `Defines the aria-label attribute of the Menu item.`,
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: `If true, renders a Menu item in a disabled state.`,
            },
            {
              name: 'href',
              type: 'string',
              required: true,
              description: `If provided, will render the Menu item as a link.`,
            },
            {
              name: 'eventOriginator',
              type: 'string',
              description: `This prop allows users to add event originator custom name.`,
            },
            {
              name: 'eventContext',
              type: 'object',
              description: `This prop allows users to add extra event data to click events.`,
            },
            {
              name: 'onClick',
              type: 'function',
              description: `Callback fired when menuItem is clicked.`,
            },
            {
              name: 'selected',
              type: 'boolean',
              description: `This prop set the menuItem to the selected state`,
            },
          ],
          overridesRows: [
            {
              attribute: 'menuItem.vertical.minHeight',
              type: 'MQ<string>',
              default: 'sizing080',
              description: `Overrides the minHeight of the Menu Item.`,
            },
            {
              attribute: 'menuItem.horizontal.minHeight',
              type: 'MQ<string>',
              default: 'sizing080',
              description: `Overrides the minHeight of the Menu Item.`,
            },
            {
              attribute: 'menuItemIcon.vertical.iconSize',
              type: 'MQ<string>',
              default: 'iconSize020',
              description: `Overrides the iconSize of the Menu Item.`,
            },
            {
              attribute: 'menuItemIcon.horizontal.iconSize',
              type: 'MQ<string>',
              default: 'iconSize020',
              description: `Overrides the iconSize of the Menu Item.`,
            },
            {
              attribute: 'menuItem.vertical.stylePreset',
              type: 'MQ<string>',
              default: 'menuItemVertical',
              description: `Overrides the stylePreset of the icon, label and background of the Menu Item.`,
            },
            {
              attribute: 'menuItem.horizontal.stylePreset',
              type: 'MQ<string>',
              default: 'menuItemHorizontal',
              description: `Overrides the stylePreset of the icon, label and background of the Menu Item.`,
            },
            {
              attribute: 'menuItem.vertical.transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: [
                'backgroundColorChange',
                'borderColorChange',
                'fontColorChange',
              ],
              description: `Overrides the transitionPreset of the Menu Item.`,
            },
            {
              attribute: 'menuItem.horizontal.transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: [
                'backgroundColorChange',
                'borderColorChange',
                'fontColorChange',
              ],
              description: `Overrides the transitionPreset of the Menu Item.`,
            },
            {
              attribute: 'menuItem.vertical.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between the leading icon and the label, as well as the label and the trailing icon.`,
            },
            {
              attribute: 'menuItem.horizontal.spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between the leading icon and the label, as well as the label and the trailing icon.`,
            },
            {
              attribute: 'menuItem.vertical.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish030',
              description: `Overrides the spaceInset of the Menu Item.`,
            },
            {
              attribute: 'menuItem.horizontal.spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish030',
              description: `Overrides the spaceInset of the Menu Item.`,
            },
          ],
        },
        {
          title: 'Menu Divider',
          propsRows: [],
          overridesRows: [
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: '',
              description: `Overrides the space between the divider and the next item. If not provided, the default value is taken either from the menu or menuGroup overrides.`,
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'divider',
              description: `Overrides the stylePreset of the Menu Divider.`,
            },
          ],
        },
      ],
    }}
    related={{
      related: ['Accordion', 'Link', 'Tabs', 'Tag'],
    }}
  />
);

export default MenuComponent;
