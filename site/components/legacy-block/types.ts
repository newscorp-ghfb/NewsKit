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
import {ColorKeys, TypographyPresetKeys, SizingKeys, Responsive} from 'newskit';

interface CommonProps {
  as?: React.ElementType;
  backgroundColor?: Responsive<ColorKeys | ColorProperty>;
  font?: Responsive<TypographyPresetKeys>;
  border?: Responsive<SizingKeys | string>;
  borderTop?: Responsive<SizingKeys | string>;
  borderRight?: Responsive<SizingKeys | string>;
  borderBottom?: Responsive<SizingKeys | string>;
  borderLeft?: Responsive<SizingKeys | string>;
  borderStyle?: Responsive<BorderStyleProperty>;
  borderWidth?: Responsive<SizingKeys | string>;
  borderColor?: Responsive<ColorKeys | ColorProperty>;
  margin?: Responsive<SizingKeys | string>;
  marginTop?: Responsive<SizingKeys | string>;
  marginRight?: Responsive<SizingKeys | string>;
  marginBottom?: Responsive<SizingKeys | string>;
  marginLeft?: Responsive<SizingKeys | string>;
  padding?: Responsive<SizingKeys | string>;
  paddingTop?: Responsive<SizingKeys | string>;
  paddingRight?: Responsive<SizingKeys | string>;
  paddingBottom?: Responsive<SizingKeys | string>;
  paddingLeft?: Responsive<SizingKeys | string>;
  maxWidth?: Responsive<SizingKeys | string>;
  maxHeight?: Responsive<SizingKeys | string>;
  minWidth?: Responsive<SizingKeys | string>;
  minHeight?: Responsive<SizingKeys | string>;
  flexWrap?: Responsive<boolean>;
  flexDirection?: Responsive<FlexDirectionProperty>;
  flexGrow?: Responsive<number>;
  justifyContent?: Responsive<JustifyContentProperty>;
  alignItems?: Responsive<AlignItemsProperty>;
  alignSelf?: Responsive<AlignSelfProperty>;
  position?: Responsive<PositionProperty>;
  top?: Responsive<SizingKeys | string>;
  right?: Responsive<SizingKeys | string>;
  bottom?: Responsive<SizingKeys | string>;
  left?: Responsive<SizingKeys | string>;
}

export interface StyledBlockProps extends CommonProps {
  $color?: Responsive<ColorKeys | ColorProperty>;
  $width?: Responsive<SizingKeys | string>;
  $height?: Responsive<SizingKeys | string>;
  $display?: Responsive<DisplayProperty>;
  $overflow?: OverflowProperty;
  $overflowY?: OverflowProperty;
  tabindex?: string;
}

export interface LegacyBlockProps extends CommonProps {
  color?: Responsive<ColorKeys | ColorProperty>;
  width?: Responsive<SizingKeys | string>;
  height?: Responsive<SizingKeys | string>;
  display?: Responsive<DisplayProperty>;
  overflow?: OverflowProperty;
  overflowY?: OverflowProperty;
}
