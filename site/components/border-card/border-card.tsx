import {
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getShadowCssFromTheme,
  styled,
} from 'newskit';
import React from 'react';

export interface BorderCardProps {
  borderRadiusToken?: string;
  borderWidthToken?: string;
  boxShadowToken?: string;
}

const StyledBorderCard = styled.div<{
  borderRadiusToken: string;
  borderWidthToken: string;
  boxShadowToken: string;
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

  ${({boxShadowToken}) => getShadowCssFromTheme('boxShadow', boxShadowToken)};
  background-color: ${({boxShadowToken}) => (boxShadowToken ? 'white' : '')};
  margin: ${({boxShadowToken}) => (boxShadowToken ? '0 0 20px 15px' : '')};
`;

export const BorderCard: React.FC<BorderCardProps> = ({
  borderRadiusToken = 'borderRadiusRounded020',
  borderWidthToken = 'borderWidthDefault',
  boxShadowToken = '',
}) => (
  <StyledBorderCard
    borderRadiusToken={borderRadiusToken}
    borderWidthToken={boxShadowToken ? 'borderWidth000' : borderWidthToken}
    boxShadowToken={boxShadowToken}
  />
);
