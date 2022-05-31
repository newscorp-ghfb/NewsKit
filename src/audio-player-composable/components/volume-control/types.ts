import {ButtonSize} from '../../../button';
import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export interface AudioPlayerVolumeControlOverridesProps {
  slider?: SliderOverrideProps;
  button?: {
    stylePreset?: MQ<string>;
    iconSize?: string;
    size?: ButtonSize;
  };
}

export interface AudioPlayerVolumeControlProps {
  vertical?: boolean;
  collapsed?: boolean;
  overrides?: AudioPlayerVolumeControlOverridesProps;
  muteKeyboardShortcuts?: string[] | string;
}

export interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: (volume: number) => void;
  volumeControlButtonStylePreset?: MQ<string>;
  iconSize: string;
  size: ButtonSize;
  muteKeyboardShortcuts?: string[] | string;
}