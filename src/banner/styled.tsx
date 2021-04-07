import {BannerProps} from './types';
import {
  styled,
  getStylePreset,
  getResponsiveSize,
  getResponsiveSpace,
} from '../utils/style';

export const StyledBannerContainer = styled.div<BannerProps>`
  box-sizing: border-box;
  ${getStylePreset('banner.container', 'container')};
  ${getResponsiveSpace(
    'padding',
    'banner.container',
    'container',
    'spaceInset',
  )}
  ${getResponsiveSize(
    'minHeight',
    'banner.container',
    'container',
    'minHeight',
  )}
`;

export const StyledContentActionsContainer = styled.div<{
  overrides?: BannerProps['overrides'];
}>`
  box-sizing: border-box;
  ${getResponsiveSize(
    'maxWidth',
    'banner.contentActionsContainer',
    'contentActionsContainer',
    'maxWidth',
  )}
  margin: 0 auto;
`;
