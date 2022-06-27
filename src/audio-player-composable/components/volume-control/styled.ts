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
  ${({vertical}) =>
    !vertical &&
    `.slider {
    width: 0;
    overflow: hidden;
    transition: 0.5s linear all;
  }`};
`;

export const StyledGridLayoutItem = styled(GridLayoutItem)<{
  vertical?: boolean;
}>`
  ${({vertical}) =>
    vertical &&
    `position: absolute;
     bottom: 100%;`};
`;

export const TestContainer = styled.div<{vertical?: boolean}>`
  ${({vertical}) =>
    !vertical &&
    `&:focus-within .slider,
    &:hover .slider {
    margin-left: 8px;
    width: 100px;
    overflow: visible;
}`}
`;
