import {CursorProperty} from 'csstype';
import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  ThemeProp,
} from '../utils/style';
import {
  StyledTrackProps,
  SliderProps,
  ThumbLabelProps,
  LabelPosition,
} from './types';
import {SizingKeys} from '../themes';
import {Stack, StackProps} from '../stack';
import {getStylePresetFromTheme} from '../utils/style-preset';

export const trackStylePresetDefault = 'sliderTrack';
export const indicatorStylePresetDefault = 'sliderIndicatorTrack';
const thumbStylePresetDefault = 'sliderThumb';
const labelStylePresetDefault = 'sliderLabels';
const thumbSizeDefault: SizingKeys = 'sizing060';
const trackSizeDefault: SizingKeys = 'sizing030';
const labelStackSpaceDefault: SizingKeys = 'sizing030';

//
// Utils
//

type VerticalProp = Pick<SliderProps, 'vertical'> & StackProps;
const ifVertical = (value?: string, elseValue?: string) => ({
  vertical,
  theme,
}: VerticalProp & ThemeProp) => {
  const maybeToken = vertical ? value : elseValue;
  return theme.sizing[maybeToken as SizingKeys] || maybeToken;
};

type CursorProps = Pick<StyledTrackProps, 'disabled' | 'isDragged' | 'values'>;
const getCursor = ({
  disabled,
  isDragged,
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
  Pick<SliderProps, 'labelPosition' | '$labelStackSpace' | '$thumbSize'> &
    VerticalProp
>`
  width: 100%;
  height: ${ifVertical('100%')};

  margin-top: ${({labelPosition, vertical}) =>
    !vertical && labelPosition === LabelPosition.After
      ? getSizingFromTheme(labelStackSpaceDefault, '$labelStackSpace')
      : undefined};
  margin-bottom: ${({labelPosition, vertical}) =>
    !vertical && labelPosition === LabelPosition.Before
      ? getSizingFromTheme(labelStackSpaceDefault, '$labelStackSpace')
      : undefined};

  margin-left: ${({labelPosition, vertical}) =>
    vertical && labelPosition === LabelPosition.After
      ? getSizingFromTheme(labelStackSpaceDefault, '$labelStackSpace')
      : undefined};
  margin-right: ${({labelPosition, vertical}) =>
    vertical && labelPosition === LabelPosition.Before
      ? getSizingFromTheme(labelStackSpaceDefault, '$labelStackSpace')
      : undefined};

  padding: ${({theme, $thumbSize = thumbSizeDefault, vertical}) => {
    const padding = `calc(${theme.sizing[$thumbSize]} / 2)`;
    return `${vertical ? padding : '0'} ${vertical ? '0' : padding}`;
  }};
`;

//
// Track
//

export const StyledTrack = styled.div<StyledTrackProps>`
  display: flex;
  cursor: ${getCursor};
  align-self: center;
  box-sizing: border-box;

  ${({disabled, $trackSize = trackSizeDefault}) =>
    getStylePresetFromTheme(trackStylePresetDefault, '$stylePreset', {
      isDisabled: disabled,
      borderRadiusSize: $trackSize,
      filterStates: ['base', 'disabled'],
    })}

  ${({
    theme,
    vertical,
    $thumbSize = thumbSizeDefault,
    $trackSize = trackSizeDefault,
  }) => {
    const halfThumb = `${theme.sizing[$thumbSize]}/2`;
    const halfTrack = `${theme.sizing[$trackSize]}/2`;
    const trackMargin = `${halfThumb} - ${halfTrack}`;
    return vertical
      ? `margin: calc(${halfThumb}) calc(${trackMargin});`
      : `margin: calc(${trackMargin}) calc(${halfThumb});`;
  }};

  height: ${({theme, vertical, $trackSize = trackSizeDefault}) =>
    vertical ? '100%' : theme.sizing[$trackSize]};
  width: ${({theme, vertical, $trackSize = trackSizeDefault}) =>
    vertical ? theme.sizing[$trackSize] : '100%'};
`;

//
// Thumb
//

type StyledThumbProps = VerticalProp &
  Pick<ThumbLabelProps, '$stylePreset' | '$thumbSize' | 'disabled'> &
  CursorProps;

export const StyledThumb = styled.div<StyledThumbProps>`
  ${({disabled, $thumbSize = thumbSizeDefault}) =>
    getStylePresetFromTheme(thumbStylePresetDefault, '$stylePreset', {
      isDisabled: disabled,
      borderRadiusSize: $thumbSize,
    })}

  height: ${getSizingFromTheme(thumbSizeDefault, '$thumbSize')};
  width: ${getSizingFromTheme(thumbSizeDefault, '$thumbSize')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${getCursor};
`;

type StyledThumbValueProps = VerticalProp &
  Pick<SliderProps, 'disabled'> &
  Pick<ThumbLabelProps, '$stylePreset' | '$thumbSize'>;

export const StyledThumbValue = styled.div<StyledThumbValueProps>`
  ${getTypePresetFromTheme('caption010')};

  ${({disabled, $thumbSize = thumbSizeDefault}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$stylePreset', {
      isDisabled: disabled,
      borderRadiusSize: $thumbSize,
      omitStates: ['focus', 'hover'],
    })};

  ${({theme, vertical}) =>
    vertical
      ? `right: -${theme.sizing.sizing070};`
      : `top: -${theme.sizing.sizing060};`}

  position: absolute;
  background-color: transparent;
  white-space: nowrap;
  width: 100%;
  text-align: center;
`;

//
// Slider Label
//

interface StyledSliderLabelProps
  extends Pick<SliderProps, 'vertical' | 'disabled' | 'labelPosition'>,
    Pick<ThumbLabelProps, '$stylePreset' | '$thumbSize'> {
  labelType: 'min' | 'max';
}

const getLabelMargin = ({
  theme,
  vertical,
  labelType,
  labelPosition,
}: StyledSliderLabelProps & ThemeProp) => {
  if (labelPosition !== LabelPosition.Inline) {
    return '';
  }
  const marginAmount = theme.sizing.sizing020;

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
  ${getTypePresetFromTheme('caption010')};

  ${({disabled}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$stylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing020',
      filterStates: ['base', 'disabled'],
    })};

  ${getLabelMargin}
`;
