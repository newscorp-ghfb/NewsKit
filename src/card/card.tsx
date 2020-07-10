import React from 'react';
import {CardProps} from './types';
import {styled} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {Image, ImageProps} from '../image';

const StyledCard = styled.div<CardProps>`
  ${getStylePreset('card')}
`;
const StyledCardMedia = styled.a`
  ${getStylePreset('card.media', 'media')}
`;

const renderMedia = (
  media: ImageProps | React.ComponentType,
  overrides = {},
) => {
  if (typeof media === 'function') {
    return React.createElement(media as React.ComponentType);
  }

  return (
    <Image
      loadingAspectRatio="3:2"
      {...(media as ImageProps)}
      overrides={overrides}
    />
  );
};

export const Card: React.FC<CardProps> = ({
  media,
  href = '#',
  overrides = {},
}) => (
  <StyledCard overrides={overrides}>
    <StyledCardMedia href={href}>
      {media && renderMedia(media, overrides.media)}
    </StyledCardMedia>
  </StyledCard>
);

Card.displayName = 'Card';
