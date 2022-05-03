import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {IconButton} from '..';
import {ButtonSize, IconButtonProps} from '../../button';
import {IconFilledEmail} from '../../icons';

const renderIconButton = (props: IconButtonProps) => (
  <IconButton {...props}>
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
      'aria-label': 'Test icon button',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Medium Icon Button', () => {
    const props: IconButtonProps = {
      size: ButtonSize.Medium,
      'aria-label': 'Test icon button',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Icon Button', () => {
    const props: IconButtonProps = {
      size: ButtonSize.Large,
      'aria-label': 'Test icon button',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Icon Button in loading State', () => {
    const props: IconButtonProps = {
      size: ButtonSize.Large,
      loading: true,
      'aria-label': 'Test icon button',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different style preset', () => {
    const props: IconButtonProps = {
      overrides: {
        stylePreset: 'iconButtonOutlinedPrimary',
      },
      'aria-label': 'Test icon button',
    };

    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders icon button link when href passed', () => {
    const props: IconButtonProps = {
      href: 'http://localhost:6006',
      'aria-label': 'Test icon button',
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders icon button with logical prop overrides', () => {
    const props: IconButtonProps = {
      'aria-label': 'Test icon button',
      overrides: {
        paddingInline: '20px',
        marginBlock: '30px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderIconButton, props);
    expect(fragment).toMatchSnapshot();
  });
});
