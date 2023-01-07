/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Menu,
  styled,
  MenuItem,
  InlineMessage,
  MenuGroup,
  MenuDivider,
  UnorderedList,
  toNewsKitIcon,
  MenuSub,
} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Mono} from '../../components/flags';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {Link} from '../../components/link';
import {
  getLogicalPropsTable,
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const PlaygroundContainer = styled.div`
  display: flex;
  & > nav {
    width: 500px;
  }
`;

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const MenuComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Menu',
      description:
        'Menus display a list of navigational items. They’re displayed either at the top of a screen, or at the side where space allows.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Menu',
      hero: {
        illustration: 'components/menu/menu-illustration',
      },
      introduction:
        'A menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
    }}
    componentDefaultsKey="Menu"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v3.3.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/menu',
      storybookId: 'components-menu--story-menu-items-horizontal',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2984%3A966&t=eurTjmEaa1UxGH2d-0',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the menu component, its variations and configuration options.',
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
                  <MenuSub title="Group item 3">
                    <MenuItem href={href}>Group item 3.1</MenuItem>
                    <MenuItem href={href}>Group item 3.2</MenuItem>
                    <MenuItem href={href}>Group item 3.3</MenuItem>
                  </MenuSub>
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
                label: 'space050',
                value: {spaceInline: 'space050'},
              },
            ],
          },
        ],
      } as any,
    }}
    anatomy={{
      components: [
        {
          title: 'Menu',
          summary:
            'The menu contains one required element and three optional elements.',
          rows: [
            {
              name: 'Menu item group',
              description:
                'Combines a number of ‘menu items’ and adds an optional title and divider at the bottom',
              component: ['Text Block', 'Icon'],
              optional: true,
            },
            {
              name: 'Title',
              description: 'Title of the menu item group',
              component: ['Text Block', 'Icon'],
              optional: true,
            },
            {
              name: 'Menu item',
              description: 'Includes a label and an icon',
              component: ['Text Block', 'Icon', 'Block', 'Link'],
              optional: undefined,
            },
            {
              name: 'Menu divider',
              description:
                'Add as the last element, between a menu group or between menu items',
              component: ['Divider'],
              optional: true,
            },
          ],
          media: getIllustrationComponent(
            'components/menu/menu-anatomy-illustration',
            {viewBox: '0 0 1600 900'},
          ),
        },
        {
          title: 'Sub menu',
          summary:
            'The sub menu contains three required elements and one optional element.',
          rows: [
            {
              name: 'Primary menu',
              description: 'Top-level menu',
              component: ['Menu'],
            },
            {
              name: 'Secondary menu',
              description: 'Sub-menu',
              component: ['Unordered list'],
            },
            {
              name: 'Sub menu Item',
              description: 'Label of the sub menu item',
              component: ['Text Block', 'Icon', 'Block', 'Link'],
            },
            {
              name: 'Indicator icon',
              description: 'Trailing icon of the sub menu item',
              component: ['Icon'],
              optional: true,
            },
          ],
          media: getIllustrationComponent('components/menu/anatomy', {
            viewBox: '0 0 1600 900',
          }),
        },
      ],
      rows: [],
    }}
    options={{
      introduction: 'The menu has options for different use cases:',
      cards: [
        {
          title: 'Orientation',
          description: `
          Display the menu and sub menu horizontally or vertically.
            `,
          media: getIllustrationComponent(
            'components/menu/menu-options-orientation-illustration',
          ),
        },
        {
          title: 'Title',
          description: (
            <>
              Add a title to a menu item group to categorise its menu items.
              Only available when the menu is in a vertical orientation.
            </>
          ),
          media: getIllustrationComponent(
            'components/menu/menu-options-title-illustration',
          ),
        },
        {
          title: 'Divider',
          description:
            'Add a divider between menu items, or as the last element between menu groups.',
          media: getIllustrationComponent(
            'components/menu/menu-options-divider-illustration',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Add an icon to a menu item, sub menu item, or menu item group title. Icons can be positioned either before (leading) or after (trailing) the label.',
          media: getIllustrationComponent(
            'components/menu/menu-options-icons-illustration',
          ),
        },
        {
          title: 'Alignment',
          description: (
            <>
              <UnorderedList markerAlign="start">
                <>
                  <Mono>Center</Mono>: Centres the menu item and sub menu item
                  label and icon
                </>
                <>
                  <Mono>Start</Mono>: Aligns the menu item and sub menu item
                  label and icons to the left
                </>
                <>
                  <Mono>End</Mono>: Aligns the menu item and sub menu item label
                  and icons to the right
                </>
              </UnorderedList>
              <InlineMessage role="region" aria-label="note">
                Default value depends on the vertical prop. When set to ‘true’,
                the value is set to MenuItemAlign.Start. When set to ‘false’,
                the value is set to MenuAlign.Center.
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
            'Menu items and sub menu itms come in small, medium and large. Labels, icons and the menu container change size. The menu matches the heights of the three button sizes, so they align when used together.',
          media: getIllustrationComponent(
            'components/menu/menu-options-size-illustration',
          ),
        },
        {
          title: 'Style',
          description: (
            <>
              There are three default styles based on the menus orientation and
              application:
              <UnorderedList
                markerAlign="start"
                overrides={{marginBlockStart: 'space030'}}
              >
                <>
                  <Mono>menuItemVertical</Mono> is the default style applied
                  when the menu is in a vertical orientation
                </>
                <>
                  <Mono>menuItemHorizonal</Mono> is the default style applied
                  when the menu is in a horizontal orientation
                </>
                <>
                  <Mono>menuItemHorizontalInverse</Mono> is the default style
                  applied when the menu is in a horizontal orientation on
                  contrasting background colour
                </>
              </UnorderedList>
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-options-styles-illustration',
          ),
        },
        {
          title: 'Sub menu trigger',
          description:
            'A sub menu can be triggered to be open or closed via click.',
          media: getIllustrationComponent('components/menu/sub-menu-trigger'),
        },
      ],
    }}
    states={{
      introduction:
        'The menu has the following states. By default, a menu has one menu item in a selected state.',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The default style before the user interacts with the menu.',
          media: getIllustrationComponent(
            'components/menu/menu-states-base-illustration',
          ),
        },
        {
          title: 'Hover',
          description:
            'The menu changes style to let the user know it’s interactive.',
          media: getIllustrationComponent(
            'components/menu/menu-states-hover-illustration',
          ),
        },
        {
          title: 'Active',
          description:
            'The menu item changes style to let the user know they’ve interacted with it.',
          media: getIllustrationComponent(
            'components/menu/menu-states-active-illustration',
          ),
        },
        {
          title: 'Disabled',
          description: (
            <>
              Communicates that a menu item exists, but isn’t available in that
              scenario. When the user hovers over a menu item in a disabled
              state, the cursor shows as ‘not allowed’.
              <br />
              <br />
              Disabled menu items maintain layout consistency and communicate
              that a menu item may become available if another condition is met.
            </>
          ) as any,
          media: getIllustrationComponent(
            'components/menu/menu-states-disabled-illustration',
          ),
        },
        {
          title: 'Focus',
          description:
            'Communicates that a user has highlighted a menu item (e.g. via keyboard or voice).',
          media: getIllustrationComponent(
            'components/menu/menu-states-focus-illustration',
          ),
        },
        {
          title: 'Selected',
          description:
            'The menu item changes style to let the user know they’ve selected it.',
          media: getIllustrationComponent(
            'components/menu/menu-states-selected-illustration',
          ),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the menu behaves:',
      cards: [
        {
          title: 'Width and Height',
          description:
            'A menu is 100% width and height, therefore if a specific width or height is required a parent container will control this.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-width-height-illustration',
          ),
        },
        {
          title: 'Transitions',
          description:
            'When the user hovers over a menu item, the style transitions from one state to another.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-transitions-illustration',
          ),
        },
        {
          title: 'Selected',
          description: 'The user can only select one menu item at a time.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-selected-illustration',
          ),
        },
        {
          title: 'Label Overflow',
          description:
            'When the label in a menu item or menu item group title is too long for the available horizontal space, it wraps to form another line.',
          media: getIllustrationComponent(
            'components/menu/menu-behaviours-overflow-illustration',
          ),
        },
        {
          title: 'Sub menu item toggle',
          description: (
            <>
              Menu items with a sub menu attributed to them toggle the sub menu
              open or closed.
              <br />
              <br />
              The sub menu is opened by a script when the user activates the
              top-level item and closed when the focus leaves the sub menu.
            </>
          ),
          media: getIllustrationComponent('components/menu/toggle-sub-menu'),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the menu:',
      cards: [
        {
          title: 'Do use sentence case for labels',
          description:
            'Write menu item labels in sentence case to help with scannability and legibility.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/menu/usage/do-01'),
        },
        {
          title: 'Do use for top-level sections and subsections',
          description:
            'Use a menu for navigating to different top-level sections or subsections.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/menu/usage/do-02'),
        },
        {
          title: 'Do limit the number of items in a menu',
          description:
            'Think carefully about the number of items in a menu. Too many items can hurt readability and increase the user’s cognitive load.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/menu/usage/do-03'),
        },
        {
          title: 'Do use sub menus for multi-level navigation',
          description:
            'Use a sub menu to display multiple levels of navigation items.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/menu/usage/do-04'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The menu implements the latest{' '}
          <Link href="https://www.w3.org/WAI/tutorials/menus/" target="_blank">
            WAI-ARIA Menu specifications.
          </Link>
          <br />
          <br />
          Indicate navigation menu items with sub menus visually and using
          markup.
        </>
      ),
      focusOrder: {
        title: 'Focus order',
        tableRows: [
          {
            order: 1,
            element: 'Menu item or sub menu item',
            role:
              'Focusses to the first menu item or sub menu item in the menu',
          },
          {
            order: 2,
            element: 'Menu item or sub menu item',
            role:
              'Focusses to the next menu item or sub menu item (if vertical orientation - item below and if horizontal orientation - item to the right)',
          },
        ],
      },
      interaction: {
        title: 'Keyboard interactions',
        tableRows: [
          {
            command: ['Tab'],
            description:
              'When focus is outside the menu, moves focus to the first menu item or sub menu item. If focus is on a menu item or sub menu item, moves focus to the next item',
          },
          {
            command: ['Shift', 'Tab'],
            description: 'Moves focus to previous menu item, or sub menu item',
          },
          {
            command: ['Return or Space'],
            description:
              'Activates the menu item, or sub menu item (if not already selected)',
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
                Identifies major groups of links used for navigating through a
                website or page content{' '}
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
                >
                  Learn more about the navigation role at MDN Web Docs
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
                Indicates the current page. The value page is incorporated into
                the screenreader announcement.{' '}
                <Link
                  target="_blank"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaCurrent"
                >
                  Learn more about aria-current at MDN Web Docs
                </Link>
              </>
            ),
          },
          {
            element: 'MenuDivider',
            attribute: 'role',
            value: 'separator',
            description:
              'Apply to the divider separating menu items groups or menu items',
          },
          {
            element: 'MenuGroup',
            attribute: 'aria-labelledby',
            value: 'auto-generated',
            description: (
              <>
                When menu group has the title prop, it links the title and menu
                group with <Mono>aria-labelledby</Mono>
              </>
            ),
          },
        ],
      },
    }}
    seo={{
      title: 'SEO considerations',
      introduction:
        'The rendered menu is built using a native HTML nav element so information can be crawled and indexed by search engines. Give navigational items clear, descriptive titles to allow crawlers to correctly identify content.',
    }}
    componentAPI={{
      introduction: `There are props on the four components that combine to form the menu component (menu item group, sub menu, menu item, and menu divider).`,
      components: [
        {
          title: 'Menu',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `A collection (array, component, JSX element) of Menu group, Menu items and Menu group divider components`,
            },
            {
              name: 'size',
              type: "'small' | 'medium' |'large'",
              default: 'medium',
              description: `Defines the size of the menu`,
            },
            {
              name: 'vertical',
              type: 'boolean',
              default: 'false',
              description: `If ‘true’, changes the orientation of the menu to vertical`,
            },
            {
              name: 'align',
              type: "'start' | 'end' | 'center'",
              default: 'start',
              description: `Defines the alignment of the menu items`,
            },
            {
              name: 'align',
              type: "'start' | 'end' | 'center'| 'spaceBetween'",
              default: 'start',
              description: (
                <>
                  Defines the alignment of the menu items.
                  <br />
                  <br />
                  spaceBetween set space between the text and indicatorIcon.
                  <br />
                  <br />
                  When spaceBetween is applied, text-align will default to left.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between menu items`,
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
        {
          title: 'Menu item group',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              description: `A collection (array, component, JSX element) of Menu items belonged to this group and divider components`,
            },
            {
              name: 'title',
              type: 'React.ReactNode',
              default: 'inkSubtle',
              description: `Title of item group`,
            },
            {
              name: 'aria-label',
              type: 'string',
              description: `Defines the aria-label attribute of the menu item group’s title`,
            },
          ],
          overridesRows: [
            {
              attribute: 'title.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityHeading030',
              description: `Overrides the typographyPreset of the title`,
            },
            {
              attribute: 'title.stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description: `Overrides the stylePreset of the title`,
            },
            {
              attribute: 'title.spaceInline',
              type: 'MQ<string>',
              default: 'space050',
              description: `Overrides the space between the title and the first menu item`,
            },
            {
              attribute: 'title.spaceInset',
              type: 'MQ<string>',
              default: 'space050',
              description: `Overrides the indentation of the title`,
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space050',
              description: `Defines the space between each menuGroup`,
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: `Overrides the stylePreset of the menuGroup`,
            },
          ],
        },
        {
          title: 'Menu item',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `Label and icon(s) of the menu item`,
            },
            {
              name: 'aria-label',
              type: 'string',
              default: 'label',
              description: `Defines the aria-label attribute of the menu item`,
            },
            {
              name: 'disabled',
              type: 'boolean',
              default: 'false',
              description: `If ‘true’, renders a menu item in a disabled state`,
            },
            {
              name: 'href',
              type: 'string',
              required: true,
              description: `If provided, renders the menu item as a link`,
            },
            {
              name: 'eventOriginator',
              type: 'string',
              description: `Adds event originator custom name`,
            },
            {
              name: 'eventContext',
              type: 'object',
              description: `Add extra event data to click events`,
            },
            {
              name: 'onClick',
              type: 'function',
              description: `Callback fired when menu item is clicked`,
            },
            {
              name: 'selected',
              type: 'boolean',
              description: `Sets the menu item to the selected state`,
            },
          ],
          overridesRows: [
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: 'sizing080',
              description: `Overrides the minHeight of the menu item`,
            },
            {
              attribute: 'iconSize',
              type: 'MQ<string>',
              default: 'iconSize020',
              description: `Overrides the iconSize of the menu item`,
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: [
                'horizontal: menuItemHorizontal',
                'vertical: menuItemVertical',
              ],
              description: `Overrides the stylePreset of the icon, label and background of the menu item`,
            },
            {
              attribute: 'transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: [
                'backgroundColorChange',
                'borderColorChange',
                'fontColorChange',
              ],
              description: `Overrides the transitionPreset of the menu item`,
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between the leading icon and the label, as well as the label and the trailing icon`,
            },

            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              default: 'spaceInsetSquish030',
              description: `Overrides the spaceInset of the Menu Item`,
            },
          ],
        },
        {
          title: 'Menu Divider',
          overridesRows: [
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: '',
              description: `Overrides the space between the divider and the next item. If not provided, the default value is taken either from the menu or menu group overrides`,
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'divider',
              description: `Overrides the style preset of the menu divider`,
            },
          ],
        },
        {
          title: 'Sub menu',
          propsRows: [
            {
              name: 'children',
              type: "Exclude<React.ReactNode, 'undefined'>",
              required: true,
              description: `	
              A collection (array, component, JSX element) of menu group, menu items, menu group divider, and sub menu components.`,
            },
            {
              name: 'href',
              type: 'string',
              required: true,
              description: `If provided, renders the menu item as a link`,
            },
            {
              name: 'title',
              type: 'React.ReactNode',
              description: 'Content of the menuSub',
            },
            {
              name: 'defaultExpanded',
              type: 'string',
              description:
                'Determines if the sub menu is opened or closed (uncontrolled). If true, the sub menu is visible.',
            },
            {
              name: 'expanded',
              type: 'boolean',
              required: false,
              description:
                'Determines if the sub menu is opened or closed (controlled). If true, the sub menu is visible.',
            },
            {
              name: 'onClick',
              type: '(expanded: boolean) => void',
              description: 'Toggle sub menus opened or closed.',
            },
            {
              name: 'selected',
              type: 'boolean',
              description: 'Set the menu sub to the selected state',
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                role="region"
                aria-label="props menu note"
                icon={infoIcon}
                overrides={{marginBlockEnd: 'space050'}}
              >
                Please refer to the menu item for details of the props and other
                overrides.
              </InlineMessage>
            </>
          ),
          overridesRows: [
            {
              attribute: 'minHeight',
              type: 'MQ<string>',
              default: 'sizing080',
              description: `If provided, this overrides the minHeight of the MenuSub.`,
            },
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: [
                'horizontal: menuSubItemHorizontal',
                'vertical: menuSubItemVertical',
              ],
              description: `If provided, this overrides the MenuSub styling.`,
            },
            {
              attribute: 'transitionPreset',
              type: 'TransitionToken | TransitionToken[]',
              default: [
                'backgroundColorChange',
                'borderColorChange',
                'fontColorChange',
              ],
              description: `Overrides the transitionPreset of the menu item`,
            },
            {
              attribute: 'spaceInline',
              type: 'MQ<string>',
              default: 'space020',
              description: `Overrides the space between the leading icon and the label, as well as the label and the trailing icon`,
            },
            {
              attribute: 'spaceInset',
              type: 'MQ<string>',
              default: 'space000',
              description: `Overrides the spaceInset of the Menu Item`,
            },
            {
              attribute: 'indicatorIcon',
              type: 'Override<MenuSubIconProps>',
              description: `	
              If provided, this overrides the indicatorIcon.`,
            },
            {
              attribute: 'indicatorIcon.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description: `If provided, this overrides the iconSize of the indicatorIcon.`,
            },
            {
              attribute: 'indicatorIcon.stylePreset',
              type: 'MQ<string>',
              description: `If provided, this overrides the indicatorIcon styling.`,
            },
            {
              attribute: 'list.stylePreset',
              type: 'MQ<string>',
              default: 'menuSub',
              description: `If provided, this overrides the MenuSub list styling.`,
            },
            ...getLogicalPropsTable(undefined, 'list'),
            ...getLogicalPropsTable(undefined, undefined, {
              paddingBlock: 'space030',
              paddingInline: 'space040',
            }),
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
