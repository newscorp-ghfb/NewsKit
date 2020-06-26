import React, {useState, useEffect, useRef, useCallback} from 'react';
import dequal from 'dequal';
import {Placeholder} from '../icons';
import {ImageProps} from './types';
import {getAspectRatioStyles} from '../utils/get-aspect-ratio';
import {
  ImageContainer,
  LoadingContainer,
  IconContainer,
  StyledImage,
} from './styled';

export const useClientSide = (
  render: () => boolean | void,
  imgRef: React.RefObject<HTMLImageElement>,
) => {
  useEffect(() => {
    const imageElement = imgRef.current!;
    if (imageElement && imageElement.complete) {
      render();
    }
  });
};

const ImageComponent: React.FC<ImageProps> = ({
  width,
  height,
  loadingAspectRatio,
  hideLoadingIcon,
  overrides = {},
  ...props
}) => {
  const imageRef: React.RefObject<HTMLImageElement> = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = useCallback(() => isLoading && setIsLoading(false), [
    isLoading,
    setIsLoading,
  ]);
  const {paddingTop, width: $width, height: $height} = getAspectRatioStyles({
    aspectRatio: loadingAspectRatio,
    height,
    width,
  });

  useClientSide(onLoad, imageRef);

  return (
    <ImageContainer
      isLoading={isLoading}
      paddingTop={paddingTop}
      overrides={overrides}
    >
      {isLoading && (
        <LoadingContainer>
          {!hideLoadingIcon && (
            <IconContainer>
              <Placeholder size="iconSize040" />
            </IconContainer>
          )}
        </LoadingContainer>
      )}
      <StyledImage
        {...props}
        $width={$width}
        $height={$height}
        ref={imageRef}
        onLoad={onLoad}
        isLoading={isLoading}
      />
    </ImageContainer>
  );
};

export const Image = React.memo(ImageComponent, dequal);
