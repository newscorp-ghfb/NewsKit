import React from 'react';
import {Menu, MenuDivider, MenuGroup, MenuItem} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {IconFilledAddCircleOutline} from '../../icons';
import {compileTheme, createTheme} from '../..';
import {MenuItemAlign, MenuItemProps, MenuItemSize} from '../types';

const MenuItemSizeKeys = (Object.keys(MenuItemSize) as unknown) as Array<
  keyof typeof MenuItemSize
>;

const MenuItemAlignKeys = (Object.keys(MenuItemAlign) as unknown) as Array<
  keyof typeof MenuItemAlign
>;

const href = 'http://';

const menuItemContent = 'Menu item';
const menuItems = [
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
  <MenuItem href={href}>{menuItemContent}</MenuItem>,
];
const menuGroups = [
  <MenuGroup>
    <MenuItem href={href}>{menuItemContent}</MenuItem>
    <MenuItem href={href}>{menuItemContent}</MenuItem>
  </MenuGroup>,
  <MenuGroup>
    <MenuItem href={href}>{menuItemContent}</MenuItem>
    <MenuItem href={href}>{menuItemContent}</MenuItem>
  </MenuGroup>,
];
const menuGroupsAndDividers = [
  <MenuGroup>
    <MenuItem href={href}>{menuItemContent}</MenuItem>,
    <MenuDivider />
    <MenuItem href={href}>{menuItemContent}</MenuItem>,
  </MenuGroup>,
  <MenuDivider />,
  <MenuGroup>
    <MenuItem href={href}>{menuItemContent}</MenuItem>,
    <MenuDivider />
    <MenuItem href={href}>{menuItemContent}</MenuItem>,
  </MenuGroup>,
];

const MenuWithItem = (props: MenuItemProps) => (
  <Menu>
    <MenuItem {...props} />
  </Menu>
);

describe('MenuItem', () => {
  it('renders with default props', () => {
    const props = {
      children: menuItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
  test.each(MenuItemSizeKeys)('renders in %s size', currentSize => {
    const props = {
      children: menuItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, {
      ...props,
      size: MenuItemSize[currentSize],
    });
    expect(fragment).toMatchSnapshot();
  });
  it('renders with icon', () => {
    const props = {
      children: [<IconFilledAddCircleOutline />, menuItemContent],
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
  it('renders selected menu item with aria attributes', () => {
    const props = {
      children: [<IconFilledAddCircleOutline />, menuItemContent],
      href,
      selected: true,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
  it('renders menu item with anchor attributes', () => {
    const props = {
      children: menuItemContent,
      href,
      target: '_blank',
    };
    const {getAllByTestId, asFragment} = renderWithTheme(MenuWithItem, props);

    expect(asFragment()).toMatchSnapshot();
    expect(getAllByTestId('buttonLink')[0]).toHaveAttribute('target', '_blank');
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
      MenuWithItem,
      props,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('MenuDivider', () => {
  it('renders vertically with default props', () => {
    const fragment = renderToFragmentWithTheme(MenuDivider);
    expect(fragment).toMatchSnapshot();
  });
  it('renders horizontally', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Menu vertical>
        <MenuDivider />
      </Menu>
    ));
    expect(fragment).toMatchSnapshot();
  });
  it('renders with overrides', () => {
    const myCustomTheme = compileTheme(
      createTheme({
        name: 'menu-divider-theme',
        overrides: {
          stylePresets: {
            menuDividerCustom: {
              base: {
                borderStyle: 'solid',
                borderColor: 'red',
                borderWidth: '2px',
              },
            },
          },
        },
      }),
    );
    const props = {
      overrides: {
        spaceInline: 'space030',
        stylePreset: 'menuDividerCustom',
      },
    };
    const fragment = renderToFragmentWithTheme(
      MenuDivider,
      props,
      compileTheme(myCustomTheme),
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('MenuGroup', () => {
  it('renders with title when vertical', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Menu vertical>
        <MenuGroup title="Menu Group Title">{menuItems}</MenuGroup>
      </Menu>
    ));
    expect(fragment).toMatchSnapshot();
  });
  it('renders without title when horizontal', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Menu vertical>
        <MenuGroup title="Menu Group Title">{menuItems}</MenuGroup>
      </Menu>
    ));
    expect(fragment).toMatchSnapshot();
  });
  it('renders with title as a component', () => {
    const MenuGroupTitle = () => (
      <>
        <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
        <span> Menu Group Title Custom Component </span>
        <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
      </>
    );

    const fragment = renderToFragmentWithTheme(() => (
      <Menu vertical>
        <MenuGroup title={() => <MenuGroupTitle />}>{menuItems}</MenuGroup>
      </Menu>
    ));
    expect(fragment).toMatchSnapshot();
  });
  it('renders with overrides', () => {
    const myCustomTheme = compileTheme(
      createTheme({
        name: 'menu-group-theme',
        overrides: {
          stylePresets: {
            menuGroupCustom: {
              base: {
                backgroundColor: '#2f1e9f',
                borderStyle: 'solid',
                borderColor: '#8074eb',
                borderWidth: '4px 4px 0px 4px',
                color: '#dfd3d3',
                iconColor: 'grey',
                borderRadius: '10px 10px 0 0',
              },
              hover: {
                backgroundColor: '#d8335c',
              },
            },
            menuDividerCustom: {
              base: {
                borderStyle: 'solid',
                borderColor: 'red',
                borderWidth: '2px',
              },
            },
          },
        },
      }),
    );
    const props = {
      children: menuItems,
      title: 'Menu Group Title',
      overrides: {
        spaceInline: 'space030',
        stylePreset: 'menuGroupCustom',
        title: {
          typographyPreset: 'utilityHeading020',
          stylePreset: 'inkSubtle',
          spaceInline: 'space060',
          spaceInset: 'space040',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(
      () => (
        <Menu vertical>
          <MenuGroup {...props}>{menuItems}</MenuGroup>
        </Menu>
      ),
      {},
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('Menu', () => {
  it(`renders with default props`, () => {
    const props = {
      children: menuItems,
    };

    const fragment = renderToFragmentWithTheme(Menu, props);
    expect(fragment).toMatchSnapshot();
  });

  const verticalValues = [true, false];
  verticalValues.forEach(verticalValue => {
    it(`renders ${
      verticalValue ? 'vertically' : 'horizontally'
    } with menu items`, () => {
      const props = {
        children: menuItems,
        vertical: verticalValue,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    });
    it(`renders ${
      verticalValue ? 'vertically' : 'horizontally'
    } with menu group`, () => {
      const props = {
        children: menuGroups,
        vertical: verticalValue,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    });
    it(`renders ${
      verticalValue ? 'vertically' : 'horizontally'
    } with menu dividers`, () => {
      const props = {
        children: menuGroupsAndDividers,
        vertical: verticalValue,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    });
    test.each(MenuItemAlignKeys)(
      'renders with menu items aligned at the %s',
      currentAlignment => {
        const props = {
          children: menuItems,
          vertical: verticalValue,
          align: MenuItemAlign[currentAlignment],
        };

        const fragment = renderToFragmentWithTheme(Menu, props);
        expect(fragment).toMatchSnapshot();
      },
    );
    test.each(MenuItemSizeKeys)(
      'renders with %s size menu items',
      currentSize => {
        const props = {
          children: menuItems,
          vertical: verticalValue,
          size: MenuItemSize[currentSize],
        };

        const fragment = renderToFragmentWithTheme(Menu, props);
        expect(fragment).toMatchSnapshot();
      },
    );
  });
});
