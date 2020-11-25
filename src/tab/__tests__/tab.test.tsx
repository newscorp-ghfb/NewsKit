import React from 'react';
import {Tab, TabProps, TabSize} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {IconFilledCircle} from '../../icons';
import {createTheme, compileTheme} from '../../theme';

const renderTabWithLabel = (props: TabProps) => <Tab {...props}>Tab Label</Tab>;

const renderTabWithLabelAndIcon = (props: TabProps) => (
  <Tab {...props}>
    <IconFilledCircle />
    Tab Label
  </Tab>
);

const renderTabWithLabelAndTrailingIcon = (props: TabProps) => (
  <Tab {...props}>
    Tab Label
    <IconFilledCircle />
  </Tab>
);

describe('Tab', () => {
  test('renders label with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(renderTabWithLabel);
    expect(fragment).toMatchSnapshot();
  });

  test('renders label and icon with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(renderTabWithLabelAndIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('renders small tab', () => {
    const props: TabProps = {
      size: TabSize.Small,
    };
    const fragment = renderToFragmentWithTheme(renderTabWithLabel, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders large tab', () => {
    const props: TabProps = {
      size: TabSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderTabWithLabel, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders disabled tab', () => {
    const props: TabProps = {
      disabled: true,
    };
    const fragment = renderToFragmentWithTheme(renderTabWithLabel, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a selected tab correctly with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-tab-theme',
      overrides: {
        stylePresets: {
          tabCustom: {
            selected: {
              borderStyle: 'solid',
              borderColor: '#0a68c1',
            },
          },
        },
      },
    });

    const props: TabProps = {
      selected: true,
      overrides: {
        stylePreset: 'tabCustom',
        typographyPreset: 'utilityLabel030',
        spaceInline: 'space030',
      },
    };
    const fragment = renderToFragmentWithTheme(
      Tab,
      props,
      compileTheme(myCustomTheme),
    ) as any;

    expect(fragment).toMatchSnapshot();
  });

  test('renders with different minHeight', () => {
    const props: TabProps = {
      overrides: {
        minHeight: 'sizing090',
      },
    };
    const fragment = renderToFragmentWithTheme(renderTabWithLabel, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with a leading icon and custom iconSize', () => {
    const props: TabProps = {
      overrides: {
        iconSize: 'iconSize040',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTabWithLabelAndIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with a trailing icon and custom spacing between elements', () => {
    const props: TabProps = {
      overrides: {
        spaceInline: 'space030',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderTabWithLabelAndTrailingIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('should render custom aria-label tab', () => {
    const props: TabProps = {
      ariaLabel: 'my custom aria label',
    };

    const fragment = renderToFragmentWithTheme(
      renderTabWithLabelAndTrailingIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });
});
