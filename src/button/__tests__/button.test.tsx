import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button, IconButton, ButtonProps, ButtonSize} from '..';
import {Email} from '../../icons/email';
import {ColorKeys} from '../../themes/mappers/colors';

const renderButtonWithText = (props: ButtonProps) => (
  <Button {...props}>click this!</Button>
);

const renderButtonWithTextAndIcon = (props: ButtonProps) => (
  <Button {...props}>
    click this!
    <Email />
  </Button>
);

const renderIconButton = (props: ButtonProps) => (
  <IconButton {...props}>
    <Email />
  </IconButton>
);

describe('Button', () => {
  test('renders with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(renderButtonWithText);
    expect(fragment).toMatchSnapshot();
  });

  test('renders text and icon button with fallback formatting', () => {
    const fragment = renderToFragmentWithTheme(renderButtonWithTextAndIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Small Button', () => {
    const props: ButtonProps = {
      size: ButtonSize.Small,
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Button', () => {
    const props: ButtonProps = {
      size: ButtonSize.Large,
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different style preset', () => {
    const props: ButtonProps = {
      stylePreset: 'buttonOutlinedPrimary',
    };

    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  describe('Loading Button', () => {
    test('renders Small Button', () => {
      const props: ButtonProps = {
        size: ButtonSize.Small,
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Large Button', () => {
      const props: ButtonProps = {
        size: ButtonSize.Large,
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });
  });

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
        isLoading: true,
      };
      const fragment = renderToFragmentWithTheme(renderIconButton, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders when there is an icon with a colour', () => {
      const props = {
        size: ButtonSize.Small,
        iconColor: 'buttonText' as ColorKeys,
      };
      const fragment = renderToFragmentWithTheme(renderIconButton, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
