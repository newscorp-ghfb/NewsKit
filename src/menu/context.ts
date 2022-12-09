import {createContext, useContext} from 'react';
import {MenuProps} from './types';

export type OnExpandedChangeFn = (
  position: string[],
  isExpanded: boolean,
) => void;

export const MenuContext = createContext<
  Pick<MenuProps, 'vertical' | 'size' | 'align' | 'overrides'> & {
    // MenuSub components can call this function to inform the parent menu that they have been expanded / collapsed
    updateExpandedState: OnExpandedChangeFn;
    // MenuSub components can use this to register callbacks to be called when any SubMenu in the tree is expanded / collapsed
    registerExpandedStateChangeCallback: (fn: OnExpandedChangeFn) => void;
  }
>({
  updateExpandedState: () => {},
  registerExpandedStateChangeCallback: () => {},
});
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

export const MenuSubContext = createContext<{ancestry: string[]}>({
  // This is an array of MenuSub ids that is passed down the tree.
  ancestry: [],
});
export const MenuSubContextProvider = MenuSubContext.Provider;

export const useMenuSubContext = () => {
  const context = useContext(MenuSubContext);
  return context;
};
