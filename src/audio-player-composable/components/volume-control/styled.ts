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
  Pick<AudioPlayerVolumeControlProps, 'layout' | 'overrides'> & {
    open?: boolean;
    visible?: boolean;
  }
>`
  ${({layout}) =>
    layout === 'horizontal' &&
    getTransitionPreset('audioPlayerVolumeControl', '', 'nk-vc')};

  ${({layout, visible}) =>
    layout === 'horizontal' && !visible ? 'overflow:hidden;' : ''};

  ${({open}) =>
    getResponsiveSize(
      value => (!open ? {width: 0} : {width: value}),
      `audioPlayerVolumeControl.slider.track`,
      `slider.track`,
      'length',
    )}

  ${({layout}) =>
    layout === 'horizontal-expanded' &&
    getResponsiveSpace(
      'width',
      'audioPlayerVolumeControl.slider.track.length',
      '',
      'width',
    )};
`;
export const StyledVolumeSliderPopupContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'overrides'>
>`
  ${getResponsiveSpace(
    'height',
    'audioPlayerVolumeControl.slider.track.length',
    '',
    'height',
  )};
`;

export const StyledGridLayout = styled(GridLayout)<
  Pick<AudioPlayerVolumeControlProps, 'overrides'>
>`
  ${getStylePreset(`audioPlayerVolumeControl`, '')};
  ${getResponsiveSpace(
    'columnGap',
    `audioPlayerVolumeControl.spaceBetween`,
    '',
    'spaceBetween',
  )};
`;

export const VolumeControlContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout'>
>``;
