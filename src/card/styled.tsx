import {CardProps} from './types';
import {styled, getPaddingPreset, getMinHeight} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {Stack} from '../stack';

export const StyledCard = styled.div<CardProps>`
  ${getStylePreset('card')}
`;
export const StyledCardMedia = styled.a`
  ${getStylePreset('card.media', 'media')}
`;

export const StyledCardContentAndActions = styled.div<
  Pick<CardProps, 'overrides'>
>``;
export const StyledCardActionsContainer = styled(Stack)<
  Pick<CardProps, 'overrides'>
>`
  box-sizing: border-box;
  ${getPaddingPreset('card.actionsContainer', 'actionsContainer')}
  ${getStylePreset('card.actionsContainer', 'actionsContainer')}
  min-height: ${getMinHeight('card.actionsContainer', 'actionContainer')}
`;
