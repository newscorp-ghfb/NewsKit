import React from 'react';
import {fireEvent, waitForElementToBeRemoved} from '@testing-library/react';
import hotToast from 'react-hot-toast';
import {
  ToastProvider,
  ToastProviderProps,
  ToastPosition,
  toast,
  Toast,
  ToastProps,
} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {IconFilledWarning} from '../../icons';
import {TextBlock} from '../../text-block';
import {Link} from '../../link';

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
    const toastMessage = 'toast message';
    test('renders with default props', () => {
      const props: ToastProps = {
        children: toastMessage,
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;

      expect(fragment).toMatchSnapshot();
    });

    test('renders with icon', () => {
      const props: ToastProps = {
        children: toastMessage,
        icon: <IconFilledWarning overrides={{size: 'iconSize020'}} />,
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;
      expect(fragment).toMatchSnapshot();
    });

    test('renders with content as react element', () => {
      const props: ToastProps = {
        children: <TextBlock>{toastMessage}</TextBlock>,
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;

      expect(fragment).toMatchSnapshot();
    });
    test('renders with content as string and link', () => {
      const props: ToastProps = {
        children: [
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt`,
          <Link href="/">NewsKit Link</Link>,
          `ut labore et dolore magna aliqua.`,
        ],
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;

      expect(fragment).toMatchSnapshot();
    });
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
