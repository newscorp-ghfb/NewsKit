import React from 'react';
import {useMenuContext} from './context';
import {MenuDividerProps} from './types';
import {StyledMenuDivider} from './styled';
import {Divider} from '../divider';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const MenuDivider: React.FC<MenuDividerProps> = ({overrides}) => {
  const {vertical, overrides: menuOverrides} = useMenuContext();

  const theme = useTheme();
  const dividerOverrides = {
    ...theme.componentDefaults.menuDivider,
    ...filterOutFalsyProperties(overrides),
  };

  return (
    <StyledMenuDivider
      role="separator"
      aria-hidden="true"
      overrides={{...menuOverrides, ...overrides}}
      vertical={vertical}
    >
      <Divider vertical={!vertical} overrides={dividerOverrides} />
    </StyledMenuDivider>
  );
};
MenuDivider.displayName = 'MenuDivider';
