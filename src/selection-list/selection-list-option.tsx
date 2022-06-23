import React from 'react';
import {IconFilledCheck} from '../icons';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {StyledSelectionListOption} from './styled';
import {SelectionListOptionProps} from './types';

export const SelectionListOption = ({
  children,
  selected,
  selectedIcon,
  overrides = {},
  ...restProps
}: SelectionListOptionProps) => {
  const theme = useTheme();
  const iconSize = getToken(
    {theme, overrides},
    `selectionListOption.icon`,
    'icon',
    'iconSize',
  );

  const renderIcon = () => {
    if (selectedIcon) return selectedIcon;
    return <IconFilledCheck overrides={{size: iconSize}} />;
  };

  return (
    <StyledSelectionListOption
      role="menuitemradio"
      aria-checked={selected}
      overrides={overrides}
      tabIndex={selected ? 0 : -1}
      {...restProps}
    >
      {children}
      {selected && renderIcon()}
    </StyledSelectionListOption>
  );
};
