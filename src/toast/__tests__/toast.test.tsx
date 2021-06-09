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
import {Button, compileTheme, createTheme} from '../..';

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
    const icon = <IconFilledWarning overrides={{size: 'iconSize020'}} />;
    const title = 'Toast title';
    const actions = () => <Button size="small">undo</Button>;
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
        icon,
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

    test('renders with actions', () => {
      const props: ToastProps = {
        children: toastMessage,
        actions,
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;
      expect(fragment).toMatchSnapshot();
    });

    test('renders with title', () => {
      const props: ToastProps = {
        children: toastMessage,
        title,
      };
      const fragment = renderToFragmentWithTheme(Toast, props) as any;
      expect(fragment).toMatchSnapshot();
    });

    test('renders with overrides and all props', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-theme',
        overrides: {
          stylePresets: {
            toastWithOverrides: {
              base: {
                backgroundColor: '#fdda9b',
                borderRadius: '2px',
                iconColor: 'red',
              },
            },
          },
        },
      });
      const props: ToastProps = {
        children: toastMessage,
        icon,
        title,
        actions,
        overrides: {
          spaceInset: '20px',
          stylePreset: 'toastWithOverrides',
          icon: {
            spaceInline: 'space040',
          },
          content: {
            title: {
              typographyPreset: 'utilityHeading020',
              stylePreset: 'ink',
              spaceStack: 'space050',
            },
            message: {
              typographyPreset: 'utilityBody020',
              stylePreset: 'ink',
            },
          },
          divider: {
            stylePreset: 'dividerVertical',
          },
          contentAndActions: {
            spaceInline: 'space010',
          },
        },
      };
      const fragment = renderToFragmentWithTheme(
        Toast,
        props,
        compileTheme(myCustomTheme),
      ) as any;
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
