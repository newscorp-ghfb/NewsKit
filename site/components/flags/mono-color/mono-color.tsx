import {
  getShadowCssFromTheme,
  getBorderCssFromTheme,
  getSizingCssFromTheme,
  styled,
  useTheme,
  getSSRId,
} from 'newskit';
import React from 'react';
import {Mono, MonoProps} from '../mono';

export interface MonoColorProps extends MonoProps {
  color: string;
}

const StyledSwatchCardDot = styled.div<{backgroundColor: string}>`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing020')};
  ${getSizingCssFromTheme('width', 'sizing020')};
  background: ${({backgroundColor}) => backgroundColor};
  ${getShadowCssFromTheme('boxShadow', 'shadow020')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusCircle')};
`;

export const MonoColor: React.FC<MonoColorProps> = ({color}) => {
  const theme = useTheme();
  return (
    <Mono key={getSSRId()}>
      <StyledSwatchCardDot backgroundColor={theme.colors[color]} />
      {color}
    </Mono>
  );
};
