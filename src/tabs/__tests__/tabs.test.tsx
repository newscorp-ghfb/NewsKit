import React from 'react';
import userEvent from '@testing-library/user-event';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Tab, TabSize} from '../..';
import {Tabs, TabsDistribution} from '..';
import {TabAlign, TabsProps} from '../types';
import {IconFilledEmail} from '../../icons';
import {KEYBOARD_ARROWS} from '../utils';

const renderTabsDefault = (props: TabsProps) => <Tabs {...props} />;

const tabsWithLabel = [
  <Tab label="Medium tab">First tab content</Tab>,
  <Tab label="Medium tab">Second tab content</Tab>,
  <Tab label="Medium tab">Third tab content</Tab>,
];

const tabsWithIcons = [
  <Tab label={<IconFilledEmail />}>First tab content</Tab>,
  <Tab label={<IconFilledEmail />}>Second tab content</Tab>,
  <Tab label={<IconFilledEmail />}>Third tab content</Tab>,
];

const tabWithLabelAndIcon = (
  <>
    <IconFilledEmail />
    Medium tab
  </>
);

const tabsWithLabelAndIcons = [
  <Tab label={tabWithLabelAndIcon}>First tab content</Tab>,

  <Tab label={tabWithLabelAndIcon}>Second tab content</Tab>,
  <Tab label={tabWithLabelAndIcon}>Third tab content</Tab>,
];

const selectedTabStyled = 'color: #0a68c1';

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
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons for tabs', () => {
    const props: TabsProps = {
      children: tabsWithIcons,
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons and label for tabs', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Large,
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
      size: TabSize.Large,
      overrides: {
        spaceInline: 'space050',
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabsDefault, props);
    expect(fragment).toMatchSnapshot();
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

  it('changes focus on-tab to tab-panel ', async () => {
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
      size: TabSize.Medium,
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
      size: TabSize.Medium,
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
      size: TabSize.Medium,
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
      size: TabSize.Medium,
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

  test('renders with left/right aligned text', () => {
    const props: TabsProps = {
      children: tabsWithLabelAndIcons,
      vertical: true,
    };

    const fragmentLeft = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      align: TabAlign.Start,
    });
    expect(fragmentLeft).toMatchSnapshot();

    const fragmentRight = renderToFragmentWithTheme(renderTabsDefault, {
      ...props,
      align: TabAlign.End,
    });
    expect(fragmentRight).toMatchSnapshot();
  });
});

const tabs = [
  <Tab label="H tab 1">First tab content</Tab>,
  <Tab label="H tab 2">Second tab content</Tab>,
  <Tab label="H tab 3">Third tab content</Tab>,
];

describe('Tabs distribution', () => {
  const flows = ['horizontal', 'vertical'];
  const tabsDistributions = Object.values(TabsDistribution) as string[];

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
});
