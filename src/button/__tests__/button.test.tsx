import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Button, ButtonProps, ButtonSize} from '..';
import {Email} from '../../icons/email';

const renderButtonWithText = (props: ButtonProps) => (
  <Button {...props}>click this!</Button>
);

const renderButtonWithTextAndIcon = (props: ButtonProps) => (
  <Button {...props}>
    click this!
    <Email />
  </Button>
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

  test('renders full-width Button', () => {
    const props: ButtonProps = {
      size: ButtonSize.Large,
      overrides: {
        width: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders fixed-width Button', () => {
    const props: ButtonProps = {
      size: ButtonSize.Large,
      overrides: {
        width: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different type preset', () => {
    const props: ButtonProps = {
      overrides: {
        typePreset: 'buttonLarge',
      },
    };

    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with different style preset', () => {
    const props: ButtonProps = {
      overrides: {
        stylePreset: 'buttonOutlinedPrimary',
      },
    };

    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom padding preset', () => {
    const props: ButtonProps = {
      overrides: {
        paddingPreset: 'spaceInset000Squish',
      },
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

    test('renders a button with token set for width and height', () => {
      const props: ButtonProps = {
        overrides: {
          width: 'sizing120',
          height: 'sizing120',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders a button with percentage for width and height', () => {
      const props: ButtonProps = {
        overrides: {
          width: '100%',
          height: '100%',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders a button with fixed for width and height', () => {
      const props: ButtonProps = {
        overrides: {
          width: '100px',
          height: '100px',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders a button with token set for minWidth and minHeight', () => {
      const props: ButtonProps = {
        overrides: {
          minWidth: 'sizing120',
          minHeight: 'sizing120',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders a button with percentage for minWidth and minHeight', () => {
      const props: ButtonProps = {
        overrides: {
          minWidth: '100%',
          minHeight: '100%',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders a button with fixed for minWidth and minHeight', () => {
      const props: ButtonProps = {
        overrides: {
          minWidth: '100px',
          minHeight: '100px',
        },
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });
  });
});
