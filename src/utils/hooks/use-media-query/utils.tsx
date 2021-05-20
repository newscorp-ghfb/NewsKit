import {BreakpointKeys} from '../../../theme/types';
import {BreakpointState, MediaQueries} from './types';

const DEFAULT_BREAKPOINT = 'xs';

export const addMQEventListener = (
  mql: MediaQueryList,
  handler: (event: MediaQueryListEvent) => void,
): void => {
  /* istanbul ignore else */
  if (typeof mql.addEventListener !== 'undefined') {
    mql.addEventListener('change', handler);
  } else if (typeof mql.addListener !== 'undefined') {
    // Safari and IE11 support only deprecated browser API
    mql.addListener(handler);
  }
};

export const removeMQEventListener = (
  mql: MediaQueryList,
  handler: (event: MediaQueryListEvent) => void,
): void => {
  /* istanbul ignore else */
  if (typeof mql.removeEventListener !== 'undefined') {
    mql.removeEventListener('change', handler);
  } else if (typeof mql.removeListener !== 'undefined') {
    // Safari and IE11 support only deprecated browser API
    mql.removeListener(handler);
  }
};

export const createInitState = (
  mqPerBreakpoint: MediaQueries,
): BreakpointState =>
  Object.entries(mqPerBreakpoint).reduce((state, [breakpointKey, mqString]) => {
    /* istanbul ignore else */
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia(mqString);
      return {...state, [breakpointKey]: mql.matches};
      // eslint-disable-next-line no-else-return
    } else {
      return state;
    }
  }, {} as BreakpointState);

export const getCurrentBreakpointKey = (
  state: BreakpointState,
): BreakpointKeys => {
  const active = Object.entries(state)
    .filter(([, value]) => value)
    .map(([key]) => key);
  return (active[0] || DEFAULT_BREAKPOINT) as BreakpointKeys;
};

export const sortBreakpointKeys = (
  keys: BreakpointKeys[],
  template: BreakpointKeys[],
) => keys.sort((a, b) => template.indexOf(a) - template.indexOf(b));
