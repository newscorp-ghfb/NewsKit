import React from 'react';
import {fireEvent} from '@testing-library/react';
import {renderWithTheme} from '../../test/test-utils';
import {Tooltip} from '..';
import {TriggerType} from '../types';
import {Button} from '../../button';
import {createTheme} from '../../theme';

describe('Tooltip', () => {
  const defaultProps = {
    children: <button type="submit">Add</button>,
    title: 'hello',
    defaultOpen: true,
  };

  // Mocking ResizeObserver
  const mockResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  }));

  beforeAll(() => {
    // @ts-ignore
    global.ResizeObserver = mockResizeObserver;
  });

  describe('should render correct styles:', () => {
    test('default', () => {
      const {getByRole, asFragment} = renderWithTheme(Tooltip, defaultProps);
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
    // Cannot test the exact position with unit tests but will be covered in visual tests
    test('with different placement', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        placement: 'bottom',
      });
      expect(getByRole('tooltip')).toHaveStyle({
        position: 'absolute',
      });
    });
    test('with overrides', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-tooltip-theme',
        overrides: {
          stylePresets: {
            tooltipCustom: {
              base: {
                backgroundColor: '{{colors.red060}}',
                borderRadius: '{{borders.borderRadiusSharp}}',
                color: '{{colors.inkContrast}}',
              },
            },
          },
        },
      });
      const {asFragment} = renderWithTheme(
        Tooltip,
        {
          ...defaultProps,
          overrides: {
            minWidth: '50px',
            maxWidth: '80px',
            zIndex: 70,
            paddingBlock: 'space040',
            paddingInline: 'space020',
            stylePreset: 'tooltipCustom',
            typographyPreset: 'utilityLabel020',
          },
        },
        myCustomTheme,
      );
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
    test('opens on focus', () => {
      const {getByRole, queryByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        trigger: 'focus' as TriggerType,
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
    test('can describe the exotic child when open and remove aria attribute when closed', () => {
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
    test('should label the child when open and remove aria attribute when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        ...defaultProps,
        defaultOpen: false,
        asLabel: true,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(button.hasAttribute('aria-labelledby')).toBe(true);
      fireEvent.mouseLeave(button);
      expect(button.hasAttribute('aria-labelledby')).toBe(false);
    });
    test('should label the exotic child when open and remove aria attribute when closed', () => {
      const {getByRole} = renderWithTheme(Tooltip, {
        children: <button type="submit">Add</button>,
        title: <div>the title</div>,
        defaultOpen: false,
        asLabel: true,
      });
      const button = getByRole('button');
      fireEvent.mouseEnter(button);
      expect(button.hasAttribute('aria-labelledby')).toBe(true);
      fireEvent.mouseLeave(button);
      expect(button.hasAttribute('aria-labelledby')).toBe(false);
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
