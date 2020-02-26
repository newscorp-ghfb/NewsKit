import {createContext} from 'react';
import {GridProps} from './types';

export const GridContext = createContext<GridProps>({});
export const GridContextProvider = GridContext.Provider;
