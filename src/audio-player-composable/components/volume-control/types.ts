import {ButtonSize} from '../../../button';
import {SliderOverrideProps} from '../../../slider';
import {MQ} from '../../../utils';

export interface AudioPlayerVolumeControlOverridesProps {
  slider?: SliderOverrideProps;
  button?: {
    stylePreset?: MQ<string>;
    iconSize?: string;
  };
}

export interface AudioPlayerVolumeControlProps {
  vertical?: boolean;
  collapsed?: boolean;
  overrides?: AudioPlayerVolumeControlOverridesProps;
  keyboardShortcuts?: {muteToggle: string | string[]};
  muteButtonSize?: ButtonSize;
}
export interface MuteButtonProps {
  volume: number;
  unMutedVolume: number;
  onChange: (volume: number) => void;
  size: ButtonSize;
  muteKeyboardShortcuts?: string[] | string;
  overrides: {
    stylePreset: MQ<string>;
    iconSize: string;
  };
}
