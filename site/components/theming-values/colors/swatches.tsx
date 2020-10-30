import React from 'react';
import {Stack, Cell} from 'newskit';
import {ThemeColor} from './types';
import {
  StyledSwatchRow,
  StyledAccessibilityBadge,
  StyledSwatchCard,
  StyledSwatchCardBottom,
  StyledSwatchCardTitle,
  StyledSwatchCardDot,
  StyledBadgeContainer,
  StyledSwatchCardTop,
  StyledSwatchCardTopOverlay,
} from './styled';

export type SwatchComponent = React.FC<SwatchRowProps>;

interface SwatchRowProps {
  color: ThemeColor;
  index: number;
  length: number;
  isOverlay?: boolean;
}

const colorTokenToUpperCase = (colorToken: string) =>
  colorToken.startsWith('#') ? colorToken.toUpperCase() : colorToken;

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
            <span>{colorTokenToUpperCase(color.value)}</span>
            <StyledBadgeContainer>
              <StyledAccessibilityBadge
                overrides={{
                  stylePreset: 'swatchBadge',
                  width: 'sizing070',
                  height: 'sizing060',
                }}
              >
                {color.contrastRating}
              </StyledAccessibilityBadge>
            </StyledBadgeContainer>
          </Stack>
        </span>
      </Stack>
    </StyledSwatchRow>
  </Cell>
);

export const SwatchCard: SwatchComponent = ({
  color,
  isOverlay,
}: SwatchRowProps) => (
  <Cell xs={6} xl={3}>
    <StyledSwatchCard>
      {isOverlay ? (
        <StyledSwatchCardTopOverlay {...color} />
      ) : (
        <StyledSwatchCardTop {...color}>
          <Stack flow="horizontal-top" stackDistribution="flex-end">
            {!isOverlay && (
              <StyledAccessibilityBadge>
                {color.contrastRating}
              </StyledAccessibilityBadge>
            )}
          </Stack>
        </StyledSwatchCardTop>
      )}
      <StyledSwatchCardBottom isOverlay={isOverlay} {...color}>
        <StyledSwatchCardTitle>{color.name}</StyledSwatchCardTitle>
        <Stack flow="horizontal-center" stackDistribution="space-between">
          {color.parentColor && !isOverlay && (
            <span>
              <StyledSwatchCardDot backgroundColor={color.parentColor.value} />
              {color.parentColor.name}
            </span>
          )}
          <span>{colorTokenToUpperCase(color.value)}</span>
        </Stack>
      </StyledSwatchCardBottom>
    </StyledSwatchCard>
  </Cell>
);
