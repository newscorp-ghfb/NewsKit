/* istanbul ignore file */
// eslint-disable-next-line
import {fireEvent} from '@testing-library/react';
import React from 'react';
import {renderToFragmentWithTheme, renderWithTheme} from '../test/test-utils';
import {BaseDialogProps} from './types';

export const sharedDialogTests = (
  Dialog: React.FC<BaseDialogProps>,
  header: JSX.Element,
  body: JSX.Element,
) => {
  test('renders default', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders without header', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      onDismiss: () => {},
      children: body,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders with aria-ariaLabelledby attribute', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      onDismiss: () => {},
      ariaLabelledby: 'headerLabel',
      header: (
        <>
          <div id="headerLabel">Overridden dialog header</div>
        </>
      ),
      children: null,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders with aria-describedby attribute', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      onDismiss: () => {},
      ariaDescribedby: 'description purpose',
      children: (
        <>
          <div id="description">Overridden dialog components</div>
          <div id="purpose">Showing different styles</div>
        </>
      ),
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders without overlay', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
      hideOverlay: true,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders screen reader message when focus trapping disabled', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
      disableFocusTrap: true,
    });
    expect(fragment).toMatchSnapshot();
  });

  test('invokes onDismiss callback when Esc key pressed', () => {
    const mockCallBack = jest.fn();
    renderWithTheme(Dialog, {
      open: true,
      onDismiss: mockCallBack,
      header,
      children: body,
    });

    fireEvent.keyUp(document, {key: 'Escape'});

    expect(mockCallBack).toHaveBeenCalled();
  });
  test('invokes onDismiss callback when clicking on the overlay', () => {
    const mockCallBack = jest.fn();
    const overlay = renderWithTheme(Dialog, {
      open: true,
      onDismiss: mockCallBack,
      header,
      children: body,
    }).getByTestId('overlay');

    fireEvent.click(overlay);

    expect(mockCallBack).toHaveBeenCalled();
  });
  test('invokes onDismiss callback when clicking on the close button', () => {
    const mockCallBack = jest.fn();
    const dialogCloseIcon = renderWithTheme(Dialog, {
      open: true,
      onDismiss: mockCallBack,
      header,
      children: body,
    }).getByLabelText('close');

    fireEvent.click(dialogCloseIcon);

    expect(mockCallBack).toHaveBeenCalled();
  });

  test('renders without close button', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
      closePosition: 'none',
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders without header and close', () => {
    const fragment = renderToFragmentWithTheme(Dialog, {
      open: true,
      children: body,
      onDismiss: () => {},
      closePosition: 'none',
    });
    expect(fragment).toMatchSnapshot();
  });
  test('toggle aria-hidden to content outside dialog', () => {
    const Component = () => {
      const [open, setOpen] = React.useState(true);

      return (
        <>
          <p data-testid="outside-content">other content</p>
          <Dialog open={open} onDismiss={() => setOpen(false)}>
            Dialog content
          </Dialog>
        </>
      );
    };

    const {getByTestId, asFragment} = renderWithTheme(Component);

    // outside content is hidden for screen readers when dialog is open
    expect(getByTestId('outside-content')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(asFragment()).toMatchSnapshot();

    // outside content should be visible when dialog is closed
    fireEvent.click(getByTestId('button'));
    expect(getByTestId('outside-content')).not.toHaveAttribute('aria-hidden');
    expect(asFragment()).toMatchSnapshot();
  });
};
