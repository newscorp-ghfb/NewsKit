import {CardProps} from './types';
import {
  styled,
  getPaddingPreset,
  getMinHeight,
  getSpacingStack,
  getStylePreset,
} from '../utils/style';

import {Stack} from '../stack';

// TODO: remove filterStates for Card v2. v1 does not need hover/active states

export const StyledCardContainer = styled.div<Pick<CardProps, 'overrides'>>`
  box-sizing: border-box;
  ${getStylePreset('card', '', {
    filterStates: ['base'],
  })}
`;

export const StyledCardContainerMedia = styled.a<Pick<CardProps, 'overrides'>>`
  box-sizing: border-box;
  display: block;
  ${getStylePreset('card.mediaContainer', 'mediaContainer', {
    filterStates: ['base'],
  })}
  ${getSpacingStack('card.mediaContainer', 'mediaContainer')}
`;

export const StyledCardContainerTeaserAndActions = styled.div<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset(
    'card.contentAndActionsContainer',
    'contentAndActionsContainer',
    {filterStates: ['base']},
  )}
`;

export const StyledCardContainerTeaser = styled.div<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getStylePreset('card.teaserContainer', 'teaserContainer', {
    filterStates: ['base'],
  })}
  ${getPaddingPreset('card.teaserContainer', 'teaserContainer')}
`;

export const StyledCardContainerActions = styled(Stack)<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getPaddingPreset('card.actionsContainer', 'actionsContainer')}
  ${getStylePreset('card.actionsContainer', 'actionsContainer', {
    filterStates: ['base'],
  })}
  min-height: ${getMinHeight('card.actionsContainer', 'actionsContainer')};

  /* Needed for IE min-height with flex bug: https://github.com/philipwalton/flexbugs/issues/231 */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    height: 0px;
  }
`;
