import {StyledComponent} from '@emotion/styled';
import {styled, ColorKeys, SizingKeys, Theme} from 'newskit';
import {build} from './style-builder';
import {LegacyBlockProps} from './types';

const getStyleFromProps = (props: LegacyBlockProps & {theme: Theme}) => {
  const {breakpoints, colors, typePresets, sizing} = props.theme;

  const getColor = (color: ColorKeys | string) =>
    colors[color as ColorKeys] || color;

  const getSize = (size: SizingKeys | string) =>
    sizing[size as SizingKeys] || size;

  return build(breakpoints)
    .apply({
      property: 'color',
      value: props.$color,
      transform: getColor,
    })
    .apply({
      property: 'backgroundColor',
      value: props.$backgroundColor,
      transform: getColor,
    })
    .apply({
      property: 'fontFamily',
      value: props.$font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typePresets[font] && (typePresets[font] as any).fontFamily,
    })
    .apply({
      property: 'fontWeight',
      value: props.$font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typePresets[font] && (typePresets[font] as any).fontWeight,
    })
    .apply({
      property: 'fontSize',
      value: props.$font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typePresets[font] && (typePresets[font] as any).fontSize,
    })
    .apply({
      property: 'lineHeight',
      value: props.$font,
      transform: font =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typePresets[font] && (typePresets[font] as any).lineHeight,
    })
    .apply({
      property: 'border',
      value: props.$border,
    })
    .apply({
      property: 'borderTop',
      value: props.$borderTop,
    })
    .apply({
      property: 'borderRight',
      value: props.$borderRight,
    })
    .apply({
      property: 'borderBottom',
      value: props.$borderBottom,
    })
    .apply({
      property: 'borderLeft',
      value: props.$borderLeft,
    })
    .apply({
      property: 'borderStyle',
      value: props.$borderStyle,
    })
    .apply({
      property: 'borderWidth',
      value: props.$borderWidth,
      transform: getSize,
    })
    .apply({
      property: 'borderColor',
      value: props.$borderColor,
      transform: getColor,
    })
    .apply({
      property: 'margin',
      value: props.$margin,
      transform: getSize,
    })
    .apply({
      property: 'marginTop',
      value: props.$marginTop,
      transform: getSize,
    })
    .apply({
      property: 'marginRight',
      value: props.$marginRight,
      transform: getSize,
    })
    .apply({
      property: 'marginBottom',
      value: props.$marginBottom,
      transform: getSize,
    })
    .apply({
      property: 'marginLeft',
      value: props.$marginLeft,
      transform: getSize,
    })
    .apply({
      property: 'padding',
      value: props.$padding,
      transform: getSize,
    })
    .apply({
      property: 'paddingTop',
      value: props.$paddingTop,
      transform: getSize,
    })
    .apply({
      property: 'paddingRight',
      value: props.$paddingRight,
      transform: getSize,
    })
    .apply({
      property: 'paddingBottom',
      value: props.$paddingBottom,
      transform: getSize,
    })
    .apply({
      property: 'paddingLeft',
      value: props.$paddingLeft,
      transform: getSize,
    })
    .apply({
      property: 'width',
      value: props.$width,
      transform: width => getSize(width as SizingKeys),
    })
    .apply({
      property: 'height',
      value: props.$height,
      transform: height => getSize(height as SizingKeys),
    })
    .apply({
      property: 'maxWidth',
      value: props.$maxWidth,
      transform: maxWidth => getSize(maxWidth as SizingKeys),
    })
    .apply({
      property: 'maxHeight',
      value: props.$maxHeight,
      transform: maxHeight => getSize(maxHeight as SizingKeys),
    })
    .apply({
      property: 'minWidth',
      value: props.$minWidth,
      transform: minWidth => getSize(minWidth as SizingKeys),
    })
    .apply({
      property: 'minHeight',
      value: props.$minHeight,
      transform: minHeight => getSize(minHeight as SizingKeys),
    })
    .apply({
      property: 'display',
      value: props.$display,
    })
    .apply({
      property: 'flexWrap',
      value: props.$flexWrap,
      transform: flexWrap => (flexWrap ? 'wrap' : undefined),
    })
    .apply({
      property: 'flexDirection',
      value: props.$flexDirection,
    })
    .apply({
      property: 'flexGrow',
      value: props.$flexGrow,
    })
    .apply({
      property: 'justifyContent',
      value: props.$justifyContent,
    })
    .apply({
      property: 'alignItems',
      value: props.$alignItems,
    })
    .apply({
      property: 'alignSelf',
      value: props.$alignSelf,
    })
    .apply({
      property: 'position',
      value: props.$position,
    })
    .apply({
      property: 'top',
      value: props.$top,
    })
    .apply({
      property: 'right',
      value: props.$right,
    })
    .apply({
      property: 'bottom',
      value: props.$bottom,
    })
    .apply({
      property: 'left',
      value: props.$left,
    })
    .apply({
      property: 'overflow',
      value: props.$overflow,
      transform: overflow => {
        if (overflow !== 'scrollX' && overflow !== 'scrollY') {
          return overflow as string;
        }
        return undefined;
      },
    })
    .value();
};

export const LegacyBlock = (styled.div(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getStyleFromProps as any,
) as unknown) as StyledComponent<LegacyBlockProps, {}, Theme>;
