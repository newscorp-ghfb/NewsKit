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

//
// Track
//

const getCursor = ({
  disabled,
  isDragged,
  values,
}: {
  disabled?: boolean;
  isDragged?: boolean;
  values?: number[];
}): CursorProperty => {
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

type StyledTrackProps = TrackProps &
  CursorProps &
  Pick<SliderProps, 'vertical' | '$trackStylePreset'>;

export const StyledTrack = styled.div<StyledTrackProps>`
  ${({disabled}) =>
    getStylePresetFromTheme(trackStylePresetDefault, '$trackStylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing030',
      filterStates: ['base', 'disabled'],
    })}

  ${({theme, vertical}) =>
    vertical
      ? `margin: ${theme.sizing.sizing040} 0;`
      : `margin: 0 ${theme.sizing.sizing040};`};

  cursor: ${getCursor};
  height: ${({theme, vertical}) =>
    vertical ? '100%' : theme.sizing.sizing030};
  width: ${({theme, vertical}) => (vertical ? theme.sizing.sizing030 : '100%')};
  align-self: center;
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
  ${getTypePresetFromTheme('caption010')};

  ${({disabled}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$labelStylePreset', {
      isDisabled: disabled,
      borderRadiusSize: 'sizing060',
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
  extends Pick<SliderProps, 'vertical' | '$labelStylePreset' | 'disabled'> {
  labelType: 'min' | 'max';
}

export const StyledSliderLabel = styled.div<StyledSliderLabelProps>`
  ${getTypePresetFromTheme('caption010')};

  ${({disabled}) =>
    getStylePresetFromTheme(labelStylePresetDefault, '$labelStylePreset', {
      isDisabled: disabled,
      filterStates: ['base', 'disabled'],
    })};

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
