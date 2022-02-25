import React, {useContext} from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize, ButtonProps} from '../../button/types';
import {AudioPlayerContext} from '../context';

export interface UserPlayPauseButtonProps {
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}

export const UserPlayPauseButton: React.FC<UserPlayPauseButtonProps> = React.memo(
  ({onClick, ...props}) => {
    const {getPlayPauseButtonProps} = useContext(AudioPlayerContext);

    const {playStateIcon, ...playPauseButtonProps} =
      getPlayPauseButtonProps! && getPlayPauseButtonProps();

    return (
      <IconButton
        {...props}
        {...playPauseButtonProps}
        data-testid="audio-player-play-pause-button"
        size={ButtonSize.Large}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
