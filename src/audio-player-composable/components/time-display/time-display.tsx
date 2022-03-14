import React from 'react';
import {getStylePreset, getTypographyPreset, styled} from '../../../utils';
import {useAudioPlayerContext} from '../../context';
import {withOwnTheme} from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import {StyledLabelProps} from './types';
import {TextBlock} from '../../../text-block';

const StyledTextBlock = styled(TextBlock)<StyledLabelProps>`
  display: inline-block;
  ${getStylePreset(`timeDisplay`, '')}
  ${getTypographyPreset(`timeDisplay`, '')};
`;

export const ThemelessTimeDisplay = ({
  overrides = {},
  format,
}: StyledLabelProps) => {
  const {getTimeDisplayProps} = useAudioPlayerContext();
  const {format: defaultFormat, currentTime, duration} = getTimeDisplayProps!();
  const formatFn = typeof format === 'function' ? format : defaultFormat;
  return (
    <StyledTextBlock as="span" overrides={overrides}>
      {formatFn({currentTime, duration})}
    </StyledTextBlock>
  );
};

export const TimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
  defaults,
  stylePresets,
});
