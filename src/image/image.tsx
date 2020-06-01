import React, {useState, useEffect, useRef, useCallback} from 'react';
import dequal from 'dequal';
import {Placeholder} from '../icons';
import {ImageProps, GetDimensionsProp} from './types';
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

const getUnit = (value: number, prop?: string) =>
  (prop && prop.replace(value.toString(), '')) || 'px';

const getDimensions = ({
  loadingAspectRatio,
  height: $height,
  width: $width,
}: GetDimensionsProp) => {
  const widthVal = parseFloat($width!);
  const heightVal = parseFloat($height!);
  if (!Number.isNaN(widthVal) && !Number.isNaN(heightVal)) {
    return {
      paddingTop: `${((widthVal / heightVal) * 100).toFixed(2)}%`,
      $height: `${heightVal}${getUnit(heightVal, $height)}`,
      $width: `${widthVal}${getUnit(widthVal, $width)}`,
    };
  }
  if (loadingAspectRatio && loadingAspectRatio.includes(':')) {
    const [x, y] = loadingAspectRatio.split(':').map(parseFloat);
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      const paddingTop = `${((x / y) * 100).toFixed(2)}%`;
      if (!Number.isNaN(widthVal)) {
        return {
          paddingTop,
          $width: `${widthVal}${getUnit(widthVal, $width)}`,
          $height: `${((widthVal / x) * y).toFixed(2)}${getUnit(
            widthVal,
            $width,
          )}`,
        };
      }
      if (!Number.isNaN(heightVal)) {
        return {
          paddingTop,
          $width: `${(heightVal / y) * x}${getUnit(widthVal, $width)}`,
          $height: `${heightVal}${getUnit(heightVal, $height)}`,
        };
      }
      return {paddingTop, $height, $width};
    }
  }
  return {$height, $width};
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
  const {paddingTop, ...dimensions} = getDimensions({
    loadingAspectRatio,
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
        {...dimensions}
        ref={imageRef}
        onLoad={onLoad}
        isLoading={isLoading}
      />
    </ImageContainer>
  );
};

export const Image = React.memo(ImageComponent, dequal);
