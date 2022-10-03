import {RefObject, useEffect, useRef} from 'react';
import * as React from 'react';

export function useRefWithReRender<T>(initialValue: T | null): RefObject<T> {
  const ref = useRef<T>(initialValue);
  const [, setForceRenderState] = React.useState(false);
  useEffect(() => {
    setForceRenderState(true);
  }, [ref]);
  return ref;
}
