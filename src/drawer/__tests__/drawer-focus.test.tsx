import {cleanup, fireEvent, waitFor} from '@testing-library/react';
import React, {useState} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
import {Drawer} from '..';
import {renderWithThemeInBody} from '../../test/test-utils';

jest.mock('react-transition-group', () => {
  const Actual = jest.requireActual('react-transition-group').CSSTransition;
  const Mock = ({onEntered, ...rest}: CSSTransitionProps) => (
    <Actual {...rest} />
  );
  return {
    ...jest.requireActual('react-transition-group'),
    CSSTransition: Mock,
  };
});

describe('Drawer transitions', () => {
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

  test.only('should not focus on first interactive element', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage);
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('drawer');
      expect(element).toHaveClass('nk-drawer-enter-done');
    });

    // CSSTransition has been mocked so that onEntered is not called. This
    // should mean that the FocusLock is not enabled.
    const element = await findByTestId('interactive-element');
    expect(element).not.toHaveFocus();
  });
});
