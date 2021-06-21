import React from 'react';
import {MenuContextProvider} from './context';
import {
  MenuItemAlign,
  MenuItemDistribution,
  MenuItemSize,
  MenuProps,
} from './types';
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
  align: passedAlign,
  distribution = MenuItemDistribution.Start,
  ...rest
}) => {
  const align = getAlign(passedAlign, vertical);

  return (
    <MenuContextProvider
      value={{vertical, size, align, distribution, overrides}}
    >
      <StyledMenuContainer
        role="navigation"
        data-testid="menu-container"
        overrides={overrides}
        vertical={vertical}
        {...rest}
      >
        <ul>{children}</ul>
      </StyledMenuContainer>
    </MenuContextProvider>
  );
};
