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
  useTheme,
} from 'newskit';
import React from 'react';
import {
  getContrast,
  getContrastRating,
} from '../theming-values/colors/color-utils';

export interface SwatchCardProps {
  color: string;
  theme?: Theme;
}

const getTextColor = (theme: Theme, colorToken: string) =>
  getContrast(theme.colors[colorToken], theme.colors.inkInverse) <
  getContrast(theme.colors[colorToken], theme.colors.inkContrast)
    ? theme.colors.inkInverse
    : theme.colors.inkContrast;

const StyledAccessibilityBadge = styled(Flag)<{
  colorToken: string;
}>`
  ${getSizingCssFromTheme('width', 'sizing080')};
  ${getSizingCssFromTheme('height', 'sizing060')};
  ${getTypographyPresetFromTheme('utilitySubheading030')};
  color: ${({theme, colorToken}) => getTextColor(theme, colorToken)};
  ${getStylePresetFromTheme('swatchBadgeInTable')};
  width: 100%;
`;

const StyledSwatchCard = styled.div<{
  colorToken: string;
}>`
  display: flex;
  background: ${({theme, colorToken}) => theme.colors[colorToken]};
  ${getSizingCssFromTheme('height', 'sizing100')};
  width: 100px;
  ${getSpacingCssFromTheme('marginRight', 'spaceInset020')};
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  border: 1px solid;
  ${getColorCssFromTheme('borderColor', 'interface040')};
`;

export const SwatchCard: React.FC<SwatchCardProps> = ({color}) => {
  const theme = useTheme();
  const contrastRatio = getContrastRating(
    getContrast(theme.colors[color], theme.colors.interface010),
  );

  return (
    <StyledSwatchCard colorToken={color}>
      <Stack flow="horizontal-bottom" stackDistribution="flex-start">
        <StyledAccessibilityBadge colorToken={color}>
          {contrastRatio}
        </StyledAccessibilityBadge>
      </Stack>
    </StyledSwatchCard>
  );
};
