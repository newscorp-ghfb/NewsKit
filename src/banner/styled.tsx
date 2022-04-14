import {BannerProps} from './types';
import {
  styled,
  getStylePreset,
  getResponsiveSize,
  getResponsiveSpace,
  getTypographyPreset,
} from '../utils/style';
import {Stack} from '../stack';
import {TextBlock} from '../text-block';
import {
  logicalProps,
  logicalPropsWithCSSProperty,
} from '../utils/logical-properties';

export const StyledBannerContainer = styled.div<BannerProps>`
  box-sizing: border-box;
  ${({layout}) => getStylePreset(`banner.${layout}`, '')};
  ${({layout}) =>
    getResponsiveSpace('padding', `banner.${layout}`, '', 'spaceInset')}
  ${({layout}) =>
    getResponsiveSize('minHeight', `banner.${layout}`, '', 'minHeight')}
  ${({layout}) => logicalProps(`${layout}`)}
`;

export const StyledMaxWidthContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  box-sizing: border-box;
  ${({layout}) =>
    getResponsiveSize('maxWidth', `banner.${layout}`, '', 'maxWidth')}
  margin: 0 auto;
`;

export const StyledIconContentContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  flex: 1;
  ${({layout}) => layout === 'vertical' && 'align-self: stretch;'};
  // To be removed once logical props are used in defaults
  ${({layout}) =>
    getResponsiveSpace(
      layout === 'vertical' ? 'marginBottom' : 'marginRight',
      `banner.${layout}.content`,
      'content',
      'spaceInline',
    )};
  ${({layout}) =>
    layout === 'vertical'
      ? logicalPropsWithCSSProperty(
          'marginBlockEnd',
          `banner.${layout}.content`,
          'content',
        )
      : logicalPropsWithCSSProperty(
          'marginInlineEnd',
          `banner.${layout}.content`,
          'content',
        )};
`;

export const StyledIconContainer = styled.div<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  display: flex;
  // To be removed once logical props are used in defaults
  ${({layout}) =>
    getResponsiveSpace(
      'marginRight',
      `banner.${layout}.icon`,
      'icon',
      'spaceInline',
    )};

  ${({layout}) => logicalProps(`banner.${layout}.icon`, 'icon')};
`;

export const StyledTitleContainer = styled(TextBlock)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  ${({layout}) =>
    getTypographyPreset(`banner.${layout}.content.title`, 'content.title', {
      withCrop: true,
    })};

  ${({layout}) =>
    getStylePreset(`banner.${layout}.content.title`, 'content.title')};

  // To be removed once logical props are used in defaults
  ${({layout}) =>
    getResponsiveSpace(
      'marginBottom',
      `banner.${layout}.content.title`,
      'content.title',
      'spaceStack',
    )}
  ${({layout}) =>
    logicalProps(`banner.${layout}.content.title`, 'content.title')};
`;

export const StyledContentContainer = styled.div`
  flex: 1;
  align-self: center;
`;

export const StyledMessageContainer = styled(TextBlock)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  ${({layout}) =>
    getTypographyPreset(`banner.${layout}.content.message`, 'content.message', {
      withCrop: true,
    })};

  ${({layout}) =>
    getStylePreset(`banner.${layout}.content.message`, 'content.message')};
`;

export const StyledActionsContainer = styled(Stack)<
  Pick<BannerProps, 'overrides' | 'layout'>
>`
  ${({layout}) =>
    layout === 'vertical' ? 'align-self: stretch;' : 'align-self: center;'}
`;
