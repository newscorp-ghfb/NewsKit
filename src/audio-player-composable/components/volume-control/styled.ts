import {GridLayout} from '../../../grid-layout';
import {
  getResponsiveSize,
  getStylePreset,
  styled,
  getResponsiveSpace,
} from '../../../utils/style';
import {AudioPlayerVolumeControlProps} from './types';
import {getTransitionPreset} from '../../../utils/style/transition-preset';

export const StyledVolumeSliderContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout' | 'overrides'> & {open?: boolean}
>`
  overflow: hidden;
  ${getTransitionPreset('audioPlayerVolumeControl', '', 'nk-vc')}
  ${({layout, open}) =>
    getResponsiveSize(
      value =>
        // eslint-disable-next-line no-nested-ternary
        !open
          ? {width: 0}
          : layout === 'vertical'
          ? {height: value}
          : {width: value},
      `audioPlayerVolumeControl.slider.track`,
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
  ${getStylePreset(`audioPlayerVolumeControl`, '')};
  ${({layout}) =>
    layout === 'vertical' &&
    `
    position: relative;
    
  `};

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
`;
