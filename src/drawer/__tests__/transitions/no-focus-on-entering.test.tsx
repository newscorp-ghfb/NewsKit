import {cleanup, fireEvent, waitFor} from '@testing-library/react';
import React, {useState} from 'react';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';
import {Drawer} from '../..';
import {renderWithThemeInBody} from '../../../test/test-utils';

jest.mock('react-transition-group', () => {
  const Actual = jest.requireActual('react-transition-group').CSSTransition;
  const Mock = ({...props}: CSSTransitionProps) => (
    <Actual {...props} onEntered={undefined} />
  );
  return {
    ...jest.requireActual('react-transition-group'),
    CSSTransition: Mock,
  };
});

describe('Focus behaviour', () => {
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

  test('should be disabled while the transition is in progress', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage);
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('drawer');
      expect(element).toHaveClass('nk-drawer-enter-done');
    });

    // CSSTransition has been intercepted above so that onEntered is _NOT_ called, this
    // means that:
    // - The component remains in transitioning state.
    // - FocusLock is not enabled.
    // - The interactive element is not focused.
    const element = await findByTestId('interactive-element');
    expect(element).not.toHaveFocus();
  });
});
