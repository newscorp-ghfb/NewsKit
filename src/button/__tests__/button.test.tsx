import React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {
  Button,
  ButtonProps,
  ButtonLinkProps,
  ButtonOrButtonLinkProps,
} from '..';
import {IconFilledEmail} from '../../icons';
import {InstrumentationProvider, EventTrigger} from '../../instrumentation';

const renderButtonWithText = (props: ButtonOrButtonLinkProps) => (
  <Button {...props}>click this!</Button>
);

const renderButtonWithTextAndIcon = (props: ButtonOrButtonLinkProps) => (
  <Button {...props}>
    click this!
    <IconFilledEmail />
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
      size: 'small',
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders Large Button', () => {
    const props: ButtonProps = {
      size: 'large',
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders full-width Button', () => {
    const props: ButtonProps = {
      size: 'large',
      overrides: {
        width: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders fixed-width Button', () => {
    const props: ButtonProps = {
      size: 'large',
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
        typographyPreset: 'utilityButton030',
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

  test('renders with different padding', () => {
    const props: ButtonProps = {
      overrides: {
        paddingInline: 'space000',
        paddingBlock: 'space000',
      },
    };

    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders button link when href passed', async () => {
    const props: ButtonLinkProps = {
      href: 'http://localhost:6006',
    };

    const {getByTestId, asFragment} = await renderWithTheme((() => (
      <Button {...props}>test button click</Button>
    )) as React.FC);

    expect(asFragment()).toMatchSnapshot();

    expect(getByTestId('buttonLink')).toBeInTheDocument();
    expect(getByTestId('buttonLink')).toHaveAttribute(
      'href',
      'http://localhost:6006',
    );
  });

  test('renders button link with disabled link', async () => {
    const props: ButtonLinkProps = {
      href: 'http://localhost:6006',
      disabled: true,
    };

    const {getByTestId, asFragment} = await renderWithTheme((() => (
      <Button {...props}>test button click</Button>
    )) as React.FC);

    expect(asFragment()).toMatchSnapshot();

    expect(getByTestId('buttonLink')).toBeInTheDocument();
    expect(getByTestId('buttonLink')).not.toHaveAttribute('href');
  });

  test('handles correctly passed onClick event handler', async () => {
    const mockFunc = jest.fn();

    const props: ButtonProps = {
      onClick: () => {
        mockFunc(42);
      },
    };

    const button = await renderWithTheme((() => (
      <Button {...props}>test button click</Button>
    )) as React.FC).findByText('test button click');

    fireEvent.click(button);

    expect(mockFunc).toHaveBeenCalledWith(42);
  });

  test('as link handles correctly passed onClick event handler', async () => {
    const mockFunc = jest.fn();

    const props: ButtonLinkProps = {
      href: '#link',
      onClick: () => {
        mockFunc(42);
      },
    };

    const button = await renderWithTheme((() => (
      <Button {...props}>test link click</Button>
    )) as React.FC).findByText('test link click');

    fireEvent.click(button);

    expect(mockFunc).toHaveBeenCalledWith(42);
  });

  test('renders with logical props overrides', () => {
    const props: ButtonProps = {
      overrides: {
        paddingBlock: '30px',
        marginBlock: '30px',
      },
    };

    const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  describe('Loading Button', () => {
    test('renders Small Button', () => {
      const props: ButtonProps = {
        size: 'small',
        loading: true,
      };
      const fragment = renderToFragmentWithTheme(renderButtonWithText, props);
      expect(fragment).toMatchSnapshot();
    });

    test('renders Large Button', () => {
      const props: ButtonProps = {
        size: 'large',
        loading: true,
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

describe('Button instrumentation', () => {
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

  test('fires click event onClick when href passed', async () => {
    const mockFireEvent = jest.fn();
    const eventContext = {
      event: 'other event data',
    };
    const props: ButtonLinkProps = {
      href: '#link',
      eventContext,
    };
    const button = await renderWithTheme((() => (
      <InstrumentationProvider fireEvent={mockFireEvent}>
        <Button {...props}>test link text</Button>
      </InstrumentationProvider>
    )) as React.FC).findByText('test link text');

    fireEvent.click(button);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'link',
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
