import {GridLayout} from '../../../grid-layout';
import {
  getResponsiveSize,
  getStylePreset,
  styled,
  getResponsiveSpace,
} from '../../../utils/style';
import {AudioPlayerVolumeControlProps} from './types';

export const StyledVolumeSliderContainer = styled.div<
  Pick<AudioPlayerVolumeControlProps, 'layout'>
>`
  ${({layout}) =>
    getResponsiveSize(
      layout === 'vertical' ? 'height' : 'width',
      `audioPlayerVolumeControl.${layout}.slider.track`,
      `${layout}.slider.track`,
      'length',
    )}
`;

export const StyledGridLayout = styled(GridLayout)<
  Pick<AudioPlayerVolumeControlProps, 'layout' | 'overrides' | 'collapsed'>
>`
  ${({layout, collapsed}) =>
    !collapsed && getStylePreset(`audioPlayerVolumeControl.${layout}`, '')};
  ${({layout}) =>
    layout === 'vertical' &&
    `
    position: relative;
  `};
  ${({layout}) =>
    getResponsiveSpace(
      layout === 'vertical' ? 'rowGap' : 'columnGap',
      `audioPlayerVolumeControl.${layout}.spaceBetween`,
      `${layout}.spaceBetween`,
      'spaceBetween',
    )};
`;
