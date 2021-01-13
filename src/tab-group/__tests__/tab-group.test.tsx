import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Tab, TabSize} from '../../tab';
import {TabGroup, TabPane, TabsDistribution} from '..';
import {TabGroupProps} from '../types';
import {IconFilledEmail} from '../../icons';

import {createTheme, compileTheme} from '../../theme';

const renderTabGroupDefault = (props: TabGroupProps) => <TabGroup {...props} />;

const tabsWithLabel = [
  <Tab tabKey={0}>Medium tab</Tab>,
  <Tab tabKey={1}>Medium tab</Tab>,
  <Tab tabKey={2}>Medium tab</Tab>,
];

const tabsWithIcons = [
  <Tab tabKey={0}>
    <IconFilledEmail />
  </Tab>,
  <Tab tabKey={1}>
    <IconFilledEmail />
  </Tab>,
  <Tab tabKey={2}>
    <IconFilledEmail />
  </Tab>,
];

const tabsWithLabelAndIcons = [
  <Tab tabKey={0}>
    <IconFilledEmail />
    Medium tab
  </Tab>,
  <Tab tabKey={1}>
    <IconFilledEmail />
    Medium tab
  </Tab>,
  <Tab tabKey={2}>
    <IconFilledEmail />
    Medium tab
  </Tab>,
];

const tabPanes = [
  <TabPane tabKey={0}>First tab content</TabPane>,
  <TabPane tabKey={1}>Second tab content</TabPane>,
  <TabPane tabKey={2}>Third tab content</TabPane>,
];

const selectedTabStyled = 'color: #0a68c1';

describe('Tab Group', () => {
  test('renders with default styles', () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with default styles and divider', () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      divider: true,
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with sizing', () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons for tabs', () => {
    const props: TabGroupProps = {
      children: tabsWithIcons,
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with icons and label for tabs', () => {
    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders dividers correctly when orientation is vertical', () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      vertical: true,
      divider: true,
    };
    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-tab-group-theme',
      overrides: {
        stylePresets: {
          tabGroupCustom: {
            base: {
              backgroundColor: '{{colors.white}}',
            },
          },
        },
      },
    });

    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Large,
      overrides: {
        stylePreset: 'tabGroupCustom',
      },
    };

    const fragment = renderToFragmentWithTheme(
      renderTabGroupDefault,
      props,
      compileTheme(myCustomTheme),
    );
    expect(fragment).toMatchSnapshot();
  });

  it('sets active on click', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const tab = getAllByTestId('tab')[0];

    fireEvent.click(tab);
    expect(tab).toHaveStyle(selectedTabStyled);

    expect(asFragment()).toMatchSnapshot();
  });

  it('clears focus onMouseDown', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const tab = getAllByTestId('tab')[0];

    fireEvent.mouseDown(tab);
    expect(tab).not.toHaveFocus();

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus on tab', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const secondTab = getAllByTestId('tab')[1];

    firstTab.focus();
    expect(firstTab).toHaveFocus();

    userEvent.tab();
    expect(secondTab).toHaveFocus();

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus and sets next to be active on right arrow', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      tabPanes,
    };
    const {getAllByTestId, getByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const secondTab = getAllByTestId('tab')[1];
    const tabPane = getByTestId('tab-pane');

    firstTab.focus();
    expect(firstTab).toHaveFocus();
    fireEvent.keyDown(firstTab, {key: 'ArrowRight', keyCode: '39'});

    expect(secondTab).toHaveFocus();
    expect(secondTab).toHaveStyle(selectedTabStyled);
    expect(tabPane.innerHTML).toEqual('Second tab content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus and sets previous to be active on left arrow', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      tabPanes,
    };
    const {getAllByTestId, getByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const secondTab = getAllByTestId('tab')[1];
    const tabPane = getByTestId('tab-pane');

    secondTab.focus();
    expect(secondTab).toHaveFocus();
    fireEvent.keyDown(secondTab, {key: 'ArrowLeft', keyCode: '37'});

    expect(firstTab).toHaveFocus();
    expect(firstTab).toHaveStyle(selectedTabStyled);
    expect(tabPane.innerHTML).toEqual('First tab content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus and sets last to be active on left arrow when on the first tab', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      tabPanes,
    };
    const {getAllByTestId, getByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const lastTab = getAllByTestId('tab')[2];
    const tabPane = getByTestId('tab-pane');

    firstTab.focus();
    expect(firstTab).toHaveFocus();
    fireEvent.keyDown(firstTab, {key: 'ArrowLeft', keyCode: '37'});

    expect(lastTab).toHaveFocus();
    expect(lastTab).toHaveStyle(selectedTabStyled);
    expect(tabPane.innerHTML).toEqual('Third tab content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('changes focus and sets first to be active on right arrow when on the last tab', async () => {
    const props: TabGroupProps = {
      children: tabsWithLabel,
      tabPanes,
    };
    const {getAllByTestId, getByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
      props,
    );

    const firstTab = getAllByTestId('tab')[0];
    const lastTab = getAllByTestId('tab')[2];
    const tabPane = getByTestId('tab-pane');

    lastTab.focus();
    expect(lastTab).toHaveFocus();
    fireEvent.keyDown(lastTab, {key: 'ArrowRight', keyCode: '39'});

    expect(firstTab).toHaveFocus();
    expect(firstTab).toHaveStyle(selectedTabStyled);
    expect(tabPane.innerHTML).toEqual('First tab content');

    expect(asFragment()).toMatchSnapshot();
  });

  it('doesnt change focus if no other available tabs', async () => {
    const props: TabGroupProps = {
      children: [
        <Tab tabKey={0}>Medium tab</Tab>,
        <Tab disabled tabKey={1}>
          Medium tab
        </Tab>,
        <Tab disabled tabKey={2}>
          Medium tab
        </Tab>,
      ],
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
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
    const props: TabGroupProps = {
      children: tabsWithLabel,
    };
    const {getAllByTestId, asFragment} = renderWithTheme(
      renderTabGroupDefault,
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
    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Medium,
      overrides: {
        tabBarIndicator: {
          length: 'sizing050',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed tab indicator size which is larger than default', () => {
    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Medium,
      overrides: {
        tabBarIndicator: {
          length: 'sizing120',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with fixed tab indicator percentage size', () => {
    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Medium,
      overrides: {
        tabBarIndicator: {
          length: '75%',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom tab bar track and indicator weight', () => {
    const props: TabGroupProps = {
      children: tabsWithLabelAndIcons,
      size: TabSize.Medium,
      overrides: {
        tabBarTrack: {
          weight: 'borderWidth030',
        },
        tabBarIndicator: {
          weight: 'borderWidth030',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });
});

const tabs = [
  <Tab tabKey={0}>H tab 1</Tab>,
  <Tab tabKey={1}>H tab 2</Tab>,
  <Tab tabKey={2}>H tab 3</Tab>,
];

describe('Tab Group LeftStacked', () => {
  test('renders tab group horizontal leftstacked', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.LeftStacked,
      tabPanes,
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders tab group vertical leftstacked', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.LeftStacked,
      tabPanes,
      vertical: true,
      overrides: {
        tabBar: {
          height: '300px',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });
});

describe('Tab Group FittedFlex', () => {
  test('renders tab group horizontal fittedFlex', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.FittedFlex,
      tabPanes,
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders tab group vertical FittedFlex', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.FittedFlex,
      tabPanes,
      vertical: true,
      overrides: {
        tabBar: {
          height: '300px',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });
});

describe('Tab Group FittedEqual', () => {
  test('renders tab group horizontal FittedEqual', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.FittedEqual,
      tabPanes,
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders tab group vertical FittedEqual', () => {
    const props: TabGroupProps = {
      children: tabs,
      distribution: TabsDistribution.FittedEqual,
      tabPanes,
      vertical: true,
      overrides: {
        tabBar: {
          height: '300px',
        },
      },
    };

    const fragment = renderToFragmentWithTheme(renderTabGroupDefault, props);
    expect(fragment).toMatchSnapshot();
  });
});
