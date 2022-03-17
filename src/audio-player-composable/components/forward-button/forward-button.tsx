import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonProps, ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import { IconFilledForward10 } from '../../../icons';

export interface ForwardButtonProps {
    size?: ButtonSize;
    onClick?: () => void;
    overrides?: ButtonProps['overrides'];
  }
  

export const AudioPlayerForwardButton: React.FC<ForwardButtonProps> = React.memo(
    ({onClick: consumerOnClick, ...props}) => {
      const {getForwardButtonProps} = useAudioPlayerContext();
      const {ariaLabel, onClick} =
      getForwardButtonProps! &&
      getForwardButtonProps({onClick: consumerOnClick});
  
      return (
        <IconButton
         data-testid="audio-player-forward"
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
