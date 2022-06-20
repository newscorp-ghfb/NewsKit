import {
  getBorderCssFromTheme,
  getColorFromTheme,
  getOverlayCssFromTheme,
  getSizingCssFromTheme,
  newskitLightTheme,
  styled,
} from 'newskit';
import React from 'react';

import {compileTheme} from '../../../../src/theme/compiler';

export interface OverlayCardProps {
  overlayToken?: string;
  gradientToken?: string;
  opacityToken?: string;
}

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);

export const StyledSwatchCardTopOverlay = styled.div`
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getSizingCssFromTheme('width', 'sizing100')};
  ${getSizingCssFromTheme('height', 'sizing100')};
  background-image: linear-gradient(
      45deg,
      ${getColorFromTheme('interface040')} 25%,
      transparent 25%
    ),
    linear-gradient(
      -45deg,
      ${getColorFromTheme('interface040')} 25%,
      transparent 25%
    ),
    linear-gradient(
      45deg,
      transparent 75%,
      ${getColorFromTheme('interface040')} 75%
    ),
    linear-gradient(
      -45deg,
      transparent 75%,
      ${getColorFromTheme('interface040')} 75%
    );
  background-size: 20px 20px;
`;

const StyledOverlayCard = styled.div<{
  overlayToken: string;
  gradientToken: string;
  opacityToken: string;
}>`
  ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded020')};
  ${getSizingCssFromTheme('width', 'sizing100')};
  ${getSizingCssFromTheme('height', 'sizing100')};
  display: flex;
  ${({overlayToken}) =>
    getOverlayCssFromTheme(
      'backgroundColor',
      overlayToken,
    )({theme: compiledNewskitLightTheme})};
  ${({opacityToken}) =>
    getOverlayCssFromTheme(
      'opacity',
      opacityToken,
    )({theme: compiledNewskitLightTheme})};
  background-color: ${({opacityToken}) => (opacityToken ? 'black' : '')};
  ${({gradientToken}) =>
    getOverlayCssFromTheme(
      'backgroundImage',
      gradientToken,
    )({theme: compiledNewskitLightTheme})};
`;

export const OverlayCards: React.FC<OverlayCardProps> = ({
  overlayToken = '',
  gradientToken = '',
  opacityToken = '',
}) => (
  <StyledSwatchCardTopOverlay>
    <StyledOverlayCard
      overlayToken={overlayToken}
      gradientToken={gradientToken}
      opacityToken={opacityToken}
    />
  </StyledSwatchCardTopOverlay>
);
