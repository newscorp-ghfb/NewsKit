import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {IconFilledForward10} from '../../../icons';
import {SkipButtonProps} from '../replay-button/types';

export const AudioPlayerForwardButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick: consumerOnClick, ...props}) => {
    const {getForwardButtonProps} = useAudioPlayerContext();
    const {ariaLabel, onClick} =
      getForwardButtonProps! &&
      getForwardButtonProps({onClick: consumerOnClick});

    return (
      <IconButton
        data-testid="audio-player-forward-button"
        aria-label={ariaLabel}
        onClick={onClick}
        size={props.size || ButtonSize.Medium}
        overrides={props.overrides}
        {...props}
      >
        <IconFilledForward10 />
      </IconButton>
    );
  },
);
