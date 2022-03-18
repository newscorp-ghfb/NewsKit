import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {IconFilledReplay10} from '../../../icons';
import { SkipButtonProps } from '../../types';


export const AudioPlayerBackwardButton: React.FC<SkipButtonProps> = React.memo(
  ({onClick: consumerOnClick, ...props}) => {
    const {getBackwardButtonProps} = useAudioPlayerContext();
    const {ariaLabel, onClick} =
      getBackwardButtonProps! &&
      getBackwardButtonProps({onClick: consumerOnClick});

    return (
      <IconButton
        data-testid="audio-player-forward"
        aria-label={ariaLabel}
        onClick={onClick}
        size={props.size || ButtonSize.Medium}
        overrides={props.overrides}
        {...props}
      >
        <IconFilledReplay10 />
      </IconButton>
    );
  },
);
