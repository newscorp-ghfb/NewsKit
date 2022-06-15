import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithTheme, asyncRender} from '../../test/test-utils';
import {Tooltip, TooltipProps} from '..';
import {TriggerType} from '../types';
import {Button} from '../../button';
import {createTheme} from '../../theme';

jest.mock('@floating-ui/react-dom-interactions', () => ({
  ...jest.requireActual('@floating-ui/react-dom-interactions'),
  useId: () => 'MOCK-ID',
}));

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
    test('should not be applied with pointer and non-px distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: '1rem',
        },
      });
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'distance' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should not be applied with pointer and invalid token distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          distance: 'invalid token',
        },
      });
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'distance' is a valid token or px value.",
      );
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
  });

  describe('pointer padding', () => {
    test('should not be applied with non-px distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            padding: '1rem',
          },
        },
      });
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'pointer.padding' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should not be applied with invalid token distance override', async () => {
      jest.spyOn(console, 'warn').mockImplementation();
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            padding: 'invalid token',
          },
        },
      });
      // eslint-disable-next-line no-console
      expect(console.warn).toHaveBeenCalledWith(
        "Invalid component override: please make sure 'pointer.padding' is a valid token or px value.",
      );
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with token distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            padding: 'space040',
          },
        },
      });
      expect(asFragment()).toMatchSnapshot();
    });
    test('should be applied with px distance override', async () => {
      const {asFragment} = await asyncRender(Tooltip, {
        ...defaultProps,
        hidePointer: false,
        overrides: {
          pointer: {
            padding: '10px',
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
});
