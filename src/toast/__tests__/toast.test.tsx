import React from 'react';
import {fireEvent, waitForElementToBeRemoved} from '@testing-library/react';
import hotToast from 'react-hot-toast';
import {ToastProvider, ToastProviderProps, ToastPosition, toast} from '..';
import {renderWithTheme} from '../../test/test-utils';

const ToastExample = ({
  action = () => null,
  providerProps,
}: {
  action?: Function;
  providerProps?: ToastProviderProps;
}) => (
  <React.Fragment>
    <button type="button" data-testid="action" onClick={() => action()}>
      action
    </button>

    <ToastProvider {...providerProps} />
  </React.Fragment>
);

describe('Toast', () => {
  describe('Component', () => {
    // TODO in other PR
  });

  describe('API', () => {
    afterEach(() => {
      hotToast.dismiss();
    });

    const positions: ToastPosition[] = [
      'top-right',
      'top-center',
      'top-left',
      'bottom-right',
      'bottom-center',
      'bottom-left',
    ];

    positions.forEach(position => {
      const action = () => toast(<div>message</div>);
      test(`render toast at ${position} position`, () => {
        const {asFragment, getByTestId, unmount} = renderWithTheme(
          ToastExample,
          {
            providerProps: {
              position,
              horizontalOffset: '10px',
              verticalOffset: '20px',
              autoHideDuration: 4000,
            },
            action,
          },
        );
        const actionBtn = getByTestId('action');
        fireEvent.click(actionBtn);
        expect(asFragment()).toMatchSnapshot();
        unmount();
      });
    });

    test('toast adds component to DOM', () => {
      const messageText = 'test message';
      const action = () => toast(<div>{messageText}</div>);
      const {getByTestId, getByText} = renderWithTheme(ToastExample, {action});

      const actionBtn = getByTestId('action');
      fireEvent.click(actionBtn);
      const toastMessage = getByText(messageText);
      expect(toastMessage).toBeDefined();
    });

    test('toast can be removed from DOM via button', async () => {
      const messageText = 'test message with button';
      const action = () =>
        toast(
          ({onClose}) => (
            <div>
              {messageText}
              <button
                type="button"
                data-testid="close"
                onClick={() => onClose()}
              >
                close
              </button>
            </div>
          ),
          {autoHideDuration: 1500},
        );
      const {getByTestId, getByText} = renderWithTheme(ToastExample, {
        action,
      });

      const actionBtn = getByTestId('action');
      fireEvent.click(actionBtn);
      const closeBtn = getByTestId('close');
      expect(closeBtn).toBeDefined();
      fireEvent.click(closeBtn);

      await waitForElementToBeRemoved(() => getByText(messageText));
    });
  });
});
