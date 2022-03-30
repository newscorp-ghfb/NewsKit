import React from 'react';
import {getStylePreset, getTypographyPreset, styled} from '../../../utils';
import {useAudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {StyledLabelProps} from './types';
import {TextBlock} from '../../../text-block';

const StyledTextBlock = styled(TextBlock)<StyledLabelProps>`
  display: block;
  ${getStylePreset(`audioPlayerTimeDisplay`, '')}
  ${getTypographyPreset(`audioPlayerTimeDisplay`, '')};
`;

const ThemelessTimeDisplay = ({
  overrides = {},
  format,
  ...restProps
}: StyledLabelProps) => {
  const {getTimeDisplayProps} = useAudioPlayerContext();
  const {format: defaultFormat, currentTime, duration} = getTimeDisplayProps!();
  const formatFn = typeof format === 'function' ? format : defaultFormat;
  return (
    <StyledTextBlock as="span" overrides={overrides} {...restProps}>
      {formatFn({currentTime, duration})}
    </StyledTextBlock>
  );
};

export const AudioPlayerTimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
