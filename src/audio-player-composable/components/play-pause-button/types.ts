import {AudioPlayerIconButtonProps} from '../../types';

export type PlayPauseButtonProps = AudioPlayerIconButtonProps & {
  keyboardShortcuts?: {
    toggle: string;
  };
};
