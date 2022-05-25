import {ButtonSize} from '../../../button';
import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export interface VolumeControlOverridesPropsComposable {
  slider?: SliderOverrideProps;
  button?: {
    stylePreset?: MQ<string>;
    iconSize?: string;
    size?: ButtonSize;
  };
}

export interface AudioPlayerVolumeControlProps {
  initialVolume?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
  vertical?: boolean;
  collapsed?: boolean;
  overrides?: VolumeControlOverridesPropsComposable;
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