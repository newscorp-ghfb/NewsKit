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
  ({overrides, ...props}) => {
    const {getForwardButtonProps} = useAudioPlayerContext();

    const theme = useTheme();

    const audioPlayerForwardOverrides: ButtonOverrides = {
      ...theme.componentDefaults.audioPlayerForwardButton,
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContex =
      getForwardButtonProps! && getForwardButtonProps(props);
    return (
      <IconButton
        data-testid="audio-player-forward-button"
        size={props.size || ButtonSize.Medium}
        overrides={audioPlayerForwardOverrides}
        {...propsFromContex}
      />
    );
  },
);

export const AudioPlayerForwardButton = withOwnTheme(
  ThemelessAudioPlayerForwardButton,
)({
  defaults,
});
