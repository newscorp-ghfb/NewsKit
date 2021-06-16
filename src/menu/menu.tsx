import React from 'react';
import {MenuContextProvider} from './context';
import {MenuItemAlign, MenuItemSize, MenuProps} from './types';
import {StyledMenuContainer} from './styled';

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
  align: initialAlign,
  ariaLabel, // TODO ariaLabel or aria-label visit toast
}) => {
  const align = getAlign(initialAlign, vertical);

  return (
    <MenuContextProvider value={{vertical, size, align, overrides}}>
      <StyledMenuContainer
        role="navigation"
        aria-label={ariaLabel || 'Menu'}
        data-testid="menu-container"
        overrides={overrides}
        vertical={vertical}
      >
        <ul>{children}</ul>
      </StyledMenuContainer>
    </MenuContextProvider>
  );
};
