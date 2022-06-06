import React from 'react';
import {fireEvent, act, RenderOptions} from '@testing-library/react';
import {renderWithTheme} from '../../test/test-utils';
import {Tooltip, TooltipProps} from '..';
import {TriggerType} from '../types';
import {Button} from '../../button';
import {createTheme, ThemeProviderProps} from '../../theme';

// The tooltip's inset styling is applied asynchronously. To make assertions on
// the top / left attribute values, we need to flush the queue to ensure that
// the element has been positioned before making assertions on snapshots.
// See https://floating-ui.com/docs/react-dom#testing for more info.
const asyncRender = async <T extends {}>(
  Component: React.ComponentType<T>,
  props?: T & {children?: React.ReactNode},
  theme?: ThemeProviderProps['theme'],
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const res = await renderWithTheme(Component, props, theme, options);
  await act(async () => {});
  return res;
};

describe('Tooltip', () => {
  const defaultProps: TooltipProps = {
    children: <button type="submit">Add</button>,
    title: 'hello',
    defaultOpen: true,
    showPointer: false,
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
      const {getByRole, asFragment} = await asyncRender(Tooltip, defaultProps);
      expect(getByRole('tooltip').textContent).toBe('hello');
      expect(getByRole('tooltip')).toHaveStyle({
        position: 'absolute',
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('not render if title is an empty string', () => {
      const {queryByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        title: '',
      });
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });
    test('with different placement', async () => {
      const {getByRole} = await asyncRender(Tooltip, {
        ...defaultProps,
        placement: 'bottom',
      });
      await act(async () => {});
      expect(getByRole('tooltip')).toHaveStyle({
        position: 'absolute',
      });
    });
    test('with overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-tooltip-theme',
        overrides: {
          stylePresets: {
            tooltipPanelCustom: {
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
        Tooltip,
        {
          ...defaultProps,
          overrides: {
            minWidth: '50px',
            maxWidth: '80px',
            zIndex: 70,
            panel: {
              paddingBlock: 'space040',
              paddingInline: 'space020',
              stylePreset: 'tooltipPanelCustom',
              typographyPreset: 'utilityLabel020',
            },
          },
        },
        myCustomTheme,
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer stylePreset overrides', async () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-tooltip-theme',
        overrides: {
          stylePresets: {
            tooltipPointerCustom: {
              base: {
                backgroundColor: '{{colors.red080}}',
              },
            },
          },
        },
      });
      const {asFragment} = await asyncRender(
        Tooltip,
        {
          ...defaultProps,
          showPointer: true,
          overrides: {
            pointer: {
              stylePreset: 'tooltipPointerCustom',
            },
          },
        },
        myCustomTheme,
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer size overrides', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        overrides: {
          pointer: {
            size: 'sizing040',
          },
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('with pointer y coordinate', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        placement: 'right',
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('offset', () => {
    test('should not be applied with with no pointer', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: false,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and token distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and px distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        overrides: {
          distance: '10px',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and non-px distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        overrides: {
          distance: '1rem',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and mq distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        showPointer: true,
        overrides: {
          distance: {
            xs: 'space060',
          },
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('with different triggers:', () => {
    test('opens on mouseover by default', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(queryByRole('tooltip')).toBeInTheDocument();
    });
    test('closes on mouseleave', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');

      fireEvent.mouseEnter(button);
      fireEvent.mouseLeave(button);
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });
    test('opens on focus by default', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.focus(button);
      expect(queryByRole('tooltip')).toBeInTheDocument();
    });

    test('closes on blur', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        trigger: 'focus' as TriggerType,
      });
      const button = getByRole('button');
      fireEvent.focus(button);
      fireEvent.blur(button);
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });

    test('will not open on focus when focus trigger is not passed', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        trigger: 'hover',
      });
      const button = getByRole('button');
      fireEvent.focus(button);
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });

    test('dismisses with escape key', () => {
      const {queryByRole} = renderWithTheme(Tooltip, defaultProps);
      expect(queryByRole('tooltip')).toBeInTheDocument();
      fireEvent.keyDown(document.body, {key: 'Escape'});
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  describe('pass the correct a11y attributes:', () => {
    test('have role tooltip when used as a description', () => {
      const {queryByRole} = renderWithTheme(Tooltip, defaultProps);
      expect(queryByRole('tooltip')).toBeInTheDocument();
    });
    test('do not have role tooltip when used as a label', () => {
      const {queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        asLabel: true,
      });
      expect(queryByRole('tooltip')).not.toBeInTheDocument();
    });
    test('can describe the child when open and remove aria attribute when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(button.hasAttribute('aria-describedby')).toBe(true);
      fireEvent.mouseLeave(button);
      expect(button.hasAttribute('aria-describedby')).toBe(false);
    });
    test('can describe with exotic title when open and remove aria attribute when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        title: <div>the title</div>,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(button.hasAttribute('aria-describedby')).toBe(true);
      fireEvent.mouseLeave(button);
      expect(button.hasAttribute('aria-describedby')).toBe(false);
    });
    test('should label the child when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        asLabel: true,
      });
      const button = getByRole('button');
      expect(button.hasAttribute('aria-label')).toBe(true);
    });
    test('should label the child when open with an exotic title', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        title: <div>the title</div>,
        defaultOpen: false,
        asLabel: true,
      });
      const button = getByRole('button');
      expect(button.hasAttribute('aria-labelledby')).toBe(false);
      fireEvent.mouseEnter(button);
      expect(button.hasAttribute('aria-labelledby')).toBe(true);
    });
  });

  test('should be controllable', () => {
    const Component = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          <Tooltip open title="hello">
            <button type="submit">Add</button>
          </Tooltip>
          <Button data-testid="outside-control" onClick={() => setOpen(!open)}>
            External control
          </Button>
        </>
      );
    };

    const {getByTestId, queryByRole} = renderWithTheme(Component);

    const button = getByTestId('outside-control');
    fireEvent.click(button);
    expect(queryByRole('tooltip')).toBeInTheDocument();
  });
});
