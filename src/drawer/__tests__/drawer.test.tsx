import {cleanup, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';
import {createTheme} from '../../theme';
import {Drawer, DrawerProps} from '..';
import {TextBlock} from '../../text-block';
import {sharedDialogTests} from '../../dialog/base-dialog-tests';
import {
  renderToFragmentInBody,
  renderWithThemeInBody,
} from '../../test/test-utils';

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(({children}) => children);
  const FakeCSSTransition = jest.fn(props => {
    const modifyChildren = (
      child: React.DetailedReactHTMLElement<{className: string}, HTMLElement>,
    ) => {
      const className = `nk-drawer-enter-done`;

      return React.cloneElement(child, {
        className,
      });
    };

    if (props.in) {
      return (
        <FakeTransition>
          {React.Children.map(props.children, child => modifyChildren(child))}
        </FakeTransition>
      );
    }
    return <FakeTransition>{props.children}</FakeTransition>;
  });
  return {CSSTransition: FakeCSSTransition, Transition: FakeTransition};
});

const drawerBody = <TextBlock>Drawer body content</TextBlock>;

const drawerHeader = <TextBlock>Drawer header content</TextBlock>;

describe('Drawer', () => {
  sharedDialogTests(Drawer, drawerHeader, drawerBody);

  test.each(['right', 'top', 'bottom'])(
    'renders with menu items aligned at the %s',
    placement => {
      const fragment = renderToFragmentInBody(Drawer, {
        open: true,
        onDismiss: () => {},
        header: drawerHeader,
        children: drawerBody,
        placement: placement as DrawerProps['placement'],
      });
      expect(fragment).toMatchSnapshot();
    },
  );

  test('renders with left placement and right closePosition', () => {
    const fragment = renderToFragmentInBody(Drawer, {
      open: true,
      onDismiss: () => {},
      header: drawerHeader,
      children: drawerBody,
      placement: 'left',
      closePosition: 'right',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders closed drawer visually hidden but remains in the DOM tree', () => {
    const {asFragment, getByTestId} = renderWithThemeInBody(Drawer, {
      open: false,
      onDismiss: () => {},
      children: drawerBody,
    });
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId('drawer')).toBeInTheDocument();
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

    const fragment = renderToFragmentInBody(
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

  test('render inline-drawer', () => {
    const fragment = renderToFragmentInBody(Drawer, {
      open: true,
      inline: true,
      onDismiss: () => {},
      header: drawerHeader,
      children: drawerBody,
    });
    expect(fragment).toMatchSnapshot();
  });
});

describe('Drawer focus management', () => {
  afterEach(() => {
    cleanup();
  });

  const DrawerPage = ({children}: {children: React.ReactNode}) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <>
        <button
          type="button"
          data-testid="toggle"
          onClick={() => setOpen(!isOpen)}
        >
          toggle
        </button>
        <Drawer open={isOpen} onDismiss={() => setOpen(false)}>
          content with
          <button type="button" data-testid="interactive-element">
            button
          </button>
          {children}
        </Drawer>
      </>
    );
  };

  test('focus on first interactive element', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage);
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('focus on custom element using data-autofocus attr', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage, {
      children: (
        <button
          type="button"
          data-autofocus
          data-testid="another-interactive-element"
        >
          button
        </button>
      ),
    });
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('another-interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('return focus to the last focused element on close', async () => {
    const {findByTestId, getByTestId, getByLabelText} = renderWithThemeInBody(
      DrawerPage,
    );
    let toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await waitFor(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await waitFor(async () => {
      toggleButton = await findByTestId('toggle');
      expect(toggleButton).toHaveFocus();
    });
  });

  test('return focus to restoreFocusTo element on close', async () => {
    const DrawerPageRestoreFocus = () => {
      const [isOpen, setOpen] = useState(false);
      const restoreFocusRef = useRef(null);
      return (
        <>
          <button
            type="button"
            data-testid="toggle"
            onClick={() => setOpen(!isOpen)}
          >
            toggle
          </button>

          <Drawer
            open={isOpen}
            onDismiss={() => setOpen(false)}
            restoreFocusTo={restoreFocusRef.current || undefined}
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Drawer>
          <button
            type="button"
            data-testid="restoreFocusTo"
            ref={restoreFocusRef}
          >
            another button
          </button>
        </>
      );
    };
    const {findByTestId, getByTestId, getByLabelText} = renderWithThemeInBody(
      DrawerPageRestoreFocus,
    );
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await waitFor(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await waitFor(async () => {
      const restoreFocusButton = await findByTestId('restoreFocusTo');
      expect(restoreFocusButton).toHaveFocus();
    });
  });

  test("focusable Drawer's children should have tabindex -1 when it is closed", async () => {
    const {getByTestId} = renderWithThemeInBody(DrawerPage);
    const toggleButton = getByTestId('toggle');

    expect(getByTestId('interactive-element')).toHaveAttribute(
      'tabindex',
      '-1',
    );
    fireEvent.click(toggleButton);
    expect(getByTestId('interactive-element')).not.toHaveAttribute('tabindex');
  });
});

describe('Drawer focus management when focus trap is disabled', () => {
  test('focus on first interactive element', async () => {
    const {findByTestId} = renderWithThemeInBody(Drawer, {
      open: true,
      onDismiss: () => {},
      disableFocusTrap: true,
      children: (
        <button type="button" data-testid="interactive-element">
          auto focus button
        </button>
      ),
    });

    await waitFor(async () => {
      const element = await findByTestId('interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('focus on custom element using data-autofocus attr', async () => {
    const {findByTestId} = renderWithThemeInBody(Drawer, {
      open: true,
      onDismiss: () => {},
      disableFocusTrap: true,
      children: (
        <>
          <button type="button">another button</button>
          <p>text here</p>
          <button
            data-autofocus
            type="button"
            data-testid="interactive-element"
          >
            auto focus button
          </button>
        </>
      ),
    });

    await waitFor(async () => {
      const element = await findByTestId('interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('return focus to the last focused element on close', async () => {
    const DrawerPage = () => {
      const [isOpen, setOpen] = useState(false);
      return (
        <>
          <button
            type="button"
            data-testid="toggle"
            onClick={() => setOpen(!isOpen)}
          >
            toggle
          </button>
          <Drawer
            open={isOpen}
            onDismiss={() => setOpen(false)}
            disableFocusTrap
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Drawer>
        </>
      );
    };
    const {findByTestId, getByTestId, getByLabelText} = renderWithThemeInBody(
      DrawerPage,
    );
    let toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await waitFor(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await waitFor(async () => {
      toggleButton = await findByTestId('toggle');
      expect(toggleButton).toHaveFocus();
    });
  });

  test('return focus to restoreFocusTo element on close', async () => {
    const DrawerPage = () => {
      const [isOpen, setOpen] = useState(false);
      const restoreFocusRef = useRef(null);
      return (
        <>
          <button
            type="button"
            data-testid="toggle"
            onClick={() => setOpen(!isOpen)}
          >
            toggle
          </button>

          <Drawer
            open={isOpen}
            onDismiss={() => setOpen(false)}
            restoreFocusTo={restoreFocusRef.current || undefined}
            disableFocusTrap
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Drawer>
          <button
            type="button"
            data-testid="restoreFocusTo"
            ref={restoreFocusRef}
          >
            another button
          </button>
        </>
      );
    };
    const {findByTestId, getByTestId, getByLabelText} = renderWithThemeInBody(
      DrawerPage,
    );
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await waitFor(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await waitFor(async () => {
      const restoreFocusButton = await findByTestId('restoreFocusTo');
      expect(restoreFocusButton).toHaveFocus();
    });
  });
});
