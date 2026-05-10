import React from 'react';
import {IconButton} from '../../../../icon-button';
import {IconFilledForward10} from '../../../../icons';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useButtonOverrides} from '../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {AudioPlayerDvrSeekButtonProps, DEFAULT_DVR_SEEK_STEP} from '../types';
import defaults from './defaults';

const ThemelessAudioPlayerDvrForwardButton = ({
  onSeek,
  currentPosition,
  rangeStart: _rangeStart,
  liveEdge,
  seekStep = DEFAULT_DVR_SEEK_STEP,
  isLive = false,
  overrides,
  ref,
  ...rest
}: AudioPlayerDvrSeekButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  useAudioPlayerContext();
  const buttonOverrides = useButtonOverrides(
    {overrides},
    'audioPlayerDvrForwardButton',
  );

  const targetPosition = currentPosition + seekStep;
  const isDisabled = isLive || currentPosition >= liveEdge;

  const handleClick = () => {
    const clampedPosition = Math.min(targetPosition, liveEdge);
    onSeek(clampedPosition);
  };

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-dvr-forward-button"
      aria-label={`Fast forward ${seekStep / 1000} seconds`}
      size="medium"
      disabled={isDisabled}
      onClick={handleClick}
      overrides={buttonOverrides}
      {...rest}
    >
      <IconFilledForward10 />
    </IconButton>
  );
};

export const AudioPlayerDvrForwardButton = withOwnTheme(
  ThemelessAudioPlayerDvrForwardButton,
)({
  defaults,
});
