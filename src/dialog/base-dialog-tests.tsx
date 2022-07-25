/* istanbul ignore file */
// eslint-disable-next-line
import {fireEvent, RenderResult} from '@testing-library/react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';
import {
  renderToFragmentInBody,
  renderWithTheme,
  renderWithThemeInBody,
} from '../test/test-utils';

import {BaseDialogProps} from './types';

export const sharedDialogTests = (
  Dialog: React.FC<BaseDialogProps>,
  header: JSX.Element,
  body: JSX.Element,
) => {
  test('renders default', () => {
    const fragment = renderToFragmentInBody(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders without header', () => {
    const fragment = renderToFragmentInBody(Dialog, {
      open: true,
      onDismiss: () => {},
      children: body,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders with aria-ariaLabelledby attribute', () => {
    const fragment = renderToFragmentInBody(Dialog, {
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
    const fragment = renderToFragmentInBody(Dialog, {
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
    const fragment = renderToFragmentInBody(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
      hideOverlay: true,
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders screen reader message when focus trapping disabled', () => {
    const fragment = renderToFragmentInBody(Dialog, {
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

    userEvent.keyboard('{esc}');

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
    const fragment = renderToFragmentInBody(Dialog, {
      open: true,
      header,
      children: body,
      onDismiss: () => {},
      closePosition: 'none',
    });
    expect(fragment).toMatchSnapshot();
  });
  test('renders without header and close', () => {
    const fragment = renderToFragmentInBody(Dialog, {
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

    const {getByTestId, asFragment, container} = renderWithThemeInBody(
      Component,
    );

    // outside content is hidden for screen readers when dialog is open
    // since the dialog is rendered inside a portal the outside content is the "container"
    expect(container).toHaveAttribute('aria-hidden', 'true');
    expect(asFragment()).toMatchSnapshot();

    // outside content should be visible when dialog is closed
    fireEvent.click(getByTestId('button'));
    expect(container).not.toHaveAttribute('aria-hidden');
    expect(asFragment()).toMatchSnapshot();
  });
};
