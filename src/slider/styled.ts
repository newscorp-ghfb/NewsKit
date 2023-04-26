/* eslint-disable import/no-extraneous-dependencies */
import {CursorProperty} from 'csstype';
import {
  styled,
  getTypographyPreset,
  getSize,
  getSpace,
  getStylePreset,
  getResponsiveSize,
  getTransitionPreset,
} from '../utils/style';
import {StyledTrackProps, SliderProps, ThumbLabelProps} from './types';
import {Stack, StackProps} from '../stack';

import {ThemeProp} from '../utils/style-types';

//
// Utils
//

type VerticalProp = Pick<SliderProps, 'vertical'> & Partial<StackProps>;
const ifVertical = (value?: string, elseValue?: string) => ({
  vertical,
  theme,
}: VerticalProp & ThemeProp) => {
  const maybeToken = vertical ? value : elseValue;
  return theme.sizing[maybeToken as string] || maybeToken;
};

type CursorProps = Pick<StyledTrackProps, 'disabled' | 'dragged' | 'values'>;
const getCursor = ({
  disabled,
  dragged: isDragged,
  values,
}: CursorProps): CursorProperty => {
  switch (true) {
    case disabled:
      return 'not-allowed';
    case isDragged:
      return 'grabbing';
    case values && values.length < 2:
      return 'pointer';
    default:
      return 'inherit';
  }
};

//
// Containers
//

export const StackContainer = styled(Stack)<VerticalProp>`
  width: ${ifVertical(undefined, '100%')};
  position: relative;
`;

export const LabelContainer = styled.div<
  Pick<SliderProps, 'labelPosition' | 'overrides'> & VerticalProp
>`
  width: ${ifVertical(undefined, '100%')};
  margin-top: ${({labelPosition, vertical}) =>
    !vertical && labelPosition === 'after'
      ? getSpace('slider.labels', 'labels')
      : undefined};
  margin-bottom: ${({labelPosition, vertical}) =>
    !vertical && labelPosition === 'before'
      ? getSpace('slider.labels', 'labels')
      : undefined};

  margin-left: ${({labelPosition, vertical}) =>
    vertical && labelPosition === 'after'
      ? getSpace('slider.labels', 'labels')
      : undefined};
  margin-right: ${({labelPosition, vertical}) =>
    vertical && labelPosition === 'before'
      ? getSpace('slider.labels', 'labels')
      : undefined};

  padding: ${({vertical, ...rest}) => {
    const padding = `calc(${getSize('slider.thumb', 'thumb')({...rest})} / 2)`;
    return `${vertical ? padding : '0'} ${vertical ? '0' : padding}`;
  }};
`;

//
// Track
//

export const StyledTrack = styled.div<StyledTrackProps>`
  display: flex;
  cursor: ${getCursor};
  box-sizing: border-box;
  ${({labelPosition}) => labelPosition === 'inline' && {alignSelf: 'center'}}

  ${({disabled}) =>
    getStylePreset('slider.track', 'track', {
      isDisabled: disabled,
      filterStates: ['base', 'disabled'],
    })}

  ${({vertical, ...rest}) => {
    const thumbSize = getSize('slider.thumb', 'thumb')({...rest});
    const trackSize = getSize('slider.track', 'track')({...rest});
    const halfThumb = `${thumbSize}/2`;
    const halfTrack = `${trackSize}/2`;
    const trackMargin = `${halfThumb} - ${halfTrack}`;
    return vertical
      ? `margin: calc(${halfThumb}) calc(${trackMargin});`
      : `margin: calc(${trackMargin}) calc(${halfThumb});`;
  }};

  ${({vertical, labelPosition, ...rest}) => {
    if (!vertical) {
      return {height: getSize('slider.track', 'track')(rest)};
    }
    /* istanbul ignore else */
    if (labelPosition === 'inline') {
      return {height: '100%'};
    }
    /* istanbul ignore next */
    return '';
  }}

  width: ${({vertical}) =>
    vertical ? getSize('slider.track', 'track') : '100%'};
`;

//
// Thumb
//

type StyledThumbProps = VerticalProp &
  Pick<ThumbLabelProps, 'disabled' | 'overrides'> &
  CursorProps;

export const StyledThumb = styled.div<StyledThumbProps>`
  ${({disabled}) =>
    getStylePreset('slider.thumb', 'thumb', {
      isDisabled: disabled,
    })}
  height: ${getSize('slider.thumb', 'thumb')};
  width: ${getSize('slider.thumb', 'thumb')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${getCursor};
`;

export const StyledThumbFeedback = styled.span<
  Pick<StyledThumbProps, 'disabled' | 'overrides'>
>`
  position: absolute;
  top: 50%;
  left: 50%;
  ${({disabled}) =>
    getStylePreset('slider.feedback', 'feedback', {
      isDisabled: disabled,
    })}
  ${getResponsiveSize(
    rectSize => ({
      width: rectSize,
      height: rectSize,
      transform: `translate3d(calc(${rectSize} / -2), calc(${rectSize} / -2), 0)`,
    }),
    `slider.feedback`,
    'feedback',
    'size',
  )};
  ${getTransitionPreset(`slider.feedback`, 'feedback')};
`;

type StyledThumbValueProps = VerticalProp &
  Pick<SliderProps, 'disabled'> &
  Pick<ThumbLabelProps, 'overrides'>;

export const StyledThumbValue = styled.div<StyledThumbValueProps>`
  ${getTypographyPreset('slider.thumbLabel', 'thumbLabel', {
    withCrop: true,
  })}

  ${({disabled}) =>
    getStylePreset('slider.thumbLabel', 'thumbLabel', {
      isDisabled: disabled,
      omitStates: ['focus', 'hover'],
    })}

  ${({vertical, ...rest}) => {
    const thumbLabelSpace = getSpace(
      'slider.thumbLabel',
      'thumbLabel',
    )({
      ...rest,
    });
    return vertical
      ? `right: -${thumbLabelSpace}; top: 8px;`
      : `top: -${thumbLabelSpace};`;
  }}

  position: absolute;
  background-color: transparent;
  width: 100%;
`;

//
// Slider Label
//

interface StyledSliderLabelProps
  extends Pick<SliderProps, 'vertical' | 'disabled' | 'labelPosition'>,
    Pick<ThumbLabelProps, 'overrides'> {
  labelType: 'min' | 'max';
  text: boolean;
}

const getLabelMargin = ({
  vertical,
  labelType,
  labelPosition,
  ...rest
}: StyledSliderLabelProps & ThemeProp) => {
  if (labelPosition !== 'inline') {
    return '';
  }
  const marginAmount = getSpace(
    'slider.labels',
    'labels',
  )({
    ...rest,
  });

  if (labelType === 'min') {
    return vertical
      ? `margin-top: ${marginAmount};`
      : `margin-right: ${marginAmount};`;
  }
  /* istanbul ignore else */
  if (labelType === 'max') {
    return vertical
      ? `margin-bottom: ${marginAmount};`
      : `margin-left: ${marginAmount};`;
  }
  /* istanbul ignore next */
  return '';
};

export const StyledSliderLabel = styled.div<StyledSliderLabelProps>`
  ${getTypographyPreset('slider.labels', 'labels', {
    withCrop: true,
  })}

  ${({text, disabled}) =>
    text &&
    getStylePreset('slider.labels', 'labels', {
      isDisabled: disabled,
      filterStates: ['base', 'disabled'],
    })}

  ${getLabelMargin}
`;
