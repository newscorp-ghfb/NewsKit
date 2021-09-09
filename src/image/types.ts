import React from 'react';
import {
  ObjectFitProperty,
  HeightProperty,
  WidthProperty,
  MaxHeightProperty,
  MaxWidthProperty,
  ObjectPositionProperty,
} from 'csstype';
import {MQ} from '../utils/style';
import {CaptionOverrides} from '../caption';
import {NewsKitIcon} from '../icons';

type LoadingType = 'lazy' | 'eager';

interface HTMLImageElementWithNoSizes
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'> {}

export type ImageCommonProps = {
  isLoading?: boolean;
  loadingAspectRatio?: MQ<string>;
  overrides?: {
    height?: MQ<HeightProperty<string>>;
    width?: MQ<WidthProperty<string>>;
  };
};

interface ImageAlignmentProps {
  fit?: ObjectFitProperty;
  position?: ObjectPositionProperty<string>;
}
export interface StyledImageProps
  extends HTMLImageElementWithNoSizes,
    ImageAlignmentProps,
    ImageCommonProps {
  loading?: LoadingType;
  overrides?: {
    maxHeight?: MQ<MaxHeightProperty<string>>;
    maxWidth?: MQ<MaxWidthProperty<string>>;
  } & ImageCommonProps['overrides'];
}
export interface StyledImageContainerProps extends ImageCommonProps {
  overrides?: {
    stylePreset?: MQ<string>;
  } & ImageCommonProps['overrides'];
}
export interface ImageProps
  extends HTMLImageElementWithNoSizes,
    ImageAlignmentProps {
  placeholderIcon?: boolean;
  loadingAspectRatio?: MQ<string>;
  captionText?: string;
  creditText?: string;
  renderOnServer?: boolean;
  loading?: LoadingType;
  sources?: ImageSource[];
  overrides?: {
    maxHeight?: MQ<MaxHeightProperty<string>>;
    maxWidth?: MQ<MaxWidthProperty<string>>;
    stylePreset?: MQ<string>;
    caption?: CaptionOverrides;
    placeholderIcon?: NewsKitIcon;
  } & ImageCommonProps['overrides'];
}

export interface ImageSource
  extends Omit<React.SourceHTMLAttributes<HTMLSourceElement>, 'media'> {
  media?: BreakpointKeys | string;
}
