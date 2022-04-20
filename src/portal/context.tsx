import {createContext} from 'react';
import type {PortalType, ActionTypes} from './types';

export const PortalStateContext = createContext<Record<
  string,
  Array<PortalType>
> | null>(null);
export const PortalDispatchContext = createContext<React.Dispatch<ActionTypes> | null>(
  null,
);
