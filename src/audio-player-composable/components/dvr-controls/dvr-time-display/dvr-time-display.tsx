import React from 'react';
import {getStylePreset, getTypographyPreset, styled} from '../../../../utils';
import {useAudioPlayerContext} from '../../../context';
import {withOwnTheme} from '../../../../utils/with-own-theme';
import {TextBlock} from '../../../../text-block';
import {AudioPlayerDvrTimeDisplayProps} from '../types';
import defaults from './defaults';
import stylePresets from './style-presets';

const formatDvrTime = (seconds: number): string => {
  const totalSeconds = Math.max(0, Math.floor(seconds));
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${m}:${String(s).padStart(2, '0')}`;
};

const StyledTextBlock = styled(TextBlock)<
  Pick<AudioPlayerDvrTimeDisplayProps, 'overrides'>
>`
  display: block;
  ${getStylePreset('audioPlayerDvrTimeDisplay', '')}
  ${getTypographyPreset('audioPlayerDvrTimeDisplay', '')};
`;

const ThemelessAudioPlayerDvrTimeDisplay = ({
  time,
  format,
  overrides = {},
  ref,
}: AudioPlayerDvrTimeDisplayProps & {ref?: React.Ref<HTMLSpanElement>}) => {
  useAudioPlayerContext();

  const seconds = Math.max(0, time / 1000);
  const formatFn = format || formatDvrTime;

  return (
    <StyledTextBlock
      ref={ref as React.Ref<HTMLParagraphElement>}
      as="span"
      overrides={overrides}
      data-testid="audio-player-dvr-time-display"
    >
      {formatFn(seconds)}
    </StyledTextBlock>
  );
};

export const AudioPlayerDvrTimeDisplay = withOwnTheme(
  ThemelessAudioPlayerDvrTimeDisplay,
)({
  defaults,
  stylePresets,
});
