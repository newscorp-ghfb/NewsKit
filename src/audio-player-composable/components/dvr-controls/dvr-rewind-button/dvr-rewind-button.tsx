import React from 'react';
import {IconButton} from '../../../../icon-button';
import {IconFilledDvrRewind} from '../../../../icons';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useButtonOverrides} from '../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {AudioPlayerDvrSeekButtonProps, DEFAULT_DVR_SEEK_STEP} from '../types';
import defaults from './defaults';

const ThemelessAudioPlayerDvrRewindButton = ({
  onSeek,
  currentPosition,
  rangeStart,
  liveEdge: _liveEdge,
  seekStep = DEFAULT_DVR_SEEK_STEP,
  isLive: _isLive,
  overrides,
  ref,
  ...rest
}: AudioPlayerDvrSeekButtonProps & {ref?: React.Ref<HTMLButtonElement>}) => {
  useAudioPlayerContext();
  const buttonOverrides = useButtonOverrides(
    {overrides},
    'audioPlayerDvrRewindButton',
  );

  const targetPosition = currentPosition - seekStep;
  const isDisabled = currentPosition <= rangeStart;

  const handleClick = () => {
    const clampedPosition = Math.max(targetPosition, rangeStart);
    onSeek(clampedPosition);
  };

  return (
    <IconButton
      ref={ref}
      data-testid="audio-player-dvr-rewind-button"
      aria-label={`Rewind ${seekStep / 1000} seconds`}
      size="medium"
      disabled={isDisabled}
      onClick={handleClick}
      overrides={buttonOverrides}
      {...rest}
    >
      <IconFilledDvrRewind overrides={{size: 'iconSize030'}} />
    </IconButton>
  );
};

export const AudioPlayerDvrRewindButton = withOwnTheme(
  ThemelessAudioPlayerDvrRewindButton,
)({
  defaults,
});
