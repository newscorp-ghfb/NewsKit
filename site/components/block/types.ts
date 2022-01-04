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
import {ColorKeys, TypePresetKeys, SizingKeys, Responsive} from 'newskit';

export interface BlockProps {
  as?: React.ElementType;
  $color?: Responsive<ColorKeys | ColorProperty>;
  $backgroundColor?: Responsive<ColorKeys | ColorProperty>;
  $font?: Responsive<TypePresetKeys>;
  $border?: Responsive<SizingKeys | string>;
  $borderTop?: Responsive<SizingKeys | string>;
  $borderRight?: Responsive<SizingKeys | string>;
  $borderBottom?: Responsive<SizingKeys | string>;
  $borderLeft?: Responsive<SizingKeys | string>;
  $borderStyle?: Responsive<BorderStyleProperty>;
  $borderWidth?: Responsive<SizingKeys | string>;
  $borderColor?: Responsive<ColorKeys | ColorProperty>;
  $margin?: Responsive<SizingKeys | string>;
  $marginTop?: Responsive<SizingKeys | string>;
  $marginRight?: Responsive<SizingKeys | string>;
  $marginBottom?: Responsive<SizingKeys | string>;
  $marginLeft?: Responsive<SizingKeys | string>;
  $padding?: Responsive<SizingKeys | string>;
  $paddingTop?: Responsive<SizingKeys | string>;
  $paddingRight?: Responsive<SizingKeys | string>;
  $paddingBottom?: Responsive<SizingKeys | string>;
  $paddingLeft?: Responsive<SizingKeys | string>;
  $width?: Responsive<SizingKeys | string>;
  $height?: Responsive<SizingKeys | string>;
  $maxWidth?: Responsive<SizingKeys | string>;
  $maxHeight?: Responsive<SizingKeys | string>;
  $minWidth?: Responsive<SizingKeys | string>;
  $minHeight?: Responsive<SizingKeys | string>;
  $display?: Responsive<DisplayProperty>;
  $flexWrap?: Responsive<boolean>;
  $flexDirection?: Responsive<FlexDirectionProperty>;
  $flexGrow?: Responsive<number>;
  $justifyContent?: Responsive<JustifyContentProperty>;
  $alignItems?: Responsive<AlignItemsProperty>;
  $alignSelf?: Responsive<AlignSelfProperty>;
  $position?: Responsive<PositionProperty>;
  $top?: Responsive<SizingKeys | string>;
  $right?: Responsive<SizingKeys | string>;
  $bottom?: Responsive<SizingKeys | string>;
  $left?: Responsive<SizingKeys | string>;
  $overflow?: OverflowProperty;
}
