/* eslint-disable react/destructuring-assignment */
import {fireEvent, wait} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useRef, useState} from 'react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {createTheme} from '../../theme';
import {Drawer} from '../drawer';
import {TextBlock} from '../../text-block';

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

    if (props.appear && props.in) {
      return (
        <FakeTransition>
          {React.Children.map(props.children, child => modifyChildren(child))}
        </FakeTransition>
      );
    }

    if (props.appear) {
      return <FakeTransition>{props.children}</FakeTransition>;
    }
    if (props.in) {
      return <FakeTransition>{props.children}</FakeTransition>;
    }
    return null;
  });
  return {CSSTransition: FakeCSSTransition, Transition: FakeTransition};
});

const drawerBody = <TextBlock>Drawer body content</TextBlock>;

const drawerHeader = <TextBlock>Drawer header content</TextBlock>;

describe('Drawer layout', () => {
  test('renders default left position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      header: drawerHeader,
      children: drawerBody,
      onDismiss: () => {},
    });
    expect(fragment).toMatchSnapshot();
  });

  test('renders right position', () => {
    const fragment = renderToFragmentWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      header: drawerHeader,
      children: drawerBody,
      placement: 'right',
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

  test('renders closed drawer visually hidden but remains in the DOM tree', () => {
    const {asFragment, getByTestId} = renderWithTheme(Drawer, {
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
});

describe('Drawer focus management', () => {
  test('focus on first interactive element', async () => {
    const {findByTestId} = renderWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
      children: (
        <button type="button" data-testid="interactive-element">
          auto focus button
        </button>
      ),
    });

    await wait(async () => {
      const element = await findByTestId('interactive-element');
      expect(element).toHaveFocus();
    });
  });

  test('focus on custom element using data-autofocus attr', async () => {
    const {findByTestId} = renderWithTheme(Drawer, {
      open: true,
      onDismiss: () => {},
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

    await wait(async () => {
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
          <Drawer open={isOpen} onDismiss={() => setOpen(false)}>
            content with
            <button type="button" data-testid="interactive-element">
              button
            </button>
          </Drawer>
        </>
      );
    };
    const {findByTestId, getByTestId, getByLabelText} = renderWithTheme(
      DrawerPage,
    );
    let toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await wait(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close drawer');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await wait(async () => {
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
    const {findByTestId, getByTestId, getByLabelText} = renderWithTheme(
      DrawerPage,
    );
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);
    await wait(async () => {
      // first interactive element is focused
      const interactiveElement = await findByTestId('interactive-element');
      expect(interactiveElement).toHaveFocus();
    });

    // move to close button
    userEvent.tab();

    // check if close button is focused
    const closeButton = getByLabelText('close drawer');
    expect(closeButton).toHaveFocus();

    fireEvent.click(closeButton);

    await wait(async () => {
      const restoreFocusButton = await findByTestId('restoreFocusTo');
      expect(restoreFocusButton).toHaveFocus();
    });
  });
});
