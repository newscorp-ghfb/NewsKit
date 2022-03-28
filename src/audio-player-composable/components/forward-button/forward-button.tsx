import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';

const ThemelessAudioPlayerForwardButton: React.FC<AudioPlayerIconButtonProps> = React.memo(
  ({overrides, onClick: consumerOnClick, seconds, children, ...props}) => {
    const {getForwardButtonProps} = useAudioPlayerContext();

    const theme = useTheme();

    const audioPlayerForwardOverrides: ButtonOverrides = {
      ...theme.componentDefaults.audioPlayerForwardButton,
      ...filterOutFalsyProperties(overrides),
    };

    const {onClick, ariaLabel, defaultForwardIcon} =
      getForwardButtonProps! &&
      getForwardButtonProps({onClick: consumerOnClick, seconds});

    return (
      <IconButton
        data-testid="audio-player-forward-button"
        size={ButtonSize.Medium}
        overrides={audioPlayerForwardOverrides}
        onClick={onClick}
        aria-label={ariaLabel}
        {...props}
      >
        {children || defaultForwardIcon}
      </IconButton>
    );
  },
);

export const AudioPlayerForwardButton = withOwnTheme(
  ThemelessAudioPlayerForwardButton,
)({
  defaults,
});
