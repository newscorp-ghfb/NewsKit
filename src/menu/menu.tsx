import React from 'react';
import {MenuContextProvider} from './context';
import {MenuItemAlign, MenuItemSize, MenuProps} from './types';
import {StyledMenu} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const getAlign = (align: MenuItemAlign | undefined, vertical: boolean) => {
  if (!align) {
    return vertical ? MenuItemAlign.Start : MenuItemAlign.Center;
  }
  return align;
};

const ThemelessMenu = ({
  overrides,
  children,
  vertical = false,
  size = MenuItemSize.Medium,
  align: passedAlign,
  ...rest
}: MenuProps) => {
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
        {/* eslint-disable jsx-a11y/no-redundant-roles  */}
        <ul role="list">{children}</ul>
      </StyledMenu>
    </MenuContextProvider>
  );
};

export const Menu = withOwnTheme(ThemelessMenu)({defaults, stylePresets});
