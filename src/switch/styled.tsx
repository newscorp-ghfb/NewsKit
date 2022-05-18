import {
  getResponsiveSize,
  getStylePreset,
  getTransitionPreset,
  styled,
} from '../utils';
import {SwitchProps} from './types';

export const StyledSwitchContainer = styled.div<
  Pick<SwitchProps, 'size' | 'overrides'>
>`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const StyledTrackColumn = styled.div<
  Pick<SwitchProps, 'size' | 'checked' | 'overrides'> & {
    justifyContent: 'start' | 'end';
  }
>`
  display: flex;
  width: 100%;
  ${({justifyContent}) => ({justifyContent})};

  svg {
    height: 100%;
    width: 100%;

    // Track icons should not be taller than the track or wider than the thumb
    // so that they stay within the track and can be covered by the thumb.
    ${({size}) =>
      getResponsiveSize(
        maxWidth => ({maxWidth}),
        `switch.${size}.thumb`,
        'thumb',
        'size',
      )}
    ${({size}) =>
      getResponsiveSize(
        maxHeight => ({maxHeight}),
        `switch.${size}.input`,
        'input',
        'blockSize',
      )}
  }
`;

export const StyledThumb = styled.div<
  Pick<SwitchProps, 'size' | 'checked' | 'overrides'> & {
    isFocused?: boolean;
    isHovered?: boolean;
  }
>`
  ${({size, checked: isChecked, isFocused, isHovered}) =>
    getStylePreset(`switch.${size}.thumb`, 'thumb', {
      isChecked,
      isFocused,
      isHovered,
    })}
  ${({size, checked}) =>
    getResponsiveSize(
      rectSize => ({
        width: rectSize,
        height: rectSize,
        left: checked ? `calc(100% - ${rectSize})` : '0',
      }),
      `switch.${size}.thumb`,
      'thumb',
      'size',
    )}
  ${({size}) =>
    getResponsiveSize('padding', `switch.${size}.thumb`, 'thumb', 'spaceInset')}
  position: absolute;
  aspect-ratio: 1/1;
  ${({size}) => getTransitionPreset(`switch.${size}.thumb`, 'thumb')}
  display: grid;
  place-items: center;
`;
