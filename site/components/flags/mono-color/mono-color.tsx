import {
  getBorderCssFromTheme,
  getSizingCssFromTheme,
  getColorCssFromTheme,
  styled,
  compileTheme,
  newskitLightTheme,
  newskitDarkTheme,
} from 'newskit';
import React from 'react';
import {Mono, MonoProps} from '../mono';
import {useThemeMode} from '../../../helpers/use-theme-mode';

export interface MonoColorProps extends MonoProps {
  color: string;
}

const StyledSwatchCardDot = styled.div<{backgroundColor: string}>`
  display: inline-block;
  ${getSizingCssFromTheme('height', 'sizing030')};
  ${getSizingCssFromTheme('width', 'sizing030')};
  background: ${({backgroundColor}) => backgroundColor};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusCircle')};
  border: 1px solid;
  ${getColorCssFromTheme('borderColor', 'interface040')};
`;

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);
const compiledNewskitDarkTheme = compileTheme(newskitDarkTheme);

export const MonoColor: React.FC<MonoColorProps> = ({color}) => {
  const themeMode = useThemeMode();
  const theme =
    themeMode === 'light'
      ? compiledNewskitLightTheme
      : compiledNewskitDarkTheme;
  return (
    <Mono key={color + themeMode}>
      <StyledSwatchCardDot backgroundColor={theme.colors[color]} />
      {color}
    </Mono>
  );
};
