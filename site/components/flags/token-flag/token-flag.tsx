import {
  Flag,
  FlagProps,
  getShadowCssFromTheme,
  getBorderCssFromTheme,
  getSizingCssFromTheme,
  styled,
  useTheme,
} from 'newskit';
import React from 'react';

export interface TokenFlagProps extends FlagProps {
  color?: string;
}

const StyledSwatchCardDot = styled.div<{backgroundColor: string}>`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing030')};
  ${getSizingCssFromTheme('width', 'sizing030')};
  background: ${({backgroundColor}) => backgroundColor};
  ${getShadowCssFromTheme('boxShadow', 'shadow030')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusCircle')};
`;

export const TokenFlag: React.FC<TokenFlagProps> = ({color, children}) => {
  const theme = useTheme();
  return (
    <Flag
      size="medium"
      overrides={{
        stylePreset: 'tokenFlag',
        iconSize: 'iconSize005',
        spaceInline: 'space020',
      }}
    >
      {color && <StyledSwatchCardDot backgroundColor={theme.colors[color]} />}
      {children}
    </Flag>
  );
};
