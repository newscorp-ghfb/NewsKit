import {
  MaxHeightProperty,
  MaxWidthProperty,
  PaddingTopProperty,
  HeightProperty,
  WidthProperty,
} from 'csstype';
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

export interface AspectRatioProps
  extends GetAspectRatioProp,
    Omit<ContainerProp, 'paddingTop'> {}
