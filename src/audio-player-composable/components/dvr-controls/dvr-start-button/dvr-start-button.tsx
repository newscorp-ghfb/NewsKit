import React from 'react';
import {IconButton} from '../../../../icon-button';
import {IconFilledDvrStart} from '../../../../icons';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useButtonOverrides} from '../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {AudioPlayerDvrSeekButtonProps} from '../types';
import defaults from './defaults';

const ThemelessAudioPlayerDvrStartButton = ({
  onSeek,
  currentPosition,
  rangeStart,
  liveEdge: _liveEdge,
  seekStep: _seekStep,
  isLive: _isLive,
  overrides,
  ref,
  ...rest
}: AudioPlayerDvrSeekButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  useAudioPlayerContext();
  const buttonOverrides = useButtonOverrides(
    {overrides},
    'audioPlayerDvrStartButton',
  );

  const isDisabled = currentPosition <= rangeStart;

  const handleClick = () => {
    onSeek(rangeStart);
  };

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-dvr-start-button"
      aria-label="Go to start"
      size="medium"
      disabled={isDisabled}
      onClick={handleClick}
      overrides={buttonOverrides}
      {...rest}
    >
      <IconFilledDvrStart overrides={{size: 'iconSize030'}} />
    </IconButton>
  );
};

export const AudioPlayerDvrStartButton = withOwnTheme(
  ThemelessAudioPlayerDvrStartButton,
)({
  defaults,
});
