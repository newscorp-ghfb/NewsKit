import {RefObject, useEffect, useRef} from 'react';
import {composeEventHandlers} from '../compose-event-handlers';

interface Options {
  enabled?: boolean;
  eventType?: 'keydown' | 'keyup';
  target?: RefObject<HTMLElement>;
  preventDefault?: boolean;
}

const isKeyboardEvent = (event: Event): event is KeyboardEvent =>
  'key' in event;

/*
 This store together with addEventIfNotExist and removeEvent track if the event with the same
  keyShortcut is already attached to the element. This is needed to prevent adding the same event twice.

  In context of audio-player if you add 2 buttons for SkipBackward with same 
  keyShortcut it will attach event only for the first one.
*/
const eventsStore = new WeakMap<HTMLElement | Document, string[]>();

const addEventIfNotExist = ({
  element,
  keyShortcut,
  keyUp,
  keyDown,
}: {
  element: HTMLElement | Document;
  keyShortcut: string;
  keyUp: EventListener;
  keyDown: EventListener;
}): void => {
  const attachedShortcuts = eventsStore.get(element);

  const attachEvents = () => {
    element.addEventListener('keydown', keyDown, false);
    element.addEventListener('keyup', keyUp, false);
  };

  if (!attachedShortcuts) {
    eventsStore.set(element, [keyShortcut]);
    attachEvents();
  } else if (
    Array.isArray(attachedShortcuts) &&
    attachedShortcuts.indexOf(keyShortcut) === -1
  ) {
    eventsStore.set(element, [...attachedShortcuts, keyShortcut]);
    attachEvents();
  }
};

const removeEvent = ({
  element,
  keyShortcut,
  keyUp,
  keyDown,
}: {
  element: HTMLElement | Document;
  keyShortcut: string;
  keyUp: EventListener;
  keyDown: EventListener;
}) => {
  const attachedShortcuts = eventsStore.get(element);
  if (attachedShortcuts) {
    eventsStore.set(
      element,
      attachedShortcuts.filter(shortcut => shortcut !== keyShortcut),
    );
  }
  element.removeEventListener('keyup', keyUp, false);
  element.removeEventListener('keydown', keyDown, false);
};

/*
In order to use multiple keys at once, you need to use keyDown and keyUp simultaneously.
- on KeyDown event, keys code is stored in a object ( keyStore )
- on KeyUp event, keys code is removed from the object

When the keyStore values match the key argument , the callback is called.
https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
*/
export const useKeypress = (
  key: string | string[],
  action: ((e: KeyboardEvent) => void) | undefined,
  opts?: Options,
) => {
  const keyStore = useRef<{[key: string]: boolean}>({});

  const keyLowerCase = (typeof key === 'string' ? [key] : key).map(k =>
    k.toLowerCase(),
  );

  useEffect(() => {
    const defaultOptions = {
      enabled: true,
      eventType: 'keyup',
      preventDefault: true,
    };
    const options = {...defaultOptions, ...opts};
    const {enabled, eventType, target, preventDefault} = options;

    const handle: EventListener = (e: Event) => {
      /* istanbul ignore if */
      if (!isKeyboardEvent(e)) {
        return;
      }
      if (e.defaultPrevented) {
        return;
      }

      if (e.type === eventType) {
        const pressedKey = Object.entries(keyStore.current)
          .filter(([, value]) => value)
          .map(([activeKey]) => activeKey.toLowerCase())
          .join(' + ');

        const keyIsMatched = keyLowerCase.includes(pressedKey);

        if (action && keyIsMatched) {
          action(e);

          if (preventDefault) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      }
    };

    const targetNode = target && target.current ? target.current : document;

    const addToStore = (e: KeyboardEvent) => {
      keyStore.current[e.key] = true;
    };

    const removeFromStore = (e: KeyboardEvent) => {
      delete keyStore.current[e.key];
    };

    const onKeyDown = composeEventHandlers([addToStore, handle]);
    const onKeyUp = composeEventHandlers([handle, removeFromStore]);

    if (enabled && typeof targetNode !== 'undefined') {
      addEventIfNotExist({
        element: targetNode,
        keyShortcut: keyLowerCase.toString(),
        keyUp: onKeyUp,
        keyDown: onKeyDown,
      });
    }

    return () => {
      if (targetNode) {
        removeEvent({
          element: targetNode,
          keyShortcut: keyLowerCase.toString(),
          keyUp: onKeyUp,
          keyDown: onKeyDown,
        });
      }
    };
  }, [keyLowerCase, action, opts]);
};
