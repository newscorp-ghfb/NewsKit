import {createContext} from 'react';

export const ScrollSnapAlignmentContext = createContext<
  'start' | 'center' | 'end' | undefined
>(undefined);
export const ScrollSnapAlignmentContextProvider =
  ScrollSnapAlignmentContext.Provider;
