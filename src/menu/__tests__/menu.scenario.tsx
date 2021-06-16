import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {IconFilledAddCircleOutline} from '../../icons';
import {Menu, MenuItem} from '..';
import {MenuItemAlign, MenuItemSize} from '../types';
import {styled} from '../../utils';

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

export default {
  title: 'menu',
  children: [
    {
      storyName: 'menu-horizontal',
      storyFn: () => (
        <>
          <StorybookHeading>Menu horizontal</StorybookHeading>
          <StorybookSubHeading>Menu horizontal</StorybookSubHeading>
          <Menu ariaLabel="Menu 1">
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4</MenuItem>
            <MenuItem href={href}>Menu item 5</MenuItem>
            <MenuItem href={href}>Menu item 6</MenuItem>
          </Menu>
        </>
      ),
    },
    {
      storyName: 'menu-vertical',
      storyFn: () => (
        <>
          <StorybookHeading>Menu vertical</StorybookHeading>
          <Menu vertical ariaLabel="Menu 2">
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4</MenuItem>
            <MenuItem href={href}>Menu item 5</MenuItem>
            <MenuItem href={href}>Menu item 6</MenuItem>
          </Menu>
        </>
      ),
    },
    {
      storyName: 'menu item - sizes',
      storyFn: () => (
        <>
          <StorybookHeading>Menu items in different sizes</StorybookHeading>
          <StorybookSubHeading>Small menu items</StorybookSubHeading>
          <Menu size={MenuItemSize.Small} ariaLabel="Menu 3">
            <MenuItem href={href}>
              <IconFilledAddCircleOutline /> Menu item 1
              <IconFilledAddCircleOutline />
            </MenuItem>
            <MenuItem href={href} selected>
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
          <Menu size={MenuItemSize.Large} ariaLabel="Menu 4">
            <MenuItem href={href}>
              <IconFilledAddCircleOutline /> Menu item 1
            </MenuItem>
            <MenuItem href={href} selected>
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
      ),
    },
    {
      storyName: 'menu item - alignment',
      storyFn: () => {
        const Flex = styled.div`
          display: flex;

          & > div {
            width: 500px;
          }
        `;
        return (
          <>
            <StorybookHeading>
              Menu items with different alignment
            </StorybookHeading>
            <Flex>
              <div>
                <Menu vertical align={MenuItemAlign.Start} ariaLabel="Menu 5">
                  <MenuItem href={href}>Menu item 1</MenuItem>
                  <MenuItem href={href}>Menu item 2</MenuItem>
                  <MenuItem href={href}>Menu item 3</MenuItem>
                  <MenuItem href={href}>Menu item 4</MenuItem>
                  <MenuItem href={href}>Menu item 5</MenuItem>
                  <MenuItem href={href}>Menu item 6</MenuItem>
                </Menu>
              </div>
              <div>
                <Menu vertical align={MenuItemAlign.End} ariaLabel="Menu 6">
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
      },
    },
    {
      storyName: 'menu item - overrides',
      storyFn: () => {
        const menuItemOverrides = {
          stylePreset: 'menuItemCustom',
        };
        return (
          <>
            <ThemeProvider theme={myCustomTheme}>
              <StorybookHeading>Menu items with overrides</StorybookHeading>
              <Menu ariaLabel="Menu 7">
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
      },
    },
    {
      storyName: 'menu-inverse',
      storyFn: () => {
        const InverseContainer = styled.div`
          background: black;
        `;

        const inverseOverrides = {
          stylePreset: 'menuItemHorizontalInverse',
        };

        return (
          <>
            <StorybookHeading>Menu horizontal inverse</StorybookHeading>
            <InverseContainer>
              <Menu ariaLabel="Menu 8">
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
      },
    },
  ],
};
