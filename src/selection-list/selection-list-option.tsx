import React from 'react';
import {IconFilledCheck} from '../icons';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import {StyledSelectionListOption} from './styled';
import {SelectionListOptionProps} from './types';

export const SelectionListOption = React.forwardRef<
  HTMLButtonElement,
  SelectionListOptionProps
>(
  (
    {children, selected, selectedIcon, overrides = {}, ...restProps},
    forwardRef,
  ) => {
    const theme = useTheme();
    const iconSize = getToken(
      {theme, overrides},
      `selectionListOption.icon`,
      'icon',
      'iconSize',
    );

    const iconStylePreset = getToken(
      {theme, overrides},
      `selectionListOption.icon`,
      '',
      'stylePreset',
    );

    const renderIcon = () => {
      if (selectedIcon) return selectedIcon;
      return (
        <IconFilledCheck
          overrides={{size: iconSize, stylePreset: iconStylePreset}}
        />
      );
    };

    return (
      <StyledSelectionListOption
        ref={forwardRef}
        role="menuitemradio"
        aria-checked={selected}
        selected={selected}
        overrides={overrides}
        tabIndex={selected ? 0 : -1}
        {...restProps}
      >
        {children}
        {selected && renderIcon()}
      </StyledSelectionListOption>
    );
  },
);
