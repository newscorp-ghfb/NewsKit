import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';

const ThemelessAudioPlayerReplayButton: React.FC<AudioPlayerIconButtonProps> = React.memo(
  ({overrides, ...props}) => {
    const {getReplayButtonProps} = useAudioPlayerContext();

    const theme = useTheme();

    const audioPlayerReplayOverrides: ButtonOverrides = {
      ...theme.componentDefaults.audioPlayerReplayButton,
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContex =
      getReplayButtonProps! && getReplayButtonProps(props);
    return (
      <IconButton
        data-testid="audio-player-replay-button"
        size={props.size || ButtonSize.Medium}
        overrides={audioPlayerReplayOverrides}
        {...propsFromContex}
      />
    );
  },
);

export const AudioPlayerReplayButton = withOwnTheme(
  ThemelessAudioPlayerReplayButton,
)({
  defaults,
});
