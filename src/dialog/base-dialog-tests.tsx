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
};
