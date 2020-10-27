import {Block} from '../block';
import {getStylePreset, styled} from '../utils/style';

import {StyledImageProps, ImageContainerProps} from './types';

export const StyledImageAndCaptionContainer = styled.div<
  Pick<StyledImageProps, '$width'>
>`
  ${({$width: width = '100%'}) => ({width})}
`;

export const ImageContainer = styled(Block)<ImageContainerProps>`
  position: relative;
  width: 100%;
  ${({isLoading, paddingTop = 0}) =>
    isLoading ? {paddingTop, height: 0} : {height: 'auto', paddingTop: 0}}
  ${({isLoading, ...props}) => getStylePreset('image', '', {isLoading})(props)}
`;

export const StyledImage = styled.img<StyledImageProps>`
  display: ${({isLoading}) => (isLoading ? 'none' : 'block')};
  ${({
    $height: height = 'auto',
    $width: width = '100%',
    maxHeight,
    maxWidth,
    fit: objectFit,
    position: objectPosition,
  }) => ({
    height,
    width,
    maxHeight,
    maxWidth,
    objectFit,
    objectPosition,
  })}
  animation: fadeIn 300ms;
  border-radius: inherit;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const LoadingContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;
