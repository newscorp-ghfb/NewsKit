import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {IconFilledAddCircleOutline} from '../../icons';
import {Menu, MenuItem} from '..';
import {MenuItemAlign, MenuItemDistribution, MenuItemSize} from '../types';
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

// TODO: use random gen for aria labels

export default {
  title: 'menu',
  children: [
    {
      storyName: 'menu-horizontal',
      storyFn: () => (
        <>
          <StorybookHeading>Menu horizontal</StorybookHeading>
          <Menu aria-label={`Menu ${getSSRId()}`}>
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
          <Menu vertical aria-label={`Menu ${getSSRId()}`}>
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
      storyName: 'menu item - states',
      storyFn: () => (
        <>
          <StorybookHeading>Menu horizontal</StorybookHeading>
          <StorybookSubHeading>Menu horizontal</StorybookSubHeading>
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
          <StorybookSubHeading>Menu vertical</StorybookSubHeading>
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
      ),
    },
    {
      storyName: 'menu item - sizes',
      storyFn: () => (
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
      ),
    },
    {
      storyName: 'menu item - alignment',
      storyFn: () => {
        const Flex = styled.div`
          display: flex;

          & > div {
            width: 500px;
            border: 1px dashed lightgrey;
          }
        `;
        return (
          <>
            <StorybookHeading>
              Menu items with different alignment
            </StorybookHeading>
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
      },
    },
    {
      storyName: 'menu item - distribution',
      storyFn: () => (
        <>
          <StorybookHeading>
            Menu items with different distributions
          </StorybookHeading>
          <StorybookSubHeading>Start</StorybookSubHeading>
          <Menu
            distribution={MenuItemDistribution.Start}
            aria-label={`Menu ${getSSRId()}`}
          >
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4</MenuItem>
          </Menu>
          <br />
          <br />
          <StorybookSubHeading>Equal</StorybookSubHeading>
          <Menu
            distribution={MenuItemDistribution.Equal}
            aria-label={`Menu ${getSSRId()}`}
          >
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2 more text</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4 text</MenuItem>
          </Menu>
          <br />
          <br />
          <StorybookSubHeading>Grow</StorybookSubHeading>
          <Menu
            distribution={MenuItemDistribution.Grow}
            aria-label={`Menu ${getSSRId()}`}
          >
            <MenuItem href={href}>Menu item 1</MenuItem>
            <MenuItem href={href}>Menu item 2 more text</MenuItem>
            <MenuItem href={href}>Menu item 3</MenuItem>
            <MenuItem href={href}>Menu item 4 text</MenuItem>
          </Menu>
        </>
      ),
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
      },
    },
  ],
};

export const disabledRules = ['color-contrast'];
