import {fireEvent} from '@testing-library/react';
import React from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {Drawer} from '../drawer';
import {Block} from '../../block';
import {TextBlock} from '../../text-block';

const drawerBody = (
  <Block spaceStack="space010">
    <TextBlock>Example Drawer text</TextBlock>
  </Block>
);

describe('Drawer layout', () => {
  test('renders default right position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      children: drawerBody,
      onDismiss: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders left position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      children: drawerBody,
      placement: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders closed drawer', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: false,
      onDismiss: () => {},
      children: drawerBody,
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
        onDismiss: () => {},
        children: drawerBody,
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

  test('renders drawer with aria-describedby attribute', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: false,
      onDismiss: () => {},
      ariaDescribedby: 'description purpose',
      children: (
        <>
          <div id="description">Overriden drawer components</div>
          <div id="purpose">Showing different styles</div>
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });
});

describe('Drawer closing', () => {
  test('invokes onDismiss callback when Esc key pressed', () => {
    const mockCallBack = jest.fn();
    renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
      children: drawerBody,
    });

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('invokes onDismiss callback when clicking on the overlay', () => {
    const mockCallBack = jest.fn();
    const overlay = renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
      children: drawerBody,
    }).getByTestId('overlay');

    fireEvent.click(overlay);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('invokes onDismiss callback when clicking on the close button', () => {
    const mockCallBack = jest.fn();
    const drawerCloseIcon = renderWithTheme(Drawer, {
      open: true,
      onDismiss: mockCallBack,
      children: drawerBody,
    }).getByLabelText('close drawer');

    fireEvent.click(drawerCloseIcon);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test("doesn't invoke onDismiss callback if open prop is false", () => {
    const mockCallBack = jest.fn();
    const drawerCloseIcon = renderWithTheme(Drawer, {
      open: false,
      onDismiss: mockCallBack,
      children: drawerBody,
    }).getByLabelText('close drawer');

    fireEvent.click(drawerCloseIcon);

    expect(mockCallBack).not.toHaveBeenCalled();
  });
});
