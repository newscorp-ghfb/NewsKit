import {
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  styled,
} from 'newskit';
import React from 'react';

export interface BorderCardProps {
  borderRadiusToken?: string;
  borderWidthToken?: string;
}

const StyledBorderCard = styled.div<{
  borderRadiusToken: string;
  borderWidthToken: string;
}>`
  display: flex;
  ${getSizingCssFromTheme('width', 'sizing100')};
  ${getSizingCssFromTheme('height', 'sizing100')};
  border: solid;
  ${getColorCssFromTheme('borderColor', 'interface040')};

  ${({borderRadiusToken}) =>
    getBorderCssFromTheme('borderRadius', borderRadiusToken)};
  ${({borderWidthToken}) =>
    getBorderCssFromTheme('borderWidth', borderWidthToken)};
`;

export const BorderCard: React.FC<BorderCardProps> = ({
  borderRadiusToken = 'borderRadiusRounded020',
  borderWidthToken = 'borderWidthDefault',
}) => (
  <StyledBorderCard
    borderRadiusToken={borderRadiusToken}
    borderWidthToken={borderWidthToken}
  />
);
