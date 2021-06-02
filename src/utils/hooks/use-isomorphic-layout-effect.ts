import {useLayoutEffect, useEffect} from 'react';

/* istanbul ignore next */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
