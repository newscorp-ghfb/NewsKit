import {BreakpointKeys} from '../theme/types';

export const mergeBreakpointObject = (BPKeys: BreakpointKeys[]) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  obj: any,
) => {
  if (typeof obj !== 'object') return false;

  for (let index = 0; index < BPKeys.length; index++) {
    const mqKey = BPKeys[index];
    if (mqKey in obj) {
      return true;
    }
  }
  return false;
};
