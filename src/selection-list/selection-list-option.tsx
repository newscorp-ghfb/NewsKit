import React from 'react';
import {IconFilledCheck} from '../icons';
import {useTheme} from '../theme';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getStylePreset,
  getTypographyPreset,
  styled,
} from '../utils';
import {getToken} from '../utils/get-token';
import {logicalProps} from '../utils/logical-properties';
import {SelectionListOptionProps} from './types';

const SelectionListOptionContainer = styled.button<SelectionListOptionProps>`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${getStylePreset('selectionList.option', '')}
  ${getTypographyPreset('selectionList.option', '')}
  ${getResponsiveSize('minHeight', 'selectionList.option', '', 'minHeight')}
  ${getResponsiveSpace('columnGap', 'selectionList.option', '', 'spaceInline')}
  ${logicalProps('selectionList.option')}
`;

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
    `selectionList.option.icon`,
    'icon',
    'iconSize',
  );

  const renderIcon = () => {
    if (selectedIcon) return selectedIcon;
    return <IconFilledCheck overrides={{size: iconSize}} />;
  };

  return (
    <SelectionListOptionContainer
      role="menuitemradio"
      aria-checked={selected}
      overrides={overrides}
      {...restProps}
    >
      {children}
      {selected && renderIcon()}
    </SelectionListOptionContainer>
  );
};
