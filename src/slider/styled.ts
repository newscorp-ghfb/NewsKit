import {CursorProperty} from 'csstype';
import {
  styled,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getColorFromTheme,
  getBorderFromTheme,
  ThemeProp,
} from '../utils/style';
import {TrackProps, SliderProps} from './types';
import {SizingKeys} from '../themes';

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
  Pick<SliderProps, 'values' | 'min' | 'max' | 'vertical'>;

export const StyledInnerTrack = styled.div<InnerTrackProps>`
  border-radius: ${getSizingFromTheme('sizing030')};
  height: ${({theme, vertical}) =>
    vertical ? '100%' : theme.sizing.sizing030};
  width: ${({theme, vertical}) => (vertical ? theme.sizing.sizing030 : '100%')};
  align-self: center;
  cursor: ${getCursor};
`;

//
// Thumb
//

export const StyledThumb = styled.div<Pick<TrackProps, 'disabled'>>`
  height: ${getSizingFromTheme('sizing060')};
  width: ${getSizingFromTheme('sizing060')};
  border-radius: ${getSizingFromTheme('sizing060')};
  background-color: ${getColorFromTheme('interface010')};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-style: solid;
  border-width: ${getBorderFromTheme('borderWidth010')};
  border-color: ${getColorFromTheme('interactive010')};
  cursor: ${getCursor};
`;

export const StyledThumbValue = styled.div<VerticalProp>`
  ${getTypePresetFromTheme('caption010')};
  position: absolute;
  ${({theme, vertical}) =>
    vertical
      ? `right: -${theme.sizing.sizing070};`
      : `top: -${theme.sizing.sizing060};`}
  background-color: transparent;
  white-space: nowrap;
`;

//
// Slider Label
//

export const StyledSliderLabel = styled.div<
  VerticalProp & ({labelType: 'min' | 'max'})
>`
  ${getTypePresetFromTheme('caption010')};
  display: inline-flex;
  ${({theme, vertical, labelType}) => {
    if (labelType === 'min') {
      return vertical
        ? `padding-top: ${theme.sizing.sizing020};`
        : `padding-right: ${theme.sizing.sizing020};`;
    }
    /* istanbul ignore else */
    if (labelType === 'max') {
      return vertical
        ? `padding-bottom: ${theme.sizing.sizing020};`
        : `padding-left: ${theme.sizing.sizing020};`;
    }
    /* istanbul ignore next */
    return '';
  }}
`;
