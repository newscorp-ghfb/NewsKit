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
    layout === 'horizontalExpandable' &&
    getTransitionPreset('audioPlayerVolumeControl', '', 'nk-vc')};

  ${({layout, visible}) =>
    layout === 'horizontalExpandable' && !visible ? 'overflow:hidden;' : ''};

  ${({open, layout}) =>
    getResponsiveSize(
      value => (!open || layout === 'vertical' ? {width: 0} : {width: value}),
      `audioPlayerVolumeControl.slider.track`,
      `slider.track`,
      'length',
    )}
  ${({layout}) =>
    layout === 'horizontal' &&
    getResponsiveSpace(
      'width',
      'audioPlayerVolumeControl.slider.track.length',
      '',
      'width',
    )};
  ${({layout}) =>
    layout === 'vertical' &&
    getResponsiveSpace(
      'height',
      'audioPlayerVolumeControl.slider.track.length',
      '',
      'height',
    )};

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
      `audioPlayerVolumeControl.spaceBetween`,
      '',
      'spaceBetween',
    )};
`;

export const VolumeControlContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout'>
>``;
