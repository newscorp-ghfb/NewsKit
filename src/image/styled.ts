import {Block} from '../block';
import {getStylePresetFromTheme, styled} from '../utils/style';

import {StyledImageProps, ImageContainerProps} from './types';

export const StyledImageAndCaptionContainer = styled.div<
  Pick<StyledImageProps, '$width'>
>`
  ${({$width: width = '100%'}) => ({width})}
`;

export const ImageContainer = styled(Block)<
  Omit<ImageContainerProps, 'loading'> & {
    $loading: ImageContainerProps['loading'];
  }
>`
  position: relative;
  width: 100%;
  ${({$loading, paddingTop = 0}) =>
    $loading ? {paddingTop, height: 0} : {height: 'auto', paddingTop: 0}}
  ${({$loading, stylePreset, ...props}) =>
    getStylePresetFromTheme(stylePreset, undefined, {isLoading: $loading})(
      props,
    )}
`;

export const StyledImage = styled.img<StyledImageProps>`
  opacity: ${({$loading}) => ($loading ? '0' : '1')};
  display: block;
  border-radius: inherit;

  ${({
    $height: height = 'auto',
    $width: width = '100%',
    maxHeight,
    maxWidth,
    fit: objectFit,
    position: objectPosition,
    $loading,
  }) => ({
    height,
    width,
    maxHeight,
    maxWidth,
    objectFit,
    objectPosition,
    top: $loading ? 0 : undefined,
    left: $loading ? 0 : undefined,
    position: $loading ? 'absolute' : undefined,
    animation: !$loading ? 'fadeIn 300ms' : undefined,
  })}
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
