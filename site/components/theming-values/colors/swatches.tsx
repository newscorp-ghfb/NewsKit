import React from 'react';
import {Stack, Cell} from 'newskit';
import {ThemeColor} from './types';
import {
  StyledSwatchRow,
  StyledAccessibilityBadge,
  StyledSwatchCard,
  StyledSwatchCardTop,
  StyledSwatchCardBottom,
  StyledSwatchCardTitle,
  StyledSwatchCardDot,
  BadgeContainer,
} from './styled';

export type SwatchComponent = React.FC<SwatchRowProps>;

interface SwatchRowProps {
  color: ThemeColor;
  index: number;
  length: number;
  isOverlay?: boolean;
}

export const SwatchRow: SwatchComponent = ({
  color,
  index,
  length,
}: SwatchRowProps) => (
  <Cell xs={12}>
    <StyledSwatchRow {...color} first={index === 0} last={index === length - 1}>
      <Stack flow="horizontal-center" stackDistribution="space-between">
        <span>{color.name}</span>
        <span>
          <Stack flow="horizontal-center" spaceInline="sizing050">
            {color.parentColor && <span>({color.parentColor.name})</span>}
            <span>{color.value.toUpperCase()}</span>
            <BadgeContainer>
              <StyledAccessibilityBadge>
                {color.contrastRating}
              </StyledAccessibilityBadge>
            </BadgeContainer>
          </Stack>
        </span>
      </Stack>
    </StyledSwatchRow>
  </Cell>
);

export const SwatchCard: SwatchComponent = ({color, isOverlay}) => (
  <Cell xs={6} lg={3}>
    <StyledSwatchCard>
      <StyledSwatchCardTop {...color} isOverlay={isOverlay}>
        <Stack flow="horizontal-top" stackDistribution="flex-end">
          {!isOverlay && (
            <StyledAccessibilityBadge>
              {color.contrastRating}
            </StyledAccessibilityBadge>
          )}
        </Stack>
      </StyledSwatchCardTop>

      <StyledSwatchCardBottom isOverlay={isOverlay} {...color}>
        <StyledSwatchCardTitle>{color.name}</StyledSwatchCardTitle>
        <Stack flow="horizontal-center" stackDistribution="space-between">
          {color.parentColor && !isOverlay && (
            <span>
              <StyledSwatchCardDot backgroundColor={color.parentColor.value} />
              {color.parentColor.name}
            </span>
          )}
          <span>{color.value.toUpperCase()}</span>
        </Stack>
      </StyledSwatchCardBottom>
    </StyledSwatchCard>
  </Cell>
);
