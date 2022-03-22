import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {get} from '../../../utils/get';

const ThemelessAudioPlayerSkipNextButton: React.FC<AudioPlayerIconButtonProps> = React.memo(
  ({overrides, ...props}) => {
    const {getSkipNextButtonProps} = useAudioPlayerContext();

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerSkipNext'),
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getSkipNextButtonProps! && getSkipNextButtonProps(props);

    return (
      <IconButton
        data-testid="audio-player-skip-next-button"
        size={ButtonSize.Medium}
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipNextButton = withOwnTheme(
  ThemelessAudioPlayerSkipNextButton,
)({defaults});
