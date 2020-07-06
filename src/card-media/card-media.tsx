import React from 'react';
import {CardMediaProps} from './types';
import {Image, ImageProps} from '../image';
import {styled} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';

const StyledCardMedia = styled.div<CardMediaProps>`
  ${getStylePreset('cardMedia')}
`;

export const CardMedia: React.FC<CardMediaProps> = props => {
  const {href = '#', media, overrides = {}} = props as CardMediaProps;
  const {loadingAspectRatio = '3:2', ...rest} = media as ImageProps;

  const renderMedia = (MediaComponent: ImageProps | React.ComponentType) =>
    typeof MediaComponent === 'function' ? (
      <MediaComponent />
    ) : (
      <Image
        loadingAspectRatio={loadingAspectRatio}
        overrides={overrides}
        {...rest}
      />
    );
  return (
    <StyledCardMedia>
      <a href={href}>{media && renderMedia(media)}</a>
    </StyledCardMedia>
  );
};
CardMedia.displayName = 'CardMedia';
