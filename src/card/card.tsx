import React from 'react';
import {CardProps} from './types';
import {CardMedia} from '../card-media';
import {styled} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';

const StyledCard = styled.div``;

const StyledCardMedia = styled(CardMedia)`
  ${getStylePreset('card.media', 'media')}
`;

export const Card: React.FC<CardProps> = ({media, overrides = {}}) => (
  <StyledCard>
    {media && <StyledCardMedia media={media} overrides={overrides.media} />}
  </StyledCard>
);

Card.displayName = 'Card';
