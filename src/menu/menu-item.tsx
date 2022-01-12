import React from 'react';
import {useMenuContext} from './context';
import {MenuItemProps} from './types';
import {StyledButton, StyledMenuItem} from './styled';

import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';

export const MenuItem: React.FC<MenuItemProps> = ({
  overrides,
  children,
  selected,
  ...rest
}) => {
  const {vertical, size, align, overrides: menuOverrides} = useMenuContext();

  const theme = useTheme();
  const buttonOverrides: MenuItemProps['overrides'] = {
    ...get(
      theme.componentDefaults,
      `menuItem.${vertical ? 'vertical' : 'horizontal'}`,
    ),
    ...filterOutFalsyProperties(overrides),
  };

  const buttonProps = {
    ...rest,
    selected,
    size,
  };

  return (
    <StyledMenuItem
      className="nk-menu-item"
      vertical={vertical}
      overrides={menuOverrides}
    >
      <StyledButton
        {...buttonProps}
        align={align}
        overrides={{
          ...buttonOverrides,
          // width 100% should not be overwritten
          // move to StyledButton once PPDSC-1449 is resolved
          width: '100%',
        }}
        aria-current={selected && 'page'}
      >
        {children}
      </StyledButton>
    </StyledMenuItem>
  );
};

MenuItem.displayName = 'MenuItem';
