import React from 'react';
import {IconButton} from '../../../../icon-button';
import {IconFilledDvrLive} from '../../../../icons';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useButtonOverrides} from '../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {AudioPlayerDvrLiveButtonProps} from '../types';
import defaults from './defaults';

const ThemelessAudioPlayerDvrLiveButton = ({
  onGoLive,
  isLive,
  overrides,
  ref,
  ...rest
}: AudioPlayerDvrLiveButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  useAudioPlayerContext();
  const buttonOverrides = useButtonOverrides(
    {overrides},
    'audioPlayerDvrLiveButton',
  );

  const handleClick = () => {
    onGoLive();
  };

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-dvr-live-button"
      aria-label="Go to live"
      size="medium"
      disabled={isLive}
      onClick={handleClick}
      overrides={buttonOverrides}
      {...rest}
    >
      <IconFilledDvrLive overrides={{size: 'iconSize030'}} />
    </IconButton>
  );
};

export const AudioPlayerDvrLiveButton = withOwnTheme(
  ThemelessAudioPlayerDvrLiveButton,
)({
  defaults,
});
