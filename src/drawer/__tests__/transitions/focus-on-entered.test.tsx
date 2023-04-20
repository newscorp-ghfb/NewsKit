import {cleanup, fireEvent, waitFor} from '@testing-library/react';
import React, {useState} from 'react';
import {Drawer} from '../..';
import {renderWithThemeInBody} from '../../../test/test-utils';

jest.mock('react-transition-group', () => ({
  ...jest.requireActual('react-transition-group'),
}));

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

  test('should be enabled when the transition has completed', async () => {
    const {findByTestId, getByTestId} = renderWithThemeInBody(DrawerPage);
    const toggleButton = getByTestId('toggle');
    toggleButton.focus();
    fireEvent.click(toggleButton);

    await waitFor(async () => {
      const element = await findByTestId('drawer');
      expect(element).toHaveClass('nk-drawer-enter-done');
    });

    // CSSTransition has _NOT_ been intercepted above so onEntered _IS_ called,
    // this means that:
    // - The component finishes transitioning.
    // - FocusLock is enabled.
    // - The interactive element is focused.
    const element = await findByTestId('interactive-element');
    expect(element).toHaveFocus();
  });
});
