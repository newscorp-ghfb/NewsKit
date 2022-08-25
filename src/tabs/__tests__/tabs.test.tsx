import React from 'react';
import userEvent from '@testing-library/user-event';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {compileTheme, createTheme, Tab, TabProps, TabSize} from '../..';
import {Tabs, TabsDistribution} from '..';
import {TabsProps} from '../types';
import {IconFilledEmail} from '../../icons';
import {KEYBOARD_ARROWS} from '../utils';
import tabStylePresets from '../style-presets';

const renderTabsDefault = (props: TabsProps) => <Tabs {...props} />;

const tabsWithLabel = [
  <Tab label="First tab">First tab content</Tab>,
  <Tab label="Second tab">Second tab content</Tab>,
  <Tab label="Third tab">Third tab content</Tab>,
];

const tabsWithIcons = [
  <Tab label={<IconFilledEmail />}>First tab content</Tab>,
  <Tab label={<IconFilledEmail />}>Second tab content</Tab>,
  <Tab label={<IconFilledEmail />}>Third tab content</Tab>,
];

const tabWithLabelAndIcon = (name: string) => (
  <>
    <IconFilledEmail />
    {name} tab
  </>
);

const tabsWithLabelAndIcons = [
  <Tab label={tabWithLabelAndIcon('First')} key="tab-1">
    First tab content
  </Tab>,
  <Tab label={tabWithLabelAndIcon('Second')} key="tab-2">
    Second tab content
  </Tab>,
  <Tab label={tabWithLabelAndIcon('Third')} key="tab-3">
    Third tab content
  </Tab>,
];

const tabsTheme = createTheme({
  name: 'tabs-theme',
  overrides: {
    stylePresets: tabStylePresets,
  },
});
const selectedTabStyled = `color: ${
  compileTheme(tabsTheme).stylePresets.tab.selected!.color
}`;

describe('Tabs', () => {
  // Mocking ResizeObserver
  const mockResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  }));

  beforeAll(() => {
    // @ts-ignore
    global.ResizeObserver = mockResizeObserver;
  });

  test('renders with default styles', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with additional HTML attributes', () => {
    const tabProps: TabProps = {
      children: 'content',
      label: 'label',
      className: 'tab-class-name',
    };

    const props: TabsProps = {
      id: 'tabs-id',
      children: [<Tab {...tabProps} />],
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with default styles and divider', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      divider: true,
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with sizing', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      size: 'large',
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons for tabs', () => {
    const props: TabsProps = {
      children: tabsWithIcons,
      size: 'large',
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons and label for tabs', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'large',
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders dividers correctly when orientation is vertical', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      vertical: true,
      divider: true,
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'large',
      overrides: {
        spaceInline: 'space050',
        tab: {
          spaceInline: 'space020',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides vertical', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'large',
      vertical: true,
      overrides: {
        spaceInline: 'space050',
        tab: {spaceInline: 'space020'},
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides on Tab', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-tab-theme',
      overrides: {
        stylePresets: {
          tabCustom: {
            selected: {
              borderStyle: 'solid',
              borderColor: 'green',
            },
          },
        },
      },
    });
    const props: TabsProps = {
      children: [
        <Tab label="First tab" overrides={{stylePreset: 'tabCustom'}}>
          First tab content
        </Tab>,
        <Tab label="Second tab">Second tab content</Tab>,
      ],
      size: 'large',
      overrides: {
        spaceInline: 'space050',
        tab: {
          spaceInline: 'space020',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(
      renderTabsDefault,
      props,
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  it('supports custom data-testid', async () => {
    const props: TabsProps = {
      children: [
        <Tab label="First tab">First tab content</Tab>,
        <Tab label="Second tab">Second tab content</Tab>,
        <Tab dataTestId="last-tab" label="Third tab">
          Third tab content
        </Tab>,
      ],
    };
    const {getByTestId} = renderWithTheme(renderTabsDefault, props);

    const tab = getByTestId('last-tab');

    expect(tab).toBeDefined();
  });

  it('sets active on click', async () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[0];

    fireEvent.click(tab);
    expect(tab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  it('clears focus onMouseDown', async () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[0];

    fireEvent.mouseDown(tab);
    expect(tab).not.toHaveFocus();

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus on tab to tab-panel ', async () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const firstTabPanel = getAllByTestId('tab-panel')[0];

    firstTab.focus();
    expect(firstTab).toHaveFocus();

    userEvent.tab();
    expect(firstTabPanel).toHaveFocus();

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus on tab-panel to tab ', async () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const firstTabPanel = getAllByTestId('tab-panel')[0];

    firstTabPanel.focus();
    expect(firstTabPanel).toHaveFocus();

    firstTab.focus();
    expect(firstTab).toHaveFocus();

    expect(asFragment()).toMatchSnapshot();
  });

  it('doesnt change focus if no other available tabs', async () => {
    const props: TabsProps = {
      children: [
        <Tab label="Medium tab">First content</Tab>,
        <Tab label="Medium tab" disabled>
          Second content
        </Tab>,
        <Tab label="Medium tab" disabled>
          Third content
        </Tab>,
      ],
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];

    firstTab.focus();
    expect(firstTab).toHaveFocus();
    fireEvent.keyDown(firstTab, {key: 'ArrowRight', keyCode: '39'});

    expect(firstTab).toHaveFocus();
    expect(firstTab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  it('doesnt change focus if unassigned key is pushed', async () => {
    const props: TabsProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];

    firstTab.focus();
    expect(firstTab).toHaveFocus();
    fireEvent.keyDown(firstTab, {key: 'ArrowDown', keyCode: '40'});

    expect(firstTab).toHaveFocus();
    expect(firstTab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with fixed tab indicator size', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'medium',
      overrides: {
        selectionIndicator: {
          indicator: {
            size: 'sizing050',
          },
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed tab indicator size which is larger than default', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'medium',
      overrides: {
        selectionIndicator: {
          indicator: {
            size: 'sizing120',
          },
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed tab indicator percentage size', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'medium',
      overrides: {
        selectionIndicator: {
          indicator: {
            size: '75%',
          },
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom tab bar track and indicator weight', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: 'medium',
      overrides: {
        selectionIndicator: {
          track: {
            weight: 'borderWidth030',
          },
          indicator: {
            weight: 'borderWidth030',
          },
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with second tab initially selected', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      initialSelectedIndex: 1,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[1];
    expect(tab).toHaveStyle(selectedTabStyled);

    const [firstTabPanel, secondTabPanel] = getAllByTestId('tab-panel');

    expect(firstTabPanel).toHaveAttribute('aria-hidden', 'true');
    expect(secondTabPanel).toHaveAttribute('aria-hidden', 'false');

    expect(firstTabPanel).not.toBeVisible();
    expect(secondTabPanel).toBeVisible();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with non-existing initialSelectedIndex', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      initialSelectedIndex: 10,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[0];
    expect(tab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with selectedIndex', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      selectedIndex: 2,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[2];
    expect(tab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('updated selected Index when selectedIndex prop change controlled mode', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      selectedIndex: 1,
    };
    const {getAllByTestId, asFragment, rerender} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[1];
    expect(tab).toHaveStyle(selectedTabStyled);

    const updatedProps = {
      selectedIndex: 2,
    };

    rerender(<Tabs {...props} {...updatedProps} />);

    const newSelectedTab = getAllByTestId('tab')[2];
    expect(newSelectedTab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('updated selected Index to maximum size when selectedIndex value is higher', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      selectedIndex: 1,
    };
    const {getAllByTestId, asFragment, rerender} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[1];
    expect(tab).toHaveStyle(selectedTabStyled);

    const updatedProps = {
      selectedIndex: 5,
    };

    rerender(<Tabs {...props} {...updatedProps} />);

    const newSelectedTab = getAllByTestId('tab')[2];
    expect(newSelectedTab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('updated selected Index to 0 when selectedIndex value is less', () => {
    const props: TabsProps = {
      children: tabsWithLabel,
      selectedIndex: 1,
    };
    const {getAllByTestId, asFragment, rerender} = renderWithTheme(
      renderTabsDefault,
      props,
    );

    const tab = getAllByTestId('tab')[1];
    expect(tab).toHaveStyle(selectedTabStyled);

    const updatedProps = {
      selectedIndex: -1,
    };

    rerender(<Tabs {...props} {...updatedProps} />);

    const newSelectedTab = getAllByTestId('tab')[0];
    expect(newSelectedTab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  test('active should state should not being updated if we dont pass onChanged in controlled mode', () => {
    const onChange = jest.fn();
    const props: TabsProps = {
      children: tabsWithLabel,
      selectedIndex: 1,
      onChange,
    };
    const {getAllByTestId} = renderWithTheme(renderTabsDefault, props);

    const selectedTab = getAllByTestId('tab')[1];
    const clickedTab = getAllByTestId('tab')[2];
    fireEvent.click(clickedTab);
    expect(selectedTab).toHaveStyle(selectedTabStyled);
  });

  test('renders with left/right aligned text', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      vertical: true,
    };

    const fragmentLeft = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      align: 'start',
    });
    expect(fragmentLeft).toMatchSnapshot();

    const fragmentRight = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      align: 'end',
    });
    expect(fragmentRight).toMatchSnapshot();
  });

  test('with onChange event', () => {
    const onChange = jest.fn();
    const props: TabsProps = {
      children: tabsWithLabel,
      onChange,
    };
    const {getAllByTestId} = renderWithTheme(renderTabsDefault, props);

    const tab = getAllByTestId('tab')[1];
    fireEvent.click(tab);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  test('with custom scroll props', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      overrides: {scroll: {props: {controls: 'hover', scrollBar: true}}},
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('with custom scroll component', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      overrides: {
        scroll: ({children}) => (
          <div data-test-id="custom-scroll">{children}</div>
        ),
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });
});

test('with logical props overrides', () => {
  const props: TabsProps = {
    children: tabsWithLabelAndIcons,
    overrides: {
      paddingInline: 'space020',
      paddingBlock: 'space040',
      marginBlock: 'space060',
      marginInline: 'space080',
    },
  };
  const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
  expect(fragment).toMatchSnapshot();
});

const tabs = [
  <Tab label="H tab 1">First tab content</Tab>,
  <Tab label="H tab 2">Second tab content</Tab>,
  <Tab label="H tab 3">Third tab content</Tab>,
];

describe('Tabs distribution', () => {
  const flows = ['horizontal', 'vertical'];
  const tabsDistributions = ['start', 'grow', 'equal'];

  flows.forEach(currentFlow => {
    test.each(tabsDistributions)(
      `set to %s with ${currentFlow} flow`,
      currentDistribution => {
        const props: TabsProps = {
          children: tabs,
          distribution: currentDistribution as TabsDistribution,
          vertical: currentFlow === 'vertical',
        };

        const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
        expect(fragment).toMatchSnapshot();
      },
    );
  });
});

describe(`tabs indicatorPosition`, () => {
  const props: TabsProps = {
    children: tabsWithLabelAndIcons,
  };

  test('renders horizontal tabs with the selection indicator before the tabs', () => {
    const fragmentStart = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'start',
    });
    expect(fragmentStart).toMatchSnapshot();
  });

  test('renders vertical tabs with the selection indicator before the tabs', () => {
    const fragmentStart = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'start',
      vertical: true,
    });
    expect(fragmentStart).toMatchSnapshot();
  });

  test('renders horizontal tabs with the selection indicator after the tabs', () => {
    const fragmentEnd = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'end',
    });
    expect(fragmentEnd).toMatchSnapshot();
  });

  test('renders vertical tabs with the selection indicator after the tabs', () => {
    const fragmentEnd = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'end',
      vertical: true,
    });
    expect(fragmentEnd).toMatchSnapshot();
  });

  test('renders horizontal tabs with no selection indicator displayed', () => {
    const fragmentNone = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'none',
    });
    expect(fragmentNone).toMatchSnapshot();
  });

  test('renders vertical tabs with no selection indicator displayed', () => {
    const fragmentNone = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      indicatorPosition: 'none',
      vertical: true,
    });
    expect(fragmentNone).toMatchSnapshot();
  });
});

describe('Tabs keyboard changes focus', () => {
  const scenarios = [
    {
      name: 'sets next to be active on right arrow',
      fromIndex: 0,
      toIndex: 1,
      keyCode: KEYBOARD_ARROWS.right,
      vertical: false,
    },
    {
      name: 'sets previous to be active on left arrow',
      fromIndex: 1,
      toIndex: 0,
      keyCode: KEYBOARD_ARROWS.left,
      vertical: false,
    },
    {
      name: 'sets last to be active on left arrow when on the first tab',
      fromIndex: 0,
      toIndex: 2,
      keyCode: KEYBOARD_ARROWS.left,
      vertical: false,
    },
    {
      name: 'sets first to be active on right arrow when on the last tab',
      fromIndex: 2,
      toIndex: 0,
      keyCode: KEYBOARD_ARROWS.right,
      vertical: false,
    },
    {
      name: 'sets next to be active on down arrow in vertical tabs',
      fromIndex: 0,
      toIndex: 1,
      keyCode: KEYBOARD_ARROWS.down,
      vertical: true,
    },
    {
      name: 'sets previous to be active on up arrow in vertical tabs',
      fromIndex: 1,
      toIndex: 0,
      keyCode: KEYBOARD_ARROWS.up,
      vertical: true,
    },
    {
      name: 'sets first to be active on Home key',
      fromIndex: 2,
      toIndex: 0,
      keyCode: KEYBOARD_ARROWS.home,
      vertical: true,
    },
    {
      name: 'sets last to be active on End key',
      fromIndex: 0,
      toIndex: 2,
      keyCode: KEYBOARD_ARROWS.end,
      vertical: true,
    },
  ];

  scenarios.forEach(({name, fromIndex, toIndex, keyCode, vertical}) => {
    it(name, async () => {
      const props: TabsProps = {
        children: tabsWithLabel,
        vertical,
      };

      const {getAllByTestId, asFragment} = renderWithTheme(
        renderTabsDefault,
        props,
      );

      const fromTab = getAllByTestId('tab')[fromIndex];
      const toTab = getAllByTestId('tab')[toIndex];
      const fromTabPanel = getAllByTestId('tab-panel')[fromIndex];
      const toTabPanel = getAllByTestId('tab-panel')[toIndex];

      fromTab.focus();
      expect(fromTab).toHaveFocus();
      fireEvent.keyDown(fromTab, {keyCode});

      expect(toTab).toHaveFocus();
      expect(toTab).toHaveStyle(selectedTabStyled);

      expect(fromTabPanel).toHaveAttribute('aria-hidden', 'true');
      expect(toTabPanel).toHaveAttribute('aria-hidden', 'false');

      expect(fromTabPanel).not.toBeVisible();
      expect(toTabPanel).toBeVisible();

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('tabpanel', () => {
    it('should not have focus on click', async () => {
      const props: TabsProps = {
        children: tabsWithLabel,
      };

      const {getAllByTestId} = renderWithTheme(renderTabsDefault, props);

      const firstTabPanel = getAllByTestId('tab-panel')[0];
      const body = document.getElementsByTagName('body')[0];

      firstTabPanel.click();

      expect(firstTabPanel).not.toHaveFocus();
      expect(body).toHaveFocus();
    });

    it('should keeps focus, when clicked, if it has already the focus', async () => {
      const props: TabsProps = {
        children: tabsWithLabel,
      };

      const {getAllByTestId} = renderWithTheme(renderTabsDefault, props);

      const firstTab = getAllByTestId('tab')[0];
      const firstTabPanel = getAllByTestId('tab-panel')[0];
      const body = document.getElementsByTagName('body')[0];

      firstTab.focus();
      userEvent.tab();
      expect(firstTabPanel).toHaveFocus();

      fireEvent.mouseDown(firstTabPanel);
      expect(firstTabPanel).toHaveFocus();
      expect(body).not.toHaveFocus();
    });
  });
});
