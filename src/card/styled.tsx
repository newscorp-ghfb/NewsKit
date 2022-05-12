/* eslint-disable import/no-extraneous-dependencies */
import {FlexDirectionProperty} from 'csstype';
import {CardLayout, CardOverridesProps, CardProps, HasHref} from './types';
import {
  styled,
  getStylePreset,
  handleResponsiveProp,
  getResponsiveSpace,
  getResponsiveSize,
  getBorderCssFromTheme,
} from '../utils/style';

import {Stack} from '../stack';
import {HeadlineOverrides} from '../headline/types';
import {
  filterInteractiveStates,
  getHorizontalRatio,
  isHorizontal,
  isReverse,
} from './utils';
import {logicalPaddingProps, logicalProps} from '../utils/logical-properties';

const DEFAULT_PROPS: {layout: CardLayout} = {
  layout: 'vertical',
};

export const StyledCardContainer = styled.div<
  Pick<CardProps, 'overrides' | 'layout' | 'className'> & HasHref
>`
  box-sizing: border-box;
  overflow: hidden;
  ${({hasHref, ...props}) => filterInteractiveStates('', hasHref)(props)}
  position: relative;
  display: flex;
  ${handleResponsiveProp({layout: DEFAULT_PROPS.layout}, ({layout}) => ({
    flexDirection: (isHorizontal(layout)
      ? `row${isReverse(layout) && '-reverse'}`
      : 'column') as FlexDirectionProperty,
  }))}
  ${logicalProps('card')};
`;

export const StyledCardContainerMedia = styled.div<
  Pick<CardProps, 'mediaInteractive' | 'layout' | 'overrides'> & HasHref
>`
  box-sizing: border-box;
  display: block;
  position: relative;
  svg {
    ${getBorderCssFromTheme('borderRadius', 'borderRadiusRounded010')};
  }

  ${handleResponsiveProp(
    {layout: DEFAULT_PROPS.layout},
    ({layout}, {overrides, theme}) => {
      if (isHorizontal(layout)) {
        const [mediaRatio] = getHorizontalRatio(
          layout,
          theme.componentDefaults.card,
          overrides as CardOverridesProps,
        );
        return {flex: mediaRatio};
      }

      return {};
    },
  )}

  ${handleResponsiveProp({layout: DEFAULT_PROPS.layout}, ({layout}, props) => {
    let marginDirection = 'marginBottom';
    if (isHorizontal(layout) && isReverse(layout)) {
      marginDirection = 'marginLeft';
    } else if (isHorizontal(layout)) {
      marginDirection = 'marginRight';
    }

    return getResponsiveSpace(
      marginDirection,
      'card.mediaContainer',
      'mediaContainer',
      'spaceInline',
    )(props);
  })}
  ${logicalPaddingProps('card.mediaContainer', 'mediaContainer')};

  ${({mediaInteractive}) => (mediaInteractive ? 'z-index: 2;' : null)}
  ${({hasHref, ...props}) =>
    filterInteractiveStates('mediaContainer', hasHref)(props)}
`;

export const StyledCardContainerTeaserAndActions = styled.div<
  Pick<CardProps, 'layout' | 'overrides'> & HasHref
>`
  box-sizing: border-box;

  ${handleResponsiveProp(
    {layout: DEFAULT_PROPS.layout},
    ({layout}, {overrides, theme}) => {
      if (isHorizontal(layout)) {
        const [, teaserRatio] = getHorizontalRatio(
          layout,
          theme.componentDefaults.card,
          overrides as CardOverridesProps,
        );
        return {display: 'flex', flexDirection: 'column', flex: teaserRatio};
      }

      return {};
    },
  )}
`;

export const StyledCardContainerTeaser = styled.div<
  Pick<CardProps, 'layout' | 'overrides'> & HasHref
>`
  box-sizing: border-box;
  ${handleResponsiveProp({layout: DEFAULT_PROPS.layout}, ({layout}) => ({
    flex: isHorizontal(layout) ? 1 : undefined,
  }))}
  ${({hasHref, ...props}) =>
    filterInteractiveStates('teaserContainer', hasHref)(props)}
  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${getResponsiveSpace(
    'padding',
    'card.teaserContainer',
    'teaserContainer',
    'spaceInset',
  )}
  ${logicalPaddingProps('card.teaserContainer', 'teaserContainer')};

  a:not(.nk-card-link) {
    z-index: 2;
    position: relative;
  }
`;

export const StyledCardLink = styled.a<HeadlineOverrides>`
  text-decoration: none;
  border: none;

  ${getStylePreset('card.headline.interactive.kicker', 'kicker', {
    nestedCssSelector: '.nk-headline-kicker',
  })}

  ${getStylePreset('card.headline.interactive.heading', 'heading', {
    nestedCssSelector: '.nk-headline-heading',
  })}

  :before {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    z-index: 1;
  }
`;

export const StyledCardContainerActions = styled(Stack)<
  Pick<CardProps, 'overrides'> & HasHref
>`
  height: auto;
  box-sizing: border-box;
  // LOGICAL_PROPS_TO_DO: remove the below func when logical props are used in defaults
  ${getResponsiveSpace(
    'padding',
    'card.actionsContainer',
    'actionsContainer',
    'spaceInset',
  )}
  ${logicalPaddingProps('card.actionsContainer', 'actionsContainer')};
  ${({hasHref, ...props}) =>
    filterInteractiveStates('actionsContainer', hasHref)(props)}
  ${getResponsiveSize(
    'minHeight',
    'card.actionsContainer',
    'actionsContainer',
    'minHeight',
  )}
  position: relative;
  z-index: 2;
`;
