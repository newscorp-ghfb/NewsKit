import React from 'react';
import {IconButton} from '../../../../icon-button';
import {IconFilledDvrRewind, IconFilledDvrRewind5} from '../../../../icons';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {useButtonOverrides} from '../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {
  AudioPlayerDvrSeekButtonProps,
  DEFAULT_DVR_SEEK_ICON_VARIANT,
  DEFAULT_DVR_SEEK_STEP,
} from '../types';
import defaults from './defaults';

const ThemelessAudioPlayerDvrRewindButton = ({
  onSeek,
  currentPosition,
  rangeStart,
  liveEdge: _liveEdge,
  seekStep = DEFAULT_DVR_SEEK_STEP,
  iconVariant = DEFAULT_DVR_SEEK_ICON_VARIANT,
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

  const RewindIcon =
    iconVariant === '5' ? IconFilledDvrRewind5 : IconFilledDvrRewind;

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
      <RewindIcon
        data-testid={`audio-player-dvr-rewind-icon-${iconVariant}`}
        overrides={{size: 'iconSize030'}}
      />
    </IconButton>
  );
};

export const AudioPlayerDvrRewindButton = withOwnTheme(
  ThemelessAudioPlayerDvrRewindButton,
)({
  defaults,
});
