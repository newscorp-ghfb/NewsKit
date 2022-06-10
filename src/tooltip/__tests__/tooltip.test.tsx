import React from 'react';
import {fireEvent, act, RenderOptions} from '@testing-library/react';
import {Alignment, Side} from '@floating-ui/react-dom-interactions';
import {renderWithTheme} from '../../test/test-utils';
import {Tooltip, TooltipProps} from '..';
import {TriggerType} from '../types';
import {Button} from '../../button';
import {createTheme, ThemeProviderProps} from '../../theme';
import {
  calculateInset,
  getOffsetAxis,
  getOffsetAxisDirection,
  getSide,
} from '../utils';

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
      const {getByRole, asFragment} = await asyncRender(Tooltip, defaultProps);
      expect(getByRole('tooltip', {hidden: true}).textContent).toBe('hello');
      expect(getByRole('tooltip', {hidden: true})).toHaveStyle({
        position: 'absolute',
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('not render if content is an empty string', () => {
      const {queryByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        content: '',
      });
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
    });
    test('with different placement', async () => {
      const {getByRole} = await asyncRender(Tooltip, {
        ...defaultProps,
        placement: 'bottom',
      });
      expect(getByRole('tooltip', {hidden: true})).toHaveStyle({
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
        hidePointer: false,
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
          hidePointer: false,
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
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        placement: 'right',
      });
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('offset', () => {
    test('should not be applied with with no pointer', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: true,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and token distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: 'space040',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and px distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '10px',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and non-px distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '1rem',
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with pointer and mq distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
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

  describe('with different triggers:', () => {
    test('opens on mouseover by default', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(queryByRole('tooltip', {hidden: true})).toBeInTheDocument();
    });
    test('closes on mouseleave', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');

      fireEvent.mouseEnter(button);
      fireEvent.mouseLeave(button);
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
    });
    test('opens on focus by default', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
      });
      const button = getByRole('button');
      fireEvent.focus(button);
      expect(queryByRole('tooltip', {hidden: true})).toBeInTheDocument();
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
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
    });

    test('will not open on focus when focus trigger is not passed', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        trigger: 'hover',
      });
      const button = getByRole('button');
      fireEvent.focus(button);
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
    });

    test('dismisses with escape key', () => {
      const {queryByRole} = renderWithTheme(Tooltip, defaultProps);
      expect(queryByRole('tooltip', {hidden: true})).toBeInTheDocument();
      fireEvent.keyDown(document.body, {key: 'Escape'});
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
    });
  });

  describe('pass the correct a11y attributes:', () => {
    test('have role tooltip when used as a description', () => {
      const {queryByRole} = renderWithTheme(Tooltip, defaultProps);
      expect(queryByRole('tooltip', {hidden: true})).toBeInTheDocument();
    });
    test('do not have role tooltip when used as a label', () => {
      const {queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        asLabel: true,
      });
      expect(queryByRole('tooltip', {hidden: true})).not.toBeInTheDocument();
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
    test('can describe with exotic content when open and remove aria attribute when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        content: <div>the content</div>,
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
    test('should label the child when open with an exotic content', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        content: <div>the content</div>,
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
          <Tooltip open content="hello">
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
    expect(queryByRole('tooltip', {hidden: true})).toBeInTheDocument();
  });

  describe('utils', () => {
    const sides: Side[] = ['top', 'right', 'bottom', 'left'];
    const alignments: Alignment[] = ['start', 'end'];

    describe('getSide', () => {
      test('should return correct side', () => {
        sides.forEach(side => {
          expect(getSide(side)).toEqual(side);
          alignments.forEach(alignment => {
            expect(getSide(`${side}-${alignment}`)).toEqual(side);
          });
        });
      });
    });

    describe('getOffsetAxis', () => {
      test('should return correct axis for offset to be applied along', () => {
        expect(getOffsetAxis('top')).toEqual('y');
        expect(getOffsetAxis('bottom')).toEqual('y');
        expect(getOffsetAxis('right')).toEqual('x');
        expect(getOffsetAxis('left')).toEqual('x');
      });
    });

    describe('getOffsetAxisDirection', () => {
      test('should return correct direction for offset to be applied in', () => {
        expect(getOffsetAxisDirection('top')).toEqual(-1);
        expect(getOffsetAxisDirection('bottom')).toEqual(1);
        expect(getOffsetAxisDirection('right')).toEqual(1);
        expect(getOffsetAxisDirection('left')).toEqual(-1);
      });
    });

    describe('calculateInset', () => {
      const insetValue: number = 10;
      const offsetValue: string = '5px';

      test('should return an empty string if there is no inset value', () => {
        expect(calculateInset(null, 'left', offsetValue, 'right')).toEqual('');
        expect(calculateInset(undefined, 'left', offsetValue, 'right')).toEqual(
          '',
        );
      });

      test('should return the original inset value if there is no offset value', () => {
        expect(calculateInset(insetValue, 'left', undefined, 'right')).toEqual(
          '10px',
        );
        expect(calculateInset(insetValue, 'left', undefined, 'right')).toEqual(
          '10px',
        );
      });

      test('should return the original inset value if there is an offset value even if it is 0', () => {
        expect(calculateInset(0, 'left', undefined, 'right')).toEqual('0px');
        expect(calculateInset(0, 'left', undefined, 'right')).toEqual('0px');
      });

      test('should return the original inset value if the offset should not be applied to this axis', () => {
        expect(calculateInset(insetValue, 'left', offsetValue, 'top')).toEqual(
          '10px',
        );
        expect(
          calculateInset(insetValue, 'left', offsetValue, 'bottom'),
        ).toEqual('10px');
        expect(calculateInset(insetValue, 'top', offsetValue, 'left')).toEqual(
          '10px',
        );
        expect(calculateInset(insetValue, 'top', offsetValue, 'right')).toEqual(
          '10px',
        );
      });

      describe('when the offset should be applied to this axis', () => {
        test('should increase the inset value by the offset value if the tooltip is positioned right or bottom', () => {
          expect(
            calculateInset(insetValue, 'left', offsetValue, 'right'),
          ).toEqual('calc(10px + (5px * 1))');
          expect(
            calculateInset(insetValue, 'top', offsetValue, 'bottom'),
          ).toEqual('calc(10px + (5px * 1))');
        });
        test('should decrease the inset value by the offset value if the tooltip is positioned left or top', () => {
          expect(
            calculateInset(insetValue, 'left', offsetValue, 'left'),
          ).toEqual('calc(10px + (5px * -1))');
          expect(calculateInset(insetValue, 'top', offsetValue, 'top')).toEqual(
            'calc(10px + (5px * -1))',
          );
        });
      });
    });
  });
});
