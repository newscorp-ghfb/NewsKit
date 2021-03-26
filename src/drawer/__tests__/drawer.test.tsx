import {fireEvent} from '@testing-library/react';
import React from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {Drawer} from '../drawer';
import {TextBlock} from '../../text-block';

const drawerBody = <TextBlock>Drawer body content</TextBlock>;

const drawerHeader = <TextBlock>Drawer header content</TextBlock>;

describe('Drawer layout', () => {
  test('renders default right position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      header: drawerHeader,
      children: drawerBody,
      onDismiss: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders left position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      header: drawerHeader,
      children: drawerBody,
      placement: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders drawer without header', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      children: drawerBody,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders closed drawer', () => {
    const {asFragment, getByTestId} = renderWithTheme(Drawer, {
      open: false,
      onDismiss: () => {},
      children: drawerBody,
    });
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('drawer')).not.toBeVisible();
  });

  test('renders drawer with overrides', () => {
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
              boxShadow: '0px 0px 16px 14px rgba(169,183,172,0.9)',
            },
          },
          drawerHeaderCustom: {
            base: {
              backgroundColor: '{{colors.transparent}}',
              borderStyle: 'none none solid none',
              borderWidth: '{{borders.borderWidth010}}',
              borderColor: '{{colors.red060}}',
            },
          },
          drawerCloseButtonCustom: {
            base: {
              borderWidth: '{{borders.borderWidth010}}',
              borderStyle: 'solid',
              borderColor: '{{colors.teal030}}',
              backgroundColor: '{{colors.transparent}}',
              borderRadius: '{{borders.borderRadiusCircle}}',
              iconColor: '{{colors.teal070}}',
            },
            hover: {
              backgroundColor: '{{colors.teal050}}',
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
          header: {
            spaceInset: 'spaceInset000',
            stylePreset: 'drawerHeaderCustom',
          },
          content: {
            spaceInset: 'spaceInset060',
          },
          closeButton: {
            stylePreset: 'drawerCloseButtonCustom',
          },
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders drawer with aria-ariaLabelledby attribute', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      ariaLabelledby: 'headerLabel',
      header: (
        <>
          <div id="headerLabel">Overridden drawer header</div>
        </>
      ),
      children: null,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders drawer with aria-describedby attribute', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      ariaDescribedby: 'description purpose',
      children: (
        <>
          <div id="description">Overridden drawer components</div>
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
      header: drawerHeader,
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
      header: drawerHeader,
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
      header: drawerHeader,
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
      header: drawerHeader,
      children: drawerBody,
    }).getByLabelText('close drawer');

    fireEvent.click(drawerCloseIcon);

    expect(mockCallBack).not.toHaveBeenCalled();
  });
});
