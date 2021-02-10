// Code from here: https://codesandbox.io/s/zw8kylol8m?file=/src/useResizeObserver.ts
import React from 'react';

export const useResizeObserver = (
  ref: React.RefObject<HTMLElement>,
  callback?: (entry: DOMRectReadOnly) => void,
) => {
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const handleResize = React.useCallback(
    (entries: ResizeObserverEntry[]) => {
      /* istanbul ignore next */
      if (!Array.isArray(entries) || !entries.length) {
        return;
      }

      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);

      if (callback) {
        callback(entry.contentRect);
      }
    },
    [callback],
  );

  React.useEffect(() => {
    if (!ref || !ref.current || !window.ResizeObserver) {
      return;
    }

    const RO = new window.ResizeObserver((entries: ResizeObserverEntry[]) =>
      handleResize(entries),
    );
    RO.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => {
      RO.disconnect();
    };
  }, [ref, handleResize]);

  return [width, height];
};
