import React from 'react';
import {MenuContextProvider} from './context';
import {MenuItemAlign, MenuItemSize, MenuProps} from './types';
import {StyledMenu} from './styled';

const getAlign = (align: MenuItemAlign | undefined, vertical: boolean) => {
  if (!align) {
    return vertical ? MenuItemAlign.Start : MenuItemAlign.Center;
  }
  return align;
};

export const Menu: React.FC<MenuProps> = ({
  overrides,
  children,
  vertical = false,
  size = MenuItemSize.Medium,
  align: passedAlign,
  ...rest
}) => {
  const align = getAlign(passedAlign, vertical);

  return (
    <MenuContextProvider value={{vertical, size, align, overrides}}>
      <StyledMenu
        role="navigation"
        data-testid="menu-container"
        overrides={overrides}
        vertical={vertical}
        {...rest}
      >
        <ul>{children}</ul>
      </StyledMenu>
    </MenuContextProvider>
  );
};
