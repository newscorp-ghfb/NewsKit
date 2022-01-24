import React, {useContext} from 'react';
import {IconButton} from '../../icon-button';
import {ButtonSize, ButtonProps} from '../../button/types';
import {AudioPlayerContext} from '../context';

export interface PlayerButtonPOCProps {
  onClick?: () => void;
  overrides?: ButtonProps['overrides'];
}

export const UserCustomPlayerButtonPOC: React.FC<PlayerButtonPOCProps> = React.memo(
  ({onClick, ...props}) => {

    const {getPlayPauseButtonProps} = useContext(AudioPlayerContext);
    const {playStateIcon, ...playPauseButtonProps} = getPlayPauseButtonProps! && getPlayPauseButtonProps()

    return (
      <IconButton
        {...props}
        {...playPauseButtonProps}
        data-testid="audio-player-play-button"
        size={ButtonSize.Large}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
