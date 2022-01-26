import React from 'react';
import {useTheme} from '@emotion/react';
import {useMenuContext} from './context';
import {MenuDividerProps} from './types';
import {StyledMenuDivider} from './styled';
import {Divider} from '../divider';
import {filterOutFalsyProperties} from '../utils/filter-object';

export const MenuDivider = React.forwardRef<HTMLLIElement, MenuDividerProps>(
  ({overrides}, ref) => {
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
        ref={ref}
      >
        <Divider vertical={!vertical} overrides={dividerOverrides} />
      </StyledMenuDivider>
    );
  },
);
MenuDivider.displayName = 'MenuDivider';
