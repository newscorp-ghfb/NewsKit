import {MQ} from './style';

/** Checks whether or not a media query boolean prop `MQ<boolean>` is set to `true` for a given breakpoint */
export const checkBreakpointProp = (
  prop: MQ<boolean>,
  currentBreakpoint: string,
) => {
  const MQKeys = Object.keys(prop).filter(Boolean);
  return MQKeys.includes(currentBreakpoint) || prop === true;
};
