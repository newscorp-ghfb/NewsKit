import {cleanup, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';
import {
  createTheme,
  newskitDarkTheme,
  newskitLightTheme,
  ThemeProvider,
} from '../../theme';
import {Drawer, DrawerProps} from '..';
import {TextBlock} from '../../text-block';
import {sharedDialogTests} from '../../dialog/base-dialog-tests';
import {
  renderToFragmentInBody,
  renderWithThemeInBody,
} from '../../test/test-utils';
import {Button} from '../../button';

const drawerBody = <TextBlock>Drawer body content</TextBlock>;
const drawerHeader = <TextBlock>Drawer header content</TextBlock>;

describe('Drawer', () => {
  sharedDialogTests(Drawer, drawerHeader, drawerBody);

  test('drawer remains open when theme is toggled', async () => {
    const DrawerPage = () => {
      const [isActive, setIsActive] = React.useState(false);
      const [themeMode, setThemeMode] = React.useState('light');

      const toggleTheme = () => {
        if (themeMode === 'light') {
          setThemeMode('dark');
        } else {
          setThemeMode('light');
        }
      };

      const open = () => setIsActive(true);
      const close = () => setIsActive(false);
      return (
        <ThemeProvider
          theme={themeMode === 'light' ? newskitLightTheme : newskitDarkTheme}
        >
          theme is: {themeMode}
          <Button onClick={open} data-testid="drawer-open-button">
            Open Drawer
          </Button>
          <Drawer
            aria-label="Drawer example"
            open={isActive}
            onDismiss={close}
            placement="left"
            header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          >
            <Button
              onClick={toggleTheme}
              data-testid="toggle-theme-drawer-button"
            >
              Toggle theme
            </Button>
          </Drawer>
        </ThemeProvider>
      );
    };
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage);
    const openDrawerButton = getByTestId('drawer-open-button');
    fireEvent.click(openDrawerButton);
    await waitFor(async () => {
      const toggleThemeButton = await findByTestId(
        'toggle-theme-drawer-button',
      );
      fireEvent.click(toggleThemeButton);
    });
    expect(getByTestId('drawer')).toHaveClass('nk-drawer-enter-done');
  });

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
            paddingInline: 'space000',
            paddingBlock: 'space000',
            stylePreset: 'drawerHeaderCustom',
          },
          content: {
            paddingInline: 'space060',
            paddingBlock: 'space060',
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

  test('render drawer with logical props overrides', () => {
    const fragment = renderToFragmentInBody(Drawer, {
      open: true,
      onDismiss: () => {},
      header: drawerHeader,
      children: drawerBody,
      overrides: {
        panel: {
          paddingInline: '30px',
          marginBlock: '20px',
        },
        header: {
          paddingInline: '10px',
        },
        content: {
          paddingInline: '10px',
        },
        closeButton: {
          paddingInline: '10px',
        },
      },
    });
    expect(fragment).toMatchSnapshot();
  });
});
