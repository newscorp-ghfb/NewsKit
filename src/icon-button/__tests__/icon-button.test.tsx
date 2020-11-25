import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {IconButton} from '..';
import {ButtonProps, ButtonSize} from '../../button';
import {IconFilledEmail} from '../../icons';

const renderIconButton = (props: ButtonProps) => (
  <IconButton aria-label="Test icon button" {...props}>
    <IconFilledEmail />
  </IconButton>
);

describe('IconButton', () => {
  test('renders Icon Button with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(renderIconButton);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Small Icon Button', () => {
    const props = {
      size: ButtonSize.Small,
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Medium Icon Button', () => {
    const props = {
      size: ButtonSize.Medium,
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Icon Button', () => {
    const props = {
      size: ButtonSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Icon Button in loading State', () => {
    const props = {
      size: ButtonSize.Large,
      loading: true,
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different style preset', () => {
    const props: ButtonProps = {
      overrides: {
        stylePreset: 'iconButtonOutlinedPrimary',
      },
    };

    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders when there is an icon with a colour', () => {
    const props = {
      size: ButtonSize.Small,
      iconColor: 'buttonText',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });
});
