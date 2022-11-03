import React from 'react';
import {fireEvent} from '@testing-library/react';
import {Menu, MenuDivider, MenuGroup, MenuItem} from '..';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {IconFilledAddCircleOutline} from '../../icons';
import {compileTheme, createTheme, EventTrigger} from '../..';
import {MenuItemProps, MenuItemAlign, MenuItemSize} from '../types';

const MenuItemSizeArray = ['small', 'medium', 'large'];
const MenuItemAlignKeys = ['start', 'end', 'center'];

const href = 'http://';

const menuItemContent = 'Menu item';
const menuItems = [
  <MenuItem key="1" href={href}>
    {menuItemContent}
  </MenuItem>,
  <MenuItem key="2" href={href}>
    {menuItemContent}
  </MenuItem>,
  <MenuItem key="3" href={href}>
    {menuItemContent}
  </MenuItem>,
  <MenuItem key="4" href={href}>
    {menuItemContent}
  </MenuItem>,
];
const menuGroups = [
  <MenuGroup key="1">
    <MenuItem key="1.1" href={href}>
      {menuItemContent}
    </MenuItem>
    <MenuItem key="1.2" href={href}>
      {menuItemContent}
    </MenuItem>
  </MenuGroup>,
  <MenuGroup key="2">
    <MenuItem key="2.1" href={href}>
      {menuItemContent}
    </MenuItem>
    <MenuItem key="2.2" href={href}>
      {menuItemContent}
    </MenuItem>
  </MenuGroup>,
];
const menuGroupsAndDividers = [
  <MenuGroup key="1">
    <MenuItem key="1.1" href={href}>
      {menuItemContent}
    </MenuItem>
    <MenuDivider key="1.2" />
    <MenuItem key="1.3" href={href}>
      {menuItemContent}
    </MenuItem>
    ,
  </MenuGroup>,
  <MenuDivider key="2" />,
  <MenuGroup key="3">
    <MenuItem key="3.1" href={href}>
      {menuItemContent}
    </MenuItem>
    <MenuDivider key="3.2" />
    <MenuItem key="3.3" href={href}>
      {menuItemContent}
    </MenuItem>
    ,
  </MenuGroup>,
];

const MenuWithItem = (props: MenuItemProps) => (
  <Menu>
    <MenuItem key="1" {...props} />
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
  test.each(MenuItemSizeArray)('renders in %s size', currentSize => {
    const props = {
      children: menuItemContent,
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, {
      ...props,
      size: currentSize as 'small' | 'medium' | 'large',
    });
    expect(fragment).toMatchSnapshot();
  });
  it('renders with icon', () => {
    const props = {
      children: [<IconFilledAddCircleOutline key="i" />, menuItemContent],
      href,
    };
    const fragment = renderToFragmentWithTheme(MenuWithItem, props);
    expect(fragment).toMatchSnapshot();
  });
  it('renders selected menu item with aria attributes', () => {
    const props = {
      children: [<IconFilledAddCircleOutline key="i" />, menuItemContent],
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
      key: '1',
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
  test('fire tracking event', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      children: menuItemContent,
      href: 'https://menuitem.test',
      key: '1',
      eventOriginator: 'menu-item',
      eventContext: {
        event: 'event data',
      },
    };
    const {getByTestId} = renderWithImplementation(
      MenuWithItem,
      props,
      mockFireEvent,
    );
    const menuItemButton = getByTestId('buttonLink');
    fireEvent.click(menuItemButton);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'menu-item',
      trigger: EventTrigger.Click,
      context: {
        href: 'https://menuitem.test',
        event: 'event data',
      },
    });
  });
});

describe('MenuDivider', () => {
  it('renders vertically with default props', () => {
    const fragment = renderToFragmentWithTheme(() => (
      <Menu>
        <MenuDivider />
      </Menu>
    ));
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
      () => (
        <Menu>
          <MenuDivider {...props} />
        </Menu>
      ),
      undefined,
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
  it(`renders with logical prop overrides`, () => {
    const props = {
      children: menuItems,
      overrides: {
        paddingInline: '30px',
        marginBlock: '20px',
      },
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
  });
});

describe('Menu alignment', () => {
  test.each(MenuItemAlignKeys)(
    'renders with menu items aligned at the %s vertical',
    currentAlignment => {
      const props = {
        children: menuItems,
        vertical: true,
        align: currentAlignment as MenuItemAlign,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    },
  );
  test.each(MenuItemAlignKeys)(
    'renders with menu items aligned at the %s horizontal',
    currentAlignment => {
      const props = {
        children: menuItems,
        vertical: false,
        align: currentAlignment as MenuItemAlign,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    },
  );
  test.each(MenuItemSizeArray)(
    'renders with %s size menu items vertical',
    currentSize => {
      const props = {
        children: menuItems,
        vertical: true,
        size: currentSize as MenuItemSize,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    },
  );
  test.each(MenuItemSizeArray)(
    'renders with %s size menu items horizontal',
    currentSize => {
      const props = {
        children: menuItems,
        size: currentSize as MenuItemSize,
      };

      const fragment = renderToFragmentWithTheme(Menu, props);
      expect(fragment).toMatchSnapshot();
    },
  );
});
