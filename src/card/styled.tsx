import {CardProps} from './types';
import {
  styled,
  getSpacingInset,
  getMinHeight,
  getSpacingInlineVertical,
  getStylePreset,
} from '../utils/style';

import {Stack} from '../stack';
import {HeadlineOverrides} from '../headline/types';

export const StyledCardContainer = styled.div<Pick<CardProps, 'overrides'>>`
  box-sizing: border-box;
  ${getStylePreset('card', '')}
  position: relative;
`;

export const StyledCardContainerMedia = styled.div<
  Pick<CardProps, 'mediaInteractive' | 'overrides'>
>`
  box-sizing: border-box;
  display: block;
  position: relative;
  overflow: hidden;
  ${({mediaInteractive}) => (mediaInteractive ? 'z-index: 2;' : null)}
  ${getStylePreset('card.mediaContainer', 'mediaContainer')}
  ${getSpacingInlineVertical('card.mediaContainer', 'mediaContainer')}
`;

export const StyledCardContainerTeaserAndActions = styled.div<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset(
    'card.contentAndActionsContainer',
    'contentAndActionsContainer',
  )}
`;

export const StyledCardContainerTeaser = styled.div<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset('card.teaserContainer', 'teaserContainer')}
  ${getSpacingInset(
    'card.teaserContainer',
    'teaserContainer',
  )}

  a:not(.nk-card-link) {
    z-index: 2;
    position: relative;
  }
`;

export const StyledCardLink = styled.a<HeadlineOverrides>`
  text-decoration: none;
  border: none;

  ${getStylePreset('', 'kicker', {
    nestedCssSelector: '.nk-headline-kicker',
  })}

  ${getStylePreset('', 'heading', {
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
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getSpacingInset('card.actionsContainer', 'actionsContainer')}
  ${getStylePreset('card.actionsContainer', 'actionsContainer')}
  min-height: ${getMinHeight('card.actionsContainer', 'actionsContainer')};

  position: relative;
  z-index: 2;

  /* Needed for IE min-height with flex bug: https://github.com/philipwalton/flexbugs/issues/231 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    height: 0px;
  }
`;
