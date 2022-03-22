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

const ThemelessAudioPlayerSkipPreviousButton: React.FC<AudioPlayerIconButtonProps> = React.memo(
  ({overrides, ...props}) => {
    const {getSkipPreviousButtonProps} = useAudioPlayerContext();

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerSkipPrevious'),
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getSkipPreviousButtonProps! && getSkipPreviousButtonProps(props);

    return (
      <IconButton
        data-testid="audio-player-skip-previous-button"
        size={ButtonSize.Medium}
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipPreviousButton = withOwnTheme(
  ThemelessAudioPlayerSkipPreviousButton,
)({defaults});
