import React from 'react';
import {
  getBorderFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from '../utils/style';
import {BorderKeys, ColorKeys, SizingKeys} from '../themes';

interface CommonProps {
  border?: BorderKeys;
  marginTop?: SizingKeys;
  marginRight?: SizingKeys;
  marginBottom?: SizingKeys;
  marginLeft?: SizingKeys;
}

interface StyledDividerProps extends CommonProps {
  $color?: ColorKeys;
}

export interface DividerProps extends CommonProps {
  color?: ColorKeys;
}

const StyledDivider = styled.hr<StyledDividerProps>`
  border-color: ${getColorFromTheme('interface030', '$color')};
  border-width: ${getBorderFromTheme('borderWidth010', 'border')};
  margin-top: ${getSizingFromTheme('sizing050', 'marginTop')};
  margin-right: ${getSizingFromTheme('sizing000', 'marginRight')};
  margin-bottom: ${getSizingFromTheme('sizing050', 'marginBottom')};
  margin-left: ${getSizingFromTheme('sizing000', 'marginLeft')};
  border-style: solid;
`;

export const Divider: React.FC<DividerProps> = ({color, ...props}) => (
  <StyledDivider data-testid="divider" {...props} $color={color} />
);
