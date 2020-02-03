import {CursorProperty} from 'csstype';
import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  ThemeProp,
} from '../utils/style';
import {TrackProps, SliderProps} from './types';
import {SizingKeys} from '../themes';
import {getStylePresetFromTheme} from '../utils/style-preset';

export const trackStylePresetDefault = 'interactive030';
export const indicatorStylePresetDefault = 'interactive010';
const thumbStylePresetDefault = 'interactive020';
const labelStylePresetDefault = 'interactive010Inverse';

type CursorProps = Pick<TrackProps, 'disabled'>;

type VerticalProp = Pick<SliderProps, 'vertical'>;
const ifVertical = (value?: string, elseValue?: string) => ({
  vertical,
  theme,
}: VerticalProp & ThemeProp) => {
  const maybeToken = vertical ? value : elseValue;
  return theme.sizing[maybeToken as SizingKeys] || maybeToken;
};

export const StyledContainer = styled.div<VerticalProp>`
  display: inline-flex;
  width: ${ifVertical('sizing060', '100%')};
  height: ${ifVertical('100%', 'sizing060')};
  align-items: center;
  position: relative;
  flex-direction: ${ifVertical('column-reverse')};
`;

const getCursor = ({disabled}: CursorProps): CursorProperty =>
  disabled ? 'not-allowed' : 'inherit';

//
// Track
//

const getTrackCursor = ({
  disabled,
  isDragged,
  values,
}: TrackProps): CursorProperty => {
  switch (true) {
    case disabled:
      return 'not-allowed';
    case isDragged:
      return 'grabbing';
    case values.length < 2:
      return 'pointer';
    default:
      return 'inherit';
  }
};

export const StyledTrack = styled.div<TrackProps>`
  display: flex;
  width: ${ifVertical(undefined, '100%')};
  height: ${ifVertical('100%')};
  ${({theme, vertical}) =>
    vertical
      ? `padding: ${theme.sizing.sizing040} 0;`
      : `padding: 0 ${theme.sizing.sizing040};`};
  cursor: ${getTrackCursor};
`;

//
// Inner Track
//

type InnerTrackProps = CursorProps &
  Pick<SliderProps, 'vertical' | '$trackStylePreset'>;

export const StyledInnerTrack = styled.div<InnerTrackProps>`
  ${({disabled}) =>
    getStylePresetFromTheme(trackStylePresetDefault, '$trackStylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing030',
      filterStates: ['base', 'disabled'],
    })}

  height: ${({theme, vertical}) =>
    vertical ? '100%' : theme.sizing.sizing030};
  width: ${({theme, vertical}) => (vertical ? theme.sizing.sizing030 : '100%')};
  align-self: center;
  cursor: ${getCursor};
`;

//
// Thumb
//

type StyledThumbProps = Pick<SliderProps, 'disabled' | '$thumbStylePreset'>;

export const StyledThumb = styled.div<StyledThumbProps>`
  ${({disabled}) =>
    getStylePresetFromTheme(thumbStylePresetDefault, '$thumbStylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing060',
    })}

  height: ${getSizingFromTheme('sizing060')};
  width: ${getSizingFromTheme('sizing060')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${getCursor};
`;

type StyledThumbValueProps = VerticalProp &
  Pick<SliderProps, 'disabled' | '$labelStylePreset'>;

export const StyledThumbValue = styled.div<StyledThumbValueProps>`
  ${({disabled}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$labelStylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing060',
      omitStates: ['focus', 'hover'],
    })}

  ${getTypePresetFromTheme('caption010')};
  position: absolute;
  ${({theme, vertical}) =>
    vertical
      ? `right: -${theme.sizing.sizing070};`
      : `top: -${theme.sizing.sizing060};`}
  background-color: transparent;
  white-space: nowrap;
  width: 100%;
  text-align: center;
`;

//
// Slider Label
//

interface StyledSliderLabelProps
  extends Pick<SliderProps, 'vertical' | '$labelStylePreset' | 'disabled'> {
  labelType: 'min' | 'max';
}

export const StyledSliderLabel = styled.div<StyledSliderLabelProps>`
  ${({disabled}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$labelStylePreset', {
      isDisabled: disabled,
      filterStates: ['base', 'disabled'],
    })};

  ${getTypePresetFromTheme('caption010')};
  display: inline-flex;
  ${({theme, vertical, labelType}) => {
    if (labelType === 'min') {
      return vertical
        ? `margin-top: ${theme.sizing.sizing020};`
        : `margin-right: ${theme.sizing.sizing020};`;
    }
    /* istanbul ignore else */
    if (labelType === 'max') {
      return vertical
        ? `margin-bottom: ${theme.sizing.sizing020};`
        : `margin-left: ${theme.sizing.sizing020};`;
    }
    /* istanbul ignore next */
    return '';
  }}
`;
