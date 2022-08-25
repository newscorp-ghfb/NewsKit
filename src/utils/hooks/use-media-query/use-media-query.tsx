import React from 'react';
import {useTheme} from '../../../theme';
import {BreakpointKeys} from '../../../theme/types';
import {MQ, MQPartial} from '../../style/types';
import {MQContext} from './context';
import {BreakpointState} from './types';
import {getCurrentBreakpointKey, sortBreakpointKeys} from './utils';

const useMediaQueryContext = (): BreakpointState => {
  const context = React.useContext(MQContext) as BreakpointState;
  return context;
};

export function useBreakpointKey() {
  const breakpointState = useMediaQueryContext();
  const currentBreakpoint = getCurrentBreakpointKey(breakpointState);
  return currentBreakpoint;
}

export function useMediaQueryObject<T>(mqObject: MQ<T>): T | undefined {
  const breakpointsState = useMediaQueryContext();
  const theme = useTheme();
  const {breakpoints} = theme;
  const breakpointsKeys = Object.keys(breakpoints) as BreakpointKeys[];

  // when the param is simple type like string | number
  if (typeof mqObject !== 'object') return mqObject;

  const valuesPerBreakpoint = mqObject as MQPartial<T>;

  // when the props has only one key like {xs: 10px}
  if (Object.keys(valuesPerBreakpoint).length === 1) {
    const breakpoint = Object.keys(valuesPerBreakpoint)[0] as BreakpointKeys;
    return valuesPerBreakpoint[breakpoint];
  }

  const currentBreakpoint = getCurrentBreakpointKey(breakpointsState);

  if (valuesPerBreakpoint[currentBreakpoint] !== undefined)
    return valuesPerBreakpoint[currentBreakpoint];

  // get the smallest breakpoint as "base", and pre-fill the rest based on the base
  const baseBreakpoint = sortBreakpointKeys(
    Object.keys(valuesPerBreakpoint) as BreakpointKeys[],
    breakpointsKeys,
  )[0];

  let baseValue = valuesPerBreakpoint[baseBreakpoint];
  const valuesForAllBreakpoints = breakpointsKeys.reduce(
    (acc, breakpointKey) => {
      if (acc[breakpointKey] === undefined) {
        return {...acc, [breakpointKey]: baseValue};
      }

      baseValue = acc[breakpointKey];
      return acc;
    },
    valuesPerBreakpoint,
  );

  return valuesForAllBreakpoints[currentBreakpoint];
}
