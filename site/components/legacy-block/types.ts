import React from 'react';
import {
  FlexDirectionProperty,
  JustifyContentProperty,
  AlignItemsProperty,
  DisplayProperty,
  OverflowProperty,
  BorderStyleProperty,
  ColorProperty,
  AlignSelfProperty,
  PositionProperty,
} from 'csstype';

export type Responsive<T> = T | T[];

interface CommonProps {
  children?: React.ReactNode;
  as?: React.ElementType;
  backgroundColor?: Responsive<string | ColorProperty>;
  font?: Responsive<string>;
  border?: Responsive<string>;
  borderTop?: Responsive<string>;
  borderRight?: Responsive<string>;
  borderBottom?: Responsive<string>;
  borderLeft?: Responsive<string>;
  borderRadius?: Responsive<string>;
  borderStyle?: Responsive<BorderStyleProperty>;
  borderWidth?: Responsive<string>;
  borderColor?: Responsive<string | ColorProperty>;
  margin?: Responsive<string>;
  marginTop?: Responsive<string>;
  marginRight?: Responsive<string>;
  marginBottom?: Responsive<string>;
  marginLeft?: Responsive<string>;
  padding?: Responsive<string>;
  paddingTop?: Responsive<string>;
  paddingRight?: Responsive<string>;
  paddingBottom?: Responsive<string>;
  paddingLeft?: Responsive<string>;
  maxWidth?: Responsive<string>;
  maxHeight?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  flexWrap?: Responsive<boolean>;
  flexDirection?: Responsive<FlexDirectionProperty>;
  flexGrow?: Responsive<number>;
  justifyContent?: Responsive<JustifyContentProperty>;
  alignItems?: Responsive<AlignItemsProperty>;
  alignSelf?: Responsive<AlignSelfProperty>;
  position?: Responsive<PositionProperty>;
  top?: Responsive<string>;
  right?: Responsive<string>;
  bottom?: Responsive<string>;
  left?: Responsive<string>;
}

export interface StyledBlockProps extends CommonProps {
  $color?: Responsive<string | ColorProperty>;
  $width?: Responsive<string>;
  $height?: Responsive<string>;
  $display?: Responsive<DisplayProperty>;
  $overflow?: OverflowProperty;
  $overflowY?: OverflowProperty;
  tabindex?: string;
}

export interface LegacyBlockProps extends CommonProps {
  color?: Responsive<string | ColorProperty>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  display?: Responsive<DisplayProperty>;
  overflow?: OverflowProperty;
  overflowY?: OverflowProperty;
}
