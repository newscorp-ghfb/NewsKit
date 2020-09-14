import {TrackControlProps, ControlsOverrideProps} from './controls';
import {SliderOverrideProps} from '../slider';
import {VolumeControlOverrideProps} from '../volume-control';
import {StylePresetKeys} from '../theme';

export interface AudioPlayerProps
  extends Omit<React.AudioHTMLAttributes<HTMLAudioElement>, 'controls'>,
    TrackControlProps {
  captionSrc?: string;
  popoutHref?: string;
  live?: boolean;
  ariaLandmark?: string;
  overrides?: {
    seekBar?: {
      slider?: SliderOverrideProps;
      buffering?: {
        stylePreset?: StylePresetKeys;
      };
    };
    controls?: ControlsOverrideProps;
    volumeControl?: VolumeControlOverrideProps;
  };
}
