import React from 'react';
import {
  getBorderFromTheme,
  getColorFromTheme,
  getSizingFromTheme,
  styled,
} from '../utils/style';
import {BorderKeys, ColorKeys, SizingKeys} from '../themes';

export type DividerProps = {
  $color?: ColorKeys;
  $border?: BorderKeys;
  $marginTop?: SizingKeys;
  $marginRight?: SizingKeys;
  $marginBottom?: SizingKeys;
  $marginLeft?: SizingKeys;
};

const StyledDivider = styled.hr<DividerProps>`
  border-color: ${getColorFromTheme('interface030', '$color')};
  border-width: ${getBorderFromTheme('borderWidth010', '$border')};
  margin-top: ${getSizingFromTheme('spacingSize050', '$marginTop')};
  margin-right: ${getSizingFromTheme('spacingSize000', '$marginRight')};
  margin-bottom: ${getSizingFromTheme('spacingSize050', '$marginBottom')};
  margin-left: ${getSizingFromTheme('spacingSize000', '$marginLeft')};
  border-style: solid;
`;

export const Divider: React.FC<DividerProps> = props => (
  <StyledDivider data-testid="divider" {...props} />
);
