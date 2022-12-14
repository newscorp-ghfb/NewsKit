import {createContext, useContext} from 'react';
import {MenuItemAlign, MenuProps} from './types';

export type OnExpandedChangeFn = (nestedId: string | null) => void;

/* istanbul ignore next */
const defaultMenuContextArgs = {
  updateExpandedMenuSubId: () => {},
  expandedMenuSubId: null,
};

export const MenuContext = createContext<
  Pick<MenuProps, 'vertical' | 'size' | 'align' | 'overrides'> & {
    // MenuSub components can call this function when they are clicked
    updateExpandedMenuSubId: OnExpandedChangeFn;
    // MenuSub components access this state to know if they are expanded / collapsed
    expandedMenuSubId: string | null;
  }
>(defaultMenuContextArgs);
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

export const MenuSubContext = createContext<{
  parentId: string | null;
  align?: MenuItemAlign;
}>({
  parentId: null,
});
export const MenuSubContextProvider = MenuSubContext.Provider;

export const useMenuSubContext = () => {
  const context = useContext(MenuSubContext);
  return context;
};
