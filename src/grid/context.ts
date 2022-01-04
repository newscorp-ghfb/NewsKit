import {createContext} from 'react';
import {GridProps} from './types';

export const {
  Provider: GridContextProvider,
  Consumer: GridContextConsumer,
} = createContext<GridProps>({});
