import {BannerProps} from './types';
import {
  styled,
  getStylePreset,
  getResponsiveSize,
  getResponsiveSpace,
} from '../utils/style';
import {Stack} from '../stack';

export const StyledBannerContainer = styled.div<BannerProps>`
  box-sizing: border-box;
  ${getStylePreset('banner', '')};
  ${getResponsiveSpace('padding', 'banner', '', 'spaceInset')}
  ${getResponsiveSize('minHeight', 'banner', '', 'minHeight')}
`;

export const StyledInnerContainer = styled(Stack)<
  Pick<BannerProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getResponsiveSize(
    'maxWidth',
    'banner.innerContainer',
    'innerContainer',
    'maxWidth',
  )}
  margin: 0 auto;
`;

export const StyledIconContainer = styled.div<Pick<BannerProps, 'overrides'>>`
  ${getResponsiveSpace(
    'margin-right',
    'banner.innerContainer.icon',
    'innerContainer.icon',
    'spaceInline',
  )}
`;

export const StyledContentContainer = styled.div<
  Pick<BannerProps, 'overrides'>
>``;
