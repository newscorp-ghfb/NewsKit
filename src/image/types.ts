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
    stylePreset?: MQ<string>;
  };
  isLoading: boolean;
}

export interface ImageProps extends Image, CommonProps {
  hideLoadingIcon?: boolean;
  loadingAspectRatio?: string;
  captionText?: string;
  creditText?: string;
  overrides?: {
    stylePreset?: MQ<StylePresetKeys>;
    caption?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
      spaceStack?: MQ<string>;
      spaceInset?: MQ<string>;
      credit?: {
        typographyPreset?: MQ<string>;
        stylePreset?: MQ<string>;
      };
    };
  };
}
