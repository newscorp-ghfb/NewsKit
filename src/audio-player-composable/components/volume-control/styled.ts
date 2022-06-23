import {GridLayout, GridLayoutItem} from '../../../grid-layout';
import {getResponsiveSize, styled} from '../../../utils/style';

export const VolumeSliderContainer = styled.div<{vertical?: boolean}>`
  ${({vertical}) =>
    getResponsiveSize(
      vertical ? 'height' : 'width',
      'audioPlayerVolumeControl.slider.track',
      'slider.track',
      'length',
    )}
`;

export const StyledGridLayout = styled(GridLayout)<{vertical?: boolean}>`
  ${({vertical}) =>
    vertical &&
    `
    position: relative;
  `};
`;

export const StyledGridLayoutItem = styled(GridLayoutItem)<{
  vertical?: boolean;
}>`
  ${({vertical}) =>
    vertical &&
    `position: absolute;
     bottom: 100%;`};
`;
