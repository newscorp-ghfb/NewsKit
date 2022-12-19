import {createContext, useContext} from 'react';
import {MenuProps} from './types';

export const MenuContext = createContext<
  Pick<MenuProps, 'vertical' | 'size' | 'align' | 'overrides'> & {
    isSubMenu?: boolean;
  }
>({});
export const MenuContextProvider = MenuContext.Provider;

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' &&
    Object.keys(context).length === 0
  ) {
    // eslint-disable-next-line no-console
    console.error(
      'You are using a component which needs to be a child of <Menu />',
    );
  }

  return context;
};
