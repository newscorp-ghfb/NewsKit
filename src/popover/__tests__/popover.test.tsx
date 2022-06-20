import React, {useEffect, useRef} from 'react';
import {fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithTheme, applyAsyncStyling} from '../../test/test-utils';
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
      const {getByRole, asFragment} = renderWithTheme(Popover, defaultProps);
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(getByRole('dialog').textContent).toBe('hello');
      expect(getByRole('dialog')).toHaveStyle({
        position: 'absolute',
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('not render if content is an empty string', () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        children: <button type="submit">Add</button>,
        content: '',
      });
      fireEvent.click(getByRole('button'));
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('with different placement', async () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        placement: 'bottom',
      });
      fireEvent.click(getByRole('button'));
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
      const {asFragment, getByRole} = renderWithTheme(
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
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
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
      const {asFragment, getByRole} = renderWithTheme(
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
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer size overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            size: 'sizing040',
          },
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer y coordinate', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        placement: 'right',
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('offset', () => {
    test('should not be applied with with no pointer', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: true,
        overrides: {
          distance: 'space040',
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('should not be applied with pointer and non-px distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '1rem',
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'distance' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should not be applied with pointer and invalid token distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: 'invalid token',
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'distance' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and token distance override', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: 'space040',
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and px distance override', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '10px',
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('pointer padding', () => {
    test('should not be applied with non-px distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            edgeOffset: '1rem',
          },
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'pointer.edgeOffset' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should not be applied with invalid token distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            edgeOffset: 'invalid token',
          },
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'pointer.edgeOffset' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with token distance override', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            edgeOffset: 'space040',
          },
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with px distance override', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            edgeOffset: '10px',
          },
        },
      });
      fireEvent.click(getByRole('button'));
      await applyAsyncStyling();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('open / close behaviour', () => {
    test('opens on clicking context element', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('closes on clicking context element', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      fireEvent.click(button);
      fireEvent.click(button);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('does not close on escape key', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
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
          <Popover {...defaultProps} />
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
      const {queryByRole, getByRole} = renderWithTheme(Popover, defaultProps);
      fireEvent.click(getByRole('button'));
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('floating element has aria-expanded', () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, defaultProps);
      fireEvent.click(getByRole('button'));
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-expanded', 'true');
    });
    test('floating element has default aria-labelledby', () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, defaultProps);
      const btn = getByRole('button');
      fireEvent.click(btn);
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-labelledby', MOCK_ID);
      expect(btn).toHaveAttribute('id', MOCK_ID);
    });
    test('floating element has custom aria-labelledby', () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        children: (
          <button id="customId" type="submit">
            Add
          </button>
        ),
      });
      fireEvent.click(getByRole('button'));
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-labelledby', 'customId');
    });
    test('context element has aria-haspopup', () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      const el = queryByRole('button');
      expect(el).toHaveAttribute('aria-haspopup', 'dialog');
    });
    test('context element has aria-controls when dialog is open', () => {
      const {getByRole} = renderWithTheme(Popover, defaultProps);
      const btn = getByRole('button');
      fireEvent.click(btn);
      expect(btn).toHaveAttribute('aria-controls', MOCK_ID);
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
        onDismiss,
      });
      expect(onDismiss).not.toHaveBeenCalled();
    });
  });

  describe('focus', () => {
    test('does not update on first load', () => {
      const Component = () => (
        <>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input data-testid="input1" autoFocus />
          <Popover {...defaultProps} />
        </>
      );
      const {getByTestId} = renderWithTheme(Component);
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
    });
    test('on container on open', () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
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
          <Popover {...defaultProps} />
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
