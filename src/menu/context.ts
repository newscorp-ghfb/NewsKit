import {createContext} from 'react';
import {MenuProps} from './types';

export const MenuContext = createContext<
  Pick<MenuProps, 'vertical' | 'size' | 'align' | 'overrides'>
>({});
export const MenuContextProvider = MenuContext.Provider;
