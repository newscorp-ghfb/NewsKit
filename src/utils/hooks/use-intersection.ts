// use-intersection is copy from Next.js
// https://github.com/vercel/next.js/blob/0af3b526408bae26d6b3f8cab75c4229998bf7cb/packages/next/client/use-intersection.tsx
import {useCallback, useRef, useState} from 'react';

type UseIntersectionObserverInit = {
  rootMargin?: string;
};

export type UseIntersection = {
  disabled?: boolean;
} & UseIntersectionObserverInit;

type ObserveCallback = (isVisible: boolean) => void;

type Observer = {
  id: string;
  observer: IntersectionObserver;
  elements: Map<Element, ObserveCallback>;
};

const observers = new Map<string, Observer>();

function createObserver(options: UseIntersectionObserverInit): Observer {
  const id = options.rootMargin || '';
  let instance = observers.get(id);
  if (instance) {
    return instance;
  }

  const elements = new Map<Element, ObserveCallback>();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting;
      /* istanbul ignore else */
      if (callback) {
        callback(isVisible);
      }
    });
  }, options);

  observers.set(
    id,
    (instance = {
      id,
      observer,
      elements,
    }),
  );
  return instance;
}

function observe(
  element: Element,
  callback: ObserveCallback,
  options: UseIntersectionObserverInit,
): () => void {
  const {id, observer, elements} = createObserver(options);
  elements.set(element, callback);

  observer.observe(element);
  return function unobserve(): void {
    elements.delete(element);
    observer.unobserve(element);

    // Destroy observer when there's nothing left to watch:
    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

export function useIntersection<T extends Element>({
  disabled,
  ...options
}: UseIntersection): [(element: T | null) => void, boolean] {
  const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
  const isDisabled: boolean = disabled || !hasIntersectionObserver;

  const unobserve = useRef<Function>();
  const [visible, setVisible] = useState(false);

  const setRef = useCallback(
    (el: T | null) => {
      if (unobserve.current) {
        unobserve.current();
        unobserve.current = undefined;
      }

      if (isDisabled) return;

      if (el && el.tagName) {
        unobserve.current = observe(
          el,
          isVisible => {
            /* istanbul ignore else */
            if (visible !== isVisible) {
              setVisible(isVisible);
            }
          },
          options,
        );
      }
    },
    [isDisabled, options, visible],
  );

  return [setRef, visible];
}
