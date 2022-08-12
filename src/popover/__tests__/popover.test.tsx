import React, {useEffect, useRef} from 'react';
import userEvent from '@testing-library/user-event';
import {renderWithTheme} from '../../test/test-utils';
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
      await userEvent.click(getByRole('button'));
      expect(getByRole('dialog').textContent).toBe('hello');
      expect(getByRole('dialog')).toHaveStyle({
        position: 'absolute',
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('not render if content is an empty string', async () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        children: <button type="submit">Add</button>,
        content: '',
      });
      await userEvent.click(getByRole('button'));
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('with different placement', async () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        placement: 'bottom',
      });
      await userEvent.click(getByRole('button'));
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
            content: {
              paddingBlock: 'space040',
              paddingInline: 'space020',
            },
            transitionPreset: {
              extend: 'fade',
              base: {
                transitionDelay: '{{motions.motionDuration050}}',
              },
            },
          },
        },
        myCustomTheme,
      );
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
      });
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer y coordinate', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        placement: 'right',
      });
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
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
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('open / close behaviour', () => {
    test('opens on clicking context element', async () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('closes on clicking context element', async () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      await userEvent.click(button);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('does not close on escape key', async () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      await userEvent.keyboard('{esc}');
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('does close on escape key', async () => {
      const {getByRole, queryByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        enableDismiss: true,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      await userEvent.keyboard('{Escape}');
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('does not close on clicking outside', async () => {
      const Component = () => (
        <>
          <div data-testid="outside" />
          <Popover {...defaultProps} />
        </>
      );
      const {getByTestId, getByRole, queryByRole} = renderWithTheme(Component);
      const button = getByRole('button');
      await userEvent.click(button);
      const outside = getByTestId('outside');
      await userEvent.click(outside);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('does close on clicking outside', async () => {
      const Component = () => (
        <>
          <div data-testid="outside" />
          <Popover {...defaultProps} enableDismiss />
        </>
      );
      const {getByTestId, getByRole, queryByRole} = renderWithTheme(Component);
      const button = getByRole('button');
      await userEvent.click(button);
      const outside = getByTestId('outside');
      await userEvent.click(outside);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('controlled case', () => {
    test('should open and close based on state passed', async () => {
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
      await userEvent.click(button);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      await userEvent.click(button);
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('should be able to use handleCloseButtonClick to update parent state', async () => {
      const Component = () => {
        const [open, setOpen] = React.useState(true);
        return (
          <>
            <Popover
              handleCloseButtonClick={() => setOpen(false)}
              open={open}
              content="hello"
            >
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
      const closeButton = getByTestId('close-button');

      expect(queryByRole('dialog')).toBeInTheDocument();
      await userEvent.click(closeButton);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
    });
    test('should call onDismiss on dismiss', async () => {
      const onDismiss = jest.fn();
      const Component = () => (
        <Popover open content="hello" enableDismiss onDismiss={onDismiss}>
          <div>Controlled Popover</div>
        </Popover>
      );

      renderWithTheme(Component);
      await userEvent.keyboard('{Escape}');
      expect(onDismiss).toHaveBeenCalled();
    });
  });

  describe('pass the correct a11y attributes:', () => {
    test("floating element has role 'dialog'", async () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, defaultProps);
      await userEvent.click(getByRole('button'));
      expect(queryByRole('dialog')).toBeInTheDocument();
    });
    test('floating element has default aria-labelledby if no header is passed', async () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        header: undefined,
      });
      const btn = getByRole('button');
      await userEvent.click(btn);
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-labelledby', `ref-${MOCK_ID}`);
      expect(btn).toHaveAttribute('id', `ref-${MOCK_ID}`);
    });
    test('floating element has custom aria-labelledby if no header is passed', async () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        header: undefined,
        children: (
          <button id="customId" type="submit">
            Add
          </button>
        ),
      });
      await userEvent.click(getByRole('button'));
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-labelledby', 'customId');
    });
    test('floating element has aria-describedby if header is passed', async () => {
      const {queryByRole, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        header: 'header value',
      });
      const btn = getByRole('button');
      await userEvent.click(btn);
      const el = queryByRole('dialog');
      expect(el).toHaveAttribute('aria-describedby', `header-${MOCK_ID}`);
    });
    test('context element has aria-haspopup', () => {
      const {queryByRole} = renderWithTheme(Popover, defaultProps);
      const el = queryByRole('button');
      expect(el).toHaveAttribute('aria-haspopup', 'dialog');
    });
    test('context element has aria-controls when dialog is open', async () => {
      const {getByRole} = renderWithTheme(Popover, defaultProps);
      const btn = getByRole('button');
      await userEvent.click(btn);
      expect(btn).toHaveAttribute('aria-controls', `floating-${MOCK_ID}`);
    });
  });

  describe('onDismiss', () => {
    let onDismiss: jest.Mock;
    beforeEach(() => {
      onDismiss = jest.fn();
    });

    test('calls onDismiss on close', async () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        onDismiss,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      await userEvent.click(button);
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
    test('shifts to panel panel on open', async () => {
      const {getByRole, getByTestId} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      const panel = getByTestId('floating-element-panel');
      expect(panel).toHaveFocus();
    });
    test('shifts through interactive elements within popover', async () => {
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
      const {getByRole, getByTestId} = renderWithTheme(Component);
      const button = getByRole('button');
      await userEvent.click(button);
      const panel = getByTestId('floating-element-panel');
      expect(panel).toHaveFocus();
      await userEvent.tab();
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
      await userEvent.tab();
      const input2 = getByTestId('input2');
      expect(input2).toHaveFocus();
    });
    test('shifts to close button then to elements outside popover after elements within popover', async () => {
      const Component = () => (
        <>
          <Popover
            {...defaultProps}
            content={
              <>
                <input data-testid="input1" />
              </>
            }
          />
          <input data-testid="input2" />
        </>
      );
      const {getByRole, getByTestId} = renderWithTheme(Component);
      const button = getByRole('button');
      await userEvent.click(button);
      const panel = getByTestId('floating-element-panel');
      expect(panel).toHaveFocus();
      await userEvent.tab();
      const input1 = getByTestId('input1');
      expect(input1).toHaveFocus();
      await userEvent.tab();
      const closeBtn = getByTestId('close-button');
      expect(closeBtn).toHaveFocus();
      await userEvent.tab();
      const input2 = getByTestId('input2');
      expect(input2).toHaveFocus();
    });
    test('returns to context element on close by default', async () => {
      const {getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
      });
      const button = getByRole('button');
      await userEvent.click(button);
      await userEvent.click(button);
      expect(button).toHaveFocus();
    });
    test('returns to custom element on close if restoreFocusTo is provided', async () => {
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
      await userEvent.click(button);

      const panel = getByTestId('floating-element-panel');
      expect(panel).toHaveFocus();

      await userEvent.click(button);

      const restoreFocus = getByTestId('restoreFocus');
      expect(restoreFocus).toHaveFocus();
    });
  });

  describe('header', () => {
    test('should show if passed', async () => {
      const {getByRole, queryByTestId} = renderWithTheme(Popover, {
        ...defaultProps,
        header: 'header value',
      });
      await userEvent.click(getByRole('button'));
      const headerText = queryByTestId('header-text');
      expect(headerText).toHaveTextContent('header value');
    });
    test('should not show if not passed', async () => {
      const {getByRole, queryByTestId} = renderWithTheme(Popover, {
        ...defaultProps,
        header: undefined,
      });
      await userEvent.click(getByRole('button'));
      const headerText = queryByTestId('header-text');
      expect(headerText).not.toBeInTheDocument();
    });
    test('applies stylePreset overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-popover-theme',
        overrides: {
          stylePresets: {
            popoverHeaderCustom: {
              base: {
                borderColor: '{{colors.red080}}',
                borderStyle: 'solid',
                borderWidth: '{{borders.borderWidth020}}',
              },
            },
          },
        },
      });
      const {asFragment, getByRole} = renderWithTheme(
        Popover,
        {
          ...defaultProps,
          header: 'header value',
          overrides: {
            pointer: {
              stylePreset: 'popoverHeaderCustom',
            },
          },
        },
        myCustomTheme,
      );
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies logical prop overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        header: 'header value',
        overrides: {
          header: {
            paddingBlock: '24px',
            paddingInline: '20px',
          },
        },
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies typography preset overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        header: 'header value',
        overrides: {
          header: {
            typographyPreset: 'utilityLabel010',
          },
        },
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('close button', () => {
    test('should not show if hidden', async () => {
      const {getByRole, queryByTestId} = renderWithTheme(Popover, {
        ...defaultProps,
        closePosition: 'none',
      });
      await userEvent.click(getByRole('button'));
      const closeBtn = queryByTestId('close-button');
      expect(closeBtn).not.toBeInTheDocument();
    });
    test('should show right-aligned', async () => {
      const {getByRole, asFragment} = renderWithTheme(Popover, {
        ...defaultProps,
        closePosition: 'right',
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('should show left-aligned', async () => {
      const {getByRole, asFragment} = renderWithTheme(Popover, {
        ...defaultProps,
        closePosition: 'left',
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies stylePreset overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-popover-theme',
        overrides: {
          stylePresets: {
            closeButtonCustom: {
              base: {
                backgroundColor: '{{colors.red080}}',
                borderRadius: '{{borders.borderRadiusCircle}}',
                color: '{{colors.white}}',
                iconColor: '{{colors.inkBase}}',
              },
            },
            closeButtonContainerCustom: {
              base: {
                borderColor: '{{colors.red080}}',
                borderStyle: 'solid',
                borderWidth: '{{borders.borderWidth020}}',
              },
            },
          },
        },
      });
      const {asFragment, getByRole} = renderWithTheme(
        Popover,
        {
          ...defaultProps,
          header: 'header value',
          overrides: {
            closeButton: {
              stylePreset: 'closeButtonCustom',
            },
            closeButtonContainer: {
              stylePreset: 'closeButtonContainerCustom',
            },
          },
        },
        myCustomTheme,
      );
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies logical prop overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          closeButtonContainer: {
            paddingBlock: '24px',
            paddingInline: '20px',
          },
        },
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('should close popover and call onDismiss and handleCloseButtonClick when close button clicked', async () => {
      const onDismiss = jest.fn();
      const handleCloseButtonClick = jest.fn();
      const {getByRole, queryByRole, getByTestId} = renderWithTheme(Popover, {
        ...defaultProps,
        onDismiss,
        handleCloseButtonClick,
      });
      await userEvent.click(getByRole('button'));
      expect(queryByRole('dialog')).toBeInTheDocument();
      const closeBtn = getByTestId('close-button');
      await userEvent.click(closeBtn);
      expect(queryByRole('dialog')).not.toBeInTheDocument();
      expect(onDismiss).toHaveBeenCalled();
      expect(handleCloseButtonClick).toHaveBeenCalled();
    });
  });

  describe('content', () => {
    test('applies stylePreset overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-popover-theme',
        overrides: {
          stylePresets: {
            contentCustom: {
              base: {
                color: '{{colors.inkInverse}}',
              },
            },
          },
        },
      });
      const {asFragment, getByRole} = renderWithTheme(
        Popover,
        {
          ...defaultProps,
          header: 'header value',
          overrides: {
            content: {
              stylePreset: 'contentCustom',
            },
          },
        },
        myCustomTheme,
      );
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies logical prop overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          content: {
            paddingBlock: '24px',
            paddingInline: '20px',
          },
        },
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
    test('applies typography preset overrides', async () => {
      const {asFragment, getByRole} = renderWithTheme(Popover, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          content: {
            typographyPreset: 'editorialParagraph020',
          },
        },
      });
      await userEvent.click(getByRole('button'));
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
