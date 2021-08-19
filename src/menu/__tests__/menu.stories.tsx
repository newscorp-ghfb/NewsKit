import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {IconFilledAddCircleOutline} from '../../icons';
import {Menu, MenuItem, MenuGroup, MenuDivider} from '..';
import {MenuItemAlign, MenuItemSize} from '../types';
import {styled} from '../../utils';
import {getSSRId} from '../../utils/get-ssr-id';

const href = 'http://newskit.co.uk';

const myCustomTheme = compileTheme(
  createTheme({
    name: 'my-custom-menu-theme',
    overrides: {
      stylePresets: {
        menuItemCustom: {
          base: {
            backgroundColor: '#ffe66b',
            borderStyle: 'solid',
            borderColor: '#222222',
            borderWidth: '8px 0px 0px 0px',
            color: '#222222',
            iconColor: 'grey',
          },
        },
      },
    },
  }),
);

const MenuGroupTitle = () => (
  <>
    <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
    <span id="custom-menu-title"> Menu Group Title Custom Component </span>
    <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
  </>
);

export default {
  title: 'NewsKit Light/menu',
  component: () => 'None',
};

export const StoryMenuItemsHorizontal = () => (
  <>
    <StorybookHeading>Menu items - horizontal</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsHorizontal.storyName = 'menu items - horizontal';

export const StoryMenuItemsVertical = () => (
  <>
    <StorybookHeading>Menu items - vertical</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsVertical.storyName = 'menu items - vertical';

export const StoryMenuItemsStates = () => (
  <>
    <StorybookHeading>Menu items - states</StorybookHeading>
    <StorybookSubHeading>Menu items horizontal</StorybookSubHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href} selected>
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href} disabled>
        Menu item 4
      </MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Menu items vertical</StorybookSubHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href} selected>
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href} disabled>
        Menu item 4
      </MenuItem>
    </Menu>
  </>
);
StoryMenuItemsStates.storyName = 'menu items - states';

export const StoryMenuItemsSizes = () => (
  <>
    <StorybookHeading>Menu items in different sizes</StorybookHeading>
    <StorybookSubHeading>Small menu items</StorybookSubHeading>
    <Menu size={MenuItemSize.Small} aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
        <IconFilledAddCircleOutline />
      </MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Medium menu items</StorybookSubHeading>
    <Menu size={MenuItemSize.Medium} aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
        <IconFilledAddCircleOutline />
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
        <IconFilledAddCircleOutline />
      </MenuItem>
    </Menu>
    <br />
    <br />
    <StorybookSubHeading>Large menu items</StorybookSubHeading>
    <Menu size={MenuItemSize.Large} aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 1
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline />
        Menu item 2
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 3
      </MenuItem>
      <MenuItem href={href}>
        <IconFilledAddCircleOutline /> Menu item 4
      </MenuItem>
    </Menu>
  </>
);
StoryMenuItemsSizes.storyName = 'menu items - sizes';

export const StoryMenuItemsAlignment = () => {
  const Flex = styled.div`
    display: flex;

    & > div {
      width: 500px;
      border: 1px dashed lightgrey;
    }
  `;
  return (
    <>
      <StorybookHeading>Menu items with different alignment</StorybookHeading>
      <Flex>
        <div>
          <StorybookSubHeading>Left alignment</StorybookSubHeading>
          <Menu
            vertical
            align={MenuItemAlign.Start}
            aria-label={`Menu ${getSSRId()}`}
          >
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4</MenuItem>
            <MenuItem href={href}>Menu item 5</MenuItem>
            <MenuItem href={href}>Menu item 6</MenuItem>
          </Menu>
        </div>
        <div>
          <StorybookSubHeading>Right alignment</StorybookSubHeading>
          <Menu
            vertical
            align={MenuItemAlign.End}
            aria-label={`Menu ${getSSRId()}`}
          >
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4</MenuItem>
            <MenuItem href={href}>Menu item 5</MenuItem>
            <MenuItem href={href}>Menu item 6</MenuItem>
          </Menu>
        </div>
      </Flex>
    </>
  );
};
StoryMenuItemsAlignment.storyName = 'menu items - alignment';

export const StoryMenuItemsOverrides = () => {
  const menuItemOverrides = {
    stylePreset: 'menuItemCustom',
  };
  return (
    <>
      <ThemeProvider theme={myCustomTheme}>
        <StorybookHeading>Menu items with overrides</StorybookHeading>
        <Menu aria-label={`Menu ${getSSRId()}`}>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 1
          </MenuItem>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 2
          </MenuItem>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 3
          </MenuItem>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 4
          </MenuItem>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 5
          </MenuItem>
          <MenuItem href={href} overrides={menuItemOverrides}>
            Menu item 6
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
};
StoryMenuItemsOverrides.storyName = 'menu items - overrides';

export const StoryMenuItemsInverse = () => {
  const InverseContainer = styled.div`
    background: black;
  `;

  const inverseOverrides = {
    stylePreset: 'menuItemHorizontalInverse',
  };

  return (
    <>
      <StorybookHeading>Menu items horizontal inverse</StorybookHeading>
      <InverseContainer>
        <Menu aria-label={`Menu ${getSSRId()}`}>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 1
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 2
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 3
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 4
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 5
          </MenuItem>
          <MenuItem href={href} overrides={inverseOverrides}>
            Menu item 6
          </MenuItem>
        </Menu>
      </InverseContainer>
    </>
  );
};
StoryMenuItemsInverse.storyName = 'menu items - inverse';

export const StoryMenuGroupsVertical = () => (
  <>
    <StorybookHeading>Menu groups - vertical</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>

      <MenuGroup
        title={() => <MenuGroupTitle />}
        aria-labelledby="custom-menu-title"
      >
        <MenuItem href={href}>Group 3-item 1</MenuItem>
        <MenuItem href={href}>Group 3-item 2</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsVertical.storyName = 'menu groups - vertical';

export const StoryMenuGroupsHorizontal = () => (
  <>
    <StorybookHeading>Menu groups - horizontal</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 3">
        <MenuItem href={href}>Group 3-item 1</MenuItem>
        <MenuItem href={href}>Group 3-item 2</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsHorizontal.storyName = 'menu groups - horizontal';

export const StoryMenuGroupsNested = () => (
  <>
    <StorybookHeading>Menu groups - nested</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>

        <MenuGroup title="Group 2 - Nested Group 1">
          <MenuItem href={href}>Group 3-item 1</MenuItem>
          <MenuItem href={href}>Group 3-item 2</MenuItem>
        </MenuGroup>

        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuItem href={href}>Group 2-item 4</MenuItem>
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuGroupsNested.storyName = 'menu groups - nested';

export const StoryMenuMenuItemsOnly = () => (
  <>
    <StorybookHeading>Menu - menu items only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuItemsOnly.storyName = 'menu - menu items only';

export const StoryMenuMenuItemsOnlyhorizontal = () => (
  <>
    <StorybookHeading>Menu - menu items only (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>Menu item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuMenuItemsOnlyhorizontal.storyName =
  'menu - menu items only (horizontal)';

export const StoryMenuMenuGroupsOnly = () => (
  <>
    <StorybookHeading>Menu - menu groups only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
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
  </>
);
StoryMenuMenuGroupsOnly.storyName = 'menu - menu groups only';

export const StoryMenuMenuGroupsOnlyhorizontal = () => (
  <>
    <StorybookHeading>Menu - menu groups only (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
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
  </>
);
StoryMenuMenuGroupsOnlyhorizontal.storyName =
  'menu - menu groups only (horizontal)';

export const StoryMenuMenuGroupsOnlydividersWithinGroups = () => (
  <>
    <StorybookHeading>
      Menu - menu groups only (dividers within groups)
    </StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuMenuGroupsOnlydividersWithinGroups.storyName =
  'menu - menu groups only (dividers within groups)';

export const StoryMenuMenuGroupsOnlyhorizontaldividersWithinGroups = () => (
  <>
    <StorybookHeading>
      Menu - menu groups only (horizontal) (dividers within groups)
    </StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>
    </Menu>
  </>
);
StoryMenuMenuGroupsOnlyhorizontaldividersWithinGroups.storyName =
  'menu - menu groups only (horizontal) (dividers within groups)';

export const StoryMenuItemsAndGroups = () => (
  <>
    <StorybookHeading>Menu - items and groups</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 2</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 1" overrides={{spaceInline: 'space020'}}>
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        {/* <MenuDivider /> */}
      </MenuGroup>

      <MenuDivider overrides={{spaceInline: 'space020'}} />

      <MenuItem href={href}>item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 4</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 2" overrides={{spaceInline: 'space020'}}>
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>

      <MenuDivider overrides={{spaceInline: 'space020'}} />

      <MenuItem href={href}>item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuItemsAndGroups.storyName = 'menu - items and groups';

export const StoryMenuItemsAndGroupshorizontal = () => (
  <>
    <StorybookHeading>Menu - items and groups (horizontal)</StorybookHeading>
    <Menu aria-label={`Menu ${getSSRId()}`}>
      <MenuItem href={href}>item 1</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 2</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 1">
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 1-item 3</MenuItem>
        <MenuDivider />
      </MenuGroup>

      {/* <MenuDivider /> */}

      <MenuItem href={href}>item 3</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 4</MenuItem>
      <MenuDivider />

      <MenuGroup title="Group 2">
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuDivider />
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>

      <MenuDivider />

      <MenuItem href={href}>item 5</MenuItem>
      <MenuDivider />
      <MenuItem href={href}>item 6</MenuItem>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuItemsAndGroupshorizontal.storyName =
  'menu - items and groups (horizontal)';

export const StoryMenuItemsHorizontalNoSpace = () => (
  <>
    <StorybookHeading>Menu items - horizontal</StorybookHeading>
    <Menu
      aria-label={`Menu ${getSSRId()}`}
      overrides={{spaceInline: 'space000'}}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsHorizontalNoSpace.storyName = 'menu items - horizontal, no space';

export const StoryMenuItemsVerticalNoSpace = () => (
  <>
    <StorybookHeading>Menu items - vertical</StorybookHeading>
    <Menu
      vertical
      aria-label={`Menu ${getSSRId()}`}
      overrides={{spaceInline: 'space000'}}
    >
      <MenuItem href={href}>Menu item 1</MenuItem>
      <MenuItem href={href}>Menu item 2</MenuItem>
      <MenuItem href={href}>Menu item 3</MenuItem>
      <MenuItem href={href}>Menu item 4</MenuItem>
      <MenuItem href={href}>Menu item 5</MenuItem>
      <MenuItem href={href}>Menu item 6</MenuItem>
    </Menu>
  </>
);
StoryMenuItemsVerticalNoSpace.storyName = 'menu items - vertical, no space';

export const StoryMenuAlignedTitle = () => (
  <>
    <StorybookHeading>Menu - menu groups only</StorybookHeading>
    <Menu vertical aria-label={`Menu ${getSSRId()}`}>
      <MenuGroup title="Group 1" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 1-item 1</MenuItem>
        <MenuItem href={href}>Group 1-item 2</MenuItem>
        <MenuItem href={href}>Group 1-item 3</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Group 2" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 2-item 1</MenuItem>
        <MenuItem href={href}>Group 2-item 2</MenuItem>
        <MenuItem href={href}>Group 2-item 3</MenuItem>
      </MenuGroup>
      <MenuGroup title="Group 3" overrides={{title: {spaceInset: 'space040'}}}>
        <MenuItem href={href}>Group 3-item 1</MenuItem>
      </MenuGroup>
      <MenuDivider />
    </Menu>
  </>
);
StoryMenuAlignedTitle.storyName = 'menu - aligned title';
