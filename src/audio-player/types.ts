import {TrackControlProps, ControlsOverrideProps} from './controls';
import {SliderOverrideProps} from '../slider';
import {VolumeControlOverrideProps} from '../volume-control';
import {MQ} from '../utils/style';

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
        stylePreset?: MQ<string>;
      };
    };
    controls?: ControlsOverrideProps;
    volumeControl?: VolumeControlOverrideProps;
  };
}
