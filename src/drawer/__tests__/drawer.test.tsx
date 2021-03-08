import {fireEvent} from '@testing-library/react';
import React from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {Drawer} from '../drawer';

describe('Drawer layout', () => {
  test('renders default right position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      children: <div>Drawer content</div>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders left position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      children: <div>Drawer content</div>,
      placement: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders closed drawer', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: false,
      children: <div>Drawer content</div>,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders drawer with overlays', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-drawer-theme',
      overrides: {
        stylePresets: {
          overlayCustom: {
            base: {
              backgroundColor: '{{colors.amber010}}',
            },
          },
          drawerPanelCustom: {
            base: {
              backgroundColor: '{{colors.green010}}',
              boxShadow: '{{shadows.shadow030}}',
            },
          },
        },
      },
    });

    const fragment = renderToFragmentWithTheme(
      Drawer,
      {
        open: true,
        children: <div>Drawer content</div>,
        overrides: {
          overlay: {
            stylePreset: 'overlayCustom',
          },
          panel: {
            stylePreset: 'drawerPanelCustom',
            size: '50%',
            maxSize: '40%',
            minSize: '200px',
          },
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });
});

describe('Drawer onDismiss', () => {
  test('closes drawer when Esc key pressed', () => {
    const mockCallBack = jest.fn();
    renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
    });

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('closes drawer when clicking on the overlay', () => {
    const mockCallBack = jest.fn();
    const overlay = renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
    }).getByTestId('overlay');

    fireEvent.click(overlay);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test("doesn't close tha drawer when clicking the overlay closable is false", () => {
    const mockCallBack = jest.fn();
    const overlay = renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
      closeable: false,
    }).getByTestId('overlay');

    fireEvent.click(overlay);

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  test('closes drawer when clicking on the close button', () => {
    const mockCallBack = jest.fn();
    const drawerCloseIcon = renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
    }).getByLabelText('close drawer');

    fireEvent.click(drawerCloseIcon);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test("doesn't invoke onDismiss callback if open prop is false", () => {
    const mockCallBack = jest.fn();
    const drawerCloseIcon = renderWithTheme(Drawer, {
      open: false,
      onDismiss: mockCallBack,
    }).getByLabelText('close drawer');

    fireEvent.click(drawerCloseIcon);

    expect(mockCallBack).not.toHaveBeenCalled();
  });

  test("doesn't close the drawer when onDismiss prop is not provided", () => {
    const {getByTestId, getByLabelText} = renderWithTheme(Drawer, {
      open: true,
    });

    fireEvent.click(getByLabelText('close drawer'));

    expect(getByTestId('drawer')).toBeVisible();
  });
});
