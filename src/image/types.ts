import {ImgHTMLAttributes} from 'react';
import {
  ObjectFitProperty,
  HeightProperty,
  WidthProperty,
  MaxHeightProperty,
  MaxWidthProperty,
  ObjectPositionProperty,
  PaddingTopProperty,
} from 'csstype';

interface Image extends ImgHTMLAttributes<HTMLImageElement> {
  height?: HeightProperty<string>;
  width?: WidthProperty<string>;
}

interface StyledImage extends Omit<Image, 'height' | 'width'> {
  $height?: HeightProperty<string>;
  $width?: WidthProperty<string>;
}

interface CommonProps {
  maxHeight?: MaxHeightProperty<string>;
  maxWidth?: MaxWidthProperty<string>;
  fit?: ObjectFitProperty;
  position?: ObjectPositionProperty<string>;
}

export interface StyledImageProps extends StyledImage, CommonProps {
  isLoading: boolean;
}

export interface ImageContainerProps {
  paddingTop?: PaddingTopProperty<number>;
  stylePreset?: string;
  isLoading: boolean;
}

export interface GetDimensionsProp extends Pick<Image, 'height' | 'width'> {
  loadingAspectRatio?: string;
}

export interface ImageProps extends Image, CommonProps {
  hideLoadingIcon?: boolean;
  loadingAspectRatio?: string;
  stylePreset?: string;
}
