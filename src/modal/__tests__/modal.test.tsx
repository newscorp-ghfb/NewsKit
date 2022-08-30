import {fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';
import {createTheme} from '../../theme';
import {Modal} from '../modal';
import {TextBlock} from '../../text-block';
import {sharedDialogTests} from '../../dialog/base-dialog-tests';
import {
  renderToFragmentInBody,
  renderWithThemeInBody,
} from '../../test/test-utils';

const modalBody = <TextBlock>Modal body content</TextBlock>;

const modalHeader = <TextBlock>Modal header content</TextBlock>;

describe('Modal', () => {
  sharedDialogTests(Modal, modalHeader, modalBody);

  test('renders with different closePosition', () => {
    const fragment = renderToFragmentInBody(Modal, {
      open: true,
      onDismiss: () => {},
      header: modalHeader,
      children: modalBody,
      closePosition: 'left',
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders nothing if modal is closed', () => {
    const {asFragment} = renderWithThemeInBody(Modal, {
      open: false,
      header: modalHeader,
      children: modalBody,
      onDismiss: () => {},
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders modal with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-modal-theme',
      overrides: {
        stylePresets: {
          overlayCustom: {
            base: {
              backgroundColor: '{{colors.amber010}}',
            },
          },
          modalPanelCustom: {
            base: {
              backgroundColor: '{{colors.green010}}',
              boxShadow: '0px 0px 16px 14px rgba(169,183,172,0.9)',
            },
          },
          modalHeaderCustom: {
            base: {
              backgroundColor: '{{colors.transparent}}',
              borderStyle: 'none none solid none',
              borderWidth: '{{borders.borderWidth010}}',
              borderColor: '{{colors.red060}}',
            },
          },
          modalCloseButtonCustom: {
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
      Modal,
      {
        open: true,
        onDismiss: () => {},
        children: modalBody,
        overrides: {
          overlay: {
            stylePreset: 'overlayCustom',
          },
          panel: {
            stylePreset: 'modalPanelCustom',
            topOffset: '15vh',
            width: '600px',
            height: '500px',
            minWidth: '20vw',
            maxWidth: '80vw',
            minHeight: '20vh',
            maxHeight: {
              xs: '90vh',
              md: '85vh',
            },
          },
          header: {
            spaceInset: 'spaceInset000',
            stylePreset: 'modalHeaderCustom',
          },
          content: {
            spaceInset: 'spaceInset060',
          },
          closeButton: {
            stylePreset: 'modalCloseButtonCustom',
          },
        },
      },
      myCustomTheme,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders inline', () => {
    const {asFragment} = renderWithThemeInBody(Modal, {
      open: true,
      header: modalHeader,
      children: modalBody,
      inline: true,
      onDismiss: () => {},
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders with logical padding props', () => {
    const {asFragment} = renderWithThemeInBody(Modal, {
      open: true,
      header: modalHeader,
      children: modalBody,
      onDismiss: () => {},
      overrides: {
        panel: {
          paddingInline: '15px',
          paddingBlock: '30px',
        },
      },
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Modal focus management', () => {
  const ModalPage = ({children}: {children: React.ReactNode}) => {
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
        <Modal open={isOpen} onDismiss={() => setOpen(false)}>
          content with
          <button type="button" data-testid="interactive-element">
            button
          </button>
          {children}
        </Modal>
      </>
    );
  };

  test('focus on first interactive element', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(ModalPage);
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('focus on custom element using data-autofocus attr', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(ModalPage, {
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
      ModalPage,
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
    const ModalPageRestoreFocus = () => {
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

          <Modal
            open={isOpen}
            onDismiss={() => setOpen(false)}
            restoreFocusTo={restoreFocusRef.current || undefined}
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Modal>
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
      ModalPageRestoreFocus,
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

describe('Modal focus management when focus trap is disabled', () => {
  test('focus on first interactive element', async () => {
    const {findByTestId} = renderWithThemeInBody(Modal, {
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
    const {findByTestId} = renderWithThemeInBody(Modal, {
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
    const ModalPage = () => {
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
          <Modal
            open={isOpen}
            onDismiss={() => setOpen(false)}
            disableFocusTrap
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Modal>
        </>
      );
    };
    const {findByTestId, getByTestId, getByLabelText} = renderWithThemeInBody(
      ModalPage,
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
    const ModalPage = () => {
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

          <Modal
            open={isOpen}
            onDismiss={() => setOpen(false)}
            restoreFocusTo={restoreFocusRef.current || undefined}
            disableFocusTrap
          >
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Modal>
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
      ModalPage,
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
