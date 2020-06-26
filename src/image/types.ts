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
import {MQ} from '../utils/style';
import {StylePresetKeys} from '../themes/mappers/style-preset';

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
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
  isLoading: boolean;
}

export interface ImageProps extends Image, CommonProps {
  hideLoadingIcon?: boolean;
  loadingAspectRatio?: string;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
  };
}
