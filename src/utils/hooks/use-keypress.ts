/* eslint-disable no-undef */
import {RefObject, useEffect} from 'react';

const keysMap = {
  // Fixing inconsistencies from older browsers: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
  // event.key: [IE, rest browsers]
  ScrollLock: ['Scroll', 'ScrollLock'],
  Escape: ['Esc', 'Escape'],
  Delete: ['Del', 'Delete'],
  ArrowDown: ['Down', 'ArrowDown'],
  ArrowLeft: ['Left', 'ArrowLeft'],
  ArrowRight: ['Right', 'ArrowRight'],
  ArrowUp: ['Up', 'ArrowUp'],
  ' ': ['Spacebar', ' '],
  '.': ['Decimal', '.'],
  '*': ['Multiply', '*'],
  '+': ['Add', '+'],
  '-': ['Subtract', '-'],
  '/': ['Divide', '/'],
  Meta: ['Win', 'Meta'],
  CrSel: ['Crsel', 'CrSel'],
  ExSel: ['Exsel', 'ExSel'],
  ContextMenu: ['Apps', 'ContextMenu'],
};

interface Options {
  enabled?: boolean;
  eventType?: 'keydown' | 'keyup';
  target?: RefObject<HTMLElement>;
}

const isKeyboardEvent = (event: Event): event is KeyboardEvent =>
  'key' in event;

export const useKeypress = (
  key: string,
  action: ((e: KeyboardEvent) => void) | undefined,
  opts?: Options,
) => {
  useEffect(() => {
    const defaultOptions = {
      enabled: true,
      eventType: 'keyup',
    };
    const options = Object.assign({}, defaultOptions, opts);
    const {enabled, eventType, target} = options;

    const handle: EventListener = (e: Event) => {
      if (!isKeyboardEvent(e)) {
        return;
      }
      if (e.defaultPrevented) {
        return;
      }

      const pressedKey = e.key;

      const keyMap = key && (keysMap[key as keyof typeof keysMap] || [key]);
      if (action && (keyMap && keyMap.includes(pressedKey))) {
        action(e);

        e.preventDefault();
        e.stopPropagation();
      }
    };

    const targetNode = target && target.current ? target.current : document;

    if (enabled && typeof targetNode !== 'undefined') {
      targetNode.addEventListener(eventType, handle, false);
    }

    return () =>
      targetNode && targetNode.removeEventListener(eventType, handle, false);
  }, [key, action, opts]);
};
