import {createEvent, fireEvent} from '@testing-library/react';
import {RefObject} from 'react';
import userEvent from '@testing-library/user-event';
import {renderHook} from '../../../test/test-utils';
import {useKeypress} from '..';

describe('use keypress hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('will invoke event callback function on keyup', async () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('a', callbackMock));

    await userEvent.keyboard('a');

    expect(callbackMock).toHaveBeenCalled();
  });

  test('will invoke event callback function on multiply keyup', async () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress(['a', 'b'], callbackMock));

    await userEvent.keyboard('a');
    await userEvent.keyboard('b');

    expect(callbackMock).toHaveBeenCalledTimes(2);
  });

  test('will not invoke event callback function on keyup if key not recognized', async () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escapppe', callbackMock));

    await userEvent.keyboard('{esc}');

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function on keyup if enabled prop is false', async () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escape', callbackMock, {enabled: false}));

    await userEvent.keyboard('{esc}');

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function event is not valid keyboard event', () => {
    const callbackMock = jest.fn();
    renderHook(() =>
      useKeypress('Escape', callbackMock, {eventType: 'click' as any}),
    );

    // event without key property
    fireEvent.keyDown(document, {});

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will not invoke event callback function if event is already prevented', () => {
    const callbackMock = jest.fn();
    renderHook(() => useKeypress('Escape', callbackMock));

    const customKeyupEvent = createEvent.keyUp(document, {
      key: 'Escape',
    });

    customKeyupEvent.preventDefault();

    fireEvent(document, customKeyupEvent);

    expect(callbackMock).not.toHaveBeenCalled();
  });

  test('will invoke event callback function on target element', () => {
    const callbackMock = jest.fn();
    const newDiv = document.createElement('div');
    const refMock = {
      current: newDiv,
    } as RefObject<HTMLElement>;

    renderHook(() => useKeypress('Escape', callbackMock, {target: refMock}));

    // userEvents can't be triggered on a detached DOM node
    fireEvent.keyDown(newDiv, {key: 'Escape'});
    fireEvent.keyUp(newDiv, {key: 'Escape'});

    expect(callbackMock).toHaveBeenCalled();
  });

  test('will invoke preventDefault and stopPropagation', () => {
    const callbackMock = jest.fn();

    renderHook(() => useKeypress('a', callbackMock));

    // userEvents don't have options to prevetDefault so need to use fireEvent twice
    fireEvent.keyDown(document, {key: 'a'});
    // keyup event
    const event = new KeyboardEvent('keyup', {
      key: 'a',
    });
    Object.assign(event, {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    fireEvent(document, event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });

  test('will not invoke preventDefault when preventDefault=false', () => {
    const callbackMock = jest.fn();

    renderHook(() => useKeypress('a', callbackMock, {preventDefault: false}));

    // userEvents don't have options to prevetDefault so need to use fireEvent twice
    fireEvent.keyDown(document, {key: 'a'});
    // keyup event
    const event = new KeyboardEvent('keyup', {
      key: 'a',
    });
    Object.assign(event, {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    });
    fireEvent(document, event);

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(event.stopPropagation).toHaveBeenCalledTimes(0);
  });
});
