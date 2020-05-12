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
} from './styled';

export type SwatchComponent = React.FC<SwatchRowProps>;

interface SwatchRowProps {
  color: ThemeColor;
  index: number;
  length: number;
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
          <Stack flow="horizontal-center" space="sizing050">
            {color.parentColor && <span>({color.parentColor.name})</span>}
            <span>{color.value.toUpperCase()}</span>
            <span>
              <StyledAccessibilityBadge>
                {color.contrastRating}
              </StyledAccessibilityBadge>
            </span>
          </Stack>
        </span>
      </Stack>
    </StyledSwatchRow>
  </Cell>
);

export const SwatchCard: SwatchComponent = ({color}: SwatchRowProps) => (
  <Cell xs={3}>
    <StyledSwatchCard>
      <StyledSwatchCardTop {...color}>
        <Stack flow="horizontal-top" stackDistribution="flex-end">
          <StyledAccessibilityBadge>
            {color.contrastRating}
          </StyledAccessibilityBadge>
        </Stack>
      </StyledSwatchCardTop>

      <StyledSwatchCardBottom {...color}>
        <StyledSwatchCardTitle>{color.name}</StyledSwatchCardTitle>
        <Stack flow="horizontal-center" stackDistribution="space-between">
          {color.parentColor && (
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
