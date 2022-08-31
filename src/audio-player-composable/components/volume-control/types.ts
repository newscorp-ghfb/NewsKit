import {ButtonSize} from '../../../button/types';
import {NewsKitIconProps} from '../../../icons';
import {PopoverProps} from '../../../popover';
import {SliderOverrideProps} from '../../../slider';
import {TransitionToken} from '../../../theme';
import {MQ} from '../../../utils';
import {Override} from '../../../utils/overrides';

export type MuteButtonIconProps = NewsKitIconProps &
  Pick<MuteButtonProps, 'volume'>;
export interface AudioPlayerVolumeControlOverridesProps {
  stylePreset?: MQ<string>;
  transitionPreset?: TransitionToken | TransitionToken[];
  spaceBetween?: MQ<string>;
  slider?: Omit<SliderOverrideProps, 'track'> & {
    track?: {
      stylePreset?: MQ<string>;
      size?: string;
      length?: string;
    };
  };
  button?: {
    stylePreset?: MQ<string>;
    muteButtonIcon: Override<MuteButtonIconProps>;
  };
  popover?: PopoverProps['overrides'];
}

export interface AudioPlayerVolumeControlProps {
  layout?: 'collapsed' | 'vertical' | 'horizontal' | 'horizontal-expanded';
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
    muteButtonIcon: Override<MuteButtonIconProps>;
  };
}
