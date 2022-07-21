import {GridLayout} from '../../../grid-layout';
import {
  getResponsiveSize,
  getStylePreset,
  styled,
  getResponsiveSpace,
} from '../../../utils/style';
import {AudioPlayerVolumeControlProps} from './types';

export const StyledVolumeSliderContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout' | 'overrides'>
>`
  ${({layout}) =>
    getResponsiveSize(
      layout === 'vertical' ? 'height' : 'width',
      `audioPlayerVolumeControl.${layout}.slider.track`,
      `slider.track`,
      'length',
    )}
  ${({layout}) =>
    layout === 'horizontalCollapsed' &&
    `display: none;
    `};
`;

export const StyledGridLayout = styled(GridLayout)<
  Pick<AudioPlayerVolumeControlProps, 'layout' | 'overrides' | 'collapsed'>
>`
  ${({layout}) => getStylePreset(`audioPlayerVolumeControl.${layout}`, '')};
  ${({layout}) =>
    layout === 'vertical' &&
    `
    position: relative;
    
  `};

  ${({layout}) =>
    layout === 'horizontalExpandable' &&
    `.slider {
  width: 0;
  overflow: hidden;
  transition: 0.5s linear all;
}`};
  ${({layout}) =>
    getResponsiveSpace(
      layout === 'vertical' ? 'rowGap' : 'columnGap',
      `audioPlayerVolumeControl.${layout}.spaceBetween`,
      '',
      'spaceBetween',
    )};
`;

export const VolumeControlContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout'>
>`
  ${({layout}) =>
    layout === 'horizontal' &&
    ` display:inline;
`};
  ${({layout}) =>
    layout === 'horizontalExpandable' &&
    `&:hover .slider {
    margin-left: 8px;
    width: 100px;
    overflow: visible;
}`}
`;
