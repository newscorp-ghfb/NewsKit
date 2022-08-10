/* eslint-disable import/no-extraneous-dependencies */
import {
  MaxHeightProperty,
  MaxWidthProperty,
  PaddingTopProperty,
  HeightProperty,
  WidthProperty,
} from 'csstype';
import React from 'react';
import {GetAspectRatioProp} from '../utils/get-aspect-ratio';

export interface ContainerProp {
  paddingTop?: PaddingTopProperty<string>;
  maxHeight?: MaxHeightProperty<string>;
  maxWidth?: MaxWidthProperty<string>;
}

export interface StyledContainerProps {
  $height?: HeightProperty<string>;
  $width?: WidthProperty<string>;
}

/**
 * @deprecated AspectRatioProps is deprecated and will be removed in the next major release.
 */
export interface AspectRatioProps
  extends GetAspectRatioProp,
    Omit<ContainerProp, 'paddingTop'> {
  children: React.ReactNode;
}
