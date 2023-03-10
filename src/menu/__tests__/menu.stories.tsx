/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  Menu as M,
  MenuDivider,
  MenuGroup,
  MenuItem as MI,
  MenuProps as MP,
  MenuSub,
} from '..';
import {getSSRId} from '../../utils/get-ssr-id';
import {MenuGroupProps, MenuItemProps} from '../types';
import {TextBlock} from '../../text-block';
import {Block} from '../../block';
import {
  IconFilledAddCircle,
  IconFilledClose,
  IconFilledInfo,
} from '../../icons';
import {getColorCssFromTheme, styled, useMediaQueryObject} from '../../utils';
import {CreateThemeArgs, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {IconButton} from '../../icon-button';
import {InlineMessage} from '../../inline-message';

const menuCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-menu-theme',
  overrides: {
    transitionPresets: {
      customBackgroundColorChange: {
        base: {
          transitionProperty: 'background-color',
          transitionDuration: '400ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customFontColourChange: {
        base: {
          transitionProperty: 'color',
          transitionDuration: '400ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    stylePresets: {
      menuItemWithCloseButton: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
      },
      menuItemCloseIcon: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.interactiveSecondary030}}',
          borderWidth: '{{borders.borderWidth020}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
          backgroundColor: '{{colors.interactiveSecondary010}}',
          borderColor: '{{colors.interactiveSecondary040}}',
        },
      },
      menuItemCustomColourAndStyle: {
        base: {
          backgroundColor: '{{colors.amber020}}',
          color: '{{colors.teal070}}',
          borderStyle: 'solid',
          borderColor: '{{colors.teal070}}',
          borderWidth: '2px 0px 0px 0px',
        },
      },
      menuItemCustomTransition: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'solid',
          borderColor: '{{colors.transparent}}',
          borderWidth:
            '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth020}} {{borders.borderWidth000}}',
          color: '{{colors.inkSubtle}}',
          iconColor: '{{colors.inkSubtle}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
          borderColor: '{{colors.interactivePrimary030}}',
          color: '{{colors.inkBase}}',
          iconColor: '{{colors.inkBase}}',
        },
        active: {
          borderColor: '{{colors.interactivePrimary040}}',
          color: '{{colors.inkContrast}}',
          iconColor: '{{colors.inkContrast}}',
        },
      },
      customMenuGroup: {
        base: {
          color: '{{colors.inkContrast}}',
        },
      },
    },
  },
};

const href = (undefined as unknown) as string;

type MenuProps = Omit<MP, 'aria-label'>;

const Menu = (props: MenuProps) => (
  <M {...props} aria-label={`Menu ${getSSRId()}`} />
);

const MenuItem = (props: Omit<MenuItemProps, 'href'>) => (
  <MI {...props} href={href} />
);

const Box = ({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) => (
  <Block marginBlockEnd="space040">
    {label && (
      <TextBlock
        as="h2"
        stylePreset="inkSubtle"
        typographyPreset="utilityBody010"
        paddingBlock="space040"
      >
        {label}
      </TextBlock>
    )}
    {children}
  </Block>
);

const buildMenuItems = (
  n: number,
  prefix = 'Menu item ',
  props?: Omit<MenuItemProps, 'children' | 'href'>,
) =>
  Array.from(Array(n).keys()).map(i => (
    <MenuItem key={`${prefix}${i + 1}`} {...(props || {})}>
      {`${prefix}${i + 1}`}
    </MenuItem>
  ));

export const StoryMenuDefault = () => (
  <Box>
    <Menu>{buildMenuItems(4)}</Menu>
  </Box>
);
StoryMenuDefault.storyName = 'Default';

const sizeStoryMenus: Array<Omit<MenuProps, 'children'> & {label?: string}> = [
  {
    label: 'Small',
    size: 'small',
  },
  {
    label: 'Medium',
    size: 'medium',
  },
  {
    label: 'Large',
    size: 'large',
  },
];

export const StoryMenuSize = () => (
  <>
    {sizeStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <Menu {...props}>{buildMenuItems(4)}</Menu>
      </Box>
    ))}
  </>
);
StoryMenuSize.storyName = 'Size';

const stateStoryMenus: Array<Omit<MenuProps, 'children'> & {label?: string}> = [
  {
    label: 'States - horizontal',
    vertical: false,
  },
  {
    label: 'States - vertical',
    vertical: true,
  },
];

export const StoryMenuStates = () => (
  <>
    {stateStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <div style={{maxWidth: props.vertical ? '200px' : '100%'}}>
          <Menu {...props}>
            <MenuItem>Menu item base</MenuItem>
            <MenuItem selected>Menu item active</MenuItem>
            <MenuItem disabled>Menu item disabled</MenuItem>
          </Menu>
        </div>
      </Box>
    ))}
  </>
);
StoryMenuStates.storyName = 'States';

const iconStoryMenus: Array<MenuProps & {label?: string}> = [
  {
    label: 'Leading icon',
    children: (
      <MenuItem>
        <IconFilledAddCircle /> Menu item 1
      </MenuItem>
    ),
  },
  {
    label: 'Trailing icon',
    children: (
      <MenuItem>
        Menu item 1 <IconFilledAddCircle />
      </MenuItem>
    ),
  },
  {
    label: 'Leading and trailing icon',
    children: (
      <MenuItem>
        <IconFilledAddCircle /> Menu item 1 <IconFilledAddCircle />
      </MenuItem>
    ),
  },
];

export const StoryMenuIcons = () => (
  <>
    {iconStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <Menu {...props} />
      </Box>
    ))}
  </>
);
StoryMenuIcons.storyName = 'Icon';

export const StoryMenuInverse = () => {
  const InverseContainer = styled.div`
    ${getColorCssFromTheme('background', 'inkBase')}
    margin: -16px;
    padding: 16px;
  `;
  return (
    <InverseContainer>
      <Box>
        <Menu>
          {buildMenuItems(4, 'Menu item ', {
            overrides: {stylePreset: 'menuItemHorizontalInverse'},
          })}
        </Menu>
      </Box>
    </InverseContainer>
  );
};
StoryMenuInverse.storyName = 'Inverse';

const horizontalAlignmentStoryMenus: Array<MenuProps> = [
  {
    align: 'start',
    children: buildMenuItems(3, 'Left aligned menu item '),
  },
  {
    align: 'center',
    children: buildMenuItems(3, 'Center aligned menu item '),
  },
  {
    align: 'end',
    children: buildMenuItems(3, 'Right aligned menu item '),
  },
];

const HorizontalContainer = styled.div`
  & > div {
    width: 480px;
    border: 1px dashed #d60000;
  }
`;

export const StoryMenuHorizontalAlignment = () => (
  <>
    {horizontalAlignmentStoryMenus.map((props, i) => (
      <HorizontalContainer key={i}>
        <Box>
          <Menu {...props} />
        </Box>
      </HorizontalContainer>
    ))}
  </>
);
StoryMenuHorizontalAlignment.storyName = 'Horizontal alignment';

const horizontalTransitionStoryMenus: Array<MenuProps & {label?: string}> = [
  {
    label: 'Default transition preset',
    children: buildMenuItems(2),
  },
  {
    label: 'Transition preset overrides',
    children: buildMenuItems(2, 'Menu item ', {
      overrides: {
        stylePreset: 'menuItemCustomTransition',
        transitionPreset: 'customBackgroundColorChange',
      },
    }),
  },
  {
    label: 'Two transition preset overrides',
    children: buildMenuItems(2, 'Menu item ', {
      overrides: {
        stylePreset: 'menuItemCustomTransition',
        transitionPreset: [
          'customBackgroundColorChange',
          'customFontColourChange',
        ],
      },
    }),
  },
  {
    label: 'Overrides using extend on transitionDuration',
    children: buildMenuItems(2, 'Menu item ', {
      overrides: {
        stylePreset: 'menuItemCustomTransition',
        transitionPreset: {
          extend: 'backgroundColorChange',
          base: {
            transitionDuration: '{{motions.motionDuration050}}',
          },
        },
      },
    }),
  },
  {
    label: 'Overrides on two presets using extend',
    children: buildMenuItems(2, 'Menu item ', {
      overrides: {
        stylePreset: 'menuItemCustomTransition',
        transitionPreset: [
          {
            extend: 'backgroundColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration030}}',
            },
          },
          {
            extend: 'customFontColourChange',
            base: {
              transitionDuration: '{{motions.motionDuration050}}',
            },
          },
        ],
      },
    }),
  },
];

export const StoryMenuHorizontalTransition = () => (
  <>
    {horizontalTransitionStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <Menu {...props} />
      </Box>
    ))}
  </>
);
StoryMenuHorizontalTransition.storyName = 'Horizontal transitions';

export const StoryMenuHorizontalGroups = () => (
  <Box>
    <Menu>
      <MenuGroup>
        <MenuItem>Group item 1-1</MenuItem>
        <MenuItem>Group item 1-2</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem>Group item 2-1</MenuItem>
        <MenuItem>Group item 2-2</MenuItem>
      </MenuGroup>
      <MenuGroup>
        <MenuItem>Group item 3-1</MenuItem>
        <MenuItem>Group item 3-2</MenuItem>
      </MenuGroup>
    </Menu>
  </Box>
);
StoryMenuHorizontalGroups.storyName = 'Horizontal groups';

export const StoryMenuVertical = () => (
  <Box>
    <Menu vertical>{buildMenuItems(4)}</Menu>
  </Box>
);
StoryMenuVertical.storyName = 'Vertical';

const verticalAlignmentStoryMenus = horizontalAlignmentStoryMenus.map(
  props => ({vertical: true, ...props}),
);

const VerticalContainer = styled.div`
  & > div {
    border: 1px dashed #d60000;
  }
`;

const Columns = styled.div<{columns: number}>`
  display: grid;
  gap: 24px;
  ${({columns}) => ({
    'grid-template-columns': `repeat(${columns}, minmax(0, 1fr))`,
  })}
`;

export const StoryMenuVerticalAlignment = () => (
  <Columns columns={3}>
    {verticalAlignmentStoryMenus.map((props, i) => (
      <VerticalContainer key={i}>
        <Box>
          <Menu {...props} />
        </Box>
      </VerticalContainer>
    ))}
  </Columns>
);
StoryMenuVerticalAlignment.storyName = 'Vertical alignment';

const verticalTransitionStoryMenus = horizontalTransitionStoryMenus.map(
  props => ({vertical: true, ...props}),
);

const Flex = styled.div`
  display: flex;
`;

export const StoryMenuVerticalTransition = () => (
  <Columns columns={2}>
    {verticalTransitionStoryMenus
      .map(({label, ...props}) => (
        <Flex key={label}>
          <Box label={label}>
            <Menu {...props} />
          </Box>
        </Flex>
      ))
      .reduce(
        (prev, next, i) => [
          ...prev,
          ...(i === 1 ? [<div key="empty" />] : []),
          next,
        ],
        [] as React.ReactNode[],
      )}
  </Columns>
);
StoryMenuVerticalTransition.storyName = 'Vertical transition';

const menuGroupOverrides: MenuGroupProps['overrides'] = {
  title: {
    typographyPreset: 'utilityHeading010',
    stylePreset: 'customMenuGroup',
    paddingInline: 'space040',
  },
};

export const StoryMenuVerticalGroups = () => (
  <Box>
    <Menu vertical>
      <MenuGroup title="Group 1" overrides={menuGroupOverrides}>
        <MenuItem>Group item 1-1</MenuItem>
        <MenuItem>Group item 1-2</MenuItem>
      </MenuGroup>
      <MenuGroup title="Group 2" overrides={menuGroupOverrides}>
        <MenuItem>Group item 2-1</MenuItem>
        <MenuItem>Group item 2-2</MenuItem>
      </MenuGroup>
      <MenuGroup title="Group 3" overrides={menuGroupOverrides}>
        <MenuItem>Group item 3-1</MenuItem>
        <MenuItem>Group item 3-2</MenuItem>
      </MenuGroup>
    </Menu>
  </Box>
);
StoryMenuVerticalGroups.storyName = 'Vertical groups';

export const StoryMenuGroupsNested = () => (
  <Box>
    <Menu vertical>
      <MenuGroup title="Group 1" overrides={menuGroupOverrides}>
        <MenuItem>Group 1-item 1</MenuItem>
        <MenuItem>Group 1-item 2</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2" overrides={menuGroupOverrides}>
        <MenuItem>Group 2-item 1</MenuItem>
        <MenuItem>Group 2-item 2</MenuItem>
        <MenuItem>Group 2-item 3</MenuItem>

        <MenuGroup
          title="Group 2 - nested group 1"
          overrides={{
            title: {
              ...menuGroupOverrides.title,
              marginBlockStart: 'space050',
            },
            spaceInline: 'space000',
          }}
        >
          <MenuItem>Group 3-item 1</MenuItem>
          <MenuItem>Group 3-item 2</MenuItem>
        </MenuGroup>

        <MenuItem>Group 2-item 4</MenuItem>
        <MenuItem>Group 2-item 5</MenuItem>
      </MenuGroup>
    </Menu>
  </Box>
);
StoryMenuGroupsNested.storyName = 'Nested groups';

const itemsAndGroupsStoryMenus: Array<
  Omit<MenuProps, 'children'> & {label?: string}
> = [
  {
    label: 'Items and groups - horizontal',
    vertical: false,
  },
  {
    label: 'Items and groups - vertical',
    vertical: true,
  },
];

export const StoryMenuItemsAndGroups = () => (
  <>
    {itemsAndGroupsStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <div style={{maxWidth: props.vertical ? '200px' : '100%'}}>
          <Menu {...props}>
            <MenuGroup overrides={menuGroupOverrides}>
              <MenuItem>Item 1</MenuItem>
              <MenuDivider key="Item 1" />
              <MenuItem>Item 2</MenuItem>
              <MenuDivider key="Item 2" />
            </MenuGroup>
            <MenuGroup
              title="Group 1"
              overrides={{
                title: menuGroupOverrides.title,
                spaceInline: 'space000',
              }}
            >
              <MenuItem>Group 1-item 1</MenuItem>
              <MenuDivider key="Group 1-item 1" />
              <MenuItem>Group 1-item 2</MenuItem>
              <MenuDivider key="Group 1-item 2" />
            </MenuGroup>
            <MenuGroup overrides={menuGroupOverrides}>
              <MenuItem>Item 3</MenuItem>
              <MenuDivider key="Item 3" />
            </MenuGroup>
            <MenuGroup title="Group 2" overrides={menuGroupOverrides}>
              <MenuItem>Group 2-item 1</MenuItem>
              <MenuDivider key="Group 2-item 1" />
            </MenuGroup>
          </Menu>
        </div>
      </Box>
    ))}
  </>
);
StoryMenuItemsAndGroups.storyName = 'Items and groups';

const noSpaceStoryMenus: Array<
  Omit<MenuProps, 'children'> & {label?: string}
> = [
  {
    label: 'Items only - horizontal',
    vertical: false,
    overrides: {spaceInline: 'space000'},
  },
  {
    label: 'Items only - vertical',
    vertical: true,
    overrides: {spaceInline: 'space000'},
  },
];

export const StoryMenuItemsNoSpace = () => (
  <>
    {noSpaceStoryMenus.map(({label, ...props}) => (
      <Box key={label} label={label}>
        <Menu {...props}>{buildMenuItems(6)}</Menu>
      </Box>
    ))}
  </>
);
StoryMenuItemsNoSpace.storyName = 'Items no space';

export const StoryMenuCloseIcon = () => (
  <Box>
    <Menu overrides={{spaceInline: 'space000'}}>
      {Array.from(Array(4).keys()).map(i => (
        <MenuGroup>
          <MenuItem overrides={{stylePreset: 'menuItemWithCloseButton'}}>
            Menu item {i + 1}
          </MenuItem>
          <MenuItem overrides={{stylePreset: 'menuItemWithCloseButton'}}>
            <IconButton
              size="small"
              overrides={{
                stylePreset: 'menuItemCloseIcon',
                height: '24px',
                width: '24px',
              }}
            >
              <IconFilledClose />
            </IconButton>
          </MenuItem>
        </MenuGroup>
      ))}
    </Menu>
  </Box>
);
StoryMenuCloseIcon.storyName = 'Close icon buttons';

const routes = [
  {
    title: 'Menu item 1',
    id: '/item-1',
  },
  {
    title: 'Menu item 2',
    id: '/item-2',
  },
  {
    title: 'Menu item 3',
    id: '/item-3',
  },
  {
    title: 'Sub menu 1',
    id: '/sub-menu-1',
    subNav: [
      {
        title: 'Sub menu 1 Item 1',
        id: '/sub-1-item-1',
      },
      {
        title: 'Sub menu 1 Item 2',
        id: '/sub-1-item-2',
      },
    ],
  },
  {
    title: 'Sub menu 2',
    id: '/sub-menu-2',
    subNav: [
      {
        title: 'Sub menu 2 Item 1',
        id: '/sub-2-item-1',
      },
      {
        title: 'Sub menu 2 Item 2',
        id: '/sub-2-item-2',
      },
    ],
  },
];

type MenuNestedElement = {
  id: string;
  title: string;
  subNav?: MenuNestedElement[];
  expanded?: boolean;
  selected?: boolean;
  parent?: MenuNestedElement;
};

const createNestedMenu = (
  menuItems: MenuNestedElement[],
  fn: (id: string) => void,
) =>
  menuItems.map(({subNav, title, expanded, id, selected}) => {
    if (subNav) {
      return (
        <MenuSub
          key={id}
          expanded={expanded}
          selected={selected}
          onClick={() => fn(id)}
          title={title}
        >
          {createNestedMenu(subNav, fn)}
        </MenuSub>
      );
    }
    return <MenuItem key={id}>{title}</MenuItem>;
  });

const expandMyParent = (menuItem: MenuNestedElement) => {
  if (menuItem) {
    menuItem.expanded = true;
    menuItem.selected = menuItem.expanded;
    if (menuItem.parent) expandMyParent(menuItem.parent);
  }
};

const makeExpanded = (expandedId: string, menuItems: MenuNestedElement[]) =>
  menuItems.map(menuItem => {
    menuItem.expanded = expandedId === menuItem.id;
    menuItem.selected = menuItem.expanded;
    menuItem.subNav = menuItem.subNav
      ? makeExpanded(expandedId, menuItem.subNav)
      : undefined;

    if (menuItem.expanded && menuItem.parent) {
      expandMyParent(menuItem.parent);
    }

    return menuItem;
  });

const makeTree = (
  menuItems: MenuNestedElement[],
  parent: MenuNestedElement | null,
) => {
  menuItems.forEach(menuItem => {
    // @ts-ignore
    menuItem.parent = parent;
    if (menuItem.subNav) {
      makeTree(menuItem.subNav, menuItem);
    }
  });
  return menuItems;
};

const treeMenu = makeTree(routes, null);

const SubMenuContainer = styled.div`
  min-height: 150px;
`;

export const StorySubMenuControlled = () => {
  const [expandedId, setExpandedId] = React.useState('');
  const expandedRoutes = makeExpanded(expandedId, treeMenu);

  const setExpanded = React.useCallback(
    (id: string) => {
      if (expandedId === id) {
        setExpandedId('');
      } else {
        setExpandedId(id);
      }
    },
    [expandedId, setExpandedId],
  );

  return (
    <SubMenuContainer>
      <Menu>{createNestedMenu(expandedRoutes, setExpanded)}</Menu>
    </SubMenuContainer>
  );
};
StorySubMenuControlled.storyName = 'Sub menu controlled';

export const StorySubMenuUnControlled = () => (
  <SubMenuContainer>
    <Menu>
      <MenuItem>Menu item 1</MenuItem>
      <MenuItem>Menu item 2</MenuItem>
      <MenuItem>Menu item 43</MenuItem>
      <MenuSub title="Sub menu 1">
        <MenuItem>Sub menu 1 item 1</MenuItem>
        <MenuItem>Sub menu 1 item 3</MenuItem>
      </MenuSub>
      <MenuSub title="Sub menu 2">
        <MenuItem>Sub menu 2 item 1</MenuItem>
        <MenuItem>Sub menu 2 item 3</MenuItem>
      </MenuSub>
    </Menu>
  </SubMenuContainer>
);
StorySubMenuUnControlled.storyName = 'Sub menu uncontrolled';

const splitMenuItems = (arr: MenuElement[], n: number) => {
  const visible = [...arr].splice(0, n);
  const invisible = [...arr].splice(n);
  return {visible, invisible};
};

type MenuElement = {
  title: string;
  items?: MenuElement[];
};

const createMenu = (items: MenuElement[]) =>
  items.map(({title, items: subItems}) => {
    if (subItems) {
      return <MenuSub title={title}>{createMenu(subItems)}</MenuSub>;
    }

    return <MenuItem>{title}</MenuItem>;
  });
const createMoreMenu = (items: MenuElement[]) =>
  items.map(({title, items: subItems}) => {
    if (subItems) {
      return (
        <MenuSub title={title} data-testid="more-sub-menu">
          {createMoreMenu(subItems)}
        </MenuSub>
      );
    }

    return <MenuItem>{title}</MenuItem>;
  });

const MenuMore = ({children}: {children: React.ReactNode}) => (
  <MenuSub title="More">{children}</MenuSub>
);

const items: MenuElement[] = [
  {title: 'Menu item 1'},
  {
    title: 'Menu item 2',
  },
  {
    title: 'Menu item 1',
  },
  {
    title: 'Sub menu 1',
    items: [{title: 'Sub menu 1 item 1'}, {title: 'Sub menu 1 item 2'}],
  },
  {
    title: 'Sub menu 2',
    items: [{title: 'Sub menu 2 item 1'}, {title: 'Sub menu 2 item 2'}],
  },
];

export const StoryMenuMultipleAuto = () => {
  const splitNumber = useMediaQueryObject({
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  });

  const {visible, invisible} = splitMenuItems(items, splitNumber || 1000);

  return (
    <>
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{marginBlockEnd: 'space050'}}
      >
        Resize the browser window to see the menu items overflow.
      </InlineMessage>
      <SubMenuContainer>
        <Menu aria-label="menu-multiple-auto">
          {createMenu(visible)}
          {invisible.length > 0 && (
            <MenuMore>{createMoreMenu(invisible)}</MenuMore>
          )}
        </Menu>
      </SubMenuContainer>
    </>
  );
};
StoryMenuMultipleAuto.storyName = 'Sub menu auto';

export const StoryMenuOverrides = () => (
  <>
    <Box label="Logical props">
      <Menu
        overrides={{
          paddingInline: '30px',
        }}
      >
        {buildMenuItems(4)}
      </Menu>
    </Box>
    <Box label="Custom colour and style">
      <Menu>
        {buildMenuItems(4, 'Menu item ', {
          overrides: {
            stylePreset: 'menuItemCustomColourAndStyle',
            typographyPreset: 'editorialSubheadline010',
          },
        })}
      </Menu>
    </Box>
    <Box label="Custom width">
      <Menu>
        {buildMenuItems(4, 'Menu item ', {
          overrides: {
            minWidth: '200px',
          },
        })}
      </Menu>
    </Box>
    <Box label="Custom offset">
      <Menu overrides={{marginInline: '100px'}}>{buildMenuItems(4)}</Menu>
    </Box>
  </>
);
StoryMenuOverrides.storyName = 'Overrides';

export default {
  title: 'Components/Menu',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Menu',
      url: 'https://newskit.co.uk/components/menu',
      description:
        'A Menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
    },
  },
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          menuCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
