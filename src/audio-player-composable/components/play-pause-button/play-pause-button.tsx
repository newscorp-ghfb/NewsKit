import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {PlayPauseButtonProps} from './types';

export const AudioPlayerPlayPauseButton: React.FC<PlayPauseButtonProps> = React.memo(
  ({onClick: consumerOnClick, ...props}) => {
    const {getPlayPauseButtonProps} = useAudioPlayerContext();

    const {playStateIcon, ariaLabel, ariaPressed, loading, onClick} =
      getPlayPauseButtonProps! &&
      getPlayPauseButtonProps({onClick: consumerOnClick});

    return (
      <IconButton
        data-testid="audio-player-play-pause-button"
        aria-label={ariaLabel}
        aria-pressed={ariaPressed}
        loading={loading}
        onClick={onClick}
        size={props.size || ButtonSize.Large}
        overrides={props.overrides}
        {...props}
      >
        {playStateIcon}
      </IconButton>
    );
  },
);
