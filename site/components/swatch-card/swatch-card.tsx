import {
  Flag,
  getBorderCssFromTheme,
  getColorCssFromTheme,
  getSizingCssFromTheme,
  getSpacingCssFromTheme,
  getStylePresetFromTheme,
  getTypographyPresetFromTheme,
  Stack,
  styled,
  Theme,
  compileTheme,
  newskitLightTheme,
  newskitDarkTheme,
} from 'newskit';
import React from 'react';
import {
  getContrast,
  getContrastRating,
} from '../theming-values/colors/color-utils';
import {useThemeMode} from '../../helpers/use-theme-mode';

export interface SwatchCardProps {
  color: string;
}

const getTextColor = (theme: Theme, colorToken: string) =>
  getContrast(theme.colors[colorToken], theme.colors.inkInverse) <
  getContrast(theme.colors[colorToken], theme.colors.inkContrast)
    ? theme.colors.inkInverse
    : theme.colors.inkContrast;

const StyledAccessibilityBadge = styled(Flag)<{
  colorToken: string;
  newskitTheme: Theme;
}>`
  ${getSizingCssFromTheme('width', 'sizing080')};
  ${getSizingCssFromTheme('height', 'sizing060')};
  ${getTypographyPresetFromTheme('utilitySubheading030')};
  color: ${({newskitTheme, colorToken}) =>
    getTextColor(newskitTheme, colorToken)};
  ${getStylePresetFromTheme('swatchBadgeInTable')};
  width: 100%;
`;

const StyledSwatchCard = styled.div<{
  colorToken: string;
  newskitTheme: Theme;
}>`
  display: flex;
  background: ${({newskitTheme, colorToken}) =>
    newskitTheme.colors[colorToken]};
  ${getSizingCssFromTheme('height', 'sizing100')};
  width: 100px;
  ${getSpacingCssFromTheme('marginRight', 'spaceInset020')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  border: 1px solid;
  ${getColorCssFromTheme('borderColor', 'interface040')};
`;

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);
const compiledNewskitDarkTheme = compileTheme(newskitDarkTheme);

export const SwatchCard: React.FC<SwatchCardProps> = ({color}) => {
  const themeMode = useThemeMode();
  const newskitTheme =
    themeMode === 'light'
      ? compiledNewskitLightTheme
      : compiledNewskitDarkTheme;
  const contrastRatio = getContrastRating(
    getContrast(newskitTheme.colors[color], newskitTheme.colors.interface010),
  );

  return (
    <StyledSwatchCard colorToken={color} newskitTheme={newskitTheme}>
      <Stack flow="horizontal-bottom" stackDistribution="flex-start">
        <StyledAccessibilityBadge
          colorToken={color}
          newskitTheme={newskitTheme}
        >
          {contrastRatio}
        </StyledAccessibilityBadge>
      </Stack>
    </StyledSwatchCard>
  );
};
