import {getResponsiveSize, getStylePreset, styled} from '../utils/style';
import {StyledPictureProps, StyledImageProps} from './types';
import {getResponsiveAspectRatioFromProps} from './utils';
import {logicalProps} from '../utils/logical-properties';

export const StyledPicture = styled.picture<StyledPictureProps>`
  position: relative;
  width: 100%;
  display: block;

  ${({isLoading, ...props}) =>
    getResponsiveAspectRatioFromProps(props, ({paddingTop, width, height}) => {
      if (!isLoading) {
        return {paddingTop: 0, height: 'auto', width};
      }

      return parseInt(height, 10)
        ? {width, height}
        : {paddingTop, height: 0, width};
    })}
  ${({isLoading, ...props}) => getStylePreset('image', '', {isLoading})(props)}

  ${logicalProps()}
`;

export const StyledImage = styled.img<StyledImageProps>`
  opacity: ${({isLoading}) => (isLoading ? '0' : '1')};
  display: block;
  border-radius: inherit;

  ${getResponsiveSize('maxWidth', 'image', 'maxWidth', '')}
  ${getResponsiveSize('maxHeight', 'image', 'maxHeight', '')}  
  ${props =>
    getResponsiveAspectRatioFromProps(props, ({height, width}) => ({
      height,
      width,
    }))}
  
  ${({fit: objectFit, position: objectPosition, isLoading}) => ({
    objectFit,
    objectPosition,
    top: isLoading ? 0 : undefined,
    left: isLoading ? 0 : undefined,
    position: isLoading ? 'absolute' : undefined,
    animation: !isLoading ? 'fadeIn 300ms' : undefined,
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

export const StyledLoadingContainer = styled.div`
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

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
`;
