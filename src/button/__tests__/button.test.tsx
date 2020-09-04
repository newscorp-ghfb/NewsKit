import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {Button, ButtonProps, ButtonSize} from '..';
import {Email} from '../../icons/email';
import {InstrumentationProvider, EventTrigger} from '../../instrumentation';

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

  test('renders with different typography preset', () => {
    const props: ButtonProps = {
      overrides: {
        typographyPreset: 'button030',
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

  test('fires click event onClick', async () => {
    const mockFireEvent = jest.fn();
    const eventContext = {
      event: 'other event data',
    };
    const props: ButtonProps = {
      eventContext,
    };
    const button = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Button {...props}>test link text</Button>
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(button);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'button',
      trigger: EventTrigger.Click,
      context: {
        event: 'other event data',
      },
    });
  });

  test('fires click event onClick with custom originator', async () => {
    const mockFireEvent = jest.fn();
    const eventContext = {
      event: 'other event data',
    };
    const props: ButtonProps = {
      eventContext,
      eventOriginator: 'custom-originator',
    };
    const button = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Button {...props}>test link text</Button>
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(button);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'custom-originator',
      trigger: EventTrigger.Click,
      context: {
        event: 'other event data',
      },
    });
  });
});
