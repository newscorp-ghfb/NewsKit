import React, {useEffect, useRef} from 'react';
import {fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {asyncRender, renderWithTheme} from '../../test/test-utils';
import {Popover, PopoverProps} from '..';
import {Button} from '../../button';
import {createTheme} from '../../theme';

const MOCK_ID = 'MOCK-ID';
jest.mock('@floating-ui/react-dom-interactions', () => ({
  ...jest.requireActual('@floating-ui/react-dom-interactions'),
  useId: () => MOCK_ID,
}));

describe('Popover', () => {
  const defaultProps: PopoverProps = {
    children: <button type="submit">Add</button>,
    content: 'hello',
    defaultOpen: true,
    hidePointer: true,
  };

  // ResizeObserver is not implemented by JSDom but is needed by the lib
  const mockResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  }));

  beforeAll(() => {
    // @ts-ignore
    global.ResizeObserver = mockResizeObserver;
  });

  describe('should render correct styles:', () => {
    test('default', async () => {
      const {getByRole, asFragment} = await asyncRender(Popover, defaultProps);
      expect(getByRole('dialog').textContent).toBe('hello');
      expect(getByRole('dialog')).toHaveStyle({
        position: 'absolute',
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('not render if content is an empty string', () => {
      const {queryByRole} = renderWithTheme(Popover, {
        children: <button type="submit">Add</button>,
        content: '',
      });
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('with different placement', async () => {
      const {getByRole} = await asyncRender(Popover, {
        ...defaultProps,
        placement: 'bottom',
      });
      expect(getByRole('dialog')).toHaveStyle({
        position: 'absolute',
      });
    });
    test('with overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-popover-theme',
        overrides: {
          stylePresets: {
            popoverPanelCustom: {
              base: {
                backgroundColor: '{{colors.red060}}',
                borderRadius: '{{borders.borderRadiusSharp}}',
                color: '{{colors.inkContrast}}',
              },
            },
          },
        },
      });
      const {asFragment} = await asyncRender(
        Popover,
        {
          ...defaultProps,
          overrides: {
            minWidth: '50px',
            maxWidth: '80px',
            zIndex: 70,
            panel: {
              paddingBlock: 'space040',
              paddingInline: 'space020',
              stylePreset: 'popoverPanelCustom',
              typographyPreset: 'utilityLabel020',
            },
          },
        },
        myCustomTheme,
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer stylePreset overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-popover-theme',
        overrides: {
          stylePresets: {
            popoverPointerCustom: {
              base: {
                backgroundColor: '{{colors.red080}}',
              },
            },
          },
        },
      });
      const {asFragment} = await asyncRender(
        Popover,
        {
          ...defaultProps,
          hidePointer: false,
          overrides: {
            pointer: {
              stylePreset: 'popoverPointerCustom',
            },
          },
        },
        myCustomTheme,
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer size overrides', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            size: 'sizing040',
          },
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer y coordinate', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        placement: 'right',
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('offset', () => {
    test('should not be applied with with no pointer', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: true,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and token distance override', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and px distance override', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '10px',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and non-px distance override', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '1rem',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and mq distance override', async () => {
      const {asFragment} = await asyncRender(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: {
            xs: 'space060',
          },
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('open / close behaviour', () => {
    test('opens on clicking context element', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('closes on clicking context element', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('does not close on escape key', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      fireEvent.keyDown(document.body, {key: 'Escape'});
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('does not close on clicking outside', () => {
      const Component = () => (
        <>
          <div data-testid="outside" />
          <Popover {...defaultProps} defaultOpen={false} />
        </>
      );
      const {getByTestId, getByRole, queryByRole} = renderWithTheme(Component);
      const button = getByRole('button');
      fireEvent.click(button);
      const outside = getByTestId('outside');
      fireEvent.click(outside);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
  });

  // Not currently supported due to https://github.com/floating-ui/floating-ui/issues/1741
  // describe('defaultOpen', () => {
  //   test('should be open onload and close on first click if defaultOpen=true', () => {
  //     const {getByRole, queryByRole} = renderWithTheme(Popover, {
  //       ...defaultProps,
  //       defaultOpen: true,
  //     });
  //     expect(queryByRole('dialog')).not.toBeInTheDocument();
  //     const button = getByRole('button');
  //     fireEvent.click(button);
  //     expect(queryByRole('dialog')).not.toBeInTheDocument();
  //   });
  // });

  describe('controlled case', () => {
    test('should open and close based on state passed', () => {
      const Component = () => {
        const [open, setOpen] = React.useState(true);
        return (
          <>
            <Popover open={open} content="hello">
              <button type="submit">Add</button>
            </Popover>
            <Button
              data-testid="outside-control"
              onClick={() => setOpen(!open)}
            >
              External control
            </Button>
          </>
        );
      };

      const {getByTestId, queryByRole} = renderWithTheme(Component);
      const button = getByTestId('outside-control');

      expect(queryByRole('dialog')).toBeInTheDocument();
      fireEvent.click(button);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      fireEvent.click(button);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('should call onDismiss on close', () => {
      const onDismiss = jest.fn();
      const Component = () => {
        const [open, setOpen] = React.useState(true);
        return (
          <>
            <Popover open={open} content="hello" onDismiss={onDismiss}>
              <button type="submit">Add</button>
            </Popover>
            <Button
              data-testid="outside-control"
              onClick={() => setOpen(!open)}
            >
              External control
            </Button>
          </>
        );
      };

      const {getByTestId} = renderWithTheme(Component);
      const button = getByTestId('outside-control');
      fireEvent.click(button);
      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe('pass the correct a11y attributes:', () => {
    test("floating element has role 'dialog'", () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('floating element has aria-expanded', () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-expanded', 'true');
    });
    test('context element has aria-haspopup', () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      const el = queryByRole('button');
      expect(el).toHaveAttribute('aria-haspopup', 'dialog');
    });
    test('context element has aria-controls', () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      const el = queryByRole('button');
      expect(el).toHaveAttribute('aria-controls', MOCK_ID);
    });
  });

  describe('onDismiss', () => {
    let onDismiss: jest.Mock;
    beforeEach(() => {
      onDismiss = jest.fn();
    });

    test('calls onDismiss on close', () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
        onDismiss,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      expect(onDismiss).toHaveBeenCalled();
    });
    test('does not call onDismiss on first load if closed', () => {
      renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
        onDismiss,
      });
      expect(onDismiss).not.toHaveBeenCalled();
    });
  });

  describe.skip('fallbackPlacement', () => {
    test('reverts to default fallbackPlacement', () => {});
    test('reverts to custom fallbackPlacement', () => {});
  });

  describe.skip('boundary', () => {
    test('respects scrollParent boundary', () => {});
    test('respects viewport boundary', () => {});
    test('respects window boundary', () => {});
    test('respects custom boundary', () => {});
  });

  describe('focus', () => {
    test('does not update on first load', () => {
      const Component = () => (
        <>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input data-testid="input1" autoFocus />
          <Popover {...defaultProps} defaultOpen={false} />
        </>
      );
      const {getByTestId} = renderWithTheme(Component);
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
    });
    test('on container on open', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      userEvent.click(button);
      const dialog = queryByRole('dialog');
      expect(dialog).toHaveFocus();
    });
    test('scroll through focusable elements within popover', () => {
      const Component = () => (
        <Popover
          {...defaultProps}
          defaultOpen={false}
          content={
            <>
              <input data-testid="input1" />
              <input data-testid="input2" />
            </>
          }
        />
      );
      const {getByRole, queryByRole, getByTestId} = renderWithTheme(Component);
      const button = getByRole('button');
      userEvent.click(button);
      const dialog = queryByRole('dialog');
      expect(dialog).toHaveFocus();
      userEvent.tab();
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
      userEvent.tab();
      const input2 = getByTestId('input2');
      expect(input2).toHaveFocus();
    });
    test('can still focus on elements outside popover', () => {
      const Component = () => (
        <>
          <Popover {...defaultProps} defaultOpen={false} />
          <input data-testid="input1" />
          <input data-testid="input2" />
        </>
      );
      const {getByRole, queryByRole, getByTestId} = renderWithTheme(Component);
      const button = getByRole('button');
      userEvent.click(button);
      const dialog = queryByRole('dialog');
      expect(dialog).toHaveFocus();
      userEvent.tab();
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
      userEvent.tab();
      const input2 = getByTestId('input2');
      expect(input2).toHaveFocus();
    });
    test('on context element on close', () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      userEvent.click(button);
      userEvent.click(button);
      expect(button).toHaveFocus();
    });
    test('on custom element on close', () => {
      const Component = () => {
        const [forceRenderState, setForceRenderState] = React.useState(false);
        const restoreFocusRef = useRef(null);

        useEffect(() => {
          setForceRenderState(true);
        }, [restoreFocusRef]);

        return (
          <>
            <div>Has re-rendered with ref initialized: {forceRenderState}</div>
            <Popover
              {...defaultProps}
              defaultOpen={false}
              restoreFocusTo={restoreFocusRef.current || undefined}
            />
            <input ref={restoreFocusRef} data-testid="restoreFocus" />
          </>
        );
      };

      const {getByTestId, getByRole} = renderWithTheme(Component);

      const button = getByRole('button');
      userEvent.click(button);

      const dialog = getByRole('dialog');
      expect(dialog).toHaveFocus();

      userEvent.click(button);

      const restoreFocus = getByTestId('restoreFocus');
      expect(restoreFocus).toHaveFocus();
    });
  });
});
