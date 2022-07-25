import React from 'react';
import {getStylePreset, getTypographyPreset, styled} from '../../../utils';
import {useAudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {AudioPlayerTimeDisplayProps} from './types';
import {TextBlock} from '../../../text-block';

const StyledTextBlock = styled(TextBlock)<AudioPlayerTimeDisplayProps>`
  display: block;
  ${getStylePreset(`audioPlayerTimeDisplay`, '')}
  ${getTypographyPreset(`audioPlayerTimeDisplay`, '')};
`;

const ThemelessTimeDisplay = React.forwardRef<
  HTMLParagraphElement,
  AudioPlayerTimeDisplayProps
>(({overrides = {}, format, ...restProps}, ref) => {
  const {getTimeDisplayProps} = useAudioPlayerContext();
  const {format: defaultFormat, currentTime, duration} = getTimeDisplayProps!();
  const formatFn = typeof format === 'function' ? format : defaultFormat;
  return (
    <StyledTextBlock
      ref={ref}
      as="span"
      overrides={overrides}
      data-testid="audio-player-time-display"
      {...restProps}
    >
      {formatFn({currentTime, duration})}
    </StyledTextBlock>
  );
});

export const AudioPlayerTimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
