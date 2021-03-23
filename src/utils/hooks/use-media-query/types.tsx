import {BreakpointKeys} from '../../../theme/types';

export type BreakpointState = {
  [key in BreakpointKeys]: boolean;
};
export type MediaQueries = {
  [key in BreakpointKeys]: string;
};
