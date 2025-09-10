import { BreakpointKeys } from '../../../theme/types';
import { BreakpointState, MediaQueries } from './types';
export declare const addMQEventListener: (mql: MediaQueryList, handler: (event: MediaQueryListEvent) => void) => void;
export declare const removeMQEventListener: (mql: MediaQueryList, handler: (event: MediaQueryListEvent) => void) => void;
export declare const createInitState: (mqPerBreakpoint: MediaQueries) => BreakpointState;
export declare const getCurrentBreakpointKey: (state: BreakpointState) => BreakpointKeys;
export declare const sortBreakpointKeys: (keys: BreakpointKeys[], template: BreakpointKeys[]) => ("xs" | "sm" | "md" | "lg" | "xl")[];
//# sourceMappingURL=utils.d.ts.map