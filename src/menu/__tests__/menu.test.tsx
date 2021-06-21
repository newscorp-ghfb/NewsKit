import React from 'react';
import {Menu, MenuItem} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {IconFilledAddCircleOutline} from '../../icons';
import {compileTheme, createTheme} from '../..';
import {MenuItemAlign, MenuItemDistribution, MenuItemSize} from '../types';

const href = 'http://';

const menuItemContent = 'Menu item';
const menuContent = [
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
];

describe('MenuItem', () => {
  it('renders with default props', () => {
    const props = {
      children: menuItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuItem, props);
    expect(fragment).toMatchSnapshot();
  });
  it('renders in different sizes', () => {
    const props = {
      children: menuItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuItem, {
      ...props,
      size: MenuItemSize.Small,
    });
    expect(fragment).toMatchSnapshot();
  });
  it('renders with icon', () => {
    const props = {
      children: [<IconFilledAddCircleOutline />, menuItemContent],
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuItem, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders selected menu item with aria attributes', () => {
    const props = {
      children: [<IconFilledAddCircleOutline />, menuItemContent],
      href,
      selected: true,
    };
    const fragment = renderToFragmentWithTheme(MenuItem, props);
    expect(fragment).toMatchSnapshot();
  });
  it('renders with overrides', () => {
    const myCustomTheme = compileTheme(
      createTheme({
        name: 'menu-item-theme',
        overrides: {
          stylePresets: {
            menuItemCustom: {
              base: {
                backgroundColor: 'pink',
                borderStyle: 'solid',
                borderColor: 'darkpink',
                borderWidth: '0px 8px 0px 0px',
                color: 'red',
                iconColor: 'grey',
              },
            },
          },
        },
      }),
    );
    const props = {
      children: menuItemContent,
      href,
      overrides: {
        stylePreset: 'menuItemCustom',
        typographyPreset: 'utilityButton030',
        minWidth: '10px',
        minHeight: '11px',
        spaceInline: 'space030',
        spaceInset: 'space030',
        iconSize: 'iconSize030',
      },
    };
    const fragment = renderToFragmentWithTheme(
      MenuItem,
      props,
      compileTheme(myCustomTheme),
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('Menu', () => {
  it('renders horizontally with menu items', () => {
    const props = {
      children: menuContent,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders vertically with menu items', () => {
    const props = {
      children: menuContent,
      vertical: true,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with menu items aligned at the start', () => {
    const props = {
      children: menuContent,
      align: MenuItemAlign.Start,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with menu items aligned at the end', () => {
    const props = {
      children: menuContent,
      align: MenuItemAlign.End,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with small size menu items', () => {
    const props = {
      children: menuContent,
      size: MenuItemSize.Small,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with large size menu items', () => {
    const props = {
      children: menuContent,
      size: MenuItemSize.Large,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with menu items equal distribution', () => {
    const props = {
      children: menuContent,
      distribution: MenuItemDistribution.Equal,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders with menu items grow distribution', () => {
    const props = {
      children: menuContent,
      distribution: MenuItemDistribution.Grow,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  it('renders vertically with menu items grow distribution', () => {
    const props = {
      children: menuContent,
      distribution: MenuItemDistribution.Equal,
      vertical: true,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });
});
