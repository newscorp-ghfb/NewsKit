/* eslint-disable import/no-extraneous-dependencies */
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
import {NewsKitIconProps} from '../icons';
import {BreakpointKeys} from '../theme/types';
import {Override} from '../utils/overrides';
import {LogicalMarginProps} from '../utils/logical-properties';

type LoadingType = 'lazy' | 'eager';

export interface ImageCommonProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
  loadingAspectRatio?: MQ<string>;
  overrides?: {
    height?: MQ<HeightProperty<string>>;
    width?: MQ<WidthProperty<string>>;
  } & LogicalMarginProps;
}

interface ImageAlignmentProps {
  fit?: ObjectFitProperty;
  position?: ObjectPositionProperty<string>;
}
export interface StyledImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    ImageAlignmentProps,
    ImageCommonProps {
  loading?: LoadingType;
  overrides?: {
    maxHeight?: MQ<MaxHeightProperty<string>>;
    maxWidth?: MQ<MaxWidthProperty<string>>;
  } & ImageCommonProps['overrides'];
}
export interface StyledPictureProps extends ImageCommonProps {
  overrides?: {
    stylePreset?: MQ<string>;
  } & ImageCommonProps['overrides'];
}
export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    ImageAlignmentProps {
  placeholderIcon?: boolean;
  loadingAspectRatio?: MQ<string>;
  renderOnServer?: boolean;
  loading?: LoadingType;
  sources?: ImageSource[];
  overrides?: {
    maxHeight?: MQ<MaxHeightProperty<string>>;
    maxWidth?: MQ<MaxWidthProperty<string>>;
    stylePreset?: MQ<string>;
    placeholderIcon?: Override<NewsKitIconProps>;
  } & ImageCommonProps['overrides'];
}

export interface ImageSource
  extends Omit<React.SourceHTMLAttributes<HTMLSourceElement>, 'media'> {
  media?: BreakpointKeys | string;
}
